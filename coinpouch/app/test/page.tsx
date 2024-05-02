const CMC_API_KEY = process.env.CMC_API_KEY;

async function getData() {
  const res = await fetch(
    'https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
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
  return res.json();
}

export default async function Test() {
  const data = await getData();
  // console.log(data);
  console.log(data['data'][0]);

  return (
    <div>
      <h1 className="font-bold text-3xl md:text-4xl text-white tracking-wide mb-10 text-center">
        You are on /test
      </h1>
      <h1 className="font-bold text-3xl md:text-4xl text-white tracking-wide mb-10 text-center">
        {data['data'][0]['id']}
      </h1>
    </div>
  );
}
