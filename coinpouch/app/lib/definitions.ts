export type Portfolio = {
  id: string; // created on the database
  actionType: 'BUY' | 'SELL' | 'HOLD';
  symbol: String;
};
