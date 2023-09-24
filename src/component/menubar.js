import React from 'react';
import Sidebarrow from './sidebarrow'
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';

const Menubar = () => {
    return (
        
        <div className='fixed hidden lg:block'>
           <Sidebarrow Icon={HomeIcon} title="Home" /> 
           <Sidebarrow Icon={HomeIcon} title="Shorts" /> 
           <Sidebarrow Icon={SubscriptionsIcon} title="Subscriptions" /> 
           <Sidebarrow Icon={WhatshotIcon} title="Trends" /> 
           <Sidebarrow Icon={HomeIcon} title="Home" /> 
           <Sidebarrow Icon={HomeIcon} title="Home" /> 
           <Sidebarrow Icon={HomeIcon} title="Home" /> 
        </div>
    );
}

export default Menubar;
