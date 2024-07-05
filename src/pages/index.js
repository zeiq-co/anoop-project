import { Watch, Coins, MoveUpRight } from "lucide-react";

import ServiceItem from '../components/ServiceItem';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import MySlider from '../components/MySlider';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">

      {/* Header */}

      <div className="flex flex-row p-3 shadow-md bg-purple-50">
        <div className="flex flex-1">
          <h1 className="font-bold uppercase text-xl text-purple-400">My Profile</h1>
        </div>
        <div className="flex flex-1 justify-end">
          <Nav />
        </div>
      </div>

      {/* Header */}

      {/* Hero Area */}

      <div className="flex flex-row mt-2">
        <div className="flex flex-1 flex-col pr-64 pl-4 py-12 justify-center">
          <h2 className="text-4xl font-bold text-purple-300">
            Check Currency Exchange Rate in Real Time
          </h2>
          <p className="text-purple-200">Monitor your worldwide business with this handy apps</p>
        </div>
        <div className="flex flex-1">
          <img
            src="https://placehold.co/400"
            alt="hero"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>

      {/* Hero Area */}

      {/* Trusted By */}

      <div className="flex m-3 flex-col">
        <h2 className="text-3xl font-bold m-2 text-purple-300">
          Trusted by
        </h2>
        <div className="flex m-3 flex-row space-x-2">
          <img
            src="https://placehold.co/120"
            className="w-full h-full object-cover rounded-lg"
          />
          <img
            src="https://placehold.co/120"
            className="w-full h-full object-cover rounded-lg"
          />
          <img
            src="https://placehold.co/120"
            className="w-full h-full object-cover rounded-lg"
          />
          <img
            src="https://placehold.co/120"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Trusted By */}
      
      {/* Slider */}

      <MySlider />

      {/* Slider */}

      {/* Easy To Use */}
      
      <div className="flex flex-row m-3">
        <div className="flex flex-1 flex-col pr-64 pl-4 py-12 justify-center">
          <h2 className="text-3xl  text-purple-300 font-bold">
           Easy to Use
          </h2>
          <p className="text-purple-200 text-lg">Our clean and intuitive design will help you operate the apps easily</p>
        </div>
        <div className="flex flex-1">
          <img
            src="https://placehold.co/400"
            alt="hero"
            className="w-30 h-80 object-cover pr-8 pt-14 rounded-lg"
          />
        </div>

      </div>

      {/* Easy To Use */}

      {/* Upgrade */}
       
            
      <div className="flex flex-row m-3">
        <div className="flex flex-1 flex-col pr-64 pl-4 py-12 justify-center">
        <img
            src="https://placehold.co/400"
            alt="hero"
            className="w-30 h-80 object-cover pr-8 pt-14 rounded-lg"
          />
       
        </div>
        <div className="flex flex-1">

        </div>
      </div>


      {/* Upgrade */}

      {/* Services */}
      

      <div className="flex flex-row justify justify-between m-4 ">
        <ServiceItem
          title="48 Hours Customer Service"
          description="We respect your passion to run your business by always accompany you"
          image={<Watch size={60} color="#066fe8" />}
          />
        <ServiceItem
          title="Currencies All Over The World"
          description="Our complete and real-time currencies database will help your business"
          image={<Coins size={60} color="#066fe8" />}
          />
        <ServiceItem
          title="Upgrade Once You Ready"
          description="No worries, we always welcome you once you ready to upgrade"
          image={<MoveUpRight size={60} color="#066fe8" />}
          />
      </div>

    {/* Services */}

    {/* Footer */}

      <Footer />
      
      {/* Footer */}
    </div>
  );
}

