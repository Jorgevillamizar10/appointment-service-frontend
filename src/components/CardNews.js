import Image from 'next/image'

export const CardNews = ({
  image,
  title,
  description,
  link,
  customClass = ''
}) => {
  return (
    <div
      className={`w-[312px] h-[338px] bg-[#00528A] rounded-md cursor-pointer ${customClass}`}
    >
      <a href={link} target='_blank' rel='noreferrer'>
        <Image
          src={image.url}
          alt={image.name}
          height="160px"
          width="312px"
          className='rounded-t-md h-[55%] object-cover w-full'
        />
        <div className='p-4'>
          <h3 className='text-white w-full font-bold truncate text-2xl'>
            {title}
          </h3>
          <p className='text-white w-full text-base'>{description}</p>
        </div>
      </a>
    </div>
  )
}