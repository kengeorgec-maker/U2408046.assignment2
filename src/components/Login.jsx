import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'

export default function Login() {
  const [uid, setUid] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login } = useApp()
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    const success = login(uid.trim(), password)
    if (success) {
      setError('')
      navigate('/dashboard')
    } else {
      setError('Invalid UID or password. Please try again.')
    }
  }

  return (
    <div className="page login-page">
      <div className="card login-card">
        <h1>Student Login</h1>
        <p className="hint">
          Sample logins: STU2023001 / pass123 or STU2023002 / pass456
        </p>
        <form onSubmit={handleSubmit}>
          <label>
            UID
            <input
              type="text"
              value={uid}
              onChange={(e) => setUid(e.target.value)}
              required
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          {error && <p className="error">{error}</p>}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}
