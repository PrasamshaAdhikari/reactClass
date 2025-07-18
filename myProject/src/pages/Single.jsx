import React from 'react';

const Single = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white min-h-screen">
      <div className="container mx-auto p-8 overflow-hidden md:rounded-lg md:p-10 lg:p-12">

        <div className="flex justify-between">
          <h1 className="font-serif text-3xl font-medium">Global Warming Awareness</h1>
        </div>

        <div className="h-32 md:h-30" />

        <p className="font-sans text-4xl font-bold text-white max-w-5xl lg:text-7xl lg:pr-24 md:text-6xl">
          The Earth is Heating Up — It’s Time to Act
        </p>

        <div className="flex flex-col md:flex-row items-center gap-10 mt-12">
          <div className="flex-1">
            <p className="max-w-xl font-serif text-xl text-white md:text-3xl text-center md:text-left">
              Global warming is not a distant threat — it's already affecting weather, health, wildlife, and our daily lives.
              <br className="hidden md:block" />
              <span className="text-yellow-300 font-semibold">Together, we can make a difference.</span>
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="./warming.png"
              alt="Save The Earth"
              className="h-[28rem] w-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="h-32 md:h-40" />

        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <p className="self-start inline font-sans text-4xl font-medium text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-green-600">
              Urgent Action Needed
            </p>
            <h2 className="text-4xl font-bold">Why We Must Respond Now</h2>
            <div className="h-6" />
            <p className="font-serif text-xl text-white md:pr-10">
              Rising temperatures, sea level rise, and extreme weather are intensifying. Immediate steps are required to reduce carbon emissions and protect our planet.
            </p>
          </div>
        </div>

        <div className="h-12" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
          <div className="flex flex-col items-center text-center md:text-left">
            <p className="font-semibold text-2xl mb-3">Melting Glaciers</p>
            <p className="font-serif text-lg mb-5">
              Rapid loss of ice in polar regions is accelerating sea level rise.
            </p>
            <img
              src="./melt.png"
              alt="Melting Glacier"
              className="rounded-lg shadow-lg w-full object-cover h-64"
            />
          </div>

          <div className="flex flex-col items-center text-center md:text-left">
            <p className="font-semibold text-2xl mb-3">Wildfire</p>
            <p className="font-serif text-lg mb-5">
              Because of natural causes and human activities, often intensified by climate change and poor land management.
            </p>
            <img
              src="./wildfire.png"
              alt="Forest Wildfire"
              className="rounded-lg shadow-lg w-full object-cover h-64"
            />
          </div>

          <div className="flex flex-col items-center text-center md:text-left">
            <p className="font-semibold text-2xl mb-3">Carbon Emissions</p>
            <p className="font-serif text-lg mb-5">
              Transportation, industry, and deforestation contribute significantly to greenhouse gases.
            </p>
            <img
              src="./air.png"
              alt="Air Pollution"
              className="rounded-lg shadow-lg w-full object-cover h-64"
            />
          </div>
        </div>

        <div className="h-32 md:h-40" />

        <p className="font-serif text-4xl text-center max-w-5xl mx-auto">
          <span className="text-white">If we unite, we can reverse the damage</span>
          <br />
          <span className="text-white">
            Educating ourselves and taking small steps daily can lead to a cooler, greener future.
          </span>
        </p>

        <div className="h-32 md:h-40" />

        <div className="grid gap-4 md:grid-cols-3">
          <div className="flex-col p-8 py-16 rounded-lg shadow-2xl md:p-12 bg-gradient-to-br from-gray-900 to-black">
            <p className="flex items-center justify-center text-4xl font-semibold text-green-400 bg-green-800 rounded-full shadow-lg w-14 h-14">
              1
            </p>
            <div className="h-6" />
            <p className="font-serif text-3xl">Reduce, Reuse, Recycle</p>
          </div>
          <div className="flex-col p-8 py-16 rounded-lg shadow-2xl md:p-12 bg-gradient-to-b from-gray-900 to-black">
            <p className="flex items-center justify-center text-4xl font-semibold text-indigo-400 bg-indigo-800 rounded-full shadow-lg w-14 h-14">
              2
            </p>
            <div className="h-6" />
            <p className="font-serif text-3xl">Switch to Renewable Energy</p>
          </div>
          <div className="flex-col p-8 py-16 rounded-lg shadow-2xl md:p-12 bg-gradient-to-bl from-gray-900 to-black">
            <p className="flex items-center justify-center text-4xl font-semibold text-teal-400 bg-teal-800 rounded-full shadow-lg w-14 h-14">
              3
            </p>
            <div className="h-6" />
            <p className="font-serif text-3xl">Plant Trees, Save Forests</p>
          </div>
        </div>

        <div className="h-40" />

        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col justify-center md:col-span-2">
            <p className="self-start inline font-sans text-xl font-medium text-transparent bg-clip-text bg-gradient-to-br from-teal-400 to-teal-600">
              Every Voice Matters
            </p>
            <h2 className="text-4xl font-bold">Together We Can Make a Difference</h2>
            <div className="h-6" />
            <p className="font-serif text-xl text-white md:pr-10">
              Whether it’s conserving energy, walking more, or raising awareness, your contribution counts. The time for change is now.
            </p>
            <div className="h-8" />
            <div className="grid gap-6 pt-8 border-t border-gray-800 lg:grid-cols-3">
              <div>
                <p className="font-semibold text-white">Conserve Energy</p>
                <div className="h-4" />
                <p className="font-serif text-white">
                  Use energy-efficient appliances and limit unnecessary power use.
                </p>
              </div>
              <div>
                <p className="font-semibold text-white">Go Green</p>
                <div className="h-4" />
                <p className="font-serif text-white">
                  Embrace eco-friendly habits in your daily life.
                </p>
              </div>
              <div>
                <p className="font-semibold text-white">Support Policies</p>
                <div className="h-4" />
                <p className="font-serif text-white">
                  Advocate for environmental protection laws and clean technologies.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="-mr-24 rounded-lg md:rounded-l-full bg-gradient-to-br from-gray-900 to-black h-96" />
          </div>
        </div>

        <div className="h-10 md:h-10" />

        <div className="flex justify-center items-center my-6">
          <img
            src="./earth.png"
            alt="Save The Earth"
            className="h-[28rem] w-auto object-cover rounded-lg"
          />
        </div>

        <div className="text-center px-4 py-6">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold leading-snug text-gray-100">
            It's a <span className="text-green-600 italic">vow</span> to take,<br />
            An <span className="text-blue-600 italic">effort</span> to make,<br />
            <span className="uppercase tracking-wide text-yellow-600 font-bold">To Save Our Earth</span>
          </h1>
        </div>

      </div>
    </div>
  )
}

export default Single;
