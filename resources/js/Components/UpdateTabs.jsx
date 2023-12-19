
import React, { useState, useEffect } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabTitles = [
    'General',
    'Sponsered',
    'Visa Credentials',
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


        </div>
      )}
            {index === 1 && (
        <div>



        </div>
      )}
            {index === 2 && (
        <div>


        </div>
      )}
            {index === 3 && (
        <div>


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
