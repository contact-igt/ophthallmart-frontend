import React from 'react';
import { Activity, Stethoscope, Settings, Eye, Briefcase, CheckCircle } from 'lucide-react';
import { CATEGORIES } from '../../data/mockData';

// Icon mapping
const iconMap = {
    Activity,
    Stethoscope,
    Settings,
    Eye,
    Briefcase,
    CheckCircle
};

const CategorySection = ({ handleNav }) => (
    <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
                <span className="text-[#EA580C] font-bold uppercase text-xs tracking-wider">
                    Comprehensive Solutions
                </span>
                <h3 className="text-3xl font-bold text-[#0B2C4D] mt-2">Browse by Category</h3>
                <div className="w-16 h-1 bg-[#EA580C] mx-auto mt-4"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {CATEGORIES.map((cat) => {
                    const IconComponent = iconMap[cat.icon];
                    return (
                        <div
                            key={cat.id}
                            onClick={() => handleNav('shop')}
                            className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-[#EA580C] cursor-pointer flex flex-col items-center text-center gap-4 h-full"
                        >
                            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-[#0B2C4D] group-hover:bg-[#0B2C4D] group-hover:text-white transition-colors duration-300">
                                {IconComponent && <IconComponent />}
                            </div>
                            <h4 className="font-bold text-[#0B2C4D] text-sm leading-tight">{cat.name}</h4>
                        </div>
                    );
                })}
            </div>
        </div>
    </section>
);

export default CategorySection;
