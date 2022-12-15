// use useWeatherLocation to get office, gridX, and gridY from the weather data then use [Weather.gov API](https://api.weather.gov/gridpoints/{office}/{grid X},{grid Y}/forecast) to get the weather data

import { useEffect, useState } from "react"
import useWeatherLocation from "./useWeatherLocation"

interface WeatherData {
  "@context": string[]
  "type": string
  "geometry": {
    "type": string
    "coordinates": number[]
  }
  "properties": {
    "updated": string
    "units": string
    "forecastGenerator": string
    "generatedAt": string
    "updateTime": string
    "validTimes": string
    "elevation": {
      "value": number
      "unitCode": string
    }
    "periods": {
      "number": number
      "name": string
      "startTime": string
      "endTime": string
      "isDaytime": boolean
      "temperature": number
      "temperatureUnit": string
      "temperatureTrend": string | null
      "windSpeed": string
      "windDirection": string
      "icon": string
      "shortForecast": string
      "detailedForecast": string
    }[]
  }
}

const useWeatherData = (office: string, gridX: number, gridY: number) => {
  // call useWeatherLocation to get the weather data
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const url = `https://api.weather.gov/gridpoints/${office}/${gridX},${gridY}/forecast`
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data)
      })
      .catch((error) => {
        setError(error)
      })
  }
  , [office])

  return { weatherData, error }
}

export default useWeatherData
