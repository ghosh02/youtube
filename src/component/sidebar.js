import React from 'react';
import Menubar from './menubar'

import Videobars from './videobar'

const Sidebar = () => {
    return (

        <div className='flex'>
            <div className='lg:flex-[.15] max-lg:hidden'><Menubar className='' /></div>
            <div className='lg:flex-[.85]'><Videobars /></div>  
                
            
        </div>
    );
}

export default Sidebar;
