import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { TextArea } from '../ui';
import { FILE_UPLOAD, ANIMATIONS } from '../../constants';
import { cn } from '../../utils';
import styles from './PromptInput.module.css';

interface PromptInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  onFileUpload?: (file: File) => void;
  disabled?: boolean;
  placeholder?: string;
}

export const PromptInput: React.FC<PromptInputProps> = ({
  value,
  onChange,
  onSubmit,
  onFileUpload,
  disabled = false,
  placeholder = "e.g. A modern SaaS website with animations and 3D assets",
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && onFileUpload) {
      // Validate file type and size
      const isValidType = FILE_UPLOAD.ACCEPTED_TYPES.some(type => 
        file.name.toLowerCase().endsWith(type)
      );
      
      if (!isValidType) {
        alert(`Please select a valid file type: ${FILE_UPLOAD.ACCEPTED_TYPES.join(', ')}`);
        return;
      }
      
      if (file.size > FILE_UPLOAD.MAX_SIZE) {
        alert('File size must be less than 10MB');
        return;
      }
      
      onFileUpload(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim() && !disabled) {
      onSubmit();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: ANIMATIONS.DURATION.SLOW, delay: 0.3, ease: ANIMATIONS.EASING.EASE_OUT }}
    >
      <form onSubmit={handleSubmit} className={styles.container}>
        <div className={styles.inputWrapper}>
          {onFileUpload && (
            <motion.button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              whileHover={{ scale: 1.2, rotate: 15 }}
              whileTap={{ scale: 0.85 }}
              className={styles.fileButton}
              disabled={disabled}
              aria-label="Upload file"
            >
              <Plus className="h-5 w-5 sm:h-6 sm:w-6" />
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileUpload}
                className={styles.fileInput}
                accept={FILE_UPLOAD.ACCEPTED_TYPES.join(',')}
                disabled={disabled}
                aria-label="File upload input"
              />
            </motion.button>
          )}

          <TextArea
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            rows={4}
            disabled={disabled}
          />

          {value.trim() && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <motion.button
                type="button"
                onClick={onSubmit}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className={cn(styles.generateButton, styles.animate)}
                disabled={disabled}
              >
                Generate →
              </motion.button>
            </motion.div>
          )}
        </div>
      </form>
    </motion.div>
  );
};
