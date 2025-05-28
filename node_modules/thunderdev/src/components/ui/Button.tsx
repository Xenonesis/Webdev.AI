import React from 'react';
import { motion } from 'framer-motion';
import { ButtonProps } from '../../types';
import { cn } from '../../utils';

const buttonVariants = {
  primary: 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white',
  secondary: 'bg-gray-900/60 backdrop-blur-2xl hover:bg-gray-800/70 border border-blue-500/40 text-blue-100 hover:text-blue-400',
  outline: 'border border-blue-500/40 text-blue-200 hover:text-blue-400 hover:bg-blue-500/10',
};

const buttonSizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  ...props
}) => {
  const baseClasses = 'font-medium rounded-full transition-all duration-200 shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-500/70';
  const variantClasses = buttonVariants[variant];
  const sizeClasses = buttonSizes[size];
  
  const shadowClasses = variant === 'primary' 
    ? 'shadow-blue-500/40 hover:shadow-purple-600/50' 
    : 'shadow-lg hover:shadow-2xl hover:shadow-purple-600/50';

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      className={cn(
        baseClasses,
        variantClasses,
        sizeClasses,
        shadowClasses,
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
};
