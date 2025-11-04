'use client';

import { createContext, useContext, ReactNode } from 'react';
import { create } from 'zustand';

// Purple theme store
interface AppStore {
  theme: 'light' | 'dark';
  isConnected: boolean;
  walletAddress: string | null;
  toggleTheme: () => void;
  setWalletConnection: (address: string | null) => void;
}

const useAppStore = create<AppStore>((set) => ({
  theme: 'light',
  isConnected: false,
  walletAddress: null,
  toggleTheme: () => set((state) => ({ 
    theme: state.theme === 'light' ? 'dark' : 'light' 
  })),
  setWalletConnection: (address) => set({ 
    walletAddress: address, 
    isConnected: !!address 
  }),
}));

const AppStoreContext = createContext<typeof useAppStore | null>(null);

export const AppStoreProvider = ({ children }: { children: ReactNode }) => {
  return (
    <AppStoreContext.Provider value={useAppStore}>
      {children}
    </AppStoreContext.Provider>
  );
};

export const useAppStoreContext = () => {
  const context = useContext(AppStoreContext);
  if (!context) {
    throw new Error('useAppStoreContext must be used within AppStoreProvider');
  }
  return context();
};