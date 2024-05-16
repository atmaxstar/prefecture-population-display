import React, { useEffect } from 'react'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { GRAPH_COLORS } from './COLORS'
import { PopulationTypeForChart } from '../../hooks/useStorePopulations'

interface Props {
  selectedPrefectures: string[];
  populationStore: PopulationTypeForChart;
  selectedLabel: '総人口'|'年少人口'|'生産年齢人口'|'老年人口';
}

const Chart = ({selectedPrefectures, populationStore, selectedLabel}: Props) => {
    const displayedData = populationStore[selectedLabel];

    return (
      <ResponsiveContainer width='100%' height={300}>
        <LineChart  data={displayedData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" label={{ value: '年度',  position: 'insideBottomRight' }}/>
          <YAxis label={{ value: '人口数', position: 'insideTopLeft' }} />
          <Tooltip />
          <Legend />
          {selectedPrefectures.map((pref, index) => 
            <Line key={pref} type="monotone" dataKey={pref} stroke={GRAPH_COLORS[index % GRAPH_COLORS.length]} />)
          }
        </LineChart>
      </ResponsiveContainer>
    )
}

export default Chart
