// Core application types
export interface Project {
  id: string;
  prompt: string;
  createdAt: string;
}

export interface Chat {
  id: string;
  message: string;
  createdAt: string;
}

// Builder-related types
export enum StepType {
  CreateFile,
  CreateFolder,
  EditFile,
  DeleteFile,
  RunScript
}

export interface Step {
  id: number;
  title: string;
  description: string;
  type: StepType;
  status: 'pending' | 'in-progress' | 'completed';
  code?: string;
  path?: string;
}

export interface BuilderProject {
  prompt: string;
  steps: Step[];
}

// File system types
export interface FileItem {
  name: string;
  type: 'file' | 'folder';
  children?: FileItem[];
  content?: string;
  path: string;
}

// Component prop types
export interface FileViewerProps {
  file: FileItem | null;
  onClose: () => void;
}

// Common UI types
export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}