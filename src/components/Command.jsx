import { Fragment, useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { FaceFrownIcon, GlobeAmericasIcon } from '@heroicons/react/24/outline'
import { Combobox, Dialog, Transition } from '@headlessui/react'

const items = [
  { id: 1, name: 'Cape Town Jazz Festival', category: 'Events', url: '#' },
  // More items...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Command() {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)

  const filteredItems =
    query === ''
      ? []
      : items.filter((item) => {
          return item.name.toLowerCase().includes(query.toLowerCase())
        })

  const groups = filteredItems.reduce((groups, item) => {
    return {
      ...groups,
      [item.category]: [...(groups[item.category] || []), item],
    }
  }, {})

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        type='button'
        className='text-slate-500 w-8 h-8 flex items-center justify-center hover:text-slate-600 lg:hidden dark:text-slate-400 dark:hover:text-slate-300'
      >
        <span className='sr-only'>Search</span>
        <svg
          width={24}
          height={24}
          fill='none'
          stroke='currentColor'
          strokeWidth={2}
          strokeLinecap='round'
          strokeLinejoin='round'
          aria-hidden='true'
        >
          <path d='m19 19-3.5-3.5' />
          <circle cx={11} cy={11} r={6} />
        </svg>
      </button>
      <Transition.Root
        show={open}
        as={Fragment}
        afterLeave={() => setQuery('')}
        appear
      >
        <Dialog as='div' className='relative z-50' onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-gray-400/25 backdrop-blur-sm dark:bg-black/40' />
          </Transition.Child>

          <div className='fixed inset-0 z-40 overflow-y-auto p-4 sm:p-6 md:p-20'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='mx-auto max-w-xl transform divide-y divide-gray-200 border !ring-0 border-default overflow-hidden rounded-lg bg-white shadow-xs transition-all'>
                <Combobox onChange={(item) => (window.location = item.url)}>
                  <div className='relative'>
                    <MagnifyingGlassIcon
                      className='pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-400'
                      aria-hidden='true'
                    />
                    <Combobox.Input
                      className='h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm'
                      placeholder='Search...'
                      onChange={(event) => setQuery(event.target.value)}
                    />
                  </div>

                  {query === '' && (
                    <div className='border-t border-gray-100 px-6 py-14 text-center text-sm sm:px-14'>
                      <GlobeAmericasIcon
                        className='mx-auto h-6 w-6 text-gray-400'
                        aria-hidden='true'
                      />
                      <p className='mt-4 font-semibold text-gray-900'>
                        Search for events and help
                      </p>
                      <p className='mt-2 text-gray-500'>
                        Quickly access events and help by running a global
                        search.
                      </p>
                    </div>
                  )}

                  {filteredItems.length > 0 && (
                    <Combobox.Options
                      static
                      className='max-h-80 scroll-pb-2 scroll-pt-11 space-y-2 overflow-y-auto pb-2'
                    >
                      {Object.entries(groups).map(([category, items]) => (
                        <li key={category}>
                          <h2 className='bg-gray-100 px-4 py-2.5 text-xs font-semibold text-gray-900'>
                            {category}
                          </h2>
                          <ul className='mt-2 text-sm text-gray-800'>
                            {items.map((item) => (
                              <Combobox.Option
                                key={item.id}
                                value={item}
                                className={({ active }) =>
                                  classNames(
                                    'cursor-default select-none px-4 py-2',
                                    active && 'bg-indigo-600 text-white'
                                  )
                                }
                              >
                                {item.name}
                              </Combobox.Option>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </Combobox.Options>
                  )}

                  {query !== '' && filteredItems.length === 0 && (
                    <div className='border-t border-gray-100 px-6 py-14 text-center text-sm sm:px-14'>
                      <FaceFrownIcon
                        className='mx-auto h-6 w-6 text-gray-400'
                        aria-hidden='true'
                      />
                      <p className='mt-4 font-semibold text-gray-900'>
                        No results found
                      </p>
                      <p className='mt-2 text-gray-500'>
                        We couldn’t find anything with that term. Please try
                        again.
                      </p>
                    </div>
                  )}
                </Combobox>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}
