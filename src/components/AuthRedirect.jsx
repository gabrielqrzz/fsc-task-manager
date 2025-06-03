import { onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import { auth } from '../firebase'

const AuthRedirect = () => {
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate('/login')
      } else {
        setLoading(false)
      }
    })

    return () => unsubscribe()
  }, [navigate])

  if (loading) return <p className="mt-10 text-center">Carregando...</p>

  return <Outlet />
}

export default AuthRedirect
