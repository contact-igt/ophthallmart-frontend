import React from 'react';
import Button from '../shared/Button';

const AccountPage = () => (
    <div className="animate-in fade-in py-20 flex items-center justify-center bg-slate-50">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border-t-4 border-[#0B2C4D]">
            <h2 className="text-2xl font-bold text-[#0B2C4D] mb-6 text-center">Customer Login</h2>
            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                    <input
                        type="email"
                        className="w-full border border-slate-300 rounded px-4 py-2 focus:ring-2 focus:ring-[#0B2C4D] outline-none"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
                    <input
                        type="password"
                        className="w-full border border-slate-300 rounded px-4 py-2 focus:ring-2 focus:ring-[#0B2C4D] outline-none"
                    />
                </div>
                <div className="flex justify-between items-center text-sm">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="accent-[#0B2C4D]" /> Remember me
                    </label>
                    <a href="#" className="text-[#EA580C] hover:underline">Forgot Password?</a>
                </div>
                <Button variant="primary" className="w-full">Sign In</Button>
            </form>
            <div className="mt-6 text-center text-sm text-slate-500">
                Don't have an account? <a href="#" className="text-[#0B2C4D] font-bold hover:underline">Register Now</a>
            </div>
        </div>
    </div>
);

export default AccountPage;
