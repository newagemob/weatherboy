import { useState } from 'react'
import WeatherEnvironment from './components/WeatherEnvironment'
import Environment from './components/Environment'
import './App.css'

function App() {

  return (
    <>
      <div className="App">
        <Environment />

        <div className="app_data">
          <WeatherEnvironment />
        </div>

      </div>
    </>
  )
}

export default App
