import { PhoneCall, Mail, MapPin } from 'lucide-react';
import Nav from '../components/Nav';
import { Instagram, Twitter, Facebook, Youtube} from 'lucide-react';
import Checkbox from '../components/Checkbox';

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
      <h1 className='text-center text-5xl p-2 font-bold'>Contact Us</h1>
      <p className='text-center font-extrabold text-gray-700 '>
        Any questions or remarks? Just write us a message!
      </p>
      {/* Title */}

      {/* Info */}
      <div className='flex p-4 flex-row'>
        {/* Black Box */}
        <div className='flex flex-col m-4 p-10 h-full rounded-lg bg-black text-white'>
          <h1 className=' text-2xl font-bold'>Contact Information</h1>
          <p className='text-lg text-gray-400 pb-10'>Say something to start a live chat!</p>
          <div className='flex flex-row space-x-3 p-2 '>
            <PhoneCall size={28}/>
            <p className='text-lg'> +1012 3456 789 </p>
          </div>
          <div className='flex flex-row space-x-3 p-2'>
            <Mail size={28}/>
            <p className='text-lg'> demo@gmail.com </p>
          </div>
          <div className='flex flex-row space-x-3 p-2'>
            <MapPin size={48} />
            <p className='text-lg'> 132 Dartmouth Street Boston, Massachusetts 02156, United States </p>
          </div>
          <div className='flex flex-row space-x-3 justify-evenly pt-16'>
          <Instagram size={32} color='white' />
          <Twitter size={32} color='white' />
          <Youtube size={32} color='white' />
          </div>
        </div>
        {/* Black Box */}
        {/* White Box */}
        <div className='flex flex-col bg-white min-h-96 w-11/12 m-3 p-4 rounded-lg'>
        {/* Questions */}
         <p className=' ml-3 text-gray-300'>First Name</p>
         <input type="text" className=' ml-3 bg-white border-gray-300 border-spacing-3 border-b-2' ></input>
         <p className=' ml-3  text-gray-300'>Last Name</p>
         <input type="text" className=' ml-3 bg-white border-gray-300 border-spacing-3 border-b-2' ></input>
         <div className=''>
         <p className=' ml-3 text-gray-300'>Email</p>
         <input type="email" className=' ml-3 bg-white border-gray-300 border-spacing-3 border-b-2' ></input>
         <p className=' ml-3 text-gray-300'>Phone Number</p>
         <input type="number" className=' ml-3 bg-white border-gray-300 border-spacing-3 border-b-2' ></input>
         </div>
          {/* Questions */}
          {/* Check Boxes */}
          <h1 className=' ml-3 text-center text-3xl font-semibold '>Select Subject </h1>
          <div className='flex flex-row'>
          <Checkbox />
          <Checkbox/>
          <Checkbox/>
          </div>
         {/* Check Boxes */}
         {/* Message */}
         <div>
          <p className=' ml-3 text-gray-300'>Description</p>
          <input type='text' className=' ml-3 bg-white border-gray-300 border-spacing-3 mb-10 border-b-2'></input>
         </div>
         {/* Message */}
         {/* Submit */}
         <button 
          onClick={() => alert('Your form is submitted!')}
          type="submit" 
          className=" ml-3 text-white h-18 bg-purple-300 hover:bg-purple-400 focus:ring-4 focus:ring-purple-500 font-semibold rounded-lg text-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 blue-600 dark:hover:bg-blue">
          Submit
         </button>
         {/* Submit */}
        </div>
        {/* White Box */}
      </div>
      {/* Info */}

      {/* Footer */}
      <div className='flex flex-row justify-between bg-black p-8'>
        <div className='space-y-3 text-white'>
          <h3 className='text-white pt-6 pb-4 text-lg'>My Website</h3>
          <Nav />
          <p className='text-white pt-6 pb-4 text-lg'>© 2024 My Website. All rights reserved.</p>
        </div>
        <div className='flex flex-row space-x-3 pt-6 pb-4'>
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
