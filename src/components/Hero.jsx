"use client"

import { useMemo } from "react"
import StickyNote from "./StickyNote.jsx"

const sampleNotes = [
  { title: "Ideas", content: "Try a new recipe\nLearn guitar" },
  { title: "Goals", content: "Read 20 pages daily" },
  { title: "Quote", content: "Create with intention." },
  { title: "Todo", content: "Finish assignment\nPolish UI" },
  { title: "Gratitude", content: "Family • Health • Time" },
  { title: "Sketch", content: "Landing layout • Bento" },
]

const rotations = ["-rotate-6", "-rotate-3", "rotate-2", "rotate-3", "rotate-6"]

const colors = [
  "bg-amber-100", // warm
  "bg-rose-100", // pink
  "bg-sky-100", // blue
]

const Hero = () => {
  const notesForHero = useMemo(() => {
    return sampleNotes.map((n, i) => ({
      ...n,
      color: colors[i % colors.length],
      rotation: rotations[i % rotations.length],
    }))
  }, [])

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-12 pb-28">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-slate-900">
            <h1 className="text-4xl md:text-5xl font-semibold text-balance">
              Capture thoughts in beautiful sticky notes
            </h1>
            <p className="mt-3 text-slate-700 leading-relaxed max-w-prose">
              A modern, delightful keeper app with animated gradients, engraved artwork, and a canvas of sticky notes in
              cursive. Fluid, fast, and fun.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#add-note"
                className="rounded-lg bg-teal-600 px-4 py-2.5 text-white font-medium shadow hover:bg-teal-700 focus-ring"
              >
                Add your first note
              </a>
              <a
                href="#your-notes"
                className="rounded-lg border border-slate-300 bg-white/80 px-4 py-2.5 text-slate-800 font-medium hover:bg-white focus-ring"
              >
                View notes
              </a>
            </div>
          </div>
          <div aria-hidden className="relative">
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 md:gap-5">
              {notesForHero.map((n, idx) => (
                <StickyNote
                  key={idx}
                  title={n.title}
                  content={n.content}
                  colorClass={n.color}
                  className={`floaty ${n.rotation}`}
                  compact
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
