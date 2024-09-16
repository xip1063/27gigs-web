import { cn } from '@/lib/utils';
import { Input, Select } from '@headlessui/react';
import { Grid, List, MoreVertical } from 'lucide-react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './index.module.css';

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
];

const dummyEvents = [
  {
    id: 1,
    image: 'https://picsum.photos/seed/event1/400/400',
    date: '20 AUGUST',
    location: 'HARARE',
    description: 'Lorem ipsum dolor sit amet, conse adipiscing elit vest nunc.',
  },
  {
    id: 2,
    image: 'https://picsum.photos/seed/event2/400/400',
    date: '20 AUGUST',
    location: 'BULAWAYO',
    description: 'Lorem ipsum dolor sit amet, conse adipiscing elit vest nunc.',
  },
  {
    id: 3,
    image: 'https://picsum.photos/seed/event3/400/400',
    date: '21 AUGUST',
    location: 'HARARE, ZIMBABWE',
    description: 'Lorem ipsum dolor sit amet, conse adipiscing elit vest nunc.',
  },
  {
    id: 4,
    image: 'https://picsum.photos/seed/event4/400/400',
    date: '22 AUGUST',
    location: 'VICTORIA FALLS',
    description: 'Lorem ipsum dolor sit amet, conse adipiscing elit vest nunc.',
  },
];

const EventCard = ({ image, date, location, description }) => (
  <div className='flex-shrink-0 w-full sm:w-80 mb-6 sm:mb-0 sm:mr-6 overflow-hidden rounded-lg shadow-lg'>
    <div className='relative h-80'>
      <img
        src={image}
        alt={description}
        className='w-full h-full object-cover'
      />
      <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-4'>
        <p className='text-sm font-bold'>
          {date} | {location}
        </p>
        <p className='text-base mt-2'>{description}</p>
      </div>
    </div>
  </div>
);

const EventCarousel = ({ events }) => {
  return (
    <div className='flex flex-col sm:flex-row overflow-x-auto hide-scrollbar snap-x snap-mandatory'>
      {events.map((event) => (
        <div key={event.id} className='snap-start'>
          <EventCard {...event} />
        </div>
      ))}
    </div>
  );
};

const SearchBox = () => (
  <div className='bg-white rounded-lg sm:rounded-full shadow-lg flex flex-col sm:flex-row items-center p-2'>
    <Input
      type='text'
      placeholder='What are you looking for?'
      className='w-full sm:w-auto border-0 ring-0 focus:border-0 flex-grow px-4 py-2 sm:py-0 focus:outline-none mb-2 sm:mb-0'
    />
    <Input
      type='text'
      placeholder='Add Dates'
      className='w-full sm:w-auto outline-none border-0 hocus:border-0 px-4 py-2 sm:py-0 border-t sm:border-t-0 sm:border-l mb-2 sm:mb-0'
    />
    <select className='w-full sm:w-auto px-4 py-2 sm:py-0 border-t sm:border-t-0 sm:border-l mb-2 sm:mb-0'>
      <option value=''>Select Category</option>
      <option value='Music'>Music</option>
      <option value='Sports'>Sports</option>
      <option value='Art'>Art</option>
      <option value='Food'>Food</option>
      <option value='Other'>Other</option>
    </select>
    <Input
      type='text'
      placeholder='Add Location'
      className='w-full sm:w-auto px-4 py-2 sm:py-0 border-t sm:border-t-0 sm:border-l mb-2 sm:mb-0'
    />
    <Select className='w-full sm:w-auto px-4 border-0 focus:ring-0 focus:border-0 py-2 border-b-0 sm:py-0 border-t sm:border-t-0 sm:border-l mb-2 sm:mb-0'>
      <option value=''>Select Price Range</option>
      <option value='0 - 5'>0 - 5</option>
      <option value='5 - 10'>5 - 10</option>
      <option value='10 - 15'>10 - 15</option>
    </Select>
    <button className='w-full sm:w-auto bg-purple-600 text-white p-2 rounded-full'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6 mx-auto'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
        />
      </svg>
    </button>
  </div>
);

const EventsPageHero = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set to true when the component is mounted on the client side
  }, []);

  return (
    <div
      className={cn(
        'relative bg-cover bg-center h-[75vh] px-4 pt-8 sm:px-6',
        styles.bgHeroEvent
      )}
    >
      <div className='container mx-auto py-12 '>
        <div className='flex flex-col sm:flex-row mb-12'>
          <div className='w-full sm:w-2/5 pr-0 sm:pr-8 mb-6 sm:mb-0'>
            <h2 className='text-4xl sm:text-5xl font-bold text-white mb-4'>
              Upcoming <br /> Events
            </h2>
            <div className='w-16 h-1 bg-yellow-500 mb-4'></div>
            <p className='text-gray-300'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              vestibulum nunc.
            </p>
          </div>
          <div className='w-full sm:w-3/5'>
            <EventCarousel events={dummyEvents} />
          </div>
        </div>
        <div className='mt-8'>
          <button
            className='sm:hidden w-full bg-purple-600 text-white p-2 rounded-lg mb-4'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? 'Close Search' : 'Open Search'}
          </button>
          {isClient && (isMobileMenuOpen || window.innerWidth >= 640) && (
            <SearchBox />
          )}
        </div>
      </div>
    </div>
  );
};

