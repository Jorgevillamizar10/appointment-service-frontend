
import { Banner } from "../components/Banner"
import { Navbar } from "../components/Navbar"
import { SliderNews } from "../components/SliderNews"

const NewsPage = () => {
  return (
    <div>
      <Navbar auth={false} />
      <Banner />
      <SliderNews />
    </div>
  )
}

export default NewsPage