

const Titel = ({title,subTitle}) => {
  return (
<div className=" my-10 p-6 sm:p-8 md:p-10 lg:p-12 rounded-3xl bg-white/10 backdrop-blur-md shadow-2xl shadow-black/50 border border-white/20 transform transition-all hover:scale-[1.01] hover:shadow-3xl duration-300 max-w-4xl w-full mx-auto">
  <h1 className="uppercase font-bold text-3xl sm:text-4xl md:text-5xl text-center text-white tracking-wide drop-shadow-lg">
    {title}
  </h1>
  <p className="text-center text-base sm:text-lg md:text-xl font-light text-white/80 mt-4 px-2 sm:px-4">
    {subTitle}
  </p>
</div>

  )
}

export default Titel