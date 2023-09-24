import React from 'react';
import dpphoto from '../images/dpphoto.webp'

const Videos = () => {
    return (
        <div className='cursor-pointer'>
            <img src={dpphoto} alt="" className='flex z-50 lg:w-[25rem] w-[20rem] lg:h-[15rem] h-[12rem] object-cover rounded-[10px]'/>
            <div className='flex lg:w-[24rem] w-[20rem] h-[3rem] mt-3 gap-2'>
                <img src={dpphoto} alt="" className='w-[40px] h-[40px] object-cover rounded-[50%] ' />
            <p className=' overflow-hidden font-bold'>hello thos is sudp new new video thank for watching hello thos is sudp new new video thank for watching </p>
            </div>
            <div className='ml-[3rem]'>
            <h2>youtube channel name</h2>
                <p><span>200k views </span><span> 10 months ago</span></p>
            </div>
        </div>
    );
}

export default Videos;
