import { Button } from '@/ui/button'

import Link from 'next/link'
import MobileNav from './MobileNav'
import Command from './Command'

export default function Header() {
  return (
    <header className='sticky top-0 z-40 border-b bg-slate-900 border-slate-900/10 dark:border-slate-300/10  text-white'>
      <div className='lg:container lg:mx-auto px-4 lg:px-0 flex items-center h-15 lg:h-[68px] justify-between'>
        <Link href='/' className='lg:text-2xl text-xl font-heading font-bold'>
          <span>TwentySevenGiGs</span>
        </Link>
        <nav className='flex-1 hidden lg:flex justify-center items-center space-x-16'>
          <Link href='/' className='hover:text-gray-300 transition-colors'>
            Home
          </Link>
          <Link
            href='/events'
            className='hover:text-gray-300 transition-colors'
          >
            Events
          </Link>
          <Link
            href='/support'
            className='hover:text-gray-300 transition-colors'
          >
            Support
          </Link>
        </nav>
        <div className='flex items-center space-x-2.5 lg:space-x-4'>
          <Link
            href='/login'
            className='hidden mr-2.5 lg:flex hover:text-gray-300 transition-colors'
          >
            Login
          </Link>
          <Button
            asChild
            className='btn-gradient hidden lg:inline-flex text-white font-semibold py-1.5 px-3 rounded-full'
          >
            <Link href='/sign-up'>Sign Up</Link>
          </Button>
          <Command />
          <div className='lg:hidden'>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}
