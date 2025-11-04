export interface TradingPair {
  baseToken: Token;
  quoteToken: Token;
  symbol: string;
  price: string;
  priceChange24h: string;
  volume24h: string;
  high24h: string;
  low24h: string;
}

export interface OrderBook {
  bids: OrderBookEntry[];
  asks: OrderBookEntry[];
  timestamp: number;
}

export interface OrderBookEntry {
  price: string;
  amount: string;
  total: string;
}

export interface SwapParams {
  inputToken: string;
  outputToken: string;
  inputAmount: string;
  slippage: number;
  recipient?: string;
  deadline?: number;
}

export interface SwapRoute {
  path: string[];
  amountIn: string;
  amountOut: string;
  priceImpact: string;
  gasEstimate: string;
  protocols: string[];
}

export interface LiquidityPool {
  id: string;
  token0: Token;
  token1: Token;
  reserve0: string;
  reserve1: string;
  totalSupply: string;
  fee: string;
  apr: string;
  tvl: string;
}

export interface Position {
  id: string;
  pool: LiquidityPool;
  liquidity: string;
  tokensOwed0: string;
  tokensOwed1: string;
  feeGrowthInside0: string;
  feeGrowthInside1: string;
}

export interface TradeHistory {
  id: string;
  timestamp: number;
  type: 'swap' | 'add_liquidity' | 'remove_liquidity';
  tokenIn: Token;
  tokenOut: Token;
  amountIn: string;
  amountOut: string;
  txHash: string;
  gasUsed: string;
  gasPrice: string;
}

export type TradeType = 'EXACT_INPUT' | 'EXACT_OUTPUT';

export interface TradeOptions {
  slippageTolerance: number;
  deadline: number;
  recipient?: string;
  allowedSlippage?: number;
}