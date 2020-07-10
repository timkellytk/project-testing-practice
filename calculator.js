const calculator = {
  add: (...args) => {
    return args.reduce((prev, cur) => {
      return prev + cur;
    }, 0);
  },
  subtract: (a, ...args) => {
    const value = a;
    const subtractValue = args.reduce((prev, cur) => {
      return prev + cur;
    }, 0);
    return value - subtractValue;
  },
  divide: (a, b) => {
    return a / b;
  },
  multiply: (a, b) => {
    return a * b;
  },
};

export default calculator;
