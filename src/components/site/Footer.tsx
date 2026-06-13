import { Compass, Facebook, Instagram, Youtube, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "@tanstack/react-router";
import logoImg from "@/assets/courses/Logo_img.png";

export function Footer() {
  return (
    <footer id="about" className="bg-charcoal text-charcoal-foreground pt-16 pb-8">
      <div className="container-x grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-15 w-15 rounded-full bg-white">
              <img src={logoImg} alt="Logo" className="h-15 w-15" />
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
            <a href="https://www.facebook.com/CADDTVR" className="h-9 w-9 rounded-full bg-white/10 hover:bg-brand-red flex items-center justify-center transition-colors" aria-label="Facebook">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="https://www.instagram.com/cadpointthiruvarur?igsh=aXNmODU4MGVxNDk0" className="h-9 w-9 rounded-full bg-white/10 hover:bg-brand-red flex items-center justify-center transition-colors" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" className="h-9 w-9 rounded-full bg-white/10 hover:bg-brand-red flex items-center justify-center transition-colors" aria-label="YouTube">
              <Youtube className="h-4 w-4" />
            </a>
            <a href="#" className="h-9 w-9 rounded-full bg-white/10 hover:bg-brand-red flex items-center justify-center transition-colors" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-base">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li><Link to="/" className="hover:text-brand-red transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-brand-red transition-colors">About Us</Link></li>
            <li><Link to="/courses" className="hover:text-brand-red transition-colors">Courses</Link></li>
            <li><Link to="/placements" className="hover:text-brand-red transition-colors">Placements</Link></li>
            <li><Link to="/gallery" className="hover:text-brand-red transition-colors">Gallery</Link></li>
            <li><Link to="/testimonials" className="hover:text-brand-red transition-colors">Testimonials</Link></li>
            <li><Link to="/contact" className="hover:text-brand-red transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-base">Popular Courses</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {["autocad", "revit-architecture", "staad-pro", "catia", "solidworks", "full-stack-development", "python-programming", "data-science"].map((slug) => {
              const names: Record<string, string> = {
                "autocad": "AutoCAD", "revit-architecture": "Revit", "staad-pro": "STAAD Pro",
                "catia": "CATIA", "solidworks": "SolidWorks", "full-stack-development": "Full Stack",
                "python-programming": "Python", "data-science": "Data Science"
              };
              return (
                <li key={slug}><Link to="/courses/$slug" params={{ slug }} className="hover:text-brand-red transition-colors">{names[slug]}</Link></li>
              );
            })}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-base">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-brand-red flex-shrink-0" /> 21/2, Durgalaya Rd, Madappuram, Thiruvarur, Tamil Nadu 610001 </li>
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-brand-red flex-shrink-0" /> +91 82484 90202</li>
            <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 text-brand-red flex-shrink-0" />cadpointthiruvarur@gmail.com </li>
            <li>
              {/* <a
                href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4423576766076!2d79.6279187!3d10.777392299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5547a1db812043%3A0x339f9652bb4e147c!2sCADPOINT%20-%20Authorised%20CADD%20Training%20Centre%20in%20Thiruvarur!5e0!3m2!1sen!2sin!4v1781349001607!5m2!1sen!2sin"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-1 rounded-full bg-white/10 hover:bg-brand-red px-4 py-2 text-xs font-semibold transition-colors"
              >
                Open in Google Maps
              </a> */}

              <a
                href="https://maps.google.com/?q=CADPOINT+Authorised+CADD+Training+Centre+Thiruvarur"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-1 rounded-full bg-white/10 hover:bg-brand-red px-4 py-2 text-xs font-semibold transition-colors"
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
