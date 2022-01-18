export const API_BASE = "http://localhost:3001";

export const SEARCHABLE_TERMS_PARAM = "searchableTerms_like";
export const SORT_BY_PRICE_PARAM = "sortyByPrice";

export const http = async (url, method = "GET") => {
  try {
    const result = await fetch(url, { method });
    return result.json();
  } catch (err) {
    throw new Error(err);
  }
};

export const getProductList = async ({ searchableTerms }) => {
  try {
    const url = `${API_BASE}/product?${SEARCHABLE_TERMS_PARAM}=${searchableTerms}`;
    return await http(url);
  } catch (err) {
    throw new Error(err);
  }
};
