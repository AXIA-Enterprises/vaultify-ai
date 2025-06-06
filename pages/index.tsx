import React from 'react';
import Head from 'next/head';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export default function Home() {
  const { publicKey } = useWallet();
  
  return (
    <>
      <Head>
        <title>Vaultify.ai | Secure NFT Escrow</title>
        <meta name="description" content="Trustless Token & NFT Escrow Built for Solana" />
        
        {/* Primary favicon using PNG */}
        <link rel="icon" type="image/png" href="/favicon.png" />
        
        {/* Fallback favicon */}
        <link rel="alternate icon" href="/favicon.ico" />
        
        {/* Apple touch icon */}
        <link rel="apple-touch-icon" href="/favicon.png" />
        
        {/* Meta tags for social media */}
        <meta property="og:title" content="Vaultify.ai | Secure NFT Escrow" />
        <meta property="og:description" content="Trustless Token & NFT Escrow Built for Solana" />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://vaultify.ai" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="min-h-screen bg-black text-white relative">
        {/* Network background with overlay */}
        <div className="fixed inset-0 z-0">
          {/* Background image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60" 
            style={{ backgroundImage: 'url("/network-bg.png")' }}
          ></div>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        </div>

        {/* Content (with higher z-index to appear above the background) */}
        <div className="relative z-10">
          {/* Header with logo */}
          <header className="px-6 py-8 mb-6">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
              <div className="flex items-center">
                {/* Logo */}
                <div className="w-10 h-10 mr-3">
                  <img 
                    src="/logo.png" 
                    alt="Vaultify.ai Logo" 
                    className="w-full h-full object-contain logo-glow" 
                  />
                </div>
                {/* Brand name */}
                <h1 className="text-4xl font-bold tracking-tight">
                  <span className="text-white">Vaultify</span>
                  <span className="text-blue-400">.ai</span>
                </h1>
              </div>
              
              <div className="ml-auto">
                <WalletMultiButton />
              </div>
            </div>
          </header>

          {/* Main content */}
          <main>
            {/* Hero Section - adjusted spacing */}
            <div className="container mx-auto px-6 pt-12 pb-24 text-center">
              <h2 className="text-6xl font-bold mb-8 leading-tight">
                Trustless Token & NFT Escrow Built for Solana
              </h2>
              
              <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
               Trade NFTs and SPL tokens securely—no middlemen, no scams. Vaultify.ai uses audited Solana smart contracts to protect every transaction.
              </p>
              
              <div className="flex flex-col md:flex-row gap-6 justify-center mb-20">
                <button className="px-10 py-4 bg-blue-500 hover:bg-blue-600 rounded-md text-lg font-medium transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.8)]">
                  Learn More
                </button>
                
                <button className="px-10 py-4 bg-transparent border border-blue-500 hover:border-blue-400 rounded-md text-lg font-medium text-blue-400 transition-colors">
                  How It Works
                </button>
              </div>
            </div>
            
            {/* Features Section */}
            <div className="container mx-auto px-6 py-20">
              <h3 className="text-3xl font-bold mb-12 text-center">
                Key <span className="text-blue-400">Features</span>
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="bg-black bg-opacity-50 backdrop-blur-sm border border-gray-800 p-8 rounded-lg hover:border-blue-500/30 transition-all group">
                  <h4 className="text-xl font-bold mb-4 text-blue-400">Secure & Trustless</h4>
                  <p className="text-gray-400">
                    Vaultify's smart contracts keep your assets safe—without ever relying on third-party custody.
                  </p>
                </div>
                
                <div className="bg-black bg-opacity-50 backdrop-blur-sm border border-gray-800 p-8 rounded-lg hover:border-blue-500/30 transition-all group">
                  <h4 className="text-xl font-bold mb-4 text-blue-400">NFT & Token Support</h4>
                  <p className="text-gray-400">
                    Easily trade any Solana NFT or SPL token. Vaultify supports all major assets on-chain.
                  </p>
                </div>
                
                <div className="bg-black bg-opacity-50 backdrop-blur-sm border border-gray-800 p-8 rounded-lg hover:border-blue-500/30 transition-all group">
                  <h4 className="text-xl font-bold mb-4 text-blue-400">Verification System</h4>
                  <p className="text-gray-400">
                    Add a layer of protection for high-value deals with our trusted third-party verification service.
                  </p>
                </div>
              </div>
            </div>
          </main>

          {/* Footer with logo */}
          <footer className="border-t border-gray-800 py-8 mt-12">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-4 md:mb-0">
                <img 
                  src="/logo.png" 
                  alt="Vaultify.ai Logo" 
                  className="w-6 h-6 mr-2"
                />
                <p className="text-gray-500">© 2025 Vaultify.ai - All rights reserved</p>
              </div>
              
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
      </div>
    </>
  );
}