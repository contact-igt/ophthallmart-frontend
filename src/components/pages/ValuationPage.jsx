import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
    Upload,
    X,
    Image as ImageIcon,
    CheckCircle,
    AlertCircle,
    Loader2,
    Send,
    Camera,
    Info,
    ChevronRight,
    HelpCircle,
    Phone
} from 'lucide-react';
import Button from '../shared/Button';
import { TextInput, TextArea } from '../shared/Input';
import { CONTACT_INFO } from '../../data/constants';
import { postToSheet } from '../../utils/postToSheet';

// ── Shared UI Components ───────────────────────────────────────────────────

const SectionTitle = ({ number, title }) => (
    <div className="flex items-center gap-3 mb-8 border-b border-slate-100 pb-3">
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#EA580C] text-white font-bold text-sm shadow-sm">
            {number}
        </span>
        <h3 className="text-xl font-bold text-[#0B2C4D]">{title}</h3>
    </div>
);

const RadioGroup = React.forwardRef(({ label, name, options, value, onChange, error, grid = 2 }, ref) => (
    <div className="space-y-3">
        <label className="text-sm font-bold text-[#0B2C4D] block flex items-center gap-1.5">
            {label}
            {error && <AlertCircle size={14} className="text-red-500" />}
        </label>
        <div className={`grid grid-cols-1 sm:grid-cols-${grid} gap-3`}>
            {options.map((option) => (
                <label
                    key={option}
                    className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition-all duration-200 ${value === option
                        ? 'border-[#EA580C] bg-orange-50 ring-1 ring-[#EA580C]'
                        : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                        }`}
                >
                    <input
                        ref={ref}
                        type="radio"
                        name={name}
                        value={option}
                        checked={value === option}
                        onChange={onChange}
                        className="accent-[#EA580C] w-4 h-4"
                    />
                    <span className={`text-sm ${value === option ? 'text-[#0B2C4D] font-semibold' : 'text-slate-600'}`}>
                        {option}
                    </span>
                </label>
            ))}
        </div>
        {error && <p className="text-xs text-red-500 font-medium">{error}</p>}
    </div>
));

RadioGroup.displayName = 'RadioGroup';

// ── Main Page Component ────────────────────────────────────────────────────

const ValuationPage = ({ onSuccess }) => {
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            location: '',
            equipmentType: '',
            equipmentTypeOther: '',
            brand: '',
            brandOther: '',
            model: '',
            year: '',
            invoiceValue: '',
            expectedPrice: '',
            workingCondition: '',
            amcAvailable: '',
            saleTimeline: '',
            supportInstall: '',
            remarks: '',
            termsAccepted: false
        }
    });

    // Sub-states
    const [images, setImages] = useState([]); // { file, preview, base64 }
    const [isLoading, setIsLoading] = useState(false);
    const [submitError, setSubmitError] = useState('');

    // Dynamic watchers
    const equipmentTypeWatcher = watch('equipmentType');
    const brandWatcher = watch('brand');

    // ── Image Handling ──────────────────────────────────────────────────────
    const handleImageChange = async (e) => {
        const files = Array.from(e.target.files);
        if (files.length === 0) return;

        const newImages = await Promise.all(
            files.map(file => new Promise((resolve) => {
                const reader = new FileReader();
                reader.onloadend = () => {
                    resolve({
                        file,
                        preview: URL.createObjectURL(file),
                        base64: reader.result
                    });
                };
                reader.readAsDataURL(file);
            }))
        );

        setImages(prev => [...prev, ...newImages].slice(0, 6)); // Limit to 6 images
    };

    const removeImage = (index) => {
        setImages(prev => {
            const updated = [...prev];
            URL.revokeObjectURL(updated[index].preview);
            updated.splice(index, 1);
            return updated;
        });
    };

    // Cleanup previews
    useEffect(() => {
        return () => images.forEach(img => URL.revokeObjectURL(img.preview));
    }, []);

    // ── Submission ──────────────────────────────────────────────────────────
    const onSubmit = async (data) => {
        setSubmitError('');
        setIsLoading(true);

        // 1. Fetch IP
        let ip = '';
        try {
            const r = await fetch('https://api.ipify.org?format=json');
            const j = await r.json();
            ip = j.ip;
        } catch { }

        // 2. Build Payload
        const payload = {
            form_type: 'valuation',
            name: data.name,
            email: data.email,
            phone: data.phone,
            location: data.location,
            equipment_type: data.equipmentType === 'Others' ? data.equipmentTypeOther : data.equipmentType,
            brand: data.brand === 'Other' ? data.brandOther : data.brand,
            model: data.model,
            year: data.year,
            invoice_value: data.invoiceValue,
            expected_price: data.expectedPrice,
            working_condition: data.workingCondition,
            amc_available: data.amcAvailable,
            sale_timeline: data.saleTimeline,
            support_install: data.supportInstall,
            // remarks: data.remarks,
            ip_address: ip,
            utm_source: localStorage.getItem('utm_source') || 'Direct',
            submitted_at: new Date().toISOString(),
            // We can't really send multiple large base64 strings via URLSearchParams reliably
            // So we send count and small message
            // image_count: images.length,
            // has_images: images.length > 0 ? 'Yes' : 'No'
        };

        // 3. Post
        try {
            const ok = await postToSheet(payload);
            if (ok) {
                if (onSuccess) onSuccess();
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



    return (
        <div className="animate-in fade-in relative">
            {/* Hero Section */}
            <div className="bg-[#0B2C4D] pt-24 pb-32 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#EA580C] opacity-10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 opacity-5 rounded-full blur-2xl transform -translate-x-1/4 translate-y-1/4"></div>

                <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6">
                        Expert Valuation
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
                        Pre-Owned Equipment Valuation Tool
                    </h1>
                    <p className="text-lg text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
                        Get the best market price for your used ophthalmic equipment. Our experts analyze condition, brand, and market demand to give you a fair price.
                    </p>
                </div>
            </div>

            {/* Form Section */}
            <div className="max-w-4xl mx-auto px-4 mt-16 relative z-20 mb-24">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 pb-4">
                    <div className="h-2 bg-gradient-to-r from-[#0B2C4D] via-[#EA580C] to-[#0B2C4D]"></div>

                    <form onSubmit={handleSubmit(onSubmit)} className="p-6 md:p-12 space-y-12" noValidate>

                        {submitError && (
                            <div className="flex items-center gap-3 bg-red-50 text-red-700 border border-red-200 rounded-xl px-5 py-4 text-sm animate-in slide-in-from-top-2">
                                <AlertCircle size={20} className="flex-shrink-0" />
                                <div className="font-medium">{submitError}</div>
                            </div>
                        )}

                        {/* 1. Contact Information */}
                        <section className="animate-in fade-in duration-500 delay-100">
                            <SectionTitle number="1" title="Contact Information" />
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <TextInput
                                    label="Name *"
                                    placeholder="Your Full Name"
                                    error={errors.name?.message}
                                    {...register('name', {
                                        required: 'Name is required.',
                                        validate: v => v.trim() !== '' || 'Name cannot be empty.'
                                    })}
                                />
                                <TextInput
                                    label="Email *"
                                    type="email"
                                    placeholder="your@email.com"
                                    error={errors.email?.message}
                                    {...register('email', {
                                        required: 'Email is required.',
                                        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email address.' }
                                    })}
                                />
                                <TextInput
                                    label="Phone Number *"
                                    type="tel"
                                    placeholder="+91 98765 43210"
                                    error={errors.phone?.message}
                                    {...register('phone', {
                                        required: 'Phone number is required.',
                                        pattern: { value: /^\+?[\d\s\-]{10,}$/, message: 'Invalid phone format.' }
                                    })}
                                />
                                <TextInput
                                    label="Location (City, State) *"
                                    placeholder="e.g. Chennai, Tamil Nadu"
                                    error={errors.location?.message}
                                    {...register('location', {
                                        required: 'Location is required.',
                                        validate: v => v.trim() !== '' || 'Location cannot be empty.'
                                    })}
                                />
                            </div>
                        </section>

                        {/* 2. Equipment Details */}
                        <section className="animate-in fade-in duration-500 delay-200">
                            <SectionTitle number="2" title="Equipment Details" />
                            <div className="space-y-8">
                                <RadioGroup
                                    label="Used Equipment Type *"
                                    name="equipmentType"
                                    options={[
                                        'Slit Lamp', 'Autorefractor', 'Lensometer', 'Chair Unit',
                                        'Phaco Machine', 'Lasik', 'Surgical Microscope',
                                        'Vitrectomy', 'Topographer', 'Others'
                                    ]}
                                    value={equipmentTypeWatcher}
                                    onChange={(e) => setValue('equipmentType', e.target.value, { shouldValidate: true })}
                                    error={errors.equipmentType?.message}
                                    {...register('equipmentType', { required: 'Please select an equipment type.' })}
                                    grid={3}
                                />

                                {equipmentTypeWatcher === 'Others' && (
                                    <div className="animate-in zoom-in-95 duration-200">
                                        <TextInput
                                            label="Specify Equipment Type *"
                                            placeholder="Enter equipment category name..."
                                            error={errors.equipmentTypeOther?.message}
                                            {...register('equipmentTypeOther', { required: 'Please specify the type.' })}
                                        />
                                    </div>
                                )}

                                <RadioGroup
                                    label="Brand *"
                                    name="brand"
                                    options={[
                                        'Appasamy', 'Nidek', 'Topcon', 'Takagi',
                                        'Zeiss', 'Ophthall', 'Haag Streit', 'Other'
                                    ]}
                                    value={brandWatcher}
                                    onChange={(e) => setValue('brand', e.target.value, { shouldValidate: true })}
                                    error={errors.brand?.message}
                                    {...register('brand', { required: 'Please select a brand.' })}
                                    grid={4}
                                />

                                {brandWatcher === 'Other' && (
                                    <div className="animate-in zoom-in-95 duration-200">
                                        <TextInput
                                            label="Specify Brand *"
                                            placeholder="Enter brand name..."
                                            error={errors.brandOther?.message}
                                            {...register('brandOther', { required: 'Please specify the brand.' })}
                                        />
                                    </div>
                                )}

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                    <TextInput
                                        label="Model *"
                                        placeholder="e.g. AA-2000"
                                        error={errors.model?.message}
                                        {...register('model', { required: 'Model is required.' })}
                                    />
                                    <TextInput
                                        label="Year of Manufacture"
                                        placeholder="e.g. 2018"
                                        {...register('year')}
                                    />
                                </div>
                            </div>
                        </section>

                        {/* 3. Valuation & Condition */}
                        <section className="animate-in fade-in duration-500 delay-300">
                            <SectionTitle number="3" title="Valuation & Condition" />
                            <div className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <TextInput
                                        label="Invoice Value (Purchase) *"
                                        placeholder="Amount in ₹"
                                        error={errors.invoiceValue?.message}
                                        {...register('invoiceValue', { required: 'Original invoice value is required.' })}
                                    />
                                    <TextInput
                                        label="Expected Price *"
                                        placeholder="Amount in ₹"
                                        error={errors.expectedPrice?.message}
                                        {...register('expectedPrice', { required: 'Expected price is required.' })}
                                    />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                    <RadioGroup
                                        label="Working Condition *"
                                        name="workingCondition"
                                        options={['Excellent', 'Good', 'Fair', 'Needs Repair']}
                                        value={watch('workingCondition')}
                                        onChange={(e) => setValue('workingCondition', e.target.value, { shouldValidate: true })}
                                        error={errors.workingCondition?.message}
                                        {...register('workingCondition', { required: 'Condition is required.' })}
                                        grid={2}
                                    />
                                    <RadioGroup
                                        label="AMC/CMC Available *"
                                        name="amcAvailable"
                                        options={['Yes', 'No']}
                                        value={watch('amcAvailable')}
                                        onChange={(e) => setValue('amcAvailable', e.target.value, { shouldValidate: true })}
                                        error={errors.amcAvailable?.message}
                                        {...register('amcAvailable', { required: 'Please specify AMC status.' })}
                                        grid={2}
                                    />
                                </div>
                            </div>
                        </section>

                        {/* 4. Sale Logistics */}
                        <section className="animate-in fade-in duration-500 delay-400">
                            <SectionTitle number="4" title="Sale Logistics" />
                            <div className="space-y-8">
                                <RadioGroup
                                    label="Sale Timeline *"
                                    name="saleTimeline"
                                    options={[
                                        'Immediately',
                                        'Within 1 month',
                                        'Within 3 Months',
                                        'Just Enquiring'
                                    ]}
                                    value={watch('saleTimeline')}
                                    onChange={(e) => setValue('saleTimeline', e.target.value, { shouldValidate: true })}
                                    error={errors.saleTimeline?.message}
                                    {...register('saleTimeline', { required: 'Please choose a timeline.' })}
                                    grid={2}
                                />
                                <RadioGroup
                                    label="Support in Installation/Transport? *"
                                    name="supportInstall"
                                    options={['Yes', 'No']}
                                    value={watch('supportInstall')}
                                    onChange={(e) => setValue('supportInstall', e.target.value, { shouldValidate: true })}
                                    error={errors.supportInstall?.message}
                                    {...register('supportInstall', { required: 'Please confirm support availability.' })}
                                    grid={2}
                                />
                            </div>
                        </section>

                        {/* 5. Photos & Remarks */}
                        {/* <section className="animate-in fade-in duration-500 delay-500">
                            <SectionTitle number="5" title="Evidence & Remarks" />
                            <div className="space-y-8">

                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <label className="text-sm font-bold text-[#0B2C4D] flex items-center gap-2">
                                            Equipment Photos ({images.length}/6)
                                            <HelpCircle size={14} className="text-slate-400" />
                                        </label>
                                        <span className="text-xs font-medium text-slate-500">Max 5MB per file</span>
                                    </div>

                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                                        {images.map((img, idx) => (
                                            <div key={idx} className="relative aspect-square rounded-xl overflow-hidden group border border-slate-200 shadow-sm animate-in zoom-in-95">
                                                <img src={img.preview} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                                                <button
                                                    type="button"
                                                    onClick={() => removeImage(idx)}
                                                    className="absolute top-1.5 right-1.5 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                                                >
                                                    <X size={12} />
                                                </button>
                                            </div>
                                        ))}

                                        {images.length < 6 && (
                                            <label className="aspect-square flex flex-col items-center justify-center border-2 border-dashed border-slate-200 rounded-xl bg-slate-50 hover:bg-slate-100 hover:border-[#EA580C]/30 cursor-pointer transition-all">
                                                <Camera size={24} className="text-[#EA580C] mb-2" />
                                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Add Photo</span>
                                                <input
                                                    type="file"
                                                    multiple
                                                    accept="image/*"
                                                    onChange={handleImageChange}
                                                    className="hidden"
                                                />
                                            </label>
                                        )}
                                    </div>
                                    <p className="text-[11px] text-slate-400 font-medium bg-slate-50 p-3 rounded-lg flex gap-2 items-start">
                                        <Info size={14} className="flex-shrink-0 mt-0.5 text-[#EA580C]" />
                                        Clear photos of the front, back, and serial number tag help us provide a more accurate valuation.
                                    </p>
                                </div>

                                <TextArea
                                    label="Additional Remarks / Accessories Included"
                                    className="h-32 rounded-xl"
                                    placeholder="List any extra features, lenses, or accessories included with the machine..."
                                    {...register('remarks')}
                                />

                                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl flex items-center gap-5 border border-blue-100 shadow-sm">
                                    <div className="bg-white p-3 rounded-xl shadow-sm text-blue-600">
                                        <Phone size={24} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-bold text-[#0B2C4D] text-sm">Need immediate assistance?</h4>
                                        <p className="text-sm text-blue-700/80">
                                            Send details directly on WhatsApp: <span className="font-bold text-blue-900">{CONTACT_INFO.phone || '+91 98403 24333'}</span>
                                        </p>
                                    </div>
                                    <ChevronRight className="text-blue-300 flex-shrink-0" />
                                </div>

                                <label className="flex items-start gap-4 cursor-pointer group p-2 hover:bg-slate-50 rounded-xl transition-all">
                                    <input
                                        type="checkbox"
                                        checked={watch('termsAccepted')}
                                        {...register('termsAccepted', { required: 'You must accept the terms to proceed.' })}
                                        className="mt-1 accent-[#EA580C] w-5 h-5 rounded-md"
                                    />
                                    <div className="flex-1">
                                        <span className="text-sm text-slate-600 group-hover:text-[#0B2C4D] leading-relaxed">
                                            I confirm that the information provided above is accurate to the best of my knowledge and I agree to the <span className="text-[#EA580C] font-semibold underline decoration-2 underline-offset-4">Valuation Terms & Conditions</span>.
                                        </span>
                                        {errors.termsAccepted && <p className="text-xs text-red-500 font-bold mt-1.5">{errors.termsAccepted.message}</p>}
                                    </div>
                                </label>
                            </div>
                        </section> */}

                        <div className="pt-6">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full py-4 px-8 rounded-xl font-bold text-lg text-white bg-[#EA580C] hover:bg-[#c2410c] shadow-lg shadow-orange-200 disabled:opacity-60 disabled:cursor-not-allowed transform active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-3"
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 size={24} className="animate-spin" />
                                        Calculating Valuation…
                                    </>
                                ) : (
                                    <>
                                        <Send size={20} />
                                        Submit for Valuation
                                    </>
                                )}
                            </button>
                            <p className="text-center text-[11px] text-slate-400 mt-5 font-semibold uppercase tracking-widest">
                                Secure Confidential Submission • Powered by Ophthall Mart
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ValuationPage;
