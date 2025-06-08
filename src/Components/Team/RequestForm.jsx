import React from 'react';

const RequestForm = () => {
  return (
    <div className='font-rajdhani'>
      <div className="bg-[#0c2239] text-white px-14 py-16 shadow-md">
        <h3 className="text-3xl font-bold pb-8">Request a Call Back</h3>
        <p className="mb-4 pb-8 font-roboto">
        Lorem ipsum dolor sit amet, consectetur adipisicing Fuga magnam maxime ea adipisci iusto.
        </p>

        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-4 rounded-md text-gray-800 bg-white focus:outline-none"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Phone"
              className="w-full p-4 rounded-md text-gray-800 bg-white focus:outline-none"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 rounded-md text-gray-800 bg-white focus:outline-none"
            />
          </div>

          {/* Select dropdown with an icon */}
          <div className="relative">
            <select className="w-full font-roboto p-4 rounded-md text-[#0C2239] bg-white focus:outline-none appearance-none">
              <option>- Choose Service -</option>
              <option>Building Construction</option>
              <option>Metal Industry</option>
              <option>Oil & Gas</option>
              <option>Lather Factory</option>
              <option>Hard Metal</option>
              <option>Manufacturing</option>
            </select>
            {/* Icon on the right side */}
            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          <button
            type="submit"
            className="w-full text-sm font-roboto bg-[#00A1E6] text-white py-4 rounded-md hover:bg-orange-600 transition"
          >
            REQUEST SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default RequestForm;