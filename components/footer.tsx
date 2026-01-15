import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-10 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <Link href="/" className="text-xl font-bold text-foreground">
              Suzanne<span className="text-primary">.</span>
            </Link>
            <p className="text-muted-foreground text-sm mt-1">Marketing & AI Consulting</p>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Terms
            </Link>
          </div>

          <p className="text-muted-foreground text-sm">© 2026 Suzanne Marketing & AI Consulting</p>
        </div>
      </div>
    </footer>
  )
}
