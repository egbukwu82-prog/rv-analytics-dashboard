import React from 'react';
import UtilizationChart from './UtilizationChart';
import RevenueChart from './RevenueChart';
import InsightsPanel from './InsightsPanel';
import MetricsOverview from './MetricsOverview';
import { 
  monthlyUtilization, 
  revenueByLocation, 
  keyInsights,
  seasonalComparison 
} from '../data/sampleData';
import { 
  calculateAverageUtilization,
  identifyPerformanceExtremes,
  calculateRevenueLoss 
} from '../utils/dataProcessing';

const Dashboard = ({ dateRange, selectedLocation, onDateRangeChange, onLocationChange }) => {
  // Calculate key metrics
  const avgUtilization = calculateAverageUtilization(monthlyUtilization);
  const performanceGap = identifyPerformanceExtremes(monthlyUtilization);
  const estimatedLoss = calculateRevenueLoss(monthlyUtilization, revenueByLocation);

  return (
    <div className="space-y-6">
      {/* Key Metrics Overview */}
      <MetricsOverview 
        avgUtilization={avgUtilization}
        performanceGap={performanceGap}
        estimatedLoss={estimatedLoss}
        seasonalData={seasonalComparison}
      />

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Utilization Chart */}
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Fleet Utilization by Location
          </h2>
          <UtilizationChart data={monthlyUtilization} />
        </div>

        {/* Revenue Chart */}
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Annual Revenue by Location
          </h2>
          <RevenueChart data={revenueByLocation} />
        </div>
      </div>

      {/* Key Insights */}
      <InsightsPanel insights={keyInsights} />

      {/* Additional Analytics Section Placeholder */}
      <div className="card">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Advanced Analytics
        </h2>
        <p className="text-gray-600">
          Additional charts for booking patterns, turnaround times, and seasonal trends will be added here.
        </p>
        <div className="mt-4 grid grid-cols-3 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">Booking Lead Time</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">42 days</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">Avg Turnaround</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">3.9 hrs</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">Customer Rating</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">4.6/5.0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
