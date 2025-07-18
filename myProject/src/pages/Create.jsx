import React from 'react'

const Create = () => {
  return (
    <div>

        <div className="container mx-auto p-4 text-black">
  {/* Page Title */}
  <h1 className="text-3xl font-bold mb-6">
    Register for Engineering Programme in TU-IOE Purwanchal Campus, Dharan
  </h1>

  {/* Personal Details Section */}
  <div className="bg-white rounded-lg shadow-md p-4 mb-8">
    <h2 className="text-xl font-semibold mb-4">Personal Details</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Left Form Inputs */}
      <div className="md:col-span-2 space-y-4">
        <input type="text" placeholder="Your name" className="block w-full rounded-md p-2 border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327]" style={{ backgroundColor: '#f6f6f6' }} />

        <div className="flex items-center bg-[#f6f6f6] rounded-md p-2">
          <span className="flex-shrink-0 flex items-center mr-3 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v2M19 3v2M5 10h14M4 21h16a1 1 0 001-1V8a1 1 0 00-1-1H4a1 1 0 00-1 1v12a1 1 0 001 1z" />
            </svg>
            <span className="ml-2">Birthdate</span>
          </span>
          <input type="datetime-local" className="block w-full rounded-md p-2 border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327]" style={{ backgroundColor: '#f6f6f6' }} />
        </div>

        <select className="block w-full h-12 rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327]" style={{ backgroundColor: '#f6f6f6', padding: 0 }}>
          <option>Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Others</option>
        </select>

        <input type="text" placeholder="Your Address" className="block w-full rounded-md p-2 border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327]" style={{ backgroundColor: '#f6f6f6' }} />
        <textarea placeholder="Your Phone Number" className="block w-full rounded-md p-2 border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327]" style={{ backgroundColor: '#f6f6f6' }} />
        <textarea placeholder="Your Email Address" className="block w-full rounded-md p-2 border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327]" style={{ backgroundColor: '#f6f6f6' }} />
        <input type="text" placeholder="Nearest Guardian Address" className="block w-full rounded-md p-2 border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327]" style={{ backgroundColor: '#f6f6f6' }} />
      </div>

      {/* Right Image Upload */}
      <div>
        <label htmlFor="image-upload" className="block w-70 h-10 min-h-[20rem] border-2 border-dashed border-gray-300 rounded-md cursor-pointer flex-col items-center justify-center bg-[#f6f6f6] hover:bg-gray-300">
          <div className="text-center">
            <div className="mb-2">
              <button type="button" className="bg-[#8c0327] hover:bg-[#6b0220] text-white rounded-full py-2 px-4">Select from the computer</button>
            </div>
            <p className="text-gray-500">or drag your passport size photo here (upto 200MB)</p>
            <p className="text-gray-500 text-sm mt-1">PNG, JPG, SVG</p>
          </div>
        </label>
        <input id="image-upload" name="image" type="file" accept="image/*" className="sr-only" />
      </div>
    </div>
  </div>

  {/* Academic Details Section */}
  <div className="bg-white rounded-lg shadow-md p-4 mb-8">
    <h2 className="text-xl font-semibold mb-4">Academical Details</h2>
    <div className="space-y-4">
      <input type="number" placeholder="Rank in entrance" className="block w-full rounded-md p-2 border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327]" style={{ backgroundColor: '#f6f6f6' }} />

      <select className="block w-full rounded-md p-2 border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327]" style={{ backgroundColor: '#f6f6f6' }}>
        <option>Select a stream</option>
        <option>Computer and Information Technology</option>
        <option>Electonics and Communication</option>
        <option>Civil</option>
        <option>Electrical</option>
        <option>Architecture</option>
        <option>Agriculture</option>
        <option>Mechanical</option>
      </select>

      <select className="block w-full rounded-md p-2 border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327]" style={{ backgroundColor: '#f6f6f6' }}>
        <option>Select a quota</option>
        <option>Dalit/Janajati</option>
        <option>Staff(relatives)</option>
        <option>Differently Abled</option>
        <option>Government Schooling(from grade 8)</option>
        <option>None</option>
      </select>

      <textarea placeholder="Why Purwanchal Campus?" rows={3} className="block w-full h-48 rounded-md p-2 border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327]" style={{ backgroundColor: '#f6f6f6' }} />
    </div>
  </div>

  {/* Submit and Footer */}
  <div className="col-span-full mt-6 p-2">
    <button type="submit" className="block w-full bg-[#8c0327] hover:bg-[#6b0220] text-white font-bold py-3 px-4 rounded-full">
      Register now
    </button>
  </div>
  <h2 className="text-center mt-4 font-bold">
    You will be informed via email if your seat is secured! <br /> GOOD LUCK
  </h2>
</div>



    </div>
  )
}

export default Create