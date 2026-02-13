import React from 'react';
import { ChevronRight, Star, Heart } from 'lucide-react';
import Button from '../shared/Button';

const ProductDetailPage = ({ product, onBack, onAdd }) => (
    <div className="animate-in fade-in py-12">
        <div className="max-w-7xl mx-auto px-4">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
                <span className="cursor-pointer hover:text-[#0B2C4D]" onClick={onBack}>Home</span>
                <ChevronRight size={14} />
                <span className="cursor-pointer hover:text-[#0B2C4D]" onClick={onBack}>Shop</span>
                <ChevronRight size={14} />
                <span className="text-[#EA580C] font-semibold">{product.name}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                {/* Image Gallery */}
                <div className="bg-slate-50 rounded-xl p-8 flex items-center justify-center border border-slate-100">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="max-w-full max-h-[500px] object-contain mix-blend-multiply"
                    />
                </div>

                {/* Product Info */}
                <div className="space-y-6">
                    <div>
                        <span className="text-[#EA580C] font-bold uppercase text-xs tracking-wider bg-orange-50 px-3 py-1 rounded-full mb-4 inline-block">
                            {product.category}
                        </span>
                        <h1 className="text-4xl font-bold text-[#0B2C4D] mb-4">{product.name}</h1>
                        <div className="flex items-center gap-4 text-sm text-slate-500">
                            <div className="flex text-yellow-400">
                                <Star size={16} fill="currentColor" />
                                <Star size={16} fill="currentColor" />
                                <Star size={16} fill="currentColor" />
                                <Star size={16} fill="currentColor" />
                                <Star size={16} fill="currentColor" />
                            </div>
                            <span>(24 Reviews)</span>
                            <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                            <span className="text-green-600 font-medium">In Stock</span>
                        </div>
                    </div>

                    <div className="prose text-slate-600 leading-relaxed">
                        <p>
                            Experience superior clinical performance with the {product.name}. Designed for ophthalmologists who demand precision and reliability. Features advanced optics, ergonomic design, and seamless integration with digital documentation systems.
                        </p>
                    </div>

                    <div className="border-t border-b border-slate-100 py-6 space-y-4">
                        <div className="flex justify-between text-sm">
                            <span className="font-bold text-[#0B2C4D]">Model:</span>
                            <span>OM-2024-X</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="font-bold text-[#0B2C4D]">Warranty:</span>
                            <span>1 Year On-site</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="font-bold text-[#0B2C4D]">Shipping:</span>
                            <span>Worldwide via DHL/FedEx</span>
                        </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                        <Button variant="primary" className="flex-1 text-base" onClick={() => onAdd(product)}>
                            Add to Enquiry Cart
                        </Button>
                        <Button variant="outline" className="px-4">
                            <Heart />
                        </Button>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="mb-16">
                <div className="flex border-b border-slate-200 mb-8">
                    <button className="px-8 py-4 border-b-2 border-[#EA580C] text-[#0B2C4D] font-bold">
                        Specifications
                    </button>
                    <button className="px-8 py-4 text-slate-500 hover:text-[#0B2C4D]">Description</button>
                    <button className="px-8 py-4 text-slate-500 hover:text-[#0B2C4D]">Reviews</button>
                </div>
                <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
                    <table className="w-full text-sm text-left">
                        <tbody>
                            <tr className="border-b border-slate-200">
                                <td className="py-3 font-bold text-[#0B2C4D] w-1/4">Optical System</td>
                                <td className="text-slate-600">Galilean changer</td>
                            </tr>
                            <tr className="border-b border-slate-200">
                                <td className="py-3 font-bold text-[#0B2C4D]">Magnification</td>
                                <td className="text-slate-600">6.3x, 10x, 16x, 25x, 40x</td>
                            </tr>
                            <tr className="border-b border-slate-200">
                                <td className="py-3 font-bold text-[#0B2C4D]">Eyepieces</td>
                                <td className="text-slate-600">12.5x Widefield</td>
                            </tr>
                            <tr>
                                <td className="py-3 font-bold text-[#0B2C4D]">Illumination</td>
                                <td className="text-slate-600">LED / Halogen (Optional)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
);

export default ProductDetailPage;
