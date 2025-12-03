import { useNavigate, useParams } from "react-router-dom"
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";


const ApplyNow = () => {
    const { id } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const axiousPublic = useAxiosPublic();
  const axiousSecure = useAxiosSecure();
const {user} = useAuth();
const navigate = useNavigate();

   const { data: scholarship, isLoading } = useQuery({
    queryKey: ['scholarship', id],
    queryFn: async () => {
      const res = await axiousPublic.get(`/scholarships/${id}`);
      return res.data;
    }
  });
console.log(scholarship)
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  };


  const onSubmit =  (data) => {
    
      const apllication = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        motivation: data.motivation,
        cvLink: data.cvLink, 
        scholarshipId: scholarship._id,
        scholarshipName: scholarship.name,
      };
console.log(apllication)
 if(user && user.email){
     axiousSecure.post('/applications', apllication)
   .then(res=>{
    console.log(res.data.insertedId)
    if(res.data.insertedId){
       Swal.fire({
            title: `Applied Successfull in ${scholarship.name}!`,
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
          navigate('/scholarship');
      reset();
    }
   })
 }else{
      Swal.fire({
            title: `Please LogIn!`,
            text: "You need to login before applying.",
            icon: 'warning',
             showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Want to Login?",
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
          .then((res)=>{
            if(res.isConfirmed){
              navigate('/signIn',{state:{form:location}})
            }
          })
 }
   
   
  };

  return (
    <div className="max-w-2xl mx-auto pt-20 mb-3 p-8 bg-teal-300/20 backdrop-blur-md shadow-2xl border border-white/20 rounded-3xl text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Apply for <span className="text-green-400">{scholarship.name}</span>
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label className="label">Full Name</label>
          <input
            {...register("name", { required: true })}
            className="input placeholder:text-black input-bordered w-full bg-white/10 backdrop-blur-lg text-white "
            placeholder="Your full name"
          />
        </div>

        <div>
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input placeholder:text-black input-bordered w-full bg-white/10 backdrop-blur-lg text-white "
            placeholder="example@email.com"
          />
        </div>

        <div>
          <label className="label">Phone Number</label>
          <input
            type="tel"
            {...register("phone", { required: true })}
            className="input placeholder:text-black input-bordered w-full bg-white/10 backdrop-blur-lg text-white "
            placeholder="+8801XXXXXXXXX"
          />
        </div>

        <div>
          <label className="label">Motivation Statement</label>
          <textarea
            {...register("motivation", { required: true })}
            rows={4}
            className="textarea textarea-bordered w-full bg-white/10 backdrop-blur-lg text-white placeholder:text-black"
            placeholder="Why are you applying?"
          ></textarea>
        </div>

        <div>
          <label className="label">CV Link (PDF)</label>
          <input
            type="url"
            {...register("cvLink", { required: true })}
            className="input placeholder:text-black input-bordered w-full bg-white/10 backdrop-blur-lg text-white "
            placeholder="Paste your Google Drive / Dropbox link"
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary w-full uppercase tracking-widest text-lg"
          disabled={isLoading}
        >
            Submit
        </button>
      </form>
    </div>
  );
}

export default ApplyNow