import React, { useEffect } from 'react'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { GRAPH_COLORS } from './COLORS'
import { PopulationTypeForChart } from '../../hooks/useStorePopulations'

const prefs = [
  "愛知県","長野県"
]
const data = [
  {
    year: 2000,
    愛知県: 4000,
    長野県: 3000
  },
  {
    year: 2005,
    愛知県: 5000,
    長野県: 2000
  },
  {
    year: 2010,
    愛知県: 7000,
    長野県: 1000
  },
  {
    year: 2015,
    愛知県: 9000,
    長野県: 7000
  },
  {
    year: 2020,
    愛知県: 2000,
    長野県: 7000
  },
  {
    year: 2025,
    愛知県: 9000,
    長野県: 6000
  },
]

interface Props {
  selectedPrefectures: string[];
  populationStore: PopulationTypeForChart;
}

const Chart = ({selectedPrefectures, populationStore}: Props) => {
    const displayedData = populationStore.総人口;

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
