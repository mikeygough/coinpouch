'use server';
import { prisma } from './prisma';
import { z } from 'zod';
import { redirect } from 'next/navigation';

// validate data
const CoinFormSchema = z.object({
  id: z.string(),
  symbol: z.string(),
  actionType: z.enum(['BUY', 'SELL', 'HOLD']),
});

const CreateCoin = CoinFormSchema.omit({ id: true });

export async function createCoin(formData: FormData) {
  const { symbol, actionType } = CreateCoin.parse({
    symbol: formData.get('symbol'),
    actionType: formData.get('actionType'),
  });

  console.log('Adding coin...');
  const coin = await prisma.portfolio.create({
    data: {
      symbol,
      actionType,
    },
  });
  redirect('/dashboard');
}
