export default function Nav() {
  return (
    <ul className='flex space-x-8'>
      <li>
        <a className='cursor-pointer font-semibold text-purple-400'>Home</a>
      </li>
      <li>
        <a className='cursor-pointer font-semibold text-purple-400'>About Us</a>
      </li>
      <li>
        <a className='cursor-pointer font-semibold text-purple-400'>Pricing</a>
      </li>
      <li>
        <a className='cursor-pointer rounded-full bg-purple-400 px-6 py-2 text-white'>
          Download
        </a>
      </li>
    </ul>
  );
}
