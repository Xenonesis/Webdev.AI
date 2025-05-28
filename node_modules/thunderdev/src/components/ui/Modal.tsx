import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { ModalProps } from '../../types';
import { ANIMATIONS } from '../../constants';

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: ANIMATIONS.DURATION.NORMAL }}
          onClick={onClose}
        >
          <motion.div
            className="bg-gray-900/80 backdrop-blur-2xl border border-blue-500/40 rounded-3xl p-6 w-full max-w-md shadow-2xl shadow-blue-500/30"
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            transition={ANIMATIONS.EASING.SPRING}
            onClick={(e) => e.stopPropagation()}
          >
            {title && (
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {title}
                </h2>
                <motion.button
                  onClick={onClose}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-blue-200 hover:text-blue-400 transition-colors"
                >
                  <X className="h-5 w-5" />
                </motion.button>
              </div>
            )}
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
