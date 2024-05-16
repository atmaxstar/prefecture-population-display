import React from 'react'
import Chart from './Chart'
import { PopulationTypeForChart } from '../../hooks/useStorePopulations';

interface Props {
  selectedPrefectures: string[];
  populationStore: PopulationTypeForChart;
}

const PopulationChart = ({selectedPrefectures, populationStore}: Props) => {
  return (
    <Chart selectedPrefectures={selectedPrefectures} populationStore={populationStore}/>
  )
}

export default PopulationChart
