// Minimal HTTP utility for Finnhub JS client
let fetchFn;
try {
  fetchFn = fetch;
} catch (e) {
  fetchFn = require('node-fetch');
}

export function simpleRequest(url, params, callback) {
  const query = Object.entries(params)
    .filter(([_, v]) => v !== undefined && v !== null)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&');
  const fullUrl = query ? `${url}?${query}` : url;
  fetchFn(fullUrl)
    .then(async (res) => {
      const text = await res.text();
      let data;
      try {
        data = JSON.parse(text);
      } catch (e) {
        data = text;
      }
      if (!res.ok) {
        callback(data || text || res.statusText, null, res);
      } else {
        callback(null, data, res);
      }
    })
    .catch((err) => callback(err, null, null));
} 