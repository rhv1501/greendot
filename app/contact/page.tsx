import Breadcrumbs from "@/components/Breadcrumbs";
import LeadForm from "@/components/LeadForm";

export const metadata = {
  title: "Tell Us What You Want To Build | GreenDot Build & Interiors",
  description: "Submit your project requirement for prefabricated construction or commercial interior fit-outs in Chennai & South India. Get a technical site feasibility assessment."
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10 md:py-16 space-y-12">
      <Breadcrumbs items={[{ name: "Contact & Intake", url: "/contact" }]} />

      <div className="max-w-3xl space-y-3">
        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#34D399]">
          Project Intake &amp; Feasibility
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif-editorial tracking-tight text-[#FBFBFA]">
          Tell Us What You Want To Build
        </h1>
        <p className="text-sm md:text-base text-[#A1A8A3] leading-relaxed">
          Share your site location, spatial purpose, and budget expectations in Chennai or South India. Our engineering team will review your requirement and evaluate structural feasibility.
        </p>
      </div>

      <div className="max-w-4xl">
        <LeadForm sourceLocation="contact_page" />
      </div>
    </div>
  );
}
