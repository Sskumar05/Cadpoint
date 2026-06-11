import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Award, Briefcase, Users } from "lucide-react";
import heroImg from "@/assets/hero-student.jpg";

export function Hero() {
  return (
    <section id="home" className="relative pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,oklch(0.5_0.22_270/0.10),transparent_60%)]" />
      <div className="absolute -z-10 top-20 -left-20 h-72 w-72 rounded-full bg-electric/10 blur-3xl" />
      <div className="absolute -z-10 bottom-0 right-0 h-80 w-80 rounded-full bg-navy/10 blur-3xl" />

      <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="eyebrow">#1 CAD & IT Training Institute in Tiruvarur</span>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy leading-[1.05]">
            Build Your Career with{" "}
            <span className="bg-gradient-to-r from-electric to-navy bg-clip-text text-transparent">
              Industry-Oriented
            </span>{" "}
            CAD & IT Training
          </h1>
          <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-xl">
            Master AutoCAD, Revit, STAAD Pro, CATIA, SolidWorks, Python, Java and more
            with hands-on projects, expert mentors and 100% placement assistance.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary">
              Enquire Now <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#courses" className="btn-outline">
              <PlayCircle className="h-4 w-4" /> View Courses
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-10 w-10 rounded-full border-2 border-background bg-gradient-to-br from-electric to-navy flex items-center justify-center text-xs font-bold text-white"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div>
              <div className="font-bold text-navy">12,500+ Students</div>
              <div className="text-xs text-muted-foreground">trust CADPOINT for their career</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          <div className="relative aspect-[5/6] sm:aspect-[4/4.5] rounded-[2rem] overflow-hidden shadow-[0_30px_80px_-20px_rgba(8,28,75,0.35)]">
            <div className="absolute inset-0 bg-gradient-to-tr from-navy/30 to-transparent z-10" />
            <img
              src={heroImg}
              alt="CADPOINT student learning CAD"
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute -left-4 sm:-left-8 top-10 bg-background rounded-2xl shadow-card p-4 flex items-center gap-3 border"
          >
            <div className="h-10 w-10 rounded-xl bg-electric/10 text-electric flex items-center justify-center">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-navy">Certified Training</div>
              <div className="text-xs text-muted-foreground">ISO + Govt. Recognized</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="absolute -right-3 sm:-right-6 top-1/2 bg-background rounded-2xl shadow-card p-4 border"
          >
            <div className="flex items-center gap-2">
              <Briefcase className="h-4 w-4 text-electric" />
              <span className="text-xs font-semibold text-muted-foreground">Placements</span>
            </div>
            <div className="mt-1 text-2xl font-extrabold text-navy">5,000+</div>
            <div className="text-[11px] text-muted-foreground">Successful careers</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="absolute -left-3 sm:-left-8 bottom-8 bg-background rounded-2xl shadow-card p-4 border flex items-center gap-3"
          >
            <div className="h-10 w-10 rounded-xl bg-navy/10 text-navy flex items-center justify-center">
              <Users className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-navy">15+ Yrs</div>
              <div className="text-xs text-muted-foreground">Industry Experience</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
