import { ArrowRight, Clock } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { courses } from "@/lib/data";

export function Courses({ limit }: { limit?: number }) {
  const displayCourses = limit ? courses.slice(0, limit) : courses;

  return (
    <section id="courses" className="py-20 md:py-28 bg-surface">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div data-aos="fade-right" className="max-w-2xl">
            <span className="eyebrow">Popular Courses</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-navy">
              Industry-ready programs that get you hired
            </h2>
            <p className="mt-3 text-muted-foreground">
              Choose from CAD, civil, mechanical, electrical and IT courses — all with certificates and placement support.
            </p>
          </div>
          <Link to="/courses" className="btn-outline self-start md:self-end" data-aos="fade-left">
            View All Courses <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayCourses.map((c, i) => (
            <div
              key={c.name}
              data-aos="fade-up"
              data-aos-delay={(i % 4) * 100}
              className="card-soft overflow-hidden flex flex-col"
            >
              <div className={`relative h-32 bg-gradient-to-br ${c.grad} flex items-center justify-center`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25),transparent_60%)]" />
                <span className="font-display text-3xl font-extrabold text-white drop-shadow">
                  {c.name.split(" ")[0]}
                </span>
                <span className="absolute top-3 right-3 text-[10px] font-bold tracking-wider bg-white/20 text-white px-2 py-1 rounded-full backdrop-blur">
                  {c.cat}
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-bold text-navy">{c.name}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground flex-1">{c.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" /> {c.duration}
                  </span>
                  <Link
                    to={`/courses/${c.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-bold text-electric hover:gap-2 transition-all"
                  >
                    Details <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {limit && (
          <div className="mt-12 flex justify-center">
            <Link to="/courses" className="btn-primary">
              View All Courses <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
