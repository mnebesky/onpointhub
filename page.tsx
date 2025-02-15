"use client"

import { useEffect, useState } from "react"
import { Mail, Phone, Code, Brain, Building2 } from "lucide-react"
import { roboto, robotoMono } from "./fonts"

export default function Home() {
  const [bgColor, setBgColor] = useState("hsl(200, 100%, 95%)")

  useEffect(() => {
    const interval = setInterval(() => {
      const hue = Math.floor(Math.random() * 360)
      setBgColor(`hsl(${hue}, 100%, 95%)`)
    }, 10000) // Change color every 10 seconds

    return () => clearInterval(interval)
  }, [])

  const cards = [
    { badge: "Web Dev", url: "motionweb.cz", bgColor: "from-blue-200 to-green-200", icon: Code },
    { badge: "AI Dev", url: "vyvoj.ai", bgColor: "from-purple-200 to-pink-200", icon: Brain },
    { badge: "Web App", url: "digitalnistavby.cz", bgColor: "from-yellow-200 to-red-200", icon: Building2 },
  ]

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center p-8 text-gray-800 transition-colors duration-10000 ease-in-out ${roboto.variable} ${robotoMono.variable}`}
      style={{ backgroundColor: bgColor }}
    >
      <main className="max-w-5xl w-full space-y-16">
        <h1 className="text-6xl font-medium tracking-tight font-mono text-left lowercase">onpoint hub</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`rounded-md px-6 py-8 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br ${card.bgColor} animate-gradient-x flex flex-col`}
            >
              <div className="flex justify-between items-start mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-white bg-opacity-50 text-gray-700">
                  {card.badge}
                </span>
                <card.icon className="w-6 h-6 text-gray-600" />
              </div>
              <a
                href={`https://${card.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center text-sm font-mono text-gray-600 hover:text-blue-600 transition-colors mt-auto"
              >
                {card.url}
              </a>
            </div>
          ))}
        </div>

        <div className="space-y-2 text-left">
          <p className="text-lg font-mono">OnPoint Digital s.r.o.</p>
          <p className="text-sm">IČO: 22285008</p>
          <p className="text-sm">Rybná 716/24, 110 00 Praha - Staré Město</p>
          <a href="mailto:martin@vyvoj.ai" className="inline-block mt-4 text-sm hover:underline">
            <Mail className="inline mr-2 h-4 w-4" />
            martin@vyvoj.ai
          </a>
          <a href="tel:+420702194805" className="inline-block mt-2 text-sm hover:underline ml-4">
            <Phone className="inline mr-2 h-4 w-4" />
            +420 702 194 805
          </a>
        </div>
      </main>
    </div>
  )
}

