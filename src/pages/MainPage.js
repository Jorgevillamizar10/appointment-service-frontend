import { useState } from "react"
import { StepOne } from "../components/MainForm/StepOne"
import { StepSuccess } from "../components/MainForm/stepSuccess"
import { StepTwo } from "../components/MainForm/StepTwo"
import { Navbar } from "../components/Navbar"

const MainPage = () => {
  const [step, setStep] = useState(1)
  const [option, setOption] = useState('')
  const [sintomas, setSintomas] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const onHandleOption = (auxOption) => {
    setStep((auxStep) => auxStep + 1)
    setOption(auxOption)
  }

  const onSentVirus = async () => {
    console.log('sintomas', sintomas)
    setLoading(true)
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/register-virus`, {
      method: 'POST',
      body: JSON.stringify({
        userId: window?.localStorage.getItem('id'),
        name: sintomas.length === 1 ? sintomas[0]?.id : 'Nuevo Virus',
        unknoun: sintomas.length === 5,
        sintomas: sintomas
      }),
      headers: { 'content-type': 'application/json' }
    }).then(res => res.json())

    if(response.code === 200 ){
      setStep((auxStep) => auxStep + 1)
    } else {
      setError(true)
    }
    setLoading(false)
  }

  const onRenderStep = (step) => {
    switch(step) {
      case 1:
        return <StepOne onHandleOption={onHandleOption}/>
      case 2:
        return <StepTwo option={option} sintomas={sintomas} setSintomas={setSintomas} />
      case 3:
        return <StepSuccess />
    }
  }

  return (
    <div>
      <Navbar />
      <main className="flex items-center justify-center w-full mt-16">
        <section className="container flex items-center justify-center h-[60vh]">
          <form className="flex flex-col items-center justify-center">
            <h3 className="text-[#00528A] text-[30px] font-bold mb-6">Censo Virus - Formulario</h3>
            {onRenderStep(step)}
            { error && <span className="mt-4 text-red-600 text-base">Error al enviar el formulario, intenta de nuevo mas tarde...</span>}
            {
              step > 1 && step < 3 &&
              <div className="flex items-center">
                <button
                  className="bg-[#00528A] text-white rounded-xl px-4 py-1 font-bold text-md mt-6"
                  onClick={(e) => {
                    e.preventDefault()
                    setStep((auxStep) => auxStep - 1)
                  }}
                >
                  Volver
                </button>
                {
                  step === 2 &&
                  <button
                    className="ml-6 bg-[#00528A] text-white rounded-xl px-4 py-1 font-bold text-md mt-6"
                    onClick={(e) => {
                      e.preventDefault()
                      onSentVirus()
                    }}
                  >
                    {loading ? 'Cargando...' : 'Enviar Informacion'}
                  </button>
                }
              </div>
            }
          </form>
        </section>
      </main>
    </div>
  )
}

export default MainPage