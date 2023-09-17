import React, { useEffect } from "react";
import {
  getCountryWiseDistribution,
  getData,
  getIntensity,
  getLikelihood,
  getRegionWiseDistribution,
  getRelevance,
  getSectorWiseDistribution,
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
  const sectorMap = getSectorWiseDistribution();
  useEffect(() => {
    console.log("Whole data", data[0][0]);
    console.log("Intensity Map", intensityMap);
    console.log("Likelihood Map", likelihoodMap);
    console.log("Relevace Map", relevanceMap);
    console.log("Countries Map", countriesMap);
    console.log("Topic map", topicMap);
    console.log("Region map", regionMap);
    console.log("Sector Map", sectorMap);
  }, [
    data,
    intensityMap,
    likelihoodMap,
    relevanceMap,
    countriesMap,
    topicMap,
    regionMap,
    sectorMap,
  ]);
  return (
    <div>
      <p>Heyy</p>
    </div>
  );
};

export default SampleData;
