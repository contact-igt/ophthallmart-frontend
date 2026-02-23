import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { HERO_SLIDES } from '../../data/mockData';
import Button from '../shared/Button';

const Hero = ({ handleNav }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative bg-white overflow-hidden h-[600px] flex items-center">
            <div className="absolute inset-0 transition-opacity duration-1000">
                <div className="max-w-7xl mx-auto px-4 h-full flex flex-col md:flex-row items-center gap-12 relative z-10">
                    <div className="md:w-1/2 space-y-6 animate-in slide-in-from-left-10 duration-700 text-left pt-12 md:pt-0">
                        <h4 className="text-[#EA580C] font-bold tracking-[0.2em] text-xs uppercase mb-2 bg-orange-50 inline-block px-3 py-1 rounded">
                            {HERO_SLIDES[currentSlide].subHead}
                        </h4>
                        <div className="space-y-2 leading-tight">
                            {HERO_SLIDES[currentSlide].title && (
                                <h2 className="text-3xl md:text-5xl font-light text-slate-500 mb-1">
                                    {HERO_SLIDES[currentSlide].title}
                                </h2>
                            )}
                            <h1 className="text-5xl md:text-7xl font-[800] text-[#0B2C4D] tracking-tight">
                                {HERO_SLIDES[currentSlide].subtitle}
                            </h1>
                        </div>
                        <p className="text-slate-500 text-lg max-w-lg leading-relaxed pt-4 font-light uppercase">
                            {HERO_SLIDES[currentSlide].desc}
                        </p>
                        <div className="pt-6">
                            <Button variant="primary" className="px-10 py-4 text-sm" onClick={() => handleNav('shop')}>
                                {HERO_SLIDES[currentSlide].buttonText || 'Explore Products'} <ArrowRight size={16} className="ml-1" />
                            </Button>
                        </div>
                    </div>
                    <div className="md:w-1/2 relative animate-in fade-in zoom-in duration-1000 flex justify-center items-center h-[450px]">
                        <img
                            src={HERO_SLIDES[currentSlide].image}
                            alt="Slide"
                            className="h-full w-full object-contain drop-shadow-2xl"
                        />
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
                {HERO_SLIDES.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`w-3 h-3 rounded-full transition-all ${idx === currentSlide ? 'bg-[#EA580C] w-8' : 'bg-slate-300'}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;
