'use client';

import { ArrowLeft, Shield, Lock, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button-shadcn';
import { useRouter } from 'next/navigation';

export default function PrivacyPolicyPage() {
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
              <Lock className="w-5 h-5 text-[#714574]" />
              <span className="font-['Inter:Medium',_sans-serif] font-medium text-[#714574]">Privacy Policy</span>
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
              <Lock className="w-8 h-8 text-[#714574]" />
            </div>
            <h1 className="font-['Inter:Bold',_sans-serif] font-bold text-[#714574] text-3xl md:text-4xl mb-4">
              Him? Privacy Policy
            </h1>
            <p className="font-['Inter:Medium',_sans-serif] font-medium text-[#714574] opacity-70">
              Effective date: [●]
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="font-['Inter:Medium',_sans-serif] font-medium text-[#714574] leading-relaxed space-y-6">
              <p>
                <strong>Controller:</strong> Him Dating App Ltd, [address], [email]. For privacy queries contact [privacy@…]. If appointed, our DPO can be reached at [dpo@…].
              </p>

              <div className="bg-[#FFE0D3] rounded-2xl p-6 border border-[#714574]/20">
                <h2 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#714574] text-xl mb-4 flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  1. What we collect
                </h2>
                <div className="space-y-4">
                  <div>
                    <p><strong>Account & profile:</strong> name/alias, email, age confirmation, preferences.</p>
                  </div>
                  <div>
                    <p><strong>Content:</strong> posts, comments, tags/flags, alerts, limited metadata (timestamps, IDs).</p>
                  </div>
                  <div>
                    <p><strong>Media:</strong> uploads first land in a private quarantine store; we run safety checks before publication.</p>
                  </div>
                  <div>
                    <p><strong>Device/usage:</strong> IP, device/OS, app version, diagnostics, crash logs.</p>
                  </div>
                  <div>
                    <p><strong>Payments:</strong> handled by Apple/Google; we receive tokens/receipts, not card numbers.</p>
                  </div>
                  <div>
                    <p><strong>Identity verification (if enabled):</strong> we use a third‑party ID verification vendor; we receive a pass/fail token and minimal metadata. We do not store raw ID images unless required and then for the shortest possible period.</p>
                    <div className="flex items-center gap-2 text-sm opacity-70 mt-2">
                      <span>Reference:</span>
                      <a href="https://www.bbc.co.uk/news" className="text-[#714574] underline hover:no-underline">BBC News Feeds</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <section>
                  <h2 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#714574] text-xl mb-4">
                    2. Why we process (legal bases)
                  </h2>
                  <div className="space-y-3">
                    <p><strong>Contract (Art. 6(1)(b)):</strong> provide the Platform.</p>
                    <p><strong>Legitimate interests (Art. 6(1)(f)):</strong> safety; fraud prevention; analytics; product improvement.</p>
                    <p><strong>Consent (Art. 6(1)(a)):</strong> optional features, marketing communications.</p>
                    <p><strong>Legal obligation (Art. 6(1)(c)):</strong> Online Safety Act duties; IWF reporting for suspected CSAM.</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm opacity-70 mt-4">
                    <span>Reference:</span>
                    <a href="https://www.ofcom.org.uk" className="text-[#714574] underline hover:no-underline">www.ofcom.org.uk</a>
                  </div>
                </section>

                <section>
                  <h2 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#714574] text-xl mb-4">
                    3. Safety & moderation
                  </h2>
                  <p>
                    We use hash‑matching (e.g., Microsoft PhotoDNA, IWF), automated content‑safety models (e.g., AWS Rekognition) and human moderation to detect illegal/harmful content. Confirmed CSAM is reported to the IWF; we may preserve minimal evidence as required by law.
                  </p>
                  <div className="flex items-center gap-2 text-sm opacity-70 mt-4">
                    <span>Reference:</span>
                    <a href="https://www.ofcom.org.uk" className="text-[#714574] underline hover:no-underline">www.ofcom.org.uk</a>
                  </div>
                </section>

                <section>
                  <h2 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#714574] text-xl mb-4">
                    4. Sharing
                  </h2>
                  <div className="space-y-3">
                    <p><strong>Processors:</strong> Supabase (hosting), cloud infrastructure providers, analytics, IDV vendor, email provider—only as necessary under DPAs.</p>
                    <p><strong>Authorities:</strong> IWF, police, courts when legally required.</p>
                    <p><strong>No sale of personal data.</strong></p>
                  </div>
                </section>

                <section>
                  <h2 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#714574] text-xl mb-4">
                    5. International transfers
                  </h2>
                  <p>
                    If we transfer data outside the UK/EEA, we rely on UK Addendum to SCCs, adequacy decisions, or other lawful mechanisms.
                  </p>
                </section>

                <section>
                  <h2 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#714574] text-xl mb-4">
                    6. Security
                  </h2>
                  <p>
                    Encryption in transit and at rest, private buckets with pre‑signed URLs, least‑privilege access, key rotation, WAF, rate limiting, logging/alerting, regular security reviews and third‑party pen‑tests. We do not rely on "screenshot blocking" for privacy; it is not a security control.
                  </p>
                  <div className="flex items-center gap-2 text-sm opacity-70 mt-4">
                    <span>Reference:</span>
                    <a href="https://www.bbc.co.uk/news" className="text-[#714574] underline hover:no-underline">BBC News Feeds</a>
                  </div>
                </section>

                <section>
                  <h2 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#714574] text-xl mb-4">
                    7. Retention
                  </h2>
                  <p>
                    We retain the minimum necessary and delete/anonymise when no longer needed. Verification artefacts (if any) are deleted on a short schedule unless we must preserve under a lawful request.
                  </p>
                </section>

                <section>
                  <h2 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#714574] text-xl mb-4">
                    8. Your rights
                  </h2>
                  <p>
                    Access, rectification, erasure, restriction, objection, portability, withdraw consent. You may complain to the ICO.
                  </p>
                </section>

                <section>
                  <h2 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#714574] text-xl mb-4">
                    9. Breaches
                  </h2>
                  <p>
                    If a personal‑data breach creates risk to individuals, we will notify the ICO within 72 hours (where feasible) and inform affected users without undue delay as required.
                  </p>
                  <div className="flex items-center gap-2 text-sm opacity-70 mt-4">
                    <span>Reference:</span>
                    <a href="https://ico.org.uk" className="text-[#714574] underline hover:no-underline">ICO</a>
                  </div>
                </section>

                <section>
                  <h2 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#714574] text-xl mb-4">
                    10. Children
                  </h2>
                  <p>
                    18+ service only.
                  </p>
                </section>

                <section>
                  <h2 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#714574] text-xl mb-4">
                    11. Changes
                  </h2>
                  <p>
                    We will notify material changes.
                  </p>
                </section>
              </div>

              {/* Key Rights Summary */}
              <div className="bg-[#e4c5ee] rounded-2xl p-6 border border-[#714574]/20">
                <h3 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#714574] text-lg mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Your Key Rights Under UK GDPR
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#714574] rounded-full"></div>
                      <span className="text-sm">Right to access your data</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#714574] rounded-full"></div>
                      <span className="text-sm">Right to rectification</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#714574] rounded-full"></div>
                      <span className="text-sm">Right to erasure</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#714574] rounded-full"></div>
                      <span className="text-sm">Right to restrict processing</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#714574] rounded-full"></div>
                      <span className="text-sm">Right to object</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#714574] rounded-full"></div>
                      <span className="text-sm">Right to data portability</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#714574] rounded-full"></div>
                      <span className="text-sm">Right to withdraw consent</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#714574] rounded-full"></div>
                      <span className="text-sm">Right to complain to ICO</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-[#FFE0D3] rounded-2xl p-6 border border-[#714574]/20">
                <h3 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#714574] text-lg mb-4">
                  Contact Us About Privacy
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#714574] rounded-full flex items-center justify-center">
                      <span className="text-[#fdece5] text-sm">@</span>
                    </div>
                    <div>
                      <p className="text-sm">Privacy queries: [privacy@himdating.com]</p>
                      <p className="text-xs opacity-70">General privacy questions and requests</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#714574] rounded-full flex items-center justify-center">
                      <Shield className="w-4 h-4 text-[#fdece5]" />
                    </div>
                    <div>
                      <p className="text-sm">Data Protection Officer: [dpo@himdating.com]</p>
                      <p className="text-xs opacity-70">For formal data protection matters</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#714574] rounded-full flex items-center justify-center">
                      <Lock className="w-4 h-4 text-[#fdece5]" />
                    </div>
                    <div>
                      <p className="text-sm">ICO Registration: [Registration Number]</p>
                      <p className="text-xs opacity-70">Registered with the UK Information Commissioner's Office</p>
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
                Last updated: [●] • Version 1.0 • UK GDPR Compliant
              </div>
              <div className="flex gap-3">
                <Button variant="outline" className="text-[#714574] border-[#714574] hover:bg-[#FFE0D3]">
                  Download Policy
                </Button>
                <Button 
                  className="bg-[#714574] hover:bg-[#5a3761] text-white"
                  onClick={() => router.push('/terms')}
                >
                  View Terms of Service
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}