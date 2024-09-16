import { Search } from 'lucide-react'
import { Input } from '@/ui/input'
import Head from 'next/head'
import FAQ from '@/components/FAQ'
import ContactDetails from '@/components/ContactDetails'

const features = [
  {
    title: 'Getting Started',
    description:
      'Lorem ipsum dolor sit amet, consectetur. Korem ipsum dolor sit amet, consectetur.',
  },
  {
    title: 'User Account',
    description:
      'Lorem ipsum dolor sit amet, consectetur. Korem ipsum dolor sit amet, consectetur.',
  },
  {
    title: 'Features',
    description:
      'Lorem ipsum dolor sit amet, consectetur. Korem ipsum dolor sit amet, consectetur.',
  },
  {
    title: 'Payment Gateways',
    description:
      'Lorem ipsum dolor sit amet, consectetur. Korem ipsum dolor sit amet, consectetur.',
  },
  {
    title: 'Security',
    description:
      'Lorem ipsum dolor sit amet, consectetur. Korem ipsum dolor sit amet, consectetur.',
  },
  {
    title: 'Marketing',
    description:
      'Lorem ipsum dolor sit amet, consectetur. Korem ipsum dolor sit amet, consectetur.',
  },
]

export default function SupportPage() {
  return (
    <>
      <Head>
        <title>Support</title>
      </Head>
      <main>
        <div className='h-72 text-white'>
          <div className='py-16'>
            <div className='container mx-auto px-4'>
              <h1 className='heading-sm font-bold font-heading text-center mb-8'>
                How can we help you?
              </h1>
              <div className='relative max-w-2xl mx-auto'>
                <Search className='absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400' />
                <Input
                  type='text'
                  placeholder='Search for answers'
                  className='w-full pl-12 pr-4 h-14 bg-slate-800 border-none rounded-full text-white placeholder-slate-400 outline-none focus:outline-none focus:ring-2 focus:ring-purple-500'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='bg-white py-12 lg:py-24 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-7xl mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {features.map((feature, index) => (
                <div
                  key={index}
                  className='rounded-2xl border border-slate-100 p-6 bg-white shadow-sm'
                >
                  <h3 className='text-lg font-semibold mb-2 text-[#6F38DA]'>
                    {feature.title}
                  </h3>
                  <p className='text-slate-600'>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <FAQ />
        <ContactDetails />
      </main>
    </>
  )
}
