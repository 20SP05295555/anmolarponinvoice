import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { companies, getMockInvoice } from '../mockData';
import { Sidebar } from './Sidebar';
import { 
  Menu, 
  Save, 
  CheckCircle, 
  Upload, 
  UploadCloud,
  Trash2, 
  Plus, 
  Info,
  Clock
} from 'lucide-react';
import { motion } from 'motion/react';

export const InvoiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const company = companies.find(c => c.id === id) || companies[0];
  const invoice = getMockInvoice(company.id);

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Sidebar Overlay for Mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 w-64 z-50 transform transition-transform duration-300 md:relative md:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <Sidebar onClose={() => setSidebarOpen(false)} />
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0 overflow-y-auto">
        {/* Top Header */}
        <header className="bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSidebarOpen(true)}
              className="p-2 hover:bg-gray-100 rounded-lg md:hidden"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 text-green-600 font-medium text-sm">
              <CheckCircle className="w-4 h-4" />
              <span>Order Confirmed</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => navigate('/')}
              className="text-gray-500 hover:text-gray-700 text-sm font-medium mr-4 px-3 py-1 rounded hover:bg-gray-50"
            >
              Back to Grid
            </button>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-green-700 transition-colors shadow-sm shadow-green-100">
              <Save className="w-4 h-4" />
              Save Changes
            </button>
          </div>
        </header>

        <div className="max-w-5xl mx-auto p-4 md:p-8 space-y-8">
          {/* Company and Info Section */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-6">
                {/* Logo Area */}
                <div className="w-full max-w-sm aspect-[3/1] bg-gray-50 border border-dashed border-gray-200 rounded-lg flex flex-col items-center justify-center gap-3 p-4">
                   <div className="text-gray-400 text-sm flex items-center gap-2">
                     <ImageIcon size={20} className="opacity-50" />
                     Logo Preview
                   </div>
                   <div className="flex gap-2">
                     <button className="bg-white border border-gray-200 px-3 py-1.5 rounded-md text-xs font-medium flex items-center gap-2 hover:bg-gray-50 shadow-sm transition-colors">
                       <Upload size={14} className="text-gray-500" />
                       Upload
                     </button>
                     <button className="bg-white border border-gray-200 px-3 py-1.5 rounded-md text-xs font-medium flex items-center gap-2 hover:bg-gray-50 shadow-sm transition-colors text-red-500">
                       <Trash2 size={14} />
                     </button>
                   </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-widest">Company Info</p>
                    <p className="text-sm font-medium text-gray-600">{company.address.split(',')[0]}</p>
                    <p className="text-sm text-gray-500">{company.address.split(',').slice(1).join(',')}</p>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 border-t border-gray-50 pt-4 uppercase tracking-wide">
                    {company.name}
                  </h2>
                </div>
              </div>

              <div className="flex flex-col md:items-end justify-start space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-8 w-full md:w-auto">
                    <span className="text-gray-400 min-w-16">Co. Reg.:</span>
                    <span className="font-medium">{company.regNo}</span>
                </div>
                <div className="flex items-center gap-8 w-full md:w-auto">
                    <span className="text-gray-400 min-w-16">Email:</span>
                    <span className="font-medium">{company.email}</span>
                </div>
                <div className="flex items-center gap-8 w-full md:w-auto">
                    <span className="text-gray-400 min-w-16">Web:</span>
                    <span className="font-medium text-blue-600">{company.web}</span>
                </div>
                <div className="pt-2">
                  <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full border border-green-100 flex items-center gap-1">
                    <CheckCircle size={12} /> Saved
                  </span>
                </div>
              </div>
            </div>

            {/* Bill to & Dates Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 pt-10 border-t border-gray-50">
              <div className="space-y-4">
                <h3 className="font-bold text-gray-900 uppercase tracking-wide text-xs">Bill to:</h3>
                <div className="space-y-1">
                  <p className="font-bold text-gray-900">{invoice.billTo.name}</p>
                  <p className="text-gray-500 text-sm leading-relaxed whitespace-pre-wrap">{invoice.billTo.address}</p>
                  <p className="text-blue-600 text-sm">{invoice.billTo.email}</p>
                  <p className="text-gray-500 text-sm">{invoice.billTo.phone}</p>
                </div>
              </div>

              <div className="space-y-2 md:text-right">
                <div className="flex items-center md:justify-end gap-10">
                   <span className="text-gray-900 font-bold text-xs uppercase tracking-wide">Order Confirmation:</span>
                   <span className="text-sm font-medium">{invoice.orderConfirmation}</span>
                </div>
                <div className="flex items-center md:justify-end gap-10">
                   <span className="text-gray-900 font-bold text-xs uppercase tracking-wide">Order Date:</span>
                   <span className="text-sm font-medium">{invoice.orderDate}</span>
                </div>
                <div className="flex items-center md:justify-end gap-10">
                   <span className="text-gray-900 font-bold text-xs uppercase tracking-wide">Due Date:</span>
                   <span className="text-sm font-medium">{invoice.dueDate}</span>
                </div>
                <div className="flex items-center md:justify-end gap-10">
                   <span className="text-gray-900 font-bold text-xs uppercase tracking-wide">Customer No.:</span>
                   <span className="text-sm font-medium">{invoice.customerNo}</span>
                </div>
              </div>
            </div>

            {/* Items Table */}
            <div className="mt-12 overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#2D3748] text-white text-xs uppercase tracking-wider text-left">
                    <th className="px-6 py-4 font-semibold first:rounded-tl-lg">Description</th>
                    <th className="px-6 py-4 font-semibold text-center">Quantity</th>
                    <th className="px-6 py-4 font-semibold text-center">Unit</th>
                    <th className="px-6 py-4 font-semibold text-center">Price</th>
                    <th className="px-6 py-4 font-semibold text-center last:rounded-tr-lg">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {invoice.items.map((item) => (
                    <React.Fragment key={item.id}>
                      <tr>
                        <td className="px-6 py-4 align-top">
                          <p className="font-bold text-gray-900 mb-2">{item.description}</p>
                          {item.details && (
                            <div className="grid grid-cols-2 gap-x-12 gap-y-2 bg-gray-50 border border-gray-100 p-4 rounded-lg w-full max-w-sm mt-2">
                               <div>
                                 <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-1">Size</p>
                                 <p className="text-[11px] text-gray-600 font-medium">{item.details.size}</p>
                               </div>
                               <div>
                                 <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-1">Direction</p>
                                 <p className="text-[11px] text-gray-600 font-medium">{item.details.direction}</p>
                               </div>
                               <div>
                                 <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-1">Choose Sofa Fabric</p>
                                 <p className="text-[11px] text-gray-600 font-medium">{item.details.fabric}</p>
                               </div>
                               <div>
                                 <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-1">Sofa Color</p>
                                 <p className="text-[11px] text-gray-600 font-medium">{item.details.color}</p>
                               </div>
                            </div>
                          )}
                          <div className="mt-4 flex items-center gap-2 text-xs text-blue-600 font-medium">
                            <input type="checkbox" checked={item.details?.assemble} readOnly className="rounded border-gray-300 text-blue-600" />
                            <span>Assemble Product?</span>
                          </div>
                          <div className="mt-2 space-y-1">
                             <div className="flex items-center justify-between text-[11px] text-gray-500 bg-gray-50/50 p-2 rounded">
                                <span>Includes matching scatter cushions</span>
                                <Trash2 size={12} className="opacity-30 cursor-pointer hover:opacity-100 hover:text-red-500 transition-all" />
                             </div>
                             <div className="flex items-center justify-between text-[11px] text-gray-500 bg-gray-50/50 p-2 rounded">
                                <span>Handcrafted in the UK</span>
                                <Trash2 size={12} className="opacity-30 cursor-pointer hover:opacity-100 hover:text-red-500 transition-all" />
                             </div>
                             <button className="text-[10px] text-blue-500 font-bold flex items-center gap-1 hover:underline mt-1">
                                <Plus size={10} /> Add Item Detail
                             </button>
                          </div>
                        </td>
                        <td className="px-6 py-4 align-top text-center text-sm font-medium">{item.quantity}</td>
                        <td className="px-6 py-4 align-top text-center text-sm font-medium">{item.unit}</td>
                        <td className="px-6 py-4 align-top text-center text-sm font-medium">{item.price}</td>
                        <td className="px-6 py-4 align-top text-center font-bold">{item.price.toFixed(2)}</td>
                      </tr>
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
              <div className="p-8 flex justify-center">
                 <button className="bg-blue-50 text-blue-600 px-6 py-2.5 rounded-full text-xs font-bold border border-blue-100 flex items-center gap-2 hover:bg-blue-100 transition-all shadow-sm">
                   <Plus size={14} /> Add New Item
                 </button>
              </div>
            </div>

            {/* Calculations Sumary */}
            <div className="w-full max-w-md ml-auto mt-10 divide-y divide-gray-50">
               <div className="py-3 flex justify-between items-center text-sm">
                 <span className="text-gray-500">Subtotal without VAT</span>
                 <span className="font-medium">{invoice.subtotal.toFixed(2)}</span>
               </div>
               <div className="py-3 flex justify-between items-center text-sm bg-blue-50/30 px-3 -mx-3 rounded group cursor-pointer transition-colors hover:bg-blue-50">
                 <div className="flex items-center gap-2">
                   <input type="checkbox" className="rounded border-gray-300" />
                   <span className="text-gray-600">Package Removal Service</span>
                 </div>
               </div>
               <div className="py-3 flex justify-between items-center text-sm">
                 <span className="text-gray-500">Assembly Service (1 item)</span>
                 <span className="font-medium text-blue-600 tracking-tight">+{invoice.assemblyService.toFixed(2)}</span>
               </div>
               <div className="py-4 flex justify-between items-center border-t-2 border-gray-100">
                 <span className="font-bold text-gray-900">Total GBP</span>
                 <span className="text-lg font-black tracking-tight">{invoice.subtotal.toFixed(2)}</span>
               </div>
               <div className="py-3 flex justify-between items-center text-sm text-gray-600">
                 <span>Amount Paid</span>
                 <span className="font-bold text-gray-900 tracking-tight">{invoice.amountPaid}</span>
               </div>
               <div className="py-4 flex justify-between items-center border-t-2 border-gray-900 border-double">
                 <span className="font-black text-gray-900 text-sm">Amount Due (GBP)</span>
                 <span className="text-lg font-black tracking-tight">0.00</span>
               </div>
            </div>

            {/* Status Update */}
            <div className="mt-12 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl">
               <div className="flex items-start gap-4">
                 <Info className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                 <div className="space-y-1">
                   <p className="text-xs font-bold text-blue-700 uppercase tracking-widest">Status Update:</p>
                   <p className="text-sm text-blue-900 leading-relaxed">
                     Your order has been confirmed and is currently in the <span className="font-bold">Production Queue</span>. We will notify you when the items are ready for shipment.
                   </p>
                 </div>
               </div>
            </div>

            {/* Terms and Conditions */}
            <div className="mt-16 space-y-8">
               <div className="space-y-2">
                 <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest">Terms & Conditions</h4>
                 <p className="text-xs text-gray-500 leading-relaxed font-medium">Deposit amount only, balance due upon completion</p>
               </div>

               <div className="space-y-4">
                  <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest">Payment Instructions</h4>
                  <div className="bg-gray-50 border border-gray-100 rounded-lg p-5">
                    <p className="text-xs text-gray-600 leading-relaxed mb-6 font-medium">
                      Please pay this invoice via bank transfer (see details below) and include this payment reference: <span className="font-bold text-gray-900">{invoice.bankDetails.reference}</span>.
                    </p>
                    <div className="grid grid-cols-2 gap-8">
                       <div className="space-y-4">
                          <div>
                            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-1">Bank Name</p>
                            <p className="text-xs text-gray-900 font-bold uppercase">{invoice.bankDetails.name}</p>
                          </div>
                          <div>
                            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-1">Account No</p>
                            <p className="text-xs text-gray-900 font-bold tracking-widest font-mono">{invoice.bankDetails.accountNo}</p>
                          </div>
                          <div>
                            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-1">Swift</p>
                            <p className="text-xs text-gray-900 font-bold tracking-widest font-mono">{invoice.bankDetails.swift}</p>
                          </div>
                       </div>
                       <div className="space-y-4">
                          <div>
                            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-1">Sort Code</p>
                            <p className="text-xs text-gray-900 font-bold tracking-widest font-mono">{invoice.bankDetails.sortCode}</p>
                          </div>
                          <div>
                            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-1">Account Holder</p>
                            <p className="text-xs text-gray-900 font-bold uppercase">{invoice.bankDetails.accountHolder}</p>
                          </div>
                          <div>
                            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-1">Iban</p>
                            <p className="text-xs text-gray-900 font-bold tracking-widest font-mono">{invoice.bankDetails.iban}</p>
                          </div>
                       </div>
                    </div>
                  </div>
               </div>
            </div>
          </div>

          {/* Document Uploads Section */}
          <div className="bg-[#1A1A1A] p-4 md:p-6 rounded-xl flex flex-col md:flex-row items-center justify-between gap-4">
             <div className="flex items-center gap-4">
                <div className="bg-white/10 p-2 rounded-lg">
                  <UploadCloud className="text-white w-6 h-6" />
                </div>
                <div>
                   <h3 className="text-white font-bold text-sm uppercase tracking-widest">Document Uploads</h3>
                   <p className="text-gray-400 text-xs">Upload scanned copies or digital versions of your confirmations.</p>
                </div>
             </div>
             <button className="bg-white text-black px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-gray-100 transition-colors">
               <Upload size={14} /> Upload Confirmation
             </button>
          </div>

          {/* Empty Uploads Area */}
          <div className="bg-white border-2 border-dashed border-gray-100 rounded-2xl p-16 flex flex-col items-center justify-center text-center space-y-4">
             <div className="bg-gray-50 p-6 rounded-2xl">
                <ImageIcon size={48} className="text-gray-200" />
             </div>
             <div className="space-y-1">
               <h4 className="font-bold text-gray-900">No confirmations uploaded</h4>
               <p className="text-sm text-gray-400 max-w-xs mx-auto">Keep all your important confirmation documents in one place for easy access.</p>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const ImageIcon = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
    <circle cx="9" cy="9" r="2"/>
    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
  </svg>
);
