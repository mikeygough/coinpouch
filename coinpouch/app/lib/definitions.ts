export type Portfolio = {
  id: string; // created on the database
  actionType: 'BUY' | 'SELL' | 'HOLD';
  symbol: String;
};

export interface CoinData {
  data: {
    [symbol: string]: Array<{
      quote: {
        USD: {
          price: number;
        };
      };
    }>;
  };
}
