import { useEffect, useState } from "react"
import { Navbar } from "../components/Navbar"

const AdminPanelPage = () => {
  const [allVirus, setAllVirus] = useState([])

  const getAllVirus = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/all-virus`).then(res => res.json())
    console.log('response', response)
    if(response.code === 200) {
      setAllVirus(response?.result)
    }
  }

  useEffect(() => {
    getAllVirus()
  }, [])

  return (
    <div>
      <Navbar />
      <main className="flex items-center justify-center w-full mt-16">
        <section className="container flex flex-col items-center justify-center h-[60vh]">
          <h3 className="text-[#00528A] text-[30px] font-bold mb-6">Informacion de Usuarios Censados</h3>
          <table className="table-auto">
            <thead className="bg-[#00528A] border border-black">
              <tr>
                <th className="text-white border border-black px-3 py-1">Name</th>
                <th className="text-white border border-black px-3 py-1">Sintomas</th>
                <th className="text-white border border-black px-3 py-1">id</th>
              </tr>
            </thead>
            <tbody>
              {
                allVirus?.map((virus, index) => (
                  <tr key={index}>
                    <td className="border border-black px-3 py-1">{virus.name}</td>
                    <td className="border border-black px-3 py-1">{virus.sintomas.map((sintoma, index) => <span key={index}>{sintoma.name ?? sintoma}</span>)}</td>
                    <td className="border border-black px-3 py-1">{virus.id}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </section>
      </main>
    </div>
  )
}

export default AdminPanelPage