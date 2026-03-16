import React from 'react';
import { Star, CheckCircle } from 'lucide-react';

const ProductCard = ({ product, onView, onAdd, isAdded = false }) => (
    <div className="bg-white rounded-lg shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-all group flex flex-col h-full">
        <div className="relative h-64 bg-slate-50 p-6 flex items-center justify-center cursor-pointer" onClick={() => onView(product)}>
            {product.tag && (
                <span className="absolute top-4 left-4 bg-[#0B2C4D] text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider z-10">
                    {product.tag}
                </span>
            )}
            {product.isSoldOut && (
                <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px] z-10 flex flex-col items-center justify-center">
                    <span className="bg-red-600/90 text-white text-sm font-black px-6 py-2 uppercase tracking-widest rounded shadow-lg transform -rotate-12 border-2 border-white">
                        Sold Out
                    </span>
                </div>
            )}
            {(() => {
                const mediaUrl = product.videoUrl || product.image;
                const isVideo = mediaUrl?.toLowerCase().endsWith('.mp4');
                
                if (isVideo) {
                    return (
                        <video
                            src={mediaUrl}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            autoPlay
                            muted
                            loop
                            playsInline
                        />
                    );
                }
                return (
                    <img
                        src={product.image}
                        alt={product.name}
                        className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                        onError={e => { e.target.onerror = null; e.target.src = 'https://placehold.co/200x200/f1f5f9/334155?text=IMG'; }}
                    />
                );
            })()}
        </div>
        <div className="p-6 flex-1 flex flex-col">
            <div className="text-[10px] text-[#EA580C] font-bold mb-2 uppercase tracking-wider">
                {product.category}
            </div>
            <h4
                className="font-bold text-[#0B2C4D] text-lg mb-2 leading-tight cursor-pointer hover:text-[#EA580C] transition-colors"
                onClick={() => onView(product)}
            >
                {product.name}
            </h4>
            <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        size={14}
                        className={i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-slate-200"}
                    />
                ))}
            </div>
            <div className="mt-auto grid grid-cols-2 gap-2 pt-4 border-t border-slate-100">
                <button
                    className="w-full bg-[#67C3E4] hover:bg-[#5bbad5] text-white font-bold text-xs py-2.5 rounded transition-colors"
                    onClick={() => onView(product)}
                >
                    Read more
                </button>
                <button
                    className={`w-full font-bold text-xs py-2.5 rounded transition-all duration-200 flex items-center justify-center gap-1.5
                        ${product.isSoldOut
                            ? 'bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed'
                            : isAdded
                                ? 'bg-green-600 hover:bg-red-500 text-white group/addbtn'
                                : 'bg-[#EA580C] hover:bg-[#d94e25] text-white'
                        }`}
                    onClick={(e) => {
                        if (product.isSoldOut) { e.stopPropagation(); return; }
                        onAdd(product);
                    }}
                    disabled={product.isSoldOut}
                    title={product.isSoldOut ? 'Currently Out of Stock' : (isAdded ? 'Click to remove from enquiry' : 'Add to enquiry')}
                >
                    {product.isSoldOut ? (
                        'Out of Stock'
                    ) : isAdded ? (
                        <>
                            <CheckCircle size={13} />
                            <span className="group-hover/addbtn:hidden">Added</span>
                            <span className="hidden group-hover/addbtn:inline">Remove</span>
                        </>
                    ) : (
                        'Add to Enquiry'
                    )}
                </button>
            </div>
        </div>
    </div>
);

export default ProductCard;
