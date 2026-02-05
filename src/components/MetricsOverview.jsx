import React from 'react';
import { formatCurrency, formatPercentage } from '../utils/dataProcessing';

const MetricsOverview = ({ avgUtilization, performanceGap, estimatedLoss, seasonalData }) => {
  const metrics = [
    {
      label: 'Average Utilization',
      value: formatPercentage(avgUtilization),
      change: 'vs 75% target',
      status: parseFloat(avgUtilization) >= 75 ? 'positive' : 'warning',
      icon: '📊'
    },
    {
      label: 'Performance Gap',
      value: formatPercentage(performanceGap.gap),
      change: `${performanceGap.top.location} vs ${performanceGap.bottom.location}`,
      status: 'negative',
      icon: '📉'
    },
    {
      label: 'Estimated Revenue Loss',
      value: formatCurrency(estimatedLoss),
      change: 'Annual opportunity',
      status: 'negative',
      icon: '💰'
    },
    {
      label: 'Peak Season Utilization',
      value: formatPercentage(seasonalData.peak.avgUtilization),
      change: seasonalData.peak.months,
      status: 'positive',
      icon: '☀️'
    }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'positive':
        return 'text-green-600';
      case 'warning':
        return 'text-yellow-600';
      case 'negative':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  const getStatusBg = (status) => {
    switch(status) {
      case 'positive':
        return 'bg-green-50';
      case 'warning':
        return 'bg-yellow-50';
      case 'negative':
        return 'bg-red-50';
      default:
        return 'bg-gray-50';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric, index) => (
        <div key={index} className={`card ${getStatusBg(metric.status)}`}>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-600 mb-1">{metric.label}</p>
              <div className="flex items-baseline space-x-2">
                <p className={`text-2xl font-bold ${getStatusColor(metric.status)}`}>
                  {metric.value}
                </p>
                <span className="text-3xl">{metric.icon}</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">{metric.change}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MetricsOverview;
