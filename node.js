let _ = require("lodash");

const cha = [
  {
    name: "mobileNum",
    value: "8882716493",
  },
];

const condi = [["name", "==", "mobileNum"]];

const findBy = function (array = [], conditions = [], method = "every") {
  return array.find((item) => {
    return conditions[method](([key, operator, value]) => {
      switch (operator) {
        case "==":
          return item[key] == value;
        case "!=":
          return item[key] != value;
        case "<":
          return item[key] < value;
        case "<=":
          return item[key] <= value;
        case ">":
          return item[key] > value;
        case ">=":
          return item[key] >= value;
        case "includes":
          return this.includes(value, item[key]);
        default:
          throw new Error(`Invalid operator ${operator}`);
      }
    });
  });
};

const filterBy = function (array = [], conditions = [], method = "every") {
  return array.filter((item) => {
    return conditions[method](([key, operator, value]) => {
      switch (operator) {
        case "==":
          return item[key] == value;
        case "!=":
          return item[key] != value;
        case "<":
          return item[key] < value;
        case "<=":
          return item[key] <= value;
        case ">":
          return item[key] > value;
        case ">=":
          return item[key] >= value;
        case "includes":
          return this.includes(value, item[key]);
        case "some":
          return item[key]?.some((subItem) => this.some([subItem], value));
        case "every":
          return item[key]?.every((subItem) => this.every([subItem], value));
        default:
          throw new Error(`Invalid operator ${operator}`);
      }
    });
  });
};

const isEmpty = function (value) {
  return _.isEmpty(value);
};

console.log(findBy(cha, condi, "every"));
console.log(filterBy(cha, condi, "every"));
console.log(isEmpty(findBy(cha, condi, "every")));
