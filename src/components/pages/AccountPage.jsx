import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Eye, EyeOff, LogIn, UserPlus, AlertCircle, CheckCircle, Loader2 } from 'lucide-react';
import Button from '../shared/Button';
import { TextInput } from '../shared/Input';

const AccountPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: '',
            password: '',
            remember: false
        }
    });

    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState(null); // { type: 'success' | 'error', message: string }

    const onSubmit = (data) => {
        setIsLoading(true);
        // Simulate login
        setTimeout(() => {
            setIsLoading(false);
            setStatus({ type: 'error', message: 'This is a demo. Login functionality is not yet connected to a backend.' });
        }, 1500);
    };

    return (
        <div className="animate-in fade-in py-24 flex items-center justify-center bg-slate-50 min-h-[80vh]">
            <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-[#0B2C4D]"></div>

                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 text-[#0B2C4D] mb-4">
                        <LogIn size={32} />
                    </div>
                    <h2 className="text-3xl font-bold text-[#0B2C4D]">Customer Login</h2>
                    <p className="text-slate-500 mt-2 text-sm italic">Access your enquiry history and profile</p>
                </div>

                {status && (
                    <div className={`mb-6 p-4 rounded-xl flex items-center gap-3 text-sm animate-in slide-in-from-top-2 ${status.type === 'success' ? 'bg-green-50 text-green-700 border border-green-100' : 'bg-red-50 text-red-700 border border-red-100'
                        }`}>
                        {status.type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                        <span className="font-medium">{status.message}</span>
                    </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <TextInput
                        label="Email Address"
                        type="email"
                        placeholder="john@example.com"
                        error={errors.email?.message}
                        {...register('email', {
                            required: 'Email is required.',
                            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email address.' }
                        })}
                    />

                    <div className="relative">
                        <TextInput
                            label="Password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="••••••••"
                            error={errors.password?.message}
                            {...register('password', {
                                required: 'Password is required.',
                                minLength: { value: 6, message: 'Password must be at least 6 characters.' }
                            })}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-[34px] text-slate-400 hover:text-slate-600 transition-colors"
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>

                    <div className="flex justify-between items-center text-sm">
                        <label className="flex items-center gap-2 cursor-pointer group">
                            <input
                                type="checkbox"
                                className="accent-[#0B2C4D] w-4 h-4 rounded border-slate-300"
                                {...register('remember')}
                            />
                            <span className="text-slate-600 group-hover:text-[#0B2C4D] transition-colors">Remember me</span>
                        </label>
                        <a href="#" className="text-[#EA580C] font-semibold hover:underline">Forgot Password?</a>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-[#0B2C4D] hover:bg-[#081d33] text-white font-bold py-3.5 rounded-xl shadow-lg shadow-blue-100 transition-all flex items-center justify-center gap-2 active:scale-[0.98] disabled:opacity-70"
                    >
                        {isLoading ? <Loader2 className="animate-spin" size={20} /> : <LogIn size={20} />}
                        {isLoading ? 'Signing in...' : 'Sign In'}
                    </button>
                </form>

                <div className="mt-10 pt-8 border-t border-slate-100 text-center">
                    <p className="text-sm text-slate-500 mb-4">Don't have an account yet?</p>
                    <button className="inline-flex items-center gap-2 text-[#0B2C4D] font-bold hover:text-[#EA580C] transition-all group">
                        <UserPlus size={18} className="group-hover:scale-110 transition-transform" />
                        <span>Register Now</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AccountPage;
