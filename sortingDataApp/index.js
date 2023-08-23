const exclude = require("./sortingMethods/exclude");
const include = require("./sortingMethods/include");
const sortBy = require("./sortingMethods/sortBy");


function manipulateAndSortData(input) {
  let { data, condition } = JSON.parse(input);

  if (condition.exclude) {
    data = exclude(data, condition.exclude);
  }

  if (condition.include) {
    data = include(data, condition.include);
  }

  if (condition.sortBy) {
    data = sortBy(data, condition.sortBy);
  }

  return JSON.stringify({ result: data });
}

/* --------------------------------- Example -------------------------------- */
const inputData = {
  data: [
    { email: "mike@mail.com", rating: 20, disabled: false, name: "Mike" },
    { email: "greg@mail.com", rating: 14, disabled: false, name: "Greg" },
    { email: "john2@mail.com", rating: 25, disabled: true, name: "John" },
    { email: "jane@mail.com", rating: 18, disabled: false, name: "Jane" }
  ],
  condition: {
    /* -------------------------------------------------------------------------- */
    /*                          All Case that you can use                         */
    /*                                                                            */
    /*                                    VVVV                                    */
    /* -------------------------------------------------------------------------- */


    /* ----------------------- exclude with condition AND ----------------------- */
    exclude: [{ name: "John", email: "john@mail.com" }],
    /* ------------------------ exclude with condition OR ----------------------- */
    exclude: [{ name: "John" }, { email: "john2@mail.com" }],
    /* ----------------------- include with condition AND ----------------------- */
    include: [{ rating: 20, disabled: false }],
    /* ------------------------ include with condition OR ----------------------- */
    include: [{ rating: 20 }, { disabled: true }],
    sortBy: ["rating"],
  }
};

const input = `{"data": [{"user": "mike@mail.com", "rating": 20, "disabled": false},
{"user": "greg@mail.com", "rating": 14, "disabled": false},
{"user": "john@mail.com", "rating": 25, "disabled": true}],
"condition": {"exclude": [{"disabled": true}], "sortBy": ["rating"]}}`;

const sortedResult = manipulateAndSortData(input);
console.log(sortedResult);

