// Data processing utilities for RV analytics

/**
 * Calculate average utilization across locations
 */
export const calculateAverageUtilization = (data) => {
  const sum = data.reduce((acc, item) => {
    const locationSum = Object.keys(item)
      .filter(key => key !== 'month')
      .reduce((locAcc, loc) => locAcc + item[loc], 0);
    return acc + locationSum;
  }, 0);
  
  const locationCount = Object.keys(data[0]).length - 1; // Exclude 'month' key
  return (sum / (data.length * locationCount)).toFixed(1);
};

/**
 * Identify top and bottom performing locations
 */
export const identifyPerformanceExtremes = (data) => {
  const annualAverages = {};
  
  // Calculate annual average for each location
  data.forEach(month => {
    Object.keys(month).forEach(key => {
      if (key !== 'month') {
        if (!annualAverages[key]) annualAverages[key] = [];
        annualAverages[key].push(month[key]);
      }
    });
  });
  
  const averages = Object.entries(annualAverages).map(([location, values]) => ({
    location,
    average: (values.reduce((sum, val) => sum + val, 0) / values.length).toFixed(1)
  }));
  
  averages.sort((a, b) => b.average - a.average);
  
  return {
    top: averages[0],
    bottom: averages[averages.length - 1],
    gap: (averages[0].average - averages[averages.length - 1].average).toFixed(1)
  };
};

/**
 * Calculate total potential revenue loss from underutilization
 */
export const calculateRevenueLoss = (utilizationData, revenueData) => {
  const targetUtilization = 75; // Industry benchmark
  let totalLoss = 0;
  
  revenueData.forEach(location => {
    // Find average utilization for this location
    const locationKey = location.location.toLowerCase().substring(0, 3);
    const avgUtilization = utilizationData.reduce((sum, month) => 
      sum + (month[locationKey] || 0), 0
    ) / utilizationData.length;
    
    if (avgUtilization < targetUtilization) {
      const utilizationGap = targetUtilization - avgUtilization;
      const daysInYear = 365;
      const additionalDays = (utilizationGap / 100) * daysInYear * location.fleet;
      const lossPerLocation = additionalDays * location.avgDaily;
      totalLoss += lossPerLocation;
    }
  });
  
  return Math.round(totalLoss);
};

/**
 * Format currency for display
 */
export const formatCurrency = (amount, decimals = 0) => {
  return new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(amount);
};

/**
 * Format percentage for display
 */
export const formatPercentage = (value, decimals = 1) => {
  return `${parseFloat(value).toFixed(decimals)}%`;
};

/**
 * Calculate seasonal trends
 */
export const calculateSeasonalTrends = (monthlyData) => {
  const seasons = {
    winter: ['Jan', 'Feb', 'Dec'],
    spring: ['Mar', 'Apr', 'May'],
    summer: ['Jun', 'Jul', 'Aug'],
    fall: ['Sep', 'Oct', 'Nov']
  };
  
  const seasonalAverages = {};
  
  Object.entries(seasons).forEach(([season, months]) => {
    const seasonData = monthlyData.filter(item => months.includes(item.month));
    const allValues = seasonData.flatMap(month => 
      Object.keys(month)
        .filter(key => key !== 'month')
        .map(key => month[key])
    );
    
    seasonalAverages[season] = {
      average: (allValues.reduce((sum, val) => sum + val, 0) / allValues.length).toFixed(1),
      min: Math.min(...allValues),
      max: Math.max(...allValues)
    };
  });
  
  return seasonalAverages;
};

/**
 * Group bookings by lead time ranges
 */
export const groupByLeadTime = (bookings) => {
  const ranges = [
    { label: '0-7 days', min: 0, max: 7 },
    { label: '8-30 days', min: 8, max: 30 },
    { label: '31-60 days', min: 31, max: 60 },
    { label: '61-90 days', min: 61, max: 90 },
    { label: '90+ days', min: 91, max: Infinity }
  ];
  
  const grouped = ranges.map(range => ({
    range: range.label,
    count: bookings.filter(b => b.leadTime >= range.min && b.leadTime <= range.max).length
  }));
  
  const total = bookings.length;
  return grouped.map(item => ({
    ...item,
    percentage: ((item.count / total) * 100).toFixed(1)
  }));
};

/**
 * Calculate revenue by RV class
 */
export const calculateRevenueByClass = (bookings) => {
  const revenueByClass = {};
  
  bookings.forEach(booking => {
    if (!revenueByClass[booking.rvClass]) {
      revenueByClass[booking.rvClass] = {
        totalRevenue: 0,
        bookingCount: 0
      };
    }
    
    revenueByClass[booking.rvClass].totalRevenue += booking.revenue;
    revenueByClass[booking.rvClass].bookingCount += 1;
  });
  
  return Object.entries(revenueByClass).map(([rvClass, data]) => ({
    rvClass,
    totalRevenue: data.totalRevenue,
    bookingCount: data.bookingCount,
    averageRevenue: (data.totalRevenue / data.bookingCount).toFixed(2)
  }));
};

/**
 * Find optimization opportunities
 */
export const findOptimizationOpportunities = (utilizationData, revenueData) => {
  const opportunities = [];
  
  // Identify locations with significant underutilization
  const performance = identifyPerformanceExtremes(utilizationData);
  
  if (parseFloat(performance.gap) > 25) {
    opportunities.push({
      type: 'Fleet Reallocation',
      priority: 'High',
      description: `Move units from ${performance.bottom.location} (${performance.bottom.average}%) to ${performance.top.location} (${performance.top.average}%)`,
      potentialImpact: calculateRevenueLoss(utilizationData, revenueData) * 0.4 // 40% of gap closure
    });
  }
  
  // Check for seasonal optimization
  const seasonal = calculateSeasonalTrends(utilizationData);
  if (parseFloat(seasonal.winter.average) < 35) {
    opportunities.push({
      type: 'Seasonal Adjustment',
      priority: 'Medium',
      description: 'Reduce winter fleet size by 20% through storage or relocation',
      potentialImpact: 95000
    });
  }
  
  return opportunities;
};
