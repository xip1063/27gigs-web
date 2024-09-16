import { GoogleMapsEmbed } from '@next/third-parties/google'
import { FaInstagram, FaTiktok } from 'react-icons/fa'
import { FaFacebook, FaXTwitter } from 'react-icons/fa6'

export default function EventDetails() {
  return (
    <div className='max-w-7xl mx-auto py-10 px-4 sm:px-6 bg-white text-slate-500'>
      <div className='grid md:grid-cols-2 gap-12 md:gap-24'>
        <div>
          <h2 className='mb-4 text-2xl leading-7 font-heading tracking-tight text-slate-900 font-bold'>
            Description
          </h2>
          <div className='space-y-4'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              dictum, lacus maximus fermentum dapibus, ante felis blandit nisi,
              vitae lobortis tellus magna ut eros. Sed viverra neque mi, in
              ultrices sem posuere et. Mauris at sodales purus, ut mollis lacus.
              Donec urna nisl, gravida at hendrerit nec, accumsan quis metus.
              Etiam fermentum, odio non iaculis malesuada, risus massa cursus
              sem, non dignissim lectus nisl viverra lacus. Nulla imperdiet
              facilisis placerat. Donec et ultrices lacus. Praesent non iaculis
              nulla. Ut in enim a erat convallis convallis sit amet nec odio.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              dictum, lacus maximus fermentum dapibus, ante felis blandit nisi,
              vitae lobortis tellus magna ut eros. Donec urna nisl, gravida at
              hendrerit nec, accumsan quis metus. Etiam fermentum, odio non
              iaculis malesuada, risus massa cursus sem, non dignissim lectus
              nisl viverra lacus. Nulla imperdiet facilisis placerat.
            </p>
          </div>

          <h2 className='mb-4 text-2xl font-heading leading-7 tracking-tight text-slate-900 font-bold mt-8'>
            Hours
          </h2>
          <div className='space-y-2'>
            <p>
              <span className='font-semibold text-slate-600'>Saturday:</span> 7
              PM -11 PM
            </p>
            <p>
              <span className='font-semibold text-slate-600'>Sunday:</span> 7 PM
              -12 PM
            </p>
          </div>

          <h2 className='mb-4 text-2xl font-heading leading-7 tracking-tight text-slate-900 font-bold mt-8'>
            How can I contact the organiser with any question?
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            dictum, lacus maximus fermentum dapibus, ante felis
          </p>
        </div>

        <div>
          <h2 className='mb-4 text-2xl font-heading leading-7 tracking-tight text-slate-900 font-bold'>
            Event Location
          </h2>
          <div className='w-full h-64 mb-4 border border-gray-200 rounded-lg overflow-hidden'>
            <GoogleMapsEmbed
              apiKey={process.env.GOOGLE_MAPS_API_KEY}
              height='256'
              width='100%'
              mode='place'
              q='42 Bates St, Harare, Zimbabwe'
            />
          </div>

          <h3 className='text-xl font-semibold mb-2 text-gray-900'>
            Old Hararians
          </h3>
          <p className='mb-6'>42 Bates St, Harare</p>

          <h2 className='mb-4 text-2xl font-heading leading-7 tracking-tight text-slate-900 font-bold'>
            Tags
          </h2>
          <div className='flex flex-wrap gap-2 mb-6'>
            {['Music', 'Food & Drink', 'Outdoor', 'Concert', 'Local'].map(
              (tag) => (
                <span
                  key={tag}
                  className='bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm'
                >
                  {tag}
                </span>
              )
            )}
          </div>

          <h2 className='mb-4 text-2xl font-heading leading-7 tracking-tight text-slate-900 font-bold'>
            Share with Friends
          </h2>
          <div className='flex space-x-4'>
            <a href='#' className='text-blue-600 hover:text-blue-800'>
              <FaFacebook size={24} />
            </a>
            <a href='#' className='text-pink-500 hover:text-pink-800'>
              <FaInstagram size={24} />
            </a>
            <a href='#' className='text-slate-800 hover:text-slate-900'>
              <FaTiktok size={24} />
            </a>
            <a href='#' className='text-black hover:text-black/80'>
              <FaXTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