export default function EventsPage() {
  return (
    <>
      <Head>
        <title>Events</title>
      </Head>
      <EventsPageHero />
      <main className='px-4 sm:px-6'>
        <div className='max-w-7xl pt-10 pb-16 mx-auto'>
          <header className='flex justify-between items-center mb-8'>
            <div>
              <h1 className='text-white heading-xs font-heading font-bold'>
                Popular Events
              </h1>
              <p className='text-slate-400 mt-2'>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='flex items-center space-x-4'>
              <button className='text-slate-400 hover:text-white'>
                <MoreVertical size={24} />
              </button>
              <div className='bg-slate-800 rounded-lg p-1 flex'>
                <button className='p-2 rounded text-white bg-slate-700'>
                  <Grid size={20} />
                </button>
                <button className='p-2 rounded text-slate-400 hover:text-white'>
                  <List size={20} />
                </button>
              </div>
            </div>
          </header>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {events.slice(3).map((item) => (
              <div
                key={item.title}
                className='border dark:border-slate-300/10 overflow-hidden'
              >
                <div>
                  <Link
                    href='/events/123'
                    className='relative h-[196px] lg:h-[205px] overflow-hidden transition block'
                  >
                    <Image
                      alt={item.title}
                      loading='lazy'
                      width={768}
                      height={432}
                      className='object-cover h-full'
                      decoding='async'
                      data-nimg={1}
                      sizes='(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 400px'
                      src={item.image}
                    />
                    <span className='pointer-events-none absolute top-1.5 left-1.5 rounded-full bg-white text-black px-3 py-1 text-xs font-semibold tracking-tight'>
                      <span>${item.price.toFixed(2)}</span>
                    </span>
                  </Link>
                  <div className='bg-white h-full px-4 py-2'>
                    <div className='flex items-baseline'>
                      <div className='text-purple-800 mr-4 flex flex-col items-center'>
                        <div className='text-lg font-semibold'>
                          {item.month}
                        </div>
                        <div className='mt-0.5 text-lg variant-numeric-tabular font-bold text-slate-700'>
                          {item.day < 10 ? '0' + item.day : item.day.toString()}
                        </div>
                      </div>
                      <div>
                        <h4 className='text-slate-900 font-heading mb-1 text-lg font-semibold'>
                          {item.title}
                        </h4>
                        <p className='text-slate-600 text-sm line-clamp-2'>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='max-w-7xl pt-10 pb-16 mx-auto'>
          <header className='flex justify-between items-center mb-8'>
            <div>
              <h1 className='text-white heading-xs font-heading font-bold'>
                This Weekend
              </h1>
              <p className='text-slate-400 mt-2'>Lorem ipsum dolor sit amet.</p>
            </div>
          </header>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {events.map((item) => (
              <div
                key={item.title}
                className='border dark:border-slate-300/10 overflow-hidden'
              >
                <div>
                  <Link
                    href='/events/123'
                    className='relative h-[196px] lg:h-[205px] overflow-hidden transition block'
                  >
                    <Image
                      alt={item.title}
                      loading='lazy'
                      width={768}
                      height={432}
                      className='object-cover h-full'
                      decoding='async'
                      data-nimg={1}
                      sizes='(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 400px'
                      src={item.image}
                    />
                    <span className='pointer-events-none absolute top-1.5 left-1.5 rounded-full bg-white text-black px-3 py-1 text-xs font-semibold tracking-tight'>
                      <span>${item.price.toFixed(2)}</span>
                    </span>
                  </Link>
                  <div className='bg-white h-full px-4 py-2'>
                    <div className='flex items-baseline'>
                      <div className='text-purple-800 mr-4 flex flex-col items-center'>
                        <div className='text-lg font-semibold'>
                          {item.month}
                        </div>
                        <div className='mt-0.5 text-lg variant-numeric-tabular font-bold text-slate-700'>
                          {item.day < 10 ? '0' + item.day : item.day.toString()}
                        </div>
                      </div>
                      <div>
                        <h4 className='text-slate-900 font-heading mb-1 text-lg font-semibold'>
                          {item.title}
                        </h4>
                        <p className='text-slate-600 text-sm line-clamp-2'>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='max-w-7xl pt-10 pb-16 sm:pb-24 mx-auto'>
          <header className='flex justify-between items-center mb-8'>
            <div>
              <h1 className='text-white heading-xs font-heading font-bold'>
                Business & Professional Events
              </h1>
              <p className='text-slate-400 mt-2'>Lorem ipsum dolor sit amet.</p>
            </div>
          </header>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {events.map((item) => (
              <div
                key={item.title}
                className='border dark:border-slate-300/10 overflow-hidden'
              >
                <div>
                  <Link
                    href='/events/123'
                    className='relative h-[196px] lg:h-[205px] overflow-hidden transition block'
                  >
                    <Image
                      alt={item.title}
                      loading='lazy'
                      width={768}
                      height={432}
                      className='object-cover h-full'
                      decoding='async'
                      data-nimg={1}
                      sizes='(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 400px'
                      src={item.image}
                    />
                    <span className='pointer-events-none absolute top-1.5 left-1.5 rounded-full bg-white text-black px-3 py-1 text-xs font-semibold tracking-tight'>
                      <span>${item.price.toFixed(2)}</span>
                    </span>
                  </Link>
                  <div className='bg-white h-full px-4 py-2'>
                    <div className='flex items-baseline'>
                      <div className='text-purple-800 mr-4 flex flex-col items-center'>
                        <div className='text-lg font-semibold'>
                          {item.month}
                        </div>
                        <div className='mt-0.5 text-lg variant-numeric-tabular font-bold text-slate-700'>
                          {item.day < 10 ? '0' + item.day : item.day.toString()}
                        </div>
                      </div>
                      <div>
                        <h4 className='text-slate-900 font-heading mb-1 text-lg font-semibold'>
                          {item.title}
                        </h4>
                        <p className='text-slate-600 text-sm line-clamp-2'>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
