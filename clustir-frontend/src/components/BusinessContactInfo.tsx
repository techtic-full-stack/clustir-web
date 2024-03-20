import { useState } from "react";

const BusinessContactInfo = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col bg-[#FFFFFF] p-8 rounded-lg shadow-lg">
        <h2 className="text-black font-bold mb-6">Business Contact Info</h2>
        <div className="inner-card">
          {/* Insert your form fields here */}
          {/* Example field */}
          <div className="mb-4">
            <label htmlFor="businessName" className="text-gray-800 block mb-2">Business Name *</label>
            <input type="text" id="businessName" className="w-full px-3 py-2 border rounded-lg" />
          </div>
          {/* Add more fields as needed */}
        </div>
      </div>
    </div>
  );
};

export default BusinessContactInfo;
