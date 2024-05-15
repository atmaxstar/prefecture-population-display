import React from 'react'
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import { GRAPH_COLORS } from './COLORS'

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

const Chart = () => {
    return (
      <LineChart width={730} height={250} data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" label={{ value: '年度',  position: 'insideBottomRight' }}/>
        <YAxis label={{ value: '人口数', position: 'insideTopLeft' }}/>
        <Tooltip />
        <Legend />
        {prefs.map((pref, index)=><Line type="monotone" dataKey={pref} stroke={GRAPH_COLORS[index % GRAPH_COLORS.length]} />)}
      </LineChart>
    )
}

export default Chart
