import Image from 'next/image'
import { useState } from 'react'

const features = [
  {
    title: 'Ticketing',
    description:
      'Streamline your event entry process with our efficient ticketing system.',
    image:
      'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Sales Dashboard',
    description:
      'Track and analyze your sales data with our intuitive dashboard.',
    image:
      'https://images.unsplash.com/photo-1556155092-8707de31f9c4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Cashless Payments',
    description:
      'Enable quick and secure transactions with our cashless payment solution.',
    image:
      'https://images.unsplash.com/photo-1720048091816-cb6d3c0333be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNhc2hsZXNzJTIwcGF5bWVudHN8ZW58MHx8MHx8fDA%3D',
  },
  {
    title: 'Reporting and Analytics',
    description:
      'Gain valuable insights with comprehensive reporting and analytics tools.',
    image:
      'https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]

export default function ProductFeatures() {
  return (
    <div className='pt-16 pb-24'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <h2 className='leading-7 mb-2 font-heading tracking-tight text-slate-200 font-bold heading-xs'>
          Product Features
        </h2>
        <p className='text-slate-400 mb-8'>Lorem ipsum dolor sit amet.</p>
        <div className='h-1 w-12 bg-yellow-500 mb-8'></div>
        <div className='grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8'>
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </div>
  )
}

function FeatureCard({ feature }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className='relative'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='group aspect-h-10 aspect-w-10 block w-full overflow-hidden bg-slate-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-slate-100'>
        <Image
          src={feature.image}
          alt={feature.title}
          layout='fill'
          objectFit='cover'
          className='pointer-events-none group-hover:opacity-75'
        />
        <div className='absolute inset-0 flex items-end p-4'>
          <h3 className='text-white text-lg font-semibold'>{feature.title}</h3>
        </div>
      </div>
      {isHovered && (
        <div className='absolute inset-0 bg-white p-4 transition-opacity duration-300 ease-in-out'>
          <h3 className='text-slate-900 text-xl font-semibold mb-2'>
            {feature.title}
          </h3>
          <p className='text-slate-600'>{feature.description}</p>
        </div>
      )}
    </div>
  )
}
