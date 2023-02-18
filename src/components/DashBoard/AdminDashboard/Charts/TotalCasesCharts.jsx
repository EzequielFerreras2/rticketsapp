import { Tooltip } from '@mui/material';
import React from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend } from 'recharts';

const TotalCasesCharts = () => {

  const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];



  return (
    
    <ResponsiveContainer width="100%" height="100%">
     <PieChart width={800} height={400} >
        <Pie
          data={data}
          cx={350}
          cy={200}
          innerRadius={60}
          outerRadius={150}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend verticalAlign="bottom" height={36}/>
      </PieChart>
    
  </ResponsiveContainer>
    
  )
}

export default TotalCasesCharts