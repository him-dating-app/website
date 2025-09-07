'use client';

import { ArrowLeft, Shield, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button-shadcn';
import { useRouter } from 'next/navigation';

export default function TermsOfServicePage() {
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
              <FileText className="w-5 h-5 text-[#714574]" />
              <span className="font-['Inter:Medium',_sans-serif] font-medium text-[#714574]">Terms of Service</span>
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
              <Shield className="w-8 h-8 text-[#714574]" />
            </div>
            <h1 className="font-['Inter:Bold',_sans-serif] font-bold text-[#714574] text-3xl md:text-4xl mb-4">
              Him? Terms of Use
            </h1>
            <p className="font-['Inter:Medium',_sans-serif] font-medium text-[#714574] opacity-70">
              Effective date: [●]
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="font-['Inter:Medium',_sans-serif] font-medium text-[#714574] leading-relaxed space-y-6">
              <p>
                <strong>Operator:</strong> Him Dating App Ltd ("Him?", "we", "us"). These Terms form a binding agreement with any person who uses the Him? website, mobile application and related services (collectively, the "Platform"). If you do not agree, do not use the Platform.
              </p>

              <div className="bg-[#FFE0D3] rounded-2xl p-6 border border-[#714574]/20">
                <h2 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#714574] text-xl mb-4">
                  1. Defined terms
                </h2>
                <p>
                  "User Content" means any information, text, images, audio, video, links, tags, flags, ratings, feedback, messages or other material submitted or transmitted by users. "You/"your" means the person accessing the Platform. "Community Guidelines" means our acceptable‑use rules published on the Platform and updated from time to time.
                </p>
              </div>

              <div className="space-y-8">
                <section>
                  <h2 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#714574] text-xl mb-4">
                    2. Eligibility; account
                  </h2>
                  <p>
                    You must be 18+ and capable of forming a contract. You will provide accurate information and keep credentials secure. You are responsible for activity under your account. We may refuse, suspend or terminate accounts at our discretion where reasonably necessary to protect users, comply with law, or enforce these Terms.
                  </p>
                </section>

                <section>
                  <h2 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#714574] text-xl mb-4">
                    3. The Service
                  </h2>
                  <p>
                    Him? provides a women's dating safety and community discussion service enabling users to create posts, comment, tag, flag content, set alerts, and (where available) use private messaging. We may modify, suspend or discontinue any feature without liability.
                  </p>
                </section>

                <section>
                  <h2 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#714574] text-xl mb-4">
                    4. Community Guidelines; prohibited conduct
                  </h2>
                  <p>
                    You will comply with the Community Guidelines. Without limitation, you must not upload: illegal content; CSAM (which is reported to the IWF); nudity/pornographic/sexual content; hate or harassment; doxxing; threats; incitement; fraud; malware; or content that infringes rights, violates privacy, breaches confidence, or is defamatory. You must not impersonate others, interfere with the Platform, or circumvent access controls.
                  </p>
                </section>

                <section>
                  <h2 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#714574] text-xl mb-4">
                    5. User Content; responsibility; no editorial duty
                  </h2>
                  <div className="space-y-4">
                    <p>
                      <strong>(a)</strong> You are solely responsible for your User Content and for any consequences of posting or sharing it.
                    </p>
                    <p>
                      <strong>(b)</strong> Him? is a hosting provider of User Content and does not generally pre‑screen or endorse User Content. We may (but are not obliged to) monitor, review, remove, restrict or disable access to User Content at our reasonable discretion, including to comply with law or our policies. Nothing in this clause limits obligations under the Online Safety Act or other applicable laws.
                    </p>
                    <div className="flex items-center gap-2 text-sm opacity-70">
                      <span>Reference:</span>
                      <a href="https://legislation.gov.uk" className="text-[#714574] underline hover:no-underline">Legislation.gov.uk</a>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#714574] text-xl mb-4">
                    6. Representations & warranties about your content
                  </h2>
                  <p>
                    You represent and warrant that your User Content: (i) is truthful to your own experience and accurate to the best of your knowledge; (ii) is lawful, not misleading, and does not infringe any rights; (iii) does not identify a person as having committed a crime unless that is true and supported by public records; and (iv) complies with our policies. You acknowledge that opinions must be framed as opinions, not as statements of fact.
                  </p>
                </section>

                <section>
                  <h2 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#714574] text-xl mb-4">
                    7. Licence to Him?
                  </h2>
                  <p>
                    You grant Him? a worldwide, non‑exclusive, royalty‑free licence to host, store, cache, reproduce, publish, display, adapt, translate, moderate and distribute your User Content for the purpose of operating and improving the Platform, enforcing policies, and complying with legal obligations. This licence continues for archived copies and legal holds. You can delete content subject to legal/safety holds.
                  </p>
                </section>

                <section>
                  <h2 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#714574] text-xl mb-4">
                    8. Moderation; reporting; illegal content
                  </h2>
                  <p>
                    We use technical measures (e.g., hash‑matching such as Microsoft PhotoDNA and IWF Image Intercept) and AI classifiers plus human review to detect illegal or policy‑breaching content. We may remove or restrict content and/or suspend accounts. Confirmed CSAM is blocked and reported to the IWF; we cooperate with law enforcement as required.
                  </p>
                  <div className="flex items-center gap-2 text-sm opacity-70">
                    <span>Reference:</span>
                    <a href="https://www.ofcom.org.uk" className="text-[#714574] underline hover:no-underline">www.ofcom.org.uk</a>
                  </div>
                </section>

                <section>
                  <h2 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#714574] text-xl mb-4">
                    9. Defamation; notice‑and‑takedown (UK)
                  </h2>
                  <div className="space-y-4">
                    <p>
                      <strong>(a)</strong> Him? is an "operator of a website" within Defamation Act 2013 s.5. If you believe User Content defames you, please use our Defamation Notice Procedure (Schedule 1). Provided we did not post the statement and we comply with that procedure, including contacting the poster and acting within statutory time limits—we may rely on the operator's defence. We may remove content in our discretion without any admission of liability.
                    </p>
                    <p>
                      <strong>(b)</strong> Nothing in this clause prevents us from removing content sooner if it appears unlawful or egregiously harmful.
                    </p>
                    <div className="flex items-center gap-2 text-sm opacity-70">
                      <span>Reference:</span>
                      <a href="https://legislation.gov.uk" className="text-[#714574] underline hover:no-underline">Legislation.gov.uk</a>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#714574] text-xl mb-4">
                    10. Subscriptions; in‑app purchases; renewal; cancellations; refunds
                  </h2>
                  <div className="space-y-4">
                    <p>
                      <strong>(a)</strong> Certain features are provided via auto‑renewing subscriptions purchased through the Apple App Store or Google Play Store. Billing, renewal and refunds are governed by the relevant store terms. Cancel at least 24 hours before renewal via your store settings. Deleting the app does not cancel a subscription.
                    </p>
                    <p>
                      <strong>(b)</strong> Where UK consumer law provides a 14‑day withdrawal right for digital services, you acknowledge that you request immediate supply and waive the withdrawal right once performance begins; store rules still apply.
                    </p>
                    <p>
                      <strong>(c)</strong> We may change pricing and tiers with reasonable notice; changes apply from the next renewal.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#714574] text-xl mb-4">
                    11. Privacy; data security
                  </h2>
                  <p>
                    We process personal data per our Privacy Policy. We implement appropriate technical and organisational measures (encryption at rest and in transit; least‑privilege access; pre‑signed URLs; network segmentation; logging; incident response). If a personal‑data breach occurs, we act in accordance with UK GDPR (including ICO notification within 72 hours where required).
                  </p>
                  <div className="flex items-center gap-2 text-sm opacity-70">
                    <span>Reference:</span>
                    <a href="https://ico.org.uk" className="text-[#714574] underline hover:no-underline">ICO</a>
                  </div>
                </section>

                <section>
                  <h2 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#714574] text-xl mb-4">
                    12. Third‑party services
                  </h2>
                  <p>
                    The Platform may interoperate with third‑party services (e.g., Supabase, Apple, Google). We are not responsible for third‑party terms or content.
                  </p>
                </section>

                <section>
                  <h2 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#714574] text-xl mb-4">
                    13. Disclaimers; limitation of liability
                  </h2>
                  <div className="space-y-4">
                    <p>
                      <strong>(a)</strong> The Platform is provided "as is". We do not promise error‑free or uninterrupted service. We do not warrant the accuracy or reliability of User Content.
                    </p>
                    <p>
                      <strong>(b)</strong> To the fullest extent permitted by law, we exclude all implied warranties and limit liability for any indirect or consequential loss.
                    </p>
                    <p>
                      <strong>(c)</strong> We do not exclude liability for death or personal injury caused by negligence, fraud, or other liability that cannot lawfully be excluded.
                    </p>
                    <p>
                      <strong>(d)</strong> Subject to (c), our aggregate liability to you for all claims arising out of or relating to the Platform in any 12‑month period will not exceed the greater of £100 or the amounts paid by you to us in that period.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#714574] text-xl mb-4">
                    14. Indemnity by users
                  </h2>
                  <p>
                    You agree to defend, indemnify and hold harmless Him? and its officers, employees and contractors from any claims, damages, costs or expenses (including reasonable legal fees) arising out of or related to your User Content, your use of the Platform, or your breach of these Terms.
                  </p>
                </section>

                <section>
                  <h2 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#714574] text-xl mb-4">
                    15. Suspension; termination
                  </h2>
                  <p>
                    We may suspend or terminate access where reasonably necessary to protect users, comply with law, or enforce policy. On termination, your right to use the Platform ends immediately; some clauses survive (licences for archival/legal holds, limitations of liability, governing law, disputes).
                  </p>
                </section>

                <section>
                  <h2 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#714574] text-xl mb-4">
                    16. Changes
                  </h2>
                  <p>
                    We may update these Terms; material changes will be notified in‑app or by email. Continued use means acceptance.
                  </p>
                </section>

                <section>
                  <h2 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#714574] text-xl mb-4">
                    17. Governing law; venue
                  </h2>
                  <p>
                    English law governs. The courts of England and Wales have exclusive jurisdiction.
                  </p>
                </section>

                <div className="bg-[#e4c5ee] rounded-2xl p-6 border border-[#714574]/20">
                  <h2 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#714574] text-xl mb-4">
                    Schedule 1 – Defamation Notice Procedure (UK)
                  </h2>
                  <p>
                    (See the standalone policy below for the full procedure; this Schedule incorporates it by reference.)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="mt-12 pt-8 border-t border-[#714574]/20">
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
              <div className="text-sm text-[#714574] opacity-70">
                Last updated: September 2025 • Version 1.0
              </div>
              <div className="flex gap-3">
                <Button variant="outline" className="text-[#714574] border-[#714574] hover:bg-[#FFE0D3]">
                  Print Terms
                </Button>
                <Button 
                  className="bg-[#714574] hover:bg-[#5a3761] text-white"
                  onClick={() => router.push('/privacy')}
                >
                  View Privacy Policy
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}