import React from 'react';

export const TextInput = ({ label, type = "text", className = "", ...props }) => (
    <div className="space-y-1">
        {label && <label className="text-xs font-bold text-slate-500 uppercase">{label}</label>}
        <input
            type={type}
            className={`w-full border border-slate-300 rounded px-3 py-2 text-sm outline-none focus:border-[#EA580C] focus:ring-1 focus:ring-[#EA580C] ${className}`}
            {...props}
        />
    </div>
);

export const TextArea = ({ label, className = "", ...props }) => (
    <div className="space-y-1">
        {label && <label className="text-xs font-bold text-slate-500 uppercase">{label}</label>}
        <textarea
            className={`w-full border border-slate-300 rounded px-3 py-2 text-sm outline-none focus:border-[#EA580C] focus:ring-1 focus:ring-[#EA580C] ${className}`}
            {...props}
        />
    </div>
);

export const Select = ({ label, options = [], className = "", ...props }) => (
    <div className="space-y-1">
        {label && <label className="text-xs font-bold text-slate-500 uppercase">{label}</label>}
        <select
            className={`w-full border border-slate-300 rounded px-3 py-2 text-sm outline-none focus:border-[#EA580C] focus:ring-1 focus:ring-[#EA580C] ${className}`}
            {...props}
        >
            {options.map((option, idx) => (
                <option key={idx} value={option.value || option}>
                    {option.label || option}
                </option>
            ))}
        </select>
    </div>
);
