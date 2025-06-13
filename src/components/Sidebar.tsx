
import React from 'react';
import { Home, Inbox, CheckCircle, BarChart3, Settings, User, Bell, Clock, AlertTriangle } from 'lucide-react';

const navigationItems = [
  { icon: Home, label: 'Painel', href: '/', active: true },
  { 
    icon: Inbox, 
    label: 'Caixa de Entrada', 
    href: '/inbox',
    badge: 12,
    subItems: [
      { label: 'Novos', count: 8 },
      { label: 'Em Andamento', count: 3 },
      { label: 'Aguardando Resposta', count: 1 }
    ]
  },
  { icon: CheckCircle, label: 'Resolvidos', href: '/resolved' },
  { icon: BarChart3, label: 'Relatórios', href: '/reports' },
  { icon: Settings, label: 'Configurações', href: '/settings' }
];

export const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col h-screen card-shadow">
      {/* Logo */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-reclame-blue rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">R</span>
          </div>
          <div>
            <h1 className="text-lg font-semibold text-charcoal">Reclame AI</h1>
            <p className="text-xs text-medium-gray">Gestão de Reclamações</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {navigationItems.map((item) => (
          <div key={item.label}>
            <div className={`flex items-center justify-between px-3 py-2.5 rounded-lg transition-colors duration-200 cursor-pointer ${
              item.active 
                ? 'bg-blue-50 text-reclame-blue border-l-3 border-reclame-blue' 
                : 'text-medium-gray hover:bg-gray-50 hover:text-charcoal'
            }`}>
              <div className="flex items-center space-x-3">
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </div>
              {item.badge && (
                <span className="bg-reclame-blue text-white text-xs font-medium px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </div>
            
            {/* Sub-items for Inbox */}
            {item.subItems && (
              <div className="ml-8 mt-1 space-y-1">
                {item.subItems.map((subItem) => (
                  <div key={subItem.label} className="flex items-center justify-between px-3 py-1.5 text-sm text-medium-gray hover:text-charcoal cursor-pointer">
                    <span>{subItem.label}</span>
                    <span className="text-xs bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded">
                      {subItem.count}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-100">
        <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors duration-200">
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-medium-gray" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-charcoal">Sarah Johnson</p>
            <p className="text-xs text-medium-gray">Ouvidora Estudantil</p>
          </div>
        </div>
      </div>
    </div>
  );
};
