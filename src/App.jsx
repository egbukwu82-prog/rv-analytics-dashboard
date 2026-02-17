import React, { useState } from 'react';
import './index.css';
import Dashboard from './components/Dashboard';

function App() {
  const [dateRange, setDateRange] = useState({ start: '2024-01-01', end: '2024-12-31' });
  const [selectedLocation, setSelectedLocation] = useState('all');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">RV Analytics Dashboard</h1>
              <p className="mt-1 text-sm text-gray-600">
              RV Analytics Dashboard
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                Live Demo
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Dashboard 
          dateRange={dateRange}
          selectedLocation={selectedLocation}
          onDateRangeChange={setDateRange}
          onLocationChange={setSelectedLocation}
        />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Built by <span className="font-semibold">Prince</span> - Athena Studio
            </p>
            <div className="flex space-x-4 text-sm">
              <a href="#" className="text-primary-600 hover:text-primary-700">View on GitHub</a>
              <a href="#" className="text-primary-600 hover:text-primary-700">Live Demo</a>
              <a href="mailto:prince@athenastudio.ca" className="text-primary-600 hover:text-primary-700">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
