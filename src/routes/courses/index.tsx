import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { PageWrapper } from "@/components/site/PageWrapper";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { Clock, ArrowRight } from "lucide-react";
import { courses } from "@/lib/data";

export const Route = createFileRoute("/courses/")({
  head: () => ({
    meta: [
      { title: "All Courses | CADPOINT Tiruvarur" },
      { name: "description", content: "Explore our wide range of industry-oriented courses in CAD, BIM, IT, Full Stack, Data Science, and more." },
    ],
  }),
  component: CoursesPage,
});

function CoursesPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <PageWrapper className="flex-1">
        <div className="container-x">
          <Breadcrumb title="Courses" />
          
          <div className="max-w-3xl mb-12" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-extrabold text-charcoal leading-tight">
              Our <span className="text-brand-red">Training</span> Programs
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Choose from our comprehensive selection of professional courses designed to make you industry-ready.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courses.map((c, i) => (
              <div
                key={c.name}
                data-aos="fade-up"
                data-aos-delay={(i % 4) * 100}
                className="card-soft overflow-hidden flex flex-col group"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-charcoal/60 transition-opacity duration-500 group-hover:bg-charcoal/40" />
                  {/* <div className="absolute inset-0 flex items-center justify-center p-4">
                    <span className="font-display text-2xl md:text-3xl font-extrabold text-white drop-shadow-md text-center z-10">
                      {c.name}
                    </span>
                  </div> */}
                  <span className="absolute top-3 right-3 text-[10px] font-bold tracking-wider bg-black/40 text-white px-2 py-1 rounded-full backdrop-blur z-10">
                    {c.cat}
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col relative z-20 bg-card">
                  <h3 className="font-bold text-charcoal">{c.name}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground flex-1">{c.desc}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" /> {c.duration}
                    </span>
                    <Link
                      to="/courses/$slug" params={{ slug: c.slug }}
                      className="inline-flex items-center gap-1 text-sm font-bold text-brand-red hover:gap-2 transition-all"
                    >
                      Details <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
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
