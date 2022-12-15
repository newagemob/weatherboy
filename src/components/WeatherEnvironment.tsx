// This component will render the weather environment based on the weather data
// use [Weather.gov API](https://api.weather.gov/points/{latitude},{longitude}) to get the weather data
// Depending on the weather data, render the weather environment accordingly

import React, { useEffect, useState } from 'react'
import useWeatherLocation from '../hooks/useWeatherLocation'
import useWeatherData from '../hooks/useWeatherData'

const WeatherEnvironment = () => {
  const locations: {
    city: string,
    latitude: number,
    longitude: number,
    cwa: string,
    gridX: number,
    gridY: number
  }[] = [
      {
        // Houston
        city: 'Houston',
        latitude: 29.7604,
        longitude: -95.3698,
        cwa: 'HGX',
        gridX: 65,
        gridY: 97
      },
      {
        // San Francisco
        city: 'San Francisco',
        latitude: 37.7749,
        longitude: -122.4194,
        cwa: 'MTR',
        gridX: 85,
        gridY: 105
      },
      {
        // Astoria, OR
        city: 'Astoria',
        latitude: 46.1887,
        longitude: -123.83,
        cwa: 'PQR',
        gridX: 81,
        gridY: 141
      },
      {
        // Nashville
        city: 'Nashville',
        latitude: 36.1627,
        longitude: -86.7816,
        cwa: 'OHX',
        gridX: 49,
        gridY: 56
      }
    ]


  const [currentLocation, setCurrentLocation] = useState<string | string>(locations[0].city)

  const [longitude, setLongitude] = useState<number | number>(locations[0].longitude)
  const [latitude, setLatitude] = useState<number | number>(locations[0].latitude)
  // params for useWeatherData url
  const [cwa, setCwa] = useState<string | string>(locations[0].cwa)
  const [gridX, setGridX] = useState<number | number>(locations[0].gridX)
  const [gridY, setGridY] = useState<number | number>(locations[0].gridY)

  const [conditions, setConditions] = useState<string | string>('')
  const [temp, setTemp] = useState<number | number>(0)

  const { weatherLocationData, error } = useWeatherLocation(locations[0].latitude, locations[0].longitude)
  const { weatherData, error: dataError } = useWeatherData(cwa, gridX, gridY)

  useEffect(() => {
    if (weatherData) {
      const { properties } = weatherData
      const { periods } = properties
      const { shortForecast } = periods[0]
      const { temperature } = periods[0]
      setConditions(shortForecast)
      setTemp(temperature)
    }
  }, [weatherLocationData, weatherData])


  const handleChangeCity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const city = e.target.value

    setCurrentLocation(city)

    switch (city) {
      case 'Houston, TX':
        setCwa('HGX')
        setGridX(65)
        setGridY(97)
        setLatitude(29.7604)
        setLongitude(-95.3698)
        break
      case 'San Francisco, CA':
        setCwa('MTR')
        setGridX(85)
        setGridY(105)
        setLatitude(37.7749)
        setLongitude(-122.4194)
        break
      case 'Astoria, OR':
        setCwa('PQR')
        setGridX(81)
        setGridY(141)
        setLatitude(46.1887)
        setLongitude(-123.83)
        break
      case 'Nashville, TN':
        setCwa('OHX')
        setGridX(49)
        setGridY(56)
        setLatitude(36.1627)
        setLongitude(-86.7816)
        break
      default:
        break
    }
  }


  return (
    <>
      <div className="weather_environment_location">
        <div className='weather_data'>
          <h1 className='weather_title'>
            {
              weatherLocationData ? (
                <>
                  {weatherLocationData?.properties?.relativeLocation?.properties?.city}, {weatherLocationData?.properties?.relativeLocation?.properties?.state}

                  {/* select city */}
                  <select value={currentLocation} onChange={(e) => handleChangeCity(e)}>
                    <option value="Houston, TX">Houston, TX</option>
                    <option value="San Francisco, CA">San Francisco, CA</option>
                    <option value="Astoria, OR">Astoria, OR</option>
                    <option value="Nashville, TN">Nashville, TN</option>
                  </select>
                </>

              ) : (
                error && <p>{error.message}</p>
              )
            }
          </h1>
          {weatherLocationData ? (
            <div id="weather_info_card">
              <p>Latitude: {latitude}</p>
              <p>Longitude: {longitude}</p>
              <p>CWA: {cwa}</p>
              <p>Grid X: {gridX}</p>
              <p>Grid Y: {gridY}</p>
            </div>
          ) : (
            error && <p>{error.message}</p>
          )}
        </div>

        <div className='weather_data'>
          <h2 className='weather_title'>
            Weather Data
          </h2>
          {weatherData ? (
            <div id="weather_info_card">
              <p>Conditions: {conditions}</p>
              <p>Temperature: {temp}</p>
            </div>
          ) : (
            dataError && <p>{dataError.message}</p>
          )}
        </div>
      </div>

    </>
  )
}

export default WeatherEnvironment
