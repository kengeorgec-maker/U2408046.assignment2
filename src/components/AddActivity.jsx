import { useState } from 'react'
import { useApp } from '../context/AppContext'

export default function AddActivity() {
  const { categories, addActivity } = useApp()

  const [form, setForm] = useState({
    title: '',
    category: categories[0]?.id || '',
    date: '',
    description: '',
    pointsClaimed: '',
  })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    addActivity({
      title: form.title,
      category: form.category,
      date: form.date,
      description: form.description,
      pointsClaimed: Number(form.pointsClaimed) || 0,
    })
    setSubmitted(true)
    setForm({
      title: '',
      category: categories[0]?.id || '',
      date: '',
      description: '',
      pointsClaimed: '',
    })
  }

  return (
    <div className="page">
      <h1>Add Activity</h1>

      {submitted && (
        <p className="success">
          Activity submitted successfully. It will show as "Pending" until approved.
        </p>
      )}

      <form className="card" onSubmit={handleSubmit}>
        <label>
          Activity Title
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Category
          <select name="category" value={form.category} onChange={handleChange}>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </label>

        <label>
          Date
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Description
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows="3"
          />
        </label>

        <label>
          Points Claimed
          <input
            type="number"
            name="pointsClaimed"
            value={form.pointsClaimed}
            onChange={handleChange}
            min="0"
            required
          />
        </label>

        <button type="submit">Submit Activity</button>
      </form>
    </div>
  )
}
