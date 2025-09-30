'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

function ResetPasswordContent() {
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [appUrl, setAppUrl] = useState<string | null>(null);

  useEffect(() => {
    // ALWAYS check for hash fragments first (Supabase sends tokens this way)
    if (typeof window !== 'undefined' && window.location.hash) {
      const hash = window.location.hash;
      console.log('Hash fragment found:', hash);

      const params = new URLSearchParams(hash.substring(1));
      const accessToken = params.get('access_token');
      const refreshToken = params.get('refresh_token');
      const type = params.get('type');

      if (accessToken && refreshToken) {
        console.log('Tokens found in hash, redirecting to app');
        // Got tokens! Create deep link to app
        const deepLink = `him://auth/resetpasswordconfirm?access_token=${encodeURIComponent(accessToken)}&refresh_token=${encodeURIComponent(refreshToken)}&type=${type || 'recovery'}`;
        setAppUrl(deepLink);

        // Try to open app immediately
        try {
          const link = document.createElement('a');
          link.href = deepLink;
          link.style.display = 'none';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } catch (e) {
          console.warn('Failed to create app redirect link:', e);
        }

        // Show success state with fallback
        setTimeout(() => setLoading(false), 2000);
        return;
      }
    }

    // Check for error parameters from Supabase (when token is expired or invalid)
    const errorCode = searchParams.get('error_code');
    const errorDescription = searchParams.get('error_description');

    if (errorCode) {
      console.log('Error from Supabase:', errorCode, errorDescription);
      if (errorCode === 'otp_expired') {
        setError('This password reset link has expired. Please request a new one.');
      } else {
        setError(errorDescription || 'Invalid reset link. Please try requesting a new one.');
      }
      setLoading(false);
      return;
    }

    // No tokens or errors - user might have navigated here directly
    console.log('No tokens or errors found');
    setLoading(false);
  }, [searchParams]);

  if (error) {
    return (
      <main className="min-h-screen bg-him-peach py-16">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-him-purple-dark">
              <div className="text-6xl mb-6">⚠️</div>
              <h1 className="text-3xl font-bold text-him-purple-dark mb-4">
                Reset Link Error
              </h1>
              <p className="text-lg text-him-purple-dark/80 mb-6">
                {error}
              </p>
              <Link href="/request-new-link">
                <Button variant="primary" className="mb-4">
                  Request New Password Reset
                </Button>
              </Link>
              <br />
              <a href="mailto:support@talkabouthim.uk?subject=Password%20Reset%20Help">
                <Button variant="secondary">
                  Contact Support
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-him-peach py-16">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-him-purple-dark">
            {loading ? (
              <>
                <div className="text-6xl mb-6">🔑</div>
                <h1 className="text-3xl font-bold text-him-purple-dark mb-4">
                  Opening Him? App...
                </h1>
                <p className="text-lg text-him-purple-dark/80 mb-6">
                  We're redirecting you to the Him? app to reset your password.
                </p>
                <div className="animate-pulse">
                  <div className="h-2 bg-him-purple-light rounded mb-4"></div>
                  <p className="text-sm text-him-purple-dark/60">
                    Please wait a moment...
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="text-6xl mb-6">📱</div>
                <h1 className="text-3xl font-bold text-him-purple-dark mb-4">
                  {appUrl ? 'Reset Your Password' : 'Password Reset'}
                </h1>
                <p className="text-lg text-him-purple-dark/80 mb-6">
                  {appUrl
                    ? "If the Him? app didn't open automatically, please follow these steps:"
                    : "To reset your password, please request a new reset link from the app."
                  }
                </p>

                {appUrl && (
                  <>
                    <div className="text-left bg-him-purple-light/20 rounded-2xl p-6 mb-6">
                      <ol className="space-y-3 text-him-purple-dark">
                        <li className="flex items-start">
                          <span className="font-bold mr-3 text-him-purple-active">1.</span>
                          <span>Make sure the Him? app is installed on your device</span>
                        </li>
                        <li className="flex items-start">
                          <span className="font-bold mr-3 text-him-purple-active">2.</span>
                          <div>
                            <span>Copy and paste this link in your browser:</span>
                            <div className="mt-2 p-3 bg-white rounded-lg border border-him-purple-dark/20 font-mono text-sm break-all">
                              {appUrl}
                            </div>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="font-bold mr-3 text-him-purple-active">3.</span>
                          <span>Or download the Him? app below:</span>
                        </li>
                      </ol>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-4 mb-6">
                      <p className="text-sm text-yellow-800">
                        <strong>⏰ Note:</strong> This password reset link expires in 1 hour for security reasons.
                      </p>
                    </div>
                  </>
                )}

                <div className="space-y-4 mb-8">
                  <h3 className="text-xl font-semibold text-him-purple-dark">
                    Download Him? App
                  </h3>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="https://apps.apple.com/app/him"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="primary"
                        className="flex items-center justify-center gap-2 w-full"
                      >
                        📱 App Store
                      </Button>
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.himdatingappltd.him"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="primary"
                        className="flex items-center justify-center gap-2 w-full"
                      >
                        🛍️ Google Play
                      </Button>
                    </a>
                  </div>
                </div>

                <hr className="border-him-purple-dark/20 my-8" />

                <div className="space-y-4">
                  <p className="text-him-purple-dark/70">
                    Having trouble resetting your password?
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/request-new-link">
                      <Button variant="secondary">
                        Request New Link
                      </Button>
                    </Link>
                    <a href="mailto:support@talkabouthim.uk?subject=Password%20Reset%20Help">
                      <Button variant="secondary">
                        Contact Support
                      </Button>
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </Container>
    </main>
  );
}

function LoadingFallback() {
  return (
    <main className="min-h-screen bg-him-peach py-16">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-him-purple-dark">
            <div className="text-6xl mb-6">⏳</div>
            <h1 className="text-3xl font-bold text-him-purple-dark mb-4">
              Loading...
            </h1>
            <p className="text-lg text-him-purple-dark/80">
              Please wait while we prepare your password reset.
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <ResetPasswordContent />
    </Suspense>
  );
}