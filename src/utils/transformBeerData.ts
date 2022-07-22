import { parse, format } from 'date-fns'
import { getMonthTicksValues } from './getMonthTicksValues'

export type IBeer = {
  first_brewed: string
}
export type BeerData = IBeer[]

// transform first_brewed data format from 'mm/yyyy' to 'mmm/yy'
// sort the data based on date
// reduce to beer sum and first brewed
// output format: [{ first_brewed: 'Jan 10', beer_sum: 5 }, first_brewed: 'Feb 10', beer_sum: 3 }, ...]
export const transformBeerData = (beerData: BeerData) => {
  try {
    const beerFirstBrewedToSum = new Map()
    const beerDataTransformed = beerData
      .map((beer: IBeer) => {
        if (/\d\d\/\d\d\d\d/.test(beer.first_brewed)) {
          return {
            first_brewed: format(parse(beer.first_brewed, 'MM/yyyy', new Date()), 'MMM yy')
          }
        }
        // month not available then we assume it is January
        if (/\d\d\d\d/.test(beer.first_brewed)) {
          return {
            first_brewed: format(parse(beer.first_brewed, 'yyyy', new Date()), 'MMM yy')
          }
        }
        return {
          first_brewed: 'NA'
        }
      })
    
    const monthTicksValues = getMonthTicksValues(beerDataTransformed)

    monthTicksValues.forEach((monthTick: string) => {
      beerFirstBrewedToSum.set(monthTick, 0)
    })
    beerDataTransformed.forEach((beer: IBeer) => {
      beerFirstBrewedToSum.set(beer.first_brewed, beerFirstBrewedToSum.get(beer.first_brewed) + 1)
    })

    const result = Array.from(beerFirstBrewedToSum.entries()).map((keyVal: [string, string]) => {
      return {
        first_brewed: keyVal[0],
        beer_sum: keyVal[1]
      }
    })
    return result

  } catch(error) {
    console.error(error)
  }
  
}