import React from 'react';
import ytlogo from '../images/yt-logo.png'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
// import MicIcon from '@mui/icons-material/Mic';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import dpphoto from '../images/dpphoto.webp'


const Header = () => {
    return (
        <>
        <div className='flex cursor-pointer justify-between lg:p-[1.5rem] p-[1rem] items-center sticky top-[-2px] bg-black'>            
            <div className='flex lg:gap-4 lg:ml-2'>
                <MenuIcon className=' ' />
                <img src={ytlogo} alt="YOUTUBE" className='w-[7rem] h-[1.5rem] object-cover scale-[.8]' />
            </div>
            <div className='w-[40%] hidden  gap-[1rem] lg:border-2 h-[2.4rem] rounded-[17px] items-center md:flex bg-[#111111]'>
                <input type="text" placeholder='search' className='w-[90%] bg-transparent outline-none p-3 rounded-[17px] overflow-hidden items-center' />
                <SearchIcon className=''/>
            </div>
            <div className='flex lg:gap-4 gap-2'>
                <VideoCallIcon className=''/>
                <NotificationsIcon className='' />
                <div className='lg:hidden'>
                <SearchIcon />
                </div>
                
                <img src={dpphoto} alt="" className=' w-[25px] h-[25px] rounded-[50%] object-cover' />
            </div>
        </div>
          
        </>
    );
}

export default Header;
