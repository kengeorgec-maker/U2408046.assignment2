import { useApp } from '../context/AppContext'

export default function Dashboard() {
  const { student, totalApprovedPoints } = useApp()

  if (!student) return null

  const remainingPoints = Math.max(student.targetPoints - totalApprovedPoints, 0)

  return (
    <div className="page">
      <h1>Dashboard</h1>
      <div className="card">
        <p><strong>Name:</strong> {student.name}</p>
        <p><strong>UID:</strong> {student.uid}</p>
        <p><strong>Department:</strong> {student.department}</p>
        <p><strong>Semester:</strong> {student.semester}</p>
      </div>

      <div className="summary-grid">
        <div className="summary-box">
          <span className="summary-number">{totalApprovedPoints}</span>
          <span className="summary-label">Points Earned</span>
        </div>
        <div className="summary-box">
          <span className="summary-number">{student.targetPoints}</span>
          <span className="summary-label">Target Points</span>
        </div>
        <div className="summary-box">
          <span className="summary-number">{remainingPoints}</span>
          <span className="summary-label">Remaining Points</span>
        </div>
      </div>
    </div>
  )
}
