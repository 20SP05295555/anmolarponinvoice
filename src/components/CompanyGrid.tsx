import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { companies } from '../mockData';
import { Building2, ChevronRight, Search } from 'lucide-react';
import { motion } from 'motion/react';

export const CompanyGrid: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCompanies = companies.filter(company => 
    company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    company.regNo.includes(searchTerm)
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="max-w-7xl mx-auto mb-10 text-center space-y-6">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Anmol Arpon Invoice</h1>
          <p className="text-gray-500">Select a company to view their invoice portal</p>
        </div>
        
        <div className="max-w-md mx-auto relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Search companies by name or reg no..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          />
        </div>
      </header>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filteredCompanies.map((company, index) => (
          <motion.div
            key={company.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.02 }}
            onClick={() => navigate(`/detail/${company.id}`)}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer group flex flex-col h-full"
          >
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
              <Building2 className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors line-clamp-2 flex-grow">
              {company.name}
            </h3>
            <p className="text-xs text-gray-400 font-mono mb-4">Reg: {company.regNo}</p>
            <div className="flex items-center text-sm text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              Open Portal <ChevronRight className="w-4 h-4 ml-1" />
            </div>
          </motion.div>
        ))}
      </div>

      {filteredCompanies.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-500">No companies found matching "{searchTerm}"</p>
        </div>
      )}
    </div>
  );
};

