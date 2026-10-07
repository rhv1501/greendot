export type AnalyticsEvent =
  | { name: "cta_click"; properties: { location: string; label: string; href?: string } }
  | { name: "phone_click"; properties: { location: string; phoneNumber?: string } }
  | { name: "whatsapp_click"; properties: { location: string } }
  | { name: "form_start"; properties: { formId: string } }
  | { name: "form_submit"; properties: { formId: string; projectType?: string; budgetRange?: string } }
  | { name: "form_error"; properties: { formId: string; errorField: string } }
  | { name: "project_view"; properties: { projectSlug: string; category: string } }
  | { name: "service_view"; properties: { serviceSlug: string } };

export function trackAnalyticsEvent(event: AnalyticsEvent): void {
  if (typeof window !== "undefined") {
    // Console audit logging in development
    if (process.env.NODE_ENV === "development") {
      console.log(`[Analytics Event Tracked]: ${event.name}`, event.properties);
    }
    
    // Dispatch custom DOM event for third-party scripts (GA4/GTM/Plausible/PostHog)
    const customEvent = new CustomEvent("greendot_analytics", {
      detail: event
    });
    window.dispatchEvent(customEvent);
  }
}
