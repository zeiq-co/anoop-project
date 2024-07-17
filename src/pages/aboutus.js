import Nav from "@/components/Nav";

export default function Home () {
  return(
      <div className="min-h-screen bg-white">
         {/* Header */}
          <div className='flex flex-row bg-purple-50 p-3 shadow-md order-spacing-2 border-2 border-purple-300'>
            <div className='flex flex-1'>
             <h1 className='text-xl font-bold uppercase text-purple-400'> My Profile </h1>
            </div>
            <div className='flex flex-1 justify-end'>
             <Nav />
            </div>
          </div>
         {/* Header */}
         {/* Title */}
          <div className="border-spacing-1 border-2 border-purple-300">
          <h1 className='p-8 text-center text-5xl font-bold text-purple-300'>ABOUT US</h1>
          <p className=' text-xl text-center font-semibold text-purple-400 shadow-purple-200'>Welcome to the Page with everything About Us!</p>
          </div>
         {/* Title */}
      </div>
  );
}