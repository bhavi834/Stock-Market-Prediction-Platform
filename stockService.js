const API_KEY = "demo";

export const getStockData = async (
  symbol
) => {

  const response = await fetch(

    `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`

  );

  const data =
    await response.json();

  return data["Global Quote"];

};