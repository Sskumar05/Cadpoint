import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  return (
    <section className="py-16">
      <div className="container-x">
        <div
          data-aos="fade-up"
          className="rounded-3xl border bg-card px-6 py-10 md:p-12 grid md:grid-cols-2 gap-8 items-center"
        >
          <div>
            <span className="eyebrow">Newsletter</span>
            <h3 className="mt-3 text-2xl md:text-3xl font-extrabold text-charcoal">
              Get course updates & career tips
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Join 8,000+ subscribers. No spam — just useful resources for your career.
            </p>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); if (email) { setDone(true); setEmail(""); setTimeout(() => setDone(false), 3000); } }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 rounded-full border bg-background px-5 py-3.5 text-sm focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 outline-none"
            />
            <button type="submit" className="btn-primary">
              {done ? <CheckCircle2 className="h-4 w-4" /> : <Send className="h-4 w-4" />}
              {done ? "Subscribed" : "Subscribe"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
