export default function Home() {
 return(
  <div className='min-h-screen bg-white'>
         {/* Header */}
         <div className='flex flex-row bg-black p-3 shadow-md'>
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
      <h1 className="font-bold">Contact Us</h1>
      <p>Any questions or remarks? Just write us a message!</p>
      {/* Title */}

      {/* Info */}
        <div className="bg-black rounded-lg flex flex-col">
          <h1>Contact Information</h1>
          <p className="text-gray-400 text-lg">Say something to start a live chat!</p>
          <p>+1012 3456 789</p>
          <p>demo@gmail.com</p>
          <p>132 Dartmouth Street Boston, Massachusetts 02156 United States</p>
        </div>
      {/* Info */}
  </div>
 );
}