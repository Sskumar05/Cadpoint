import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, start: boolean, duration = 1600) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.floor(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);
  return val;
}

const items = [
  { value: 12500, suffix: "+", label: "Students Trained" },
  { value: 120, suffix: "+", label: "Courses Offered" },
  { value: 98, suffix: "%", label: "Satisfaction Rate" },
  { value: 5000, suffix: "+", label: "Successful Placements" },
];

export function StatsDark() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setInView(true),
      { threshold: 0.3 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-20 md:py-24 bg-charcoal text-charcoal-foreground overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(40%_60%_at_20%_30%,rgba(227,30,36,0.35),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(40%_60%_at_80%_70%,rgba(227,30,36,0.25),transparent_60%)]" />
      <div className="container-x relative">
        <div className="text-center max-w-2xl mx-auto" data-aos="fade-up">
          <span className="eyebrow !bg-white/10 !text-white/90">Our Impact</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold">
            Trusted by thousands across Tamil Nadu
          </h2>
          <p className="mt-3 text-white/70">
            Real results. Real careers. Real CADPOINT graduates working at top firms.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <StatCard key={it.label} item={it} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ item, index, inView }: { item: typeof items[number]; index: number; inView: boolean }) {
  const v = useCountUp(item.value, inView);
  return (
    <div
      data-aos="zoom-in"
      data-aos-delay={index * 80}
      className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur p-6 text-center"
    >
      <div className="text-4xl md:text-5xl font-extrabold tracking-tight">
        {v.toLocaleString()}{item.suffix}
      </div>
      <div className="mt-2 text-sm text-white/70">{item.label}</div>
    </div>
  );
}


export function TrustStrip() {
  const t = [
    { v: "12,500+", l: "Students Trained" },
    { v: "100%", l: "Placement Assistance" },
    { v: "50+", l: "Industry Trainers" },
    { v: "15+ Yrs", l: "Experience" },
  ];
  return (
    <section className="py-10 bg-surface border-y">
      <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-6">
        {t.map((x, i) => (
          <div key={x.l} data-aos="fade-up" data-aos-delay={i * 70} className="text-center">
            <div className="text-2xl md:text-3xl font-extrabold text-charcoal">{x.v}</div>
            <div className="text-xs md:text-sm text-muted-foreground mt-1">{x.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
