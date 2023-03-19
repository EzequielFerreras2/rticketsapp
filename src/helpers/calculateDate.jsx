export const calculateDate =(data)=>{
    const today = new Date();
    const yday = new Date(data);
    const ct =today.getTime()-yday.getTime();
    const CreationPassDate= Math.round(ct/(1000*60*60*24))-1;
    return CreationPassDate;
  };