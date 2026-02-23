import React from 'react';
import { CATEGORIES } from '../../data/mockData';

const CategorySection = ({ handleNav, data }) => {
    // Use provided data or fallback to default CATEGORIES
    const categoriesToDisplay = data || CATEGORIES;

    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="text-[#EA580C] font-bold uppercase text-xs tracking-wider">
                        Our Collection
                    </span>
                    <h3 className="text-3xl font-bold text-[#0B2C4D] mt-2">Browse Categories</h3>
                    <div className="w-16 h-1 bg-[#EA580C] mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoriesToDisplay.map((cat) => (
                        <div
                            key={cat.id}
                            onClick={() => handleNav('shop')}
                            className="bg-[#F0F8FF] rounded-2xl p-6 flex justify-between items-center relative overflow-hidden group hover:shadow-xl transition-all duration-300 border border-slate-100 cursor-pointer h-48"
                        >
                            <div className="z-10 relative flex flex-col h-full justify-center w-7/12">
                                <h3 className="font-bold text-[#0B2C4D] text-lg leading-tight group-hover:text-[#EA580C] transition-colors duration-300 mb-4">
                                    {cat.name}
                                </h3>
                                <button className="text-[#EF4444] text-sm font-bold flex items-center gap-1 group-hover:underline mt-auto">
                                    Shop Now <span className="text-lg">+</span>
                                </button>
                            </div>

                            <div className="z-10 relative w-5/12 flex justify-center items-center h-full pl-2">
                                <img
                                    src={cat.image}
                                    alt={cat.name}
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = 'https://placehold.co/200x200/f1f5f9/334155?text=' + cat.name.slice(0, 3).toUpperCase();
                                    }}
                                    className="w-full h-32 object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-500 ease-out"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategorySection;
