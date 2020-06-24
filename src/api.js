const url = "https://api.coincap.io/v2";

const getAssets = async () => {
  let res = await fetch(`${url}/assets?limit=20`);
  res = await res.json();

  return res.data;
};

export default { getAssets };
