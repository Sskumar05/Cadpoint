import { useEffect, useState } from "react";
import { Menu, X, MessageCircle, Compass } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#courses", label: "Courses" },
  { href: "#placements", label: "Placements" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
        <a href="#home" className="flex items-center gap-2">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-navy text-navy-foreground">
            <Compass className="h-5 w-5" />
          </span>
          <div className="leading-tight">
            <div className="font-display text-lg font-extrabold text-navy">CADPOINT</div>
            <div className="text-[10px] tracking-widest text-muted-foreground -mt-0.5">TIRUVARUR</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 hover:text-electric transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noreferrer"
            className="btn-whatsapp hidden sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
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
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium hover:bg-muted"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
