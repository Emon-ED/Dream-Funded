import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic"


const useScholarships = () => {
  const axiosPublic = useAxiosPublic();
  const {data: scholarships =[], isLoading,refetch} = useQuery({
    queryKey:['scholarships'],
    queryFn:async()=>{
        const res = await axiosPublic.get('/scholarships');
        return res.data;
    }
  });
  
  const topScholarships = scholarships.filter(item => item.topScholarship);
  return{topScholarships,isLoading,refetch}
  
}

export default useScholarships;