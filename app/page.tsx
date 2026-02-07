import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { WhyThisMatters } from "@/components/why-this-matters"
import { WhatIDo } from "@/components/what-i-do"
// import { GrowthProcess } from "@/components/growth-process"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { WhyWorkWithMe } from "@/components/why-work-with-me"
import { HowItWorks } from "@/components/how-it-works"
import { Testimonials } from "@/components/testimonials"
import { Pricing } from "@/components/pricing"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <WhyThisMatters />
      <WhatIDo />
      <Services />
      <About />
      <WhyWorkWithMe />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  )
}
