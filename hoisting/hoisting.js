x = 5;

console.log(x);

//x khai báo sau nhưng console.log() vẫn đc => Ko nên
var x;

/**
 * Sử dụng let, const để tránh tình trạng này
 * Luôn khai báo sử dụng let, const đặt ở trên đầu
 */

y = "my name is y";

console.log("let y =", y); // lỗi ReferenceError

let y;
const RATE_LIMIT = 10;
