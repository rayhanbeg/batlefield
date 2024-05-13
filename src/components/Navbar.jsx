import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import logo from "../assets/image/webLogo.png"


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [showLogout, setShowLogout] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleLogout = () => {
    setShowLogout(!showLogout);
  };

  return (
    <div className="fixed z-50 mx-auto w-full">
      <nav className="relative bg-white shadow-lg dark:bg-gray-700">
        <div className="container px-6 py-4 mx-auto">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex items-center justify-between">
              <Link to="/">
                <img className="w-auto h-6 sm:h-7" src={logo} alt="" />
              </Link>
              {/* Mobile menu button */}৯
              <div className="flex lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                  aria-label="toggle menu"
                >
                  {!isOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Menu open: "block", Menu closed: "hidden" */}
            <div
              className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-700 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
                isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
              }`}
            >
              <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                <Link to="/" className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Home
                </Link>
               {user &&  <Link to="/addFood" className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Add Food
                </Link>}
                <Link to="/availableFood" className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Available Food
                </Link>
                {user && <Link to="/myFood" className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                  My Food
                </Link>}
                {user && <Link to="/myFoodRequest" className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                  My Food Request
                </Link>}
              </div>

              <div className="flex items-center mt-4 lg:mt-0">
                {user ? (
                  <div className='dropdown dropdown-end z-50'>
                    <div
                      tabIndex={0}
                      role='button'
                      className='btn btn-ghost btn-circle avatar'
                      onClick={toggleLogout}
                    >
                      <div title={user.displayName} className='w-10 rounded-full'>
                        <img
                          referrerPolicy='no-referrer'
                          alt='User Profile Photo'
                          src={user.photoURL}
                        />
                      </div>
                    </div>
                    {showLogout && (
                      <button onClick={logOut} className=" mx-4 text-gray-600 transition-colors duration-300 transform lg:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none" aria-label="logout">
                        Logout
                      </button>
                    )}
                  </div>
                ) : (
                  <Link to="/login" className="hidden mx-4 text-gray-600 transition-colors duration-300 transform lg:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none" aria-label="show notifications">
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
