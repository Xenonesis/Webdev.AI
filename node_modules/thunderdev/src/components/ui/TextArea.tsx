import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils';

interface TextAreaProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
  className?: string;
  disabled?: boolean;
}

export const TextArea: React.FC<TextAreaProps> = ({
  value,
  onChange,
  placeholder,
  rows = 4,
  className = '',
  disabled = false,
}) => {
  return (
    <motion.textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={rows}
      disabled={disabled}
      className={cn(
        'w-full p-4 sm:p-6 sm:px-16 bg-transparent text-blue-100 rounded-xl border-none placeholder-blue-200/60 focus:outline-none focus:ring-4 focus:ring-blue-500/70 transition-all duration-500 text-base sm:text-lg resize-none',
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      whileFocus={{ scale: 1.03, boxShadow: '0 0 20px rgba(96, 165, 250, 0.5)' }}
    />
  );
};
