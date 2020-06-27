const url = "https://api.coincap.io/v2";

const getAssets = async () => {
  let res = await fetch(`${url}/assets?limit=20`);
  res = await res.json();

  return res.data;
};

const getAsset = async coin => {
  let res = await fetch(`${url}/assets/${coin}`);
  res = await res.json();

  return res.data;
};

const getAssetHistory = async coin => {
  const now = new Date();
  const end = now.getTime();
  now.setDate(now.getDate() - 1);
  const start = now.getTime();

  let res = await fetch(
    `${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
  );

  res = await res.json();
  return res.data;
};

const getMarkets = async coin => {
  let res = await fetch(`${url}/assets/${coin}/markets?limit=5`);
  res = await res.json();
  return res.data;
};

const getExchange = async id => {
  let res = await fetch(`${url}/exchanges/${id}`);
  res = await res.json();

  return res.data;
};

export default {
  getAssets,
  getAsset,
  getAssetHistory,
  getMarkets,
  getExchange
};
