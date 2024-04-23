
// import React, { useRef } from 'react';
// import { Button } from 'primereact/button';
// import { Menu } from 'primereact/menu';
// import { Toast } from 'primereact/toast';

// export default function PopupDoc() {
//     const menuLeft = useRef(null);
//     const menuRight = useRef(null);
//     const toast = useRef(null);
//     const items = [
//         {
//             label: 'Options',
//             items: [
//                 {
//                     label: 'Refresh',
//                     icon: 'pi pi-refresh'
//                 },
//                 {
//                     label: 'Export',
//                     icon: 'pi pi-upload'
//                 }
//             ]
//         }
//     ];

//     return (
//         <div className="card flex justify-content-center">
//             <Toast ref={toast}></Toast>
//             {/* <Menu model={items} popup ref={menuLeft} id="popup_menu_left" />
//             <Button label="Show Left" icon="pi pi-align-left" className="mr-2" onClick={(event) => menuLeft.current.toggle(event)} aria-controls="popup_menu_left" aria-haspopup /> */}
//             <Menu model={items} popup ref={menuRight} id="popup_menu_right" popupAlignment="right" />

//             <Button icon="pi pi-filter-fill" className="mr-2" onClick={(event) => menuRight.current.toggle(event)} aria-controls="popup_menu_right" aria-haspopup />
//         </div>
//     )
// }
        
import React, { useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { MultiSelect } from 'primereact/multiselect';
import { Toast } from 'primereact/toast';

export default function PopupDoc() {
    const menu = useRef(null);
    const toast = useRef(null);
    const [selectedOptions, setSelectedOptions] = useState({});
    const [selectedCities, setSelectedCities] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    const items = [
        {
            
            items: [
                {
                    label: 'Options 1.1',
                    template: (
                        <MultiSelect
                            value={selectedCities}
                            
                            onChange={(e) => setSelectedCities(prevState => (e.value))}
                            options={cities}
                            optionLabel='name'
                            filter placeholder="DNIS" 
                            maxSelectedLabels={3} 
                            className="w-full border md:w-20rem"
                        />
                    )
                },
                {
                  
                    template: (
                        <MultiSelect
                            value={selectedCities}
                            
                            onChange={(e) => setSelectedCities(prevState => (e.value))}
                            options={cities}
                            optionLabel='name'
                            filter placeholder="Queue" 
                            maxSelectedLabels={3} 
                            className="w-full mt-2 border md:w-20rem"
                        />
                    )
                },
                {
                  
                    template: (
                        <MultiSelect
                            value={selectedCities}
                            
                            onChange={(e) => setSelectedCities(prevState => (e.value))}
                            options={cities}
                            optionLabel='name'
                            filter placeholder="Queue" 
                            maxSelectedLabels={3} 
                            className="w-full  mt-2 border md:w-20rem"
                        />
                    )
                },
                {
                  
                    template: (
                        <MultiSelect
                            value={selectedCities}
                            
                            onChange={(e) => setSelectedCities(prevState => (e.value))}
                            options={cities}
                            optionLabel='name'
                            filter placeholder="Queue" 
                            maxSelectedLabels={3} 
                            className="w-full  mt-2 border md:w-20rem"
                        />
                    )
                },
                {
                  
                    template: (
                        <MultiSelect
                            value={selectedCities}
                            
                            onChange={(e) => setSelectedCities(prevState => (e.value))}
                            options={cities}
                            optionLabel='name'
                            filter placeholder="Queue" 
                            maxSelectedLabels={3} 
                            className="w-full  mt-2 border md:w-20rem"
                        />
                    )
                }
            ]
        },
        // {

        //     items: [
        //         {
                  
        //             template: (
        //                 <MultiSelect
        //                     value={selectedCities}
                            
        //                     onChange={(e) => setSelectedCities(prevState => (e.value))}
        //                     options={cities}
        //                     optionLabel='name'
        //                     filter placeholder="Queue" 
        //                     maxSelectedLabels={3} 
        //                     className="w-full border md:w-20rem"
        //                 />
        //             )
        //         }
        //     ]
        // },
        // {
        //     label: 'Category 2',
        //     items: [
        //         {
        //             label: 'Options 2.1',
        //             template: (
        //                 <MultiSelect
        //                     value={selectedOptions.category2}
        //                     options={[
        //                         { label: 'Option 2.1.1', value: 'Option 2.1.1' },
        //                         { label: 'Option 2.1.2', value: 'Option 2.1.2' }
        //                     ]}
        //                     onChange={(e) => setSelectedOptions(prevState => ({ ...prevState, category2: e.value }))}
        //                 />
        //             )
        //         }
        //     ]
        // }
    ];

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast}></Toast>
            <Menu model={items} popup ref={menu} id="popup_menu" popupAlignment="left" dismissable={false} style={{ width: '250px' }} />
            <Button icon="pi pi-filter-fill" className="mr-2" onClick={(event) => menu.current.toggle(event)} aria-controls="popup_menu" aria-haspopup />
        </div>
    );
}



