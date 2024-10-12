import Footer from '../components/Footer';
import Calendar from 'react-calendar';
import {useState} from 'react';
import 'react-calendar/dist/Calendar.css';

export default function MyCalendar() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="h-screen bg-white">
      <h1>Calendar</h1>
      <div className='w-96 h-96'>
       <Calendar onChange={onChange} value={value} />
      </div>
      <Footer />
    </div>
  )
}