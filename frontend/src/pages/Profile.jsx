import React from 'react'
import MyOrderPage from './MyOrderPage'

const Profile = () => {
  const handleLogout = () => {
    // Logic for logout
    console.log("User logged out");
  };

  return (
    <div className='min-h-screen flex flex-col'>
      <div className='flex-grow container mx-auto p-4 md:p-6 py-12'>
        <div className='flex flex-col md:flex-row md:space-x-12 space-y-10 md:space-y-0'>
          
          {/* Left Section: User Sidebar */}
          <div className='w-full md:w-1/3 lg:w-1/4'>
            <div className='border border-gray-100 p-6 md:p-8 bg-white'>
              <h1 className='text-2xl md:text-3xl font-bold mb-2 uppercase tracking-tight text-gray-900'>
                John Doe
              </h1>
              <p className='text-sm text-gray-500 mb-8 lowercase'>john@example.com</p>
              
              <div className='space-y-4'>
                {/* Additional professional profile links could go here */}
                <button 
                  onClick={handleLogout}
                  className='w-full bg-black text-white py-3 px-6 rounded-none text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors cursor-pointer'
                >
                  Logout
                </button>
              </div>
            </div>
          </div>

          {/* Right Section: Order History */}
          <div className='w-full md:w-2/3 lg:w-3/4'>
            <MyOrderPage />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Profile