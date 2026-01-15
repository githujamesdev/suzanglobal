import { Clock, MapPin, Crown, Users, Zap, Check } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Services() {
  const services = [
    {
      icon: Clock,
      title: "The Clarity Session",
      subtitle: "2-Hour Virtual Strategy Intensive",
      price: "KES 6,500",
      features: [
        "Deep audit of your brand, content, and current marketing systems",
        "Clarify your core offer, messaging, and ideal customer",
        "Identify gaps blocking visibility and sales",
        "Create a step-by-step growth roadmap",
        "Introduce AI tools to streamline content and execution",
        "High-level TikTok & Meta Ads direction",
      ],
      bestFor: "Entrepreneurs who feel stuck, overwhelmed, or inconsistent and need clarity and quick wins.",
    },
    // {
    //   icon: MapPin,
    //   title: "The 1:1 Intensive",
    //   subtitle: "In-Person Strategy & Implementation Session",
    //   price: "KES 15,000",
    //   features: [
    //     "In-person, 1:1 deep dive into your business",
    //     "Live optimization of offers, content ideas, and funnels",
    //     "Practical TikTok & Meta Ads strategy walkthrough",
    //     "Ads structure setup (objectives, creatives, messaging)",
    //     "AI tools configured specifically for your business",
    //     "Clear content + ads execution plan",
    //   ],
    //   bestFor: "Business owners who want real-time execution and practical clarity in one session.",
    // },
    {
      icon: Crown,
      title: "The Premium Coaching",
      subtitle: "Premium 1:1 Coaching",
      price: "KES 35,000/month",
      commitment: "Minimum 3-Month Commitment",
      features: [
        "3-hour monthly physical strategy session",
        "1-hour weekly check-ins",
        "Offer positioning, pricing, and conversion strategy",
        "Content systems for Instagram, TikTok & Reels",
        "TikTok & Meta Ads strategy",
        "AI-powered workflows for content, leads, and operations",
        "Accountability, structure, and measurable growth",
      ],
      bestFor: "Entrepreneurs who can implement independently but want consistent support and accountability.",
      featured: true,
    },
    {
      icon: Users,
      title: "The Team Growth Blueprint",
      subtitle: "Staff Training",
      price: "KES 45,000",
      features: [
        "In-person or virtual staff training session",
        "Clear brand positioning & content guidelines",
        "TikTok & Meta Ads fundamentals for business growth",
        "How staff should create, post, and optimize content",
        "AI tools to improve efficiency and consistency",
        "SOPs and simple workflows your team can follow",
      ],
      bestFor: "Businesses with in-house teams that need structure, clarity, and performance alignment.",
    },
    {
      icon: Zap,
      title: "The Visibility & Sales Engine",
      subtitle: "Social Media Management",
      price: "KES 80,000/month",
      commitment: "Minimum 3-Month Commitment",
      features: [
        "Content strategy & monthly planning",
        "Captions optimization and posting schedules",
        "Community engagement & growth strategy",
        "Performance tracking and reporting",
        "TikTok & Meta Ads strategy alignment",
        "Smart campaigns for sales and reach",
      ],
      bestFor: "Busy founders who want consistent online visibility without daily content stress.",
    },
  ]

  return (
    <section className="py-20" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the service that fits your needs and budget
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`bg-card border-border hover:border-primary/50 transition-colors relative ${
                service.featured ? "border-primary lg:scale-105" : ""
              }`}
            >
              {service.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{service.subtitle}</CardDescription>
                <div className="pt-2">
                  <span className="text-2xl font-bold text-primary">{service.price}</span>
                  {service.commitment && <p className="text-xs text-muted-foreground mt-1">{service.commitment}</p>}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    <span className="font-medium text-foreground">Best for:</span> {service.bestFor}
                  </p>
                </div>
                <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="#contact">Get Started</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
