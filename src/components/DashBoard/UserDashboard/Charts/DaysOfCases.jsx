import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useCasesStore } from '../../../../store/cases/useCasesStore';


const data = [
  {name: '10 Dias', Casos: 2400,},
  {name: '20 Dias',Casos: 1398,},
  {name: '1 Mes',Casos: 9800,},
  {name: '3 Meses',Casos: 3908,},
  {name: '6 Meses',Casos: 4800,},
  {name: '1 Año',Casos: 3800,},
];


export default class Example extends PureComponent {
    

  render() {

    return (
      <ResponsiveContainer width="85%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 1,
            left: 40,
            bottom: 0,
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
    );
  }
}
