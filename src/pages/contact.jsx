import { PhoneCall, Mail, MapPin } from 'lucide-react';
import Nav from '../components/Nav';
import { Instagram, Twitter, Facebook, Youtube} from 'lucide-react';

export default function Home() {
  return (
    <div className='min-h-screen bg-gray-50'>
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
      <p className='text-center font-extrabold text-gray-700 p-8'>
        Any questions or remarks? Just write us a message!
      </p>
      {/* Title */}

      {/* Info */}
      <div className='flex flex-row'>
        {/* Black Box */}
        <div className='flex flex-1 flex-col min-h-96 m-4 w-1/4 rounded-lg bg-black p-4 text-white'>
          <h1 className='p-4 text-2xl font-bold'>Contact Information</h1>
          <p className='p-4 text-lg text-gray-400'>Say something to start a live chat!</p>
          <div className='flex flex-row space-x-3 p-4'>
            <PhoneCall size={28}/>
            <p> +1012 3456 789 </p>
          </div>
          <div className='flex flex-row space-x-3 p-4'>
            <Mail size={28}/>
            <p> demo@gmail.com </p>
          </div>
          <div className='flex flex-row space-x-3 p-4'>
            <MapPin size={48}/>
            <p> 132 Dartmouth Street Boston, Massachusetts 02156 United States </p>
          </div>
        </div>
        {/* Black Box */}
        {/* White Box */}
        <div className='flex flex-col flex-1 bg-white min-h-96 w-3/4 m-3 p-4 rounded-lg'>
         <p className='p-3 text-gray-300'>First Name</p>
         <input type="text" className=' m-3 bg-white border-gray-300 border-spacing-3 border-b-2' ></input>
         <p className='p-3  text-gray-300'>Last Name</p>
         <input type="text" className=' m-3 bg-white border-gray-300 border-spacing-3 border-b-2' ></input>
         <button 
          onClick={() => alert('Your form is submitted!')}
          type="submit" 
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Submit
        </button>
        </div>
        {/* White Box */}
      </div>
      {/* Info */}

      {/* Footer */}
      <div className='flex flex-row justify-between bg-black p-8'>
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
