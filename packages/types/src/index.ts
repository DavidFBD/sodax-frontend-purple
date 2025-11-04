// Purple Theme Types
export interface PurpleTheme {
  primary: string;
  light: string;
  deep: string;
  bright: string;
  darker: string;
  gradient: {
    start: string;
    end: string;
  };
}

export interface PurpleColors {
  purple: PurpleTheme;
  white: {
    pure: string;
    off: string;
    soft: string;
  };
  accent: string;
  subtle: string;
  tint: string;
}

// Core SODAX Types
export interface Token {
  address: string;
  symbol: string;
  name: string;
  decimals: number;
  logoURI?: string;
  chainId: number;
}

export interface Chain {
  id: number;
  name: string;
  network: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  rpcUrls: string[];
  blockExplorerUrls: string[];
}

export interface SwapQuote {
  inputToken: Token;
  outputToken: Token;
  inputAmount: string;
  outputAmount: string;
  rate: string;
  priceImpact: string;
  gasEstimate: string;
  route: string[];
}

export interface WalletConnection {
  address: string;
  chainId: number;
  isConnected: boolean;
  provider?: any;
}

// Purple Theme UI Component Props
export interface PurpleButtonProps {
  variant?: 'primary' | 'secondary' | 'gradient' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export interface PurpleCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'gradient' | 'glass';
  padding?: 'sm' | 'md' | 'lg';
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  timestamp: number;
}

export interface PaginatedResponse<T> {
  items: T[];
  totalCount: number;
  page: number;
  pageSize: number;
  hasNextPage: boolean;
}

// Export all types
export * from './theme';
export * from './wallet';
export * from './trading';