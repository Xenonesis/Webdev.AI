import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Header,
  Lightning,
  PromptInput,
  RecommendationChips
} from '../components';
import { useResponsive } from '../hooks';
import { ROUTES, ANIMATIONS } from '../constants';
import { handleError } from '../utils';
import '../styles/globals.css';

export const Home: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const navigate = useNavigate();
  const { isMobile } = useResponsive();

  const handleSubmit = () => {
    try {
      if (prompt.trim()) {
        // Navigate to builder
        navigate(ROUTES.BUILDER, { state: { prompt } });

        // Clear prompt
        setPrompt('');
      }
    } catch (error) {
      handleError(error, 'Home - handleSubmit');
    }
  };

  const handleFileUpload = (file: File) => {
    try {
      console.log('Uploaded file:', file);
      // TODO: Implement file upload logic
    } catch (error) {
      handleError(error, 'Home - handleFileUpload');
    }
  };

  return (
    <div className="min-h-screen bg-[#0F172A] flex flex-col items-center justify-start p-4 sm:p-10 relative overflow-hidden font-sans transition-all duration-300">
      {!isMobile && <Lightning hue={230} intensity={1.2} speed={0.8} size={1.5} />}

      <Header />

      <div className="max-w-4xl w-full space-y-14 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: ANIMATIONS.DURATION.SLOW, ease: ANIMATIONS.EASING.EASE_OUT }}
          className="text-center space-y-7"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold gradient-text animate-gradient-shift leading-tight tracking-tighter"
          >
            What do you want to build?
          </motion.h1>
          <motion.p
            className="text-blue-200 text-base sm:text-lg md:text-xl font-light max-w-xl mx-auto tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            Prompt, run, edit, and deploy full-stack web and mobile apps with ThunderDev.
          </motion.p>
        </motion.div>

        <PromptInput
          value={prompt}
          onChange={setPrompt}
          onSubmit={handleSubmit}
          onFileUpload={handleFileUpload}
        />

        <RecommendationChips onSelect={setPrompt} />
      </div>
    </div>
  );
};
