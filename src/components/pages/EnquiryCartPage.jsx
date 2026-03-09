import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { 
    ShoppingCart, Clock, Trash2, CheckCircle, AlertCircle, 
    Loader2, Send, Info, MapPin, TrendingDown, 
    Layers, ShieldCheck, ArrowRight 
} from 'lucide-react';
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

// ── Helper Components ──────────────────────────────────────────────────────

const CartItem = ({ item, onRemove }) => (
    <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center gap-6 bg-white p-6 rounded-3xl shadow-sm border border-slate-100 group hover:shadow-md transition-all duration-300 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-[#EA580C] opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="w-24 h-24 rounded-2xl bg-slate-50 p-3 flex items-center justify-center flex-shrink-0 border border-slate-100 overflow-hidden relative">
            <img
                src={item.image}
                alt={item.name}
                className="max-h-full max-w-full object-contain mix-blend-multiply sm:scale-110 group-hover:scale-125 transition-transform duration-500"
                onError={e => { e.target.onerror = null; e.target.src = 'https://placehold.co/100x100/f1f5f9/334155?text=IMG'; }}
            />
        </div>
        <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
                <span className={`text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full ${
                    item.category === 'PRE-OWNED' 
                    ? 'bg-orange-100 text-[#EA580C]' 
                    : 'bg-blue-100 text-blue-600'
                }`}>
                    {item.category === 'PRE-OWNED' ? 'Pre-Owned' : 'New Equipment'}
                </span>
            </div>
            <h4 className="font-bold text-[#0B2C4D] text-lg leading-tight group-hover:text-[#EA580C] transition-colors mb-1 truncate">{item.name}</h4>
            <div className="flex flex-wrap items-center gap-y-1 gap-x-4">
                {item.price && (
                    <div className="flex items-center gap-1.5 text-slate-500 font-medium">
                        <TrendingDown size={14} className="text-green-500" />
                        <span className="text-sm">{item.price}</span>
                    </div>
                )}
                {item.location && (
                    <div className="flex items-center gap-1.5 text-slate-400">
                        <MapPin size={14} />
                        <span className="text-xs truncate max-w-[150px]">{item.location}</span>
                    </div>
                )}
            </div>
        </div>
        <button
            onClick={() => onRemove(item.id)}
            className="text-slate-300 hover:text-red-500 p-2.5 rounded-full hover:bg-red-50 transition-all flex-shrink-0 absolute top-4 right-4 sm:static"
            aria-label="Remove"
        >
            <Trash2 size={20} />
        </button>
    </div>
);

const EnquiryForm = ({ title, type, items, onSuccess, onClearCart }) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm({
        defaultValues: {
            customerType: '',
            name: '',
            phone: '',
            location: '',
            email: '',
            urgency: '',
            budget: '',
            message: '',
        }
    });

    const [submitError, setSubmitError] = useState('');

    const onSubmit = async (data) => {
        setSubmitError('');
        
        let ip = '';
        try {
            const r = await fetch('https://api.ipify.org?format=json');
            const j = await r.json();
            ip = j.ip;
        } catch { }

        const payload = {
            form_type: type === 'pre-owned' ? 'enquiry_preowned' : 'enquiry_standard',
            customer_type: data.customerType,
            name: data.name,
            email: data.email,
            phone: data.phone,
            location: data.location,
            products: items.map(item => item.name).join(', '),
            urgency: data.urgency || 'N/A',
            budget: data.budget || 'N/A',
            message: data.message,
            ip_address: ip,
            utm_source: localStorage.getItem('utm_source') || 'Direct',
            submitted_at: new Date().toISOString(),
        };

        try {
            const ok = await postToSheet(payload);
            if (ok) {
                onClearCart(items.map(i => i.id));
                reset();
                if (onSuccess) onSuccess();
            } else {
                setSubmitError('Something went wrong. Please try again.');
            }
        } catch (err) {
            console.error('Submission error:', err);
            setSubmitError('An error occurred. Please try again.');
        }
    };

    return (
        <div className={`bg-white rounded-[2rem] shadow-2xl shadow-slate-200 p-8 border ${type === 'pre-owned' ? 'border-orange-100 hover:border-orange-200' : 'border-blue-100 hover:border-blue-200'} transition-all`}>
            <div className="flex items-center gap-4 mb-8">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${type === 'pre-owned' ? 'bg-orange-100 text-[#EA580C]' : 'bg-blue-100 text-[#0B2C4D]'}`}>
                    <Send size={24} />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-[#0B2C4D]">{title}</h3>
                    <p className="text-xs text-slate-400">Complete the form to get a personalized quote</p>
                </div>
            </div>

            {submitError && (
                <div className="flex items-center gap-3 bg-red-50 text-red-700 border border-red-100 rounded-2xl px-4 py-3 mb-6 text-sm">
                    <AlertCircle size={18} className="flex-shrink-0" />
                    <span className="font-medium">{submitError}</span>
                </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Select
                        label="Customer Type *"
                        options={[
                            { value: '', label: 'Select Type', disabled: true },
                            ...CUSTOMER_TYPES.map(t => ({ value: t, label: t }))
                        ]}
                        error={errors.customerType?.message}
                        {...register('customerType', { required: 'Required' })}
                    />
                    <TextInput
                        label="Full Name *"
                        placeholder="e.g. Dr. Rajesh"
                        error={errors.name?.message}
                        {...register('name', { required: 'Required' })}
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <TextInput
                        label="Contact Number *"
                        type="tel"
                        placeholder="+91"
                        error={errors.phone?.message}
                        {...register('phone', { required: 'Required' })}
                    />
                     <TextInput
                        label="Location (City) *"
                        placeholder="e.g. Madurai"
                        error={errors.location?.message}
                        {...register('location', { required: 'Required' })}
                    />
                </div>

                <TextInput
                    label="Email Address (Optional)"
                    type="email"
                    placeholder="dr@example.com"
                    error={errors.email?.message}
                    {...register('email')}
                />

                {type === 'pre-owned' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        <Select
                            label="Requirement Urgency"
                            options={[
                                { value: 'Immediate', label: 'Within 10 Days' },
                                { value: '1 Month', label: 'Within 30 Days' },
                                { value: 'Planning', label: 'Just Planning' }
                            ]}
                            {...register('urgency')}
                        />
                        <TextInput
                            label="Estimated Budget"
                            placeholder="e.g. ₹6-7L"
                            {...register('budget')}
                        />
                    </div>
                )}

                <TextArea
                    label="Special Instructions"
                    placeholder="Tell us about specific needs..."
                    className="h-24 rounded-2xl"
                    {...register('message')}
                />

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-5 rounded-[1.25rem] font-bold text-white transition-all shadow-xl flex items-center justify-center gap-3 mt-4 ${type === 'pre-owned' 
                        ? 'bg-[#EA580C] hover:bg-[#d94e25] shadow-orange-200 hover:shadow-orange-300' 
                        : 'bg-[#0B2C4D] hover:bg-[#123659] shadow-blue-200 hover:shadow-blue-300'
                    }`}
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 size={24} className="animate-spin" />
                            Processing Request...
                        </>
                    ) : (
                        <>
                            <Send size={20} />
                            Request Pricing & Avaibility
                        </>
                    )}
                </button>
            </form>
        </div>
    );
};

