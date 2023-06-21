/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let altitude = 0;
  let altitudeList = [0];

  for (let i = 0; i < gain.length; i += 1) {
    altitude += gain[i];
    altitudeList.push(altitude);
  }

  return Math.max(...altitudeList);
};
