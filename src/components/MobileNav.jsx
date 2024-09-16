import { Dialog, Transition } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { Fragment, useState } from 'react'

export default function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        type='button'
        className='text-slate-500 w-8 lg:h-8 h-7 flex items-center justify-center hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300'
      >
        <span className='sr-only'>Navigation</span>
        <Bars3Icon className='size-6' />
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as='div'
          className='fixed inset-0 z-50 overflow-hidden lg:hidden'
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter='ease-in-out duration-500'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in-out duration-500'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='absolute inset-0 bg-slate-900/25 backdrop-blur-sm transition-opacity opacity-100' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-hidden'>
            <div className='absolute inset-0 overflow-hidden'>
              <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full'>
                <Transition.Child
                  as={Fragment}
                  enter='transform transition ease-in-out duration-500 sm:duration-700'
                  enterFrom='translate-x-full'
                  enterTo='translate-x-0'
                  leave='transform transition ease-in-out duration-500 sm:duration-700'
                  leaveFrom='translate-x-0'
                  leaveTo='translate-x-full'
                >
                  <Dialog.Panel className='min-h-full w-[min(20rem,calc(100vw-theme(spacing.10)))] bg-white shadow-2xl ring-1 ring-black/10 transition'>
                    <Transition.Child
                      as={Fragment}
                      enter='ease-in-out duration-500'
                      enterFrom='opacity-0'
                      enterTo='opacity-100'
                      leave='ease-in-out duration-500'
                      leaveFrom='opacity-100'
                      leaveTo='opacity-0'
                    >
                      <button
                        onClick={() => setOpen(!open)}
                        type='button'
                        className='absolute right-6 top-3 flex h-8 w-8 items-center justify-center'
                      >
                        <span className='sr-only'>Close navigation</span>
                        <svg
                          className='h-3.5 w-3.5 overflow-visible stroke-slate-900'
                          fill='none'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path d='M0 0L14 14M14 0L0 14' />
                        </svg>
                      </button>
                    </Transition.Child>
                    <nav className='divide-y divide-slate-900/10 text-base leading-7 text-slate-900'>
                      <div className='px-8 py-4'>
                        <a
                          href='/'
                          className='lg:text-2xl text-xl font-heading overflow-hidden font-bold'
                        >
                          <span>TwentySevenGiGs</span>
                        </a>
                      </div>
                      <div className='px-8 py-6'>
                        <div className='-my-2 items-start space-y-2'>
                          <a
                            className='block w-full py-2 font-semibold'
                            href='/'
                          >
                            Home
                          </a>
                          <a
                            className='block w-full py-2 font-semibold'
                            href='/events'
                          >
                            Events
                          </a>
                          <a
                            className='block w-full py-2 font-semibold'
                            href='/support'
                          >
                            Support
                          </a>
                        </div>
                      </div>
                      <div className='px-8 py-6'>
                        <div className='-my-2 space-y-4'>
                          <a
                            className='block w-full py-2 font-semibold'
                            href='/login'
                          >
                            Sign in
                          </a>
                          <a
                            className='inline-flex justify-center cursor-pointer rounded-lg text-sm btn-gradient font-semibold py-2.5 px-4  text-white hover:bg-purple-700 w-full'
                            href='/sign-up'
                          >
                            <span>
                              Sign Up <span aria-hidden='true'>→</span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </nav>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}
