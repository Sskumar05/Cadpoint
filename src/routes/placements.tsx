import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { PageWrapper } from "@/components/site/PageWrapper";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { Building2, IndianRupee, TrendingUp } from "lucide-react";
import { placementCompanies, placementStories } from "@/lib/data";

export const Route = createFileRoute("/placements")({
  head: () => ({
    meta: [
      { title: "Placements | CADPOINT Tiruvarur" },
      { name: "description", content: "View our successful placement records and the top companies where our students are working." },
    ],
  }),
  component: PlacementsPage,
});

function PlacementsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <PageWrapper className="flex-1">
        <div className="container-x">
          <Breadcrumb title="Placements" />
          
          <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
            <span className="eyebrow">Placement Success</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-navy">
              Our graduates work at India's top companies
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              5,000+ students placed across CAD, engineering and IT roles with leading employers.
            </p>
          </div>

          <div className="mb-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3" data-aos="fade-up">
            {placementCompanies.map((c) => (
              <div
                key={c}
                className="h-16 rounded-xl border bg-card flex items-center justify-center px-3 text-center text-sm font-bold text-navy/80 hover:border-electric hover:text-electric transition-colors"
              >
                {c}
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {placementStories.map((s, i) => (
              <div
                key={s.name}
                data-aos="zoom-in"
                data-aos-delay={(i % 4) * 100}
                className="card-soft p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-electric to-navy text-white flex items-center justify-center font-bold text-lg">
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
        </div>
      </PageWrapper>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
