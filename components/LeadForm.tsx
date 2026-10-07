"use client";

import { useState } from "react";
import { CheckCircle2, Send, Building, MapPin, Calculator, Calendar } from "lucide-react";
import { trackAnalyticsEvent } from "@/lib/analytics";

interface LeadFormProps {
  initialProjectType?: string;
  sourceLocation?: string;
}

export default function LeadForm({ initialProjectType = "" }: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "Chennai",
    projectType: initialProjectType || "Rooftop Extension",
    approximateArea: "",
    requirement: "",
    budgetRange: "Under ₹10 Lakhs",
    desiredTimeline: "Within 1-2 Months",
    isRooftop: "No",
    rooftopAge: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required.";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.requirement.trim()) {
      newErrors.requirement = "Please describe what you want to build.";
    }
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    trackAnalyticsEvent({
      name: "form_start",
      properties: { formId: "lead_intake_form" }
    });

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstErrorKey = Object.keys(validationErrors)[0];
      trackAnalyticsEvent({
        name: "form_error",
        properties: { formId: "lead_intake_form", errorField: firstErrorKey }
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate backend submission response
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      trackAnalyticsEvent({
        name: "form_submit",
        properties: {
          formId: "lead_intake_form",
          projectType: formData.projectType,
          budgetRange: formData.budgetRange
        }
      });
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="rounded-2xl border border-white/10 bg-[#1A1C1A] p-8 md:p-12 text-center shadow-2xl">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#153E2B] text-[#34D399] border border-[#34D399]/20">
          <CheckCircle2 className="h-8 w-8 text-[#34D399]" />
        </div>
        <h3 className="text-3xl font-serif-editorial text-[#FBFBFA]">Requirement Received</h3>
        <p className="mt-3 text-xs md:text-sm leading-relaxed text-[#A1A8A3] max-w-lg mx-auto">
          Thank you, <strong className="text-[#FBFBFA]">{formData.name}</strong>. Our technical engineering team will review your requirement for <strong className="text-[#34D399]">{formData.projectType}</strong> in {formData.location} and contact you to conduct a spatial feasibility assessment.
        </p>
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: "",
                phone: "",
                email: "",
                location: "Chennai",
                projectType: "Rooftop Extension",
                approximateArea: "",
                requirement: "",
                budgetRange: "Under ₹10 Lakhs",
                desiredTimeline: "Within 1-2 Months",
                isRooftop: "No",
                rooftopAge: ""
              });
            }}
            className="rounded-lg border border-white/10 bg-[#111312] px-6 py-2.5 text-xs font-mono font-semibold uppercase tracking-wider text-[#FBFBFA] hover:border-[#34D399]/30 transition-all"
          >
            Submit Another Requirement
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-[#1A1C1A] p-6 md:p-10 shadow-2xl">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="h-2 w-2 rounded-full bg-[#34D399] animate-pulse"></span>
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#34D399]">
            Step-by-Step Requirement Intake
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-serif-editorial text-[#FBFBFA]">
          Tell Us What You Want To Build
        </h2>
        <p className="mt-2 text-xs md:text-sm text-[#A1A8A3]">
          Share your site location and requirement. You do not need to know whether you need LGSF or PUF panels — we engineer the right system for your space.
        </p>
      </div>

      <div className="space-y-6">
        {/* Project Type & Location */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#FBFBFA] mb-2 flex items-center gap-2">
              <Building className="h-3.5 w-3.5 text-[#34D399]" />
              <span>Project Type</span>
            </label>
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="w-full rounded-lg border border-white/10 bg-[#111312] px-4 py-3 text-xs text-[#FBFBFA] focus:border-[#34D399] focus:outline-none transition-all"
            >
              <option value="Rooftop Extension">Rooftop Room / Extension</option>
              <option value="Café & Restaurant">Café, QSR &amp; Dining Space</option>
              <option value="Farmhouse & Cottage">Farmhouse, Villa &amp; Cottage</option>
              <option value="Commercial Office">Commercial Office / Studio</option>
              <option value="Customized Space">Customized / Specialized Structure</option>
              <option value="Turnkey Interior">Commercial Interior Fit-Out</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#FBFBFA] mb-2 flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-[#34D399]" />
              <span>Site Location</span>
            </label>
            <select
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full rounded-lg border border-white/10 bg-[#111312] px-4 py-3 text-xs text-[#FBFBFA] focus:border-[#34D399] focus:outline-none transition-all"
            >
              <option value="Chennai City">Chennai City</option>
              <option value="ECR / Mahabalipuram">ECR / Mahabalipuram</option>
              <option value="Kanchipuram / Chengalpattu">Kanchipuram / Chengalpattu</option>
              <option value="Other Tamil Nadu">Other Tamil Nadu</option>
              <option value="South India Region">South India Region</option>
            </select>
          </div>
        </div>

        {/* Contact Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#FBFBFA] mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              placeholder="e.g. Anand Kumar"
              value={formData.name}
              onChange={handleChange}
              className={`w-full rounded-lg border px-4 py-3 text-xs text-[#FBFBFA] placeholder:text-[#6B7280] focus:outline-none transition-all ${
                errors.name ? "border-[#C85A32] bg-[#C85A32]/10" : "border-white/10 bg-[#111312] focus:border-[#34D399]"
              }`}
            />
            {errors.name && <p className="mt-1 text-[11px] text-[#C85A32]">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#FBFBFA] mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full rounded-lg border px-4 py-3 text-xs text-[#FBFBFA] placeholder:text-[#6B7280] focus:outline-none transition-all ${
                errors.phone ? "border-[#C85A32] bg-[#C85A32]/10" : "border-white/10 bg-[#111312] focus:border-[#34D399]"
              }`}
            />
            {errors.phone && <p className="mt-1 text-[11px] text-[#C85A32]">{errors.phone}</p>}
          </div>

          <div>
            <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#FBFBFA] mb-2">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              placeholder="anand@example.com"
              value={formData.email}
              onChange={handleChange}
              className={`w-full rounded-lg border px-4 py-3 text-xs text-[#FBFBFA] placeholder:text-[#6B7280] focus:outline-none transition-all ${
                errors.email ? "border-[#C85A32] bg-[#C85A32]/10" : "border-white/10 bg-[#111312] focus:border-[#34D399]"
              }`}
            />
            {errors.email && <p className="mt-1 text-[11px] text-[#C85A32]">{errors.email}</p>}
          </div>
        </div>

        {/* Space Area & Budget */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#FBFBFA] mb-2 flex items-center gap-2">
              <Calculator className="h-3.5 w-3.5 text-[#34D399]" />
              <span>Approximate Area (sq.ft.)</span>
            </label>
            <input
              type="text"
              name="approximateArea"
              placeholder="e.g. 500 sq.ft."
              value={formData.approximateArea}
              onChange={handleChange}
              className="w-full rounded-lg border border-white/10 bg-[#111312] px-4 py-3 text-xs text-[#FBFBFA] placeholder:text-[#6B7280] focus:border-[#34D399] focus:outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#FBFBFA] mb-2">
              Target Budget Range
            </label>
            <select
              name="budgetRange"
              value={formData.budgetRange}
              onChange={handleChange}
              className="w-full rounded-lg border border-white/10 bg-[#111312] px-4 py-3 text-xs text-[#FBFBFA] focus:border-[#34D399] focus:outline-none transition-all"
            >
              <option value="Under ₹10 Lakhs">Under ₹10 Lakhs</option>
              <option value="₹10 Lakhs - ₹25 Lakhs">₹10 Lakhs - ₹25 Lakhs</option>
              <option value="₹25 Lakhs - ₹50 Lakhs">₹25 Lakhs - ₹50 Lakhs</option>
              <option value="Above ₹50 Lakhs">Above ₹50 Lakhs</option>
              <option value="Undecided">Flexible / Undecided</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#FBFBFA] mb-2 flex items-center gap-2">
              <Calendar className="h-3.5 w-3.5 text-[#34D399]" />
              <span>Desired Start Timeline</span>
            </label>
            <select
              name="desiredTimeline"
              value={formData.desiredTimeline}
              onChange={handleChange}
              className="w-full rounded-lg border border-white/10 bg-[#111312] px-4 py-3 text-xs text-[#FBFBFA] focus:border-[#34D399] focus:outline-none transition-all"
            >
              <option value="Immediately">Immediately (Within 2 Weeks)</option>
              <option value="Within 1-2 Months">Within 1 - 2 Months</option>
              <option value="Planning Phase">Planning Phase (3+ Months)</option>
            </select>
          </div>
        </div>

        {/* Detailed Requirement */}
        <div>
          <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#FBFBFA] mb-2">
            Describe Your Project Requirement &amp; Site Constraints *
          </label>
          <textarea
            name="requirement"
            rows={4}
            placeholder="Tell us what you want to build (e.g. 'We need a 600 sq.ft. insulated rooftop studio with glass windows on top of our existing 2-story house in Anna Nagar...')"
            value={formData.requirement}
            onChange={handleChange}
            className={`w-full rounded-lg border px-4 py-3 text-xs text-[#FBFBFA] placeholder:text-[#6B7280] focus:outline-none transition-all ${
              errors.requirement ? "border-[#C85A32] bg-[#C85A32]/10" : "border-white/10 bg-[#111312] focus:border-[#34D399]"
            }`}
          ></textarea>
          {errors.requirement && <p className="mt-1 text-[11px] text-[#C85A32]">{errors.requirement}</p>}
        </div>

        {/* Form Submission Button */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] font-mono text-[#6B7280]">
            🔒 Your contact details are strictly confidential and used only for site feasibility assessment.
          </p>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[#C85A32] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg hover:bg-[#b54f2a] transition-all disabled:opacity-50"
          >
            {isSubmitting ? (
              <span>Submitting Requirement...</span>
            ) : (
              <>
                <span>Tell Us What You Want To Build</span>
                <Send className="h-4 w-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
