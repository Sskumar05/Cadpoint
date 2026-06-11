import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { PageWrapper } from "@/components/site/PageWrapper";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { galleryImages } from "@/lib/data";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | CADPOINT Tiruvarur" },
      { name: "description", content: "Explore photos of our campus, classrooms, labs, events, and student life at CADPOINT Tiruvarur." },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <PageWrapper className="flex-1">
        <div className="container-x">
          <Breadcrumb title="Gallery" />
          
          <div className="max-w-3xl mb-12" data-aos="fade-up">
            <span className="eyebrow">Campus Life</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-navy leading-tight">
              Inside the <span className="text-electric">CADPOINT</span> experience
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Take a look at our state-of-the-art facilities, classroom sessions, and vibrant student community.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                data-aos="zoom-in"
                data-aos-delay={(i % 4) * 80}
                className={`relative overflow-hidden rounded-2xl group ${img.span}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-sm font-semibold text-white">{img.alt}</span>
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
