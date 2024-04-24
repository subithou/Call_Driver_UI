
import React from 'react'; 
import { Card } from 'primereact/card';
import HorizontalBarDemo from './HorizontalBarDemo';


export default function BasicDemo() {
    return (

       

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
        