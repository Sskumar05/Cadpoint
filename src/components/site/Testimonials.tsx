import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { testimonialsData } from "@/lib/data";

export function Testimonials({ limit }: { limit?: number }) {
  const displayItems = limit ? testimonialsData.slice(0, limit) : testimonialsData;
  const [i, setI] = useState(0);
  
  const next = () => setI((p) => (p + 1) % displayItems.length);
  const prev = () => setI((p) => (p - 1 + displayItems.length) % displayItems.length);

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-surface">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto" data-aos="fade-up">
          <span className="eyebrow">Student Voices</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-navy">
            Hear from our successful students
          </h2>
        </div>

        <div className="mt-12 max-w-4xl mx-auto" data-aos="fade-up">
          <div className="relative card-soft p-8 md:p-12 text-center">
            <Quote className="absolute top-6 left-6 h-8 w-8 text-electric/20" />
            <div className="flex justify-center gap-1">
              {Array.from({ length: displayItems[i].rating }).map((_, k) => (
                <Star key={k} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="mt-5 text-lg md:text-xl text-foreground/90 leading-relaxed">
              "{displayItems[i].text}"
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-electric to-navy text-white flex items-center justify-center font-bold">
                {displayItems[i].name.charAt(0)}
              </div>
              <div className="text-left">
                <div className="font-bold text-navy">{displayItems[i].name}</div>
                <div className="text-xs text-muted-foreground">{displayItems[i].course}</div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <button onClick={prev} className="h-10 w-10 rounded-full border bg-card hover:bg-navy hover:text-white transition-colors flex items-center justify-center">
              <ChevronLeft className="h-5 w-5" />
            </button>
            {displayItems.map((_, k) => (
              <button
                key={k}
                onClick={() => setI(k)}
                className={`h-2 rounded-full transition-all ${k === i ? "w-8 bg-electric" : "w-2 bg-muted-foreground/30"}`}
                aria-label={`Go to testimonial ${k + 1}`}
              />
            ))}
            <button onClick={next} className="h-10 w-10 rounded-full border bg-card hover:bg-navy hover:text-white transition-colors flex items-center justify-center">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          
          {limit && (
            <div className="mt-10 flex justify-center">
              <Link to="/testimonials" className="btn-primary">
                Read More Testimonials <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
