import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Cart from "../Home/Carts/Cart";

const Scholarship = () => {
  const axiosPublic = useAxiosPublic();
  const [page, setPage] = useState(1);
  const [degreeLevel, setDegreeLevel] = useState("");
  const [country, setCountry] = useState("");
  const [type, setType] = useState("");
  const [keyword, setKeyword] = useState("");

  const fetchScholarships = async () => {
    const { data } = await axiosPublic.get("/allScholarships", {
      params: {
        page,
        limit: 6,
        degreeLevel,
        country,
        type,
        keyword,
      },
    });
    return data;
  };

  const {
    data,
    isLoading,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["scholarships", page, degreeLevel, country, type, keyword],
    queryFn: fetchScholarships,
    keepPreviousData: true,
  });

  const scholarships = data?.data || [];
  const totalPages = data?.totalPages || 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen mb-5"
    >
      {/* Banner */}
      <div className="w-full h-64 rounded-none overflow-hidden mb-8 relative">
        <img
          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1470&q=80"
          alt="Scholarship Banner"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h2 className="text-white font-extralight text-2xl md:text-4xl text-center px-4">
            Unlock your future <br /> Find the right scholarship that empowers your dream
          </h2>
        </div>
      </div>

      <div className="px-4 md:px-10 lg:px-20">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-white drop-shadow-lg">
          Available Scholarships
        </h2>

        {/* Filter Controls */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          <select
            className="border border-teal-400 
             bg-transparent text-white 
             hover:bg-gray-900 focus:bg-gray-900 
             placeholder:text-white font-semibold 
             rounded-full p-2 transition-colors duration-300"
            value={degreeLevel}
            onChange={(e) => {
              setDegreeLevel(e.target.value);
              setPage(1);
            }}
          >
            <option value="">All Degrees</option>
            <option value="Bachelor">Bachelor</option>
            <option value="Masters">Masters</option>
            <option value="PhD">PhD</option>
          </select>

          <select
            className="border border-teal-400 
             bg-transparent text-white 
             hover:bg-gray-900 focus:bg-gray-900 
             placeholder:text-white font-semibold 
             rounded-full p-2 transition-colors duration-300"
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
              setPage(1);
            }}
          >
            <option value="">All Countries</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
            <option value="Germany">Germany</option>
          </select>

          <select
            className="border border-teal-400 
             bg-transparent text-white 
             hover:bg-gray-900 focus:bg-gray-900 
             placeholder:text-white font-semibold 
             rounded-full p-2 transition-colors duration-300"
            value={type}
            onChange={(e) => {
              setType(e.target.value);
              setPage(1);
            }}
          >
            <option value="">All Types</option>
            <option value="Fully Funded">Fully Funded</option>
            <option value="Partially Funded">Partially Funded</option>
          </select>

          <input
            type="text"
            className="border border-teal-400  bg-transparent placeholder:text-white font-semibold rounded-full p-2"
            placeholder="Search by keyword"
            value={keyword}
            onChange={(e) => {
              setKeyword(e.target.value);
              setPage(1);
            }}
          />
        </div>

        {/* Scholarships Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading || isFetching ? (
            Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-[440px] bg-gray-800/40 animate-pulse rounded-xl border border-gray-600"
              ></div>
            ))
          ) : scholarships.length === 0 ? (
            <p className="text-center col-span-full text-white">No scholarships found.</p>
          ) : (
            <AnimatePresence>
              {scholarships.map((item) => (
                <motion.div
                  key={item._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Cart item={item} />
                </motion.div>
              ))}
            </AnimatePresence>
          )}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`px-4 py-1 rounded-full border border-teal-400 transition-all duration-200 ${
                p === page ? "bg-teal-400 text-black" : "hover:bg-teal-700"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Scholarship;
