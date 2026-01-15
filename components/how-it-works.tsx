import { Calendar, Search, Layers, TrendingUp } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: Calendar,
      step: "Step 1",
      title: "Book a strategy session",
    },
    {
      icon: Search,
      step: "Step 2",
      title: "We audit, research, plan, and build your strategy",
    },
    {
      icon: Layers,
      step: "Step 3",
      title: "Choose a coaching, group, or social media management plan",
    },
    {
      icon: TrendingUp,
      step: "Step 4",
      title: "Grow steadily with measurable wins",
    },
  ]

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How It Works</h2>
          <p className="text-muted-foreground">Step by step process to your success</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-8">
              {steps.map((item, index) => (
                <div key={index} className="relative flex items-start gap-6">
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div className="pt-3">
                    <span className="text-primary font-semibold text-sm">{item.step}</span>
                    <h3 className="text-lg font-semibold text-foreground mt-1">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
