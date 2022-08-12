import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import Image from 'next/image'

export const Navbar = ({login = true, admin = true}) => {
  const router = useRouter()
  const [session, setSession] = useState({
    auth: false,
    isAdmin: false
  })

  useEffect(() => {
    const auth = window?.localStorage.getItem('auth')
    const isAdmin = window?.localStorage.getItem('isAdmin')
    if (auth && isAdmin) {
      setSession({
        auth: auth,
        isAdmin: isAdmin
      })
    }
  }, [])

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <section className="w-full flex items-center justify-center">
        <div className="container w-full flex items-center justify-center">
          <span className="text-[#00528A] text-md font-normal">UNET - Programacion II - Jorge Villamizar - Carlota Lasa</span>
        </div>
      </section>
      <div className="w-full bg-[#036BAA] flex flex-col items-center">
        <nav className="container w-full flex items-center h-[68px] justify-between text-white font-bold text-md">
          <div className={`
            flex items-center justify-between
            ${session.auth ? 'w-[430px]' : 'w-[300px]'}
          `}>
            <Link href="/">
              <a>
                <Image src="/images/logo-covid.jpg" alt="logo" height="68px" width="200px" className="object-cover cursor-pointer"/>
              </a>
            </Link>
            <Link className="cursor-pointer hover:text-[#fd7e14]" href="/">
              <a>
                Home
              </a>
            </Link>
            {
              session.auth &&
              <>
                <Link className="cursor-pointer hover:text-[#fd7e14]" href="/noticias">
                  <a>
                    Noticias
                  </a>
                </Link>
                <Link className="cursor-pointer hover:text-[#fd7e14]" href="/main-user">
                  <a>
                    Formulario
                  </a>
                </Link>
              </>
            }
          </div>
          <div className="flex items-center justify-around w-[310px]">
            {
              session.auth ?
                <button onClick={() => {
                  window.localStorage.clear()
                  if (router.asPath === '/') {
                    router.push('/login')
                  } else {
                    router.push('/')
                  }
              }} >
                  Cerrar Sesion
                </button>
                 :
                <div className="w-full flex items-center justify-between">
                  <Link href="/registro">
                    <a>
                      Registrarse
                    </a>
                  </Link>
                  {
                    login &&
                      <Link href="/login">
                        <a>
                          Iniciar Sesion
                        </a>
                      </Link>
                  }
                  {
                    admin &&
                      <Link href="/admin">
                        <a>
                          Admin
                        </a>
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