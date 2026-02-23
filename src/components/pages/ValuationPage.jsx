import React, { useState } from 'react';
import Button from '../shared/Button';
import { TextInput, TextArea } from '../shared/Input';
import { CONTACT_INFO } from '../../data/constants';

const ValuationPage = () => {
    const [formData, setFormData] = useState({
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
        photos: null,
        termsAccepted: false
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        alert('Thank you! Your valuation request has been submitted.');
    };

    const SectionTitle = ({ number, title }) => (
        <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-2">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#EA580C] text-white font-bold text-sm">
                {number}
            </span>
            <h3 className="text-xl font-bold text-[#0B2C4D]">{title}</h3>
        </div>
    );

    const RadioGroup = ({ label, name, options, value, onChange, grid = 2 }) => (
        <div className="space-y-3">
            <label className="text-sm font-bold text-[#0B2C4D] block">{label}</label>
            <div className={`grid grid-cols-1 sm:grid-cols-${grid} gap-3`}>
                {options.map((option) => (
                    <label
                        key={option}
                        className={`flex items-center gap-3 p-3 border rounded cursor-pointer transition-all ${value === option
                            ? 'border-[#EA580C] bg-orange-50 ring-1 ring-[#EA580C]'
                            : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                            }`}
                    >
                        <input
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
        </div>
    );

    return (
        <div className="animate-in fade-in">
            {/* Hero Section */}
            <div className="bg-[#0B2C4D] py-20 text-white text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#EA580C] opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400 opacity-5 rounded-full blur-2xl transform -translate-x-1/4 translate-y-1/4"></div>
                <div className="max-w-3xl mx-auto px-4 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Equipment Valuation Tool</h1>
                    <p className="text-lg text-slate-300 font-light max-w-2xl mx-auto">
                        Get the best market price for your used ophthalmic equipment. Fill out the details below for a quick and accurate valuation.
                    </p>
                </div>
            </div>

            {/* Form Section */}
            <div className="max-w-4xl mx-auto px-4 -mt-10 relative z-20 mb-20">
                <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-100">
                    <div className="h-2 bg-gradient-to-r from-[#0B2C4D] to-[#EA580C]"></div>
                    <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-10">

                        {/* 1. Contact Info */}
                        <section>
                            <SectionTitle number="1" title="Contact Information" />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <TextInput
                                    label="Name *"
                                    name="name"
                                    placeholder="Your Full Name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                                <TextInput
                                    label="Email *"
                                    name="email"
                                    type="email"
                                    placeholder="your@email.com"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                                <TextInput
                                    label="Phone Number *"
                                    name="phone"
                                    type="tel"
                                    placeholder="+91 98765 43210"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                />
                                <TextInput
                                    label="Location (City, State) *"
                                    name="location"
                                    placeholder="e.g. Chennai, Tamil Nadu"
                                    value={formData.location}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </section>

                        {/* 2. Equipment Details */}
                        <section>
                            <SectionTitle number="2" title="Equipment Details" />
                            <div className="space-y-6">
                                <RadioGroup
                                    label="Used Equipment Type"
                                    name="equipmentType"
                                    options={[
                                        'Slit Lamp', 'Autorefractor', 'Lensometer', 'Chair Unit',
                                        'Phaco Machine', 'Lasik', 'Surgical Microscope',
                                        'Vitrectomy', 'Topographer', 'Others'
                                    ]}
                                    value={formData.equipmentType}
                                    onChange={handleInputChange}
                                    grid={3}
                                />
                                {formData.equipmentType === 'Others' && (
                                    <TextInput
                                        label="Please specify equipment type"
                                        name="equipmentTypeOther"
                                        placeholder="Type equipment name..."
                                        value={formData.equipmentTypeOther}
                                        onChange={handleInputChange}
                                    />
                                )}

                                <RadioGroup
                                    label="Brand"
                                    name="brand"
                                    options={[
                                        'Appasamy', 'Nidek', 'Topcon', 'Takagi',
                                        'Zeiss', 'Ophthall', 'Haag Streit', 'Other'
                                    ]}
                                    value={formData.brand}
                                    onChange={handleInputChange}
                                    grid={4}
                                />
                                {formData.brand === 'Other' && (
                                    <TextInput
                                        label="Please specify brand"
                                        name="brandOther"
                                        placeholder="Type brand name..."
                                        value={formData.brandOther}
                                        onChange={handleInputChange}
                                    />
                                )}

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <TextInput
                                        label="Model of the Machine"
                                        name="model"
                                        placeholder="e.g. AA-2000"
                                        value={formData.model}
                                        onChange={handleInputChange}
                                    />
                                    <TextInput
                                        label="Year of Manufacture"
                                        name="year"
                                        placeholder="e.g. 2018"
                                        value={formData.year}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                        </section>

                        {/* 3. Valuation & Condition */}
                        <section>
                            <SectionTitle number="3" title="Valuation & Condition" />
                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <TextInput
                                        label="Invoice Value during Purchase"
                                        name="invoiceValue"
                                        placeholder="₹"
                                        value={formData.invoiceValue}
                                        onChange={handleInputChange}
                                    />
                                    <TextInput
                                        label="Your Expected Price for Sale"
                                        name="expectedPrice"
                                        placeholder="₹"
                                        value={formData.expectedPrice}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <RadioGroup
                                        label="Working Condition"
                                        name="workingCondition"
                                        options={['Yes', 'No']}
                                        value={formData.workingCondition}
                                        onChange={handleInputChange}
                                        grid={2}
                                    />
                                    <RadioGroup
                                        label="AMC/CMC Available"
                                        name="amcAvailable"
                                        options={['Yes', 'No']}
                                        value={formData.amcAvailable}
                                        onChange={handleInputChange}
                                        grid={2}
                                    />
                                </div>
                            </div>
                        </section>

                        {/* 4. Sale Logistics */}
                        <section>
                            <SectionTitle number="4" title="Sale Logistics" />
                            <div className="space-y-6">
                                <RadioGroup
                                    label="When do you want to sell?"
                                    name="saleTimeline"
                                    options={[
                                        'Immediately (within 1 week)',
                                        'Within 1 month',
                                        'Within 3 Months',
                                        'Just Enquiring Price'
                                    ]}
                                    value={formData.saleTimeline}
                                    onChange={handleInputChange}
                                    grid={2}
                                />
                                <RadioGroup
                                    label="Will you be able to support in Installation/ Transport?"
                                    name="supportInstall"
                                    options={['Yes', 'No']}
                                    value={formData.supportInstall}
                                    onChange={handleInputChange}
                                    grid={2}
                                />
                            </div>
                        </section>

                        {/* 5. Additional Info */}
                        <section>
                            <SectionTitle number="5" title="Additional Information" />
                            <div className="space-y-6">
                                <TextArea
                                    label="Any Suggestions, Feedback, Remarks, Accessories included etc."
                                    name="remarks"
                                    className="h-32"
                                    placeholder="Type your answer here..."
                                    value={formData.remarks}
                                    onChange={handleInputChange}
                                />

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-[#0B2C4D] block">
                                        Please upload photos of the equipment
                                    </label>
                                    <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 bg-slate-50 text-center hover:bg-slate-100 transition-colors cursor-pointer">
                                        <input
                                            type="file"
                                            name="photos"
                                            onChange={handleInputChange}
                                            className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-[#EA580C] hover:file:bg-orange-100"
                                        />
                                    </div>
                                </div>

                                <div className="bg-blue-50 p-4 rounded-lg flex items-center gap-3 text-sm text-blue-800">
                                    <div className="font-semibold">Need help?</div>
                                    <div>
                                        You can also share details on WhatsApp: <span className="font-bold">{CONTACT_INFO.phone || '+91 98403 24333'}</span>
                                    </div>
                                </div>

                                <label className="flex items-start gap-3 cursor-pointer group">
                                    <input
                                        type="checkbox"
                                        name="termsAccepted"
                                        checked={formData.termsAccepted}
                                        onChange={handleInputChange}
                                        className="mt-1 accent-[#EA580C] w-4 h-4"
                                    />
                                    <span className="text-sm text-slate-600 group-hover:text-[#0B2C4D]">
                                        I agree to the <span className="text-[#EA580C] font-semibold underline">Terms and Conditions</span> for the Sale of Used Ophthalmic Equipment.
                                    </span>
                                </label>
                            </div>
                        </section>

                        <div className="pt-6">
                            <Button
                                variant="primary"
                                className="w-full py-4 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
                            >
                                Submit Valuation Request
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ValuationPage;
