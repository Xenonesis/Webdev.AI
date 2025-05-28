import React from 'react';
import { Logo } from '../common/Logo';

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  return (
    <nav className={`w-full max-w-4xl mb-6 sm:mb-10 relative z-20 ${className}`}>
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center mb-4 sm:mb-0">
          <Logo size="md" />
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          {/* Navigation items can be added here in the future */}
        </div>
      </div>
    </nav>
  );
};