// ── Main Component ──────────────────────────────────────────────────────────

const EnquiryCartPage = ({ cart, onRemove, onNav, onSuccess, setEnquiryCart }) => {
    const preOwnedItems = cart.filter(p => p.category === 'PRE-OWNED');
    const standardItems = cart.filter(p => p.category !== 'PRE-OWNED');

    const handleClearCartItems = (ids) => {
        setEnquiryCart(prev => prev.filter(item => !ids.includes(item.id)));
    };

    if (cart.length === 0) {
        return (
            <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-24 animate-in fade-in zoom-in-95">
                <div className="relative mb-12">
                   <div className="absolute inset-0 bg-blue-50/50 rounded-full scale-150 blur-3xl ring-32 ring-blue-50"></div>
                    <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl relative z-10">
                        <ShoppingCart size={64} className="text-slate-200" strokeWidth={1} />
                        <div className="absolute -top-1 -right-1 w-8 h-8 bg-[#EA580C] rounded-full border-4 border-white flex items-center justify-center shadow-lg">
                            <span className="text-white text-xs font-black">0</span>
                        </div>
                    </div>
                </div>
                
                <div className="text-center max-w-lg relative z-10">
                    <h1 className="text-4xl font-extrabold text-[#0B2C4D] mb-4">Your Cart feels light.</h1>
                    <p className="text-slate-500 text-lg mb-10 leading-relaxed">
                        Start adding machines, consumables, and hospital systems to your enquiry list and get quotes directly from top suppliers.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                        <Button onClick={() => onNav('products')} className="bg-[#0B2C4D] hover:bg-[#123659] py-4 md:py-5 px-6 md:px-10 rounded-2xl font-bold shadow-2xl shadow-blue-200 transition-all flex justify-center items-center gap-2 group text-sm md:text-base">
                            Explore New Equipment
                            <ArrowRight size={18} className="md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button onClick={() => onNav('valuation')} variant="outline" className="py-4 md:py-5 px-6 md:px-10 border-2 rounded-2xl font-bold transition-all flex justify-center items-center gap-2 text-sm md:text-base">
                            Browse Used Deals
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-20 animate-in fade-in duration-700">
            {/* Page Header */}
            <div className="relative rounded-3xl md:rounded-[3rem] bg-gradient-to-br from-[#0B2C4D] to-[#1e446d] overflow-hidden mb-12 md:mb-20 p-6 md:p-16 text-white shadow-[0_35px_60px_-15px_rgba(11,44,77,0.3)]">
                <div className="absolute top-0 right-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-blue-400/10 rounded-full blur-[80px] md:blur-[100px] -translate-y-1/2 translate-x-1/4"></div>
                <div className="absolute bottom-0 left-0 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-orange-400/5 rounded-full blur-[60px] md:blur-[80px] translate-y-1/2 -translate-x-1/4"></div>

                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-10">
                    <div className="text-center lg:text-left">
                        <div className="inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-white/10 border border-white/10 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-4 md:mb-6 shadow-xl backdrop-blur-md">
                            <Layers size={12} className="md:w-[14px] md:h-[14px] text-[#EA580C]" />
                            Secure Enquiry Portal
                        </div>
                        <h1 className="text-3xl md:text-6xl font-black mb-4 md:mb-6 tracking-tight leading-none italic">
                            Review <span className="text-[#EA580C]">Your</span> Selections.
                        </h1>
                        <p className="text-base md:text-xl text-slate-300 max-w-xl font-light leading-relaxed mx-auto lg:mx-0">
                            You have <span className="font-bold text-white underline decoration-[#EA580C] underline-offset-4">{cart.length} items</span> awaiting quotation. Our team will verify technical specs and availability within 24 hours.
                        </p>
                    </div>
                    
                    <div className="hidden lg:grid grid-cols-2 gap-4">
                        {[
                            { icon: <ShieldCheck size={28} />, label: "Verified Sellers", sub: "ISO Certified Vendors" },
                            { icon: <TrendingDown size={28} />, label: "Best Pricing", sub: "Direct Manufacturer Rates" }
                        ].map((box, i) => (
                            <div key={i} className="bg-white/5 backdrop-blur-xl p-6 rounded-[2rem] border border-white/10 w-48 text-center">
                                <div className="text-[#EA580C] mb-3 flex justify-center">{box.icon}</div>
                                <div className="font-bold text-sm mb-1">{box.label}</div>
                                <div className="text-[10px] text-slate-400 uppercase tracking-wider">{box.sub}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="space-y-20 md:space-y-32">
                {/* ── Standard Products Section ───────────────────────────── */}
                {standardItems.length > 0 && (
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
                        <div className="lg:col-span-3">
                            <div className="flex items-center gap-4 mb-10 group">
                                <div className="w-14 h-14 rounded-3xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300">
                                    <ShoppingCart className="text-[#0B2C4D] group-hover:text-white" size={24} />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-black text-[#0B2C4D]">Standard Catalog</h2>
                                    <p className="text-slate-400 font-medium">New equipment from top brands ({standardItems.length})</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-6">
                                {standardItems.map(item => <CartItem key={item.id} item={item} onRemove={onRemove} />)}
                            </div>
                        </div>
                        <div className="lg:col-span-2">
                             <EnquiryForm 
                                title="Primary Equipment Enquiry"
                                type="standard"
                                items={standardItems}
                                onSuccess={onSuccess}
                                onClearCart={handleClearCartItems}
                            />
                        </div>
                    </div>
                )}

                {/* ── Pre-Owned Section ────────────────────────────────────────── */}
                {preOwnedItems.length > 0 && (
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 md:gap-16 items-start">
                        <div className="lg:col-span-3">
                            <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-10 group">
                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl md:rounded-3xl bg-orange-50 flex items-center justify-center group-hover:bg-[#EA580C] transition-all duration-300">
                                    <Clock className="text-[#EA580C] group-hover:text-white md:w-6 md:h-6" size={20} />
                                </div>
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-black text-[#0B2C4D]">Pre-Owned Assets</h2>
                                    <p className="text-xs md:text-sm text-slate-400 font-medium tracking-tight">Verified used equipment ({preOwnedItems.length})</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-4 md:gap-6">
                                {preOwnedItems.map(item => <CartItem key={item.id} item={item} onRemove={onRemove} />)}
                            </div>
                            
                            <div className="mt-6 md:mt-8 p-6 md:p-8 bg-blue-50/50 rounded-2xl md:rounded-[2.5rem] border border-blue-100 flex flex-col sm:flex-row gap-4 md:gap-6 items-center text-center sm:text-left">
                                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white flex-shrink-0 flex items-center justify-center shadow-lg">
                                    <Info className="text-blue-600 md:w-7 md:h-7" size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#0B2C4D] text-sm md:text-base mb-1">Expert Valuation Included</h4>
                                    <p className="text-xs md:text-sm text-slate-500 max-w-md">Our engineers inspect every pre-owned machine prior to listing. Pricing is inclusive of basic installation guidance.</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-2">
                            <EnquiryForm 
                                title="Pre-owned Machine Deal"
                                type="pre-owned"
                                items={preOwnedItems}
                                onSuccess={onSuccess}
                                onClearCart={handleClearCartItems}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EnquiryCartPage;
