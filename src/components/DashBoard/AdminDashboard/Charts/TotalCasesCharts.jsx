/* eslint-disable react-hooks/exhaustive-deps */
import { Tooltip } from '@mui/material';
import React, { useEffect,useMemo } from 'react'
import { PieChart, Pie,  Cell, ResponsiveContainer, Legend } from 'recharts';
import Swal from 'sweetalert2';
import { useCasesStore } from '../../../../store/cases/useCasesStore';

const TotalCasesCharts = ({setOpenCasesCount,}) => {

  const {AllCases}=useCasesStore();
  const TotalCases= AllCases.length;
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042','#834bff','#33bfff','#ff4569','#af52bf'];

    const openCases =()=>{const opl = AllCases?.filter(res=> res.status==="Abierto");return opl.length;};
    const verificateCases =()=>{const vcl = AllCases?.filter(res=> res.status==="En Verificacion");return vcl.length;};
    const closeSasCases =()=>{const csl = AllCases?.filter(res=> res.status==="Cerrado Satisfactorio");return csl.length;};
    const closeIncCases =()=>{const cil = AllCases?.filter(res=> res.status==="Cerrado Incorrecto");return cil.length;};
    const closeNrCases =()=>{const cnrl = AllCases?.filter(res=> res.status==="Cerrado No Resuelto");return cnrl.length;};
    const hpriorityCasesOpen =()=>{const hpc = AllCases?.filter(res=> res.casesCategory.priority==="Alta" && res.status==="Abierto");return hpc.length;};
    const mpriorityCasesOpen =()=>{const mpc = AllCases?.filter(res=> res.casesCategory.priority==="Media" && res.status==="Abierto");return mpc.length;};
    const lpriorityCasesOpen =()=>{const lpc = AllCases?.filter(res=> res.casesCategory.priority==="Baja" && res.status==="Abierto");return lpc.length;};
    const hpriorityCasesVery =()=>{const hpc = AllCases?.filter(res=> res.casesCategory.priority==="Alta" && res.status==="En Verificacion");return hpc.length;};
    const mpriorityCasesVery =()=>{const mpc = AllCases?.filter(res=> res.casesCategory.priority==="Media" && res.status==="En Verificacion");return mpc.length;};
    const lpriorityCasesVery =()=>{const lpc = AllCases?.filter(res=> res.casesCategory.priority==="Baja" && res.status==="En Verificacion");return lpc.length;};
  

  useEffect(() => {
    if(AllCases?.length===0)
    {
      Swal.fire({
        title: `Loading...`,
        timerProgressBar: true,
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading()
        },})
    }
  }, [AllCases]); 

useEffect(() => {
  setOpenCasesCount({
    TotalCases:TotalCases,
    OpenCases:openCases(),
    verificateCases:verificateCases(),
    CloseSasCases:closeSasCases(),
    CloseIncCases:closeIncCases(),
    HpriorityCases:hpriorityCasesOpen()+hpriorityCasesVery(),
    MpriorityCases:mpriorityCasesOpen()+mpriorityCasesVery(),
    LpriorityCases:lpriorityCasesOpen()+lpriorityCasesVery(),
  })
}, [AllCases]);

  const data = [
    { name: `Abiertos ${Math.round(openCases()*100/TotalCases)}%`, value: openCases()},
    { name: `En Verificacion ${Math.round(verificateCases()*100/TotalCases)}%`, value: verificateCases()},
    { name: `Cerrado Satidfactorio ${ Math.round(closeSasCases()*100/TotalCases)}%`, value: closeSasCases()},
    { name: `Cerrado Incorrecto ${Math.round(closeIncCases()*100/TotalCases)}%`, value: closeIncCases()},
    { name: `Cerrado No Resuelto ${Math.round(closeNrCases()*100/TotalCases)}%`, value: closeNrCases()},
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