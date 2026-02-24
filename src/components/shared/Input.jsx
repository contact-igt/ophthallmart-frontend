import React, { forwardRef } from 'react';

const baseClass =
    'w-full border rounded px-3 py-2 text-sm outline-none transition-colors';
const normalBorder = 'border-slate-300 focus:border-[#EA580C] focus:ring-1 focus:ring-[#EA580C]';
const errorBorder = 'border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-400 bg-red-50';

export const TextInput = forwardRef(({ label, type = 'text', className = '', error, ...props }, ref) => (
    <div className="space-y-1">
        {label && (
            <label className="text-xs font-bold text-slate-500 uppercase">
                {label}
            </label>
        )}
        <input
            ref={ref}
            type={type}
            className={`${baseClass} ${error ? errorBorder : normalBorder} ${className}`}
            {...props}
        />
        {error && <p className="text-xs text-red-500 font-medium mt-0.5">{error}</p>}
    </div>
));

export const TextArea = forwardRef(({ label, className = '', error, ...props }, ref) => (
    <div className="space-y-1">
        {label && (
            <label className="text-xs font-bold text-slate-500 uppercase">
                {label}
            </label>
        )}
        <textarea
            ref={ref}
            className={`${baseClass} ${error ? errorBorder : normalBorder} ${className}`}
            {...props}
        />
        {error && <p className="text-xs text-red-500 font-medium mt-0.5">{error}</p>}
    </div>
));

export const Select = forwardRef(({ label, options = [], className = '', error, ...props }, ref) => (
    <div className="space-y-1">
        {label && (
            <label className="text-xs font-bold text-slate-500 uppercase">
                {label}
            </label>
        )}
        <select
            ref={ref}
            className={`${baseClass} ${error ? errorBorder : normalBorder} ${className}`}
            {...props}
        >
            {options.map((option, idx) => (
                <option
                    key={idx}
                    value={option.value !== undefined ? option.value : option}
                    disabled={option.disabled}
                >
                    {option.label || option}
                </option>
            ))}
        </select>
        {error && <p className="text-xs text-red-500 font-medium mt-0.5">{error}</p>}
    </div>
));

TextInput.displayName = 'TextInput';
TextArea.displayName = 'TextArea';
Select.displayName = 'Select';
