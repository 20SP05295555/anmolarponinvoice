export interface Company {
  id: string;
  name: string;
  logoUrl?: string;
  regNo: string;
  email: string;
  web: string;
  address: string;
}

export interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  unit: string;
  price: number;
  details?: {
    size?: string;
    direction?: string;
    fabric?: string;
    color?: string;
    assemble?: boolean;
    extraNote?: string;
  };
}

export interface Invoice {
  id: string;
  orderConfirmation: string;
  orderDate: string;
  dueDate: string;
  customerNo: string;
  billTo: {
    name: string;
    address: string;
    email: string;
    phone: string;
  };
  items: InvoiceItem[];
  subtotal: number;
  vat: number;
  assemblyService: number;
  amountPaid: number;
  status: string;
  bankDetails: {
    name: string;
    sortCode: string;
    accountNo: string;
    accountHolder: string;
    swift: string;
    iban: string;
    reference: string;
  };
}
