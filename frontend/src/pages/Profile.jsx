import React, { useEffect } from 'react'
import MyOrderPage from './MyOrderPage'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../redux/slices/cartSlice';
import { logout } from '../redux/slices/authSlice';

const Profile = () => {
  

  const {user} = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if(!user){
      navigate("/login");
    }
  },[user, navigate])

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearCart());
    navigate("/login");
  };

  return (
    <div className='min-h-screen flex flex-col'>
      <div className='flex-grow container mx-auto p-4 md:p-6 py-12'>
        <div className='flex flex-col md:flex-row md:space-x-12 space-y-10 md:space-y-0'>
          
          {/* Left Section: User Sidebar */}
          <div className='w-full md:w-1/3 lg:w-1/4'>
            <div className='border border-gray-100 p-6 md:p-8 bg-white'>
              <h1 className='text-2xl md:text-3xl font-bold mb-2 uppercase tracking-tight text-gray-900'>
                {user?.name}
              </h1>
              <p className='text-sm text-gray-500 mb-8 lowercase'>{user?.email}</p>
              
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