import { Link } from "react-router-dom"


const ProviderNav = () => {
  return (
     <> 
     <Link 
      to={'/dashboard/provider/notification'} 
      className="py-1 px-2 text-white font-bold flex justify-center items-center gap-3 bg-transparent rounded hover:bg-blue-400 border border-white/30 shadow-sm shadow-black/30 hover:scale-105 mb-2 transform transition-all duration-300" // Button style className-ei din
    >
        Info Tracking
    </Link>
     <Link
      to={'/dashboard/provider/applications'} 
      className="py-1 px-2 text-white font-bold flex justify-center items-center gap-3 bg-transparent rounded hover:bg-blue-400 border border-white/30 shadow-sm shadow-black/30 hover:scale-105 mb-2 transform transition-all duration-300" // Button style className-ei din
    >
      Inbox
    </Link>
     <Link 
      to={'/dashboard/provider/profile'} 
      className="py-1 px-2 text-white font-bold flex justify-center items-center gap-3 bg-transparent rounded hover:bg-blue-400 border border-white/30 shadow-sm shadow-black/30 hover:scale-105 mb-2 transform transition-all duration-300" // Button style className-ei din
    >
      Analytics
    </Link>
     <Link 
      to={'/dashboard/provider/document'} 
      className="py-1 px-2 text-white font-bold flex justify-center items-center gap-3 bg-transparent rounded hover:bg-blue-400 border border-white/30 shadow-sm shadow-black/30 hover:scale-105 mb-2 transform transition-all duration-300" // Button style className-ei din
    >
     Fund Management
    </Link>
     
     <Link 
      to={'/dashboard/provider/accountSetting'} 
      className="py-1 px-2 text-white font-bold flex justify-center items-center gap-3 bg-transparent rounded hover:bg-blue-400 border border-white/30 shadow-sm shadow-black/30 hover:scale-105 mb-2 transform transition-all duration-300" // Button style className-ei din
    >
      Account Setting
    </Link>
    </>
  )
}

export default ProviderNav