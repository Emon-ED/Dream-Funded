import { Link } from "react-router-dom"


const StudentDashbordNav = () => {
  return (
    <> 
     <Link 
      to={'/dashboard/profile'} 
      className="py-1 px-2 text-white font-bold flex justify-center items-center gap-3 bg-transparent rounded hover:bg-blue-400 border border-white/30 shadow-sm shadow-black/30 hover:scale-105 mb-2 transform transition-all duration-300" // Button style className-ei din
    >
      Dashboard
    </Link>
     <Link 
      to={'/dashboard/myApplications'} 
      className="py-1 px-2 text-white font-bold flex justify-center items-center gap-3 bg-transparent rounded hover:bg-blue-400 border border-white/30 shadow-sm shadow-black/30 hover:scale-105 mb-2 transform transition-all duration-300" // Button style className-ei din
    >
      My Application
    </Link>
     <Link 
      to={'/dashboard/notification'} 
      className="py-1 px-2 text-white font-bold flex justify-center items-center gap-3 bg-transparent rounded hover:bg-blue-400 border border-white/30 shadow-sm shadow-black/30 hover:scale-105 mb-2 transform transition-all duration-300" // Button style className-ei din
    >
     Inbox
    </Link>
     <Link 
      to={'/dashboard/document'} 
      className="py-1 px-2 text-white font-bold flex justify-center items-center gap-3 bg-transparent rounded hover:bg-blue-400 border border-white/30 shadow-sm shadow-black/30 hover:scale-105 mb-2 transform transition-all duration-300" // Button style className-ei din
    >
      Account Setting
    </Link>
    </>
  )
}

export default StudentDashbordNav