import { MapPin } from 'lucide-react'
import styles from './index.module.css'
import { cn } from '@/lib/utils'

export default function EventHero() {
  return (
    <div
      className={cn(
        'relative h-[75vh] w-full  bg-cover bg-center',
        styles.eventHero
      )}
    >
      <div className='absolute inset-0 bg-black/50' />
      <div className='relative z-10 max-w-7xl mx-auto flex flex-col sm:flex-row px-4 h-full items-center justify-between py-8'>
        <div className='max-w-lg pt-16 sm:pt-0 text-white'>
          <h1 className='mb-4 text-5xl font-heading font-bold'>
            National Arts Festival
          </h1>
          <div className='mb-6 h-1 w-12 bg-yellow-400' />
          <p className='mb-6'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            vestibulum nunc.
          </p>
          <button className='inline-flex items-center rounded border-0 bg-transparent  py-2 text-white transition-colors'>
            <MapPin className='mr-2 h-4 w-4' />
            View Map
          </button>
        </div>
        <div className='w-80 -mt-16 rounded-lg bg-white p-6 shadow-lg'>
          <h2 className='mb-4 text-2xl text-slate-700 font-semibold'>
            From $25.40
          </h2>
          <p className='mb-6 text-sm text-gray-500'>
            Saturday, 24 August 2024 @ 17:00
          </p>
          <button className='w-full rounded-2xl btn-gradient px-4 py-2 text-white transition-colors hover:bg-purple-700'>
            Get Tickets
          </button>
          <p className='mt-4 text-center text-xs text-gray-500'>No Refunds</p>
        </div>
      </div>
    </div>
  )
}
