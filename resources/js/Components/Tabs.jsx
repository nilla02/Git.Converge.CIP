
import React, { useState, useEffect } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabTitles = [
    'DocumentCheckList SL1',
    'Use of Authorised Agent SL2',
    'Statement of Alternative Citizenship SL3',
    'Investment Confirmation Form SL4',
    'Application for Saint Lucian Citizenship SL5',
    'Photograph and Signature Form SL6',
    'Affidavit of Support SL7',
    'Medical Examiner Details and Declaration SL8',
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  useEffect(() => {
    // Set the first tab as active by default
    handleTabClick(0);
  }, []);

  return (
    <div className="">
      <div className="sm:ml-">
        <div className="mt-5 sm:px-6 lg:px- space-y-6">

          <ul className="flex flex-wrap  bg-cyan-600 rounded text-[10px] font-medium text-center text-white" id="tabExample" role="tablist">
            {tabTitles.map((title, index) => (
              <li className="mr-" role="presentation" key={index}>
                <button
                  className={`tab-button inline-block px-4 py-2 rounded-lg ${
                    activeTab === index ? 'active' : ''
                  }`}
                  id={`tab-${index}`}
                  type="button"
                  role="tab"
                  aria-controls={`content-${index}`}
                  aria-selected={activeTab === index}
                  onClick={() => handleTabClick(index)}
                >
                  {title}
                </button>
              </li>
            ))}
          </ul>

          <div id="tabContentExample">
            {tabTitles.map((title, index) => (
              <div
                className={` rounded-lg ${activeTab === index ? '' : 'hidden'}`}
                id={`content-${index}`}
                role="tabpanel"
                aria-labelledby={`tab-${index}`}
              >
                   {/* Content for Tab 1 */}
      {index === 0 && (
        <div>
       
                                 <p className="text-sm text-gray-500 dark:text-gray-400"><iframe src="https://secure.na4.adobesign.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhC4s-G9cIkzFJuKK6dybW7xq7NW_mMDgMwmVsgIhgLx62ZTDVeuyD7qz1RYUFX8b1Q*&hosted=false  "height="1024"className="mx-auto md:w-full "></iframe></p>

        </div>
      )}
            {index === 1 && (
        <div>
                                 <p className="text-sm text-gray-500 dark:text-gray-400"><iframe src="https://cipportal.na4.adobesign.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhAbMMtJC55F10ot-eFyNAVRK1oVgnJqmzr8Q2pQz76R27SZaz-agf6qTn13HtwSUnE*&hosted=false" width="100%"  height="1024" className="mx-auto md:w-full"></iframe></p>


        </div>
      )}
            {index === 2 && (
        <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400"><iframe src="https://cipportal.na4.adobesign.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhD6pqYwuwfdVeAL35nw73tK99eplRGnySJWQuB2Vb4MWHb6sakN7RdTqBFA8Z6faQY*&hosted=false" width="100%" height="1024"></iframe></p>


        </div>
      )}
            {index === 3 && (
        <div>
                                   <p className="text-sm text-gray-500 dark:text-gray-400"><iframe src="https://cipportal.na4.adobesign.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhBjoQ8htYiGF0_2IKr5_hWqfGWC1XOrV6-0nJaG6dddAEXalKWfybXFjN35G8G6dAU*&hosted=false" width="100%" height="1024"></iframe></p>


        </div>
      )}
            {index === 4 && (
        <div>
       

        </div>
      )}
            {index === 5 && (
        <div>
       

        </div>
      )}
            {index === 6 && (
        <div>
       

        </div>
      )}
               {index === 7 && (
        <div>
       

        </div>
      )}



                {/* Your content for each tab */}
                {/* Replace this with your content */}
                {/* <p>{`Content for ${title}`}</p> */}
             
              </div>
            ))}
          </div>
          
         
        </div>
      </div>
    </div>
  );
};

export default Tabs;
