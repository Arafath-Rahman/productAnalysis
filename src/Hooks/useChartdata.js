import { useEffect, useState } from "react";

const useChartData = () => {
  const [data, setData] =useState();

  useEffect( ()=>{
    fetch('chart-data.json')
    .then(response=> response.json())
    .then(data=> setData(data))
  }, []);

  return [data, setData];
}

export default useChartData;