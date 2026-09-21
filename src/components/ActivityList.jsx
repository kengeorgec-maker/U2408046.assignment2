import { useState, useEffect } from 'react'
import { useApp } from '../context/AppContext'

export default function ActivityList() {
  const { activities, categories } = useApp()
  const [filter, setFilter] = useState('all')
  const [filtered, setFiltered] = useState(activities)

  // useEffect + conditional rendering: recompute filtered list whenever
  // the activities or the selected filter changes.
  useEffect(() => {
    if (filter === 'all') {
      setFiltered(activities)
    } else {
      setFiltered(activities.filter((a) => a.category === filter))
    }
  }, [filter, activities])

  function categoryName(id) {
    const cat = categories.find((c) => c.id === id)
    return cat ? cat.name : id
  }

  return (
    <div className="page">
      <h1>Activity List</h1>

      <label className="filter-label">
        Filter by category:
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All Categories</option>
          {categories.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </label>

      {filtered.length === 0 ? (
        <p>No activities found in this category.</p>
      ) : (
        <table className="activity-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Date</th>
              <th>Claimed</th>
              <th>Approved</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((a) => (
              <tr key={a.id}>
                <td>{a.title}</td>
                <td>{categoryName(a.category)}</td>
                <td>{a.date}</td>
                <td>{a.pointsClaimed}</td>
                <td>{a.pointsApproved}</td>
                <td>
                  <span className={`status status-${a.status.toLowerCase()}`}>
                    {a.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
