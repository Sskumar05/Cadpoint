import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { PageWrapper } from "@/components/site/PageWrapper";
import { CheckCircle2, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title: "Thank You | CADPOINT Tiruvarur" },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: ThankYouPage,
});

function ThankYouPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <PageWrapper className="flex-1 flex items-center justify-center">
        <div className="container-x max-w-2xl text-center" data-aos="zoom-in">
          <div className="inline-flex h-24 w-24 rounded-full bg-green-100 items-center justify-center mb-8">
            <CheckCircle2 className="h-12 w-12 text-green-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-charcoal">
            Thank You!
          </h1>
          <p className="mt-6 text-xl text-muted-foreground">
            Your enquiry has been successfully submitted. Our career counselor will get back to you shortly.
          </p>
          <div className="mt-10">
            <Link to="/" className="btn-primary">
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Home
            </Link>
          </div>
        </div>
      </PageWrapper>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
