import React from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from 'recharts';

const TotalCasesCharts = () => {

  const data = [
    {
      subject: 'Math',
      A: 120,
      B: 110,
      fullMark: 200,
    },
    {
      subject: 'Chinese',
      A: 98,
      B: 130,
      fullMark: 200,
    },
    {
      subject: 'English',
      A: 86,
      B: 130,
      fullMark: 200,
    },
    {
      subject: 'Geography',
      A: 99,
      B: 100,
      fullMark: 200,
    },
    {
      subject: 'Physics',
      A: 85,
      B: 90,
      fullMark: 200,
    },
    {
      subject: 'History',
      A: 65,
      B: 85,
      fullMark: 200,
    },
  ];
  return (
    
    <ResponsiveContainer width="100%" height="100%">
    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      <Legend />
    </RadarChart>
  </ResponsiveContainer>
    
  )
}

export default TotalCasesCharts

/*import React from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend, Pie, PieChart } from 'recharts';

const TotalCasesCharts = () => {

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

  const data02 = [
    {
      "name": "Group A",
      "value": 2400
    },
    {
      "name": "Group B",
      "value": 4567
    },
    {
      "name": "Group C",
      "value": 1398
    },
    {
      "name": "Group D",
      "value": 9800
    },
    {
      "name": "Group E",
      "value": 3908
    },
    {
      "name": "Group F",
      "value": 4800
    }
  ];
  return (
    
    <ResponsiveContainer width="100%" height="100%">
    <PieChart width={730} height={250}>
      <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="q00%" innerRadius={60} outerRadius={150} fill={COLORS[6 % COLORS.length]} label  />
      <Legend verticalAlign="bottom" height={36}/>
    </PieChart>
    
  </ResponsiveContainer>
    
  )
}

export default TotalCasesCharts */