
import React, { useEffect, useState } from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useCasesStore } from '../../../../store/cases/useCasesStore';


const DaysOfCases  = ()  => {

const {AllCases}=useCasesStore();
const [Cases, setCases] = useState([]);

const filterOpenCases =(data)=>{
    const fOpenCases = data?.filter(res=> res.status==="Abierto" || res.status==="En Verificacion");
    setCases(fOpenCases)
}


const calculateDate =(data)=>{
    const today = new Date();
    const yday = new Date(data);
    const ct =today.getTime()-yday.getTime();
    const CreationPassDate= Math.round(ct/(1000*60*60*24))-1;
    return CreationPassDate;
  };


  const tenDaysOrMore =()=>{ const tdom= Cases?.filter(res=> calculateDate(res.openDate) > 10 && calculateDate(res.openDate) <= 19);  return tdom.length}
  const twentyDaysOrMore =()=>{ const tdom= Cases?.filter(res=> calculateDate(res.openDate) >= 20 && calculateDate(res.openDate) <= 29 );  return tdom.length}
  const oneMonthOrMore =()=>{ const tdom= Cases?.filter(res=> calculateDate(res.openDate) >= 30 && calculateDate(res.openDate) <= 92 );  return tdom.length}
  const threeMonthOrMore =()=>{ const tdom= Cases?.filter(res=> calculateDate(res.openDate) >= 93 && calculateDate(res.openDate) <= 185 );  return tdom.length}
  const sixMonthOrMore =()=>{ const tdom= Cases?.filter(res=> calculateDate(res.openDate) >= 186 && calculateDate(res.openDate) <= 365 );  return tdom.length}
  const oneYearOrMore =()=>{ const tdom= Cases?.filter(res=> calculateDate(res.openDate) > 366 ); return tdom.length}



useEffect(() => {
    
    filterOpenCases(AllCases)

}, [AllCases]);


const data = [
  {name: '10 o +', Casos: tenDaysOrMore(),},
  {name: '20 o +',Casos: twentyDaysOrMore(),},
  {name: '1 Mes',Casos: oneMonthOrMore(),},
  {name: '3 Meses',Casos: threeMonthOrMore(),},
  {name: '6 Meses',Casos: sixMonthOrMore(),},
  {name: '1 Año',Casos: oneYearOrMore(),},
];

  return (
    <ResponsiveContainer width="100%" height="100%">
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis yAxisId="left" orientation="left" stroke="#0d47a1" />
      
      <Tooltip />
      <Legend />
      <Bar yAxisId="left" dataKey="Casos" fill="#0d47a1" />
      
    </BarChart>
  </ResponsiveContainer>
  )
}

export default DaysOfCases 



