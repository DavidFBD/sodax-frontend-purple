'use client';

import { useState } from 'react';

const AppSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-purple-primary text-white rounded-lg shadow-lg md:hidden"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-40 w-64 bg-white dark:bg-gray-900 shadow-lg transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:inset-0`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-center h-16 px-4 bg-purple-gradient">
            <h1 className="text-xl font-bold text-white">SODAX Purple</h1>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            <a href="#" className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-subtle rounded-lg transition-colors">
              <span className="ml-3">Trade</span>
            </a>
            <a href="#" className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-subtle rounded-lg transition-colors">
              <span className="ml-3">Pool</span>
            </a>
            <a href="#" className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-subtle rounded-lg transition-colors">
              <span className="ml-3">Analytics</span>
            </a>
            <a href="#" className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-subtle rounded-lg transition-colors">
              <span className="ml-3">Docs</span>
            </a>
          </nav>

          {/* Connect Wallet */}
          <div className="p-4">
            <button className="w-full px-4 py-2 bg-purple-gradient text-white rounded-lg hover:shadow-lg transition-all duration-300">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default AppSidebar;