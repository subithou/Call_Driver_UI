import React, { useState } from 'react';

const FilterPopup = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleTogglePopup = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <button onClick={handleTogglePopup}>
                <svg className="w-6 h-6 text-gray-500 hover:text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            {isOpen && (
                <div className="absolute top-16 right-0 z-50 bg-white p-6 rounded-lg shadow-lg">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl text-black font-semibold">Filter Options</h2>
                        <button onClick={handleTogglePopup} className="text-gray-500 hover:text-gray-700">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="space-y-4">
                        {/* Dropdown Example */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Category</label>
                            <select className="mt-1 block w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-md shadow-sm">
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                            </select>
                        </div>
                        {/* Add more dropdowns or filter options here */}
                    </div>
                    <div className="mt-6 flex justify-end space-x-4">
                        <button onClick={handleTogglePopup} className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-md">Cancel</button>
                        <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">Apply</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FilterPopup;
