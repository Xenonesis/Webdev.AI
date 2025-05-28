import { useState, useEffect, useCallback } from 'react';
import { Project } from '../types';
import { storage, generateId, handleError } from '../utils';

const PROJECTS_STORAGE_KEY = 'thunder_projects';

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load projects from localStorage on mount
  useEffect(() => {
    try {
      const storedProjects = storage.get<Project[]>(PROJECTS_STORAGE_KEY) || [];
      setProjects(storedProjects);
    } catch (error) {
      handleError(error, 'useProjects - loadProjects');
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Save projects to localStorage whenever projects change
  useEffect(() => {
    if (!isLoading) {
      storage.set(PROJECTS_STORAGE_KEY, projects);
    }
  }, [projects, isLoading]);

  const addProject = useCallback((prompt: string): Project => {
    const newProject: Project = {
      id: generateId(),
      prompt,
      createdAt: new Date().toISOString(),
    };

    setProjects(prev => [newProject, ...prev]);
    return newProject;
  }, []);

  const removeProject = useCallback((id: string): void => {
    setProjects(prev => prev.filter(project => project.id !== id));
  }, []);

  const clearAllProjects = useCallback((): void => {
    setProjects([]);
    storage.remove(PROJECTS_STORAGE_KEY);
  }, []);

  const getProject = useCallback((id: string): Project | undefined => {
    return projects.find(project => project.id === id);
  }, [projects]);

  const getRecentProject = useCallback((): Project | undefined => {
    return projects[0];
  }, [projects]);

  return {
    projects,
    isLoading,
    addProject,
    removeProject,
    clearAllProjects,
    getProject,
    getRecentProject,
  };
};
