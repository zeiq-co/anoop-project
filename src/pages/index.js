import { Watch, Coins, MoveUpRight } from 'lucide-react';

import ServiceItem from '../components/ServiceItem';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import MySlider from '../components/MySlider';

export default function Home() {
  return (
    <div className='min-h-screen bg-white'>
      {/* Header */}
      <div className='flex flex-row bg-purple-50 p-3 shadow-md'>
        <div className='flex flex-1'>
          <h1 className='text-xl font-bold uppercase text-purple-400'>
            My Profile
          </h1>
        </div>
        <div className='flex flex-1 justify-end'>
          <Nav />
        </div>
      </div>
      {/* Header */}

      {/* Hero Area */}
      <div className='mt-2 flex flex-row'>
        <div className='flex flex-1 flex-col justify-center py-12 pl-4 pr-64'>
          <h2 className='text-4xl font-bold text-purple-300'>
            Check Currency Exchange Rate in Real Time
          </h2>
          <p className='text-purple-200'>
            Monitor your worldwide business with this handy apps
          </p>
        </div>
        <div className='flex flex-1'>
          <img
            src='https://placehold.co/400'
            alt='hero'
            className='h-full w-full rounded-2xl object-cover'
          />
        </div>
      </div>
      {/* Hero Area */}

      {/* Trusted By */}
      <div className='m-3 flex flex-col'>
        <h2 className='m-2 text-3xl font-bold text-purple-300'>Trusted by</h2>
        <div className='m-3 flex flex-row space-x-2'>
          <img
            src='https://placehold.co/120'
            className='h-full w-full rounded-lg object-cover'
          />
          <img
            src='https://placehold.co/120'
            className='h-full w-full rounded-lg object-cover'
          />
          <img
            src='https://placehold.co/120'
            className='h-full w-full rounded-lg object-cover'
          />
          <img
            src='https://placehold.co/120'
            className='h-full w-full rounded-lg object-cover'
          />
        </div>
      </div>
      {/* Trusted By */}

      {/* Slider */}
      <MySlider />
      {/* Slider */}

      {/* Easy To Use */}
      <div className='m-3 flex flex-row'>
        <div className='flex flex-1 flex-col justify-center py-12 pl-4 pr-64'>
          <h2 className='text-3xl font-bold text-purple-300'>Easy to Use</h2>
          <p className='text-lg text-purple-200'>
            Our clean and intuitive design will help you operate the apps easily
          </p>
        </div>
        <div className='flex flex-1'>
          <img
            src='https://placehold.co/400'
            alt='hero'
            className='w-30 h-80 rounded-lg object-cover pr-8 pt-14'
          />
        </div>
      </div>
      {/* Easy To Use */}

      {/* Upgrade */}
      <div className='m-3 flex flex-row'>
        <div className='flex flex-1 flex-col justify-center py-12 pl-4 pr-64'>
          <img
            src='https://placehold.co/400'
            alt='hero'
            className='w-30 h-80 rounded-lg object-cover pr-8 pt-14'
          />
        </div>
        <div className='flex flex-1'></div>
      </div>
      {/* Upgrade */}

      {/* Services */}
      <div className='justify m-4 flex flex-row justify-between'>
        <ServiceItem
          title='48 Hours Customer Service'
          description='We respect your passion to run your business by always accompany you'
          image={<Watch size={60} color='#066fe8' />}
        />
        <ServiceItem
          title='Currencies All Over The World'
          description='Our complete and real-time currencies database will help your business'
          image={<Coins size={60} color='#066fe8' />}
        />
        <ServiceItem
          title='Upgrade Once You Ready'
          description='No worries, we always welcome you once you ready to upgrade'
          image={<MoveUpRight size={60} color='#066fe8' />}
        />
      </div>
      {/* Services */}

      {/* Footer */}
      <Footer />
      {/* Footer */}
    </div>
  );
}