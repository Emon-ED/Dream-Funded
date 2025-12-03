import { createContext, useEffect, useState } from "react"
import { auth } from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext();
const AuthProviders = ({children}) => {
  const axiosPublic = useAxiosPublic();
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

// create with Email and Password Authentication-----------------
const createUser =(email,password)=>{
 setLoading(true);
 return createUserWithEmailAndPassword(auth,email,password);
}

// Create User with Google Authentication------------------------------
const provider = new GoogleAuthProvider();
const googleSignIn =()=>{
  setLoading(true);
  return signInWithPopup(auth,provider)
}
// SignOut users-----------------------
const logOut =()=>{
  setLoading(true);
  return signOut(auth);
}

// SiginIn section ----------============================
const signIn = (email,password)=>{
setLoading(true);
return signInWithEmailAndPassword(auth,email,password);
}

// Create AuthState Effect ----------------
useEffect(()=>{
  const unsubcribe = onAuthStateChanged(auth,(currentUser)=>{
    setUser(currentUser);
    console.log('Current User:',currentUser);
    if(currentUser){
      const userInfo = {email: currentUser?.email};
      axiosPublic.post('/jwt',userInfo)
      .then(res=>{
        if(res.data.token){
          console.log('JWT Token:',res.data.token);
          localStorage.setItem('access-token',res.data.token);
        }
      })

    }else{
      localStorage.removeItem('access-token');
    }
    setLoading(false)
  })
  return ()=>{
    unsubcribe();
  }
},[])

    
    const authInfo ={
        user,
        loading,
        createUser,
        googleSignIn,
         logOut,
         signIn,
    }
  return (
    <AuthContext.Provider value={authInfo}>
{children}
    </AuthContext.Provider>
  )
}

export default AuthProviders