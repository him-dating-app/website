'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export default function RequestNewLinkPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    if (!email.trim()) {
      setStatus('error');
      setMessage('Please enter your email address.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    try {
      // TODO: This will need to call a Supabase edge function or API route
      // For now, we'll create a placeholder that shows what should happen
      const response = await fetch('/api/request-completion-token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim().toLowerCase() })
      });

      if (response.ok) {
        setStatus('success');
        setMessage('If your email has an approved registration, a new completion link has been sent!');
        setEmail('');
      } else {
        const errorData = await response.json().catch(() => ({}));
        setStatus('error');
        setMessage(errorData.message || 'Unable to send new link. Please contact support.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Network error. Please check your connection and try again.');
    }
  };

  return (
    <main className="min-h-screen bg-him-peach py-16">
      <Container>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-him-purple-dark">
            <div className="text-center mb-8">
              <div className="text-6xl mb-6">📧</div>
              <h1 className="text-3xl font-bold text-him-purple-dark mb-4">
                Request New Account Setup Link
              </h1>
              <p className="text-lg text-him-purple-dark/80">
                If your account setup link has expired or you can't find the email,
                enter your email address below to receive a new one.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-him-purple-dark mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter the email address you used for signup"
                  className="w-full px-4 py-3 border border-him-purple-dark/20 rounded-xl focus:ring-2 focus:ring-him-purple-active focus:border-him-purple-active text-him-purple-dark placeholder-him-purple-dark/50"
                  disabled={status === 'loading'}
                  required
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                className="w-full"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Sending New Link...' : 'Send New Link'}
              </Button>
            </form>

            {message && (
              <div className={`mt-6 p-4 rounded-xl ${
                status === 'success'
                  ? 'bg-green-100 border border-green-300 text-green-800'
                  : status === 'error'
                  ? 'bg-red-100 border border-red-300 text-red-800'
                  : ''
              }`}>
                <p className="text-center font-medium">{message}</p>
              </div>
            )}

            <div className="mt-8 pt-6 border-t border-him-purple-dark/20">
              <div className="bg-him-purple-light/20 rounded-2xl p-6">
                <h3 className="font-semibold text-him-purple-dark mb-3">
                  Important Notes:
                </h3>
                <ul className="space-y-2 text-sm text-him-purple-dark/80">
                  <li>• You can only request a new link if your account has been approved by our team</li>
                  <li>• New links are valid for 48 hours</li>
                  <li>• You can request up to 3 new links total</li>
                  <li>• Check your spam/junk folder if you don't see the email</li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-8 space-y-4">
              <p className="text-him-purple-dark/70 text-sm">
                Still having trouble?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:support@talkabouthim.uk?subject=Account%20Setup%20Help&body=Hello,%20I%20need%20help%20completing%20my%20account%20setup.%20My%20email%20is:%20">
                  <Button variant="secondary" className="text-sm">
                    Email Support
                  </Button>
                </a>
                <Link href="/">
                  <Button variant="secondary" className="text-sm">
                    Back to Home
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}