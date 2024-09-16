import { cn } from '@/lib/utils'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: 'How do you make holy water?',
    answer:
      'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aut tempora vitae odio inventore fuga aliquam nostrum quod porro. Delectus quia facere id sequi expedita natus.',
  },
  {
    question: 'What do you call someone with no body and no nose?',
    answer:
      'Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem.Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem.',
  },
  {
    question: 'Why do you never see elephants hiding in trees?',
    answer:
      "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat",
  },
]

export default function FAQ() {
  return (
    <div className='bg-slate-50'>
      <div className='mx-auto max-w-7xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16'>
        <div className='mx-auto max-w-4xl divide-y divide-slate-900/10'>
          <h2 className='font-bold heading-sm leading-10 font-heading tracking-tight text-slate-900'>
            Frequently asked questions
          </h2>
          <dl className='mt-10 space-y-6 divide-y divide-slate-900/10'>
            {faqs.map((faq) => (
              <Disclosure as='div' key={faq.question} className='pt-6'>
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className='flex w-full items-start justify-between text-left text-slate-900'>
                        <span className='text-base font-semibold leading-7'>
                          {faq.question}
                        </span>
                        <span className='ml-6 flex h-7 items-center'>
                          <ChevronDownIcon
                            className={cn(
                              'size-5 transform',
                              open && 'rotate-180 duration-200'
                            )}
                            aria-hidden='true'
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as='dd' className='mt-2 pr-12'>
                      <p className='text-base leading-7 text-slate-600'>
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
