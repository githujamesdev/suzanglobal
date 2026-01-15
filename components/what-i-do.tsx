import { Users, MessageSquare, Settings, TrendingUp } from "lucide-react"

export function WhatIDo() {
  const benefits = [
    { icon: Users, text: "Ideal clients" },
    { icon: MessageSquare, text: "Consistent inquiries" },
    { icon: Settings, text: "Scalable systems" },
    { icon: TrendingUp, text: "Better ROI on every shilling spent" },
  ]

  return (
    <section className="py-20" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">What I Do</h2>
          <p className="text-lg text-muted-foreground mb-10">
            I help driven business owners build strong digital foundations so they finally start getting:
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-foreground font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
