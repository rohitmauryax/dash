import React, { useEffect } from "react";
import { getData, getIntensity } from "../../api/getData";

const SampleData = () => {
  const data = getData();
  const intensityMap = getIntensity();
  useEffect(() => {
    console.log("Whole data", data[0][0]);
    console.log("Intensity Map", intensityMap);
  }, [data, intensityMap]);
  return (
    <div>
      <p>Heyy</p>
    </div>
  );
};

export default SampleData;
