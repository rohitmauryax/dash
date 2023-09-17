import React, { useEffect } from "react";
import {
  getCountryWiseDistribution,
  getData,
  getFieldWiseDistribution,
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
  const dataMap = getFieldWiseDistribution("pestle");
  useEffect(() => {
    console.log("Whole data", data[0][0]);
    console.log("Intensity Map", intensityMap);
    console.log("Likelihood Map", likelihoodMap);
    console.log("Relevace Map", relevanceMap);
    console.log("Countries Map", countriesMap);
    console.log("Topic map", topicMap);
    console.log("Region map", regionMap);
    console.log("Sector map", sectorMap);
    console.log("Data map", dataMap);
  }, [
    data,
    intensityMap,
    likelihoodMap,
    relevanceMap,
    countriesMap,
    topicMap,
    regionMap,
    sectorMap,
    dataMap,
  ]);
  return (
    <div>
      <p>Heyy</p>
    </div>
  );
};

export default SampleData;
