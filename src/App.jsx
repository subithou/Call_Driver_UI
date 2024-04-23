
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {useState, useRef } from 'react';
import './App.css'
import Nav from './Components/Nav'
import LineDemo from './Components/LineDemo'
import BasicDemo from './Components/BasicDemo';
import PositionDemo from './Components/PositionDemo';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
// import 'primeflex/primeflex.css'; // flex


function App() {
  const [count, setCount] = useState(0);
  const [visibleLeft, setVisibleLeft] = useState(false);
    const [visibleRight, setVisibleRight] = useState(true);
    const [visibleTop, setVisibleTop] = useState(false);
    const [visibleBottom, setVisibleBottom] = useState(false);

  

  return (
    <>
      <div className='bg-yellow'>
        <Nav/>
     

        <div className='bg-#172554' style={{ backgroundColor: '#0c4a6e' }}>
          <div className=' p-3' >

            <LineDemo/>
          </div>

        </div>
        <div className="relative px-4 -mt-8">
          <BasicDemo />

        </div>

        <div className="card">
            <div className="flex gap-2 text-black justify-content-center">
                <Button className='text-black' icon="pi pi-arrow-right" onClick={() => setVisibleLeft(true)} />
                <Button icon="pi pi-arrow-left" onClick={() => setVisibleRight(true)} />
                <Button icon="pi pi-arrow-down" onClick={() => setVisibleTop(true)} />
                <Button icon="pi pi-arrow-up" onClick={() => setVisibleBottom(true)} />
            </div>

            <Sidebar visible={visibleLeft} position="left" onHide={() => setVisibleLeft(false)}>
                <h2>Left Sidebar</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </Sidebar>

            <Sidebar visible={visibleRight} className='bg-white' position="right" onHide={() => setVisibleRight(false)}>
                <div className='pl-4 pt-4'>
                <h2>Right Sidebar</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                </div>
            </Sidebar>

            <Sidebar visible={visibleTop} position="top" onHide={() => setVisibleTop(false)}>
                <h2>Top Sidebar</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </Sidebar>

            <Sidebar visible={visibleBottom} position="bottom" onHide={() => setVisibleBottom(false)}>
                <h2>Bottom Sidebar</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </Sidebar>
        </div>
      </div>
    </>
  )
}

export default App
