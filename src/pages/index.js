
export default function Home() {

  return (
    <div className="h-screen bg-white">
      {/* Header */}
      <div className="flex flex-row p-3 shadow-md">
        <div className="flex flex-1">
          <h1 className="font-bold uppercase text-xl">My Profile</h1>
        </div>
        <div className="flex flex-1 justify-end">
          <ul className="flex space-x-8">
            <li><a className="cursor-pointer">Home</a></li>
            <li><a className="cursor-pointer">About Us</a></li>
            <li><a className="cursor-pointer">Pricing</a></li>
            <li>
              <a className="cursor-pointer bg-blue-500 text-white px-6 py-2 rounded-full">
                Download
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Header */}
      {/* Hero Area */}
      <div className="flex flex-row mt-2">
        <div className="flex flex-1 flex-col pr-64 pl-4 py-12 justify-center">
          <h2 className="text-4xl font-bold">
            Check Currency Exchange Rate in Real Time
          </h2>
          <p>Monitor your worldwide business with this handy apps</p>
        </div>
        <div className="flex flex-1">
          <img
            src="https://placehold.co/400"
            alt="hero"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {/* Hero Area */}
    </div>
  );
}

