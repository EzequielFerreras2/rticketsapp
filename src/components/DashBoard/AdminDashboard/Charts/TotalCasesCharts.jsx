/* eslint-disable react-hooks/exhaustive-deps */
import { Tooltip } from '@mui/material';
import React, { useEffect } from 'react'
import { PieChart, Pie,  Cell, ResponsiveContainer, Legend } from 'recharts';
import { useCasesStore } from '../../../../store/cases/useCasesStore';

const TotalCasesCharts = ({setOpenCasesCount,}) => {

  const {AllCases,onGetCases}=useCasesStore();

  const TotalCases= AllCases.length;

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042','#834bff','#33bfff','#ff4569','#af52bf'];

    const openCases =()=>{
      const opl = AllCases.filter(res=> res.status==="Abierto");
      return opl.length;
    };
    const verificateCases =()=>{
      const vcl = AllCases.filter(res=> res.status==="En Verificacion");
      return vcl.length;
    };
    const closeSasCases =()=>{
      const csl = AllCases.filter(res=> res.status==="Cerrado Satisfactorio");
      return csl.length;
    };
    const closeIncCases =()=>{
      const cil = AllCases.filter(res=> res.status==="Cerrado Incorrecto");
      return cil.length;
    };
    const closeNrCases =()=>{
      const cnrl = AllCases.filter(res=> res.status==="Cerrado No Resuelto");
      return cnrl.length;
    };

useEffect(() => {
    onGetCases();
  }, []);

useEffect(() => {
    openCases()
  }, [AllCases]);

useEffect(() => {
  setOpenCasesCount({
    TotalCases:TotalCases,
    OpenCases:openCases(),
    verificateCases:verificateCases(),
    CloseSasCases:closeSasCases(),
    CloseIncCases:closeIncCases(),
  })
}, [AllCases]);

  const data = [
    { name: 'Abierto', value: openCases()},
    { name: 'En Verificacion', value: verificateCases()},
    { name: 'Cerrado Satidfactorio', value: closeSasCases()},
    { name: 'Cerrado Incorrecto', value: closeIncCases()},
    { name: 'Cerrado No Resuelto', value: closeNrCases()},
    
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