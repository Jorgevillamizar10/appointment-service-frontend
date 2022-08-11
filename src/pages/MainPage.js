import { useState } from "react"
import { StepOne } from "../components/MainForm/StepOne"
import { StepSuccess } from "../components/MainForm/stepSuccess"
import { StepTwo } from "../components/MainForm/StepTwo"
import { Navbar } from "../components/Navbar"

const MainPage = () => {
  const [step, setStep] = useState(1)
  const [option, setOption] = useState('')

  const onHandleOption = (auxOption) => {
    setStep((auxStep) => auxStep + 1)
    setOption(auxOption)
  }

  const onRenderStep = (step) => {
    switch(step) {
      case 1:
        return <StepOne onHandleOption={onHandleOption}/>
      case 2:
        return <StepTwo option={option}/>
      case 3:
        return <StepSuccess />
    }
  }

  return (
    <div>
      <Navbar auth={true}/>
      <main className="flex items-center justify-center w-full mt-16">
        <section className="container flex items-center justify-center h-[60vh]">
          <form className="flex flex-col items-center justify-center">
            <h3 className="text-[#00528A] text-[30px] font-bold mb-6">Censo Virus - Formulario</h3>
            {onRenderStep(step)}
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
                      setStep((auxStep) => auxStep + 1)
                    }}
                  >
                    Enviar Informacion
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