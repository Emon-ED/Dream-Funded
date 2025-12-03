import { motion } from 'framer-motion';
import bgImg from '../../assets/bg.jpg';
import Titel from '../../SharedCompo/Titels/Titel';
import ReviewSlider from './Reviews/ReviewSlider';
import Scholar from './Scholar';
import about from '../../assets/about.png';
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

const Home = () => {
  return (
    <>
      {/* Banner Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="hero min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${about})` }}
      >
        <motion.div
          className="hero-content bg-teal-800/40 shadow-md shadow-white rounded-3xl lg:p-5 md:p-5 backdrop-blur-lg border border-black/30 md:-mt-48 lg:-mt-48 items-center text-center"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="text-center">
            <h1 className="mb-5 text-5xl font-bold animate-pulse text-white">
              Search Your Dream Scholarships
            </h1>
            <p className="mb-5 text-teal-white">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <div className="flex justify-center items-center gap-5">
              <input
                type="text"
                className="shadow-md shadow-black placeholder placeholder:text-black w-full bg-white bg-opacity-60 text-black border-none rounded-3xl p-2"
                placeholder="Search"
              />
              <Link to={'/scholarship'}>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="btn hover:bg-blue-600 transform transition-all py-4 px-5 border-none rounded-3xl bg-opacity-80 bg-blue-500 text-cyan-100"
                >
                  Search
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Featured Scholarships */}
      <Titel
        title={'Featured Scholarships'}
        subTitle={
          'Explore top scholarship opportunities handpicked for you. Apply now and take a step closer to your academic goals!'
        }
      />
      <Scholar />
      <Link to={'/scholarship'} className="justify-center flex">
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="flex justify-center items-center gap-2 bg-green-400 text-gray-900 font-semibold my-2 py-3 px-8 rounded-full shadow-lg shadow-black transition-all"
        >
          Show More <MdKeyboardDoubleArrowRight />
        </motion.button>
      </Link>

      {/* About the Platform */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="bg-no-repeat w-full mx-auto px-4 h-1/2 bg-fixed"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="bg-black/10 backdrop-blur-md shadow-xl border border-white/20 m-5 my-10 p-6 sm:p-10 rounded-3xl max-w-5xl mx-auto hover:shadow-2xl hover:scale-[1.01] transition-all duration-300">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mt-6 mb-6 font-serif text-white drop-shadow-md tracking-wide">
            About the Platform
          </h1>
          <p className="text-center text-base sm:text-lg md:text-xl font-light font-serif text-white/80 leading-relaxed px-2 sm:px-6">
            Our Scholarship Management Website is a smart and user-friendly platform designed to simplify the entire scholarship process.
            From applying to reviewing and awarding, everything is handled in one place.
            <br /><br />
            Students can easily explore available scholarships, apply online, and track their application status.
            Administrators can manage scholarship programs, review applications, and communicate with applicants — all through a simple dashboard.
            <br /><br />
            Whether you're a student looking for opportunities or an organization offering support, this platform makes scholarship management smooth, transparent, and efficient.
          </p>
        </div>
      </motion.section>

      {/* Reviews */}
      <Titel title={'Testimonials'} subTitle={'Hear from students who turned their dreams into reality with our scholarship support!'} />
      <ReviewSlider />

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="my-6"
      >
        <div className="containerl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-4">Stop Waiting. Start Winning.</h2>
          <p className="text-lg mb-6">
            This isn’t just another scholarship — it’s your chance to change your life. If you’ve ever held back your dreams because of financial pressure, this is your moment. Take that first step towards your future.
          </p>
           <Link to={'/scholarship'}><motion.button
            whileHover={{ scale: 1.1 }}
            className="inline-block bg-yellow-400 text-gray-900 font-semibold py-3 px-8 rounded-full shadow-lg shadow-black"
          >
            Apply Now
          </motion.button>
          </Link>
          
        </div>
      </motion.section>
    </>
  );
};

export default Home;
