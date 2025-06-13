
import React, { useState } from 'react';
import { AlertTriangle, User, Clock, RefreshCw, Send, FileText, Brain, TrendingUp, Calendar } from 'lucide-react';

const complaints = [
  {
    id: '#2847',
    student: 'Marcus Chen',
    title: 'Grade dispute escalation',
    snippet: 'I am extremely frustrated with the lack of response regarding my grade appeal...',
    tags: ['Grade', 'Legal Threat'],
    riskLevel: 'high',
    timeAgo: '2 hours ago',
    sentiment: { frustration: 90, anger: 65 }
  },
  {
    id: '#2851',
    student: 'Emma Rodriguez',
    title: 'Financial aid suspension',
    snippet: 'My financial aid has been suspended without proper notice and I cannot afford...',
    tags: ['Financial Aid', 'Hardship'],
    riskLevel: 'high',
    timeAgo: '4 hours ago',
    sentiment: { frustration: 85, desperation: 70 }
  },
  {
    id: '#2852',
    student: 'Alex Thompson',
    title: 'Internship coordinator unresponsive',
    snippet: 'I have been trying to reach my internship coordinator for two weeks...',
    tags: ['Internship', 'Communication'],
    riskLevel: 'medium',
    timeAgo: '1 hour ago',
    sentiment: { frustration: 60, concern: 40 }
  }
];

