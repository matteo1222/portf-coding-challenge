const BASE_URL = 'https://api.punkapi.com/v2'

export const fetchBeers = () => {
  return fetch(`${BASE_URL}/beers`).then(res => res.json()).then(data => console.log(data))
}