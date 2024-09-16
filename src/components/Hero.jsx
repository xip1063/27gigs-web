import { Button } from '@/ui/button'
import {
  Briefcase,
  Gamepad,
  Music,
  Theater,
  Umbrella,
  Wine,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import styles from './index.module.css'

export default function Hero() {
  return (
    <div
      className={cn(
        `relative h-[100vh] w-full overflow-hidden bg-cover bg-center`,
        styles.hero
      )}
    >
      <div
        className='absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom dark:border-b dark:border-slate-100/5'
        style={{
          maskImage: 'linear-gradient(to bottom, transparent, black)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black)',
        }}
      />
      <div className='relative  z-10 flex h-full flex-col items-center justify-between px-4 py-12 text-white'>
        <div className='text-center pt-10 lg:pt-24'>
          <h1 className='mb-4 text-5xl font-heading font-bold leading-tight sm:text-6xl md:text-7xl'>
            Events Made Easy
            <br />
            for Organisers
          </h1>
          <p className='mb-8 max-w-2xl text-lg text-gray-200'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            vestibulum nunc ligula. Nullam id imperdiet mauris, non pellentesque
            tortor.
          </p>
          <div className='flex flex-wrap justify-center gap-4'>
            <Button size='lg' className='rounded-full text-white btn-gradient'>
              Create an Event
            </Button>
            <Button
              size='lg'
              variant='default'
              className='bg-white rounded-full text-black'
            >
              Find an Event
            </Button>
          </div>
        </div>
        <div className='grid pb-10 lg:pb-14 pl-8 grid-cols-3 gap-8 sm:gap-5 sm:grid-cols-6'>
          {[
            { icon: Music, label: 'Live Concerts & Music' },
            { icon: Briefcase, label: 'Conferences, Seminars & Workshops' },
            { icon: Umbrella, label: 'Family Fun, Tours & Travel' },
            { icon: Wine, label: 'Food & Beverages' },
            { icon: Theater, label: 'Festivals' },
            { icon: Gamepad, label: 'Sports, Games & Adventure' },
          ].map((item, index) => (
            <div key={index} className='flex flex-col items-center text-center'>
              <div className='mb-2 flex size-16 items-center justify-center rounded-full border-2 border-white/20 bg-gray-900'>
                <item.icon className='h-6 w-6' />
              </div>
              <span className='text-sm'>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
