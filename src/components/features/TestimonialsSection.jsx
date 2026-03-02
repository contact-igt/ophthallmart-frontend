import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, User, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../../data/mockData';

const TestimonialsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === TESTIMONIALS.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? TESTIMONIALS.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === TESTIMONIALS.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="bg-white py-12 sm:py-24">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#0B2C4D]">
                        What our clients say ?
                    </h2>
                </div>

                <div className="relative max-w-6xl mx-auto px-12 md:px-16">
                    {/* Navigation Buttons */}
                    <button
                        onClick={prevTestimonial}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-[#00AEEF] hover:bg-[#008ec0] text-white rounded-full flex items-center justify-center transition-colors shadow-lg"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <button
                        onClick={nextTestimonial}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-[#00AEEF] hover:bg-[#008ec0] text-white rounded-full flex items-center justify-center transition-colors shadow-lg"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight size={24} />
                    </button>

                    <div className="overflow-hidden">
                        <div
                            className={`flex transition-transform duration-500 ease-in-out ${currentIndex === 0 ? 'translate-x-0' :
                                currentIndex === 1 ? '-translate-x-full md:-translate-x-1/2' :
                                    currentIndex === 2 ? '-translate-x-[200%] md:-translate-x-full' :
                                        currentIndex === 3 ? '-translate-x-[300%] md:-translate-x-[150%]' :
                                            currentIndex === 4 ? '-translate-x-[400%] md:-translate-x-[200%]' :
                                                currentIndex === 5 ? '-translate-x-[500%] md:-translate-x-[250%]' :
                                                    currentIndex === 6 ? '-translate-x-[600%] md:-translate-x-[300%]' :
                                                        currentIndex === 7 ? '-translate-x-[700%] md:-translate-x-[350%]' : ''
                                }`}
                        >
                            {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, index) => (
                                <div
                                    key={`${testimonial.id}-${index}`}
                                    className="w-full md:w-1/2 flex-shrink-0 px-2 md:px-4"
                                >
                                    <div className="h-full bg-slate-50 border-2 border-[#00AEEF] rounded-3xl p-8 md:p-10 relative flex flex-col justify-between">
                                        <div
                                            className="text-slate-600 text-base md:text-lg leading-relaxed mb-10 z-10 relative whitespace-pre-line line-clamp-5"
                                            dangerouslySetInnerHTML={{ __html: testimonial.quote }}
                                        />

                                        <div className="flex items-center gap-4 z-10">
                                            <div className="w-16 h-16 rounded-full flex-shrink-0 bg-slate-200 border-2 border-white shadow-md flex items-center justify-center text-slate-400 overflow-hidden">
                                                {testimonial.image ? (
                                                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                                                ) : (
                                                    <User size={32} />
                                                )}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-[#0B2C4D] text-lg">
                                                    {testimonial.name}
                                                </h4>
                                                <div
                                                    className="text-sm font-medium text-slate-500 mt-1"
                                                    dangerouslySetInnerHTML={{ __html: testimonial.title }}
                                                />
                                            </div>
                                        </div>

                                        {/* Large Quote Icon Watermark/Decoration */}
                                        <div className="absolute top-1/2 right-6 -translate-y-1/2 text-[#00AEEF] opacity-[0.05] pointer-events-none">
                                            <Quote size={120} className="rotate-180 fill-current" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
