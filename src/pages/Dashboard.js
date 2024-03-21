// import React from 'react'

// const Dashboard = () => {
//   return (
//     <div className='flex justify-center items-center text-white text-3xl h-full'>BMI Calculator</div>
//   )
// }

// // export default Dashboard
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import BMIPage3 from './BMIPage3';
// import BMIPage1 from './BMIPage1';
// import BMIPage2 from './BMIPage2';

// const BMIPage1 = () => (
//   <div>
//     <h2>Your BMI is less than 18</h2>
//     <p>Navigate to Page 1 content here.</p>
//   </div>
// );

// const BMIPage2 = () => (
//   <div>
//     <h2>Your BMI is between 18 and 25</h2>
//     <p>Navigate to Page 2 content here.</p>
//   </div>
// );

// const BMIPage3 = () => (
//   <div>
//     <h2>Your BMI is greater than 25</h2>
//     <p>Navigate to Page 3 content here.</p>
//   </div>
// );

const BMICalculator = (props) => {
  const navigate = useNavigate();
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    const heightMeters = height / 100;
    const bmiValue = weight / (heightMeters * heightMeters);
    setBMI(bmiValue);
    console.log(bmiValue);
  };

  const navigateToPage = () => {
    if (bmi < 400) {
      return navigate("./BMIPage1")
    } else if (bmi >= 400 && bmi <= 500) {
      return navigate("./BMIPage2")
    } else {
      return navigate("./BMIPage3")
    }
  };

  return (
    <div>
      <div>
          
               <h2>{props.name ? `Welcome - ${props.name}`:'Login please'}</h2>
      </div>

      <h1 className='text-slate-200'>BMI Calculator</h1>
      <label className='text-slate-200'>
        Weight (kg):
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </label>
      <br />
      <label className='text-slate-200'>
        Height (cm):
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </label>
      <br />
      <button onClick={calculateBMI} className='text-slate-200'>Calculate BMI</button>
      <br />
      {bmi !== null && navigateToPage()}
    </div>
  );
};

export default BMICalculator;

