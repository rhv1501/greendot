import Breadcrumbs from "@/components/Breadcrumbs";
import { FAQ_ITEMS } from "@/lib/data/faq";
import { generateFAQSchema } from "@/lib/seo";
import Link from "next/link";
import { ArrowUpRight, HelpCircle, AlertCircle } from "lucide-react";

export const metadata = {
  title: "Source FAQ Bank | GreenDot Build & Interiors Chennai",
  description: "Verified source questions & answers regarding prefabricated construction, LGSF steel framing, PUF panel insulation, approvals, and commercial terms."
};

export default function FAQPage() {
  const faqSchema = generateFAQSchema(
    FAQ_ITEMS.map((item) => ({ question: item.question, answer: item.answer }))
  );

  const categories = ["General", "Technologies", "Commercials", "Approvals & Warranty", "Execution"] as const;

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10 md:py-16 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumbs items={[{ name: "FAQ", url: "/faq" }]} />

      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#34D399]">
          Source Q&amp;A Bank
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif-editorial tracking-tight text-[#FBFBFA]">
          Frequently Asked Questions
        </h1>
        <p className="text-sm md:text-base text-[#A1A8A3] leading-relaxed">
          Clear, verified information derived directly from the GreenDot Brand Brief &amp; System Prompt. Any items requiring formal business verification before project kickoff are clearly marked.
        </p>
      </div>

      <div className="space-y-12">
        {categories.map((cat) => {
          const categoryItems = FAQ_ITEMS.filter((item) => item.category === cat);
          if (categoryItems.length === 0) return null;

          return (
            <div key={cat} className="space-y-6">
              <h2 className="text-2xl font-serif-editorial text-[#FBFBFA] flex items-center gap-3 border-b border-white/10 pb-3">
                <HelpCircle className="h-5 w-5 text-[#34D399]" />
                <span>{cat} Questions</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categoryItems.map((item, index) => (
                  <div key={index} className="rounded-xl border border-white/10 bg-[#1A1C1A] p-6 space-y-3 hover:border-[#34D399]/30 transition-all">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-semibold uppercase text-[#34D399]">
                        {item.category}
                      </span>
                      {item.requiresVerification && (
                        <span className="text-[10px] font-mono text-[#C85A32] bg-[#C85A32]/10 border border-[#C85A32]/20 px-2 py-0.5 rounded flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          <span>[VERIFICATION REQUIRED]</span>
                        </span>
                      )}
                    </div>
                    <h3 className="text-base font-semibold text-[#FBFBFA]">{item.question}</h3>
                    <p className="text-xs text-[#A1A8A3] leading-relaxed">{item.answer}</p>
                    {item.verificationNote && (
                      <p className="text-[11px] text-[#C85A32] italic pt-2 border-t border-white/10">
                        Verification Note: {item.verificationNote}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#1A1C1A] to-[#111312] p-8 md:p-12 text-center space-y-6">
        <h2 className="text-3xl font-serif-editorial text-[#FBFBFA]">Have a question not listed here?</h2>
        <p className="text-xs text-[#A1A8A3] max-w-md mx-auto leading-relaxed">
          Share your project requirement with our technical team for tailored guidance.
        </p>
        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-[#C85A32] px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg hover:bg-[#b54f2a] transition-all"
          >
            <span>Tell Us What You Want To Build</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
