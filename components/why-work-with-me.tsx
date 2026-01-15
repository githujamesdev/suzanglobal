import { UserCheck, FileText, Cpu, CalendarCheck } from "lucide-react"

export function WhyWorkWithMe() {
  const reasons = [
    {
      icon: UserCheck,
      title: "Personalized strategies",
      description: "Tailored just for you or your brand.",
    },
    {
      icon: FileText,
      title: "Actionable frameworks",
      description: "Plan, execute, repeat.",
    },
    {
      icon: Cpu,
      title: "AI integration",
      description: "Smarter tools, faster results.",
    },
    {
      icon: CalendarCheck,
      title: "Accountable coaching",
      description: "Weekly check-ins to review progress, plan next steps, and accelerate results.",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Work With Me</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <reason.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{reason.title}</h3>
              <p className="text-muted-foreground text-sm">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
