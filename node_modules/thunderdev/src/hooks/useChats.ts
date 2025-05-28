import { useState, useEffect, useCallback } from 'react';
import { Chat } from '../types';
import { storage, generateId, handleError } from '../utils';

const CHATS_STORAGE_KEY = 'thunder_chats';

export const useChats = () => {
  const [chats, setChats] = useState<Chat[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load chats from localStorage on mount
  useEffect(() => {
    try {
      const storedChats = storage.get<Chat[]>(CHATS_STORAGE_KEY) || [];
      setChats(storedChats);
    } catch (error) {
      handleError(error, 'useChats - loadChats');
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Save chats to localStorage whenever chats change
  useEffect(() => {
    if (!isLoading) {
      storage.set(CHATS_STORAGE_KEY, chats);
    }
  }, [chats, isLoading]);

  const addChat = useCallback((message: string): Chat => {
    const newChat: Chat = {
      id: generateId(),
      message,
      createdAt: new Date().toISOString(),
    };

    setChats(prev => [newChat, ...prev]);
    return newChat;
  }, []);

  const removeChat = useCallback((id: string): void => {
    setChats(prev => prev.filter(chat => chat.id !== id));
  }, []);

  const clearAllChats = useCallback((): void => {
    setChats([]);
    storage.remove(CHATS_STORAGE_KEY);
  }, []);

  const getChat = useCallback((id: string): Chat | undefined => {
    return chats.find(chat => chat.id === id);
  }, [chats]);

  return {
    chats,
    isLoading,
    addChat,
    removeChat,
    clearAllChats,
    getChat,
  };
};
