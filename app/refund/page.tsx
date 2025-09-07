"use client"

import { ArrowLeft, CreditCard, RefreshCw, Smartphone, Apple, ExternalLink, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button-shadcn';
import { useRouter } from 'next/navigation';

export default function RefundPolicyPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#fdece5]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#fdece5]/95 backdrop-blur-sm border-b border-[#714574]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="sm"
                className="text-[#714574] hover:bg-[#FFE0D3] hover:text-[#714574]"
                onClick={() => router.push('/')}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#714574] text-xl tracking-[-0.5px]">
                HIM?
              </div>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-[#714574]" />
              <span className="font-['Inter:Medium',_sans-serif] font-medium text-[#714574]">Refund Policy</span>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-3xl shadow-lg border border-[#714574]/10 p-8 md:p-12">
          {/* Title */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FFE0D3] rounded-full mb-6">
              <CreditCard className="w-8 h-8 text-[#714574]" />
            </div>
            <h1 className="font-['Inter:Bold',_sans-serif] font-bold text-[#714574] text-3xl md:text-4xl mb-4">
              Refund & Subscription Policy
            </h1>
            <p className="font-['Inter:Medium',_sans-serif] font-medium text-[#714574] opacity-70">
              How billing, refunds, and subscriptions work through app stores
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="font-['Inter:Medium',_sans-serif] font-medium text-[#714574] leading-relaxed space-y-8">
              <section>
                <h2 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#714574] text-xl mb-4 flex items-center gap-2">
                  <Smartphone className="w-5 h-5" />
                  1. Where purchases occur
                </h2>
              <div className="bg-[#FFE0D3] rounded-2xl p-6 border border-[#714574]/20">
                <p>
                  All purchases are via Apple App Store or Google Play. Those platforms' terms govern billing, renewal, and refunds.
                </p>
              </div>
              </section>

              <section>
                <h2 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#714574] text-xl mb-4 flex items-center gap-2">
                  <RefreshCw className="w-5 h-5 text-green-600" />
                  2. Auto‑renewal and cancellation
                </h2>
                <div className="bg-[#e4c5ee] rounded-2xl p-6 border border-[#714574]/20">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#714574] rounded-full flex items-center justify-center text-white text-xs flex-shrink-0 mt-1">!</div>
                      <p><strong>Important:</strong> Subscriptions auto‑renew unless cancelled in your store account at least 24 hours before renewal.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0 mt-1">⚠</div>
                      <p><strong>Note:</strong> Deleting the app does not cancel your subscription.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#714574] text-xl mb-4 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-blue-600" />
                  3. Refunds
                </h2>
                <p className="mb-4">
                  Refunds are processed by Apple or Google per their policies. Him? cannot issue store refunds directly.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Apple Refunds */}
                  <div className="bg-gray-900 rounded-2xl p-6 text-white">
                    <div className="flex items-center gap-3 mb-4">
                      <Apple className="w-6 h-6" />
                      <h3 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-lg">
                        Apple App Store
                      </h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <ExternalLink className="w-4 h-4 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-semibold mb-1">Request a refund</p>
                          <p className="text-xs opacity-80">reportaproblem.apple.com</p>
                        </div>
                      </div>
                      <div className="text-xs space-y-1 opacity-70">
                        <p>• Sign in with your Apple ID</p>
                        <p>• Find your Him? purchase</p>
                        <p>• Select "Report a Problem"</p>
                        <p>• Choose your reason and submit</p>
                      </div>
                    </div>
                  </div>

                  {/* Google Play Refunds */}
                  <div className="bg-[#4285f4] rounded-2xl p-6 text-white">
                    <div className="flex items-center gap-3 mb-4">
                      <Smartphone className="w-6 h-6" />
                      <h3 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-lg">
                        Google Play Store
                      </h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <ExternalLink className="w-4 h-4 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-semibold mb-1">Request a refund</p>
                          <p className="text-xs opacity-80">Google Play Support</p>
                        </div>
                      </div>
                      <div className="text-xs space-y-1 opacity-70">
                        <p>• Open Google Play Store</p>
                        <p>• Go to Account → Purchase history</p>
                        <p>• Find Him? purchase</p>
                        <p>• Select "Request a refund"</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#714574] text-xl mb-4">
                  4. UK consumer law
                </h2>
                <div className="bg-white rounded-2xl p-6 border-2 border-[#714574]/10">
                  <div className="space-y-3">
                    <p>For digital services, statutory withdrawal rights may not apply once immediate performance begins and you consent.</p>
                    <p><strong>However:</strong> Store rules prevail where they grant additional rights.</p>
                    <div className="bg-[#FFE0D3] rounded-xl p-4 border border-[#714574]/20">
                      <p className="text-sm">
                        <strong>What this means:</strong> Apple and Google may offer refunds even where UK law doesn't require them. Their policies are more generous than the minimum legal requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#714574] text-xl mb-4 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-purple-600" />
                  5. Contact
                </h2>
                <p className="mb-4">
                  [support@talkabouthim.uk] for help accessing features; we will assist you with store processes.
                </p>
              </section>

              {/* How to Cancel Guide */}
              <div className="bg-[#e4c5ee] rounded-2xl p-6 border border-[#714574]/20">
                <h3 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#714574] text-lg mb-6 flex items-center gap-2">
                  <RefreshCw className="w-5 h-5" />
                  How to Cancel Your Subscription
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* iPhone/iPad */}
                  <div className="bg-[#fdece5] rounded-xl p-4">
                    <h4 className="font-semibold text-[#714574] mb-3 flex items-center gap-2">
                      <Apple className="w-4 h-4" />
                      iPhone/iPad
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <div className="w-4 h-4 bg-[#714574] rounded-full flex items-center justify-center text-white text-xs flex-shrink-0 mt-0.5">1</div>
                        <p>Open Settings app</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-4 h-4 bg-[#714574] rounded-full flex items-center justify-center text-white text-xs flex-shrink-0 mt-0.5">2</div>
                        <p>Tap your name at the top</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-4 h-4 bg-[#714574] rounded-full flex items-center justify-center text-white text-xs flex-shrink-0 mt-0.5">3</div>
                        <p>Tap "Subscriptions"</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-4 h-4 bg-[#714574] rounded-full flex items-center justify-center text-white text-xs flex-shrink-0 mt-0.5">4</div>
                        <p>Find Him? and tap "Cancel"</p>
                      </div>
                    </div>
                  </div>

                  {/* Android */}
                  <div className="bg-[#fdece5] rounded-xl p-4">
                    <h4 className="font-semibold text-[#714574] mb-3 flex items-center gap-2">
                      <Smartphone className="w-4 h-4" />
                      Android
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <div className="w-4 h-4 bg-[#714574] rounded-full flex items-center justify-center text-white text-xs flex-shrink-0 mt-0.5">1</div>
                        <p>Open Google Play Store</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-4 h-4 bg-[#714574] rounded-full flex items-center justify-center text-white text-xs flex-shrink-0 mt-0.5">2</div>
                        <p>Tap Profile icon → Payments & subscriptions</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-4 h-4 bg-[#714574] rounded-full flex items-center justify-center text-white text-xs flex-shrink-0 mt-0.5">3</div>
                        <p>Tap "Subscriptions"</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-4 h-4 bg-[#714574] rounded-full flex items-center justify-center text-white text-xs flex-shrink-0 mt-0.5">4</div>
                        <p>Find Him? and tap "Cancel"</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-[#FFE0D3] rounded-xl border border-[#714574]/20">
                  <p className="text-sm">
                    <strong>Important:</strong> Cancel at least 24 hours before your next billing date to avoid being charged for the next period.
                  </p>
                </div>
              </div>

              {/* Common Questions */}
              <div className="bg-[#FFE0D3] rounded-2xl p-6 border border-[#714574]/20">
                <h3 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#714574] text-lg mb-6">
                  Common Questions
                </h3>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-4 border border-[#714574]/10">
                    <h4 className="font-semibold text-[#714574] mb-2">Q: I deleted the app, am I still being charged?</h4>
                    <p className="text-sm">A: Yes, deleting the app doesn't cancel your subscription. You need to cancel through your App Store or Google Play account settings.</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 border border-[#714574]/10">
                    <h4 className="font-semibold text-[#714574] mb-2">Q: Can Him? give me a refund directly?</h4>
                    <p className="text-sm">A: No, all refunds must be processed through Apple or Google. We don't handle payments directly.</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 border border-[#714574]/10">
                    <h4 className="font-semibold text-[#714574] mb-2">Q: How do I get help with billing issues?</h4>
                    <p className="text-sm">A: Contact [support@talkabouthim.uk] and we'll guide you through the store's refund process.</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 border border-[#714574]/10">
                    <h4 className="font-semibold text-[#714574] mb-2">Q: When do refunds typically get processed?</h4>
                    <p className="text-sm">A: Apple: 48 hours to 60 days. Google: Usually within 15 minutes, but can take up to 4 business days.</p>
                  </div>
                </div>
              </div>

              {/* Contact Support */}
              <div className="bg-[#e4c5ee] rounded-2xl p-6 border border-[#714574]/20">
                <h3 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#714574] text-lg mb-4">
                  Need Help with Your Subscription?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#714574] rounded-full flex items-center justify-center">
                      <span className="text-[#fdece5] text-sm">@</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Email: [support@talkabouthim.uk]</p>
                      <p className="text-xs opacity-70">We'll help you navigate the store refund process</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#714574] rounded-full flex items-center justify-center">
                      <HelpCircle className="w-4 h-4 text-[#fdece5]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Include in your email:</p>
                      <p className="text-xs opacity-70">Your App Store/Google Play receipt or order number</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="mt-12 pt-8 border-t border-[#714574]/20">
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
              <div className="text-sm text-[#714574] opacity-70">
                Last updated: September 2025 • App Store Policy Compliant
              </div>
              <div className="flex gap-3">
                <Button variant="outline" className="text-[#714574] border-[#714574] hover:bg-[#FFE0D3]">
                  Download Policy
                </Button>
                <Button 
                  className="bg-[#714574] hover:bg-[#5a3761] text-white"
                  onClick={() => router.push('/terms')}
                >
                  Terms of Service
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}