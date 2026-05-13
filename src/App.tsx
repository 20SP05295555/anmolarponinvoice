/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CompanyGrid } from './components/CompanyGrid';
import { InvoiceDetail } from './components/InvoiceDetail';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<CompanyGrid />} />
          <Route path="/detail/:id" element={<InvoiceDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

