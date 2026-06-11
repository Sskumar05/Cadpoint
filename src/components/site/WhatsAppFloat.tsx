import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/917010850923"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 h-14 w-14 rounded-full bg-whatsapp text-white shadow-[0_15px_40px_-10px_rgba(34,197,94,0.6)] flex items-center justify-center hover:scale-110 transition-transform"
    >
      <span className="absolute inset-0 rounded-full bg-whatsapp animate-ping opacity-30" />
      <MessageCircle className="h-6 w-6 relative" />
    </a>
  );
}
