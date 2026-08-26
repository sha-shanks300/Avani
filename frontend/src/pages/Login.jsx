import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from "../assets/login.webp";
import {loginUser} from "../redux/slices/authSlice"

import { useDispatch, useSelector } from 'react-redux';
import { mergeCart } from '../redux/slices/cartSlice';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const {user, guestId, loading} = useSelector((state) => state.auth);
    const {cart} = useSelector((state) => state.cart);

    //Get redirect parameter and check if it's checkout or something
    const redirect = new URLSearchParams(location.search).get("redirect") || "/";
    const isCheckoutRedirect = redirect.includes("checkout");

    useEffect(() => {
        if(user){
            if(cart?.products?.length > 0 && guestId){
                dispatch(mergeCart({guestId, user})).then(()=>{
                    navigate(isCheckoutRedirect ? "/checkout" : "/");
                });
            }else{
                navigate(isCheckoutRedirect ? "/checkout" : "/");
            }
        }
    }, [user, guestId, cart, navigate, isCheckoutRedirect, dispatch])

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser({email,password}));
    }

    return (
        <div className='flex min-h-screen'>
            {/* Left Side: Form */}
            <div className='w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12 bg-white'>
                <form onSubmit={handleSubmit} className='w-full max-w-md'>
                    <div className='flex justify-center mb-6'>
                        {/* Refinement: Using uppercase and tracking for the logo text */}
                        <h2 className='text-2xl font-bold uppercase tracking-widest'>Rabbit</h2>
                    </div>
                    
                    <h2 className='text-2xl font-bold text-center mb-2 uppercase tracking-tight'>Hey there! 👋</h2>
                    <p className='text-center text-gray-500 mb-8'>
                        Enter your email and password to login
                    </p>

                    <div className='mb-4'>
                        <label className='block text-xs font-bold uppercase tracking-wider mb-2 text-gray-800'>Email</label>
                        {/* Refinement: Better padding and focus state */}
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            className='w-full p-3 border border-gray-300 rounded-none focus:outline-none focus:border-black transition-colors' 
                            placeholder='Enter your email address'
                            required
                        />
                    </div>

                    <div className='mb-6'>
                        <label className='block text-xs font-bold uppercase tracking-wider mb-2 text-gray-800'>Password</label>
                        <input 
                            type='password' 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            className='w-full p-3 border border-gray-300 rounded-none focus:outline-none focus:border-black transition-colors' 
                            placeholder='Enter your password'
                            required
                        />
                    </div>

                    {/* Refinement: Squared button with letter spacing */}
                    <button 
                        type="submit" 
                        className='w-full bg-black text-white py-3 rounded-none font-bold uppercase tracking-widest hover:bg-gray-800 transition-all duration-300'
                    >
                        {loading ?  "Loading..." : "Sign In"}
                    </button>

                    <p className='mt-8 text-center text-sm text-gray-600'>
                        Don't have an account?{" "}
                        <Link to={`/register?redirect=${encodeURIComponent(redirect)}`} className='text-black font-bold underline underline-offset-4 hover:text-gray-600'>
                            Register
                        </Link>
                    </p>
                </form>
            </div>

            {/* Right Side: Image */}
            <div className='hidden md:block w-1/2'>
                <div className='h-full'>
                    <img 
                        src={login} 
                        alt="Login to Account" 
                        className='h-full w-full object-cover'
                    />
                </div>
            </div>
        </div>
    )
}

export default Login