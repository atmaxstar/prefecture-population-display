import React from 'react'
import Chart from './Chart'
import { PopulationTypeForChart } from '../../hooks/useStorePopulations';

interface Props {
  selectedPrefectures: string[];
  populationStore: PopulationTypeForChart;
}

const PopulationChart = ({selectedPrefectures, populationStore}: Props) => {
  return (
    <div className='chart-container'>
      <Chart selectedPrefectures={selectedPrefectures} populationStore={populationStore}/>
    </div>
  )
}

export default PopulationChart
