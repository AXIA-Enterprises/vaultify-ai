import Head from 'next/head';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const { publicKey } = useWallet();
  const [showFeatures, setShowFeatures] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Vaultify.ai - Secure NFT Escrow on Solana</title>
        <meta name="description" content="Trustless escrow platform for Solana NFTs and tokens" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white">
        {/* Animated background gradient */}
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-blue-900/20 to-transparent pointer-events-none"></div>
        
        {/* Navbar */}
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                Vaultify.ai
              </h1>
            </div>
            
            <nav className="hidden md:flex space-x-8 mr-8">
              <a href="#features" className="text-gray-300 hover:text-white hover:underline decoration-purple-500 decoration-2 underline-offset-4 transition-all">
                Features
              </a>
              <a href="#how-it-works" className="text-gray-300 hover:text-white hover:underline decoration-purple-500 decoration-2 underline-offset-4 transition-all">
                How It Works
              </a>
              <a href="#roadmap" className="text-gray-300 hover:text-white hover:underline decoration-purple-500 decoration-2 underline-offset-4 transition-all">
                Roadmap
              </a>
            </nav>
            
            <div className="wallet-button">
              <WalletMultiButton className="!bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 !rounded-lg !py-2" />
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4 text-center">
            {/* Blue glowing sphere */}
            <div className="absolute top-40 left-1/4 w-80 h-80 bg-blue-600/30 rounded-full filter blur-[100px] -z-10 animate-pulse"></div>
            {/* Purple glowing sphere */}
            <div className="absolute top-60 right-1/4 w-80 h-80 bg-purple-600/30 rounded-full filter blur-[100px] -z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
            
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                Secure, Trustless NFT Escrow
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Trade NFTs and tokens safely without middlemen. Eliminate scams with our
              decentralized, blockchain-powered escrow platform.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-4 mb-16">
              {!publicKey ? (
                <>
                  <button 
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg text-lg font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(79,70,229,0.5)] hover:shadow-[0_0_25px_rgba(79,70,229,0.7)]"
                    onClick={() => {
                      document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                      setShowFeatures(true);
                    }}
                  >
                    Learn More
                  </button>
                  <button 
                    className="px-8 py-4 bg-transparent border-2 border-purple-500 hover:border-purple-400 text-white rounded-lg text-lg font-semibold transition-all duration-300"
                    onClick={() => setShowFeatures(true)}
                  >
                    How It Works
                  </button>
                </>
              ) : (
                <button 
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-lg text-lg font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(79,70,229,0.5)] hover:shadow-[0_0_25px_rgba(79,70,229,0.7)]"
                  disabled
                >
                  Create Escrow (Coming Soon)
                </button>
              )}
            </div>

            {/* Floating tech elements */}
            <div className="relative h-64 mb-16">
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
                {/* Mobile mockup */}
                <div className="mx-auto w-64 h-[420px] bg-gray-800 rounded-3xl p-2 shadow-[0_0_20px_rgba(66,153,225,0.3)] relative overflow-hidden">
                  <div className="bg-black w-full h-full rounded-2xl overflow-hidden relative">
                    {/* "Screen" content */}
                    <div className="p-4 h-full flex flex-col">
                      <div className="flex justify-between items-center mb-4">
                        <div className="text-xs font-bold text-blue-400">Vaultify</div>
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                      </div>
                      
                      <div className="bg-gray-800/70 rounded-lg p-3 mb-3">
                        <div className="text-xs">My NFT Escrow</div>
                        <div className="h-1 w-12 bg-purple-500 mt-1 rounded-full"></div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2 mb-auto">
                        <div className="bg-gray-800/70 rounded-lg p-2 aspect-square">
                          <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-md flex items-center justify-center">
                            <div className="w-3/4 h-3/4 border-2 border-dashed border-blue-500/50 rounded-md"></div>
                          </div>
                        </div>
                        <div className="bg-gray-800/70 rounded-lg p-2 aspect-square">
                          <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-md flex items-center justify-center">
                            <div className="w-3/4 h-3/4 border-2 border-dashed border-purple-500/50 rounded-md"></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-blue-600/30 rounded-lg p-3 mt-4">
                        <div className="text-xs">Status: Secure</div>
                        <div className="flex items-center mt-1 space-x-1">
                          <div className="h-1 w-8 bg-blue-400 rounded-full"></div>
                          <div className="h-1 w-4 bg-purple-400 rounded-full"></div>
                          <div className="h-1 w-2 bg-blue-400 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Reflection overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
                  </div>
                  
                  {/* Phone "notch" */}
                  <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-1/3 h-5 bg-black rounded-b-xl"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Features Section */}
          <div id="features" className="container mx-auto px-4 py-16">
            <h3 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Key Features
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-800/50 hover:border-blue-500/30 transition-all group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg mb-4 flex items-center justify-center shadow-[0_0_15px_rgba(66,153,225,0.5)]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">Secure & Trustless</h4>
                <p className="text-gray-300 mb-3">
                  Smart contracts ensure your assets are secure. No need to trust third parties or middlemen.
                </p>
                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 group-hover:w-full"></div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-800/50 hover:border-purple-500/30 transition-all group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center shadow-[0_0_15px_rgba(159,122,234,0.5)]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a4 4 0 00-8 0v7H4a2 2 0 00-2 2v5a2 2 0 002 2h16a2 2 0 002-2v-5a2 2 0 00-2-2h-4v-7a4 4 0 10-8 0v7h4v-7" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">NFT & Token Support</h4>
                <p className="text-gray-300 mb-3">
                  Trade any Solana NFTs or SPL tokens with confidence. Full support for all assets.
                </p>
                <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-300 group-hover:w-full"></div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-800/50 hover:border-blue-500/30 transition-all group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg mb-4 flex items-center justify-center shadow-[0_0_15px_rgba(66,153,225,0.5)]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">Verification System</h4>
                <p className="text-gray-300 mb-3">
                  Optional verification adds an extra layer of trust for high-value trades and premium assets.
                </p>
                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 group-hover:w-full"></div>
              </div>
            </div>
          </div>
          
          {/* How It Works Section */}
          <div id="how-it-works" className="container mx-auto px-4 py-16 relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent -z-10"></div>
            
            <h3 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              How It Works
            </h3>
            
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-900/30 rounded-full flex items-center justify-center text-3xl font-bold text-blue-400 border border-blue-600/30">1</div>
                <div className="flex-grow bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
                  <h4 className="text-xl font-bold mb-2 text-blue-400">Create an Escrow</h4>
                  <p className="text-gray-300">
                    Connect your wallet and select the NFT or token you want to trade. Specify what you want in return and set any additional parameters.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0 w-16 h-16 bg-purple-900/30 rounded-full flex items-center justify-center text-3xl font-bold text-purple-400 border border-purple-600/30">2</div>
                <div className="flex-grow bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
                  <h4 className="text-xl font-bold mb-2 text-purple-400">Counterparty Deposits</h4>
                  <p className="text-gray-300">
                    Share the escrow link with your trading partner. They connect their wallet and deposit the requested asset into the escrow.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-900/30 rounded-full flex items-center justify-center text-3xl font-bold text-blue-400 border border-blue-600/30">3</div>
                <div className="flex-grow bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
                  <h4 className="text-xl font-bold mb-2 text-blue-400">Smart Contract Executes</h4>
                  <p className="text-gray-300">
                    Once both assets are deposited, the smart contract automatically executes the trade. Assets are instantly transferred to their new owners.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Current Status */}
          <div id="roadmap" className="container mx-auto px-4 py-16">
            <h3 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Project Status
            </h3>
            
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm p-8 rounded-xl shadow-lg max-w-3xl mx-auto border border-gray-800/50">
              <h4 className="text-xl font-bold mb-4 text-center">Development In Progress</h4>
              <div className="w-full bg-gray-700 rounded-full h-3 mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full w-[15%] relative">
                  <div className="absolute -right-2 -top-1 w-5 h-5 bg-purple-500 rounded-full animate-pulse"></div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex-shrink-0 mr-3 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300">Project planning and design</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex-shrink-0 mr-3 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300">Front-end foundation</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex-shrink-0 mr-3 flex items-center justify-center animate-pulse">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <span className="text-white font-medium">Smart contract development</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-gray-600 flex-shrink-0 mr-3 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-400">Testing and security audit</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-gray-600 flex-shrink-0 mr-3 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-400">Launch and public beta</span>
                </div>
              </div>
              
              <p className="text-gray-300 mt-6 text-center">
                Vaultify.ai is currently in early development. Sign up for our newsletter to receive updates!
              </p>
              
              <div className="mt-6 flex items-center max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow py-3 px-4 bg-gray-900/70 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                />
                <button className="py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-r-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-800 mt-16">
          <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-8 md:mb-0">
                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-2">
                  Vaultify.ai
                </h2>
                <p className="text-gray-400">Secure, Trustless NFT Escrow on Solana</p>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-200">Navigation</h3>
                  <ul className="space-y-2">
                    <li><a href="#features" className="text-gray-400 hover:text-blue-400 transition-colors">Features</a></li>
                    <li><a href="#how-it-works" className="text-gray-400 hover:text-blue-400 transition-colors">How It Works</a></li>
                    <li><a href="#roadmap" className="text-gray-400 hover:text-blue-400 transition-colors">Roadmap</a></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-200">Connect</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Twitter</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Discord</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">GitHub</a></li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 mb-4 md:mb-0">© 2023 Vaultify.ai - All rights reserved</p>
              
              <div className="flex space-x-6">
                <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}