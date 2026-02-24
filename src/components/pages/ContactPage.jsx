import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import Button from '../shared/Button';
import { TextInput, TextArea } from '../shared/Input';
import { CONTACT_INFO } from '../../data/constants';
import { postToSheet } from '../../utils/postToSheet';

const ContactPage = ({ onSuccess }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            message: '',
        }
    });

    const [isLoading, setIsLoading] = useState(false);
    const [submitError, setSubmitError] = useState('');

    // ── Submission ──────────────────────────────────────────────────────────
    const onSubmit = async (data) => {
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
            form_type: 'contact',
            name: `${data.firstName} ${data.lastName}`,
            email: data.email,
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
        <div className="animate-in fade-in py-16 bg-slate-50">
            <div className="max-w-4xl mx-auto px-4">
                <div className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                    <div className="bg-[#0B2C4D] text-white p-10 md:w-2/5 flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                            <p className="text-blue-200 text-sm mb-8">
                                Fill up the form and our Team will get back to you within 24 hours.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <Phone size={18} className="text-[#EA580C]" /> {CONTACT_INFO.phone}
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail size={18} className="text-[#EA580C]" /> {CONTACT_INFO.email}
                                </div>
                                <div className="flex items-start gap-3">
                                    <MapPin size={18} className="text-[#EA580C] mt-1" /> {CONTACT_INFO.address}
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4 mt-8">
                            <Facebook size={20} className="hover:text-[#EA580C] cursor-pointer" />
                            <Twitter size={20} className="hover:text-[#EA580C] cursor-pointer" />
                            <Instagram size={20} className="hover:text-[#EA580C] cursor-pointer" />
                            <Linkedin size={20} className="hover:text-[#EA580C] cursor-pointer" />
                        </div>
                    </div>
                    <div className="p-10 md:w-3/5">
                        <h2 className="text-2xl font-bold text-[#0B2C4D] mb-6">Send us a Message</h2>

                        {submitError && (
                            <div className="flex items-center gap-2 bg-red-50 text-red-700 border border-red-200 rounded-lg px-4 py-3 mb-5 text-sm">
                                <AlertCircle size={16} className="flex-shrink-0" />
                                {submitError}
                            </div>
                        )}

                        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <TextInput
                                    label="First Name *"
                                    placeholder="First Name"
                                    error={errors.firstName?.message}
                                    {...register('firstName', {
                                        required: 'First name is required.',
                                        validate: value => value.trim() !== '' || 'First name cannot be empty.'
                                    })}
                                    className="border-b border-t-0 border-l-0 border-r-0 rounded-none px-0"
                                />
                                <TextInput
                                    label="Last Name *"
                                    placeholder="Last Name"
                                    error={errors.lastName?.message}
                                    {...register('lastName', {
                                        required: 'Last name is required.',
                                        validate: value => value.trim() !== '' || 'Last name cannot be empty.'
                                    })}
                                    className="border-b border-t-0 border-l-0 border-r-0 rounded-none px-0"
                                />
                            </div>
                            <TextInput
                                label="Email *"
                                type="email"
                                placeholder="Email Address"
                                error={errors.email?.message}
                                {...register('email', {
                                    required: 'Email is required.',
                                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email address.' }
                                })}
                                className="border-b border-t-0 border-l-0 border-r-0 rounded-none px-0"
                            />
                            <TextArea
                                label="Message *"
                                placeholder="Your Message"
                                error={errors.message?.message}
                                {...register('message', {
                                    required: 'Message is required.',
                                    validate: value => value.trim() !== '' || 'Message cannot be empty.',
                                    minLength: { value: 5, message: 'Message must be at least 5 characters.' }
                                })}
                                className="border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 h-24 resize-none"
                            />
                            <div className="pt-4">
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full py-3 px-6 rounded font-semibold text-sm text-white bg-[#0B2C4D] hover:bg-[#1a4a75] disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center gap-2"
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2 size={18} className="animate-spin" />
                                            Sending…
                                        </>
                                    ) : (
                                        <>
                                            <Send size={16} />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
