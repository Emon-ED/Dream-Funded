import React, { useState } from 'react'; // 1. useState Import kora

const Profile = () => {
  
  // 2. State Initialize kora
  const [activeTab, setActiveTab] = useState('details'); 

  const mockStudentData = {
    name: 'Anirban Das',
    studentId: 'SCM-2023-456',
    email: 'anirban.d@example.com',
    phone: '+880 17XX XXX XXX',
    degree: 'B.Sc. in Computer Science',
    university: 'Dhaka University',
    gpa: 3.85,
    profilePicture: 'https://via.placeholder.com/150',
  };

  const mockScholarships = [
    { id: 1, name: 'Merit-Based Grant 2022', status: 'Awarded', amount: '50,000 BDT', date: 'Jan 2022' },
    { id: 2, name: 'Need-Based Aid 2023', status: 'Pending Review', amount: '35,000 BDT', date: 'May 2023' },
    { id: 3, name: 'STEM Excellence Scholarship', status: 'Awarded', amount: '60,000 BDT', date: 'Jan 2024' },
  ];
  
  return (
    <div className="container mx-auto p-4 md:p-8">
      {/* --- Profile Header Card (No change) --- */}
      <div className="card bg-transparent shadow-xl mb-8 border border-base-200">
        <div className="card-body p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            
            {/* Profile Image */}
            <div className="avatar">
              <div className="w-32 rounded-full ring ring-primary ring-offset-tarbg-transparent ring-offset-2">
                <img src={mockStudentData.profilePicture} alt="Profile" />
              </div>
            </div>

            {/* Basic Info */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="card-title text-3xl font-bold text-primary">{mockStudentData.name}</h2>
              <p className="text-lg text-base-content/70">Student ID: **{mockStudentData.studentId}**</p>
              
              <div className="mt-2 space-x-2">
                <div className="badge badge-lg badge-success gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 017.618 3.04A11.955 11.955 0 0121 12a11.955 11.955 0 01-3.382 7.016M12 21a9 9 0 100-18 9 9 0 000 18z" /></svg>
                  Verified
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="md:self-start">
              <button className="btn btn-outline btn-sm btn-primary">
                Edit Profile
              </button>
            </div>
            
          </div>
        </div>
      </div>
      {/* --- End Profile Header Card --- */}
      
      {/* --- Tabs for Details and History --- */}
      <div className="tabs rounded-lg border border-white/50 tabs-boxed bg-transparent mb-6">
        <a 
          className={`tab ${activeTab === 'details' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('details')}
        >
          Personal & Academic Details
        </a>
        <a 
          className={`tab ${activeTab === 'history' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('history')}
        >
          Scholarship History
        </a>
      </div>
      
      {/* --- Tab Content (No change) --- */}
      <div className="bg-transparent shadow-xl p-6 rounded-box">
        {activeTab === 'details' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base">
            <h3 className="text-xl font-semibold text-secondary md:col-span-2 mb-2">Contact & Academic Info</h3>
            
            <p><span className="font-bold text-base-content/80">Email:</span> {mockStudentData.email}</p>
            <p><span className="font-bold text-base-content/80">Phone:</span> {mockStudentData.phone}</p>
            
            <p><span className="font-bold text-base-content/80">Degree:</span> {mockStudentData.degree}</p>
            <p><span className="font-bold text-base-content/80">University:</span> {mockStudentData.university}</p>
            
            <p><span className="font-bold text-base-content/80">Current GPA:</span> <span className="font-extrabold text-success">{mockStudentData.gpa}</span></p>
          </div>
        )}
        
        {activeTab === 'history' && (
          <div className="overflow-x-auto">
            <h3 className="text-xl font-semibold text-secondary mb-4">Scholarship Application Status</h3>
            <table className="table w-full table-zebra">
              <thead>
                <tr>
                  <th>Scholarship Name</th>
                  <th>Date Applied/Awarded</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {mockScholarships.map((scholarship) => (
                  <tr key={scholarship.id}>
                    <td className="font-semibold">{scholarship.name}</td>
                    <td>{scholarship.date}</td>
                    <td>{scholarship.amount}</td>
                    <td>
                      <div className={`badge ${
                        scholarship.status === 'Awarded' ? 'badge-success' : 
                        scholarship.status === 'Pending Review' ? 'badge-warning' : 
                        'badge-error'
                      }`}>
                        {scholarship.status}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      {/* --- End Tab Content --- */}
    </div>
  )
}

export default Profile