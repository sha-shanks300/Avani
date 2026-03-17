import React, { useState } from 'react'

const UserManagement = () => {
    // 1. Move the users array into useState so React tracks changes
    const [users, setUsers] = useState([
        {
            _id: "1",
            name: "John Doe",
            email: "john@example.com",
            role: "admin",
        },
        {
            _id: "2",
            name: "Jane Smith",
            email: "jane@example.com",
            role: "customer",
        },
    ]);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "customer",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Add new user logic for local state
        const newUser = {
            _id: Date.now().toString(), // Temporary ID
            name: formData.name,
            email: formData.email,
            role: formData.role
        };

        setUsers([...users, newUser]); // Update table with new user
        
        setFormData({
            name: "",
            email: "",
            password: "",
            role: "customer",
        })
    }

    // 2. Updated function to apply role changes to state
    const handleRoleChange = (userId, newRole) => {
        setUsers((prevUsers) =>
            prevUsers.map((user) =>
                user._id === userId ? { ...user, role: newRole } : user
            )
        );
    };

    const handleDeleteUser = (userId) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            setUsers(users.filter((user) => user._id !== userId));
        }
    };

    return (
        <div className='max-w-7xl mx-auto p-6 tracking-tighter'>
            <h2 className='text-2xl font-bold mb-4'>User Management</h2>
            
            {/* Form Section (Same as your previous code) */}
            <div className='p-6 rounded-lg mb-6 bg-white border border-gray-200 shadow-sm'>
                <h3 className='text-lg font-bold mb-4'>Add New User</h3>
                <form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <label className='block text-gray-700'>Name</label>
                        <input type='text' name="name" value={formData.name} onChange={handleChange} className='w-full p-2 border rounded border-gray-400' required />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700'>Email</label>
                        <input type='email' name="email" value={formData.email} onChange={handleChange} className='w-full p-2 border rounded border-gray-400' required />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700'>Password</label>
                        <input type='password' name="password" value={formData.password} onChange={handleChange} className='w-full p-2 border rounded border-gray-400' required />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700'>Role</label>
                        <select name='role' value={formData.role} onChange={handleChange} className='w-full p-2 border rounded border-gray-400'>
                            <option value='customer'>Customer</option>
                            <option value='admin'>Admin</option>
                        </select>
                    </div>
                    <button type="submit" className='bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600'>Add User</button>
                </form>
            </div>

            {/* User List Table */}
            <div className="overflow-x-auto bg-white shadow-md rounded-lg border border-gray-200">
                <table className="min-w-full text-left">
                    <thead className="bg-gray-100 text-gray-700 uppercase text-xs font-bold">
                        <tr>
                            <th className="py-3 px-4">Name</th>
                            <th className="py-3 px-4">Email</th>
                            <th className="py-3 px-4">Role</th>
                            <th className="py-3 px-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm text-gray-700">
                        {users.map((user) => (
                            <tr key={user._id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                <td className="py-4 px-4">{user.name}</td>
                                <td className="py-4 px-4">{user.email}</td>
                                <td className="py-4 px-4">
                                    <select 
                                        value={user.role} 
                                        onChange={(e) => handleRoleChange(user._id, e.target.value)}
                                        className="p-1 border rounded border-gray-300 bg-transparent focus:outline-none"
                                    >
                                        <option value="customer">Customer</option>
                                        <option value="admin">Admin</option>
                                    </select>
                                </td>
                                <td className="py-4 px-4 text-right">
                                    <button 
                                        onClick={() => handleDeleteUser(user._id)}
                                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserManagement