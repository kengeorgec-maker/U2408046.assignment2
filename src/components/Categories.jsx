import { useApp } from '../context/AppContext'

export default function Categories() {
  const { categories, activities } = useApp()

  function countForCategory(id) {
    return activities.filter((a) => a.category === id).length
  }

  return (
    <div className="page">
      <h1>Activity Categories</h1>
      <div className="category-grid">
        {categories.map((c) => (
          <div className="card category-card" key={c.id}>
            <h3>{c.name}</h3>
            <p>{countForCategory(c.id)} activity(ies) recorded</p>
          </div>
        ))}
      </div>
    </div>
  )
}
