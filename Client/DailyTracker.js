// import React, { useState, useEffect } from 'react';
// import { Line } from 'react-chartjs-2';

// function DailyTracker() {
//   const [mentalHealthData, setMentalHealthData] = useState({});
  
//   useEffect(() => {
//     fetch('http://localhost:8000/mentalHealthData')
//       .then(response => response.json())
//       .then(data => setMentalHealthData(data))
//       .catch(error => console.error(error));
//   }, []);
  
//   const data = {
//     labels: Object.keys(mentalHealthData),
//     datasets: [
//       {
//         label: 'Happiness',
//         data: Object.values(mentalHealthData).map(entry => entry.happiness),
//         borderColor: 'rgba(75,192,192,1)',
//         fill: false,
//       },
//       {
//         label: 'Stress',
//         data: Object.values(mentalHealthData).map(entry => entry.stress),
//         borderColor: 'rgba(192,75,192,1)',
//         fill: false,
//       },
//       {
//         label: 'Energy',
//         data: Object.values(mentalHealthData).map(entry => entry.energy),
//         borderColor: 'rgba(192,192,75,1)',
//         fill: false,
//       },
//     ],
//   };
  
//   return (
//     <div>
