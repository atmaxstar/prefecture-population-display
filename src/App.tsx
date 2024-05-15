import React from 'react'
import './App.css'
import PrefectureSelection from './PrerfectureSelection'
import PopulationChart from './PopulationChart'

function App() {
  return (
    <div className='App'>
      <h1>都道府県別の総人口推移グラフ</h1>
      <PrefectureSelection/>
      <PopulationChart/>
    </div>
  )
}

export default App
