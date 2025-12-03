
import { Link } from 'react-router-dom'

const AdminDash = () => {
  return (
      <> 
     <Link 
      to={'/dashboard/admin/infoTracking'} 
      className="py-1 px-2 text-white font-bold flex justify-center items-center gap-3 bg-transparent rounded hover:bg-blue-400 border border-white/30 shadow-sm shadow-black/30 hover:scale-105 mb-2 transform transition-all duration-300" // Button style className-ei din
    >
      Admin Dashboard
    </Link>
     <Link 
      to={'/dashboard/admin/verification'} 
      className="py-1 px-2 text-white font-bold flex justify-center items-center gap-3 bg-transparent rounded hover:bg-blue-400 border border-white/30 shadow-sm shadow-black/30 hover:scale-105 mb-2 transform transition-all duration-300" // Button style className-ei din
    >
     Verification Status
    </Link>
     <Link 
      to={'/dashboard/admin/usersManagement'} 
      className="py-1 px-2 text-white font-bold flex justify-center items-center gap-3 bg-transparent rounded hover:bg-blue-400 border border-white/30 shadow-sm shadow-black/30 hover:scale-105 mb-2 transform transition-all duration-300" // Button style className-ei din
    >
    User Management
    </Link>
     <Link 
      to={'/dashboard/admin/contentAllowance'} 
      className="py-1 px-2 text-white font-bold flex justify-center items-center gap-3 bg-transparent rounded hover:bg-blue-400 border border-white/30 shadow-sm shadow-black/30 hover:scale-105 mb-2 transform transition-all duration-300" // Button style className-ei din
    >
      Content 
    </Link>
    </>
  )
}

export default AdminDash