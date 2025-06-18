

const ReviewsCart = ({review}) => {
    const{image,name,message,year,course}=review;
  return (
    <div className="text-center my-10 p-6 sm:p-8 md:p-10 lg:p-12 rounded-3xl bg-white/10 backdrop-blur-md shadow-2xl shadow-black/50 border border-white/20 transform transition-all hover:scale-[1.01] hover:shadow-3xl duration-300  w-3/4 mx-auto">
        <div className="flex justify-center items-center">
        <img  className="shadow-md shadow-black w-[96px] h-[96px] rounded-[50%]" src={image} alt="" />
        </div>
        <h1 className="font-semibold text-2xl">Name: {name}</h1>
        <h1 className="font-semibold ">Course: {course}</h1>
        <h1 className="font-semibold ">Year: {year}</h1>
        <p className="text-lg">
        {message}
        </p>
    </div>
  )
}

export default ReviewsCart