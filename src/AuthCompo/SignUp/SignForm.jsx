import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";



const SignForm = ({ onSignupSuccess,formData,handleGoogleSignUp }) => {
     const [showPassword, setShowPassword] = useState(false);

    
      const handleSubmit = (e) => {
    e.preventDefault();
    const form =e.target;
    const email = form.email?.value;
    const password = form.password?.value;

   
        formData({ email: email, password: password});
    onSignupSuccess();
  };
  return (
    <div className=" max-w-md bg-black/5 border backdrop-blur-md shadow-md shadow-black/50 border-white/20 p-6 rounded-xl ">
     <form
      onSubmit={handleSubmit}
      className="space-y-4 w-full  "
    >
      <h2 className="text-2xl font-bold text-center">Sign Up</h2>

      <input
        name="name"
        placeholder="Full Name"
        className="input input-bordered placeholder:text-white bg-transparent border-2 border-teal-600 rounded-3xl w-full"
        type="text"
        required
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        className="input input-bordered w-full placeholder:text-white bg-transparent border-2 border-teal-600 rounded-3xl"
        required
      />

        <div className="relative">
        <input
          name="password"
          type={showPassword ? "text" : "password"} 
          placeholder="Password"
          className="input input-bordered w-full placeholder:text-white bg-transparent border-2 border-teal-600 rounded-3xl pr-10"

          required
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-3 text-sm text-gray-600 hover:text-gray-800"
        >
          {showPassword ? <FaRegEye className="text-white text-xl"></FaRegEye >  : <FaRegEyeSlash className="text-white text-xl"></FaRegEyeSlash> }
        </button>
      </div>
       
      <button type="submit" className="btn w-full bg-transparent border-2 hover:bg-teal-500 border-teal-600 hover:scale-105 bg-teal-500 text-white transform  transition-all duration-300 shadow-black rounded-3xl">
        Sign Up
      </button>
      
    </form>
    <div className=" text-teal-400 mt-2">
        <button onClick={handleGoogleSignUp} className="px-2 py-2 flex justify-center gap-3 mx-auto items-center w-1/2 bg-transparent border-2 border-teal-600 hover:scale-105 bg-teal-500 text-white transform transition-all duration-300 shadow-black rounded-3xl">
        <FcGoogle className="text-xl "></FcGoogle>  Google
      </button>
       </div>
        <div className="text-center text-white mt-4">
                Have an account?{" "}
               <Link to="/signIn" className="text-teal-400 hover:underline">Sign In</Link>
                
              </div>
</div>
  )
}

export default SignForm