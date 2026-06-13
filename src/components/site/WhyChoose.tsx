import { GraduationCap, Wrench, Briefcase, Layers } from "lucide-react";

const features = [
  { icon: GraduationCap, title: "Expert Trainers", desc: "Learn from 50+ industry professionals with 10+ years of real-world CAD & IT experience." },
  { icon: Wrench, title: "Practical Training", desc: "80% hands-on lab sessions with real software, real projects and real datasets." },
  { icon: Briefcase, title: "Placement Support", desc: "Dedicated placement cell, mock interviews, resume building and direct company tie-ups." },
  { icon: Layers, title: "Industry Projects", desc: "Work on live architectural, mechanical, civil and software projects from day one." },
];

export function WhyChoose() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <div className="max-w-2xl mx-auto text-center" data-aos="fade-up">
          <span className="eyebrow">Why CADPOINT</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-charcoal">
            Everything you need to launch your career
          </h2>
          <p className="mt-3 text-muted-foreground">
            We combine industry-grade curriculum, practical labs and placement-focused mentorship.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              data-aos="zoom-in"
              data-aos-delay={i * 100}
              className="card-soft p-7 group"
            >
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-brand-red to-brand-dark-red text-white flex items-center justify-center shadow-[0_10px_25px_-10px_rgba(79,70,229,0.6)] group-hover:scale-110 transition-transform">
                <f.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-charcoal">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
