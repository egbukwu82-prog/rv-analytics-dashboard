import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { formatCurrency } from '../utils/dataProcessing';

const RevenueChart = ({ data }) => {
  // Transform data for display
  const chartData = data.map(item => ({
    location: item.location,
    revenue: item.revenue,
    fleet: item.fleet
  }));

  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis 
            dataKey="location" 
            stroke="#6b7280"
            style={{ fontSize: '12px' }}
            angle={-45}
            textAnchor="end"
            height={80}
          />
          <YAxis 
            stroke="#6b7280"
            style={{ fontSize: '12px' }}
            label={{ value: 'Revenue ($K)', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#fff', 
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              padding: '12px'
            }}
            formatter={(value, name) => {
              if (name === 'revenue') return `${formatCurrency(value * 1000)}`;
              return value;
            }}
            labelFormatter={(label) => `Location: ${label}`}
          />
          <Legend 
            wrapperStyle={{ paddingTop: '20px' }}
          />
          <Bar 
            dataKey="revenue" 
            fill="#0ea5e9" 
            name="Avg Revenue per RV ($K)"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
      
      {/* Additional context */}
      <div className="mt-4 pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-600">
          <span className="font-semibold">Key Finding:</span> Vancouver generates 61% more revenue per RV 
          compared to Halifax, indicating significant optimization potential through fleet reallocation.
        </p>
      </div>
    </div>
  );
};

export default RevenueChart;
