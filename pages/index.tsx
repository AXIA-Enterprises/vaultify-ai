import Head from 'next/head';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useState } from 'react';

export default function Home() {
  const { publicKey } = useWallet();
  const [showFeatures, setShowFeatures] = useState(false);

  return (
    <>
      <Head>
        <title>Vaultify.ai - Secure NFT Escrow on Solana</title>
        <meta name="description" content="Trustless escrow platform for Solana NFTs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        {/* Header */}
        <header className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Vaultify.ai
            </h1>
          </div>
          <WalletMultiButton />
        </header>

        {/* Hero Section */}
        <main className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Secure, Trustless NFT Escrow on Solana
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Trade NFTs and tokens safely without middlemen. Eliminate scams with our
            decentralized escrow platform.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-16">
            {!publicKey ? (
              <button 
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold transition-colors"
                onClick={() => setShowFeatures(true)}
              >
                Learn More
              </button>
            ) : (
              <button 
                className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg text-lg font-semibold transition-colors"
                disabled
              >
                Create Escrow (Coming Soon)
              </button>
            )}
          </div>

          {/* Features Section */}
          {(showFeatures || publicKey) && (
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-slate-800/50 backdrop-blur p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-4">Secure & Trustless</h3>
                <p className="text-gray-300">
                  Smart contracts ensure your assets are secure. No need to trust third parties.
                </p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-4">NFT & Token Support</h3>
                <p className="text-gray-300">
                  Trade any Solana NFTs or SPL tokens with confidence.
                </p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-4">Verification System</h3>
                <p className="text-gray-300">
                  Optional verification adds an extra layer of trust for high-value trades.
                </p>
              </div>
            </div>
          )}

          {/* Current Status */}
          <div className="bg-slate-800/30 backdrop-blur p-6 rounded-xl shadow-lg max-w-3xl mx-auto mt-16">
            <h3 className="text-xl font-bold mb-2">Project Status: Development</h3>
            <div className="w-full bg-slate-700 rounded-full h-2.5 mb-4">
              <div className="bg-blue-600 h-2.5 rounded-full w-[10%]"></div>
            </div>
            <p className="text-gray-300">
              Vaultify.ai is currently in early development. Check back soon for updates!
            </p>
          </div>
        </main>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-8 mt-auto border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2023 Vaultify.ai - All rights reserved</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white">Discord</a>
              <a href="#" className="text-gray-400 hover:text-white">GitHub</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}