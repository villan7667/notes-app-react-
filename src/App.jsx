"use client"

import { useMemo, useState, useCallback } from "react"
import { FiTrash2 } from "react-icons/fi"
import Header from "./components/Header.jsx"
import Hero from "./components/Hero.jsx"
import AddNoteForm from "./components/AddNoteForm.jsx"
import NotesBoard from "./components/NotesBoard.jsx"
import Alert from "./components/Alert.jsx"
import useLocalStorage from "./hooks/useLocalStorage.jsx"

const App = () => {
  const [notes, setNotes] = useLocalStorage("keepr.notes", [])
  const [showAlert, setShowAlert] = useState(false)

  const handleAdd = useCallback(
    (note) => {
      if (!note?.title?.trim() && !note?.content?.trim()) {
        setShowAlert(true)
        setTimeout(() => setShowAlert(false), 1600)
        return
      }
      setNotes((prev) => [
        {
          id: crypto.randomUUID(),
          title: note.title.trim(),
          content: note.content.trim(),
          color: note.color,
          createdAt: Date.now(),
        },
        ...prev,
      ])
    },
    [setNotes],
  )

  const handleDelete = useCallback(
    (id) => {
      setNotes((prev) => prev.filter((n) => n.id !== id))
    },
    [setNotes],
  )

  const handleUpdate = useCallback(
    (id, newTitle, newContent) => {
      setNotes((prev) =>
        prev.map((note) =>
          note.id === id
            ? {
                ...note,
                title: newTitle.trim(),
                content: newContent.trim(),
                updatedAt: Date.now(),
              }
            : note
        )
      )
    },
    [setNotes],
  )

  const handleClearAll = useCallback(() => {
    setNotes([])
  }, [setNotes])

  const sortedNotes = useMemo(() => {
    return [...notes].sort((a, b) => b.createdAt - a.createdAt)
  }, [notes])

  return (
    <div className="min-h-screen bg-aurora text-slate-900">
      <div className="bg-engrave">
        <Header />

        <main className="relative">
          <Hero />

          <section aria-labelledby="add-note" className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 -mt-14">
            <div className="rounded-xl bg-white/80 backdrop-blur shadow-xl ring-1 ring-black/5 p-4 sm:p-6">
              <div className="flex items-center justify-between mb-3">
                <h2 id="add-note" className="text-lg sm:text-xl font-semibold text-slate-800">
                  Add a new note
                </h2>
                <button
                  type="button"
                  onClick={handleClearAll}
                  className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-rose-600 focus-ring"
                  aria-label="Clear all notes"
                  title="Clear all notes"
                >
                  <FiTrash2 className="h-4 w-4" />
                  Clear all
                </button>
              </div>

              {showAlert && <Alert title="Empty note" description="Please write a title or content before adding." />}

              <AddNoteForm onAdd={handleAdd} />
            </div>
          </section>

          <section aria-labelledby="your-notes" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-8 pb-16">
            <h2 id="your-notes" className="sr-only">
              Your notes
            </h2>
            <NotesBoard 
              notes={sortedNotes} 
              onDelete={handleDelete}
              onUpdate={handleUpdate}
            />
          </section>
        </main>

        <footer className="border-t border-white/20 bg-white/30 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
            <p className="text-sm text-slate-600">Keeper — A creative notes experience.</p>
            <a href="https://villan7667portfolio.netlify.app/" className="text-sm text-slate-600 hover:text-slate-800 focus-ring rounded">
              Built with code with Villan@7667
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
