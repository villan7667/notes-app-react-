import { useState, useCallback } from "react"
import { FiPlus } from "react-icons/fi"

const noteColors = [
  { name: "Amber", class: "bg-amber-100" },
  { name: "Sky", class: "bg-sky-100" },
  { name: "Rose", class: "bg-rose-100" },
]

const AddNoteForm = ({ onAdd }) => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [color, setColor] = useState(noteColors[0].class)

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()
      onAdd({ title, content, color })
      setTitle("")
      setContent("")
      setColor(noteColors[0].class)
    },
    [title, content, color, onAdd],
  )

  return (
    <form onSubmit={handleSubmit} className="grid sm:grid-cols-6 gap-4">
      <div className="sm:col-span-2">
        <label htmlFor="title" className="block text-sm font-medium text-slate-700 mb-1">
          Title
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g. Weekend Plan"
          className="w-full rounded-lg border border-slate-300 bg-white/90 px-3 py-2 text-slate-900 placeholder:text-slate-400 focus-ring"
        />
      </div>

      <div className="sm:col-span-3">
        <label htmlFor="content" className="block text-sm font-medium text-slate-700 mb-1">
          Content
        </label>
        <textarea
          id="content"
          rows={3}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write something memorable..."
          className="w-full rounded-lg border border-slate-300 bg-white/90 px-3 py-2 text-slate-900 placeholder:text-slate-400 focus-ring"
        />
      </div>

      <div className="sm:col-span-1">
        <label className="block text-sm font-medium text-slate-700 mb-1">Color</label>
        <div className="flex items-center gap-2">
          {noteColors.map((c) => (
            <button
              key={c.name}
              type="button"
              onClick={() => setColor(c.class)}
              aria-pressed={color === c.class}
              aria-label={`Choose ${c.name}`}
              className={`h-9 w-9 rounded-md ring-1 ring-black/5 ${c.class} focus-ring ${color === c.class ? "outline outline-teal-500" : ""}`}
            />
          ))}
        </div>
      </div>

      <div className="sm:col-span-6">
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-4 py-2.5 text-white font-medium shadow hover:bg-teal-700 focus-ring"
          aria-label="Add note"
          title="Add note"
        >
          <FiPlus className="h-5 w-5" />
          Add note
        </button>
      </div>
    </form>
  )
}

export default AddNoteForm
