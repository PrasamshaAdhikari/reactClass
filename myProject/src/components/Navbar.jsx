import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 text-xl py-2.5 dark:bg-gray-900">
      <div className='h-6 mt-4 mb-8'>
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <Link to="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"><h1 className='text-4xl font-bold text-blue-800'><b>Purwanchal Engineering</b> Campus</h1></span>
        </Link>

        <div className="flex items-center lg:order-2">
          <a
            href="https://themesberg.com/product/tailwind-css/landing-page"
            className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
          >
            Download
          </a>
        </div>

        <div className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <Link to="/" className="block py-2 pl-3 pr-4 text-purple-700 lg:p-0">
                Home
              </Link>
            </li>
            <li>
              <Link to="/create" className="block py-2 pl-3 pr-4 text-gray-700 hover:text-purple-700 lg:p-0">
                Create
              </Link>
            </li>
            <li>
              <Link to="/edit" className="block py-2 pl-3 pr-4 text-gray-700 hover:text-purple-700 lg:p-0">
                Edit
              </Link>
            </li>
            <li>
              <Link to="/single" className="block py-2 pl-3 pr-4 text-gray-700 hover:text-purple-700 lg:p-0">
                Environmental Concern
              </Link>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
