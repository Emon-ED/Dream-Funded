import { Link } from "react-router-dom";


const Navbar = () => {
  const userPerson=(
    <div>
      <div className="flex items-center gap-0 text-sm">
        <button className="border-2 backdrop-blur-md px-2 py-1 shadow-md shadow-black hover:scale-105 hover:bg-teal-500 hover:text-white transform  transition-all duration-300 border-teal-500 rounded-s-3xl">LOG In</button>
        <button className="border-2 backdrop-blur-md px-2 py-1 shadow-md shadow-black hover:scale-105 hover:bg-teal-500 hover:text-white transform  transition-all duration-300 border-teal-500 rounded-e-3xl">Sign Up</button>
      </div>
    </div>

  )
  const navItems =(
    <div className="flex flex-col lg:flex-row gap-2 lg:gap-5">
    <Link>
      <li><button className="border-2 backdrop-blur-sm border-teal-500 px-3 py-1 text-teal-400 shadow-inner hover:scale-105 hover:bg-teal-500 hover:text-white transform  transition-all duration-300 shadow-black rounded-3xl font-bold">Home</button></li>
    </Link>
    <Link>
      <li><button className="border-2 backdrop-blur-sm border-teal-500 px-3 py-1 text-teal-400 shadow-inner hover:scale-105 hover:bg-teal-500 hover:text-white transform  transition-all duration-300 shadow-black rounded-3xl font-bold">Scholarships</button></li>
    </Link>
    <Link>
      <li><button className="border-2 backdrop-blur-sm border-teal-500 px-3 py-1 text-teal-400 shadow-inner hover:scale-105 hover:bg-teal-500 hover:text-white transform  transition-all duration-300 shadow-black rounded-3xl font-bold">About</button></li>
    </Link>
    <Link>
      <li><button className="border-2 backdrop-blur-sm border-teal-500 px-3 py-1 text-teal-400 shadow-inner hover:scale-105 hover:bg-teal-500 hover:text-white transform  transition-all duration-300 shadow-black rounded-3xl font-bold">Contact</button></li>
    </Link>
   
    </div>
  );
  return (
    <div className="navbar z-10  bg-opacity-30 text-white max-w-[1280px] mx-auto bg-black">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {navItems}
      </ul>
    </div>
    <a className="font-serif text-teal-500 bg-black/50 py-1 font-bold px-3 rounded-2xl backdrop-blur-sm text-xl">Dream Funded</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navItems}
    </ul>
  </div>
  <div className="navbar-end">
   {userPerson}
  </div>
</div>
  )
}

export default Navbar