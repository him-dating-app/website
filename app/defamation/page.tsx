'use client';

import { ArrowLeft, Scale, FileText, AlertCircle, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button-shadcn';
import { useRouter } from 'next/navigation';

export default function DefamationPolicyPage() {
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
              <Scale className="w-5 h-5 text-[#714574]" />
              <span className="font-['Inter:Medium',_sans-serif] font-medium text-[#714574]">Defamation Policy</span>
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
              <Scale className="w-8 h-8 text-[#714574]" />
            </div>
            <h1 className="font-['Inter:Bold',_sans-serif] font-bold text-[#714574] text-3xl md:text-4xl mb-4">
              Defamation & Notice‑and‑Takedown Policy (UK)
            </h1>
            <p className="font-['Inter:Medium',_sans-serif] font-medium text-[#714574] opacity-70">
              Implementing Defamation Act 2013 s.5 and related UK regulations
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="font-['Inter:Medium',_sans-serif] font-medium text-[#714574] leading-relaxed space-y-8">
            <section>
                <h2 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#714574] text-xl mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  1. Purpose and scope
                </h2>
              <div className="bg-[#FFE0D3] rounded-2xl p-6 border border-[#714574]/20">
                <p>
                  This Policy implements Defamation Act 2013 s.5 and the Defamation (Operators of Websites) Regulations 2013 for statements posted by users on the Him? Platform.
                </p>
                <div className="flex items-center gap-2 text-sm opacity-70 mt-4">
                  <span>Reference:</span>
                  <a href="https://legislation.gov.uk" className="text-[#714574] underline hover:no-underline">Legislation.gov.uk</a>
                </div>
              </div>
              </section>

              <section>
                <h2 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#714574] text-xl mb-4 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-blue-600" />
                  2. Submitting a "Notice of Complaint"
                </h2>
                <p className="mb-4">
                  To complain about allegedly defamatory User Content, send an email to <strong>[legal@talkabouthim.uk]</strong> with subject <strong>"Defamation Notice"</strong>, including all of:
                </p>

                <div className="bg-[#e4c5ee] rounded-2xl p-6 border border-[#714574]/20">
                  <h3 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#714574] text-lg mb-4">
                    Required Information
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#714574] rounded-full flex items-center justify-center text-white text-xs flex-shrink-0 mt-1">1</div>
                      <p>Your full name, email and postal address; if on behalf of an organisation, your authority to act.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#714574] rounded-full flex items-center justify-center text-white text-xs flex-shrink-0 mt-1">2</div>
                      <p>The URL(s) or in‑app permalink(s)/ID(s) of the specific statement(s).</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#714574] rounded-full flex items-center justify-center text-white text-xs flex-shrink-0 mt-1">3</div>
                      <p>The full words complained of, and the meaning you say they convey.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#714574] rounded-full flex items-center justify-center text-white text-xs flex-shrink-0 mt-1">4</div>
                      <p>Why the words are defamatory of you (and why untrue), with any supporting evidence.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#714574] rounded-full flex items-center justify-center text-white text-xs flex-shrink-0 mt-1">5</div>
                      <p>Date and time of access; screen captures if available.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#714574] rounded-full flex items-center justify-center text-white text-xs flex-shrink-0 mt-1">6</div>
                      <p>Whether legal proceedings are intended.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#714574] rounded-full flex items-center justify-center text-white text-xs flex-shrink-0 mt-1">7</div>
                      <p>Whether you consent to disclosure of your notice to the poster.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#714574] text-xl mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-green-600" />
                  3. Our process (statutory timelines)
                </h2>
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-4 border-2 border-[#714574]/10">
                    <p><strong>Step 1:</strong> We will acknowledge receipt promptly and assess validity.</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border-2 border-[#714574]/10">
                    <p><strong>Step 2:</strong> If valid, we will contact the poster using the account details we hold, share your notice (or a summary), and ask whether the poster consents to their name and contact details being provided to you.</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border-2 border-[#714574]/10">
                    <p><strong>Step 3:</strong> If the poster does not consent, cannot be contacted, or does not respond within the statutory period, we will remove the content within the time limits prescribed by the Regulations and notify you.</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border-2 border-[#714574]/10">
                    <p><strong>Step 4:</strong> If the poster consents to disclosure, we will provide their details to you and may keep the content online pending resolution, subject to our independent assessment of legal risk and our policies.</p>
                  </div>
                  <div className="bg-[#FFE0D3] rounded-xl p-4 border border-[#714574]/20">
                    <p><strong>Note:</strong> We may remove content at our discretion without admission of liability.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#714574] text-xl mb-4 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  4. Abuse of process
                </h2>
                <p>
                  Notices made in bad faith, that are incomplete, vexatious, or fail to identify the impugned words may be rejected.
                </p>
              </section>

              <section>
                <h2 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#714574] text-xl mb-4">
                  5. Appeals / corrections
                </h2>
                <p>
                  We offer channels to request contextual updates, corrections, or right‑of‑reply content where proportionate.
                </p>
              </section>

              {/* Process Timeline */}
              <div className="bg-[#e4c5ee] rounded-2xl p-6 border border-[#714574]/20">
                <h3 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#714574] text-lg mb-6">
                  Typical Process Timeline
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">1</div>
                    <div className="flex-1">
                      <p className="font-semibold">Notice Receipt</p>
                      <p className="text-sm opacity-80">Acknowledgment within 48 hours</p>
                    </div>
                    <div className="text-sm opacity-60">0-2 days</div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">2</div>
                    <div className="flex-1">
                      <p className="font-semibold">Poster Contact</p>
                      <p className="text-sm opacity-80">Notification to original poster</p>
                    </div>
                    <div className="text-sm opacity-60">2-5 days</div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">3</div>
                    <div className="flex-1">
                      <p className="font-semibold">Response Period</p>
                      <p className="text-sm opacity-80">Statutory waiting period for poster response</p>
                    </div>
                    <div className="text-sm opacity-60">5-12 days</div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">4</div>
                    <div className="flex-1">
                      <p className="font-semibold">Resolution</p>
                      <p className="text-sm opacity-80">Content removal or contact details shared</p>
                    </div>
                    <div className="text-sm opacity-60">12-14 days</div>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-[#fdece5] rounded-xl">
                  <p className="text-sm">
                    <strong>Note:</strong> Timelines may vary based on complexity and statutory requirements. We may remove content earlier if it appears clearly unlawful or harmful.
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-[#FFE0D3] rounded-2xl p-6 border border-[#714574]/20">
                <h3 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#714574] text-lg mb-4">
                  Submitting Your Notice
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#714574] rounded-full flex items-center justify-center">
                      <Mail className="w-4 h-4 text-[#fdece5]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Email: [legal@talkabouthim.uk]</p>
                      <p className="text-xs opacity-70">Subject: "Defamation Notice"</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#714574] rounded-full flex items-center justify-center">
                      <FileText className="w-4 h-4 text-[#fdece5]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Include all required information</p>
                      <p className="text-xs opacity-70">Incomplete notices may be rejected</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#714574] rounded-full flex items-center justify-center">
                      <Clock className="w-4 h-4 text-[#fdece5]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Response within 48 hours</p>
                      <p className="text-xs opacity-70">We acknowledge all valid notices promptly</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Legal Notice */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#714574] text-lg mb-4">
                  Important Legal Notice
                </h3>
                <div className="space-y-3 text-sm">
                  <p>This policy is designed to comply with UK law, specifically the Defamation Act 2013 and related regulations.</p>
                  <p>Him? operates as a hosting provider under the Electronic Commerce (EC Directive) Regulations 2002 and may benefit from safe harbour protections when following this process.</p>
                  <p>For urgent legal matters or court orders, contact [legal@talkabouthim.uk] immediately with "URGENT LEGAL" in the subject line.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="mt-12 pt-8 border-t border-[#714574]/20">
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
              <div className="text-sm text-[#714574] opacity-70">
                Last updated: September 2025 • UK Defamation Act 2013 Compliant
              </div>
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  className="text-[#714574] border-[#714574] hover:bg-[#FFE0D3]"
                  onClick={() => router.push('/community')}
                >
                  Community Guidelines
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