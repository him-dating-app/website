'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

const APP_ACTIONS = {
  signup: {
    title: 'Continue Signup',
    description: 'Redirecting you to continue the signup process...',
    appUrl: 'him://auth/signup',
    emoji: '📝'
  },
  verified: {
    title: 'Account Verified!',
    description: 'Your account has been verified. Opening the Him? app...',
    appUrl: 'him://verified',
    emoji: '✅'
  },
  'retry-verification': {
    title: 'Retry Verification',
    description: 'Redirecting you to retry the verification process...',
    appUrl: 'him://retry-verification',
    emoji: '🔄'
  }
} as const;

export default function AppRedirectPage() {
  const searchParams = useSearchParams();
  const action = searchParams.get('action') as keyof typeof APP_ACTIONS | null;
  const [loading, setLoading] = useState(true);

  const actionConfig = action && APP_ACTIONS[action] ? APP_ACTIONS[action] : null;

  useEffect(() => {
    if (actionConfig) {
      // Try to open the app with the specified action
      try {
        const link = document.createElement('a');
        link.href = actionConfig.appUrl;
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (e) {
        console.warn('Failed to create app redirect link:', e);
      }

      // Show fallback options after 2 seconds
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } else {
      setLoading(false);
    }
  }, [actionConfig]);

  if (!actionConfig) {
    return (
      <main className="min-h-screen bg-him-peach py-16">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-him-purple-dark">
              <div className="text-6xl mb-6">⚠️</div>
              <h1 className="text-3xl font-bold text-him-purple-dark mb-4">
                Invalid Redirect
              </h1>
              <p className="text-lg text-him-purple-dark/80 mb-6">
                The redirect action is missing or invalid.
              </p>
              <Link href="/">
                <Button variant="primary">
                  Go to Home
                </Button>
              </Link>
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
                <div className="text-6xl mb-6">{actionConfig.emoji}</div>
                <h1 className="text-3xl font-bold text-him-purple-dark mb-4">
                  {actionConfig.title}
                </h1>
                <p className="text-lg text-him-purple-dark/80 mb-6">
                  {actionConfig.description}
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
                  Open Him? App
                </h1>
                <p className="text-lg text-him-purple-dark/80 mb-6">
                  If the Him? app didn't open automatically, please:
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
                          {actionConfig.appUrl}
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
                    Need help?
                  </p>
                  <a href="mailto:support@talkabouthim.uk?subject=App%20Redirect%20Help">
                    <Button variant="secondary">
                      Contact Support
                    </Button>
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </Container>
    </main>
  );
}