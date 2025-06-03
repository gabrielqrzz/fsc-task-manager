import { signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'

import { auth } from '../firebase'

export default function Login() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, email, senha)
      navigate('/home')
    } catch (err) {
      alert('Erro no login: ' + err.message)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-brand-background">
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-bold text-brand-dark-blue">
          Entrar
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-brand-process"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            className="w-full rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-brand-process"
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full rounded-xl bg-brand-primary p-3 text-white transition hover:bg-brand-primary"
          >
            Entrar
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          Não tem uma conta?{' '}
          <Link to="/cadastro" className="text-brand-primary hover:underline">
            Cadastre-se
          </Link>
        </p>
      </div>
    </div>
  )
}
