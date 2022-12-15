// use [Weather.gov API](https://api.weather.gov/points/{latitude},{longitude}) to get the weather location

import { useEffect, useState } from "react"

interface WeatherLocation {
  "@context": string[]
  "geometry": {
    "type": string
    "coordinates": number[]
  }
  "id": string
  "type": string
  "properties": {
    "@id": string
    "@type": string
    "cwa": string
    "forecastOffice": string
    "gridId": string
    "gridX": number
    "gridY": number
    "forecast": string
    "forecastHourly": string
    "forecastGridData": string
    "observationStations": string
    "relativeLocation": {
      "type": string
      "properties": {
        "city": string
        "state": string
        "distance": {
          "value": number
          "unitCode": string
        }
        "bearing": {
          "value": number
          "unitCode": string
        }
      }
    }
    "forecastZone": string
    "county": string
    "fireWeatherZone": string
    "timeZone": string
    "radarStation": string
  }
}

const useWeatherLocation = (latitude: number, longitude: number) => {
  const [weatherLocationData, setWeatherLocationData] = useState<WeatherLocation | null>(null)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const url = `https://api.weather.gov/points/${latitude},${longitude}`
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setWeatherLocationData(data)
      })
      .catch((error) => {
        setError(error)
      })
  }, [latitude, longitude])

  return { weatherLocationData, error }
}

export default useWeatherLocation
