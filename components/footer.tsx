import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-10 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <Link href="/" className="text-xl font-bold text-foreground">
              Suzanne<span className="text-primary">.</span>
            </Link>
            <p className="text-muted-foreground text-sm mt-1">Marketing & AI Consulting</p>
          </div>
          
          <p className="text-muted-foreground text-sm">© 2026 Suzanne Marketing & AI Consulting</p>
          
          <div className="flex flex-col items-center md:items-end gap-1 text-center md:text-right">
            <p className="text-muted-foreground text-xs">
              Designed by{" "}
              <a 
                href="" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors font-medium"
              >
                Nava Digital Hub
              </a>
            </p>
            <p className="text-muted-foreground text-sm">
              <a href="tel:0706036493" className="hover:text-primary transition-colors">
                0706 036 493
              </a>
            </p>
            
          </div>
        </div>
      </div>
    </footer>
  )
}