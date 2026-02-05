import React from 'react';
import { formatCurrency } from '../utils/dataProcessing';

const InsightsPanel = ({ insights }) => {
  const getCategoryIcon = (category) => {
    switch(category) {
      case 'Utilization Gap':
        return '📊';
      case 'Off-Peak Waste':
        return '❄️';
      case 'Booking Patterns':
        return '📅';
      case 'Fleet Mix':
        return '🚐';
      default:
        return '💡';
    }
  };

  const getCategoryColor = (category) => {
    switch(category) {
      case 'Utilization Gap':
        return 'bg-blue-50 border-blue-200 text-blue-900';
      case 'Off-Peak Waste':
        return 'bg-purple-50 border-purple-200 text-purple-900';
      case 'Booking Patterns':
        return 'bg-green-50 border-green-200 text-green-900';
      case 'Fleet Mix':
        return 'bg-orange-50 border-orange-200 text-orange-900';
      default:
        return 'bg-gray-50 border-gray-200 text-gray-900';
    }
  };

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Key Insights: $200K+ Waste Identified
        </h2>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
          High Priority
        </span>
      </div>

      <div className="space-y-4">
        {insights.map((insight) => (
          <div 
            key={insight.id} 
            className={`p-4 rounded-lg border-2 ${getCategoryColor(insight.category)}`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-2xl">{getCategoryIcon(insight.category)}</span>
                  <h3 className="font-semibold text-lg">{insight.category}</h3>
                </div>
                
                <p className="text-sm mb-2">
                  <span className="font-medium">Finding:</span> {insight.finding}
                </p>
                
                <p className="text-sm mb-2">
                  <span className="font-medium">Impact:</span> {insight.impact}
                </p>
                
                <p className="text-sm">
                  <span className="font-medium">Recommendation:</span> {insight.recommendation}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-yellow-50 border-2 border-yellow-200 rounded-lg">
        <h3 className="font-semibold text-yellow-900 mb-2">💰 Total Opportunity</h3>
        <p className="text-sm text-yellow-800">
          By implementing these recommendations, CanaDream can potentially recover 
          <span className="font-bold"> $200,000+ annually</span> in operational efficiency and 
          increased revenue through better fleet utilization, strategic reallocation, and 
          dynamic pricing strategies.
        </p>
      </div>
    </div>
  );
};

export default InsightsPanel;
