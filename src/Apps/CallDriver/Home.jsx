import Nav from './Nav'
import LineDemo from './LineDemo'
import BasicDemo from './BasicDemo';

import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
// import 'primeflex/primeflex.css'; // flex

function Home() {
  
  return (
      <>
          <div>
              <Nav />
              <div className='bg-#172554'>
                  <div className=' p-3'  style={{ backgroundColor: '#0c4a6e' , overflow: 'auto'}}>
                      <LineDemo />
                  </div>
              </div>

              <div className="relative px-4 -mt-8">
                  <BasicDemo />
              </div>
          </div>
      </>
  )
}

export default Home;
