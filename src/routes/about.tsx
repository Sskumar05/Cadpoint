import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { PageWrapper } from "@/components/site/PageWrapper";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { TrustStrip } from "@/components/site/Stats";
import { WhyChoose } from "@/components/site/WhyChoose";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | CADPOINT Tiruvarur" },
      { name: "description", content: "Learn about CADPOINT Tiruvarur, our mission, vision, and the expert team behind our premier CAD and IT training institute." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <PageWrapper className="flex-1">
        <div className="container-x">
          <Breadcrumb title="About Us" />
          
          <div className="max-w-3xl mb-12" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-extrabold text-charcoal leading-tight">
              Empowering careers through <span className="text-brand-red">expert training</span> since 2010.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              CADPOINT Tiruvarur is an ISO-certified educational institute dedicated to providing industry-standard training in CAD, BIM, IT, and related technologies. We bridge the gap between academic learning and industry requirements.
            </p>
          </div>
        </div>

        <WhyChoose />
        <TrustStrip />
      </PageWrapper>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
