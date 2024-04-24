import React, { useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { MultiSelect } from 'primereact/multiselect';
import { Toast } from 'primereact/toast';

import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
import { data } from 'autoprefixer';


export default function PopupDoc() {
    const menu = useRef(null);
    const toast = useRef(null);
    
    
    
    const [selectedLOB, setSelectedLOB] = useState(null);
    const [selectedMarketSector, setSelectedMarketSector] = useState(null);
    const [selectedQueue, setSelectedQueue] = useState(null);
    const [selectedClientID, setSelectedClientID] = useState(null);
    const [selectedParticipant, setSelectedParticipant] = useState(null);
    const [selectedDNIS, setSelectedDNIS] = useState(null);

    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    const LOB = [
        {name: "wealth"},
        
    ]
    const queues = [
        { name: 'WS Florida'},
        {name: 'WS XFR Government'},
        {name: 'WS Government Launch'},
        {name: 'WS Washingtone DRS'},
        {name: 'WS Government'},
        {name: "WS Indiana"},
        {name: "WS Givernment Speciality"}
    ]

    const participant = [
        {name: "Internal"},
        {name: "External"},
        
    ]

    const marketSector = [
        {name: "TEM"},
        {name: "LCM"},
        {name: "Full Service"},
        {name: "TSA"}
    ]

    const clearSelections = () => {
        setSelectedClientID(null);
        setSelectedDNIS(null);
        setSelectedLOB(null);
        setSelectedMarketSector(null);
        setSelectedParticipant(null);
        setSelectedQueue(null);
    }

    const applySelections = () => {
        const data = {
            lob: selectedLOB,
            marketSector: selectedMarketSector,
            queue: selectedQueue,
            Clientid: selectedClientID,
            participant: selectedParticipant,
            dnis: selectedDNIS
        }

        console.log('apply', data)
    }

    const items = [
        {
            label: 'Filter',
            items: [
                {
                    label:'LOB',
                    template: (
                        <MultiSelect
                            value={selectedLOB}
                            
                            onChange={(e) => setSelectedLOB(prevState => (e.value))}
                            options={LOB}
                            optionLabel='name'
                            filter placeholder="LOB" 
                            maxSelectedLabels={3} 
                            className="w-48 ml-1 border md:w-60"
                            
                        />
                    )
                },
                {
                  
                    template: (
                        <MultiSelect
                            value={selectedMarketSector}
                            
                            onChange={(e) => setSelectedMarketSector(prevState => (e.value))}
                            options={marketSector}
                            optionLabel='name'
                            filter placeholder="Market Sector" 
                            maxSelectedLabels={3} 
                            className="w-48 ml-1 mt-1 border md:w-60"
                        />
                    )
                },
                {
                  
                    template: (
                        <MultiSelect
                            value={selectedQueue}
                            
                            onChange={(e) => setSelectedQueue(prevState => (e.value))}
                            options={queues}
                            optionLabel='name'
                            filter placeholder="Queue" 
                            maxSelectedLabels={3} 
                            className="w-48 ml-1 mt-1 border md:w-60"
                        />
                    )
                },
                {
                  
                    template: (
                        <MultiSelect
                            value={selectedClientID}
                            
                            onChange={(e) => setSelectedClientID(prevState => (e.value))}
                            options={cities}
                            optionLabel='name'
                            filter placeholder="Client ID" 
                            maxSelectedLabels={3} 
                            className="w-48 ml-1 mt-1 border md:w-60"
                        />
                    )
                },
                {
                  
                    template: (
                        <MultiSelect
                            value={selectedParticipant}
                            
                            onChange={(e) => setSelectedParticipant(prevState => (e.value))}
                            options={participant}
                            optionLabel='name'
                            filter placeholder="Participant" 
                            maxSelectedLabels={3} 
                            className="w-48 ml-1 mt-1 mb-1 border md:w-60"
                        />
                    )
                },
                {
                  
                    template: (
                        <MultiSelect
                            value={selectedDNIS}
                            
                            onChange={(e) => setSelectedDNIS(prevState => (e.value))}
                            options={cities}
                            optionLabel='name'
                            filter placeholder="DNIS" 
                            maxSelectedLabels={3} 
                            className="w-48 ml-1 mt-1 mb-1 border md:w-60"
                        />
                    )
                },
                {
                    template: (
                        <>
                            
                            <div className='w-full flex justify-between'> 
                            <Button label="Clear" onClick={clearSelections}  className='p-button-primary bg-fuchsia-950 ml-5 mt-3 text-white' style={{width: '100px', height: '35px'}} />

                            <Button label="Apply" onClick={applySelections}  className='p-button-primary bg-fuchsia-700 mr-5 mt-3 text-white' style={{width: '100px'}} />

                            </div>
                            
                        </>
                    )
                },
            
                
            ]
        },
       
    ];

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast}></Toast>
            <Menu model={items} popup ref={menu} id="popup_menu" popupAlignment="left" dismissable="false" style={{ width: '250px' }} />
            <Button icon="pi pi-filter-fill" className="mr-0" onClick={(event) => menu.current.toggle(event)} aria-controls="popup_menu" aria-haspopup />
        </div>
    );
}



