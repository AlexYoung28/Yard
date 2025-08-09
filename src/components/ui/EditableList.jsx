// src/components/ui/EditableList.jsx
import React, { useState, useRef, useEffect } from 'react';

export default function EditableList({ title, items, setItems, placeholder }) {
  const [draft, setDraft] = useState(items);
  const [editing, setEditing] = useState(false);
  const listRef = useRef(null);

  // Sync external updates
  useEffect(() => {
    if (!editing) setDraft(items);
  }, [items, editing]);

  const clean = (arr) => arr.filter((n) => n.trim() !== '');
  const update = (i, v) => setDraft((prev) => prev.map((s, idx) => (idx === i ? v : s)));
  const add = () => setDraft((prev) => [...prev, '']);
  const remove = (i) => {
    const name = draft[i] || 'empty';
    if (window.confirm(`Delete "${name}"?`)) {
      setDraft((prev) => prev.filter((_, idx) => idx !== i));
    }
  };

  const save = () => {
    setItems(clean(draft));
    setEditing(false);
  };
  const cancel = () => {
    setDraft(items);
    setEditing(false);
  };

  // Prevent overlay closing on scroll
  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const stop = (e) => e.stopPropagation();
    el.addEventListener('wheel', stop);
    return () => el.removeEventListener('wheel', stop);
  }, []);

  return (
    <div className="mb-6" ref={listRef}>
      <h3 className="font-semibold mb-2 flex justify-between items-center">
        {title}
        {!editing ? (
          <button onClick={() => setEditing(true)} className="text-sm text-emerald-600">Edit</button>
        ) : null}
      </h3>

      {editing ? (
        <>
          {draft.map((n, i) => (
            <div key={i} className="flex items-center gap-2 mb-1">
              <input
                className="flex-1 border p-2 rounded"
                value={n}
                placeholder={placeholder}
                onChange={(e) => update(i, e.target.value)}
              />
              <button onClick={() => remove(i)} className="px-2 text-red-600">Delete</button>
            </div>
          ))}
          <div className="flex gap-2 mt-2">
            <button onClick={add} className="px-2 py-1 border rounded">+ Add</button>
            <button onClick={save} className="px-2 py-1 bg-emerald-500 text-white rounded">Save</button>
            <button onClick={cancel} className="px-2 py-1 border rounded">Cancel</button>
          </div>
        </>
      ) : (
        <ul className="list-disc pl-5">
          {items.map((n, i) => (
            <li key={i}>{n}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
