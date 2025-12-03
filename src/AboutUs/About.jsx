import { motion } from "framer-motion";

const About = () => {
  return (
      <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white px-6 py-20 md:px-16"
    >
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold text-emerald-400 mb-4">
          About Us
        </h2>
        <p className="text-white/80 text-lg leading-relaxed max-w-3xl mx-auto">
           Our mission is to make scholarship opportunities accessible, transparent, and easy to explore for every student around the world.
          We aim to connect students with the best-fit scholarships based on their profile, location, and goals — all in one platform.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {/* Card 1 - Who We Are */}
          <div className="bg-white/5 backdrop-blur-xl p-6 rounded-xl border border-white/10 hover:shadow-[0_0_30px_#22d3ee] transition-all duration-300">
            <h3 className="text-xl font-semibold text-cyan-300 mb-2"> Who We Are</h3>
            <p className="text-sm text-white/80">
              A passionate team of developers and educators working to build a smarter bridge between students and global scholarship providers.
            </p>
          </div>

          {/* Card 2 - What We Do */}
          <div className="bg-white/5 backdrop-blur-xl p-6 rounded-xl border border-white/10 hover:shadow-[0_0_30px_#4ade80] transition-all duration-300">
            <h3 className="text-xl font-semibold text-green-300 mb-2"> What We Do</h3>
            <p className="text-sm text-white/80">
              Collect, filter, and organize thousands of scholarships from trusted sources — allowing you to search by country, degree, deadline, or keywords.
            </p>
          </div>

          {/* Card 3 - Why It Matters */}
          <div className="bg-white/5 backdrop-blur-xl p-6 rounded-xl border border-white/10 hover:shadow-[0_0_30px_#f472b6] transition-all duration-300">
            <h3 className="text-xl font-semibold text-pink-300 mb-2"> Why It Matters</h3>
            <p className="text-sm text-white/80">
              Many talented students miss out on funding simply because they don’t know where to look. We’re changing that, one scholarship at a time.
            </p>
          </div>
        </div>

        <p className="text-sm text-white/50 mt-12">
          From idea to interface — by Emon
        </p>
      </div>
    </motion.section>
  )
}

export default About