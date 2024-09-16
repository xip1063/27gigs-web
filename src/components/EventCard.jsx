import Link from 'next/link'
import Image from 'next/image'

/** TODO: use aspect ratio for images */

export default function EventCard({
  title,
  month,
  day,
  description,
  image,
  price,
}) {
  return (
    <div className='w-[85%] max-w-sm flex-none snap-start  scroll-ml-4 md:max-w-xs md:scroll-ml-6 lg:w-auto border dark:border-slate-300/10 lg:max-w-none'>
      <div>
        <Link
          href='/events/123'
          className='relative flex overflow-hidden  transition'
        >
          <Image
            alt={title}
            loading='lazy'
            width={768}
            height={432}
            className='object-cover'
            decoding='async'
            data-nimg={1}
            sizes='(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 400px'
            src={image}
          />
          <span className='pointer-events-none absolute top-1.5 left-1.5 rounded-full bg-white text-black px-3 py-1 text-xs font-semibold tracking-tight'>
            <span>${price.toFixed(2)}</span>
          </span>
        </Link>
        <div className='bg-white h-full px-4 py-2'>
          <div className='flex items-baseline'>
            <div className='text-purple-800 mr-4 flex flex-col items-center'>
              <div className='text-lg font-semibold'>{month}</div>
              <div className='mt-0.5 text-lg variant-numeric-tabular font-bold text-slate-700'>
                {day < 10 ? '0' + day : day.toString()}
              </div>
            </div>
            <div>
              <h4 className='text-slate-900 font-heading mb-1 text-lg font-semibold'>
                {title}
              </h4>
              <p className='text-slate-600 text-sm line-clamp-2'>
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
