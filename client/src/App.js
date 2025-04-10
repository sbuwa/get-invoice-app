// GST Invoice Generator - Skeleton UI using React + Tailwind CSS

import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 font-sans">
      <header className="bg-white shadow p-4 rounded-xl mb-6">
        <h1 className="text-2xl font-bold text-center">
          GST Invoice Generator
        </h1>
      </header>

      <main className="max-w-4xl mx-auto space-y-6">
        {/* Client Details Section */}
        <section className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">Client Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input type="text" placeholder="Client Name" className="input" />
            <Input type="text" placeholder="Client Email" className="input" />
            <Input type="text" placeholder="Client Address" className="input" />
            <Input
              type="text"
              placeholder="GSTIN (Optional)"
              className="input"
            />
          </div>
        </section>

        {/* Invoice Details Section */}
        <section className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">Invoice Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input type="text" placeholder="Invoice Number" className="input" />
            <Input type="date" placeholder="Invoice Date" className="input" />
            <Input
              type="text"
              placeholder="Service Provided"
              className="input"
            />
            <Input type="number" placeholder="Amount (INR)" className="input" />
            <select className="input">
              <option value="18">GST 18%</option>
              <option value="12">GST 12%</option>
              <option value="5">GST 5%</option>
              <option value="0">GST Exempted</option>
            </select>
          </div>
        </section>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-xl shadow hover:bg-blue-700">
            Generate PDF
          </button>
          <button className="bg-green-600 text-white px-6 py-2 rounded-xl shadow hover:bg-green-700">
            Email Invoice
          </button>
        </div>
      </main>
    </div>
  );
}

// Tailwind Input Styling
const inputClass = `
  w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none
  focus:ring-2 focus:ring-blue-500
`;

const Input = ({ type = "text", placeholder }) => (
  <input type={type} placeholder={placeholder} className={inputClass} />
);
