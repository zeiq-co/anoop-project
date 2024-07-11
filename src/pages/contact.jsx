import Nav from '../components/Nav';
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

export default function Home() {
  return (
    <div className='min-h-screen bg-white'>
      {/* Header */}
      <div className='flex flex-row bg-black p-3 text-white shadow-md'>
        <div className='flex flex-1'>
          <h1 className='text-xl font-bold uppercase text-white'>My Profile</h1>
        </div>
        <div className='flex flex-1 justify-end'>
          <Nav className='text-white' />
        </div>
      </div>
      {/* Header */}

      {/* Title */}
      <h1 className='p-8 text-center text-5xl font-bold'>Contact Us</h1>
      <p className='text-center font-extrabold text-gray-700'>
        Any questions or remarks? Just write us a message!
      </p>
      {/* Title */}

      {/* Info */}
      <div className='h-86 m-3 w-1/3 rounded-lg bg-black p-4 text-white'>
        <h1 className='p-4 text-2xl font-bold'>Contact Information</h1>
        <p className='p-4 text-lg text-gray-400'>
          Say something to start a live chat!
        </p>
        <p className='p-4'>+1012 3456 789</p>
        <p className='p-4'>demo@gmail.com</p>
        <p className='p-4'>
          132 Dartmouth Street Boston, Massachusetts 02156 United States
        </p>
      </div>
      {/* Info */}

      {/* Footer */}
      <div className='flex h-60 flex-row justify-between bg-black p-8'>
        <div className='space-y-3 text-white'>
          <h4 className='text-white'>My Website</h4>
          <Nav />
          <p className='text-white'>© 2024 My Website. All rights reserved.</p>
        </div>
        <div className='flex flex-row space-x-3'>
          <Instagram size={32} color='white' />
          <Twitter size={32} color='white' />
          <Facebook size={32} color='white' />
          <Youtube size={32} color='white' />
        </div>
      </div>
      {/* Footer */}
    </div>
  );
}
