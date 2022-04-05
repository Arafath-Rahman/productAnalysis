import React, { useState } from 'react';
import './About.css';


const About = () => {
  const [device, setDevice] = useState(true);
  const macbook = {
    name: 'Macbook Air',
    chipset: 'Apple M1 Chip',
    cpu: 'upto 8 core',
    ram: 'upto 16GB',
    storage: 'upto 2TB',
    battery: 'upto 18 hours'
  };
  const macbookPRO = {
    name: 'Macbook PRO',
    chipset: 'Apple M1 Max Chip',
    cpu: 'upto 32 core',
    ram: 'upto 54GB',
    storage: 'upto 8TB',
    battery: 'upto 17 hours'
  };
  
  return (
    <div className="blog-container border-2 w-2/3 mx-auto rounded-lg p-5 my-5 mb-5 relative">
      <h1 className="text-center text-3xl font-bold hover:underline text-emerald-400 mb-8 mt-5">
        About Macbook
      </h1>
      <div className='flex justify-around mb-5'>
        <button onClick={()=>setDevice(true)} className='text-2xl font-medium p-3 bg-emerald-400 text-white rounded-lg'>Macbook</button>
        <span>Or</span>
        <button onClick={()=>setDevice(false)} className='text-2xl font-medium p-3 bg-red-500 text-white rounded-lg'>Macbook PRO</button>
      </div>
      <div className="border-2 mx-auto rounded-lg p-2 text-center">
        <h2 className="text-3xl text-slate-500 font-bold my-3 text-center">
          Device: {device ? macbook.name : macbookPRO.name}
        </h2>
        <p className=" font-medium ">
          Chipset: {device ? macbook.chipset : macbookPRO.chipset}
        </p>
        <p className=" font-medium ">
          CPU: {device ? macbook.cpu : macbookPRO.cpu}
        </p>
        <p className=" font-medium ">
          RAM: {device ? macbook.ram : macbookPRO.ram}
        </p>
        <p className=" font-medium ">
          Storage: {device ? macbook.storage : macbookPRO.storage}
        </p>
        <p className=" font-medium ">
          Battery: {device ? macbook.battery : macbookPRO.battery}
        </p>
      </div>
    </div>
  );
};

export default About;