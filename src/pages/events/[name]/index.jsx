import EventDetails from '@/components/event/EventDetails'
import EventHero from '@/components/EventHero'
import Head from 'next/head'
import EventCard from '@/components/EventCard'
import { Button } from '@/ui/button'
import Link from 'next/link'

const events = [
  {
    title: 'Cape Town Jazz Festival',
    month: 'Mar',
    day: 24,
    description:
      "Africa's Grandest Gathering, featuring world-class jazz performances.",
    image: 'https://picsum.photos/200',
    price: 50.0,
  },
  {
    title: 'Durban July',
    month: 'Jul',
    day: 6,
    description: 'A glamorous horse racing event and fashion extravaganza.',
    image: 'https://picsum.photos/200',
    price: 75.0,
  },
  {
    title: 'Soweto Wine & Lifestyle Festival',
    month: 'Sep',
    day: 13,
    description: 'A celebration of South African wines, food, and culture.',
    image: 'https://picsum.photos/200',
    price: 40.0,
  },
  {
    title: 'Oppikoppi Festival',
    month: 'Aug',
    day: 8,
    description: 'South Africa’s premier rock and alternative music festival.',
    image: 'https://picsum.photos/200',
    price: 60.0,
  },
  {
    title: 'National Arts Festival',
    month: 'Jun',
    day: 22,
    description:
      "Africa's largest arts festival, featuring a wide array of performances and exhibitions.",
    image: 'https://picsum.photos/200',
    price: 30.0,
  },
  {
    title: 'Heritage Day Braai',
    month: 'Sep',
    day: 24,
    description:
      'A traditional South African braai celebration on Heritage Day.',
    image: 'https://picsum.photos/200',
    price: 20.0,
  },
]

export default function EventPage() {
  return (
    <>
      <Head>
        <title>Event Name</title>
      </Head>
      <EventHero />
      <section className='bg-white py-8'>
        <EventDetails />
      </section>
      <section className='bg-[#F5F5F5] py-8 lg:py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 pt-8'>
          <h2 className='leading-7 mb-2 font-heading tracking-tight text-slate-900 font-bold heading-xs'>
            Other events you may like
          </h2>

          <ul className="mt-7 flex snap-x snap-mandatory s space-x-6 overflow-x-auto pb-6 before:flex-shrink-0 before:basis-4 before:content-[''] after:flex-shrink-0 after:basis-4 after:content-[''] md:before:basis-6 md:after:basis-6 lg:mt-8 lg:grid lg:snap-none lg:grid-cols-3 lg:gap-x-3.5 lg:gap-y-12 lg:space-x-0  lg:before:hidden lg:after:hidden">
            {events.map((event, index) => (
              <EventCard
                key={index}
                title={event.title}
                month={event.month}
                day={event.day}
                price={event.price}
                description={event.description}
                image='https://plus.unsplash.com/premium_photo-1661315459644-18297c559777?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              />
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
