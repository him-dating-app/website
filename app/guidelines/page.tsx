"use client"

import { ArrowLeft, Shield, Users, Flag, Eye, Heart, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button-shadcn';
import { useRouter } from 'next/navigation';

export default function CommunityGuidelinesPage() {
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
              <Users className="w-5 h-5 text-[#714574]" />
              <span className="font-['Inter:Medium',_sans-serif] font-medium text-[#714574]">Community Guidelines</span>
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
              <Users className="w-8 h-8 text-[#714574]" />
            </div>
            <h1 className="font-['Inter:Bold',_sans-serif] font-bold text-[#714574] text-3xl md:text-4xl mb-4">
              Him? Community Guidelines
            </h1>
            <p className="font-['Inter:Medium',_sans-serif] font-medium text-[#714574] opacity-70">
              Effective Date: [Insert Date]
            </p>
          </div>

          {/* Welcome Section */}
          <div className="bg-[#FFE0D3] rounded-2xl p-6 border border-[#714574]/20 mb-8">
            <h2 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#714574] text-xl mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5" />
              Welcome to Him?
            </h2>
            <p className="font-['Inter:Medium',_sans-serif] font-medium text-[#714574] leading-relaxed">
              Him? is a women's dating safety and community discussion app. Our mission is to provide a supportive, safe, and honest space where women can share their experiences, flag concerns, and build trust together. To keep our community safe, every user must follow these guidelines.
            </p>
          </div>

          {/* Guidelines Content */}
          <div className="prose prose-lg max-w-none">
            <div className="font-['Inter:Medium',_sans-serif] font-medium text-[#714574] leading-relaxed space-y-8">

              <section>
                <h2 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#714574] text-xl mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-pink-600" />
                  1. Be Honest & Respectful
                </h2>
                <div className="space-y-3">
                  <p>• Only share first-hand experiences. Do not spread rumours, hearsay, or second-hand claims.</p>
                  <p>• Clearly separate opinions ("I felt unsafe…") from statements of fact ("This person did X on Y date").</p>
                  <p>• Treat all members with respect, even when disagreeing.</p>
                </div>
              </section>

              <section>
                <h2 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#714574] text-xl mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                  2. Zero Tolerance for Illegal Content
                </h2>
                <div className="space-y-3">
                  <p><strong>Child Sexual Abuse Material (CSAM):</strong> Strictly prohibited. Any suspected CSAM is blocked immediately and reported to the Internet Watch Foundation (IWF).</p>
                  <p><strong>Nudity, pornography, or sexually explicit content:</strong> Not allowed. Him? is not an NSFW platform.</p>
                  <p><strong>Illegal activity</strong> of any kind (including drugs, violence, fraud, or hate speech) is prohibited.</p>
                </div>
              </section>

              <section>
                <h2 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#714574] text-xl mb-4 flex items-center gap-2">
                  <Eye className="w-5 h-5 text-blue-600" />
                  3. Protect Privacy — Yours and Others'
                </h2>
                <div className="space-y-3">
                  <p>• Do not post personal contact details (addresses, phone numbers, emails, social media handles).</p>
                  <p>• Do not "doxx" or attempt to identify individuals beyond what is already in your own experience.</p>
                  <p>• No impersonation or pretending to be another person.</p>
                </div>
              </section>

              <section>
                <h2 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#714574] text-xl mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#714574]" />
                  4. Harassment & Abuse
                </h2>
                <div className="space-y-3">
                  <p>• Harassment, bullying, intimidation, hate speech, or discriminatory remarks will not be tolerated.</p>
                  <p>• Do not encourage violence or threats against anyone.</p>
                  <p>• Targeting someone repeatedly or maliciously is grounds for suspension or banning.</p>
                </div>
              </section>

              <section>
                <h2 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#714574] text-xl mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-green-600" />
                  5. Responsible Sharing
                </h2>
                <div className="space-y-3">
                  <p>• Posts should focus on dating safety and experiences — not revenge, shaming, or gossip.</p>
                  <p>• Think before you post: would sharing this help the community stay safer?</p>
                  <p>• Avoid sensational, inflammatory, or exaggerated claims.</p>
                </div>
              </section>

              <section>
                <h2 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#714574] text-xl mb-4 flex items-center gap-2">
                  <Flag className="w-5 h-5 text-orange-600" />
                  6. Moderation & Reporting
                </h2>
                <div className="space-y-3">
                  <p>• All uploads (including images) are checked by automated tools (IWF Image Intercept, Microsoft PhotoDNA, AI classifiers) and may be reviewed by human moderators.</p>
                  <p>• If you see content that violates these rules, use the flag/report button.</p>
                  <p>• Our team reviews reports promptly and may remove content or suspend accounts.</p>
                  <p>• Repeated or serious violations may lead to a permanent ban.</p>
                </div>
              </section>

              <section>
                <h2 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#714574] text-xl mb-4">
                  7. Enforcement & Consequences
                </h2>
                <div className="space-y-3">
                  <p>• Breaking these rules can result in warnings, content removal, temporary suspension, or permanent account closure.</p>
                  <p>• In cases of illegal content (e.g. CSAM, threats, harassment), we will report to the IWF or relevant authorities.</p>
                  <p>• We may preserve and share information with law enforcement if required by law.</p>
                </div>
              </section>

              <section>
                <h2 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#714574] text-xl mb-4">
                  8. Appeals & Corrections
                </h2>
                <div className="space-y-3">
                  <p>• If your content is removed, you can request a review.</p>
                  <p>• If you are the subject of a post and believe it is false or defamatory, you can file a Notice of Complaint under our Defamation Policy.</p>
                  <p>• You may also request a correction or contextual update where appropriate.</p>
                </div>
              </section>

              <div className="bg-[#e4c5ee] rounded-2xl p-6 border border-[#714574]/20">
                <h2 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#714574] text-xl mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  9. Protecting the Community
                </h2>
                <div className="space-y-3">
                  <p>Him? is a space by women, for women. Keep our community safe, supportive, and focused on our core purpose: sharing experiences to protect each other.</p>
                  <p><strong>Violations undermine trust and safety — help us by upholding these rules.</strong></p>
                </div>
              </div>

              {/* Quick Reference */}
              <div className="bg-[#FFE0D3] rounded-2xl p-6 border border-[#714574]/20">
                <h3 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#714574] text-lg mb-4">
                  Quick Reference: What to Report
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-sm">Illegal content (CSAM, threats)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-sm">Harassment or bullying</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-sm">Personal information sharing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-sm">Impersonation</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm">Spam or off-topic content</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm">Misinformation or rumours</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">Copyright violations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">Suspected defamation</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white rounded-2xl p-6 border-2 border-[#714574]/20">
                <h3 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#714574] text-lg mb-4">
                  Need Help or Have Questions?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#714574] rounded-full flex items-center justify-center">
                      <Flag className="w-4 h-4 text-[#fdece5]" />
                    </div>
                    <div>
                      <p className="text-sm">Report violations: Use the in-app report button</p>
                      <p className="text-xs opacity-70">Available on every post and message</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#714574] rounded-full flex items-center justify-center">
                      <span className="text-[#fdece5] text-sm">@</span>
                    </div>
                    <div>
                      <p className="text-sm">Community support: [community@himdating.com]</p>
                      <p className="text-xs opacity-70">For general questions about guidelines</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#714574] rounded-full flex items-center justify-center">
                      <Shield className="w-4 h-4 text-[#fdece5]" />
                    </div>
                    <div>
                      <p className="text-sm">Legal matters: [legal@himdating.com]</p>
                      <p className="text-xs opacity-70">For defamation notices and legal concerns</p>
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
                Last updated: [Insert Date] • Version 1.0
              </div>
              <div className="flex gap-3">
                <Button variant="outline" className="text-[#714574] border-[#714574] hover:bg-[#FFE0D3]">
                  Download Guidelines
                </Button>
                <Button 
                  className="bg-[#714574] hover:bg-[#5a3761] text-white"
                  onClick={() => router.push('/defamation')}
                >
                  Defamation Policy
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}