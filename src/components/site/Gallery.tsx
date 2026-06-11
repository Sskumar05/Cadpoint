import { ArrowRight } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

const images = [
  { src: g1, alt: "CAD training lab", span: "md:col-span-2 md:row-span-2" },
  { src: g2, alt: "Graduation ceremony", span: "" },
  { src: g3, alt: "Classroom session", span: "" },
  { src: g4, alt: "Placement interview", span: "md:col-span-2" },
];

export function Gallery() {
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
          <a href="#" className="btn-outline self-start md:self-end" data-aos="fade-left">
            View All Gallery <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              data-aos-delay={i * 80}
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
    </section>
  );
}
