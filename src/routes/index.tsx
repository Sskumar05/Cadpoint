import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import AOS from "aos";

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
  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease-out-cubic", once: true, offset: 60 });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <WhyChoose />
        <Courses />
        <StatsDark />
        <Placements />
        <Testimonials />
        <Gallery />
        <EnquiryCTA />
        <EnquiryForm />
        <Newsletter />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
