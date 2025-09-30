import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const url = new URL(request.url);

  // Log for debugging
  console.log('Auth callback received:', {
    searchParams: Object.fromEntries(url.searchParams),
    hash: url.hash,
    pathname: url.pathname
  });

  // Check for errors first
  const error = url.searchParams.get('error');
  const errorCode = url.searchParams.get('error_code');
  const errorDescription = url.searchParams.get('error_description');

  if (error || errorCode) {
    console.log('Auth callback error:', { error, errorCode, errorDescription });

    // Handle specific error cases
    if (errorCode === 'otp_expired') {
      return NextResponse.redirect(
        new URL('/reset-password?error=expired&message=' + encodeURIComponent('This password reset link has expired. Please request a new one.'), url.origin)
      );
    }

    // Generic error redirect
    return NextResponse.redirect(
      new URL(`/reset-password?error=${errorCode || 'unknown'}&message=${encodeURIComponent(errorDescription || 'Invalid reset link')}`, url.origin)
    );
  }

  // Look for tokens in search params (Supabase sometimes puts them here)
  const accessToken = url.searchParams.get('access_token');
  const refreshToken = url.searchParams.get('refresh_token');
  const type = url.searchParams.get('type');

  // Also check for token_hash for newer Supabase flows
  const tokenHash = url.searchParams.get('token_hash');

  if (accessToken && refreshToken) {
    console.log('Tokens found, redirecting to app');

    // Create deep link to app with tokens
    const appUrl = `him://auth/resetpasswordconfirm?access_token=${encodeURIComponent(accessToken)}&refresh_token=${encodeURIComponent(refreshToken)}&type=${type || 'recovery'}`;

    // Redirect to a page that will open the app
    return NextResponse.redirect(
      new URL(`/reset-password?redirect=${encodeURIComponent(appUrl)}&success=true`, url.origin)
    );
  }

  // Handle token_hash flow (for email confirmations)
  if (tokenHash && type) {
    console.log('Token hash found, redirecting based on type:', type);

    if (type === 'recovery') {
      // For password recovery, we need to handle this differently
      // The token_hash needs to be exchanged for a session
      const appUrl = `him://auth/resetpasswordconfirm?token_hash=${encodeURIComponent(tokenHash)}&type=recovery`;

      return NextResponse.redirect(
        new URL(`/reset-password?redirect=${encodeURIComponent(appUrl)}&token_hash=${tokenHash}`, url.origin)
      );
    } else if (type === 'signup' || type === 'email') {
      // For email verification
      const appUrl = `him://auth/email-verification?token_hash=${encodeURIComponent(tokenHash)}&type=${type}`;

      return NextResponse.redirect(
        new URL(`/verify-email?redirect=${encodeURIComponent(appUrl)}`, url.origin)
      );
    }
  }

  // If we have a hash fragment, it might contain the tokens
  // Note: Hash fragments are not sent to the server, so this won't work
  // We need to handle this client-side
  if (!accessToken && !refreshToken && !tokenHash) {
    console.log('No tokens found in callback, redirecting to handle client-side');

    // Redirect to a page that can handle hash fragments client-side
    return NextResponse.redirect(
      new URL('/reset-password?check_hash=true', url.origin)
    );
  }

  // No tokens found at all - show error
  console.log('No tokens or hash found in callback');
  return NextResponse.redirect(
    new URL('/reset-password?error=no_token&message=' + encodeURIComponent('No authentication token was provided. Please try requesting a new password reset.'), url.origin)
  );
}