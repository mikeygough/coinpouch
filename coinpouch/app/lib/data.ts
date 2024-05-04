import { prisma } from './prisma';
import { CoinData } from './definitions';
import { formatCurrency } from '../lib/util';
const CMC_API_KEY = process.env.CMC_API_KEY;

export async function fetchCoins() {
  try {
    console.log('Fetching coin data...');
    const coins = await prisma.portfolio.findMany({
      select: {
        id: true,
        symbol: true,
        actionType: true,
      },
    });

    console.log(coins);
    return coins;
  } catch (error) {
    console.log('Database Error:', error);
    throw new Error('Failed to fetch coin data.');
  }
}

export async function fetchCoinPrice(
  symbol: string
): Promise<string> {
  const res = await fetch(
    `https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?symbol=${symbol}&convert=USD`,
    {
      headers: {
        'X-CMC_PRO_API_KEY': `${CMC_API_KEY}`,
        Accept: 'application/json',
      },
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data: CoinData = await res.json();
  const formattedData: string = formatCurrency(
    data.data[symbol][0]['quote']['USD']['price']
  );
  return formattedData;
}
