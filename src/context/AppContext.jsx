import { createContext, useContext, useState, useEffect } from 'react'
import studentsData from '../data/students.json'
import activitiesData from '../data/activities.json'
import categoriesData from '../data/categories.json'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [student, setStudent] = useState(null)
  const [activities, setActivities] = useState([])
  const categories = categoriesData

  // Load logged-in student from localStorage on first render (simple persistence)
  useEffect(() => {
    const savedUid = localStorage.getItem('loggedInUid')
    if (savedUid) {
      const found = studentsData.find((s) => s.uid === savedUid)
      if (found) {
        setStudent(found)
        setActivities(activitiesData.filter((a) => a.uid === savedUid))
      }
    }
  }, [])

  function login(uid, password) {
    const found = studentsData.find(
      (s) => s.uid === uid && s.password === password
    )
    if (found) {
      setStudent(found)
      setActivities(activitiesData.filter((a) => a.uid === found.uid))
      localStorage.setItem('loggedInUid', found.uid)
      return true
    }
    return false
  }

  function logout() {
    setStudent(null)
    setActivities([])
    localStorage.removeItem('loggedInUid')
  }

  function addActivity(newActivity) {
    const activityToAdd = {
      id: Date.now(),
      uid: student.uid,
      pointsApproved: 0,
      status: 'Pending',
      ...newActivity,
    }
    setActivities((prev) => [...prev, activityToAdd])
  }

  const totalApprovedPoints = activities.reduce(
    (sum, a) => sum + (Number(a.pointsApproved) || 0),
    0
  )

  const value = {
    student,
    activities,
    categories,
    login,
    logout,
    addActivity,
    totalApprovedPoints,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
