import React from 'react';
import { Star, Heart } from 'lucide-react';
import Button from './Button';

const ProductCard = ({ product, onView, onAdd }) => (
    <div className="bg-white rounded-lg shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-all group flex flex-col h-full">
        <div className="relative h-64 bg-slate-50 p-6 flex items-center justify-center cursor-pointer" onClick={() => onView(product)}>
            {product.tag && (
                <span className="absolute top-4 left-4 bg-[#0B2C4D] text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider">
                    {product.tag}
                </span>
            )}
            <img
                src={product.image}
                alt={product.name}
                className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                <button className="p-2 bg-white rounded shadow hover:text-[#EA580C] text-[#0B2C4D]">
                    <Heart size={18} />
                </button>
            </div>
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
                    className="w-full bg-[#EA580C] hover:bg-[#d94e25] text-white font-bold text-xs py-2.5 rounded transition-colors"
                    onClick={() => onAdd(product)}
                >
                    Add to Enquiry
                </button>
            </div>
        </div>
    </div>
);

export default ProductCard;
