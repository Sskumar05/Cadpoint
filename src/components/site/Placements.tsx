import { Building2, IndianRupee, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { placementCompanies, placementStories } from "@/lib/data";

export function Placements({ limit }: { limit?: number }) {
  const displayStories = limit ? placementStories.slice(0, limit) : placementStories;

  return (
    <section id="placements" className="py-20 md:py-28">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto" data-aos="fade-up">
          <span className="eyebrow">Placement Success</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-navy">
            Our graduates work at India's top companies
          </h2>
          <p className="mt-3 text-muted-foreground">
            5,000+ students placed across CAD, engineering and IT roles with leading employers.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3" data-aos="fade-up">
          {placementCompanies.map((c) => (
            <div
              key={c}
              className="h-16 rounded-xl border bg-card flex items-center justify-center px-3 text-center text-sm font-bold text-navy/80 hover:border-electric hover:text-electric transition-colors"
            >
              {c}
            </div>
          ))}
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayStories.map((s, i) => (
            <div
              key={s.name}
              data-aos="zoom-in"
              data-aos-delay={(i % 3) * 100}
              className="card-soft p-6"
            >
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-electric to-navy text-white flex items-center justify-center font-bold">
                  {s.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-navy">{s.name}</div>
                  <div className="text-xs text-muted-foreground">{s.role}</div>
                </div>
              </div>
              <div className="mt-5 space-y-2 text-sm">
                <div className="flex items-center gap-2 text-foreground/80">
                  <Building2 className="h-4 w-4 text-electric" /> {s.company}
                </div>
                <div className="flex items-center gap-2 text-foreground/80">
                  <IndianRupee className="h-4 w-4 text-electric" /> {s.pkg}
                </div>
                <div className="flex items-center gap-2 text-foreground/80">
                  <TrendingUp className="h-4 w-4 text-electric" /> {s.course}
                </div>
              </div>
            </div>
          ))}
        </div>

        {limit && (
          <div className="mt-12 flex justify-center">
            <Link to="/placements" className="btn-primary">
              View All Placements <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
