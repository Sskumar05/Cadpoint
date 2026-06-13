import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { TrustStrip, StatsDark } from "@/components/site/Stats";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Courses } from "@/components/site/Courses";
import { Placements } from "@/components/site/Placements";
import { Testimonials } from "@/components/site/Testimonials";
import { Gallery } from "@/components/site/Gallery";
import { EnquiryCTA } from "@/components/site/EnquiryCTA";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { Newsletter } from "@/components/site/Newsletter";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { PageWrapper } from "@/components/site/PageWrapper";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CADPOINT Tiruvarur — CAD & IT Training Institute" },
      { name: "description", content: "Premier CAD & IT training in Tiruvarur. AutoCAD, Revit, CATIA, SolidWorks, Python, Full Stack — 100% placement assistance." },
      { property: "og:title", content: "CADPOINT Tiruvarur — CAD & IT Training Institute" },
      { property: "og:description", content: "Industry-oriented CAD & IT training with expert mentors and placement support." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800;900&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageWrapper className="!pt-0">
        <Hero />
        <TrustStrip />
        <WhyChoose />
        {/* Pass limits for the previews on the Home page */}
        <Courses limit={4} />
        <StatsDark />
        <Placements limit={3} />
        <Testimonials limit={3} />
        <Gallery limit={4} />
        <EnquiryCTA />
        <div id="enquiry-form" className="py-20 md:py-28">
          <div className="container-x max-w-3xl">
            <div className="text-center mb-10" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-extrabold text-charcoal">
                Have <span className="text-brand-red">Questions?</span>
              </h2>
            </div>
            <div className="card-soft p-8" data-aos="zoom-in">
              <EnquiryForm hideHeading />
            </div>
          </div>
        </div>
        <Newsletter />
      </PageWrapper>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
