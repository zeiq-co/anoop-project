export default function Nav() {
  return (
    <ul className="flex space-x-8">
      <li><a className="cursor-pointer text-purple-400">Home</a></li>
      <li><a className="cursor-pointer text-cyan-400">AboutUs</a></li>
      <li><a className="cursor-pointer text-yellow-400">Pricing</a></li>
      <li>
        <a className="cursor-pointer bg-blue-500 text-white px-6 py-2 rounded-full">
          Download
        </a>
      </li>
    </ul>
  )
}