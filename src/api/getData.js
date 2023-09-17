import { data } from "../data/sampleData";

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
