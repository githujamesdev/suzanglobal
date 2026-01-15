import { Quote } from "lucide-react"

export function Testimonials() {
  return (
    <section className="py-20" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Testimonials</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative p-8 md:p-12 rounded-2xl bg-card border border-border">
            <Quote className="h-12 w-12 text-primary/30 absolute top-6 left-6" />
            <div className="relative z-10 text-center">
              <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
                {
                  '"Suzanne is a brilliant and natural human. Made social media sound easy. Also the training incorporated my staff and I."'
                }
              </p>
              <div>
                <p className="font-semibold text-foreground">Winnie</p>
                <p className="text-muted-foreground text-sm">CEO, Pendo Kids</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
