import { Navbar } from "../components/Navbar"

const AdminPage = () => {
  return (
    <div>
      <Navbar auth={false} login={false} admin={true} />
      <main className="flex items-center justify-center w-full mt-16">
        <section className="container flex items-center justify-center h-[60vh]">
          <form className="flex flex-col items-center justify-center">
            <h3 className="text-[#00528A] text-[30px] font-bold mb-6">Iniciar Sesion como Administrador</h3>
            <input className="border-[#00528A] border rounded px-2 mb-5 font-normal outline-none w-[250px]" type="email" name="email" placeholder="Email" />
            <input className="border-[#00528A] border rounded px-2 font-normal outline-none w-[250px]" type="password" name="password" placeholder="Contraseña" />
            <button className="bg-[#00528A] text-white rounded-xl px-4 py-1 font-bold text-md mt-6">Enviar</button>
          </form>
        </section>
      </main>
    </div>
  )
}

export default AdminPage