import Aos from 'aos';
import  { useEffect, useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai';
import 'aos/dist/aos.css';
const RoleModal = ({ onClose, modalData,submitData }) => {

 const [role, setRole] = useState("");
 const [donor, setDonor] = useState("");
 const [subject, setSubject] = useState("");
 const [donationType, setDonationType] = useState("");
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const form =e.target;
if (role === "student") {
      const studentUser = {
        name: form.name.value,
        role: "student",
        motivation: form.motivation.value,
        institution: form.institution.value,
        studyLevel: form.studyLevel.value,
        subject: form.subject.value,
      };
       submitData(studentUser);
      onClose();
    }
    else if (role === "donor") {
const donorUser = {
        role: role,
        donorType: donor,
        name: form.name.value,
        interestArea: subject,
        donationType: donationType,

    }
     submitData(donorUser);
      onClose();
}
}
 const handleCencel = () => {
   setRole("");
   setDonor("");
   setSubject("");
   setDonationType("");
   onClose();
 }
 useEffect(() => {
  Aos.init({ duration: 600 });
  setTimeout(() => {
    Aos.refresh();
  }, 100); // slight delay for modal render
}, []);

  return (
     <div  className="fixed px-10 inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div data-aos="zoom-in"  className="bg-black/30 border border-white/50 shadow-lg shadow-black backdrop-blur-lg p-6 rounded-xl w-full max-w-md">
       <div className='flex items-center justify-between mb-4'>
         <h3 className="text-xl font-bold mb-4">Complete Your Profile</h3>
         <button className='relative -top-12 left-14 hover:scale-110 duration-300 transform transition-all' onClick={handleCencel}><AiFillCloseCircle className='text-3xl text-teal-500 hover:text-teal-400  shadow-md shadow-black rounded-full'></AiFillCloseCircle></button>
       </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <select
            className="select select-bordered shadow-md shadow-black placeholder:text-white bg-teal-900/90 backdrop-blur-md border-2 border-teal-600 rounded-3xl w-full"
            onChange={(e) => setRole(e.target.value)}
            required
            value={role}
          >
            <option value="">Select Role</option>
            <option value="student">Student</option>
            <option value="donor">Donor</option>
          </select>

          {role === "student" && (
            <div className='space-y-4'>
               <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="input input-bordered shadow-md shadow-black placeholder:text-white bg-transparent border-2 border-teal-600 rounded-3xl w-full"
              required
            />
               <input
        name="institution"
        placeholder="Institution Name"
        className="input input-bordered shadow-md shadow-black placeholder:text-white bg-transparent border-2 border-teal-600 rounded-3xl w-full"
        type="text"
        required
      />
               <input
        name="studyLevel"
        placeholder="Current Study Level (HSC / Honours / Masters)"
        className="input input-bordered shadow-md shadow-black placeholder:text-white bg-transparent border-2 border-teal-600 rounded-3xl w-full"
        type="text"
        required
      />
               <input
        name="subject"
        placeholder="Subjects of Interest"
        className="input input-bordered shadow-md shadow-black placeholder:text-white bg-transparent border-2 border-teal-600 rounded-3xl w-full"
        type="text"
        required
      />
              <textarea
              name='motivation'
              className="duration-1000 textarea textarea-bordered shadow-md shadow-black placeholder:text-white bg-transparent border-2 border-teal-600 rounded-3xl w-full"
              placeholder="Why do you need scholarship?"
            />
            </div>
            
          )}

{role === "donor" &&(

  <div>
       <div>
            <label className="block font-medium mb-1">Are you an Individual or Organization?</label>
            <select
              name="donorType"
              className="select select-bordered shadow-md shadow-black placeholder:text-white bg-teal-900/90 backdrop-blur-md border-2 border-teal-600 rounded-3xl w-full"
              onChange={(e) => setDonor(e.target.value)}
              value={donor}
              required
            >
              <option value="">Select Type</option>
              <option value="individual">Individual</option>
              <option value="organization">Organization</option>
            </select>
          </div>

          {/* Name Field */}
          <div>
            <label className="block font-medium mb-1">
              {donor.donorType === "organization" ? "Organization Name" : "Full Name"}
            </label>
            <input
              type="text"
              name="name"
              className="input input-bordered shadow-md shadow-black placeholder:text-white bg-transparent border-2 border-teal-600 rounded-3xl w-full"
              required
            />
          </div>

          {/* Area of Interest */}
          <div>
            <label className="block font-medium mb-1">Area of Interest</label>
            <select
              name="interestArea"
              className="select select-bordered shadow-md shadow-black placeholder:text-white bg-teal-900/90 backdrop-blur-md border-2 border-teal-600 rounded-3xl w-full"
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
              required
            >
              <option value="">Select Interest Area</option>
              <option value="education">Education</option>
              <option value="science">Science & Technology</option>
              <option value="rural">Rural Students</option>
              <option value="women">Women in STEM</option>
              <option value="general">General Donation</option>
            </select>
          </div>

          {/* Donation Type */}
          <div>
            <label className="block font-medium mb-1">Donation Type</label>
            <select
              name="donationType"
              className="select select-bordered shadow-md shadow-black placeholder:text-white bg-teal-900/90 backdrop-blur-md border-2 border-teal-600 rounded-3xl w-full"
              onChange={(e)=>setDonationType(e.target.value)}
              value={donationType}
              required
            >
              <option value="">Select</option>
              <option value="one-time">One-time</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Annual</option>
            </select>
          </div>

  </div>
)}
          <button type="submit" className="btn btn-success rounded-3xl hover:scale-105 duration-300 transform transition-all w-full">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default RoleModal