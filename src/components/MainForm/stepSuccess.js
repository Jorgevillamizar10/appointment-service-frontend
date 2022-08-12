import { useRouter } from "next/router"

export const StepSuccess = () => {
  const router = useRouter()

  return (
    <div style={{"display": "flex",
      "flexDirection": "column",
      'alignItems': 'center',
      'padding': '40px 24px',
      'gap': '10px',
      'width': '816px',
      'height': '224px',
      'boxShadow': '0px 6px 12px rgba(198, 198, 198, 0.12)',
      'borderRadius': '16px'}}
      className='bg-white'
    >
      <h3 className="text-[#00528A] text-[20px] font-bold">Felicidades completaste el formulario con exito!</h3>
      <span className="text-gray-600 text-[20px] font-bold">Esperamos que te recuperes pronto!</span>
      <div className="flex items-center">
        <button
          className="bg-[#00528A] text-white rounded-xl px-4 py-1 font-bold text-md mt-6"
          onClick={(e) => {
            e.preventDefault()
            router.push('/noticias')
          }}
        >
          Ver Noticias
        </button>
        <button
          className="ml-6 bg-[#00528A] text-white rounded-xl px-4 py-1 font-bold text-md mt-6"
          onClick={(e) => {
            e.preventDefault()
            router.push('/')
          }}
        >
          Ir al Home
        </button>
      </div>
    </div>
  )
}