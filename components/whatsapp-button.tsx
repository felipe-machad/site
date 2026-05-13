import Link from "next/link"
import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/5551999999999"
      target="_blank"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="Contato pelo WhatsApp"
    >
      <MessageCircle size={28} className="text-white" />
    </Link>
  )
}
