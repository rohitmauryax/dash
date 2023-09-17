import { data } from "../data/sampleData";
import { countries } from "../data/countries";

export function getData() {
  return data;
}

export function getIntensity() {
  const intensityMap = new Map();

  intensityMap.set("1to5", []);
  intensityMap.set("5to10", []);
  intensityMap.set("10to15", []);
  intensityMap.set("15to20", []);
  intensityMap.set("20above", []);

  data[0].forEach((element) => {
    if (element.intensity !== "") {
      if (element.intensity >= 1 && element.intensity < 5) {
        intensityMap.get("1to5").push(element);
      } else if (element.intensity >= 5 && element.intensity < 10) {
        intensityMap.get("5to10").push(element);
      } else if (element.intensity >= 10 && element.intensity < 15) {
        intensityMap.get("10to15").push(element);
      } else if (element.intensity >= 15 && element.intensity < 20) {
        intensityMap.get("15to20").push(element);
      } else {
        intensityMap.get("20above").push(element);
      }
    }
  });
  return intensityMap;
}

export function getLikelihood() {
  const likelihoodMap = new Map();

  likelihoodMap.set("1", []);
  likelihoodMap.set("2", []);
  likelihoodMap.set("3", []);
  likelihoodMap.set("4", []);
  likelihoodMap.set("5orAbove", []);

  data[0].forEach((element) => {
    if (element.likelihood !== "") {
      if (element.likelihood === 1) {
        likelihoodMap.get("1").push(element);
      } else if (element.likelihood === 2) {
        likelihoodMap.get("2").push(element);
      } else if (element.likelihood === 3) {
        likelihoodMap.get("3").push(element);
      } else if (element.likelihood === 4) {
        likelihoodMap.get("4").push(element);
      } else {
        likelihoodMap.get("5orAbove").push(element);
      }
    }
  });
  return likelihoodMap;
}

export function getRelevance() {
  const relevanceMap = new Map();

  relevanceMap.set("1", []);
  relevanceMap.set("2", []);
  relevanceMap.set("3", []);
  relevanceMap.set("4", []);
  relevanceMap.set("5", []);
  relevanceMap.set("6orAbove", []);

  data[0].forEach((element) => {
    if (element.relevance !== "") {
      if (element.relevance === 1) {
        relevanceMap.get("1").push(element);
      } else if (element.relevance === 2) {
        relevanceMap.get("2").push(element);
      } else if (element.relevance === 3) {
        relevanceMap.get("3").push(element);
      } else if (element.relevance === 4) {
        relevanceMap.get("4").push(element);
      } else if (element.relevance === 5) {
        relevanceMap.get("5").push(element);
      } else {
        relevanceMap.get("6orAbove").push(element);
      }
    }
  });
  return relevanceMap;
}

export function getCountryWiseDistribution() {
  const countriesMap = getCountriesMap();
  data[0].forEach((element) => {
    if (countriesMap.get(element.country.toLocaleLowerCase())) {
      countriesMap.get(element.country.toLocaleLowerCase()).push(element);
    }
  });
  return countriesMap;
}

export function getTopicWiseDistribution() {
  const topicMap = new Map();
  data[0].forEach((element) => {
    if (!topicMap.has(element.topic.toLocaleLowerCase())) {
      topicMap.set(element.topic.toLocaleLowerCase(), [element]);
    } else {
      topicMap.get(element.topic.toLocaleLowerCase()).push(element);
    }
  });
  return topicMap;
}

export function getRegionWiseDistribution() {
  const regionMap = new Map();
  data[0].forEach((element) => {
    if (!regionMap.has(element.region.toLocaleLowerCase())) {
      regionMap.set(element.region.toLocaleLowerCase(), [element]);
    } else {
      regionMap.get(element.region.toLocaleLowerCase()).push(element);
    }
  });
  return regionMap;
}

export function getSectorWiseDistribution() {
  const sectorMap = new Map();
  data[0].forEach((element) => {
    if (!sectorMap.has(element.sector.toLocaleLowerCase())) {
      sectorMap.set(element.sector.toLocaleLowerCase(), [element]);
    } else {
      sectorMap.get(element.sector.toLocaleLowerCase()).push(element);
    }
  });
  return sectorMap;
}

function getCountriesMap() {
  const countriesMap = new Map();
  countries.forEach((country) => {
    countriesMap.set(country.name.toLocaleLowerCase(), []);
  });
  return countriesMap;
}
