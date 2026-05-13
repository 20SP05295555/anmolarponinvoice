import React from 'react';
import { 
  FileText, 
  Receipt, 
  UploadCloud, 
  Image as ImageIcon, 
  Mail, 
  User, 
  Settings,
  X,
  CheckCircle2
} from 'lucide-react';

interface SidebarProps {
  onClose?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
  const menuItems = [
    { icon: <CheckCircle2 className="w-5 h-5" />, label: 'Order Confirmation', active: true },
    { icon: <FileText className="w-5 h-5" />, label: 'Invoice' },
    { icon: <Receipt className="w-5 h-5" />, label: 'Receipt' },
    { icon: <UploadCloud className="w-5 h-5" />, label: 'Uploaded Documents' },
    { icon: <ImageIcon className="w-5 h-5" />, label: 'Production Gallery' },
    { icon: <Mail className="w-5 h-5" />, label: 'Email Thread' },
    { icon: <User className="w-5 h-5" />, label: 'User Profile' },
    { icon: <Settings className="w-5 h-5" />, label: 'Account Settings' },
  ];

  return (
    <div className="w-full h-full bg-white flex flex-col border-r border-gray-100">
      <div className="flex items-center justify-between p-4 border-b border-gray-50 bg-gray-900 text-white md:bg-white md:text-gray-900">
        <h2 className="font-bold text-lg">HOB.PORTAL</h2>
        <button onClick={onClose} className="md:hidden">
          <X className="w-6 h-6" />
        </button>
      </div>
      <nav className="flex-1 py-2">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`w-full flex items-center gap-3 px-6 py-3 text-sm transition-colors ${
              item.active 
                ? 'bg-blue-50 text-blue-600 font-medium border-l-4 border-blue-600' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};
