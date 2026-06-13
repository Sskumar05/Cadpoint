import { MessageCircle, ArrowRight } from "lucide-react";

function scrollToEnquiry() {
  const el = document.getElementById("enquiry-form");
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function EnquiryCTA() {
  return (
    <section className="py-16 md:py-20">
      <div className="container-x">
        <div
          data-aos="zoom-in"
          className="relative overflow-hidden rounded-[2rem] bg-charcoal text-charcoal-foreground px-6 py-12 md:px-14 md:py-16"
        >
          <div className="absolute inset-0 bg-[radial-gradient(50%_70%_at_10%_20%,oklch(0.5_0.22_270/0.45),transparent_60%)]" />
          <div className="absolute -top-10 -right-10 h-60 w-60 rounded-full bg-brand-red/30 blur-3xl" />
          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-xl">
              <span className="eyebrow !bg-white/10 !text-white">Admissions Open 2026</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-extrabold leading-tight">
                Limited seats. Big careers. Enroll now at CADPOINT Tiruvarur.
              </h2>
              <p className="mt-3 text-white/75">
                Talk to our counsellors today and find the right course for your career path.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={scrollToEnquiry}
                className="btn-primary"
                aria-label="Scroll to enquiry form"
              >
                Enquire Now <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="https://wa.me/917010850923"
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp !px-5 !py-3 !text-base"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
