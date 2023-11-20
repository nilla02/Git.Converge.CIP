import React from 'react';

const Footer = () => {
  return (
<footer className="relative  bg-[#405160]">
  <div className="w-full h-[100px] absolute left-0 top-0 bg-[#405160]"></div>
  <div className="w-full pl-[15px] md:pl-[100px] top-[40px] absolute bottom-0 md:top-[40px]  flex flex-col md:flex-row md:items-center justify-center md:gap-[166px]">
    <div className="text-white text-sm md:text-base font-normal leading-none mb-4 md:mb-0">
      Copyright St. Lucia Citizenship Program @ 2023 All rights reserved.
    </div>
    <div className="flex items-center gap-[15px]">
      <div className="text-white text-sm md:text-base font-bold leading-none">Terms of Use</div>
      <div className="w- h-5 border border-black transform rotate-"></div>
      <div className="text-white text-sm md:text-base font-bold leading-none">Privacy Policy</div>
    </div>
    <div className="text-white text-sm md:text-base font-normal leading-none">
      Powered By Converge Solutions Inc
    </div>
  </div>
</footer>

  );
};

export default Footer;
