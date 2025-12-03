import { motion } from "framer-motion";

const ContactMe = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 flex items-center justify-center px-6"
    >
      <div className="bg-black/70 mt-10 backdrop-blur-md rounded-3xl shadow-2xl max-w-xl w-full p-10 border border-cyan-400 hover:shadow-[0_0_40px_cyan] transition-shadow duration-500">
        <h2 className="text-4xl font-extrabold text-cyan-400 mb-6 tracking-widest text-center">
          Get in Touch
        </h2>

        {/* Contact Info */}
       

        <form className="space-y-6">
          <motion.input
            whileFocus={{ scale: 1.05, borderColor: "#22d3ee" }}
            type="text"
            placeholder="Your Name"
            className="w-full rounded-lg px-4 py-3 border border-gray-600 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            required
          />
          <motion.input
            whileFocus={{ scale: 1.05, borderColor: "#22d3ee" }}
            type="email"
            placeholder="Your Email"
            className="w-full rounded-lg px-4 py-3 border border-gray-600 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            required
          />
          <motion.textarea
            whileFocus={{ scale: 1.05, borderColor: "#22d3ee" }}
            placeholder="Your Message"
            rows="5"
            className="w-full rounded-lg px-4 py-3 border border-gray-600 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition resize-none"
            required
          ></motion.textarea>

          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0 0 15px #22d3ee" }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 rounded-lg tracking-wide transition-all duration-300"
          >
            Send Message
          </motion.button>
        </form>
         <div className="text-cyan-300 mt-8 text-center space-y-2">
          <p> Phone: <a href="tel:+1234567890" className="underline hover:text-white">+1 234 567 890</a></p>
          <p>Email: <a href="mailto:emon@example.com" className="underline hover:text-white">emon@example.com</a></p>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactMe;
