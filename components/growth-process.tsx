import { Search, Lightbulb, Rocket, RefreshCw } from "lucide-react"

export function GrowthProcess() {
  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Audit & Clarity",
      description: "Understand your current status and gaps",
    },
    {
      icon: Lightbulb,
      number: "02",
      title: "AI-enhanced Strategy",
      description: "Real, actionable plans tailored to your brand",
    },
    {
      icon: Rocket,
      number: "03",
      title: "Execution & Performance Tracking",
      description: "No guesswork, just results",
    },
    {
      icon: RefreshCw,
      number: "04",
      title: "Review & Scale",
      description: "Refine weekly so you grow month after month",
    },
  ]

  return (
    <section className="py-20 bg-card" id="process">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Your Strategic Growth Process</h2>
          <p className="text-xl text-primary font-semibold">Strategize → Optimize → Sell</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="p-6 rounded-lg bg-background border border-border hover:border-primary transition-colors h-full">
                <div className="text-5xl font-bold text-primary/20 mb-4">{step.number}</div>
                <step.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
