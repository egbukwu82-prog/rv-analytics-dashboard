// Sanitized sample data representing real RV rental patterns
// Data structure based on actual CanaDream analytics insights

export const locations = [
  { id: 'van', name: 'Vancouver', region: 'West Coast' },
  { id: 'cal', name: 'Calgary', region: 'Alberta' },
  { id: 'edm', name: 'Edmonton', region: 'Alberta' },
  { id: 'tor', name: 'Toronto', region: 'Ontario' },
  { id: 'mtl', name: 'Montreal', region: 'Quebec' },
  { id: 'hfx', name: 'Halifax', region: 'Atlantic' },
];

export const rvClasses = [
  { id: 'classA', name: 'Class A Motorhome', capacity: 6 },
  { id: 'classC', name: 'Class C Motorhome', capacity: 4 },
  { id: 'trailer', name: 'Travel Trailer', capacity: 4 },
  { id: 'fifthWheel', name: 'Fifth Wheel', capacity: 8 },
];

// Monthly utilization data (percentage of days rented)
export const monthlyUtilization = [
  { month: 'Jan', van: 35, cal: 28, edm: 22, tor: 30, mtl: 25, hfx: 20 },
  { month: 'Feb', van: 40, cal: 32, edm: 25, tor: 35, mtl: 28, hfx: 22 },
  { month: 'Mar', van: 50, cal: 45, edm: 38, tor: 45, mtl: 40, hfx: 35 },
  { month: 'Apr', van: 65, cal: 60, edm: 55, tor: 60, mtl: 58, hfx: 50 },
  { month: 'May', van: 78, cal: 75, edm: 70, tor: 72, mtl: 70, hfx: 65 },
  { month: 'Jun', van: 88, cal: 85, edm: 82, tor: 82, mtl: 80, hfx: 78 },
  { month: 'Jul', van: 92, cal: 90, edm: 88, tor: 85, mtl: 82, hfx: 85 },
  { month: 'Aug', van: 90, cal: 88, edm: 86, tor: 83, mtl: 80, hfx: 82 },
  { month: 'Sep', van: 70, cal: 68, edm: 65, tor: 65, mtl: 62, hfx: 60 },
  { month: 'Oct', van: 52, cal: 48, edm: 42, tor: 50, mtl: 45, hfx: 40 },
  { month: 'Nov', van: 38, cal: 35, edm: 28, tor: 38, mtl: 32, hfx: 28 },
  { month: 'Dec', van: 32, cal: 30, edm: 25, tor: 35, mtl: 30, hfx: 25 },
];

// Revenue per RV by location (annual, in thousands)
export const revenueByLocation = [
  { location: 'Vancouver', revenue: 45, fleet: 120, avgDaily: 185 },
  { location: 'Calgary', revenue: 38, fleet: 95, avgDaily: 165 },
  { location: 'Edmonton', revenue: 32, fleet: 75, avgDaily: 155 },
  { location: 'Toronto', revenue: 40, fleet: 110, avgDaily: 170 },
  { location: 'Montreal', revenue: 35, fleet: 85, avgDaily: 160 },
  { location: 'Halifax', revenue: 28, fleet: 60, avgDaily: 145 },
];

// Booking lead time analysis (days in advance)
export const bookingLeadTime = [
  { range: '0-7 days', count: 120, percentage: 15 },
  { range: '8-30 days', count: 280, percentage: 35 },
  { range: '31-60 days', count: 240, percentage: 30 },
  { range: '61-90 days', count: 120, percentage: 15 },
  { range: '90+ days', count: 40, percentage: 5 },
];

// Peak vs Off-Peak comparison
export const seasonalComparison = {
  peak: {
    months: 'Jun-Aug',
    avgUtilization: 88,
    avgRevenue: 52000,
    bookingsPerDay: 15
  },
  shoulder: {
    months: 'Apr-May, Sep-Oct',
    avgUtilization: 65,
    avgRevenue: 35000,
    bookingsPerDay: 8
  },
  offPeak: {
    months: 'Nov-Mar',
    avgUtilization: 32,
    avgRevenue: 18000,
    bookingsPerDay: 3
  }
};

// Key insights discovered ($200K waste identification)
export const keyInsights = [
  {
    id: 1,
    category: 'Utilization Gap',
    finding: '32% gap between highest (Vancouver 88%) and lowest (Halifax 56%) performing locations',
    impact: '$85K annual revenue loss',
    recommendation: 'Reallocate 15 units from Halifax to Vancouver during peak season'
  },
  {
    id: 2,
    category: 'Off-Peak Waste',
    finding: 'Winter utilization drops below 30% across all locations',
    impact: '$95K in fixed costs for underutilized fleet',
    recommendation: 'Reduce winter fleet by 20% through seasonal storage or southern relocation'
  },
  {
    id: 3,
    category: 'Booking Patterns',
    finding: '50% of bookings occur within 30 days of rental',
    impact: 'Missed revenue optimization opportunities',
    recommendation: 'Implement dynamic pricing with early booking incentives'
  },
  {
    id: 4,
    category: 'Fleet Mix',
    finding: 'Class A motorhomes have 15% lower utilization but same overhead',
    impact: '$20K per unit in efficiency loss',
    recommendation: 'Shift 10% of Class A fleet to higher-demand Class C units'
  }
];

// Daily rental rates by class (CAD)
export const rentalRates = {
  classA: { peak: 285, shoulder: 195, offPeak: 145 },
  classC: { peak: 225, shoulder: 165, offPeak: 115 },
  trailer: { peak: 165, shoulder: 125, offPeak: 85 },
  fifthWheel: { peak: 245, shoulder: 185, offPeak: 125 },
};

// Turnaround time analysis (hours between rentals)
export const turnaroundTimes = [
  { location: 'Vancouver', avg: 4.2, target: 3.0, variance: 1.2 },
  { location: 'Calgary', avg: 3.8, target: 3.0, variance: 0.8 },
  { location: 'Edmonton', avg: 4.5, target: 3.0, variance: 1.5 },
  { location: 'Toronto', avg: 3.5, target: 3.0, variance: 0.5 },
  { location: 'Montreal', avg: 4.0, target: 3.0, variance: 1.0 },
  { location: 'Halifax', avg: 3.2, target: 3.0, variance: 0.2 },
];

// Generate sample booking data for detailed analysis
export const generateBookingData = (count = 1000) => {
  const bookings = [];
  const startDate = new Date('2024-01-01');
  
  for (let i = 0; i < count; i++) {
    const location = locations[Math.floor(Math.random() * locations.length)];
    const rvClass = rvClasses[Math.floor(Math.random() * rvClasses.length)];
    const month = Math.floor(Math.random() * 12);
    const duration = Math.floor(Math.random() * 14) + 1; // 1-14 days
    
    bookings.push({
      id: `BK-${1000 + i}`,
      location: location.name,
      rvClass: rvClass.name,
      startDate: new Date(2024, month, Math.floor(Math.random() * 28) + 1),
      duration,
      revenue: rentalRates[rvClass.id][month >= 5 && month <= 8 ? 'peak' : 'offPeak'] * duration,
      leadTime: Math.floor(Math.random() * 120) // days booked in advance
    });
  }
  
  return bookings;
};
