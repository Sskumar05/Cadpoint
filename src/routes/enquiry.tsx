import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { PageWrapper } from "@/components/site/PageWrapper";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { EnquiryForm } from "@/components/site/EnquiryForm";

export const Route = createFileRoute("/enquiry")({
  head: () => ({
    meta: [
      { title: "Enquiry Form | CADPOINT Tiruvarur" },
      { name: "description", content: "Submit an enquiry to CADPOINT Tiruvarur to learn more about our courses, fees, and batch timings." },
    ],
  }),
  component: EnquiryPage,
});

function EnquiryPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <PageWrapper className="flex-1">
        <div className="container-x">
          <Breadcrumb title="Enquire Now" />
          
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10" data-aos="fade-up">
              <span className="eyebrow">Admissions Open</span>
              <h1 className="mt-4 text-3xl md:text-4xl font-extrabold text-navy leading-tight">
                Get a Free <span className="text-electric">Career Counseling</span> Session
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Fill out the form below and our career experts will call you to guide you toward the right course.
              </p>
            </div>

            <div className="card-soft p-8 md:p-12 shadow-xl" data-aos="zoom-in">
              <EnquiryForm hideHeading />
            </div>
          </div>
        </div>
      </PageWrapper>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
