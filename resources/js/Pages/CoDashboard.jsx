import AuthenticatedLayoutAA from "@/Layouts/AuthenticatedLayoutAA";
import Footer from "@/Components/Footer";
import CoDashboard from "@/Components/CeoDashboard";
import Cardbox from "@/Components/Cardbox";
import Authenticated from "@/Layouts/AuthenticatedSidebar";
import DoughnutChart from "@/Components/Charts/DoughnutChart";
import BarGraph from "@/Components/Charts/BarGraph";
import PieChart from "@/Components/Charts/PieChart";

import React, { useState, useEffect } from 'react';

export default function Dashboard({ auth, users, updated, notifications }) {
    const [activeTab, setActiveTab] = useState(0);

    const tabTitles = [
        'Application Overview',
        'User Overview',
    ];

    const handleTabClick = (index) => {
      setActiveTab(index);
    };

    useEffect(() => {
      // Set the first tab as active by default
      handleTabClick(0);
    }, []);

   
    return (
        <AuthenticatedLayoutAA user={auth.user}
        notifications={notifications}>
            <Authenticated user={auth.user} />
            <header className="bg-gray-900 text-white py-4">
                {/* ... (header content) */}
            </header>

            <div className="py-12">
                <div className="lg:ml-[235px] sm:ml-[235px] sm:px-6 lg:px-8">
                <ul className="flex flex-wrap  bg-cyan-600 rounded-lg text-sm text-center text-white" id="tabExample" role="tablist">
            {tabTitles.map((title, index) => (
              <li className="" role="presentation" key={index}>
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

<CoDashboard users={users}/>

        </div>
      )}
            {index === 1 && (
        <div>

<CoDashboard users={users}/>

        </div>
      )}
            {index === 2 && (
        <div>


        </div>
      )}
            {index === 3 && (
        <div>

<CoDashboard users={users}/>
        </div>
      )}
            {index === 4 && (
        <div>

<CoDashboard users={users}/>
        </div>
      )}
            {index === 5 && (
        <div>

<CoDashboard users={users}/>
        </div>
      )}
            {index === 6 && (
        <div>
<CoDashboard users={users}/>

        </div>
      )}
               {index === 7 && (
        <div>

<CoDashboard users={users}/>
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

            {/* Footer */}
            <footer className=""></footer>
        </AuthenticatedLayoutAA>
    );
}
