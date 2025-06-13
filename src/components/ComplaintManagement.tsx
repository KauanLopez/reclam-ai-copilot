
import React, { useState } from 'react';
import { AlertTriangle, User, Clock, RefreshCw, Send, FileText, Brain, TrendingUp, Calendar } from 'lucide-react';

const complaints = [
  {
    id: '#2847',
    student: 'Marcus Chen',
    title: 'Escalação de disputa de nota',
    snippet: 'Estou extremamente frustrado com a falta de resposta sobre meu recurso de nota...',
    tags: ['Nota', 'Ameaça Legal'],
    riskLevel: 'high',
    timeAgo: 'há 2 horas',
    sentiment: { frustração: 90, raiva: 65 }
  },
  {
    id: '#2851',
    student: 'Emma Rodriguez',
    title: 'Suspensão de auxílio financeiro',
    snippet: 'Meu auxílio financeiro foi suspenso sem aviso adequado e não posso pagar...',
    tags: ['Auxílio Financeiro', 'Dificuldade'],
    riskLevel: 'high',
    timeAgo: 'há 4 horas',
    sentiment: { frustração: 85, desespero: 70 }
  },
  {
    id: '#2852',
    student: 'Alex Thompson',
    title: 'Coordenador de estágio não responde',
    snippet: 'Tenho tentado contatar meu coordenador de estágio há duas semanas...',
    tags: ['Estágio', 'Comunicação'],
    riskLevel: 'medium',
    timeAgo: 'há 1 hora',
    sentiment: { frustração: 60, preocupação: 40 }
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
          <h2 className="text-lg font-semibold text-charcoal">Novas Reclamações</h2>
          <p className="text-sm text-medium-gray mt-1">8 casos precisando de atenção</p>
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
                {selectedComplaint.riskLevel === 'high' ? 'ALTO RISCO' : 'MÉDIO RISCO'}
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
              <h3 className="font-semibold text-charcoal">Análise da IA</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h4 className="text-sm font-medium text-charcoal mb-2">Sentimento</h4>
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
                <h4 className="text-sm font-medium text-charcoal mb-2">Entidades Chave</h4>
                <div className="flex flex-wrap gap-1">
                  <span className="tag">Recurso de Nota</span>
                  <span className="tag">Registros Acadêmicos</span>
                  <span className="tag">Departamento</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-charcoal mb-2">Intenção Detectada</h4>
                <p className="text-sm text-medium-gray">Solicitar correção de nota e processo de revisão formal</p>
              </div>
            </div>
          </div>

          {/* Original Complaint */}
          <div>
            <h3 className="font-semibold text-charcoal mb-3">Reclamação Original</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-charcoal leading-relaxed">
                Cara Ouvidoria,
                <br /><br />
                Estou extremamente frustrado com a falta de resposta sobre meu recurso de nota para QUIM 301. 
                Enviei meu recurso há três semanas com documentação de apoio, mas não recebi nenhum 
                reconhecimento ou atualização. Esta nota está afetando meu GPA e elegibilidade para bolsa.
                <br /><br />
                Contactei o Professor Martinez várias vezes sem resposta. A secretária do departamento 
                me disse para "aguardar" mas não forneceu cronograma. Isso é inaceitável dado o impacto na minha 
                situação acadêmica e auxílio financeiro.
                <br /><br />
                Se isso não for resolvido imediatamente, serei forçado a escalonar este assunto através de 
                canais legais. Já consultei um advogado sobre minhas opções.
                <br /><br />
                Espero uma resposta em 24 horas.
                <br /><br />
                Marcus Chen<br />
                ID do Estudante: 12345678
              </p>
            </div>
          </div>

          {/* Interaction History */}
          <div>
            <h3 className="font-semibold text-charcoal mb-3">Histórico do Caso</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-reclame-blue rounded-full mt-2"></div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-charcoal">Caso criado</span>
                    <span className="text-xs text-medium-gray">há 2 horas</span>
                  </div>
                  <p className="text-sm text-medium-gray">Reclamação inicial recebida do portal do estudante</p>
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
            Dossiê IA do Estudante
          </h3>
          
          <div className="space-y-3">
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="text-medium-gray">ID Estudante:</span>
                  <p className="font-medium text-charcoal">12345678</p>
                </div>
                <div>
                  <span className="text-medium-gray">Ano:</span>
                  <p className="font-medium text-charcoal">3º Ano</p>
                </div>
                <div>
                  <span className="text-medium-gray">Curso:</span>
                  <p className="font-medium text-charcoal">Química</p>
                </div>
                <div>
                  <span className="text-medium-gray">GPA:</span>
                  <p className="font-medium text-charcoal">3,42</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-charcoal mb-2">Situação Financeira</h4>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success-green rounded-full"></div>
                <span className="text-sm text-charcoal">Auxílio Financeiro Ativo</span>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-charcoal mb-2">Tickets de Suporte Recentes</h4>
              <div className="space-y-1 text-sm text-medium-gray">
                <p>• Recurso de nota QUIM 301 (3 semanas atrás)</p>
                <p>• Solicitação de suporte TI (1 mês atrás)</p>
              </div>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
              <h4 className="text-sm font-medium text-charcoal mb-1">Análise da Causa Raiz pela IA</h4>
              <p className="text-sm text-medium-gray">
                Falha de comunicação entre estudante e departamento. Processo de recurso de nota parece travado.
              </p>
            </div>
          </div>
        </div>

        {/* Actions Panel */}
        <div className="flex-1 flex flex-col p-4">
          <h3 className="font-semibold text-charcoal mb-4">Ações da IA</h3>
          
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
              Resposta ao Estudante
            </button>
            <button
              onClick={() => setActiveTab('internal')}
              className={`flex-1 py-2 px-3 text-sm font-medium rounded-md transition-colors duration-200 ${
                activeTab === 'internal'
                  ? 'bg-white text-reclame-blue shadow-sm'
                  : 'text-medium-gray hover:text-charcoal'
              }`}
            >
              Ticket Interno
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-2 mb-4">
            <button className="flex-1 btn-secondary text-xs py-1.5">
              <RefreshCw className="w-3 h-3 mr-1" />
              Regenerar
            </button>
            <button className="flex-1 btn-secondary text-xs py-1.5">
              <FileText className="w-3 h-3 mr-1" />
              Resumir
            </button>
          </div>

          {/* Text Area */}
          <div className="flex-1 flex flex-col">
            <textarea
              className="flex-1 p-3 border border-gray-300 rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-reclame-blue focus:border-transparent"
              placeholder={activeTab === 'student' ? 'Resposta gerada pela IA ao estudante...' : 'Ticket interno gerado pela IA...'}
              value={activeTab === 'student' 
                ? `Caro Marcus,

Obrigado por trazer este assunto à nossa atenção. Entendo sua frustração com a resposta atrasada ao seu recurso de nota para QUIM 301.

Contactei imediatamente o Departamento de Química e o Professor Martinez para acelerar seu caso. Você deve esperar uma resposta inicial em 48 horas.

Enquanto isso, quero assegurar que seu recurso está sendo levado a sério e trabalharemos para resolver este assunto prontamente seguindo os procedimentos acadêmicos adequados.

Vou pessoalmente monitorar este caso e mantê-lo atualizado sobre o progresso.

Atenciosamente,
Sarah Johnson
Ouvidora Estudantil`
                : `URGENTE: Escalação de Recurso de Nota Necessária

Caso: #2847
Estudante: Marcus Chen (ID: 12345678)
Matéria: QUIM 301

Problema: Estudante enviou recurso de nota há 3 semanas sem reconhecimento do departamento. Estudante consultou advogado e ameaçou escalação.

Ações Necessárias:
1. Contato imediato com Prof. Martinez e Chefe do Departamento
2. Revisão acelerada da documentação do recurso de nota
3. Fornecer cronograma para resolução ao estudante em 48 horas

Nível de Risco: ALTO - Ameaça legal indicada
Prioridade: URGENTE

Atribuído a: Chefe do Departamento de Química
CC: Assuntos Acadêmicos, Assessoria Jurídica`
              }
              readOnly
            />
          </div>

          {/* Send Button */}
          <button className="btn-primary mt-4 flex items-center justify-center">
            <Send className="w-4 h-4 mr-2" />
            Enviar Resposta
          </button>
        </div>
      </div>
    </div>
  );
};
