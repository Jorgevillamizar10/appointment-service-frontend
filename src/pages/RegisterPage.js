import { useState } from "react"
import { useRouter } from "next/router"
import { Navbar } from "../components/Navbar"

const RegisterPage = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [registerState, setRegisterState] = useState({
    name: null,
    lastName: null,
    dni: null,
    email: null,
    password: null,
    cellphone: null,
    address: null,
    isAdmin: false
  })
  const disabledForm = registerState.name && registerState.lastName && registerState.dni && registerState.email && registerState.password && registerState.cellphone && registerState.address

  const onFormCHange = (e) => {
    setRegisterState({
      ...registerState,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (ev) => {
    setLoading(true)
    ev.preventDefault()
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/signup`, {
      method: 'POST',
      body: JSON.stringify({ ...registerState }),
      headers: { 'content-type': 'application/json' }
    }).then((res) => res.json())

    if(response.code === 200){
      router.push('/login')
    }
    setLoading(false)
  }

  return (
    <div>
      <Navbar />
      <main className="flex items-center justify-center w-full mt-16">
        <section className="container flex items-center justify-center h-[80vh] mb-14">
          <form className="flex flex-col items-center justify-center">
            <h3 className="text-[#00528A] text-[30px] font-bold mb-1">Registrarse</h3>
            <span className="text-center text-gray-500 mb-6 font-bold">(Debes llenar todos los datos del formulario para poder enviarlo)</span>
            <input onChange={(e) => onFormCHange(e)} className="border-[#00528A] border rounded px-2 mb-5 font-normal outline-none w-[250px]" type="text" name="name" placeholder="Nombre" />
            <input onChange={(e) => onFormCHange(e)} className="border-[#00528A] border rounded px-2 mb-5 font-normal outline-none w-[250px]" type="text" name="lastName" placeholder="Apellido" />
            <input onChange={(e) => onFormCHange(e)} className="border-[#00528A] border rounded px-2 mb-5 font-normal outline-none w-[250px]" type="number" name="dni" placeholder="Cedula" />
            <input onChange={(e) => onFormCHange(e)} className="border-[#00528A] border rounded px-2 mb-5 font-normal outline-none w-[250px]" type="email" name="email" placeholder="Email" />
            <input onChange={(e) => onFormCHange(e)} className="border-[#00528A] border rounded px-2 mb-5 font-normal outline-none w-[250px]" type="password" name="password" placeholder="Contraseña" />
            <input onChange={(e) => onFormCHange(e)} className="border-[#00528A] border rounded px-2 mb-5 font-normal outline-none w-[250px]" type="number" name="cellphone" placeholder="Telefono" />
            <textarea onChange={(e) => onFormCHange(e)} className="border-[#00528A] border rounded px-2 font-normal outline-none w-[250px] h-[200px] resize-none" type="text" name="address" placeholder="Direccion" />
            <label className="px-2 mt-5 w-[250px] flex items-center text-[#00528A] font-bold">
              <input onChange={(e) => setRegisterState({...registerState, [e.target.name]: e.target.checked })} className="border-[#00528A] border rounded font-normal outline-none mr-2" type="checkbox" name="isAdmin" />
              Usuario Administrador
            </label>
            <button
              className="bg-[#00528A] disabled:bg-gray-500 text-white rounded-xl px-4 py-1 font-bold text-md mt-6"
              disabled={!disabledForm}
              onClick={(ev) => handleSubmit(ev)}>
                {loading ? 'Loading...' : 'Enviar'}
            </button>
          </form>
        </section>
      </main>
    </div>
  )
}

export default RegisterPage