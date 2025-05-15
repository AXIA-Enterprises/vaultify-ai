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
        <meta name="description" content="Trustless NFT escrow platform on Solana" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Header */}
        <header className="px-6 py-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-3xl font-bold">
              <span className="text-white">Vaultify</span>
              <span className="text-blue-400">.ai</span>
            </h1>
            
            <WalletMultiButton />
          </div>
        </header>

        {/* Main content */}
        <main>
          {/* Hero Section */}
          <div className="container mx-auto px-6 pt-20 pb-20 text-center">
            <h2 className="text-6xl font-bold mb-8">
              Secure, Trustless NFT Escrow
            </h2>
            
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
              Trade NFTs and tokens safely without middlemen. 
              Eliminate scams with our decentralized blockchain-powered platform.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center mb-20">
              <button className="px-10 py-4 bg-blue-500 hover:bg-blue-600 rounded-md text-lg font-medium">
                Learn More
              </button>
              
              <button className="px-10 py-4 bg-transparent border border-blue-500 hover:border-blue-400 rounded-md text-lg font-medium text-blue-400">
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
              <div className="border border-gray-800 p-8 rounded-lg">
                <h4 className="text-xl font-bold mb-4 text-blue-400">Secure & Trustless</h4>
                <p className="text-gray-400">
                  Smart contracts ensure your assets remain secure. No need to trust third parties.
                </p>
              </div>
              
              <div className="border border-gray-800 p-8 rounded-lg">
                <h4 className="text-xl font-bold mb-4 text-blue-400">NFT & Token Support</h4>
                <p className="text-gray-400">
                  Trade any Solana NFTs or SPL tokens with confidence.
                </p>
              </div>
              
              <div className="border border-gray-800 p-8 rounded-lg">
                <h4 className="text-xl font-bold mb-4 text-blue-400">Verification System</h4>
                <p className="text-gray-400">
                  Optional verification for high-value trades.
                </p>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-800 py-8">
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