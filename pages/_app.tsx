import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { WalletConnectionProvider } from '../components/WalletConnectionProvider';

// Import wallet adapter styles
import '@solana/wallet-adapter-react-ui/styles.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WalletConnectionProvider>
      <Component {...pageProps} />
    </WalletConnectionProvider>
  );
}