import { useEffect, useState } from "react";
import { Menu, X, MessageCircle, Compass } from "lucide-react";
import { Link, useLocation } from "@tanstack/react-router";
import logoImg from "@/assets/courses/Logo_img.png";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/courses", label: "Courses" },
  { href: "/placements", label: "Placements" },
  { href: "/gallery", label: "Gallery" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md shadow-[0_2px_20px_-10px_rgba(8,28,75,0.25)]" : "bg-background/60 backdrop-blur"
      }`}
    >
      <div className="container-x flex h-16 md:h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span>
            <img src={logoImg} alt="Logo" className="h-20 w-20 sm:h-25 sm:w-25 mb-[-8] sm:mb-[-8]" />
          </span>
          <div className="leading-tight">
            <div className="font-display text-md font-extrabold text-charcoal sm:text-lg ">CADPOINT</div>
            <div className="text-[10px] tracking-widest text-muted-foreground sm:-mt-0.5">TIRUVARUR</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={`text-sm font-medium transition-colors hover:text-brand-red ${
                (l.href === "/" && location.pathname === "/") || (l.href !== "/" && location.pathname.startsWith(l.href))
                  ? "text-brand-red"
                  : "text-foreground/80"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noreferrer"
            className="btn-whatsapp hidden sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a> */}
          <button
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t bg-background">
          <div className="container-x py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setOpen(false)}
                className={`rounded-md px-3 py-2.5 text-sm font-medium hover:bg-muted ${
                  (l.href === "/" && location.pathname === "/") || (l.href !== "/" && location.pathname.startsWith(l.href))
                    ? "text-brand-red bg-muted"
                    : "text-foreground/80"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
