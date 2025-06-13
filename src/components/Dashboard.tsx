
import React from 'react';
import { AlertTriangle, Clock, CheckCircle, TrendingUp, Bell, Users, FileText } from 'lucide-react';

const criticalCases = [
  {
    id: '#2847',
    student: 'Marcus Chen',
    issue: 'Grade dispute escalation - threatening legal action',
    riskLevel: 'high',
    timeAgo: '2 hours ago',
    tags: ['Grade', 'Legal Threat']
  },
  {
    id: '#2851',
    student: 'Emma Rodriguez',
    issue: 'Financial aid suspension causing hardship',
    riskLevel: 'high',
    timeAgo: '4 hours ago',
    tags: ['Financial Aid', 'Hardship']
  }
];

const queueItems = [
  {
    id: '#2852',
    student: 'Alex Thompson',
    issue: 'Internship coordinator unresponsive',
    priority: 'medium',
    timeAgo: '1 hour ago'
  },
  {
    id: '#2853',
    student: 'Maria Santos',
    issue: 'Course registration system error',
    priority: 'low',
    timeAgo: '3 hours ago'
  },
  {
    id: '#2854',
    student: 'David Kim',
    issue: 'Housing assignment concerns',
    priority: 'medium',
    timeAgo: '5 hours ago'
  }
];

const reminders = [
  {
    case: '#2840',
    message: 'Awaiting reply from Registrar\'s Office for 3 days',
    urgent: true
  },
  {
    case: '#2845',
    message: 'Follow-up with student scheduled for tomorrow',
    urgent: false
  }
];

export const Dashboard: React.FC = () => {
  return (
    <div className="p-6 space-y-6 h-full overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-charcoal">Good morning, Sarah</h1>
          <p className="text-medium-gray mt-1">Here's what needs your attention today</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="relative p-2 text-medium-gray hover:text-charcoal transition-colors duration-200">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-error-red rounded-full"></span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-5 card-shadow hover:card-shadow-hover transition-shadow duration-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-medium-gray text-sm font-medium">New Complaints</p>
              <p className="text-2xl font-semibold text-charcoal mt-1">8</p>
            </div>
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-reclame-blue" />
            </div>
          </div>
          <div className="flex items-center mt-3 text-sm">
            <TrendingUp className="w-4 h-4 text-success-green mr-1" />
            <span className="text-success-green font-medium">+12%</span>
            <span className="text-medium-gray ml-1">from yesterday</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 card-shadow hover:card-shadow-hover transition-shadow duration-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-medium-gray text-sm font-medium">Resolved Today</p>
              <p className="text-2xl font-semibold text-charcoal mt-1">5</p>
            </div>
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-success-green" />
            </div>
          </div>
          <div className="flex items-center mt-3 text-sm">
            <span className="text-success-green font-medium">On track</span>
            <span className="text-medium-gray ml-1">for daily goal</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 card-shadow hover:card-shadow-hover transition-shadow duration-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-medium-gray text-sm font-medium">Avg Response Time</p>
              <p className="text-2xl font-semibold text-charcoal mt-1">2.4h</p>
            </div>
            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-warning-yellow" />
            </div>
          </div>
          <div className="flex items-center mt-3 text-sm">
            <span className="text-success-green font-medium">-0.3h</span>
            <span className="text-medium-gray ml-1">from last week</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 card-shadow hover:card-shadow-hover transition-shadow duration-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-medium-gray text-sm font-medium">Active Cases</p>
              <p className="text-2xl font-semibold text-charcoal mt-1">12</p>
            </div>
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-purple-600" />
            </div>
          </div>
          <div className="flex items-center mt-3 text-sm">
            <span className="text-medium-gray">3 high priority</span>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Critical Cases */}
        <div className="bg-white rounded-xl p-6 card-shadow hover:card-shadow-hover transition-shadow duration-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-charcoal flex items-center">
              <AlertTriangle className="w-5 h-5 text-error-red mr-2" />
              Critical Cases
            </h2>
            <span className="text-sm text-medium-gray">2 urgent</span>
          </div>
          
          <div className="space-y-4">
            {criticalCases.map((case_) => (
              <div key={case_.id} className="border border-red-200 bg-red-50 rounded-lg p-4 hover:bg-red-100 transition-colors duration-200 cursor-pointer">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-charcoal">{case_.id}</span>
                    <span className="tag tag-high-risk">HIGH RISK</span>
                  </div>
                  <span className="text-xs text-medium-gray">{case_.timeAgo}</span>
                </div>
                <h3 className="font-medium text-charcoal mb-1">{case_.student}</h3>
                <p className="text-sm text-medium-gray mb-3">{case_.issue}</p>
                <div className="flex flex-wrap gap-1">
                  {case_.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* My Queue */}
        <div className="bg-white rounded-xl p-6 card-shadow hover:card-shadow-hover transition-shadow duration-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-charcoal">My Queue</h2>
            <span className="text-sm text-medium-gray">3 cases</span>
          </div>
          
          <div className="space-y-3">
            {queueItems.map((item) => (
              <div key={item.id} className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
                <div className="flex items-start justify-between mb-2">
                  <span className="text-sm font-medium text-charcoal">{item.id}</span>
                  <span className="text-xs text-medium-gray">{item.timeAgo}</span>
                </div>
                <h3 className="font-medium text-charcoal mb-1">{item.student}</h3>
                <p className="text-sm text-medium-gray mb-2">{item.issue}</p>
                <span className={`tag ${
                  item.priority === 'high' ? 'tag-high-risk' : 
                  item.priority === 'medium' ? 'tag-medium-risk' : 'tag-low-risk'
                }`}>
                  {item.priority.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Follow-up Reminders */}
        <div className="bg-white rounded-xl p-6 card-shadow hover:card-shadow-hover transition-shadow duration-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-charcoal flex items-center">
              <Clock className="w-5 h-5 text-warning-yellow mr-2" />
              Follow-up Reminders
            </h2>
            <span className="text-sm text-medium-gray">2 pending</span>
          </div>
          
          <div className="space-y-3">
            {reminders.map((reminder) => (
              <div key={reminder.case} className={`border rounded-lg p-4 transition-colors duration-200 cursor-pointer ${
                reminder.urgent 
                  ? 'border-yellow-200 bg-yellow-50 hover:bg-yellow-100' 
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}>
                <div className="flex items-start justify-between mb-2">
                  <span className="text-sm font-medium text-charcoal">{reminder.case}</span>
                  {reminder.urgent && (
                    <span className="tag tag-medium-risk">URGENT</span>
                  )}
                </div>
                <p className="text-sm text-medium-gray">{reminder.message}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
