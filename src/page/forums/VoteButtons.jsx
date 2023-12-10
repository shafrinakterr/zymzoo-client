// VoteButtons.js
import React from 'react';

import { BiSolidDownArrow, BiSolidUpArrow  } from "react-icons/bi";

const VoteButtons = ({ onVote }) => {
  return (
    <div className='flex items-center'>
      <button className='btn btn-outline  rounded-full text-xl ml-2 text-white border-0 hover:bg-[#010313]' onClick={() => onVote('up')}>< BiSolidUpArrow className='w-full'  /></button>
      <span className=''>/</span>
      <button className='btn btn-outline  rounded-full text-xl mr-2 text-white border-0 hover:bg-[#010313] ' onClick={() => onVote('down')}><BiSolidDownArrow /></button>
    </div>
  );
};

export default VoteButtons;
