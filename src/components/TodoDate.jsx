import { useEffect, useState } from 'react';


export const TodoDate = () => {

  const [currdate, setCurrdate] = useState(new Date());
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrdate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const dateString = currdate.toLocaleDateString();
  const timeString = currdate.toLocaleTimeString();

  return (
    <div>
      <h1>{dateString} and {timeString}</h1>
    </div>
  );
}