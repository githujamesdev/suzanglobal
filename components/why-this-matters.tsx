import { AlertCircle, TrendingUp, Target } from "lucide-react"

export function WhyThisMatters() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Why This Matters</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Most businesses waste time posting without a plan, that's why you feel{" "}
            <span className="text-primary font-medium">unseen</span>,{" "}
            <span className="text-primary font-medium">inconsistent</span>, and{" "}
            <span className="text-primary font-medium">stuck</span>.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            With the right <strong className="text-foreground">strategy + execution + AI tools</strong>, your marketing
            becomes <span className="text-primary">predictable</span>, <span className="text-primary">profitable</span>,
            and <span className="text-primary">sustainable</span>.
          </p>
        </div>

        {/* <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            {
              icon: AlertCircle,
              title: "The Problem",
              description: "Posting without a plan leads to inconsistent results and wasted resources.",
            },
            {
              icon: Target,
              title: "The Solution",
              description: "Strategic marketing powered by AI tools and data driven insights.",
            },
            {
              icon: TrendingUp,
              title: "The Result",
              description: "Predictable growth, consistent inquiries, and better ROI.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 transition-colors"
            >
              <item.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  )
}
