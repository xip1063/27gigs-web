import Image from 'next/image';
import { AppStoreLink } from './AppStoreLink';
import { PlayStoreLink } from './PlayStoreLink';

const AppPromotion = () => {
  return (
    <section className='relative overflow-hidden h-[526px] bg-white'>
      <div className='absolute inset-0'>
        <div className='h-full w-full btn-gradient' />
        <svg
          className='absolute inset-0 h-full w-full'
          viewBox='0 0 100 100'
          preserveAspectRatio='none'
        >
          <path
            d='M100,0 Q50,100 0,100 L0,0 Z'
            fill='white'
            vectorEffect='non-scaling-stroke'
          />
        </svg>
      </div>
      <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center h-full'>
        <div className='lg:w-1/2 pr-8'>
          <h2 className='text-3xl font-bold font-heading tracking-tight text-slate-900 sm:text-4xl lg:text-5xl'>
            Don't have the app yet?
          </h2>
          <p className='mt-4 max-w-xl text-lg text-slate-500'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            vestibulum nunc.
          </p>
          <div className='mt-8 flex flex-row sm:space-y-0 space-x-4'>
            <PlayStoreLink />
            <AppStoreLink />
          </div>
        </div>
        <div className='mt-8  lg:pt-8 lg:mt-0 lg:w-1/2 flex justify-center items-center'>
          <div className='relative w-full max-w-xs'>
            <Image
              src='/img/app-preview.webp'
              width={200}
              height={200}
              alt='App screenshot'
              className='w-full h-[480px] object-contain'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPromotion;
