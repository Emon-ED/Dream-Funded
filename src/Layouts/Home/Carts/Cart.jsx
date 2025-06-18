

const Cart = ({item}) => {
    const {name,provider,eligibility,deadline,amount,image,status} = item;
  return (
<div className="card w-80 my-10 mx-auto h-[440px] bg-black/30 backdrop-blur-md shadow-2xl rounded-xl border border-white/20 hover:shadow-3xl hover:scale-[1.02] transform transition-all duration-300">
  <figure className="h-40 overflow-hidden ">
    <img
      src={image}
      alt="Scholarship"
      className="object-cover w-full h-full"
    />
  </figure>
  <div className="card-body text-white space-y-2">
    <h2 className="card-title text-lg font-semibold tracking-wide">{name}</h2>
    <p className="text-sm text-white/70">Provided by <span className="text-emerald-400 font-medium">{provider}</span></p>

    <ul className="space-y-1 text-sm text-white/80">
      <li><span className="font-medium text-white">Eligibility:</span> {eligibility}</li>
      <li><span className="font-medium text-white">Deadline:</span> {deadline}</li>
      <li><span className="font-medium text-white">Amount:</span> {amount} TK</li>
    </ul>

    <div className="card-actions justify-end pt-4">
      {status === 'Applied' ? (
        <button disabled className="btn btn-xs rounded-full px-4 py-2 bg-yellow-100 text-orange-500 cursor-not-allowed">
          {status}
        </button>
      ) : status === 'Expired' ? (
        <button disabled className="btn btn-xs rounded-full px-4 py-2 bg-red-100 text-red-500 cursor-not-allowed">
          {status}
        </button>
      ) : (
        <button className="btn btn-xs rounded-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300">
          {status}
        </button>
      )}
    </div>
  </div>
</div>

  )
}

export default Cart