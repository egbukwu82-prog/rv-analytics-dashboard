import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const UtilizationChart = ({ data }) => {
  const colors = {
    van: '#0ea5e9',
    cal: '#8b5cf6',
    edm: '#ec4899',
    tor: '#f59e0b',
    mtl: '#10b981',
    hfx: '#ef4444'
  };

  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis 
            dataKey="month" 
            stroke="#6b7280"
            style={{ fontSize: '12px' }}
          />
          <YAxis 
            stroke="#6b7280"
            style={{ fontSize: '12px' }}
            label={{ value: 'Utilization %', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#fff', 
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              padding: '12px'
            }}
            formatter={(value) => `${value}%`}
          />
          <Legend 
            wrapperStyle={{ paddingTop: '20px' }}
            iconType="line"
          />
          <Line 
            type="monotone" 
            dataKey="van" 
            stroke={colors.van} 
            strokeWidth={2}
            name="Vancouver"
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
          />
          <Line 
            type="monotone" 
            dataKey="cal" 
            stroke={colors.cal} 
            strokeWidth={2}
            name="Calgary"
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
          />
          <Line 
            type="monotone" 
            dataKey="edm" 
            stroke={colors.edm} 
            strokeWidth={2}
            name="Edmonton"
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
          />
          <Line 
            type="monotone" 
            dataKey="tor" 
            stroke={colors.tor} 
            strokeWidth={2}
            name="Toronto"
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
          />
          <Line 
            type="monotone" 
            dataKey="mtl" 
            stroke={colors.mtl} 
            strokeWidth={2}
            name="Montreal"
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
          />
          <Line 
            type="monotone" 
            dataKey="hfx" 
            stroke={colors.hfx} 
            strokeWidth={2}
            name="Halifax"
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UtilizationChart;
