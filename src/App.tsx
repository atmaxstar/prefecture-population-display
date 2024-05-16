import React, { useEffect, useState } from 'react'
import './App.css'
import PrefectureSelection from './Components/PrerfectureSelection'
import PopulationChart from './Components/PopulationChart'
import useStorePopulations from './hooks/useStorePopulations'
import useFetchPrefecture from './hooks/useFetchPrefectures'
import Loading from './Components/StatusDisplay/Loading'

function App() {
  const { status: status_prefecture, fetchPrefectures, prefectures } = useFetchPrefecture();
  const { status: status_population, populationStore, fetchedPrefectures, fetchPopulations } = useStorePopulations();
  const [selectedPrefectures, setSelectedPrefectures] = useState<string[]>([]);

  const pushSelectedPrefecture = (prefName: string) => {
    setSelectedPrefectures(prev => [...prev, prefName]);
  }

  const removeSelectedPrefecture = (prefName: string) => {
    setSelectedPrefectures(prev => {
      return prev.filter(pref => pref !== prefName);
    })
  }

  const isLoading = status_population === 'loading' || status_prefecture === 'loading';

  useEffect(()=>{
    fetchPrefectures();
  },[]);

  return (
    <div className='App'>
      {isLoading && <Loading/>}

      <h1>都道府県別の総人口推移グラフ</h1>

      <PrefectureSelection 
        prefectures={prefectures} 
        fetchedPrefectures={fetchedPrefectures} 
        fetchPopulations={fetchPopulations} 
        pushSelectedPrefectures={pushSelectedPrefecture} 
        removeSelectedPrefectures={removeSelectedPrefecture}
      />
      <PopulationChart selectedPrefectures={selectedPrefectures} populationStore={populationStore}/>
    </div>
  )
}

export default App
