import React from 'react';
import { ArrowRight } from 'lucide-react';

const TrendingSection = ({ data, handleNav }) => (
    <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-16 gap-3 md:gap-4">
                <div>
                    <span className="text-[#EA580C] font-bold uppercase text-[10px] md:text-xs tracking-wider">Highlight</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#0B2C4D] mt-1 md:mt-2">TRENDING PRODUCTS</h3>
                </div>
                <button
                    onClick={() => handleNav('products')}
                    className="flex items-center gap-2 text-[#0B2C4D] font-bold hover:text-[#EA580C] transition text-xs md:text-sm uppercase tracking-wide"
                >
                    View All <ArrowRight size={14} className="md:w-4 md:h-4" />
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 text-center">
                {data.map((product) => (
                    <div key={product.id} className="group cursor-pointer">
                        <div className="relative mx-auto w-56 h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-slate-100 shadow-xl group-hover:border-[#EA580C] transition-all duration-300">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <div className="mt-6 md:mt-8 space-y-1 md:space-y-2">
                            <h4 className="text-lg md:text-xl font-bold text-[#0B2C4D] uppercase tracking-tight group-hover:text-[#EA580C] transition-colors px-4">
                                {product.name}
                            </h4>
                            {product.subtitle && (
                                <p className="text-slate-500 text-xs md:text-sm font-medium max-w-xs mx-auto">
                                    {product.subtitle}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default TrendingSection;
