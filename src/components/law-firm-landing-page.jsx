'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CardContent, Card } from "@/components/ui/card"
import { Scale, BookOpen, Briefcase, Users } from "lucide-react"

export function LawFirmLandingPageComponent() {
  return (
    (<div className="flex flex-col min-h-screen bg-black text-white">
      <header className="bg-blue-900 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Justice & Associates</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#services" className="hover:text-blue-300">Services</a></li>
              <li><a href="#about" className="hover:text-blue-300">About</a></li>
              <li><a href="#team" className="hover:text-blue-300">Team</a></li>
              <li><a href="#contact" className="hover:text-blue-300">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-grow">
        <section className="bg-blue-800 text-white py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Protecting Your Rights, Securing Your Future</h2>
            <p className="text-xl mb-8">Expert legal counsel for all your needs</p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Schedule a Consultation</Button>
          </div>
        </section>

        <section id="services" className="py-16 bg-black">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <Scale className="h-10 w-10 mb-4" />, title: "Civil Litigation" },
                { icon: <BookOpen className="h-10 w-10 mb-4" />, title: "Corporate Law" },
                { icon: <Briefcase className="h-10 w-10 mb-4" />, title: "Employment Law" },
                { icon: <Users className="h-10 w-10 mb-4" />, title: "Family Law" },
              ].map((service, index) => (
                <Card key={index} className="text-center p-6 bg-blue-900 text-white">
                  <CardContent>
                    <div className="flex justify-center">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-blue-200">Expert legal advice and representation in {service.title.toLowerCase()}.</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-16 bg-blue-900">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">About Our Firm</h2>
            <p className="text-lg text-center max-w-3xl mx-auto text-blue-100">
              Justice & Associates has been providing top-tier legal services for over 25 years. Our team of experienced
              attorneys is dedicated to delivering personalized, effective legal solutions for our clients.
            </p>
          </div>
        </section>

        <section id="team" className="py-16 bg-black">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Jane Doe", role: "Senior Partner", image: "/placeholder.svg?height=200&width=200" },
                { name: "John Smith", role: "Managing Partner", image: "/placeholder.svg?height=200&width=200" },
                { name: "Emily Brown", role: "Associate Attorney", image: "/placeholder.svg?height=200&width=200" },
              ].map((member, index) => (
                <Card key={index} className="text-center bg-blue-900 text-white">
                  <CardContent className="p-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-blue-200">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 bg-blue-900">
          <div className="container mx-auto max-w-md">
            <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
            <Card className="bg-black text-white">
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="bg-blue-800 text-white placeholder-blue-300" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      className="bg-blue-800 text-white placeholder-blue-300" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      className="bg-blue-800 text-white placeholder-blue-300" />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Justice & Associates. All rights reserved.</p>
        </div>
      </footer>
    </div>)
  );
}