import { Navbar } from "../components/Navbar"

const AdminPanelPage = () => {
  return (
    <div>
      <Navbar auth={false} login={false} admin={true} />
      <main className="flex items-center justify-center w-full mt-16">
        <section className="container flex flex-col items-center justify-center h-[60vh]">
          <h3 className="text-[#00528A] text-[30px] font-bold mb-6">Informacion de Usuarios Censados</h3>
          <table class="table-auto">
            <thead className="bg-[#00528A] border border-black">
              <tr>
                <th className="text-white border border-black px-3 py-1">Song</th>
                <th className="text-white border border-black px-3 py-1">Artist</th>
                <th className="text-white border border-black px-3 py-1">Year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-black px-3 py-1">The Sliding Mr</td>
                <td className="border border-black px-3 py-1">Malcolm Lockyer</td>
                <td className="border border-black px-3 py-1">1961</td>
              </tr>
              <tr>
                <td className="border border-black px-3 py-1">Witchy Woman</td>
                <td className="border border-black px-3 py-1">The Eagles</td>
                <td className="border border-black px-3 py-1">1973</td>
              </tr>
              <tr>
                <td className="border border-black px-3 py-1">Shining Star</td>
                <td className="border border-black px-3 py-1">Earth, Wind, and Fire</td>
                <td className="border border-black px-3 py-1">1975</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  )
}

export default AdminPanelPage