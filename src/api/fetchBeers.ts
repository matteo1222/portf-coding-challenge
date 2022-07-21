const BASE_URL = 'https://api.punkapi.com/v2'

export const fetchBeers = async () => {
  const data = []
  let currentPageData = []
  let page = 1
  do {
    const currentPageRes = await fetch(`${BASE_URL}/beers?page=${page}`)
    currentPageData = await currentPageRes.json()

    data.push(...currentPageData)
    page++
  } while (currentPageData.length > 0)

  return data
}