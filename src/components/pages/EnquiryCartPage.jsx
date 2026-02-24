import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ShoppingCart, Clock, Trash2, CheckCircle, AlertCircle, Loader2, Send } from 'lucide-react';
import Button from '../shared/Button';
import { TextInput, TextArea, Select } from '../shared/Input';
import { postToSheet } from '../../utils/postToSheet';

const CUSTOMER_TYPES = [
    'Doctor',
    'Hospital / Clinic',
    'Dealer / Distributor',
    'Biomedical Engineer',
    'Other',
];



// ── Main Component ──────────────────────────────────────────────────────────
const EnquiryCartPage = ({ cart, onRemove, onNav, onSuccess, setEnquiryCart }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm({
        defaultValues: {
            customerType: '',
            name: '',
            phone: '',
            location: '',
            email: '',
            message: '',
        }
    });

    const [isLoading, setIsLoading] = useState(false);
    const [submitError, setSubmitError] = useState('');

    // Filter validation error for cart length
    const cartError = cart.length === 0 ? 'Please add at least one product to your enquiry cart before submitting.' : null;



    // ── Submission ──────────────────────────────────────────────────────────
    const onSubmit = async (data) => {
        if (cart.length === 0) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        setSubmitError('');
        setIsLoading(true);

        // 1. Fetch IP (non-blocking)
        let ip = '';
        try {
            const r = await fetch('https://api.ipify.org?format=json');
            const j = await r.json();
            ip = j.ip;
        } catch {
            // non-blocking
        }

        // 2. Build payload
        const payload = {
            form_type: 'enquiry',
            customer_type: data.customerType,
            name: data.name,
            email: data.email,
            phone: data.phone,
            location: data.location,
            products: cart.map(item => item.name).join(', '),
            message: data.message,
            ip_address: ip,
            utm_source: localStorage.getItem('utm_source') || 'Direct',
            submitted_at: new Date().toISOString(),
        };

        // 3. Submit to Google Sheet
        try {
            const ok = await postToSheet(payload);
            if (ok) {
                if (onSuccess) onSuccess();
                setEnquiryCart([]);
            } else {
                setSubmitError('Something went wrong. Please try again.');
            }
        } catch (err) {
            console.error('Submission error:', err);
            setSubmitError('An error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    // ── Render ──────────────────────────────────────────────────────────────
    return (
        <div className="max-w-7xl mx-auto px-4 py-16 animate-in fade-in">
            <div className="text-center mb-12">
                <h1 className="text-3xl font-bold text-[#0B2C4D] mb-4">Enquiry Cart</h1>
                <div className="w-16 h-1 bg-[#EA580C] mx-auto" />
            </div>

            <div className="flex flex-col lg:flex-row gap-12">
                {/* ── Left: Cart Items ──────────────────────────────────── */}
                <div className="lg:w-1/2">
                    <h3 className="text-xl font-bold text-[#0B2C4D] mb-6 flex items-center gap-2">
                        <ShoppingCart size={20} /> Selected Products ({cart.length})
                    </h3>

                    {/* Cart empty validation error */}
                    {cartError && isLoading === false && (
                        <div className="flex items-center gap-2 bg-red-50 text-red-700 border border-red-200 rounded-lg px-4 py-3 mb-4 text-sm">
                            <AlertCircle size={16} className="flex-shrink-0" />
                            {cartError}
                        </div>
                    )}

                    {cart.length === 0 ? (
                        <div className="bg-slate-50 rounded-xl p-8 text-center border-2 border-dashed border-slate-200">
                            <p className="text-slate-500 mb-4">Your enquiry cart is currently empty.</p>
                            <Button onClick={() => onNav('shop')} variant="outline" className="mx-auto text-xs">
                                Browse Products
                            </Button>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {cart.map((item) => (
                                <div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-16 h-16 object-contain rounded bg-slate-50 flex-shrink-0"
                                        onError={e => { e.target.onerror = null; e.target.src = 'https://placehold.co/64x64/f1f5f9/334155?text=IMG'; }}
                                    />
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-bold text-[#0B2C4D] text-sm leading-snug">{item.name}</h4>
                                        <p className="text-xs text-[#EA580C] font-bold uppercase mt-1">{item.category}</p>
                                    </div>
                                    <button
                                        onClick={() => onRemove(item.id)}
                                        className="text-slate-400 hover:text-red-500 transition-colors flex-shrink-0"
                                        aria-label="Remove"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            ))}

                            <div className="bg-blue-50 text-[#0B2C4D] text-xs p-4 rounded-lg border border-blue-100 flex gap-2 items-start mt-4">
                                <Clock size={16} className="mt-0.5 flex-shrink-0" />
                                <p>Items in your enquiry cart are not reserved. Please submit the form to receive a quote.</p>
                            </div>
                        </div>
                    )}
                </div>

                {/* ── Right: Enquiry Form ───────────────────────────────── */}
                <div className="lg:w-1/2">
                    <div className="bg-white rounded-xl shadow-lg border-t-4 border-[#EA580C] p-8">
                        <h3 className="text-xl font-bold text-[#0B2C4D] mb-6 flex items-center gap-2">
                            <Send size={18} className="text-[#EA580C]" /> Send Enquiry
                        </h3>

                        {/* Global error banner */}
                        {submitError && (
                            <div className="flex items-center gap-2 bg-red-50 text-red-700 border border-red-200 rounded-lg px-4 py-3 mb-5 text-sm">
                                <AlertCircle size={16} className="flex-shrink-0" />
                                {submitError}
                            </div>
                        )}

                        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
                            <div className="grid grid-cols-2 gap-4">
                                <Select
                                    label="Customer Type *"
                                    options={[
                                        { value: '', label: 'Select Customer Type', disabled: true },
                                        ...CUSTOMER_TYPES.map(t => ({ value: t, label: t }))
                                    ]}
                                    error={errors.customerType?.message}
                                    {...register('customerType', { required: 'Please select a customer type.' })}
                                />
                                <TextInput
                                    label="Your Name *"
                                    placeholder="Enter full name"
                                    error={errors.name?.message}
                                    {...register('name', {
                                        required: 'Name is required.',
                                        validate: value => value.trim() !== '' || 'Name cannot be empty.',
                                        minLength: { value: 2, message: 'Name must be at least 2 characters.' }
                                    })}
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <TextInput
                                    label="Contact Number *"
                                    type="tel"
                                    placeholder="+91 98765 43210"
                                    error={errors.phone?.message}
                                    {...register('phone', {
                                        required: 'Phone number is required.',
                                        pattern: { value: /^\+?[\d\s\-]{10,}$/, message: 'Enter a valid phone number (min 10 digits).' }
                                    })}
                                />
                                <TextInput
                                    label="Location *"
                                    placeholder="City, State"
                                    error={errors.location?.message}
                                    {...register('location', {
                                        required: 'Please enter your city / location.',
                                        validate: value => value.trim() !== '' || 'Location cannot be empty.'
                                    })}
                                />
                            </div>

                            <TextInput
                                label="Email Address *"
                                type="email"
                                placeholder="name@example.com"
                                error={errors.email?.message}
                                {...register('email', {
                                    required: 'Email is required.',
                                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email address.' }
                                })}
                            />

                            <TextArea
                                label="Remark / Message"
                                className="h-24 resize-none"
                                placeholder="Any specific requirements or questions?"
                                {...register('message')}
                            />

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full mt-4 py-3 px-6 rounded font-semibold text-sm text-white bg-[#EA580C] hover:bg-[#c2410c] disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center gap-2"
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 size={18} className="animate-spin" />
                                        Submitting…
                                    </>
                                ) : (
                                    <>
                                        <Send size={16} />
                                        Submit Enquiry
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EnquiryCartPage;
