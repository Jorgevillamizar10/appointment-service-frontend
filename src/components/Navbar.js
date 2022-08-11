
export const Navbar = ({ auth, login, register, admin }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <section className="w-full flex items-center justify-center">
        <div className="container w-full flex items-center justify-center">
          <span className="text-[#00528A] text-md font-normal">UNET - Programacion II - Jorge Villamizar - Carlota Lasa</span>
        </div>
      </section>
      <div className="w-full bg-[#036BAA] flex flex-col items-center">
        <nav className="container w-full flex items-center h-[68px] justify-between text-white font-bold text-md">
          <div className="flex items-center justify-between w-[350px]">
            <a href="/">
              <img src="/images/logo-covid.jpg" alt="logo" className="w-[200px] object-cover cursor-pointer"/>
            </a>
            <a className="cursor-pointer hover:text-[#fd7e14]" href="/">
              Home
            </a>
            {
              auth &&
              <a className="cursor-pointer hover:text-[#fd7e14]" href="/noticias">
                Noticias
              </a>
            }
          </div>
          <div className="flex items-center justify-between w-[320px]">
            {
              auth ?
                <a className="cursor-pointer hover:text-[#fd7e14]">
                  Cerrar Sesion
                </a> :
                <div className="w-auto">
                  {
                    !register &&
                      <a className="cursor-pointer hover:text-[#fd7e14] mr-6" href="/registro">
                        Registrarse
                      </a>
                  }
                  {
                    !login &&
                      <a className="cursor-pointer hover:text-[#fd7e14] mr-6" href="/login">
                        Iniciar Sesion
                      </a>
                  }
                  {
                    !admin &&
                      <a className="cursor-pointer hover:text-[#fd7e14]" href="/admin">
                        Admin
                      </a>
                  }
                </div>
            }
          </div>
        </nav>

      </div>
    </div>
  )
}