export default function Nav() {
  return (
    <ul className="flex space-x-8">
      <li><a className="cursor-pointer">Home</a></li>
      <li><a className="cursor-pointer">AboutUs</a></li>
      <li><a className="cursor-pointer">Pricing</a></li>
      <li>
        <a className="cursor-pointer bg-purple-400 text-white px-6 py-2 rounded-full">
          Download
        </a>
      </li>
    </ul>
  )
}