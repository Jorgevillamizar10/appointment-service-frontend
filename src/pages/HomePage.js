import { Navbar } from "../components/Navbar"

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <main className="flex items-center justify-center w-full mt-16">
        <section className="container flex flex-col items-center justify-center">
          <h1 className="text-[#00528A] text-[46px] font-bold underline">Bienvenidos al Sistema de Censo - San Cristobal</h1>
          <article className="w-[70%] mt-8 text-justify">
            <h2 className="font-bold mb-4 text-xl">Impactos del COVID-19 en los censos de población y vivienda</h2>
            <p>
              En el contexto de las charlas virtuales Conectados RTC, el INE de Chile, el CELADE y la División de Estadísticas de CEPAL convocaron a las Oficinas Nacionales de Estadística a una videoconferencia para evaluar en conjunto los efectos que está teniendo la pandemia COVID-19 sobre las operaciones estadísticas, con referencia a los censos de población y vivienda. 
              <br/><br/>
              Varios de los países de la región se encontraban en los preparativos de sus censos de población al momento de la emergencia sanitaria generada por el COVID-19 e incluso algunos de ellos en pleno proceso de levantamiento de información. Es por eso que el objetivo de estos encuentros es el intercambio de experiencias y recomendaciones que contribuyan a la toma de decisiones y el desarrollo de las actividades en este complejo escenario. 
            </p>
          </article>

          <article className="w-[70%] mt-4 text-justify mb-10">
            <h2 className="font-bold mb-4 text-xl">La Viruela del Mono</h2>
            <p>
              la viruela del mono pertenece al grupo de los Orthopoxvirus. A pesar de su nombre, los primates no humanos no son re.aivorios del virus de la viruela del mono. Si bien se desconoce el re.aivorio, los posibles candidatos son los roedores pequeños (p. ej., ardillas) que habitan en las selvas tropicales de África, sobre todo en las regiones occidental y central de ese continente.
              <br/><br/>
              La enfermedad aparece en .aies humanos en África de manera esporádica y en ocasiones provoca brotes epidémicos. La mayoría de los casos denunciados ocurrieron en la República Democrática del Congo. Desde 2016, también se han informado casos confirmados en Sierra Leona, Liberia, República Centroafricana, República del Congo y Nigeria, que ha experimentado el brote reciente más grande. Se cree que un reciente aumento de 20 veces en la incidencia se debe al cese de la vacunación contra la viruela en 1980; las personas que han recibido la vacuna contra la viruela, incluso 25 años antes, tienen un riesgo reducido de sufrir la viruela del simio. Los casos de viruela de simios en África también están aumentando porque las personas están invadiendo cada vez más los hábitats de los animales portadores del virus.
            </p>
          </article>
        </section>
      </main>
    </div>
  )
}

export default HomePage