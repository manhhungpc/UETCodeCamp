/*
 * MẢNG
 */

let arr = [1, "str2", {}, true];

console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log("index " + i + ": ", arr[i]);
}

// lặp giá trị
for (let value of arr) {
    console.log("value: ", value);
}

// lặp chỉ số (index)
for (let i in arr) {
    console.log("index: ", i);
}

let len = arr.length - 1;
while (len >= 0) {
    let log = "index " + len + ": " + arr[len];
    let templateString = `index ${len}: ${arr[len]}`;
    console.log(templateString);
    len--;
}
