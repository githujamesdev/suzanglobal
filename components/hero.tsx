import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="inline-block px-4 py-1.5 bg-accent text-accent-foreground rounded-full text-sm font-medium">
              Marketing & AI Strategist
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Understand why people buy. <span className="text-primary">Then sell smarter.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              I offer Strategic Marketing & AI-Powered Systems To Help Business Owners Grow And Sell Online.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="#contact">
                  Book A Free Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-accent hover:text-accent-foreground hover:border-accent bg-transparent"
              >
                <Link href="#services">View Services</Link>
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute -inset-4 bg-primary/15 rounded-full blur-3xl" />
              <div className="absolute top-4 right-4 w-20 h-20 bg-accent/40 rounded-full blur-2xl" />
              <div className="absolute bottom-8 left-0 w-16 h-16 bg-primary/25 rounded-full blur-xl" />

              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary shadow-2xl shadow-primary/20">
                <Image
                  src="/professional-african-woman-marketing-consultant-he.jpg"
                  alt="Suzanna - Marketing & AI Strategist"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
