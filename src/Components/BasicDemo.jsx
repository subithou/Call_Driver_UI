
import React from 'react'; 
import { Card } from 'primereact/card';
import HorizontalBarDemo from './HorizontalBarDemo';


export default function BasicDemo() {
    return (
        // <div class="flex flex-wrap justify-center">
        //     <div class="max-w-xxl mx-2 my-4 bg-white shadow-md rounded-lg overflow-hidden ">
        //         <div class="p-8 w-full">
                
                    
        //             <div class="uppercase tracking-wide text-sm  font-semibold">Call Drivers</div>
        //             {/* <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Title of your card</a> */}
        //             <p class="mt-2 text-sm text-gray-500">Listed, all call drivers between the selected date range. Please select any of the call driver</p>
        //             <HorizontalBarDemo/>
        //         </div>
        //     </div>
        //     <div class="max-w-xxl mx-2 my-4 bg-white shadow-md rounded-lg overflow-hidden overflow-hidden">
        //         <div class="p-8">
                
        //             <div class="uppercase tracking-wide text-sm  font-semibold">Phrases</div>
        //             {/* <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Title of your card</a> */}
        //             <p class="mt-2 text-sm text-gray-500">Listed, all phrases of '$selected_Call_Driver' on '$selected_date'. Click the phrase to get the count<br/></p>
        //             <HorizontalBarDemo/>
        //         </div>
        //     </div>
        // </div>
    //     <div className="flex flex-wrap justify-center">
    //     <div className="max-w-xxl mx-2 my-4 bg-white shadow-md rounded-lg overflow-hidden">
    //       <div className="p-8">
    //         <div className="uppercase tracking-wide text-sm font-semibold">Call Drivers</div>
    //         <p className="mt-2 text-sm text-gray-500">Listed, all call drivers between the selected date range. Please select any of the call driver</p>
    //         <HorizontalBarDemo />
    //       </div>
    //     </div>
    //     <div className="max-w-xxl mx-2 my-4 bg-white shadow-md rounded-lg overflow-hidden overflow-hidden">
    //       <div className="p-8">
    //         <div className="uppercase tracking-wide text-sm font-semibold">Phrases</div>
    //         <p className="mt-2 text-sm text-gray-500">Listed, all phrases of '$selected_Call_Driver' on '$selected_date'. Click the phrase to get the count<br/></p>
    //         <HorizontalBarDemo />
    //       </div>
    //     </div>
    //   </div>
    // <div className="flex flex-wrap justify-center gap-4">
    //         <div className="max-w-xs sm:max-w-md lg:max-w-2xl my-4 bg-white shadow-md rounded-lg overflow-hidden">
    //             <div className="p-8">
    //                 <div className="uppercase tracking-wide text-sm font-semibold">Call Drivers</div>
    //                 <p className="mt-2 text-sm text-gray-500">Listed, all call drivers between the selected date range. Please select any of the call driver</p>
    //                 <HorizontalBarDemo />
    //             </div>
    //         </div>
    //         <div className="max-w-xs sm:max-w-md lg:max-w-2xl my-4 bg-white shadow-md rounded-lg overflow-hidden">
    //             <div className="p-8">
    //                 <div className="uppercase tracking-wide text-sm font-semibold">Phrases</div>
    //                 <p className="mt-2 text-sm text-gray-500">Listed, all phrases of '$selected_Call_Driver' on '$selected_date'. Click the phrase to get the count<br/></p>
    //                 <HorizontalBarDemo />
    //             </div>
    //         </div>
    //     </div>
//     <div className="flex flex-wrap justify-center gap-4">
//     <div className="max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-xxl my-4 bg-white shadow-md rounded-lg overflow-hidden">
//         <div className="p-8">
//             <div className="uppercase tracking-wide text-sm font-semibold">Call Drivers</div>
//             <p className="mt-2 text-sm text-gray-500">Listed, all call drivers between the selected date range. Please select any of the call driver</p>
//             <HorizontalBarDemo />
//         </div>
//     </div>
//     <div className="max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-xl my-4 bg-white shadow-md rounded-lg overflow-hidden">
//         <div className="p-8">
//             <div className="uppercase tracking-wide text-sm font-semibold">Phrases</div>
//             <p className="mt-2 text-sm text-gray-500">Listed, all phrases of '$selected_Call_Driver' on '$selected_date'. Click the phrase to get the count<br/></p>
//             <HorizontalBarDemo />
//         </div>
//     </div>
// </div>
//  <div className="flex flex-row justify-center gap-4">
// <div className="max-w-xs bg-white shadow-md rounded-lg overflow-hidden">
//     <div className="p-8">
//         <div className="uppercase tracking-wide text-sm font-semibold">Call Drivers</div>
//         <p className="mt-2 text-sm text-gray-500">Listed, all call drivers between the selected date range. Please select any of the call driver</p>
//         <HorizontalBarDemo />
//     </div>
// </div>
// <div className="max-w-xs bg-white shadow-md rounded-lg overflow-hidden">
//     <div className="p-8">
//         <div className="uppercase tracking-wide text-sm font-semibold">Phrases</div>
//         <p className="mt-2 text-sm text-gray-500">Listed, all phrases of '$selected_Call_Driver' on '$selected_date'. Click the phrase to get the count<br/></p>
//         <HorizontalBarDemo />
//     </div>
// </div>
// </div> 

<div className="flex flex-row justify-center gap-4">
            <div className="w-full md:w-auto bg-white shadow-md rounded-lg overflow-hidden my-4 mx-2">
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm font-semibold">Call Drivers</div>
                    <p className="mt-2 text-sm text-gray-500">Listed, all call drivers between the selected date range. Please select any of the call driver</p>
                    <HorizontalBarDemo />
                </div>
            </div>
            <div className="w-full md:w-auto bg-white shadow-md rounded-lg overflow-hidden my-4 mx-2">
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm font-semibold">Phrases</div>
                    <p className="mt-2 text-sm text-gray-500">Listed, all phrases of '$selected_Call_Driver' on '$selected_date'. Click the phrase to get the count<br/></p>
                    <HorizontalBarDemo />
                </div>
            </div>
        </div>
    )
}
        