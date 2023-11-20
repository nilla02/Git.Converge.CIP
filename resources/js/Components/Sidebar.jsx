import React from 'react';
import SB2 from './AAComp/SB2';
import AgentSidebar from './Sidebar/AgentSidebar';
import OfficerSidebar from './Sidebar/OfficerSidebar';

const Sidebarmain = ({ auth}) => {
  const userRole = auth.user.roles;
console.log(auth.user.roles);

    const renderSidebar = () => {
      if (userRole === '') {
        return <AgentSidebar />;
      } else if (userRole === 'officer') {
        return <OfficerSidebar />;
      } else {
        // Handle other roles or scenarios if needed
        return <SB2 user={user}/>;
      }
    };
  
    return <div>{renderSidebar()}</div>;
  };


 


export default Sidebarmain;
