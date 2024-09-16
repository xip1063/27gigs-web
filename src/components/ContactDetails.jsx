import React from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function ContactDetails() {
  return (
    <section className='py-16 px-4 bg-white'>
      <div className='max-w-4xl mx-auto'>
        <h2 className='heading-sm font-bold text-center font-heading mb-12 text-slate-800'>
          Didn't find your answer?
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200'>
          <div className='p-6 flex flex-col items-center text-center'>
            <div className='bg-[#7A48DC] p-3 rounded-full mb-4'>
              <MapPin className='w-6 h-6 text-white' />
            </div>
            <h3 className='text-xl font-semibold mb-2 text-gray-800'>
              Visit Us
            </h3>
            <p className='text-[#7A48DC]'>66 Address line, City</p>
          </div>
          <div className='p-6 flex flex-col items-center text-center'>
            <div className='bg-[#7A48DC] p-3 rounded-full mb-4'>
              <Phone className='w-6 h-6 text-white' />
            </div>
            <h3 className='text-xl font-semibold mb-2 text-gray-800'>
              Call Us
            </h3>
            <a href='tel:+263 777 000 000' className='text-[#7A48DC]'>
              +263 777 000 000
            </a>
          </div>
          <div className='p-6 flex flex-col items-center text-center'>
            <div className='bg-[#7A48DC] p-3 rounded-full mb-4'>
              <Mail className='w-6 h-6 text-white' />
            </div>
            <h3 className='text-xl font-semibold mb-2 text-gray-800'>
              Contact Us
            </h3>
            <a href='mailto:info@27gigs.com' className='text-[#7A48DC]'>
              info@27gigs.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