export const ComplaintManagement: React.FC = () => {
  const [selectedComplaint, setSelectedComplaint] = useState(complaints[0]);
  const [activeTab, setActiveTab] = useState<'student' | 'internal'>('student');

  return (
    <div className="h-full flex bg-soft-bg">
      {/* Column 1: Queue */}
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col card-shadow">
        <div className="p-4 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-charcoal">New Complaints</h2>
          <p className="text-sm text-medium-gray mt-1">8 cases requiring attention</p>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {complaints.map((complaint) => (
            <div
              key={complaint.id}
              onClick={() => setSelectedComplaint(complaint)}
              className={`p-4 rounded-lg border transition-all duration-200 cursor-pointer ${
                selectedComplaint.id === complaint.id
                  ? 'border-reclame-blue bg-blue-50 card-shadow-hover'
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-charcoal">{complaint.id}</span>
                  {complaint.riskLevel === 'high' && (
                    <AlertTriangle className="w-4 h-4 text-error-red" />
                  )}
                </div>
                <span className="text-xs text-medium-gray">{complaint.timeAgo}</span>
              </div>
              
              <h3 className="font-medium text-charcoal mb-1">{complaint.student}</h3>
              <p className="text-sm text-medium-gray mb-3 line-clamp-2">{complaint.snippet}</p>
              
              <div className="flex flex-wrap gap-1">
                {complaint.tags.map((tag) => (
                  <span key={tag} className="tag text-xs">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Column 2: Complaint Details */}
      <div className="flex-1 flex flex-col bg-white overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <h1 className="text-xl font-semibold text-charcoal">{selectedComplaint.id}</h1>
              <span className={`tag ${
                selectedComplaint.riskLevel === 'high' ? 'tag-high-risk' : 'tag-medium-risk'
              }`}>
                {selectedComplaint.riskLevel.toUpperCase()} RISK
              </span>
            </div>
            <span className="text-sm text-medium-gray">{selectedComplaint.timeAgo}</span>
          </div>
          <h2 className="text-lg font-medium text-charcoal mt-2">{selectedComplaint.student}</h2>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* AI Analysis Summary */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <div className="flex items-center space-x-2 mb-3">
              <Brain className="w-5 h-5 text-reclame-blue" />
              <h3 className="font-semibold text-charcoal">AI Analysis</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h4 className="text-sm font-medium text-charcoal mb-2">Sentiment</h4>
                <div className="space-y-1">
                  {Object.entries(selectedComplaint.sentiment).map(([emotion, score]) => (
                    <div key={emotion} className="flex items-center justify-between text-sm">
                      <span className="text-medium-gray capitalize">{emotion}:</span>
                      <span className="font-medium text-charcoal">{score}%</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-charcoal mb-2">Key Entities</h4>
                <div className="flex flex-wrap gap-1">
                  <span className="tag">Grade Appeal</span>
                  <span className="tag">Academic Records</span>
                  <span className="tag">Department</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-charcoal mb-2">Detected Intent</h4>
                <p className="text-sm text-medium-gray">Request grade correction and formal review process</p>
              </div>
            </div>
          </div>

          {/* Original Complaint */}
          <div>
            <h3 className="font-semibold text-charcoal mb-3">Original Complaint</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-charcoal leading-relaxed">
                Dear Ombudsman Office,
                <br /><br />
                I am extremely frustrated with the lack of response regarding my grade appeal for CHEM 301. 
                I submitted my appeal three weeks ago with supporting documentation, but have received no 
                acknowledgment or update. This grade is affecting my GPA and scholarship eligibility.
                <br /><br />
                I have contacted Professor Martinez multiple times without response. The department secretary 
                told me to "wait" but provided no timeline. This is unacceptable given the impact on my 
                academic standing and financial aid.
                <br /><br />
                If this is not resolved immediately, I will be forced to escalate this matter through legal 
                channels. I have already consulted with an attorney about my options.
                <br /><br />
                I expect a response within 24 hours.
                <br /><br />
                Marcus Chen<br />
                Student ID: 12345678
              </p>
            </div>
          </div>

          {/* Interaction History */}
          <div>
            <h3 className="font-semibold text-charcoal mb-3">Case History</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-reclame-blue rounded-full mt-2"></div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-charcoal">Case created</span>
                    <span className="text-xs text-medium-gray">2 hours ago</span>
                  </div>
                  <p className="text-sm text-medium-gray">Initial complaint received from student portal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Column 3: AI Dossier & Actions */}
      <div className="w-96 bg-white border-l border-gray-200 flex flex-col card-shadow">
        {/* Student Dossier */}
        <div className="p-4 border-b border-gray-100">
          <h3 className="font-semibold text-charcoal mb-4 flex items-center">
            <User className="w-5 h-5 mr-2" />
            AI Student Dossier
          </h3>
          
          <div className="space-y-3">
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="text-medium-gray">Student ID:</span>
                  <p className="font-medium text-charcoal">12345678</p>
                </div>
                <div>
                  <span className="text-medium-gray">Year:</span>
                  <p className="font-medium text-charcoal">Junior</p>
                </div>
                <div>
                  <span className="text-medium-gray">Major:</span>
                  <p className="font-medium text-charcoal">Chemistry</p>
                </div>
                <div>
                  <span className="text-medium-gray">GPA:</span>
                  <p className="font-medium text-charcoal">3.42</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-charcoal mb-2">Financial Status</h4>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success-green rounded-full"></div>
                <span className="text-sm text-charcoal">Active Financial Aid</span>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-charcoal mb-2">Recent Support Tickets</h4>
              <div className="space-y-1 text-sm text-medium-gray">
                <p>• Grade appeal CHEM 301 (3 weeks ago)</p>
                <p>• IT support request (1 month ago)</p>
              </div>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
              <h4 className="text-sm font-medium text-charcoal mb-1">AI Root Cause Analysis</h4>
              <p className="text-sm text-medium-gray">
                Communication breakdown between student and department. Grade appeal process appears stalled.
              </p>
            </div>
          </div>
        </div>

        {/* Actions Panel */}
        <div className="flex-1 flex flex-col p-4">
          <h3 className="font-semibold text-charcoal mb-4">AI Actions</h3>
          
          {/* Tabs */}
          <div className="flex space-x-1 mb-4 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('student')}
              className={`flex-1 py-2 px-3 text-sm font-medium rounded-md transition-colors duration-200 ${
                activeTab === 'student'
                  ? 'bg-white text-reclame-blue shadow-sm'
                  : 'text-medium-gray hover:text-charcoal'
              }`}
            >
              Student Response
            </button>
            <button
              onClick={() => setActiveTab('internal')}
              className={`flex-1 py-2 px-3 text-sm font-medium rounded-md transition-colors duration-200 ${
                activeTab === 'internal'
                  ? 'bg-white text-reclame-blue shadow-sm'
                  : 'text-medium-gray hover:text-charcoal'
              }`}
            >
              Internal Ticket
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-2 mb-4">
            <button className="flex-1 btn-secondary text-xs py-1.5">
              <RefreshCw className="w-3 h-3 mr-1" />
              Regenerate
            </button>
            <button className="flex-1 btn-secondary text-xs py-1.5">
              <FileText className="w-3 h-3 mr-1" />
              Summarize
            </button>
          </div>

          {/* Text Area */}
          <div className="flex-1 flex flex-col">
            <textarea
              className="flex-1 p-3 border border-gray-300 rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-reclame-blue focus:border-transparent"
              placeholder={activeTab === 'student' ? 'AI-generated response to student...' : 'AI-generated internal ticket...'}
              value={activeTab === 'student' 
                ? `Dear Marcus,

Thank you for bringing this matter to our attention. I understand your frustration regarding the delayed response to your grade appeal for CHEM 301.

I have immediately contacted the Chemistry Department and Professor Martinez to expedite your case. You should expect an initial response within 48 hours.

In the meantime, I want to assure you that your appeal is being taken seriously and we will work to resolve this matter promptly while following proper academic procedures.

I will personally monitor this case and keep you updated on progress.

Best regards,
Sarah Johnson
Student Ombudsman`
                : `URGENT: Grade Appeal Escalation Required

Case: #2847
Student: Marcus Chen (ID: 12345678)
Course: CHEM 301

Issue: Student submitted grade appeal 3 weeks ago with no acknowledgment from department. Student has consulted legal counsel and threatened escalation.

Required Actions:
1. Immediate contact with Prof. Martinez and Dept. Chair
2. Fast-track review of grade appeal documentation
3. Provide timeline for resolution to student within 48 hours

Risk Level: HIGH - Legal threat indicated
Priority: URGENT

Assigned to: Chemistry Department Chair
CC: Academic Affairs, Legal Counsel`
              }
              readOnly
            />
          </div>

          {/* Send Button */}
          <button className="btn-primary mt-4 flex items-center justify-center">
            <Send className="w-4 h-4 mr-2" />
            Send Reply
          </button>
        </div>
      </div>
    </div>
  );
};
