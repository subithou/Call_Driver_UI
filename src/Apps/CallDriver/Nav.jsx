import React, { useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';

import PopupDoc from './PopupDoc';

//redux
import { connect } from 'react-redux';
import { setDateRange } from './Redux/actions';

const Nav = ({ setDateRange }) => {
    const [value, setValue] = useState({
        startDate: null,
        endDate: null
    });

    const handleValueChange = (newValue) => {
        console.log("newValue:", newValue);
        setValue(newValue);
        setDateRange(newValue);
    }

    const [showFilterPopup, setShowFilterPopup] = useState(false);
    const toggleFilterPopup = () => {
        setShowFilterPopup(!showFilterPopup);
    }


    return (

        <nav className='sticky top-0 z-10 p-4 drop-shadow-md bg-sky-900 text-white'>

            <div className='relative flex items-center'>
                <div className='text-white text-xl font-bold ml-6'>Call Driver Dashboard</div>

                <div className='absolute right-6 cursor-pointer'>

                    <PopupDoc />
                </div>

                {/* Datepicker */}

                <div className='absolute left-1/2 transform -translate-x-1/2 w-72'>
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

                </div>
            </div>
        </nav>
    );
};

const mapDispatchToProps = {
    setDateRange,
}

export default connect(null, mapDispatchToProps) (Nav);
