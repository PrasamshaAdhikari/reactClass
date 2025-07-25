import React from 'react'

const EditPage = () => {
  return (
    <div>
  <div className="bg-white border-4 rounded-lg shadow relative m-10">
    <div className="flex items-start justify-between p-5 border-b rounded-t">
      <h3 className="text-xl font-semibold">
        Registration Cancellation Form
      </h3>
      <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="product-modal">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
      </button>
    </div>
    <div className="p-6 space-y-6">
      <form action="#">
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="your-name" className="text-sm font-medium text-gray-900 block mb-2">Your Name</label>
            <input type="text" name="your-name" id="your-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Prasam Adhikari" required />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="email-ID" className="text-sm font-medium text-gray-900 block mb-2">Email-ID</label>
            <input type="text" name="email-ID" id="email-ID" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="prasam@gmail.com" required />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="Address" className="text-sm font-medium text-gray-900 block mb-2">Address</label>
            <input type="text" name="Address" id="Address" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Sunsari" required />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="id" className="text-sm font-medium text-gray-900 block mb-2">College ID</label>
            <textarea id="id" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="PUR080BCT060" required />
          </div>
          <div className="col-span-full">
            <label htmlFor="reason" className="text-sm font-medium text-gray-900 block mb-2">Why to cancel the registration?</label>
            <textarea id="reason" rows={6} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4" placeholder="Details" defaultValue={""} />
          </div>
        </div>
      </form>
    </div>
    <div className="p-6 border-t border-gray-200 rounded-b">
      <button className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">Submit</button>
    </div>
  </div>
</div>

  )
}

export default EditPage