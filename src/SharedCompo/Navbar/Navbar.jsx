import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { IoIosLogOut } from "react-icons/io";
import StudentDashbordNav from "../DashbordNav/StudentDashbords/StudentDashbordNav";
import ProviderNav from "../DashbordNav/ProviderDashNav/ProviderNav";
import AdminDash from "../DashbordNav/AdminDashNav/AdminDash";


const Navbar = () => {
  const {user,logOut} = useAuth();
  const handleSignOut = () => {
    logOut()
    .then(()=>{
          Swal.fire({
        title: 'Successfully Log Out!',
        icon: 'success',
        background: 'rgba(15, 23, 42, 0.7)', 
        color: '#fff',
        backdrop: 'rgba(0,0,0,0.5)', 
        customClass: {
          popup: 'rounded-xl shadow-lg border border-white/50 backdrop-blur-md',
          title: 'text-xl font-bold text-teal-400',
          content: 'text-white',
          confirmButton: 'bg-teal-600 text-white px-4 py-2 rounded-xl hover:bg-teal-700 transition-all'
        },
      })
    })
  }
  const userPerson=(
    <div>
      {user ? <div className="dropdown dropdown-bottom flex justify-center items-center gap-3">
        <span className="font-semibold ">{user?.displayName}</span>
  <div tabIndex={0} role="button" className=" w-16 rounded-full 
  ">  <img src="https://i.ibb.co/gF67Wycd/vecteezy-user-icon-on-transparent-background-19879186.png"/></div>
  <ul tabIndex={0} className="dropdown-content menu  rounded-box z-10  p-2 w-44 bg-teal-900/90 -ms-20 border border-white/50 backdrop-blur-lg shadow-lg">


<Link>
{/* Dashboard Navigation------------------------- */}

{/* student dashbord nav -------------------------- */}
 <StudentDashbordNav></StudentDashbordNav>
 
{/* Scholarship provider dashbord nav -------------------------- */}
<ProviderNav></ProviderNav>

{/* Admin dashbord nav -------------------------- */}

<AdminDash></AdminDash>

{/* Dashboard Navigation------------------------- */}

  <li className="bg-black/50 w-full rounded-xl border border-white/30">
    <button onClick={handleSignOut} className="  py-1 px-2 text-red-600 hover:scale-105 transform transition-all duration-300 font-bold flex justify-center items-center gap-3">Log Out <IoIosLogOut></IoIosLogOut> </button>
  </li>
    </Link>
    
  </ul>
</div>
:
<div className="flex items-center gap-0 text-sm">
  <Link to="/signIn">
        <button className="border-2 backdrop-blur-md px-2 py-1 shadow-md shadow-black hover:scale-105 hover:bg-teal-500 hover:text-white transform  transition-all duration-300 border-teal-500 rounded-s-3xl">LOG In</button>
        </Link>
        <Link to="/signUp">
        <button className="border-2 backdrop-blur-md px-2 py-1 shadow-md shadow-black hover:scale-105 hover:bg-teal-500 hover:text-white transform  transition-all duration-300 border-teal-500 rounded-e-3xl">Sign Up</button>
        </Link>
      </div>
 }
      
    </div>

  )
  const navItems =(
    <div className="flex flex-col lg:flex-row gap-2 lg:gap-5">
    <Link>
      <li><button className="border-2 backdrop-blur-sm border-teal-500 px-3 py-1 text-teal-400 shadow-inner hover:scale-105 hover:bg-teal-500 hover:text-white transform  transition-all duration-300 shadow-black rounded-3xl font-bold">Home</button></li>
    </Link>
    <Link to={'/scholarship'}>
      <li><button className="border-2 backdrop-blur-sm border-teal-500 px-3 py-1 text-teal-400 shadow-inner hover:scale-105 hover:bg-teal-500 hover:text-white transform  transition-all duration-300 shadow-black rounded-3xl font-bold">Scholarships</button></li>
    </Link>
    <Link to={'/about'}>
      <li><button className="border-2 backdrop-blur-sm border-teal-500 px-3 py-1 text-teal-400 shadow-inner hover:scale-105 hover:bg-teal-500 hover:text-white transform  transition-all duration-300 shadow-black rounded-3xl font-bold">About</button></li>
    </Link>
    <Link to={'/contact'}>
      <li><button className="border-2 backdrop-blur-sm border-teal-500 px-3 py-1 text-teal-400 shadow-inner hover:scale-105 hover:bg-teal-500 hover:text-white transform  transition-all duration-300 shadow-black rounded-3xl font-bold">Contact</button></li>
    </Link>
   
    </div>
  );
  return (
    <div className="navbar fixed z-10 shadow-md shadow-black/30 bg-opacity-30 text-white backdrop-blur-md -mb-2 max-w-[1280px] mx-auto bg-black">
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