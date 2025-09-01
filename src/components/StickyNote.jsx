"use client"
import { FiTrash2, FiEdit2 } from "react-icons/fi"
import { useState } from "react"

const StickyNote = ({ id, title, content, colorClass = "bg-amber-100", onDelete, onUpdate, compact = false, className = "" }) => {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <article
      className={`has-pin rounded-md shadow-[0_8px_20px_rgba(0,0,0,0.08)] ring-1 ring-black/5 ${colorClass} p-3 sm:p-4 select-none ${className}`}
      role="note"
      aria-label={title || "Note"}
      tabIndex={0}
    >
      {isEditing ? (
        <div className="space-y-3">
          <input
            type="text"
            defaultValue={title}
            className="w-full font-cursive text-xl leading-snug text-slate-800 bg-transparent border-b border-slate-300 focus:border-teal-500 outline-none"
            placeholder="Title"
            id={`edit-title-${id}`}
          />
          <textarea
            defaultValue={content}
            className="w-full text-slate-800 leading-relaxed bg-transparent border border-slate-300 rounded p-2 focus:border-teal-500 outline-none resize-none"
            rows={3}
            placeholder="Note content"
            id={`edit-content-${id}`}
          />
        </div>
      ) : (
        <>
          {title ? <h3 className="font-cursive text-xl leading-snug text-slate-800 mb-1">{title}</h3> : null}
          <p className={`text-slate-800 ${compact ? "text-sm leading-6" : "leading-relaxed note-content"}`}>{content}</p>
        </>
      )}
      {(onDelete || onUpdate) ? (
        <div className="mt-3 flex justify-end gap-2">
          {onUpdate && (
            <button
              className="inline-flex items-center gap-2 text-sm text-slate-700 hover:text-teal-600 focus-ring rounded"
              onClick={() => {
                if (isEditing) {
                  const newTitle = document.getElementById(`edit-title-${id}`).value
                  const newContent = document.getElementById(`edit-content-${id}`).value
                  onUpdate(id, newTitle, newContent)
                }
                setIsEditing(!isEditing)
              }}
              aria-label={isEditing ? "Save note" : "Edit note"}
              title={isEditing ? "Save" : "Edit"}
            >
              {isEditing ? "Save" : <FiEdit2 className="h-4 w-4" />}
            </button>
          )}
          {onDelete && (
            <button
              className="inline-flex items-center gap-2 text-sm text-slate-700 hover:text-rose-400 focus-ring rounded"
              onClick={() => onDelete(id)}
              aria-label="Delete note"
              title="Delete"
            >
              <FiTrash2 className="h-4 w-4" />
            </button>
          )}
        </div>
      ) : null}
    </article>
  )
}

export default StickyNote
