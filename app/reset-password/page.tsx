'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

function tryOpenDeepLink(url: string) {
  // Works on most mobile browsers; Safari may require a user gesture
  const a = document.createElement('a');
  a.href = url;
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function ResetPasswordContent() {
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [appUrl, setAppUrl] = useState<string | null>(null);

  useEffect(() => {
    // Prefer PKCE code flow
    const code = searchParams.get('code');
    const tokenHash = searchParams.get('token_hash'); // Supabase verifyOtp links

    if (code) {
      const deepLink = `him://auth/resetpasswordconfirm?code=${encodeURIComponent(code)}`;
      setAppUrl(deepLink);
      tryOpenDeepLink(deepLink);
      setTimeout(() => setLoading(false), 1500);
      return;
    }

    if (tokenHash) {
      const deepLink = `him://auth/resetpasswordconfirm?token_hash=${encodeURIComponent(tokenHash)}`;
      setAppUrl(deepLink);
      tryOpenDeepLink(deepLink);
      setTimeout(() => setLoading(false), 1500);
      return;
    }

    // Legacy hash-token format: DO NOT forward tokens via URL.
    if (typeof window !== 'undefined' && window.location.hash) {
      const hash = new URLSearchParams(window.location.hash.slice(1));
      const accessToken = hash.get('access_token');
      const refreshToken = hash.get('refresh_token');
      if (accessToken && refreshToken) {
        // Safer path: ask the user to request a new link (or implement a server nonce exchange).
        setError('This reset link is from an older format. Please request a new reset link.');
        setLoading(false);
        return;
      }
    }

    // Supabase error propagation
    const errorCode = searchParams.get('error_code');
    const errorDescription = searchParams.get('error_description');
    if (errorCode) {
      setError(
        errorCode === 'otp_expired'
          ? 'This password reset link has expired. Please request a new one.'
          : errorDescription || 'Invalid reset link. Please try requesting a new one.'
      );
      setLoading(false);
      return;
    }

    // Nothing useful present
    setLoading(false);
  }, [searchParams]);

  // …(rendering exactly like you already have; keep your nice UI)…
  // If `appUrl` exists, show the “open app” guidance & copy box
  // If `error`, show the error card and “Request New Password Reset” button

  return (
    <main className="min-h-screen bg-him-peach py-16">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-him-purple-dark">
            {error ? (
              <>
                <div className="text-6xl mb-6">⚠️</div>
                <h1 className="text-3xl font-bold text-him-purple-dark mb-4">Reset Link Error</h1>
                <p className="text-lg text-him-purple-dark/80 mb-6">{error}</p>
                <Link href="/request-new-link">
                  <Button variant="primary">Request New Password Reset</Button>
                </Link>
              </>
            ) : loading ? (
              <>
                <div className="text-6xl mb-6">🔑</div>
                <h1 className="text-3xl font-bold text-him-purple-dark mb-4">Opening Him? App…</h1>
                <p className="text-lg text-him-purple-dark/80 mb-6">
                  We’re redirecting you to the Him? app to reset your password.
                </p>
                <div className="animate-pulse">
                  <div className="h-2 bg-him-purple-light rounded mb-4" />
                  <p className="text-sm text-him-purple-dark/60">Please wait a moment…</p>
                </div>
              </>
            ) : appUrl ? (
              <>
                <div className="text-6xl mb-6">📱</div>
                <h1 className="text-3xl font-bold text-him-purple-dark mb-4">Reset Your Password</h1>
                <p className="text-lg text-him-purple-dark/80 mb-6">
                  If the app didn’t open automatically, copy this link into your browser:
                </p>
                <div className="mt-2 p-3 bg-white rounded-lg border border-him-purple-dark/20 font-mono text-sm break-all">
                  {appUrl}
                </div>
              </>
            ) : (
              <>
                <div className="text-6xl mb-6">📩</div>
                <h1 className="text-3xl font-bold text-him-purple-dark mb-4">Password Reset</h1>
                <p className="text-lg text-him-purple-dark/80">
                  To reset your password, please request a new reset link from the app.
                </p>
                <Link href="/request-new-link" className="inline-block mt-6">
                  <Button variant="secondary">Request New Link</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </Container>
    </main>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div />}>
      <ResetPasswordContent />
    </Suspense>
  );
}