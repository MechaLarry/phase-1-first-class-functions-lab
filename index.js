// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
  };
  
  const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
  };
  
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

  // createFareMultiplier()
  const createFareMultiplier = function (multiplier) {
    return function (fare) {
      return fare * multiplier;
    };
  };

  // fareDoubler()
  const fareDoubler = createFareMultiplier(2);

  // fareTripler()
  const fareTripler = createFareMultiplier(3);

  //selectDifferentDrivers(arrayOfDrivers, function)
  const selectDifferentDrivers = function (drivers, func) {
    return func(drivers);
  };