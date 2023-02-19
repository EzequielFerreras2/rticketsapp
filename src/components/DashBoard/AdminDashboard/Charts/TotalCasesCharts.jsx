import { Tooltip } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { PieChart, Pie,  Cell, ResponsiveContainer, Legend } from 'recharts';
import { useCasesStore } from '../../../../store/cases/useCasesStore';

const TotalCasesCharts = ({setOpenCasesCount,}) => {

  const {AllCases,onGetCases}=useCasesStore();

  const TotalCases= AllCases.length;

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const openCases =()=>{

    const opl = AllCases.filter(res=> res.status==="Abierto");
    return opl.length;

  };


  useEffect(() => {
    onGetCases();
  }, [])

useEffect(() => {
  openCases()
}, [AllCases])



useEffect(() => {

  setOpenCasesCount({
    TotalCases:TotalCases,
    OpenCases:openCases()
  })
  
}, [AllCases])



  const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];

  



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