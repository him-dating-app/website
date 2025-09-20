'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export default function CompleteSignupPage() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      setError('No completion token provided');
      setLoading(false);
      return;
    }

    // Validate token format (should be alphanumeric with dashes/underscores, at least 32 chars)
    if (!/^[A-Za-z0-9_-]{32,}$/.test(token)) {
      setError('Invalid token format');
      setLoading(false);
      return;
    }

    // Try to open the app with the completion token
    const appUrl = `him://auth/complete-signup?token=${encodeURIComponent(token)}`;

    try {
      // Create a temporary link and click it (safer than window.location)
      const link = document.createElement('a');
      link.href = appUrl;
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (e) {
      console.warn('Failed to create app redirect link:', e);
    }

    // Show fallback options after 2 seconds if still on page
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [token]);

  if (error) {
    return (
      <main className="min-h-screen bg-him-peach py-16">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-him-purple-dark">
              <div className="text-6xl mb-6">⚠️</div>
              <h1 className="text-3xl font-bold text-him-purple-dark mb-4">
                Invalid Link
              </h1>
              <p className="text-lg text-him-purple-dark/80 mb-6">
                {error}
              </p>
              <p className="text-him-purple-dark/70 mb-8">
                If your link has expired, you can request a new one below.
              </p>
              <Link href="/request-new-link">
                <Button variant="primary" className="mb-4">
                  Request New Link
                </Button>
              </Link>
              <br />
              <a href="mailto:support@talkabouthim.uk">
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
                <div className="text-6xl mb-6">🚀</div>
                <h1 className="text-3xl font-bold text-him-purple-dark mb-4">
                  Opening Him? App...
                </h1>
                <p className="text-lg text-him-purple-dark/80 mb-6">
                  We're redirecting you to the Him? app to complete your account setup.
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
                  Complete Your Him? Account Setup
                </h1>
                <p className="text-lg text-him-purple-dark/80 mb-6">
                  If the Him? app didn't open automatically, please follow these steps:
                </p>

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
                          him://auth/complete-signup?token={token}
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-3 text-him-purple-active">3.</span>
                      <span>Or download the Him? app below:</span>
                    </li>
                  </ol>
                </div>

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
                    Having trouble? We're here to help:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/request-new-link">
                      <Button variant="secondary">
                        Request New Link
                      </Button>
                    </Link>
                    <a href="mailto:support@talkabouthim.uk?subject=Account%20Setup%20Help">
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