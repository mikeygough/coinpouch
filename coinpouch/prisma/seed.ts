import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.portfolio.createMany({
    data: [
      {
        symbol: 'BTC',
        actionType: 'BUY',
      },
      {
        symbol: 'ETH',
        actionType: 'BUY',
      },
      {
        symbol: 'USDC',
        actionType: 'HOLD',
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect);
