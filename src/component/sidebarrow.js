import React from 'react';


const Sidebarrow = ({Icon,title}) => {
    return (
        <div className=' w-[90%] flex gap-[1.7rem] text-[15px] items-center justify-start  mt-[5px] ml-[20px] cursor-pointer hover:bg-[#222] px-[10px] py-[8px] rounded-[13px]'>
            <Icon/>
            <h2>{title}</h2>
        </div>
    );
}

export default Sidebarrow;
