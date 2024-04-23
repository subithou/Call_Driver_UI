
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function TimeDemo() {
    const [datetime12h, setDateTime12h] = useState(null);
    const [datetime24h, setDateTime24h] = useState(null);
    const [time, setTime] = useState(null);

    return (
        <div className="card flex flex-wrap gap-3 p-fluid text-black">
            <div className="card flex justify-content-center">
                
                <Calendar id="calendar-12h" value={datetime12h} onChange={(e) => setDateTime12h(e.value)} selectionMode="range" showTime hourFormat="12" readOnlyInput hideOnRangeSelection/>
            </div>
            <div className="flex-auto">
                <label htmlFor="calendar-24h" className="font-bold block mb-2">
                    24h Format
                </label>
                <Calendar id="calendar-24h" value={datetime24h} onChange={(e) => setDateTime24h(e.value)} showTime hourFormat="24" />
            </div>
            <div className="flex-auto">
                <label htmlFor="calendar-timeonly" className="font-bold block mb-2">
                    Time Only
                </label>
                <Calendar id="calendar-timeonly" value={time} onChange={(e) => setTime(e.value)} timeOnly />
            </div>
        </div>
    )
}
        