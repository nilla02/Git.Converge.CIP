import { useState, useEffect, } from 'react';
import AuthenticatedLayoutAA from '@/Layouts/AuthenticatedLayoutAA';
import { Pie } from "react-chartjs-2";
import SB2 from '@/Components/AAComp/SB2';
import React from 'react';




export default function Dashboard({ auth, users }) {
    const draftUsers = users.filter((user) => user.status === 'Draft');
    const draftUserCount = draftUsers.length;
    const PPU = users.filter((user) => user.status === 'two');
    const PPC = PPU.length;

    const data = {
        labels: ["Draft", "Pre-processing", "Non-Compliant", "Query Pending", "Pending Review", "Background check Underway"],
        datasets: [
          {
            label: "Applications",
            data: [draftUserCount, 25, 22, 20, 18, 15],
            backgroundColor: [
              "#007D9C",
              "#244D70",
              "#D123B3",
              "#F7E018",
              "#fff",
              "#FE452A",
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      };
  return (
    <AuthenticatedLayoutAA user={auth.user}>
      
   
      <div className="flex flex-col min-h-full bg-[#fafafa] ">
        <div className="bg-[#405160] overflow-hidden shadow-sm sm:">
          <div className="p-6  text-white">
            {auth.user.name} You have successfully logged in!!
          </div>
        </div>
        <div className="h-screen">
        <div className="flex flex-col sm:flex-row">
         
            <div className="mb-[200px]">
              {/* Sidebar */}
              {/* <Sidebar /> */}
              <SB2/>
            </div>
          
          <div className="flex-grow ">
            <div className="p-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-3">
              
              <Pie data={data} width={50} height={50} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-3">
             
              </div>
     
            </div>
          
          </div>
        </div>
 
        </div>
   
    
      </div>
    </AuthenticatedLayoutAA>
  );
 
}
