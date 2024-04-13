import { useState } from "react";

const ClockComponent = (props) =>{
 // let countryUTC = calculateUTC(props.country);

  let time = new Date().toLocaleTimeString();

  const [ctime,setTime] = useState(time)
  const UpdateTime=()=>{
    time = new Date().toLocaleTimeString();
    setTime(time)
  }
  setInterval(UpdateTime)
  return <h1>{ctime}</h1>
};

const calculateUTC = (country) => {
  const d = new Date();
  const localTime = d.getTime();
  const localOffset = d.getTimezoneOffset() * 60000;

  const utc = localTime + localOffset;
  let offset = 0;
  
  // if (country === "UNITED KINGDOM") 
  //   offset = 5.5;
  // else if (country === "UNITED KINGDOM")
  //   offset = 10.5; 
  // else if (country === "CHINA") 
  //   offset = 2.5;

  return utc + 3600000 * offset;  
};

export default ClockComponent;
