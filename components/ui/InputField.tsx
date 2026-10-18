import React from "react";

/** Shared v2 form-control styling: no box, one hairline underline that turns brass on focus. */
export const fieldClasses =
  "w-full bg-transparent border-0 border-b border-line py-3 min-h-[52px] text-ivory body-lg rounded-none [color-scheme:dark] focus:outline-none focus:border-brass transition-colors duration-300 placeholder:text-mist/60";

export const fieldLabelClasses = "eyebrow text-mist";

type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export default function InputField({ label, id, className = "", required, ...props }: InputFieldProps) {
  return (
    <div className={`flex flex-col gap-1 w-full ${className}`}>
      <label htmlFor={id} className={fieldLabelClasses}>
        {label}
        {required && (
          <span className="text-brass ml-1" aria-hidden="true">
            *
          </span>
        )}
      </label>
      <input
        id={id}
        required={required}
        aria-required={required ? "true" : undefined}
        className={fieldClasses}
        {...props}
      />
    </div>
  );
}
