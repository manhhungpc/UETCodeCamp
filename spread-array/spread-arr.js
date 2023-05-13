let arr = [1, 2, 3, 4];

// arr.push(5);

let newArr = [...arr, 111];
// let newArr = arr
// Shallow copy - Copy dia chi
// Deep copy - Copy gia tri
// arr = [...arr, "bot"];
arr = ["top", ...arr];
console.log(arr);
