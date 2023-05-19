// function myDisplayer(some) {
//     console.log(some);
// }

// function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2;
//     myCallback(sum);
// }

// myCalculator(5, 5, myDisplayer);
// console.log("second");

// console.log("Hello 1")
// console.log("Hello 2")

// callback hell
setTimeout(() => {
    console.log("Hello 1");
    setTimeout(() => {
        console.log("Hello 2");
        setTimeout(() => {
            console.log("Hello 3");
            setTimeout(() => {
                console.log("Hello 4");
            }, 3000);
        }, 3000);
    }, 3000);
}, 3000);

// Hàm sử dụng callback
// console.log("Hello 3")
// const arr = ["apple", "orange", "cherry"]
// let fruit = ""

// arr.forEach((fruit)=>{
//     console.log("fruits: ", fruit)
// })

// console.log(fruit)
