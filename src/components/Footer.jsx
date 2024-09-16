import Link from 'next/link'
import { AppStoreLink } from './AppStoreLink'
import { PlayStoreLink } from './PlayStoreLink'

export default function Footer() {
  return (
    <footer className='bg-slate-900 border-t border-slate-400/20 text-white pt-12'>
      <div>
        <div>
          <div className='max-w-7xl mx-auto px-4 sm:px-6'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
              <div>
                <h2 className='font-semibold text-slate-900 dark:text-slate-100 mb-3'>
                  About TwentySevenGiGs
                </h2>
                <ul className='space-y-2 text-slate-400 text-sm'>
                  <li>
                    <Link href='#' className='hover:text-slate-300'>
                      Sell Tickets Online
                    </Link>
                  </li>
                  <li>
                    <Link href='#' className='hover:text-slate-300'>
                      Event Planning
                    </Link>
                  </li>
                  <li>
                    <Link href='#' className='hover:text-slate-300'>
                      Sell Concert
                    </Link>
                  </li>
                  <li>
                    <Link href='#' className='hover:text-slate-300'>
                      Tickets Online
                    </Link>
                  </li>
                  <li>
                    <Link href='#' className='hover:text-slate-300'>
                      Event Payment
                    </Link>
                  </li>
                  <li>
                    <Link href='#' className='hover:text-slate-300'>
                      System
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className='font-semibold text-slate-900 dark:text-slate-100 mb-3'>
                  Connect with Us
                </h2>
                <ul className='space-y-2 text-slate-400 text-sm'>
                  <li>
                    <Link href='#' className='hover:text-slate-300'>
                      Contact Support
                    </Link>
                  </li>
                  <li>
                    <Link href='#' className='hover:text-slate-300'>
                      Contact Sales
                    </Link>
                  </li>
                  <li>
                    <Link href='#' className='hover:text-slate-300'>
                      X
                    </Link>
                  </li>
                  <li>
                    <Link href='#' className='hover:text-slate-300'>
                      Facebook
                    </Link>
                  </li>
                  <li>
                    <Link href='#' className='hover:text-slate-300'>
                      LinkedIn
                    </Link>
                  </li>
                  <li>
                    <Link href='#' className='hover:text-slate-300'>
                      Instagram
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className='font-semibold text-slate-900 dark:text-slate-100 mb-3'>
                  Find Events
                </h2>
                <ul className='space-y-2 text-slate-400 text-sm'>
                  <li>
                    <Link href='#' className='hover:text-slate-300'>
                      Joburg Music Events
                    </Link>
                  </li>
                  <li>
                    <Link href='#' className='hover:text-slate-300'>
                      Cape Town Events
                    </Link>
                  </li>
                  <li>
                    <Link href='#' className='hover:text-slate-300'>
                      Vic Falls Events
                    </Link>
                  </li>
                  <li>
                    <Link href='#' className='hover:text-slate-300'>
                      Events In Durban Today
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className='text-2xl font-bold font-heading mb-4'>
                  TwentySevenGiGs
                </h2>
                <div className='flex space-x-4 mb-4'>
                  <AppStoreLink color='white' />
                  <PlayStoreLink />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='items-centers grid grid-cols-1 max-w-7xl mx-auto px-4 sm:px-6 mt-8 justify-between gap-4 border-t border-slate-400/20 py-6 md:grid-cols-2'>
          <p className='text-sm/6 text-slate-400 max-md:text-center'>
            © {/* */}2024{/* */} TwentySevenGiGs. All rights reserved.
          </p>
          <div className='flex items-center justify-center space-x-4 text-sm/6 font-semibold text-slate-400 md:justify-end'>
            <a href='/privacy-policy'>Privacy policy</a>
            <div className='h-4 w-px bg-slate-300/10' />
            <a href='/refund-policy'>Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
