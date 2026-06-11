import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { PageWrapper } from "@/components/site/PageWrapper";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { Star, Quote } from "lucide-react";
import { testimonialsData } from "@/lib/data";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials | CADPOINT Tiruvarur" },
      { name: "description", content: "Read what our successful students say about their learning and placement experience at CADPOINT." },
    ],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <PageWrapper className="flex-1">
        <div className="container-x">
          <Breadcrumb title="Testimonials" />
          
          <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
            <span className="eyebrow">Student Voices</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-navy leading-tight">
              Hear from our <span className="text-electric">successful</span> students
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Discover how CADPOINT has transformed careers and helped students achieve their professional goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonialsData.map((item, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={(i % 3) * 100} className="relative card-soft p-8 flex flex-col">
                <Quote className="absolute top-6 right-6 h-10 w-10 text-electric/10" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: item.rating }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-foreground/90 leading-relaxed flex-1 italic">
                  "{item.text}"
                </p>
                <div className="mt-6 flex items-center gap-3 pt-6 border-t border-border">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-electric to-navy text-white flex items-center justify-center font-bold text-sm">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-navy text-sm">{item.name}</div>
                    <div className="text-xs text-muted-foreground">{item.course}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageWrapper>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
