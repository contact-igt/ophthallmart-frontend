import React, { useMemo, useState, useEffect, useRef } from 'react';
import { ChevronRight, ChevronLeft, Star, Heart, CheckCircle, Play } from 'lucide-react';
import Button from '../shared/Button';
import ProductCard from '../shared/ProductCard';
import { PRODUCTS } from '../../data/mockData';

const ProductDetailPage = ({ product, onBack, onAdd, enquiryCart = [], onViewDetail }) => {
    const isAdded = useMemo(() =>
        enquiryCart.some(item => item.id === product.id),
        [enquiryCart, product.id]);

    const relatedProducts = useMemo(() => {
        return PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 5);
    }, [product]);

    const sliderRef = useRef(null);

    const scrollSlider = (direction) => {
        if (sliderRef.current) {
            const scrollAmount = direction === 'left' ? -350 : 350;
            sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const isVideo = (url) => url?.toLowerCase().endsWith('.mp4');

    const mediaItems = useMemo(() => {
        const items = [];

        // Add main image or images from array first
        const rawImages = Array.isArray(product.images) ? product.images : [product.image];

        rawImages.forEach(url => {
            if (!url) return;
            const type = isVideo(url) ? 'video' : 'image';
            items.push({ type, url });
        });

        // Add YouTube URL if it exists after images
        if (product.youtubeUrl) {
            items.push({ type: 'youtube', url: product.youtubeUrl });
        }

        // Add explicit videoUrl if it exists and not already added
        if (product.videoUrl) {
            // Avoid duplicates if it's the same videoUrl already added via rawImages
            if (!items.find(i => i.url === product.videoUrl)) {
                items.push({ type: 'video', url: product.videoUrl });
            }
        }

        // Post-process to ensure images truly come first if rawImages mixed them
        return items.sort((a, b) => {
            if (a.type === 'image' && b.type !== 'image') return -1;
            if (a.type !== 'image' && b.type === 'image') return 1;
            return 0;
        });
    }, [product]);

    const [activeIndex, setActiveIndex] = useState(0);
    const [activeTab, setActiveTab] = useState('specifications'); // 'specifications', 'description', 'reviews'

    // Initial media index
    useEffect(() => {
        setActiveIndex(0);
    }, [product]);

    const activeItem = mediaItems[activeIndex] || { type: 'image', url: 'https://placehold.co/600x400?text=No+Media' };

    return (
        <div className="animate-in fade-in py-8 md:py-12">
            <div className="max-w-7xl mx-auto px-4">
                {/* Breadcrumb */}
                <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm text-slate-500 mb-6 md:mb-8 flex-wrap">
                    <span className="cursor-pointer hover:text-[#0B2C4D]" onClick={onBack}>Home</span>
                    <ChevronRight size={14} />
                    <span className="cursor-pointer hover:text-[#0B2C4D]" onClick={onBack}>Products</span>
                    <ChevronRight size={14} />
                    <span className="text-[#EA580C] font-semibold">{product.name}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-10 md:mb-16">
                    {/* Media Gallery */}
                    <div className="space-y-4">
                        <div className="bg-slate-50 rounded-xl p-4 md:p-8 flex items-center justify-center border border-slate-100 overflow-hidden min-h-[300px] md:min-h-[400px] relative">
                            {activeItem.type === 'youtube' ? (
                                <div className="w-full h-full flex flex-col items-center">
                                    <iframe
                                        width="100%"
                                        height="350"
                                        src={activeItem.url}
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                        className="rounded-lg shadow-md"
                                    ></iframe>
                                    <div className="mt-4 flex items-center gap-2 text-xs font-bold text-[#EA580C] uppercase tracking-widest">
                                        <span className="w-2 h-2 bg-[#EA580C] rounded-full animate-pulse"></span>
                                        Product Video
                                    </div>
                                </div>
                            ) : activeItem.type === 'video' ? (
                                <div className="w-full h-full flex flex-col items-center">
                                    <video
                                        key={activeItem.url}
                                        src={activeItem.url}
                                        className="max-w-full max-h-[500px] rounded-lg shadow-md"
                                        controls
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                    />
                                    <div className="mt-4 flex items-center gap-2 text-xs font-bold text-[#EA580C] uppercase tracking-widest">
                                        <span className="w-2 h-2 bg-[#EA580C] rounded-full animate-pulse"></span>
                                        Product Video Reel
                                    </div>
                                </div>
                            ) : (
                                <img
                                    src={activeItem.url}
                                    alt={product.name}
                                    className="max-w-full max-h-[500px] object-contain mix-blend-multiply transition-opacity duration-300"
                                />
                            )}
                        </div>

                        {/* Thumbnails */}
                        <div className="flex gap-4 overflow-x-auto pb-2">
                            {mediaItems.map((item, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => setActiveIndex(idx)}
                                    className={`relative w-24 h-24 rounded-lg border-2 cursor-pointer flex-shrink-0 flex items-center justify-center bg-white overflow-hidden p-1
                                        ${activeIndex === idx ? 'border-[#EA580C]' : 'border-transparent hover:border-slate-300'}`}
                                >
                                    {item.type === 'youtube' ? (
                                        <div className="w-full h-full bg-slate-900 flex items-center justify-center relative">
                                            <div className="bg-[#EA580C] rounded-full p-2 text-white shadow-lg">
                                                <Play size={16} fill="currentColor" />
                                            </div>
                                            <span className="absolute bottom-1 right-1 text-[8px] text-white bg-black/50 px-1 rounded">YT</span>
                                        </div>
                                    ) : item.type === 'video' ? (
                                        <>
                                            <video src={item.url} className="w-full h-full object-cover opacity-60" muted />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="bg-[#EA580C] rounded-full p-2 text-white shadow-lg">
                                                    <Play size={16} fill="currentColor" />
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <img src={item.url} alt="" className="w-full h-full object-contain mix-blend-multiply" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="space-y-4 md:space-y-6">
                        <div>
                            <span className="text-[#EA580C] font-bold uppercase text-[10px] md:text-xs tracking-wider bg-orange-50 px-3 py-1 rounded-full mb-3 md:mb-4 inline-block">
                                {product.category}
                            </span>
                            <h1 className="text-2xl md:text-4xl font-bold text-[#0B2C4D] mb-3 md:mb-4">{product.name}</h1>
                            <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-sm text-slate-500">
                                <div className="flex text-yellow-400">
                                    <Star size={14} className="md:w-4 md:h-4" fill="currentColor" />
                                    <Star size={14} className="md:w-4 md:h-4" fill="currentColor" />
                                    <Star size={14} className="md:w-4 md:h-4" fill="currentColor" />
                                    <Star size={14} className="md:w-4 md:h-4" fill="currentColor" />
                                    <Star size={14} className="md:w-4 md:h-4" fill="currentColor" />
                                </div>
                                {product.reviews && product.reviews.length > 0 && <span>({product.reviews.length} Reviews)</span>}
                                <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                                <span className="text-green-600 font-medium">In Stock</span>
                            </div>
                        </div>

                        <div className="prose text-slate-600 leading-relaxed">
                            <p>
                                {product.fullDescription}
                            </p>

                            {product.features && product.features.length > 0 && (
                                <ul className="mt-4 space-y-2">
                                    {product.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                                            <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        <div className="border-t border-b border-slate-100 py-4 md:py-6 space-y-3 md:space-y-4">
                            <div className="flex justify-between text-sm">
                                <span className="font-bold text-[#0B2C4D]">Price:</span>
                                <span className="text-[#EA580C] font-bold">{product.price || 'Enquire'}</span>
                            </div>
                            {product.warranty && (
                                <div className="flex justify-between text-sm">
                                    <span className="font-bold text-[#0B2C4D]">Warranty:</span>
                                    <span className="text-green-600 font-medium">{product.warranty}</span>
                                </div>
                            )}
                            {product.year && (
                                <div className="flex justify-between text-sm">
                                    <span className="font-bold text-[#0B2C4D]">Year / Model:</span>
                                    <span>{product.year}</span>
                                </div>
                            )}
                            {product.condition && (
                                <div className="flex justify-between text-sm">
                                    <span className="font-bold text-[#0B2C4D]">Condition:</span>
                                    <span>{product.condition}</span>
                                </div>
                            )}
                            {product.location && (
                                <div className="flex justify-between text-sm">
                                    <span className="font-bold text-[#0B2C4D]">Location:</span>
                                    <span>{product.location}</span>
                                </div>
                            )}
                        </div>

                        <div className="flex gap-4 pt-4">
                            <button
                                onClick={() => onAdd(product)}
                                className={`flex-1 py-3 px-4 md:px-6 rounded-lg font-bold text-sm md:text-base transition-all duration-200 flex items-center justify-center gap-2 group
                                    ${isAdded
                                        ? 'bg-green-600 hover:bg-red-500 text-white'
                                        : 'bg-[#EA580C] hover:bg-[#d94e25] text-white'
                                    }`}
                            >
                                {isAdded ? (
                                    <>
                                        <CheckCircle size={18} className="md:w-5 md:h-5" />
                                        <span className="group-hover:hidden">Added to Cart</span>
                                        <span className="hidden group-hover:inline">Remove from Cart</span>
                                    </>
                                ) : (
                                    'Add to Enquiry Cart'
                                )}
                            </button>
                            <Button variant="outline" className="px-4">
                                <Heart />
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="mb-10 md:mb-16">
                    <div className="flex border-b border-slate-200 mb-6 md:mb-8 overflow-x-auto hide-scrollbar text-sm md:text-base">
                        <button
                            onClick={() => setActiveTab('specifications')}
                            className={`px-4 md:px-8 py-3 md:py-4 font-bold whitespace-nowrap transition-colors duration-200 ${activeTab === 'specifications'
                                ? 'border-b-2 border-[#EA580C] text-[#0B2C4D]'
                                : 'text-slate-500 hover:text-[#0B2C4D]'
                                }`}
                        >
                            Specifications
                        </button>
                        <button
                            onClick={() => setActiveTab('description')}
                            className={`px-4 md:px-8 py-3 md:py-4 font-bold whitespace-nowrap transition-colors duration-200 ${activeTab === 'description'
                                ? 'border-b-2 border-[#EA580C] text-[#0B2C4D]'
                                : 'text-slate-500 hover:text-[#0B2C4D]'
                                }`}
                        >
                            Description
                        </button>
                        <button
                            onClick={() => setActiveTab('reviews')}
                            className={`px-4 md:px-8 py-3 md:py-4 font-bold whitespace-nowrap transition-colors duration-200 ${activeTab === 'reviews'
                                ? 'border-b-2 border-[#EA580C] text-[#0B2C4D]'
                                : 'text-slate-500 hover:text-[#0B2C4D]'
                                }`}
                        >
                            Reviews ({product.reviews ? product.reviews.length : 0})
                        </button>
                    </div>

                    <div className="bg-slate-50 p-4 md:p-8 rounded-xl border border-slate-100 min-h-[300px]">
                        {activeTab === 'specifications' && (
                            <div className="animate-in fade-in slide-in-from-bottom-2">
                                {product.specs && product.specs.length > 0 ? (
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-xs md:text-sm text-left">
                                            <tbody>
                                                {product.specs.map((spec, idx) => (
                                                    <tr key={idx} className="border-b border-slate-200 last:border-0 hover:bg-slate-100 transition-colors">
                                                        <td className="py-3 md:py-4 pr-2 md:pr-4 font-bold text-[#0B2C4D] w-1/3 align-top">{spec.label}</td>
                                                        <td className="py-3 md:py-4 text-slate-600 align-top">{spec.value}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                ) : (
                                    <div className="text-center text-slate-500 py-8">
                                        Detailed specifications are not available for this product yet.
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Description Tab */}
                        {activeTab === 'description' && (
                            <div className="animate-in fade-in slide-in-from-bottom-2 prose text-slate-600 max-w-none">
                                <h3 className="text-xl font-bold text-[#0B2C4D] mb-4">Product Details</h3>
                                <p className="whitespace-pre-wrap leading-relaxed">
                                    {product.fullDescription || `Detailed description for ${product.name} is coming soon. Please contact us for more information.`}
                                </p>
                            </div>
                        )}

                        {/* Reviews Tab */}
                        {activeTab === 'reviews' && (
                            <div className="animate-in fade-in slide-in-from-bottom-2 space-y-6">
                                <h3 className="text-xl font-bold text-[#0B2C4D] mb-6">Customer Reviews</h3>

                                {product.reviews && product.reviews.length > 0 ? (
                                    <>
                                        {product.reviews.map(review => (
                                            <div key={review.id} className="bg-white p-6 rounded-lg border border-slate-100 shadow-sm">
                                                <div className="flex items-start justify-between mb-3">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 rounded-full bg-[#0B2C4D] flex items-center justify-center text-white font-bold">
                                                            {review.initials}
                                                        </div>
                                                        <div>
                                                            <h4 className="font-bold text-[#0B2C4D]">{review.author}</h4>
                                                            <p className="text-xs text-slate-500">Verified Buyer • {review.date}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex text-yellow-400">
                                                        {[...Array(5)].map((_, i) => (
                                                            <Star
                                                                key={i}
                                                                size={14}
                                                                fill="currentColor"
                                                                className={i < review.rating ? "text-yellow-400" : "text-slate-200"}
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                                <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-wrap">
                                                    {review.content}
                                                </p>
                                            </div>
                                        ))}
                                    </>
                                ) : (
                                    <div className="text-center py-12">
                                        <div className="flex justify-center text-yellow-400 mb-4">
                                            <Star size={32} fill="currentColor" className="text-slate-200" />
                                            <Star size={32} fill="currentColor" className="text-slate-200" />
                                            <Star size={32} fill="currentColor" className="text-slate-200" />
                                            <Star size={32} fill="currentColor" className="text-slate-200" />
                                            <Star size={32} fill="currentColor" className="text-slate-200" />
                                        </div>
                                        <h3 className="text-lg font-bold text-[#0B2C4D] mb-2">No reviews yet</h3>
                                        <p className="text-slate-500 mb-6">Be the first to review this product!</p>
                                    </div>
                                )}

                                {/* Write Review Button */}
                                <div className="pt-6 border-t border-slate-100 flex justify-between items-center mt-6">
                                    <p className="text-sm text-slate-500">Have you used this product?</p>
                                    <Button variant="outline" className="text-[#EA580C] border-[#EA580C] hover:bg-orange-50 px-6 font-bold">
                                        Write a Review
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Related Products Slider */}
                {relatedProducts.length > 0 && (
                    <div className="mt-12 md:mt-20 border-t border-slate-200 pt-10 md:pt-16 animate-in fade-in slide-in-from-bottom-4 relative">
                        <div className="flex items-center justify-between mb-6 md:mb-8">
                            <h2 className="text-xl md:text-3xl font-bold text-[#0B2C4D] bg-clip-text text-transparent bg-gradient-to-r from-[#0B2C4D] to-[#1e4068]">
                                Related Products
                            </h2>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => scrollSlider('left')}
                                    className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-[#0B2C4D] hover:bg-[#EA580C] hover:text-white hover:border-[#EA580C] transition-colors"
                                    aria-label="Scroll Left"
                                >
                                    <ChevronLeft size={20} />
                                </button>
                                <button
                                    onClick={() => scrollSlider('right')}
                                    className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-[#0B2C4D] hover:bg-[#EA580C] hover:text-white hover:border-[#EA580C] transition-colors"
                                    aria-label="Scroll Right"
                                >
                                    <ChevronRight size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Horizontal Scrollable Container */}
                        <div
                            ref={sliderRef}
                            className="flex gap-6 overflow-x-auto pb-8 snap-x hide-scrollbar relative scroll-smooth"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            {relatedProducts.map(relatedProduct => (
                                <div key={relatedProduct.id} className="min-w-[280px] md:min-w-[320px] snap-center flex-shrink-0">
                                    <ProductCard
                                        product={relatedProduct}
                                        onView={onViewDetail}
                                        onAdd={onAdd}
                                        isAdded={enquiryCart.some(item => item.id === relatedProduct.id)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>

    );

};

export default ProductDetailPage;
