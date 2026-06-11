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
            <h1 className="text-4xl md:text-5xl font-extrabold text-navy leading-tight">
              Our <span className="text-electric">Training</span> Programs
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
        </div>
      </PageWrapper>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
