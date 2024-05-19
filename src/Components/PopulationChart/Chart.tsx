import React from 'react'
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
        <LineChart  data={displayedData} margin={{ top: 50, right: 30, left: 30, bottom: 50 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" label={{ value: '年度',  position: 'insideBottomRight', dx: 20, dy: 20 }}/>
          <YAxis label={{ value: '人口数', position: 'insideTopLeft', dy: -40 }} />
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
