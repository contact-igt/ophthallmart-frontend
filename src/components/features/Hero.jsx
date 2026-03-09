import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_SLIDES, PRODUCTS } from '../../data/mockData';
import Button from '../shared/Button';

const Hero = ({ handleNav, handleProductView, handleSearch }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const dragX = React.useRef(0);
    const isDragging = React.useRef(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [currentSlide]);

    const handleStart = (clientX) => {
        dragX.current = clientX;
        isDragging.current = true;
    };

    const handleEnd = (clientX) => {
        if (!isDragging.current) return;

        const diff = dragX.current - clientX;
        const minSwipe = 50;

        if (diff > minSwipe) {
            // Swipe Left -> Next
            setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
        } else if (diff < -minSwipe) {
            // Swipe Right -> Prev
            setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
        }

        isDragging.current = false;
    };

    const handleSlideClick = () => {
        // Prevent click when ending a drag
        if (isDragging.current) return;

        const slide = HERO_SLIDES[currentSlide];
        if (slide.linkType === 'external' && slide.link) {
            window.open(slide.link, '_blank', 'noopener,noreferrer');
        } else if (slide.linkType === 'product' && slide.link && handleProductView) {
            const product = PRODUCTS.find(p => p.id === slide.link);
            if (product) {
                handleProductView(product);
            } else {
                handleNav('shop');
            }
        } else if (slide.linkType === 'search' && slide.link && handleSearch) {
            handleSearch(slide.link);
        } else if (slide.linkType === 'page' && slide.link) {
            handleNav(slide.link);
        } else {
            handleNav('shop');
        }
    };

    return (
        <section
            className="relative bg-white overflow-hidden min-h-[750px] md:h-[600px] flex items-center py-12 md:py-0 select-none cursor-pointer active:cursor-grabbing"
            onTouchStart={(e) => handleStart(e.touches[0].clientX)}
            onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientX)}
            onMouseDown={(e) => handleStart(e.clientX)}
            onMouseUp={(e) => handleEnd(e.clientX)}
        >
            <div className="absolute inset-0 transition-opacity duration-1000">
                <div className="max-w-7xl mx-auto px-4 h-full flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10 pointer-events-none">
                    <div key={`text-${currentSlide}`} className="md:w-1/2 space-y-4 md:space-y-6 animate-in slide-in-from-left-10 duration-700 text-left pt-16 md:pt-0 pb-8 md:pb-0 pointer-events-auto">
                        {HERO_SLIDES[currentSlide].subHead && (
                            <h4 className="text-[#EA580C] font-bold tracking-[0.2em] text-xs uppercase mb-2 bg-orange-50 inline-block px-3 py-1 rounded">
                                {HERO_SLIDES[currentSlide].subHead}
                            </h4>
                        )}
                        <div className="space-y-2 leading-tight">
                            {HERO_SLIDES[currentSlide].title && (
                                <h2 className="text-2xl md:text-5xl font-light text-slate-500 mb-1">
                                    {HERO_SLIDES[currentSlide].title}
                                </h2>
                            )}
                            <h1 className="text-3xl sm:text-5xl md:text-7xl font-[800] text-[#0B2C4D] tracking-tight">
                                {HERO_SLIDES[currentSlide].subtitle}
                            </h1>
                        </div>
                        <div className="text-slate-500 text-base md:text-lg max-w-lg leading-relaxed pt-2 md:pt-4 font-light uppercase" dangerouslySetInnerHTML={{ __html: HERO_SLIDES[currentSlide].desc }} />
                        <div className="pt-4 md:pt-6">
                            <Button variant="primary" className="px-8 md:px-10 py-3 md:py-4 text-sm w-full md:w-auto flex justify-center" onClick={handleSlideClick}>
                                {HERO_SLIDES[currentSlide].buttonText || 'Explore Products'} <ArrowRight size={16} className="ml-2" />
                            </Button>
                        </div>
                    </div>
                    <div key={`img-${currentSlide}`} className="md:w-1/2 relative animate-in fade-in zoom-in duration-1000 flex justify-center items-center h-[250px] md:h-[450px] w-full mt-4 md:mt-0 pointer-events-auto">
                        <img
                            src={HERO_SLIDES[currentSlide].image}
                            alt="Slide"
                            className="h-full w-full object-contain drop-shadow-2xl cursor-pointer pointer-events-none"
                            onClick={handleSlideClick}
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

            {/* Functional Navigation Arrows for better UX */}
            <button
                className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center bg-white text-slate-400 hover:text-[#EA580C] rounded-full shadow-xl border border-slate-100 transition-all duration-300 transform hover:scale-110 active:scale-95 md:flex hidden"
                onClick={() => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
                aria-label="Previous Slide"
            >
                <ChevronLeft size={28} />
            </button>
            <button
                className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center bg-white text-slate-400 hover:text-[#EA580C] rounded-full shadow-xl border border-slate-100 transition-all duration-300 transform hover:scale-110 active:scale-95 md:flex hidden"
                onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
                aria-label="Next Slide"
            >
                <ChevronRight size={28} />
            </button>
        </section>
    );
};

export default Hero;
