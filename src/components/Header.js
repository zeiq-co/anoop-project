import Nav from "./Nav";

export default function Header () {
    return (
        <div className='flex flex-row bg-purple-50 p-3 shadow-md'>
        <div className='flex flex-1'>
          <h1 className='text-xl font-bold uppercase text-purple-400'>
            My Profile
          </h1>
        </div>
        <div className='flex flex-1 justify-end'>
          <Nav />
        </div>
      </div>
    );
}