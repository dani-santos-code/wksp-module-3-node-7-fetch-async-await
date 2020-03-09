// Exercise 2
// ----------

//2. Add a promise called `addPromise` that adds 3 numbers,
//one after another and then resolves to the sum of a number
//and the doubles of 3 other numbers(10, 20, 30).As you can see,
// it is quite the hellish situation._
//it is also a convoluted and totally fabricated situation..._

//1. Write a function called `doublesLater` that returns a
//new Promise that doubles a num after 2 seconds.
const doublesLater = num => {
  return new Promise((resolve, reject) => {
    if (typeof num === "number") {
      setTimeout(() => {
        resolve(num * 2);
      }, 2000);
    } else {
      reject("Please, enter a number");
    }
  });
};

const callDoubles = async num => {
  try {
    const doubles = await doublesLater(num);
    return doubles;
  } catch (e) {
    console.log(e);
  }
};

const addPromise = async numsArray => {
  let finalArray = [];
  for (let num of numsArray) {
    const double = await callDoubles(num);
    finalArray.push(double);
  }
  console.log(finalArray);
};

addPromise([10, 20, 30]);
addPromise([5, 7, 11]);
