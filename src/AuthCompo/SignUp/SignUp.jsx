import { useState } from "react";
import SignForm from "./SignForm";
import RoleModal from "./RoleModal";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const SignUp = () => {
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const{createUser,googleSignIn} =useAuth();
  const [ showModal, setModal]= useState(false);
  const [form,setForm]=useState();
  const handleSignupSuccess = ()=>{
    setModal(true)

  };

  // Submit and send data into data base with authentication -------------------
  const submitData = (extraInfo)=>{
      const user = {...form,...extraInfo};
      if(form?.password){
createUser(form.email,form.password)
    .then(()=>{
     saveToDb(user)
  })
  .catch(err => {
        if (err.code === 'auth/email-already-in-use') {
          Swal.fire({
            icon: "error",
            title: "Email Already Exists",
            text: "Go and Log in"
          });
        } else if (err.code === 'auth/weak-password') {
          Swal.fire({
            icon: "error",
            title: "Weak Password",
            text: "Password must be at least 6 characters."
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: err.message
          });
        }
      });
    }else {
    // Google Sign-In (no password)
    saveToDb(user);
  }
    
  }
  // handle Google signup --------------------------
  const handleGoogleSignUp = async()=>{
    try{
      const res = await googleSignIn();
      const userInfo= {
        email:res.user?.email
      };
  if(!userInfo.email) return;
   const response = await axiosSecure.get(`/users/email/${userInfo.email}`);
       if(response.data.exists){
        navigate('/');
       }else{
        
      setForm(userInfo);
      handleSignupSuccess();

       }
    } catch(err){
      console.error("Google Sign-In Error:", err);
    }
  }
  // Save to Database -------------------------------
  const saveToDb = (userData)=>{
     axiosSecure.post('/users',userData)
      .then((res) => {
        if(res.data.insertedId) {
        
Swal.fire({
  title: 'Success!',
  text: 'Your profile has been saved successfully.',
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
  buttonsStyling: false,
  allowOutsideClick: false,
  allowEscapeKey: false
})
navigate('/')
 .catch((err) =>{
        if(err.code ==='auth/email-already-in-use'){
           Swal.fire({
            icon: "error",
            title: "Email Already Exists",
            text: "Go and Log in"
          });
        }
        
        });

          
        }
      })
  }
  return (
     <div className="min-h-screen flex items-center justify-center p-4">
      <SignForm onSignupSuccess={handleSignupSuccess} formData={setForm} handleGoogleSignUp={handleGoogleSignUp} />

      {showModal && <RoleModal onClose={() => setModal(false)} submitData={submitData}  />}
        
    </div>
  )
}

export default SignUp