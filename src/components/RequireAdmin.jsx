// components/RequireAdmin.tsx
import { useEffect, useState } from 'react'

import { auth } from '../../config/firebaseConfig'
import { Button } from './ui/button'
import {
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth'

const ADMIN_EMAIL = 'fagundediego2015@gmail.com'

export default function RequireAdmin({ children }) {
  const [user, setUser] = useState(null)
  const [checking, setChecking] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user?.email === ADMIN_EMAIL) {
        setUser(user)
      } else {
        setUser(null)
      }
      setChecking(false)
    })
    return () => unsubscribe()
  }, [])

  const login = async () => {
    const provider = new GoogleAuthProvider()
    try {
      await signInWithPopup(auth, provider)
    } catch (err) {
      console.error(err)
    }
  }

  if (checking) return <p>Verificando permissões...</p>

  if (!user) {
    return (
      <div className="flex h-screen flex-col items-center justify-center">
        <p>Você precisa estar logado com uma conta autorizada.</p>
        <Button
          onClick={login}
          className="mt-4 rounded bg-blue-500 px-4 py-2 text-white"
        >
          Entrar com Google
        </Button>
      </div>
    )
  }

  return <>{children}</>
}
