const visibleQuestion = 1;

//1 (binary search)
// const arr = [1,2,3,4,5,6,7,...,600000000000000];

//2
const findIndexesByObject = (array, number) => {
  let objectStructure = {};
  array.forEach((item, index) => {
    objectStructure[item] = index;
  if (objectStructure[number - item]) {
    console.log(objectStructure[item], objectStructure[number - item])
  }
  });
};

findIndexesByObject([2, 3, 7, 12, 1], 15); //=> 1,3

//