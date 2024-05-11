import { useContext } from "react"
import { AuthContext } from "../provider/AuthProvider"
import {Link} from "react-router-dom"

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext)
    return (
      <div className='navbar bg-base-100 shadow-sm px-[5%] mx-auto fixed z-50'>
        <div className='flex-1'>
          <Link to='/' className='flex gap-2 items-center'>
            <img className='w-auto h-7' src='' alt='' />
            <span className='font-bold'>FoodUnityHub</span>
          </Link>
        </div>
        <div className='flex-none'>
          <ul className='menu menu-horizontal px-1'>
            <li>
              <Link to='/'>Home</Link>
            </li>
  
            {!user && <li>
              <Link to='/login'>Login</Link>
            </li>}
          </ul>
  
          {user && <div className='dropdown dropdown-end z-50'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle avatar'
            >
              <div title={user?.displayName} className='w-10 rounded-full' >
                <img
                  referrerPolicy='no-referrer'
                  alt='User Profile Photo'
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
            >
              <li>
                <Link to='/addFood' className='justify-between'>Add Food</Link>
              </li>
              <li>
                <Link to='/availableFood'>Available Food</Link>
              </li>
              <li>
                <Link to='/myFood'>My Food</Link>
              </li>
              <li>
                <Link to='/bidRequests'>Bid Requests</Link>
              </li>
              <li className='mt-2'>
                <button onClick={logOut} className='bg-gray-200 block text-center'>Logout</button>
              </li>
            </ul>
          </div>}
        </div>
      </div>
    )
  }
  
  export default Navbar