import Footer from '../components/Footer';
import { PieChart } from 'react-minimal-pie-chart';


export default function Stats() {

  return (
    <div className="h-screen bg-white">
      <h1>Stats</h1>
      <div className='w-52 h-52'>
        <PieChart
        animate={true}
        onClick	={(e) => alert('hello')}
          data={[
            { title: 'One', value: 20, color: '#E38627' },
            { title: 'Two', value: 35, color: '#C13C37' },
            { title: 'Three', value: 50, color: '#6A2135' },
            { title: 'Four', value: 50, color: '#E0e' },
          ]}
        />
      </div>
      <Footer />
    </div>
  )
}