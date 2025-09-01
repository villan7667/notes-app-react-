"use client"

import { useMemo } from "react"
import StickyNote from "./StickyNote.jsx"

const NotesBoard = ({ notes = [], onDelete, onUpdate }) => {
  const cols = useMemo(() => {
    if (typeof window === "undefined") return 3
    const w = window.innerWidth
    if (w >= 1280) return 4
    if (w >= 1024) return 4
    if (w >= 768) return 3
    return 2
  }, [])

  return (
    <div className="grid gap-4 sm:gap-5" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
      {notes.length === 0 ? (
        <p className="text-slate-700">No notes yet. Add something above to get started!</p>
      ) : (
        notes.map((n, idx) => (
          <StickyNote
            key={n.id}
            id={n.id}
            title={n.title}
            content={n.content}
            colorClass={n.color}
            onDelete={onDelete}
            onUpdate={onUpdate}
            className={
              idx % 5 === 0
                ? "-rotate-3"
                : idx % 5 === 1
                  ? "rotate-2"
                  : idx % 5 === 2
                    ? "rotate-1"
                    : idx % 5 === 3
                      ? "rotate-3"
                      : "-rotate-2"
            }
          />
        ))
      )}
    </div>
  )
}

export default NotesBoard
