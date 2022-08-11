import { CardNews } from './CardNews'
import { NewsData } from '../utils/NewsData'

export const SliderNews = () => {
  return (
    <div
      className='w-full h-auto my-6 flex items-center justify-center'
    >
      <div className='container'>
        <h2 className='text-[#00528A] font-bold text-3xl pl-1 mb-5'>
          Noticias
        </h2>
        <div className='w-full grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {
            NewsData?.map((article, index) => (
              <CardNews key={index} {...article}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}