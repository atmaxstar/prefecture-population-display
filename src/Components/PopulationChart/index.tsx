import React, { useState } from 'react'
import Chart from './Chart'
import { PopulationTypeForChart } from '../../hooks/useStorePopulations';

interface Props {
  selectedPrefectures: string[];
  populationStore: PopulationTypeForChart;
}

const PopulationChart = ({selectedPrefectures, populationStore}: Props) => {
  const [selectedLabel, setSelectedLabel] = useState<'総人口'|'年少人口'|'生産年齢人口'|'老年人口'>('総人口');
  const Options = ['総人口','年少人口','生産年齢人口','老年人口'];

  const selectLabel = (event: React.ChangeEvent<HTMLInputElement>) => setSelectedLabel(event.target.value as '総人口'|'年少人口'|'生産年齢人口'|'老年人口');

  return (
    <div className='chart-container'>
      {
        Options.map(op => 
          <div key={op}>
            <input id={op} type="radio" name="category" value={op}  checked={selectedLabel === op} onChange={selectLabel}/>
            <label htmlFor={op}>{op}</label>
          </div>
        )
      }

      <Chart selectedPrefectures={selectedPrefectures} populationStore={populationStore} selectedLabel={selectedLabel}/>
    </div>
  )
}

export default PopulationChart
