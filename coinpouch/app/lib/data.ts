import { prisma } from './prisma';

// export async function addCoin() {
//   const { symbol, actionType } = req.body;

//   try {
//     console.log('Adding coin...');
//     const coin = await prisma.portfolio.create({
//       data: {
//         symbol,
//         actionType,
//       },
//     });

//     console.log(coin);
//   } catch (error) {
//     console.log('Database Error:', error);
//     throw new Error('Failed to create coin.');
//   }
// }

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
