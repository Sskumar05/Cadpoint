import { ArrowRight, Clock } from "lucide-react";

const courses = [
  { name: "AutoCAD", desc: "2D & 3D drafting for design professionals.", duration: "2 Months", cat: "CAD", grad: "from-blue-500 to-indigo-600" },
  { name: "Civil CAD", desc: "Site plans, layouts & structural drawings.", duration: "3 Months", cat: "Civil", grad: "from-amber-500 to-orange-600" },
  { name: "Mechanical CAD", desc: "Part modeling, assembly & drafting.", duration: "3 Months", cat: "Mech", grad: "from-rose-500 to-red-600" },
  { name: "Electrical CAD", desc: "Schematic, panel & wiring design.", duration: "2 Months", cat: "Elec", grad: "from-yellow-500 to-amber-600" },
  { name: "Revit Architecture", desc: "BIM modeling for architects.", duration: "3 Months", cat: "BIM", grad: "from-cyan-500 to-blue-600" },
  { name: "STAAD Pro", desc: "Structural analysis & design.", duration: "2 Months", cat: "Civil", grad: "from-emerald-500 to-teal-600" },
  { name: "CATIA", desc: "Advanced surface & product design.", duration: "3 Months", cat: "Mech", grad: "from-violet-500 to-purple-600" },
  { name: "SolidWorks", desc: "Parametric 3D modeling.", duration: "3 Months", cat: "Mech", grad: "from-sky-500 to-indigo-600" },
  { name: "Python Programming", desc: "From basics to automation & APIs.", duration: "3 Months", cat: "IT", grad: "from-green-500 to-emerald-600" },
  { name: "Java Full Stack", desc: "Core Java, Spring Boot & databases.", duration: "4 Months", cat: "IT", grad: "from-red-500 to-rose-600" },
  { name: "Full Stack Development", desc: "MERN stack with live projects.", duration: "5 Months", cat: "IT", grad: "from-indigo-500 to-purple-600" },
  { name: "Data Science", desc: "Python, ML, Pandas & visualization.", duration: "5 Months", cat: "IT", grad: "from-fuchsia-500 to-pink-600" },
  { name: "Tally Prime", desc: "Accounting, GST & business analytics.", duration: "2 Months", cat: "Biz", grad: "from-lime-500 to-green-600" },
];

export function Courses() {
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
          <a href="#contact" className="btn-outline self-start md:self-end" data-aos="fade-left">
            View All Courses <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-sm font-bold text-electric hover:gap-2 transition-all"
                  >
                    Enquire <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
