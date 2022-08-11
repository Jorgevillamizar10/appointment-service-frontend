import Link from "next/link"
import Image from 'next/image'

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
            <Link href="/">
              <Image src="/images/logo-covid.jpg" alt="logo" height="68px" width="200px" className="object-cover cursor-pointer"/>
            </Link>
            <Link className="cursor-pointer hover:text-[#fd7e14]" href="/">
              Home
            </Link>
            {
              auth &&
              <Link className="cursor-pointer hover:text-[#fd7e14]" href="/noticias">
                Noticias
              </Link>
            }
          </div>
          <div className="flex items-center justify-between w-[320px]">
            {
              auth ?
                <Link className="cursor-pointer hover:text-[#fd7e14]">
                  Cerrar Sesion
                </Link> :
                <div className="w-auto">
                  {
                    !register &&
                      <Link href="/registro">
                        Registrarse
                      </Link>
                  }
                  {
                    !login &&
                      <Link href="/login">
                        Iniciar Sesion
                      </Link>
                  }
                  {
                    !admin &&
                      <Link href="/admin">
                        Admin
                      </Link>
                  }
                </div>
            }
          </div>
        </nav>

      </div>
    </div>
  )
}