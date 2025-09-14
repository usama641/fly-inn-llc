import { Button, Card } from "antd";
import { Scale, DollarSign, Camera, Car, Warehouse } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaRoad } from "react-icons/fa6";

export default function FlyInnInfo() {
  return (
    <div className="app-container my-10">
      {/* Hosts Promises Section */}
      <section className="text-center">
        <h2 className="text-primary text-xl font-semibold mb-8">
          What Hosts Promise in Addition to the Accommodations
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="shadow-lg border border-red-200">
            <div className="flex flex-col items-center text-center">
              <Image
                src="/assets/images/become-a-host/runway.png"
                alt="runway"
                className="object-cover "
                priority
                width={100}
                height={100}
              />
              <h3 className="text-lg font-semibold">Runway</h3>
              <p className="text-sm mt-2">
                Every listing on Fly-Inn either has a landing strip or helipad
                conveniently located on the property or is situated within 10
                minutes of an airport you are likely to pilot into yourself.
                Most homes are either hangar homes, airpark homes or have their
                own private runway. Some homes even offer a water landing!
              </p>
            </div>
          </Card>

          <Card className="shadow-lg border border-red-200">
            <div className="flex flex-col items-center text-center">
              <Image
                src="/assets/images/become-a-host/vaadin_storage.png"
                alt="vaadin storage"
                className="object-cover "
                priority
                width={80}
                height={80}
              />
              <h3 className="text-lg font-semibold">Aircraft Storage</h3>
              <p className="text-sm mt-2">
                Whether it be access to a hangar, tie-downs, etc. on the
                property itself, or whether it be storage services the nearby
                airport offers, you are sure to have a place where you can
                securely store your aircraft. To keep the incoming pilots happy.
              </p>
            </div>
          </Card>

          <Card className="shadow-lg border border-red-200">
            <div className="flex flex-col items-center text-center">
              <Image
                src="/assets/images/become-a-host/el_car.png"
                alt="Transportation"
                className="object-cover "
                priority
                width={80}
                height={80}
              />
              <h3 className="text-lg font-semibold">Cars or Transportation</h3>
              <p className="text-sm mt-2">
                What good is it to land if you can’t get around once you arrive?
                All our hosts know this and provide either a free loaner or a
                nice car to rent or at least transportation to a nearby car
                rental. If the airport is a few minutes from the property,
                transportation will be made available to you at the airport upon
                your arrival.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Things to do before Listing */}
      <section className="mt-10">
        <h2 className="text-center text-lg font-semibold mb-8">
          Things you need to do before Listing
        </h2>
        <div className="grid md:grid-cols-2">
          <div className="flex items-center gap-4 p-4 border-b-1 border-r-1 border-gray-200">
            <Image
              src="/assets/images/become-a-host/law.png"
              alt="Transportation"
              className="object-cover "
              priority
              width={80}
              height={80}
            />
            <div>
              <h3 className="font-semibold">Know Local Laws & Ordinance</h3>
              <p className="text-sm text-gray-600">
                It is essential to know what local laws and ordinances apply to
                you and how they will affect your business.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 border-b-1  border-gray-200">
            <Image
              src="/assets/images/become-a-host/profit.png"
              alt="Transportation"
              className="object-cover "
              priority
              width={80}
              height={80}
            />
            <div>
              <h3 className="font-semibold">Calculate Your Desired Profit</h3>
              <p className="text-sm text-gray-600">
                Setting your price is a balancing act between maximizing profits
                and remaining at a low enough price to attract customers.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 border-r-1 border-gray-200">
            <Image
              src="/assets/images/become-a-host/price.png"
              alt="Transportation"
              className="object-cover "
              priority
              width={80}
              height={80}
            />
            <div>
              <h3 className="font-semibold">Research Prices Others Charge</h3>
              <p className="text-sm text-gray-600">
                Look at Fly-Inn’s listings to get an idea of what other hosts
                are charging for their spaces and what they are offering in
                return.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4">
            <Image
              src="/assets/images/become-a-host/camera.png"
              alt="Transportation"
              className="object-cover "
              priority
              width={80}
              height={80}
            />
            <div>
              <h3 className="font-semibold">List Your Space</h3>
              <p className="text-sm text-gray-600">
                Now all you need is some fantastic photos and a great
                description that is both accurate and informative.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-1">
            Fly-Inn has got all the Tools you need at one Place
          </h2>
          <p className="text-sm text-gray-600  mx-auto">
            Everything you need to manage your aviation-friendly accommodations
            efficiently
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {/* Listing Management */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6 text-center flex justify-center items-center flex-col">
              <Image
                src="/assets/images/become-a-host/management.png"
                alt="Listing Management"
                width={60}
                height={60}
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Listing Management
              </h3>
              <p className="text-gray-600 font-normal">
                Easily manage all of your listings with Fly-Inn's simple,
                straightforward platform.
              </p>
            </div>
          </div>

          {/* Booking System */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6 text-center flex justify-center items-center flex-col">
              <Image
                src="/assets/images/become-a-host/booking-system.png"
                alt="Booking System"
                width={60}
                height={60}
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Booking System
              </h3>
              <p className="text-gray-600 font-normal">
                Your guests will love how easy it is to choose your listing and
                proceed to check out.
              </p>
            </div>
          </div>

          {/* Messaging System */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6 text-center flex justify-center items-center flex-col">
              <Image
                src="/assets/images/become-a-host/messages-system.png"
                alt="Messaging System"
                width={60}
                height={60}
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Messaging System
              </h3>
              <p className="text-gray-600   font-normal">
                Fly-Inn's built-in messaging system makes it easy for guests and
                hosts to communicate with each other.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          {/* Still got doubts section */}
          <section className="flex flex-col md:flex-row justify-between items-center p-10 rounded-xl bg-gradient-to-r from-[#b21116] to-[#8e0f0f] text-white shadow-lg">
            <div className="max-w-md text-center md:text-left">
              <h2 className="text-3xl font-normal mb-2">Still got doubts?</h2>
              <p className="mb-6">
                If you have any questions, please visit our FAQ (Frequently
                Asked Questions) page, or give us a call and we will be happy to
                assist you.
              </p>
              <Button>Visit FAQ</Button>
            </div>
            <div className="mt-6 md:mt-0">
              <Image
                src="/assets/images/become-a-host/question-mark.png"
                alt="FAQ Icon"
                width={250}
                height={250}
                className="object-contain"
              />
            </div>
          </section>

          {/* Ready to List section */}
          <section className="flex flex-col md:flex-row justify-between items-center p-10 rounded-xl bg-gray-50 shadow border border-gray-200">
            <div className="max-w-md text-center md:text-left">
              <h2 className="text-2xl font-semibold text-[#CE2029] mb-2">
                Ready to List?
              </h2>
              <p className="mb-12 text-gray-800">
                List your space now and be a part of the Fly-Inn Family.
              </p>
              <Link href="/become-a-host/get-started">
                <button className="px-6 py-2 bg-gradient-to-r from-[#b21116] to-[#8e0f0f] text-white font-medium rounded-md hover:opacity-90 transition">
                  List Now
                </button>
              </Link>
            </div>
            <div className="mt-6 md:mt-0">
              <Image
                src="/assets/images/become-a-host/home.png"
                alt="FAQ Icon"
                width={250}
                height={250}
                className="object-contain"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
