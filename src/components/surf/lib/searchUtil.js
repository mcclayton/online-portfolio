export async function fetchSearchResults(searchText, maxResults = 5) {
  const searchUrl = generateSearchUrl(searchText, maxResults);

  return fetch(searchUrl)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw Error(
        `Unexpected response while fetching search results! HTTP status was ${response.status}`
      );
    })
    .then((data) => data)
    .catch((error) => {
      throw Error(error.message);
    });
}

export function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

function generateSearchUrl(searchText, maxResults) {
  const baseUrl = `https://services.surfline.com/search/site`;
  let searchParams = new URLSearchParams('');

  searchParams.append('q', searchText);
  searchParams.append('querySize', maxResults);
  searchParams.append('suggestionSize', 1);
  searchParams.append('newsSearch', false);

  return `${baseUrl}?${searchParams.toString()}`;
}
