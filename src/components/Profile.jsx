import { useApp } from '../context/AppContext'

export default function Profile() {
  const { student, activities, totalApprovedPoints } = useApp()

  if (!student) return null

  const approvedCount = activities.filter((a) => a.status === 'Approved').length
  const pendingCount = activities.filter((a) => a.status === 'Pending').length

  return (
    <div className="page">
      <h1>Student Profile</h1>
      <div className="card">
        <p><strong>Name:</strong> {student.name}</p>
        <p><strong>UID:</strong> {student.uid}</p>
        <p><strong>Department:</strong> {student.department}</p>
        <p><strong>Semester:</strong> {student.semester}</p>
      </div>

      <h2>Activity Points Summary</h2>
      <div className="card">
        <p><strong>Total Activities Submitted:</strong> {activities.length}</p>
        <p><strong>Approved Activities:</strong> {approvedCount}</p>
        <p><strong>Pending Activities:</strong> {pendingCount}</p>
        <p><strong>Total Points Earned:</strong> {totalApprovedPoints}</p>
        <p><strong>Target Points:</strong> {student.targetPoints}</p>
      </div>
    </div>
  )
}
