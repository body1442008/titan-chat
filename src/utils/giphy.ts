const GIPHY_API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
export async function searchGiphy(query: string) {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${encodeURIComponent(query)}&limit=20`;
  const res = await fetch(url);
  return (await res.json()).data;
}