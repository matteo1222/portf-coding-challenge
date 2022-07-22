import { format } from "date-fns"

const BASE_URL = 'https://api.punkapi.com/v2'

export const fetchBeers = async (startMonth: Date | null, endMonth: Date | null, abvThreshold: string) => {
  const data = []
  let currentPageData = []

  let page = 1
  do {
    // construct search params string
    const searchParams = new URLSearchParams();
    searchParams.append('page', page.toString())

    if (startMonth) {
      searchParams.append('brewed_after', format(startMonth, 'MM-yyyy'))
    }
    if (endMonth) {
      searchParams.append('brewed_before', format(endMonth, 'MM-yyyy'))
    }
    if (abvThreshold !== '') {
      searchParams.append('abv_lt', abvThreshold)
    }
    const currentPageRes = await fetch(`${BASE_URL}/beers?${searchParams.toString()}`)
    currentPageData = await currentPageRes.json()

    data.push(...currentPageData)
    page++
  } while (currentPageData.length > 0)

  return data
}