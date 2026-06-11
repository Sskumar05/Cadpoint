import { Compass, Facebook, Instagram, Youtube, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer id="about" className="bg-navy text-navy-foreground pt-16 pb-8">
      <div className="container-x grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-electric">
              <Compass className="h-5 w-5" />
            </span>
            <div>
              <div className="font-display text-lg font-extrabold">CADPOINT</div>
              <div className="text-[10px] tracking-widest text-white/60 -mt-0.5">TIRUVARUR</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            Premier CAD & IT training institute in Tiruvarur, building industry-ready professionals since 2010.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Youtube, Linkedin].map((Ic, i) => (
              <a key={i} href="#" className="h-9 w-9 rounded-full bg-white/10 hover:bg-electric flex items-center justify-center transition-colors">
                <Ic className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold text-base">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {["Home", "Courses", "Placements", "Gallery", "Testimonials", "Contact"].map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-electric transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-base">Popular Courses</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {["AutoCAD", "Revit", "STAAD Pro", "CATIA", "SolidWorks", "Full Stack Development", "Python", "Data Science"].map((c) => (
              <li key={c}><a href="#courses" className="hover:text-electric transition-colors">{c}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-base">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-electric flex-shrink-0" /> Main Road, Tiruvarur, Tamil Nadu 610001</li>
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-electric flex-shrink-0" /> +91 99999 99999</li>
            <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 text-electric flex-shrink-0" /> info@cadpointtiruvarur.in</li>
            <li>
              <a
                href="https://maps.google.com/?q=Tiruvarur"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-1 rounded-full bg-white/10 hover:bg-electric px-4 py-2 text-xs font-semibold transition-colors"
              >
                Open in Google Maps
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-x mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-white/60">
        <div>© {new Date().getFullYear()} CADPOINT Tiruvarur. All rights reserved.</div>
        <div className="flex gap-5">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
