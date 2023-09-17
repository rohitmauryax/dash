import React, { useEffect } from "react";
import {
  getData,
  getIntensity,
  getLikelihood,
  getRelevance,
} from "../../api/getData";

const SampleData = () => {
  const data = getData();
  const intensityMap = getIntensity();
  const likelihoodMap = getLikelihood();
  const relevanceMap = getRelevance();
  useEffect(() => {
    console.log("Whole data", data[0][0]);
    console.log("Intensity Map", intensityMap);
    console.log("Likelihood Map", likelihoodMap);
    console.log("Relevace Map", relevanceMap);
  }, [data, intensityMap, likelihoodMap, relevanceMap]);
  return (
    <div>
      <p>Heyy</p>
    </div>
  );
};

export default SampleData;
