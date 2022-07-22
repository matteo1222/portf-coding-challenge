import { parse, format, add } from 'date-fns'
import { BeerData, IBeer } from './transformBeerData'

// get a range of month string based on the earliest month and lastest month in beerData
// e.g. ['Jan 10', 'Feb 10', 'Mar 10']
export const getMonthTicksValues = (beerData?: BeerData) => {
  if (!beerData) return []

  const monthTicksValues: string[] = []
  let earliestMonth: Date | null = null
  let latestMonth: Date | null = null

  beerData.forEach((beer: IBeer) => {
    const firstBrewedDate = parse(beer.first_brewed, 'MMM yy', new Date())
    if (earliestMonth === null || firstBrewedDate < earliestMonth) earliestMonth = firstBrewedDate
    if (latestMonth === null || firstBrewedDate > latestMonth) latestMonth = firstBrewedDate
  })

  if (earliestMonth === null || latestMonth === null) return []
  while (earliestMonth <= latestMonth) {
    monthTicksValues.push(format(earliestMonth, 'MMM yy'))
    earliestMonth = add(earliestMonth, {
      months: 1
    })
  }

  return monthTicksValues
}