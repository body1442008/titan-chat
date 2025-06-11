import algoliasearch from "algoliasearch/lite";
const client = algoliasearch("YourAlgoliaAppID", "YourSearchOnlyApiKey");
const index = client.initIndex("messages");

export async function searchMessages(query: string) {
  const res = await index.search(query);
  return res.hits;
}