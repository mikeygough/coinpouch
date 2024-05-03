import { prisma } from './prisma';

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
