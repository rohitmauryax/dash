import React, { useEffect } from "react";
import {
  getCountryWiseDistribution,
  getData,
  getIntensity,
  getLikelihood,
  getRegionWiseDistribution,
  getRelevance,
  getTopicWiseDistribution,
} from "../../api/getData";

const SampleData = () => {
  const data = getData();
  const intensityMap = getIntensity();
  const likelihoodMap = getLikelihood();
  const relevanceMap = getRelevance();
  const countriesMap = getCountryWiseDistribution();
  const topicMap = getTopicWiseDistribution();
  const regionMap = getRegionWiseDistribution();
  useEffect(() => {
    console.log("Whole data", data[0][0]);
    console.log("Intensity Map", intensityMap);
    console.log("Likelihood Map", likelihoodMap);
    console.log("Relevace Map", relevanceMap);
    console.log("Countries Map", countriesMap);
    console.log("Topic map", topicMap);
    console.log("Region map", regionMap);
  }, [
    data,
    intensityMap,
    likelihoodMap,
    relevanceMap,
    countriesMap,
    topicMap,
    regionMap,
  ]);
  return (
    <div>
      <p>Heyy</p>
    </div>
  );
};

export default SampleData;
