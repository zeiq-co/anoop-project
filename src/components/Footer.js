import { PhoneCall } from 'lucide-react';
import { Instagram, Twitter, Facebook, Youtube,} from 'lucide-react';
import Nav from '../components/Nav';

export default function Footer() {
  return (
    <div className='flex flex-row justify-between bg-purple-50 p-2'>
      <div className=' p-2'>
        <h4 className='font-bold text-purple-300'>My Website</h4>
        <Nav />
        <p className='font-bold text-purple-300'>© 2024 My Website, All rights reserved.</p>
      </div>
      <div className='flex flex-row space-x-3'>
        <Instagram size={32} />
        <Twitter size={32} />
        <Facebook size={32} />
        <Youtube size={32} />
      </div>
    </div>
  );
}
