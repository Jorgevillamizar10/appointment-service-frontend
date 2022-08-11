import { Navbar } from "../components/Navbar"

const RegisterPage = () => {

  const handleSubmit = (ev) => {
    ev.preventDefault()

    
  }

  return (
    <div>
      <Navbar auth={false} register={true} login={false}/>
      <main className="flex items-center justify-center w-full mt-16">
        <section className="container flex items-center justify-center h-[70vh]">
          <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
            <h3 className="text-[#00528A] text-[30px] font-bold mb-6">Registrarse</h3>
            <input className="border-[#00528A] border rounded px-2 mb-5 font-normal outline-none w-[250px]" type="text" name="name" placeholder="Nombre" />
            <input className="border-[#00528A] border rounded px-2 mb-5 font-normal outline-none w-[250px]" type="text" name="lastName" placeholder="Apellido" />
            <input className="border-[#00528A] border rounded px-2 mb-5 font-normal outline-none w-[250px]" type="number" name="id" placeholder="Cedula" />
            <input className="border-[#00528A] border rounded px-2 mb-5 font-normal outline-none w-[250px]" type="email" name="email" placeholder="Email" />
            <input className="border-[#00528A] border rounded px-2 mb-5 font-normal outline-none w-[250px]" type="password" name="password" placeholder="Contraseña" />
            <input className="border-[#00528A] border rounded px-2 mb-5 font-normal outline-none w-[250px]" type="number" name="cellphone" placeholder="Telefono" />
            <textarea className="border-[#00528A] border rounded px-2 font-normal outline-none w-[250px] h-[200px] resize-none" type="text" name="adress" placeholder="Direccion" />
            <button className="bg-[#00528A] text-white rounded-xl px-4 py-1 font-bold text-md mt-6">Enviar</button>
          </form>
        </section>
      </main>
    </div>
  )
}

export default RegisterPage