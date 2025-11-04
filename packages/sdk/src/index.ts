// SODAX Purple SDK
export * from '@sodax/types';

// Core SDK functionality
export class SodaxPurpleSDK {
  private apiUrl: string;
  private chainId: number;

  constructor(config: { apiUrl?: string; chainId?: number } = {}) {
    this.apiUrl = config.apiUrl || 'https://api.sodax.purple';
    this.chainId = config.chainId || 1;
  }

  // Swap functionality
  async getSwapQuote(inputToken: string, outputToken: string, amount: string) {
    // Mock implementation for now
    return {
      inputToken,
      outputToken,
      inputAmount: amount,
      outputAmount: '0',
      rate: '1.0',
      priceImpact: '0.1%',
      gasEstimate: '150000',
      route: [inputToken, outputToken],
    };
  }

  // Chain utilities
  getChainId(): number {
    return this.chainId;
  }

  // Purple theme helpers
  static getPurpleTheme() {
    return {
      primary: '#7C3AED',
      light: '#A855F7',
      deep: '#5B21B6',
      bright: '#C084FC',
      darker: '#4C1D95',
      gradient: {
        start: '#7C3AED',
        end: '#A855F7',
      },
    };
  }
}

// Default export
export default SodaxPurpleSDK;