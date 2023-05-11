/*
 * CÁC PHÉP SO SÁNH
 */

// Compare value only - Chỉ so sánh giá trị
let numX = 4;

if (numX > 10) {
    console.log("Bigger");
} else {
    console.log("Smaller");
}

if (numX == 4) console.log("Number 4"); //true
if (numX == "4") console.log("String 4"); //true

// Strict compare - So sánh cả kiểu dữ liệu cả giá trị

//true
if (numX === 4) console.log("Number 4");

//false
if (numX === "4") {
    console.log("String 4");
} else {
    console.log("Not string 4");
}
