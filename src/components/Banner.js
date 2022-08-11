export const Banner = () => {
  return (
    <div className='w-full h-[600px] bg-home-banner bg-no-repeat bg-cover p-10 flex items-center justify-center '>
      <div className='container w-full h-full flex flex-col items-start justify-end'>
        <h1 className='text-white leading-10 mb-6 text-2xl sm:text-[42px] font-bold'>{"Padecer covid-19 en múltiples oportunidades incrementa el riesgo de sufrir covid prolongado, indica estudio"}</h1>
        <p className='text-white text-base sm:text-xl'>
          {`La reinfección de covid-19 es un tema de conversación no solo en medios. Entre nuestro círculo social hemos escuchado de alguien que ha padecido la enfermedad hasta 3 o 4 veces.
          El Dr. Elmer Huerta analiza dos estudios en donde se indican los efectos de esas reinfecciones y uno de esos tienen que ver con los síntomas persistentes de la enfermedad, conocido como covid prolongado.`}
        </p>
      </div>
    </div>
  )
}