'use client';

import { FC } from 'react';

interface FancyInputProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  onClick: () => void;
  button?: boolean;
}

const FancyInput: FC<FancyInputProps> = ({
  value,
  onChange,
  onClick,
  placeholder,
  button,
}) => {
  return (
    <div className="relative max-w-[350px] border-2 border-black bg-[#48B2F8] p-5 flex items-center gap-4 rounded-tr-[25px] rounded-bl-[25px] rounded-tl-[10px] rounded-br-[10px] shadow-[3px_3px_0_0_#000] transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:rotate-x-[5deg] hover:shadow-[10px_10px_0_-4px_#FFCA3A,10px_10px_0_0_#000]">

      <input
        type="number"
        value={value}
        onPaste={(e) => e.preventDefault()}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || 'Enter Code #'}
        className="text-[11px] sm:text-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-full border-2 border-black bg-white px-4 py-2 text-base text-black outline-none transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] translate-z-[10px] z-10 font-opensans placeholder:uppercase placeholder:font-bold placeholder:text-[#666] hover:bg-[#f0f0f0] focus:bg-[#f0f0f0] hover:-translate-x-px hover:shadow-[3px_3px_0_0_#000]"
      />

      {button && (
        <button
          onClick={onClick}
          type="button"
          className="rounded-tr-lg rounded-bl-lg rounded-tl-sm rounded-br-sm z-10 cursor-pointer border-2 h-[42px] border-black bg-white px-3 py-1 text-sm font-bold font-opensans uppercase transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] translate-z-[10px] hover:-translate-x-px hover:-translate-y-px hover:translate-z-[2px] hover:shadow-[3px_3px_0_0_#000]"
        >
          Check
        </button>
      )}
    </div>
  );
};

export default FancyInput;
