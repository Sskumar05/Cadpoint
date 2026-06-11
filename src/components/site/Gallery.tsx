import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { galleryImages } from "@/lib/data";

export function Gallery({ limit }: { limit?: number }) {
  const displayImages = limit ? galleryImages.slice(0, limit) : galleryImages;

  return (
    <section id="gallery" className="py-20 md:py-28">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div data-aos="fade-right" className="max-w-2xl">
            <span className="eyebrow">Campus Life</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-navy">
              Inside the CADPOINT experience
            </h2>
          </div>
          <Link to="/gallery" className="btn-outline self-start md:self-end" data-aos="fade-left">
            View All Gallery <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4">
          {displayImages.map((img, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              data-aos-delay={(i % 4) * 80}
              className={`relative overflow-hidden rounded-2xl group ${img.span || ''}`}
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
        
        {limit && (
          <div className="mt-12 flex justify-center">
            <Link to="/gallery" className="btn-primary">
              View Full Gallery <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
