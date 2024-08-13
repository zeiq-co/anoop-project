import Footer from '../components/Footer';
import Nav from '../components/Nav';
import MySlider from '../components/MySlider';
import Header from '../components/Header';

export default function Home () {
  return (
    <div className='min-h-screen bg-white'>
      {/* Header */}
      < Header />
      {/* Header */}
      {/* Title */}
      <h1 className='text-9xl text-purple-300 font-extrabold text-center'> About Us </h1>
      {/* Title */}
      {/* Info Tab's */}
      <div className='flex flex-row-reverse'>
      <div className='h-52 w-52  bg-yellow-200 rounded-full border-yellow-100 border-8 m-3 mr-10 shadow-lg'> 
        <p className='text-white text-center p-4 pt-16 text-3xl font-bold font-sans'> Owned By Anoop </p>
      </div>
      <div className='h-52 w-52 bg-blue-200 rounded-full mr-80 border-blue-100 border-8 m-3 shadow-lg '> 
        <p className='text-white text-center p-4 pt-16 text-3xl font-bold font-sans'> Owned By Anoop </p>
      </div>
      </div>
      {/* Info Tab's */}
      {/* Footer */}
      < Footer/>
      {/* Footer */}
    </div>
  )
}