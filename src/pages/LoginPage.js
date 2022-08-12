import { useRouter } from "next/router"
import { useState } from "react"
import { Navbar } from "../components/Navbar"

const LoginPage = () => {
  const router = useRouter()
  const [loginForm, setLoginForm] = useState({
    email: null,
    password: null
  })
  const [loading, setLoading] = useState(false)
  const [erorr, setErorr] = useState(false)

  const onFormCHange = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value
    })
  }

  const onHandleSubmit = async () => {
    setLoading(true)
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/login`, {
      method: 'POST',
      body: JSON.stringify({email: loginForm.email, password: loginForm.password}),
      headers: { 'content-type': 'application/json' }
    }).then(res => res.json())

    if(response.code === 200 && !response.result.isAdmin){
      window.localStorage.setItem('auth', true)
      window.localStorage.setItem('name', response.result.name)
      window.localStorage.setItem('id', response.result.id)
      window.localStorage.setItem('isAdmin', response.result.isAdmin)
      router.push('/main-user')
    } else {
      setErorr(true)
    }
    setLoading(false)
  }

  return (
    <div>
      <Navbar admin={true} login={false}/>
      <main className="flex items-center justify-center w-full mt-16">
        <section className="container flex items-center justify-center h-[60vh]">
          <form className="flex flex-col items-center justify-center">
            <h3 className="text-[#00528A] text-[30px] font-bold mb-6">Iniciar Sesion</h3>
            <input onChange={(e) => onFormCHange(e)} className="border-[#00528A] border rounded px-2 mb-5 font-normal outline-none w-[250px]" type="email" name="email" placeholder="Email" />
            <input onChange={(e) => onFormCHange(e)} className="border-[#00528A] border rounded px-2 font-normal outline-none w-[250px]" type="password" name="password" placeholder="Contraseña" />
            { erorr && <span className="mt-4 text-red-600 text-base">Usuario no Encontrado</span>}
            <button type="button" onClick={() => onHandleSubmit()} className="bg-[#00528A] text-white rounded-xl px-4 py-1 font-bold text-md mt-6">{loading ? 'Loading...' : 'Enviar'}</button>
          </form>
        </section>
      </main>
    </div>
  )
}

export default LoginPage