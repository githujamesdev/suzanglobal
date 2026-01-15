import Image from "next/image"

export function About() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-primary/10 rounded-2xl translate-x-4 translate-y-4" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border">
                <Image src="/professional-african-woman-marketing-strategist-wo.jpg" alt="Suzanna at work" fill className="object-cover" />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">About Suzanne</h2>
            <p className="text-primary font-medium">Your Marketing & AI Growth Strategist</p>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                {
                  "Hey, I'm Suzanne, a marketing and AI consultant with proven experience helping businesses grow online and turn followers into paying customers."
                }
              </p>
              <p>
                I blend creative strategy, hands-on execution, and the latest AI systems to help you dominate your
                niche.
              </p>
              <p>
                {
                  "With over 5+ years in digital marketing, I've helped brands increase visibility, optimize content systems, and build conversion-driven campaigns."
                }
              </p>
              <p className="text-foreground font-medium">
                {"My work isn't guesswork, it's driven by data, psychology, and AI-powered insights."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
