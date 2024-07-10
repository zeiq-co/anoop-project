import Nav from '../components/Nav';
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

export default function Home() {
 return(
  <div className='min-h-screen bg-white'>
         {/* Header */}
         <div className='flex flex-row bg-black p-3 shadow-md text-white'>
        <div className='flex flex-1'>
          <h1 className='text-xl font-bold uppercase text-white'>
            My Profile
          </h1>
        </div>
        <div className='flex flex-1 justify-end'>
          <Nav className='text-white'/>
        </div>
      </div>
      {/* Header */} 

      {/* Title */} 
      <h1 className="font-bold text-center p-8 text-5xl">Contact Us</h1>
      <p className='font-extrabold text-center text-gray-700'>Any questions or remarks? Just write us a message!</p>
      {/* Title */}

      {/* Info */}
        <div className= "bg-black m-3 rounded-lg text-white p-4 h-86 w-1/3">
          <h1 className='font-bold text-2xl p-4'>Contact Information</h1>
          <p className='text-gray-400 text-lg p-4'>Say something to start a live chat!</p>
          <p className='p-4'>+1012 3456 789</p>
          <p className='p-4'>demo@gmail.com</p>
          <p className='p-4'>132 Dartmouth Street Boston, Massachusetts 02156 United States</p>
        </div>
      {/* Info */}

      {/* Footer */}


    <div className='flex flex-row justify-between bg-black p-8 h-60'>
      <div className='space-y-3 text-white'>
        <h4 className='text-white'>My Website</h4>
        <Nav />
        <p className='text-white'>© 2024 My Website. All rights reserved.</p>
      </div>
      <div className='flex flex-row space-x-3'>
        <Instagram size={32} color='white' />
        <Twitter size={32} color='white'/>
        <Facebook size={32} color='white'/>
        <Youtube size={32} color='white'/>
      </div>
    </div>


      {/* Footer */}
  
  </div>
 );
}