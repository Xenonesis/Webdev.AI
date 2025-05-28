import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { RECOMMENDATION_PROMPTS, ANIMATIONS } from '../../constants';

interface RecommendationChipsProps {
  onSelect: (prompt: string) => void;
  recommendations?: string[];
}

export const RecommendationChips: React.FC<RecommendationChipsProps> = memo(({
  onSelect,
  recommendations = RECOMMENDATION_PROMPTS,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: ANIMATIONS.DURATION.SLOW, 
        delay: 0.5, 
        ease: ANIMATIONS.EASING.EASE_OUT 
      }}
      className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-5 justify-center"
    >
      {recommendations.map((recommendation, index) => (
        <motion.button
          key={index}
          onClick={() => onSelect(recommendation)}
          whileHover={{ 
            scale: 1.15, 
            y: -5, 
            boxShadow: '0 0 20px rgba(192, 38, 211, 0.6)' 
          }}
          whileTap={{ scale: 0.9 }}
          className="bg-gray-900/60 backdrop-blur-2xl hover:bg-gray-800/70 border border-blue-500/40 text-blue-100 hover:text-blue-400 px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-sm font-medium transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-purple-600/50"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 0.15 * index + 0.7, 
            duration: 0.6 
          }}
        >
          {recommendation}
        </motion.button>
      ))}
    </motion.div>
  );
});

RecommendationChips.displayName = 'RecommendationChips';
