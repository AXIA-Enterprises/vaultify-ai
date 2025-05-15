import Head from 'next/head';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useState, useEffect } from 'react';

export default function Home() {
  const { publicKey } = useWallet();
  const [activeSection, setActiveSection] = useState('home');

  return (
    <>
      <Head>
        <title>Vaultify.ai | Secure NFT Escrow</title>
        <meta name="description" content="Trustless NFT escrow platform on Solana" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-black text-white flex flex-col">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold tracking-tighter">
                <span className="text-white">Vaultify</span>
                <span className="text-blue-400">.ai</span>
              </h1>
            </div>
            
            <nav className="hidden md:flex space-x-10">
              <button 
                onClick={() => setActiveSection('home')}
                className={`text-lg transition-colors ${activeSection === 'home' ? 'text-blue-400' : 'text-gray-400 hover:text-white'}`}
              >
                Home
              </button>
              <button 
                onClick={() => setActiveSection('features')}
                className={`text-lg transition-colors ${activeSection === 'features' ? 'text-blue-400' : 'text-gray-400 hover:text-white'}`}
              >
                Features
              </button>
              <button 
                onClick={() => setActiveSection('roadmap')}
                className={`text-lg transition-colors ${activeSection === 'roadmap' ? 'text-blue-400' : 'text-gray-400 hover:text-white'}`}
              >
                Roadmap
              </button>
            </nav>
            
            <WalletMultiButton className="custom-wallet-button" />
          </div>
        </header>

        {/* Main content */}
        <main className="flex-grow flex items-center relative z-10">
          {/* Network graph background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* This would be a dynamic network graph - using a static image as placeholder */}
            <div className="absolute bottom-0 left-0 right-0 h-[40vh] bg-[url('/network-bg.png')] bg-no-repeat bg-bottom bg-cover opacity-70"></div>
            
            {/* Glowing orbs */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-blue-500/10 filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/3 w-40 h-40 rounded-full bg-blue-500/5 filter blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          {/* Home Section */}
          {activeSection === 'home' && (
            <div className="container mx-auto px-6 pt-32 pb-20 flex flex-col items-center text-center">
              <h2 className="text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-tighter">
                Secure, Trustless<br />NFT Escrow
              </h2>
              
              <p className="text-xl text-gray-400 max-w-2xl mb-12">
                Trade NFTs and tokens safely without middlemen. 
                Eliminate scams with our decentralized blockchain-powered platform.
              </p>
              
              <div className="flex flex-col md:flex-row gap-6 mb-32">
                <button className="px-10 py-4 bg-blue-500 hover:bg-blue-600 rounded-md text-lg font-medium tracking-wide transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.8)]">
                  Learn More
                </button>
                
                <button className="px-10 py-4 bg-transparent border border-blue-500 hover:border-blue-400 rounded-md text-lg font-medium text-blue-400 tracking-wide transition-all duration-300">
                  How It Works
                </button>
              </div>
              
              {/* Shield icon */}
              <div className="w-64 h-64 border-[16px] border-white rounded-full mx-auto mb-12 relative">
                <div className="absolute top-1/2 left-0 right-0 h-full bg-white"></div>
                <div className="glow-effect absolute inset-0 rounded-full"></div>
              </div>
            </div>
          )}
          
          {/* Features Section */}
          {activeSection === 'features' && (
            <div className="container mx-auto px-6 pt-32 pb-20">
              <h2 className="text-5xl font-bold mb-16 text-center">
                Key <span className="text-blue-400">Features</span>
              </h2>
              
              <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                <div className="bg-gray-900/30 backdrop-blur border border-gray-800 p-8 rounded-lg hover:border-blue-500/50 transition-all duration-300 group">
                  <div className="w-16 h-16 mb-6 border-2 border-blue-500 rounded-lg flex items-center justify-center group-hover:bg-blue-500/10 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-blue-400">Secure & Trustless</h3>
                  <p className="text-gray-400">
                    Smart contracts ensure your assets remain secure. No need to trust third parties.
                  </p>
                </div>
                
                <div className="bg-gray-900/30 backdrop-blur border border-gray-800 p-8 rounded-lg hover:border-blue-500/50 transition-all duration-300 group">
                  <div className="w-16 h-16 mb-6 border-2 border-blue-500 rounded-lg flex items-center justify-center group-hover:bg-blue-500/10 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-blue-400">NFT & Token Support</h3>
                  <p className="text-gray-400">
                    Trade any Solana NFTs or SPL tokens with confidence and security.
                  </p>
                </div>
                
                <div className="bg-gray-900/30 backdrop-blur border border-gray-800 p-8 rounded-lg hover:border-blue-500/50 transition-all duration-300 group">
                  <div className="w-16 h-16 mb-6 border-2 border-blue-500 rounded-lg flex items-center justify-center group-hover:bg-blue-500/10 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-blue-400">Verification System</h3>
                  <p className="text-gray-400">
                    Optional verification for high-value trades and additional security.
                  </p>
                </div>
              </div>
            </div>
          )}
          
          {/* Roadmap Section */}
          {activeSection === 'roadmap' && (
            <div className="container mx-auto px-6 pt-32 pb-20">
              <h2 className="text-5xl font-bold mb-16 text-center">
                Development <span className="text-blue-400">Roadmap</span>
              </h2>
              
              <div className="max-w-3xl mx-auto space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-10 h-10 rounded-full border-2 border-blue-500 flex items-center justify-center text-blue-400 font-bold bg-blue-500/10 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-blue-400">Planning & Architecture</h3>
                    <p className="text-gray-400 mb-2">
                      Smart contract design, security model, and platform architecture.
                    </p>
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full w-full"></div>
                    </div>
                    <p className="text-right text-sm text-blue-400 mt-1">Completed</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-10 h-10 rounded-full border-2 border-blue-500 flex items-center justify-center text-blue-400 font-bold bg-blue-500/10 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-blue-400">Smart Contract Development</h3>
                    <p className="text-gray-400 mb-2">
                      Implement escrow contract with all core functionality.
                    </p>
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full w-[60%]"></div>
                    </div>
                    <p className="text-right text-sm text-blue-400 mt-1">In Progress - 60%</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-10 h-10 rounded-full border-2 border-gray-700 flex items-center justify-center text-gray-500 font-bold bg-gray-800/50 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-400">Frontend Development</h3>
                    <p className="text-gray-500 mb-2">
                      Build user interface for creating and managing escrows.
                    </p>
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full w-[15%]"></div>
                    </div>
                    <p className="text-right text-sm text-gray-500 mt-1">Started - 15%</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-10 h-10 rounded-full border-2 border-gray-700 flex items-center justify-center text-gray-500 font-bold bg-gray-800/50 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-400">Testing & Security Audit</h3>
                    <p className="text-gray-500 mb-2">
                      Comprehensive testing and third-party security audit.
                    </p>
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full w-0"></div>
                    </div>
                    <p className="text-right text-sm text-gray-500 mt-1">Pending</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-10 h-10 rounded-full border-2 border-gray-700 flex items-center justify-center text-gray-500 font-bold bg-gray-800/50 flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-400">Launch & Expansion</h3>
                    <p className="text-gray-500 mb-2">
                      Public beta, community feedback, and feature expansion.
                    </p>
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full w-0"></div>
                    </div>
                    <p className="text-right text-sm text-gray-500 mt-1">Pending</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="relative z-10 border-t border-gray-800 py-8">
          <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0">© 2023 Vaultify.ai - All rights reserved</p>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors">
                Twitter
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors">
                Discord
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}