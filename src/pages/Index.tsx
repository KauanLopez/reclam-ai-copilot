
import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import { Dashboard } from '../components/Dashboard';
import { ComplaintManagement } from '../components/ComplaintManagement';

const Index = () => {
  const [currentView, setCurrentView] = useState<'dashboard' | 'complaints'>('dashboard');

  return (
    <Layout>
      <div className="h-screen flex flex-col">
        {/* Quick Navigation for Demo */}
        <div className="bg-white border-b border-gray-200 p-4">
          <div className="flex space-x-4">
            <button
              onClick={() => setCurrentView('dashboard')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                currentView === 'dashboard'
                  ? 'bg-reclame-blue text-white'
                  : 'text-medium-gray hover:text-charcoal hover:bg-gray-100'
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setCurrentView('complaints')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                currentView === 'complaints'
                  ? 'bg-reclame-blue text-white'
                  : 'text-medium-gray hover:text-charcoal hover:bg-gray-100'
              }`}
            >
              Complaint Management
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-hidden">
          {currentView === 'dashboard' ? <Dashboard /> : <ComplaintManagement />}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
