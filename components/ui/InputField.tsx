import React from 'react';

type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export default function InputField({ label, id, className = '', ...props }: InputFieldProps) {
  return (
    <div className={`flex flex-col gap-2 w-full ${className}`}>
      <label htmlFor={id} className="label-sm text-on-surface tracking-widest uppercase">
        {label}
      </label>
      <input
        id={id}
        className="w-full bg-transparent border-b border-outline-variant/40 py-3 text-on-surface body-md rounded-none focus:outline-none focus:border-b-2 focus:border-primary focus:shadow-[0_4px_15px_-3px_rgba(233,194,85,0.15)] transition-all duration-300 placeholder:text-on-surface-variant/50"
        {...props}
      />
    </div>
  );
}
