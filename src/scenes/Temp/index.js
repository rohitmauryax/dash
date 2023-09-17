import React, { useEffect } from "react";
import { getData, getIntensity, getLikelihood } from "../../api/getData";

const SampleData = () => {
  const data = getData();
  const intensityMap = getIntensity();
  const likelihoodMap = getLikelihood();
  useEffect(() => {
    console.log("Whole data", data[0][0]);
    console.log("Intensity Map", intensityMap);
    console.log("Likelihood Map", likelihoodMap);
  }, [data, intensityMap, likelihoodMap]);
  return (
    <div>
      <p>Heyy</p>
    </div>
  );
};

export default SampleData;
