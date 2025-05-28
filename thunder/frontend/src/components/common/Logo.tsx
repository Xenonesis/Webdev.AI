import React from 'react';
import { APP_CONFIG } from '../../constants';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

const ThunderDevLogoSVG: React.FC<{ size: string }> = ({ size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="drop-shadow-lg"
  >
    <defs>
      <linearGradient id="thunderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="50%" stopColor="#8B5CF6" />
        <stop offset="100%" stopColor="#EC4899" />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>

    {/* Thunder bolt shape */}
    <path
      d="M55 10 L30 45 L45 45 L40 90 L65 55 L50 55 L55 10 Z"
      fill="url(#thunderGradient)"
      filter="url(#glow)"
      stroke="rgba(96, 165, 250, 0.5)"
      strokeWidth="1"
    />

    {/* Lightning sparks */}
    <circle cx="65" cy="25" r="2" fill="#60A5FA" opacity="0.8">
      <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="75" cy="35" r="1.5" fill="#8B5CF6" opacity="0.6">
      <animate attributeName="opacity" values="0.6;0.2;0.6" dur="1.5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="25" cy="65" r="1.2" fill="#EC4899" opacity="0.7">
      <animate attributeName="opacity" values="0.7;0.3;0.7" dur="1.8s" repeatCount="indefinite"/>
    </circle>
  </svg>
);

const logoSizes = {
  sm: '24',
  md: '32',
  lg: '48',
};

const textSizes = {
  sm: 'text-base',
  md: 'text-lg',
  lg: 'text-2xl',
};

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showText = true,
  className = '',
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      <ThunderDevLogoSVG size={logoSizes[size]} />
      {showText && (
        <span className={`text-blue-400 font-bold ml-2 ${textSizes[size]}`}>
          {APP_CONFIG.NAME}
        </span>
      )}
    </div>
  );
};
