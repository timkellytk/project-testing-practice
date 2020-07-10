const arrayAnalysis = (array) => {
  return {
    average: averageArray(array),
    min: minArray(array),
    max: maxArray(array),
    length: array.length,
  };
};

const averageArray = (array) => {
  const sum = array.reduce((prev, cur) => prev + cur, 0);
  const count = array.length;
  return sum / count;
};

const minArray = (array) => {
  return array.reduce((prev, cur) => (cur > prev ? prev : cur));
};

const maxArray = (array) => {
  return array.reduce((prev, cur) => (cur > prev ? cur : prev));
};

export default arrayAnalysis;
