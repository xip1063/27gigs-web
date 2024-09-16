import EventCard from '@/components/EventCard'
import Head from 'next/head'
import { Button } from '@/ui/button'
import Link from 'next/link'
import Hero from '@/components/Hero'
import ProductFeatures from '@/components/ProductFeatures'
import AppPromotion from '@/components/AppPromotion'

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

export default function HomePage() {
  return (
    <>
      <Head>
        <meta
          key='twitter:title'
          name='twitter:title'
          content='TwentySevenGigs - Events made easy for organisers.'
        />
        <meta
          key='og:title'
          property='og:title'
          content='TwentySevenGigs - Events made easy for organisers.'
        />
        <title>TwentySevenGigs - Events made easy for organisers.</title>
      </Head>
      <main>
        <Hero />

        <section className='pb-12 border-b border-slate-400/20'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 pt-8'>
            <h2 className='leading-7 mb-2 font-heading tracking-tight text-slate-200 font-bold heading-xs'>
              Upcoming Events
            </h2>
            <p className='mb-10 prose prose-slate text-slate-600 max-w-3xl dark:text-slate-400 dark:prose-dark'>
              Cras lorem mauris, efficitur id condimentum luctus, ultricies sit
              amet mi. Duis et neque vel leo tempus hendrerit.
            </p>
            <ul className="mt-7 flex snap-x snap-mandatory space-x-6 overflow-x-auto pb-6 before:flex-shrink-0 before:basis-4 before:content-[''] after:flex-shrink-0 after:basis-4 after:content-[''] md:before:basis-6 md:after:basis-6 lg:mt-8 lg:grid lg:snap-none lg:grid-cols-3 lg:gap-x-3.5 lg:gap-y-12 lg:space-x-0  lg:before:hidden lg:after:hidden">
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
            <div className='flex justify-center mt-6'>
              <Button
                size='lg'
                className='btn-gradient text-white font-semibold py-2 px-8 rounded-full'
              >
                <Link href='/events'>View All</Link>
              </Button>
            </div>
          </div>
        </section>
        <ProductFeatures />
        <AppPromotion />
      </main>
    </>
  )
}
