"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, Phone, Mail, X } from "lucide-react"

export function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    session: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState("")

  const offers = [
    { name: "Strategy Session", price: "KES 6,500" },
    { name: "Premium Monthly Coaching", price: "KES 35,000", note: "(min. 3 months)" },
    { name: "Group Training", price: "KES 45,000" },
    { name: "Social Media Management", price: "KES 80,000" },
  ]

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.phone || !formData.session) {
      setSubmitStatus("validation")
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus("")

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'b4ad0714-2e55-46ff-a0be-5947ac52af0f',
          subject: `New Booking Request: ${formData.session}`,
          from_name: formData.name,
          email: formData.email,
          phone: formData.phone,
          session: formData.session,
          message: formData.message || 'No additional message provided',
        })
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", phone: "", session: "", message: "" })
        setTimeout(() => {
          setIsModalOpen(false)
          setSubmitStatus("")
        }, 2500)
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error('Error:', error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 bg-slate-50" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Ready to Grow & Sell?</h2>
          <p className="text-slate-600 mb-10">Pick the offer that suits you:</p>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {offers.map((offer, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-white border border-slate-200">
                <Check className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                <div className="text-left">
                  <span className="text-slate-900 font-medium">{offer.name}</span>
                  <span className="text-emerald-600 font-semibold ml-2">{offer.price}</span>
                  {offer.note && <span className="text-slate-500 text-sm ml-1">{offer.note}</span>}
                </div>
              </div>
            ))}
          </div>

          <Button 
            size="lg" 
            className="bg-emerald-600 text-white hover:bg-emerald-700 mb-8"
            onClick={() => setIsModalOpen(true)}
          >
            Book Your Session Today
          </Button>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-600">
            <a
              href="mailto:msusanesther@gmail.com"
              className="flex items-center gap-2 hover:text-emerald-600 transition-colors"
            >
              <Mail className="h-5 w-5" />
              Questions? Contact me
            </a>
            <a href="tel:+254759544952" className="flex items-center gap-2 hover:text-emerald-600 transition-colors">
              <Phone className="h-5 w-5" />
              +254 759 544 952
            </a>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
            >
              <X className="h-6 w-6" />
            </button>

            <h3 className="text-2xl font-bold text-slate-900 mb-6">Book Your Session</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                  placeholder="+254 700 000 000"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Select Session *
                </label>
                <select
                  name="session"
                  value={formData.session}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                  required
                >
                  <option value="">Choose a session...</option>
                  {offers.map((offer, index) => (
                    <option key={index} value={offer.name}>
                      {offer.name} - {offer.price}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none resize-none"
                  placeholder="Any additional information..."
                />
              </div>

              {submitStatus === "validation" && (
                <div className="p-3 bg-amber-50 text-amber-700 rounded-lg text-sm">
                  ⚠ Please fill in all required fields
                </div>
              )}

              {submitStatus === "success" && (
                <div className="p-3 bg-emerald-50 text-emerald-700 rounded-lg text-sm">
                  ✓ Booking request sent successfully! We'll contact you soon.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-3 bg-red-50 text-red-700 rounded-lg text-sm">
                  ✗ Failed to send booking. Please try again or contact us directly.
                </div>
              )}

              <div className="flex gap-3 pt-2">
                <Button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 bg-slate-200 text-slate-700 hover:bg-slate-300"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-emerald-600 text-white hover:bg-emerald-700 disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Submit Booking"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Check, Phone, Mail } from "lucide-react"

// export function Pricing() {
//   const offers = [
//     { name: "Strategy Session", price: "KES 6,500" },
//     { name: "Premium Monthly Coaching", price: "KES 35,000", note: "(min. 3 months)" },
//     { name: "Group Training", price: "KES 45,000" },
//     { name: "Social Media Management", price: "KES 80,000" },
//   ]

//   return (
//     <section className="py-20 bg-card" id="contact">
//       <div className="container mx-auto px-4">
//         <div className="max-w-3xl mx-auto text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Grow & Sell?</h2>
//           <p className="text-muted-foreground mb-10">Pick the offer that suits you:</p>

//           <div className="grid sm:grid-cols-2 gap-4 mb-10">
//             {offers.map((offer, index) => (
//               <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-background border border-border">
//                 <Check className="h-5 w-5 text-primary flex-shrink-0" />
//                 <div className="text-left">
//                   <span className="text-foreground font-medium">{offer.name}</span>
//                   <span className="text-primary font-semibold ml-2">{offer.price}</span>
//                   {offer.note && <span className="text-muted-foreground text-sm ml-1">{offer.note}</span>}
//                 </div>
//               </div>
//             ))}
//           </div>

//           <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 mb-8">
//             <Link href="tel:+254759544952">Book Your Session Today</Link>
//           </Button>

//           <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground">
//             <a
//               href="mailto:msusanesther@gmail.com"
//               className="flex items-center gap-2 hover:text-primary transition-colors"
//             >
//               <Mail className="h-5 w-5" />
//               Questions? Contact me
//             </a>
//             <a href="tel:+254759544952" className="flex items-center gap-2 hover:text-primary transition-colors">
//               <Phone className="h-5 w-5" />
//               +254 759 544 952
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
