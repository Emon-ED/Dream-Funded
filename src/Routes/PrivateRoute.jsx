import { Navigate, useLocation } from "react-router-dom"
import useAuth from "../Hooks/useAuth";


const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user,loading}=useAuth();
    if(loading){
        return<h1 className="w-screen h-screen"><span className="loading loading-dots loading-lg"></span></h1>
    }
     if(user){
        return children;
    }
  return <Navigate to={'/signUp'} state={{from:location}} replace ></Navigate>
}

export default PrivateRoute