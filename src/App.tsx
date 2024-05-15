import React, { useEffect } from 'react'
import './App.css'
import PrefectureSelection from './PrerfectureSelection'
import PopulationChart from './PopulationChart'
import useFetchPopulations from '../hooks/useFetchPopulations'
import useFetchPrefecture from '../hooks/useFetchPrefectures'

function App() {
  const { status: status_prefecture, fetchPrefectures, prefectures } = useFetchPrefecture();
  const { status: status_population, fetchPopulations, populations } = useFetchPopulations();

  useEffect(()=>{

  },[]);

  return (
    <div className='App'>
      <h1>都道府県別の総人口推移グラフ</h1>
      <PrefectureSelection/>
      <PopulationChart/>
    </div>
  )
}

export default App
