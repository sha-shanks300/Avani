import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import register from "../assets/register.webp";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("User Register:", { name, email, password });
    }

    return (
        <div className='flex min-h-screen'>
            {/* Left Side: Form */}
            <div className='w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12 bg-white'>
                <form onSubmit={handleSubmit} className='w-full max-w-md'>
                    <div className='flex justify-center mb-6'>
                        <h2 className='text-2xl font-bold uppercase tracking-widest'>Rabbit</h2>
                    </div>
                    
                    <h2 className='text-2xl font-bold text-center mb-2 uppercase tracking-tight'>Create an Account</h2>
                    <p className='text-center text-gray-500 mb-8'>
                        Enter your details to join the Rabbit community
                    </p>

                    <div className='mb-4'>
                        <label className='block text-xs font-bold uppercase tracking-wider mb-2 text-gray-800'>Name</label>
                        <input 
                            type="text" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            className='w-full p-3 border border-gray-300 rounded-none focus:outline-none focus:border-black transition-colors' 
                            placeholder='Enter your full name'
                            required
                        />
                    </div>

                    <div className='mb-4'>
                        <label className='block text-xs font-bold uppercase tracking-wider mb-2 text-gray-800'>Email</label>
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

                    <button 
                        type="submit" 
                        className='w-full bg-black text-white py-3 rounded-none font-bold uppercase tracking-widest hover:bg-gray-800 transition-all duration-300'
                    >
                        Sign Up
                    </button>

                    <p className='mt-8 text-center text-sm text-gray-600'>
                        Already have an account?{" "}
                        <Link to="/login" className='text-black font-bold underline underline-offset-4 hover:text-gray-600'>
                            Login
                        </Link>
                    </p>
                </form>
            </div>

            {/* Right Side: Image */}
            <div className='hidden md:block w-1/2'>
                <div className='h-full'>
                    <img 
                        src={register} 
                        alt="Join Rabbit" 
                        className='h-full w-full object-cover'
                    />
                </div>
            </div>
        </div>
    )
}

export default Register;