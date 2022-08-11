import { useState } from "react"

const Diagnostic = ({onSetSintomas, sintomas}) => {
  const [select, setSelect] = useState([])

  return (
    <div style={{"display": "flex",
      "flexDirection": "column",
      'align-items': 'center',
      'padding': '40px 24px',
      'gap': '40px',
      'width': '816px',
      'height': '224px',
      'boxShadow': '0px 6px 12px rgba(198, 198, 198, 0.12)',
      'borderRadius': '16px'}}
      className='bg-white'
    >
      <div
        onClick={() => {
          onSetSintomas([{name: 'Covid-19', id: 'covid'}])
          setSelect('covid')
        }}
        className={`
          bg-white flex items-center justify-between p-4 border hover:border-[#104990] cursor-pointer
          ${select === "covid" ? 'border-[#104990]' : 'border-[#E5E7EB]'}
        `}
        style={{"boxShadow": "0px 3px 6px rgba(198, 198, 198, 0.12)","borderRadius": "8px", "width": "768px"}}
      >
        <span className="mr-">COVID - 19.</span>
      </div>
      <div
        onClick={() => {
          onSetSintomas([{name: 'Viruela del Mono', id: 'viruela'}])
          setSelect('viruela')
        }}
        className={`
          bg-white flex items-center justify-between p-4 border hover:border-[#104990] cursor-pointer
          ${select === "viruela" ? 'border-[#104990]' : 'border-[#E5E7EB]'}
        `}
        style={{"boxShadow": "0px 3px 6px rgba(198, 198, 198, 0.12)","borderRadius": "8px", "width": "768px"}}
      >
        <span className="mr-">VIRUELA DEL MONO.</span>
      </div>
    </div>
  )
}

const WithOutDiagnostic = () => {
  return (
    <div style={{"display": "flex",
      'align-items': 'flex-start',
      'justify-content': 'space-around',
      'padding': '20px 24px',
      'width': '816px',
      'height': '224px',
      'boxShadow': '0px 6px 12px rgba(198, 198, 198, 0.12)',
      'borderRadius': '16px'}}
      className='bg-white'
    >
      <div className="flex flex-col items-start justify-center gap-[15px]">
        <label className="cursor-pointer">
          <input type="radio" placeholder="Tos" className="mr-2" />
          Fiebre
        </label>
        <label className="cursor-pointer">
          <input type="radio" placeholder="Tos" className="mr-2"/>
          Erupciones en la piel
        </label>
        <label className="cursor-pointer">
          <input type="radio" placeholder="Tos" className="mr-2"/>
          Dolores musculares
        </label>
        <label className="cursor-pointer">
          <input type="radio" placeholder="Tos" className="mr-2"/>
          Dolor de cabeza
        </label>
        <label className="cursor-pointer">
          <input type="radio" placeholder="Tos" className="mr-2"/>
          Vómito
        </label>
      </div>
      <div className="flex flex-col items-start justify-center gap-[15px]">
        <h3>Ingresa otro Sintoma</h3>
        <textarea className="border-[#00528A] border rounded px-2 font-normal outline-none w-[250px] h-[140px] resize-none" type="text" name="extra" placeholder="Ingresa aqui..."/>
      </div>
    </div>
  )
}


export const StepTwo = ({option}) => {
  const [sintomas, setSintomas] = useState([])

  const onRenderCaseTwo = (option) => {
    switch(option) {
      case 'diagnosticado':
        return <Diagnostic onSetSintomas={setSintomas} sintomas={sintomas}/>
      case 'diagnosticar':
        return <WithOutDiagnostic onSetSintomas={setSintomas} sintomas={sintomas}/>
    }
  }

  return (
    <>
      {onRenderCaseTwo(option)}
    </>
  )
}