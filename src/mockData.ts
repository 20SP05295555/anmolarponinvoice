import { Company, Invoice } from './types';

export const companies: Company[] = Array.from({ length: 30 }, (_, i) => ({
  id: `comp-${i + 1}`,
  name: i === 0 ? "HOUSE OF BESPOKE FURNITURE" : `Anmol Company ${i + 1}`,
  regNo: (14667294 + i).toString(),
  email: "customerservice@hobfurniture.co.uk",
  web: "www.hobfurniture.co.uk",
  address: "Emma Kitchen, 4th Floor 205 Regent Street, London - W1B 4HB",
}));

export const getMockInvoice = (companyId: string): Invoice => ({
  id: `inv-${companyId}`,
  orderConfirmation: "HOB2025-376",
  orderDate: "14/09/2025",
  dueDate: "19/09/2025",
  customerNo: "376",
  billTo: {
    name: "Arthur Cook",
    address: "Iffley Rd, Oxford OX4 1EQ, United Kingdom",
    email: "marwelgkcurry83@gmail.com",
    phone: "+441865241971",
  },
  items: [
    {
      id: "item-1",
      description: "Epping U Shape Modular Sofa",
      quantity: 1,
      unit: "each",
      price: 2499,
      details: {
        size: "340cm x 170cm x 240cm",
        direction: "Symmetrical",
        fabric: "Velvet",
        color: "Silver Gray",
        assemble: true,
        extraNote: "Includes matching scatter cushions. Handcrafted in the UK",
      }
    }
  ],
  subtotal: 2499,
  vat: 0,
  assemblyService: 49,
  amountPaid: 2499,
  status: "Your order has been confirmed and is currently in the Production Queue. We will notify you when the items are ready for shipment.",
  bankDetails: {
    name: "SUMUP LIMITED",
    sortCode: "041450",
    accountNo: "58291337",
    accountHolder: "HOB FURNITURE",
    swift: "SUPAGB21XXX",
    iban: "GB42SUPA04145058291337",
    reference: "39838265"
  }
});
