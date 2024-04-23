// import React , {useState}from 'react';
// import Datepicker from "react-tailwindcss-datepicker";


// const Nav = () => {
//     const [value, setValue] = useState({
//         startDate: null,
//         endDate: null
//     });

//     const handleValueChange = (newValue) => {
//         console.log("newValue:", newValue);
//         setValue(newValue);
//     } 

        
//     return(
   
//         <nav className='sticky top-0 z-10 p-4 drop-shadow-md bg-sky-900 text-white' >
//         <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
//             <div className='text-white text-xl font-bold mb-4 md:mb-0'>Call Driver Dashboard</div>

//             <div className='flex flex-wrap gap-4'>
//                 <div>
                
//                 </div>
//                 {/* <div>
//                     <label htmlFor="dateRange" className="text-white">Date Range:</label>
//                     <input type="date" id="dateRange" className="rounded-md p-1 text-black"/>
//                 </div>
//                 */}
//                 <div>
//                     <label htmlFor="numItems" className="text-white">Select First N Items:</label>
//                     <select id="numItems" className="rounded-md p-1 text-black">
//                         <option value="5">5</option>
//                         <option value="10">10</option>
//                         <option value="15">15</option>
//                     </select>
//                     <Datepicker 
// value={value} 
// onChange={handleValueChange} 
// showShortcuts={false} 
// /> 
//                 </div> 
//                 <div>
//                     <label htmlFor="filter" className="text-white">Filter:</label>
//                     <select id="filter" className="rounded-md p-1 text-black">
//                         <option value="all">All</option>
//                         <option value="OTV">OTV</option>
//                         <option value="RMD">RMD</option>
//                         <option value="FAX">FAX</option>
//                     </select>
//                 </div>
//             </div>
//         </div>
//     </nav>
        
//     )
// }
 
// export default Nav;

import React, { useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';
import { FaFilter } from 'react-icons/fa'; // Import the filter icon
import FilterPopup from './FilterPopup';
import PositionDemo from './PositionDemo';
import { Button } from 'primereact/button';
import PopupDoc from './PopupDoc';

const Nav = () => {
    const [value, setValue] = useState({
        startDate: null,
        endDate: null
    });

    const handleValueChange = (newValue) => {
        console.log("newValue:", newValue);
        setValue(newValue);
    }

    const [showFilterPopup, setShowFilterPopup] = useState(false);
    const toggleFilterPopup = () => {
        setShowFilterPopup(!showFilterPopup);
    }


    return (
  
<nav className='sticky top-0 z-10 p-4 drop-shadow-md bg-sky-900 text-white'>

            <div className='relative flex items-center'>
                <div className='text-white text-xl font-bold ml-6'>Call Driver Dashboard</div>
                <Button />

                {/* <div className='absolute right-6 cursor-pointer' onClick={toggleFilterPopup}>
                    <FaFilter size={24} />
                    <PopupDoc/>
                </div> */}
                 <div className='absolute right-6 cursor-pointer'>
                   
                    <PopupDoc/>
                </div>
                

                
                {/* Filter Popup */}
                {showFilterPopup && <PositionDemo/>}
                
                {/* Datepicker */}

                <div className='absolute left-1/2 transform -translate-x-1/2 w-72'>
                {/* <div className='flex items-center justify-center md:justify-center flex-grow'> */}
                    {/* <div className="w-full md:w-auto flex justify-center"> */}
                        {/* Apply DatePicker component here */}
                        <Datepicker
                            value={value}
                            onChange={handleValueChange}
                            showShortcuts={true}
                            inputClassNames="w-full"
                            containerClassNames="w-full "
                            separator={" To "}
                            showFooter={true} 
                            configs={{
                                footer: {
                                    cancel: "Cancel", 
                                    apply: "Apply" 
                                    }
                            }}
                            
                        />
                    {/* </div> */}
                </div>
            </div>
        </nav>
    );
}

export default Nav;
