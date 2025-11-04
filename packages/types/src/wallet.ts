export interface WalletProvider {
  name: string;
  icon: string;
  connect: () => Promise<WalletAccount>;
  disconnect: () => Promise<void>;
  isConnected: () => boolean;
  getAccount: () => Promise<WalletAccount | null>;
  signMessage: (message: string) => Promise<string>;
  sendTransaction: (transaction: Transaction) => Promise<TransactionResult>;
}

export interface WalletAccount {
  address: string;
  chainId: number;
  balance?: string;
  ensName?: string;
}

export interface Transaction {
  to: string;
  value?: string;
  data?: string;
  gasLimit?: string;
  gasPrice?: string;
  nonce?: number;
}

export interface TransactionResult {
  hash: string;
  blockNumber?: number;
  gasUsed?: string;
  status: 'pending' | 'success' | 'failed';
}

export interface WalletConfig {
  chainId: number;
  rpcUrl: string;
  blockExplorer: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
}

export type WalletType = 
  | 'metamask'
  | 'walletconnect'
  | 'coinbase'
  | 'injected'
  | 'phantom'
  | 'hana';

export interface WalletConnectionState {
  isConnecting: boolean;
  isConnected: boolean;
  account: WalletAccount | null;
  error: string | null;
  walletType: WalletType | null;
}