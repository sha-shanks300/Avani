import React, { useState } from 'react'

const UserManagement = () => {
    const [users, setUsers] = useState([
        { _id: "1", name: "John Doe", email: "john@example.com", role: "admin" },
        { _id: "2", name: "Jane Smith", email: "jane@example.com", role: "customer" },
    ]);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "customer",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            _id: Date.now().toString(),
            name: formData.name,
            email: formData.email,
            role: formData.role
        };

        setUsers([...users, newUser]);
        setFormData({ name: "", email: "", password: "", role: "customer" })
    }

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
        <div className='max-w-7xl mx-auto p-6'>
            <h2 className='text-2xl font-bold mb-6 uppercase tracking-tight text-gray-900'>User Management</h2>
            
            {/* Form Section */}
            <div className='p-8 mb-10 bg-white border border-gray-100'>
                <h3 className='text-xs font-bold uppercase tracking-widest text-gray-900 mb-6'>Add New User</h3>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className='block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2'>Name</label>
                        <input type='text' name="name" value={formData.name} onChange={handleChange} className='w-full p-3 border border-gray-200 rounded-none focus:outline-none focus:border-black transition-colors' required />
                    </div>
                    <div>
                        <label className='block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2'>Email</label>
                        <input type='email' name="email" value={formData.email} onChange={handleChange} className='w-full p-3 border border-gray-200 rounded-none focus:outline-none focus:border-black transition-colors' required />
                    </div>
                    <div>
                        <label className='block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2'>Password</label>
                        <input type='password' name="password" value={formData.password} onChange={handleChange} className='w-full p-3 border border-gray-200 rounded-none focus:outline-none focus:border-black transition-colors' required />
                    </div>
                    <div>
                        <label className='block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2'>Role</label>
                        <select name='role' value={formData.role} onChange={handleChange} className='w-full p-3 border border-gray-200 rounded-none focus:outline-none focus:border-black transition-colors bg-white cursor-pointer'>
                            <option value='customer'>Customer</option>
                            <option value='admin'>Admin</option>
                        </select>
                    </div>
                    <div className="md:col-span-2">
                        <button type="submit" className='bg-black text-white py-3 px-8 rounded-none text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-all'>
                            Add User
                        </button>
                    </div>
                </form>
            </div>

            {/* User List Table */}
            <div className="overflow-x-auto bg-white border border-gray-100">
                <table className="min-w-full text-left">
                    <thead className="bg-gray-50 text-xs font-bold uppercase tracking-widest text-gray-600 border-b border-gray-100">
                        <tr>
                            <th className="py-4 px-6">Name</th>
                            <th className="py-4 px-6">Email</th>
                            <th className="py-4 px-6">Role</th>
                            <th className="py-4 px-6 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm text-gray-700 divide-y divide-gray-50">
                        {users.map((user) => (
                            <tr key={user._id} className="hover:bg-gray-50 transition-colors">
                                <td className="py-4 px-6 font-medium text-gray-900">{user.name}</td>
                                <td className="py-4 px-6 text-gray-600">{user.email}</td>
                                <td className="py-4 px-6">
                                    <select 
                                        value={user.role} 
                                        onChange={(e) => handleRoleChange(user._id, e.target.value)}
                                        className="appearance-none bg-gray-50 border border-gray-200 text-gray-700 py-1 pl-3 pr-8 rounded-none text-[10px] font-bold uppercase tracking-wider focus:outline-none focus:border-black cursor-pointer transition-colors"
                                    >
                                        <option value="customer">Customer</option>
                                        <option value="admin">Admin</option>
                                    </select>
                                </td>
                                <td className="py-4 px-6 text-right">
                                    <button 
                                        onClick={() => handleDeleteUser(user._id)}
                                        className="text-xs font-bold uppercase tracking-widest text-red-500 border border-red-100 px-3 py-1.5 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all cursor-pointer"
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