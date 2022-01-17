export const API_BASE = "http://localhost:3001";
export const getProductList = async ({ searchableTerms }) => {
  try {
    const result = await fetch(`${API_BASE}/product?${searchableTerms}`);
    return result;
  } catch (err) {
    console.error(err);
    throw new Error("API is not responding");
  }
};
