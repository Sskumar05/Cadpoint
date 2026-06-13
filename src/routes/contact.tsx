import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { PageWrapper } from "@/components/site/PageWrapper";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { EnquiryForm } from "@/components/site/EnquiryForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | CADPOINT Tiruvarur" },
      { name: "description", content: "Get in touch with CADPOINT Tiruvarur. Visit our campus or contact us for course inquiries, admissions, and placement assistance." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <PageWrapper className="flex-1">
        <div className="container-x">
          <Breadcrumb title="Contact Us" />
          
          <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
            <span className="eyebrow">Get In Touch</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-charcoal leading-tight">
              Let's start your <span className="text-brand-red">journey</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Have questions about our courses or admissions? Our team is here to help you make the right career choice.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div data-aos="fade-right">
              <h2 className="text-2xl font-bold text-charcoal mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-xl bg-brand-red/10 flex items-center justify-center flex-shrink-0 text-brand-red">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal text-lg">Visit Our Campus</h3>
                    <p className="mt-1 text-muted-foreground">Main Road, Tiruvarur, Tamil Nadu 610001</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-xl bg-brand-red/10 flex items-center justify-center flex-shrink-0 text-brand-red">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal text-lg">Call Us</h3>
                    <p className="mt-1 text-muted-foreground">+91 99999 99999</p>
                    <p className="text-muted-foreground">+91 88888 88888</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-xl bg-brand-red/10 flex items-center justify-center flex-shrink-0 text-brand-red">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal text-lg">Email Us</h3>
                    <p className="mt-1 text-muted-foreground">info@cadpointtiruvarur.in</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-xl bg-brand-red/10 flex items-center justify-center flex-shrink-0 text-brand-red">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal text-lg">Working Hours</h3>
                    <p className="mt-1 text-muted-foreground">Mon - Sat: 9:00 AM - 7:00 PM</p>
                    <p className="text-muted-foreground">Sunday: 10:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 rounded-2xl overflow-hidden h-[300px] border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.423788220822!2d79.6334543152865!3d10.77884849231922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a554743285c5dfb%3A0x6b4fb712cf75e3a0!2sTiruvarur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1655000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="CADPOINT Tiruvarur Location"
                ></iframe>
              </div>
            </div>

            <div data-aos="fade-left">
              <h2 className="text-2xl font-bold text-charcoal mb-8">Send an Enquiry</h2>
              <div className="card-soft p-8">
                <EnquiryForm hideHeading />
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
