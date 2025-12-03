import { Link, useParams } from "react-router-dom"
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaAngleRight } from "react-icons/fa";


const ViewDetails = () => {
    const {id} = useParams();
     const axiosSecure = useAxiosSecure();

  const { data: scholarship, isLoading } = useQuery({
    queryKey: ['scholarship', id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/scholarships/${id}`);
      return res.data;
    }
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  const {
    name,
    provider,
    degreeLevel,
    country,
    type,
    eligibility,
    deadline,
    amount,
    currency,
    status,
    image,
    topScholarship,
  } = scholarship;
  return (
     <div className=" mb-3 min-h-screen">
      <div className="max-w-3xl mx-auto p-8 bg-black/30 backdrop-blur-md rounded-2xl shadow-2xl text-white">
        <img
          src={image}
          alt={name}
          className="w-full mt-10 h-60 object-cover rounded-xl mb-6 border border-white/10 shadow"
        />
        <h1 className="text-3xl font-bold mb-2">{name}</h1>
        <p className="text-white/70 mb-4">Provided by <span className="text-emerald-400 font-medium">{provider}</span></p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-white/90">
          <p><span className="font-semibold text-white">Degree Level:</span> {degreeLevel}</p>
          <p><span className="font-semibold text-white">Country:</span> {country}</p>
          <p><span className="font-semibold text-white">Type:</span> {type}</p>
          <p><span className="font-semibold text-white">Eligibility:</span> {eligibility}</p>
          <p><span className="font-semibold text-white">Deadline:</span> {new Date(deadline).toLocaleDateString()}</p>
          <p><span className="font-semibold text-white">Amount:</span> {amount} {currency}</p>
          <p><span className="font-semibold text-white">Top Scholarship:</span> {topScholarship ? 'Yes' : 'No'}</p>
          <p><span className="font-semibold text-white">Status:</span> {status}</p>
        </div>

        <div className="mt-8 flex justify-end">
          {status === 'Applied' ? (
            <button disabled className="btn px-6 py-2 bg-yellow-100 text-orange-600 rounded-full cursor-not-allowed">
              Already Applied
            </button>
          ) : (
            <Link to={`/scholarship/apply/${id}`}> <button className="btn px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition">
              Apply Now <FaAngleRight></FaAngleRight> 
            </button></Link>
           
          )}
        </div>
      </div>
    </div>
  )
}

export default ViewDetails