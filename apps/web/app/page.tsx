'use client';

import { useRef } from 'react';

const PurpleHeroSection = ({ onSwapClick }: { onSwapClick: () => void }) => {
  return (
    <section className="relative min-h-screen bg-purple-gradient flex items-center justify-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-purple-gradient-radial opacity-20"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
          SODAX
          <span className="block text-purple-bright">Purple</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
          Money, as it should be. Beautiful, seamless, and powered by purple elegance.
        </p>
        <p className="text-lg text-white/80 mb-12 max-w-3xl mx-auto">
          Experience DeFi with our stunning purple and white theme. Swap, lend, and borrow with style. 
          One platform, coordinated liquidity, and smarter yield — no slippage, no friction, all beauty.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onSwapClick}
            className="px-8 py-4 bg-white text-purple-primary font-semibold rounded-xl hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Start Trading
          </button>
          <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

const PurpleSwapSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-subtle">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trade with <span className="text-purple-primary">Purple Power</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of DeFi trading with our beautiful purple-themed interface.
          </p>
        </div>
        
        {/* Mock trading interface */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md mx-auto border border-purple-light/20">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
              <div className="bg-purple-subtle rounded-xl p-4 border border-purple-light/30">
                <div className="flex justify-between items-center">
                  <input
                    type="text"
                    placeholder="0.0"
                    className="bg-transparent text-2xl font-semibold outline-none w-full"
                  />
                  <div className="flex items-center space-x-2 bg-white rounded-lg px-3 py-2">
                    <div className="w-6 h-6 bg-purple-primary rounded-full"></div>
                    <span className="font-medium">ETH</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="bg-purple-primary rounded-full p-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
              <div className="bg-purple-subtle rounded-xl p-4 border border-purple-light/30">
                <div className="flex justify-between items-center">
                  <input
                    type="text"
                    placeholder="0.0"
                    className="bg-transparent text-2xl font-semibold outline-none w-full"
                  />
                  <div className="flex items-center space-x-2 bg-white rounded-lg px-3 py-2">
                    <div className="w-6 h-6 bg-purple-light rounded-full"></div>
                    <span className="font-medium">USDC</span>
                  </div>
                </div>
              </div>
            </div>
            
            <button className="w-full bg-purple-gradient text-white font-semibold py-4 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Swap Tokens
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const PurpleNetworksSection = () => {
  const networks = [
    { name: 'Ethereum', color: 'bg-purple-primary' },
    { name: 'Polygon', color: 'bg-purple-light' },
    { name: 'Arbitrum', color: 'bg-purple-deep' },
    { name: 'Optimism', color: 'bg-purple-bright' },
    { name: 'Base', color: 'bg-purple-accent' },
    { name: 'Avalanche', color: 'bg-purple-primary' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Multi-Chain <span className="text-purple-primary">Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trade seamlessly across multiple blockchains with our unified purple interface.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {networks.map((network, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-purple-light/20"
            >
              <div className={`w-12 h-12 ${network.color} rounded-xl mb-4 mx-auto`}></div>
              <h3 className="text-center font-semibold text-gray-900">{network.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PurpleFooter = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              SODAX <span className="text-purple-bright">Purple</span>
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              The most beautiful DeFi platform with stunning purple and white branding. 
              Experience trading like never before.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-purple-primary rounded-lg"></div>
              <div className="w-10 h-10 bg-purple-light rounded-lg"></div>
              <div className="w-10 h-10 bg-purple-deep rounded-lg"></div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-bright transition-colors">Trading</a></li>
              <li><a href="#" className="hover:text-purple-bright transition-colors">Lending</a></li>
              <li><a href="#" className="hover:text-purple-bright transition-colors">Borrowing</a></li>
              <li><a href="#" className="hover:text-purple-bright transition-colors">Analytics</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-bright transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-purple-bright transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-purple-bright transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-purple-bright transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 SODAX Purple. Built with 💜 for the DeFi community.</p>
        </div>
      </div>
    </footer>
  );
};

const PurpleLandingPage = () => {
  const swapRef = useRef(null);

  const scrollToSwap = () => {
    if (swapRef.current) {
      (swapRef.current as HTMLElement).scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="landing-page w-[100vw] overflow-x-hidden">
      <PurpleHeroSection onSwapClick={scrollToSwap} />
      <div ref={swapRef}>
        <PurpleSwapSection />
      </div>
      <PurpleNetworksSection />
      <PurpleFooter />
    </div>
  );
};

export default PurpleLandingPage;