import { fetchCoinPrice } from '../lib/data';

export default async function Test() {
  const sym = 'BTC';
  const data = await fetchCoinPrice(sym);

  return (
    <div>
      <h1 className="font-bold text-3xl md:text-4xl text-white tracking-wide mb-10 text-center">
        You are on /test
      </h1>
      <h1 className="font-bold text-3xl md:text-4xl text-white tracking-wide mb-10 text-center">
        {data}
      </h1>
    </div>
  );
}
