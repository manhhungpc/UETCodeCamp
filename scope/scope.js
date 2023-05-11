let enable = true;

if (enable) {
    var x = 2;
}

/**
 * NGUY HIÊM!
 * x có thể được sử dụng ở ngoài block if, có thể vô tình bên ngoài các bạn cũng có biến x
 * ==> Gây lỗi
 */
console.log("var x =", x); // 2

/**
 * Sử dụng let, const để tránh tình trạng này
 */

if (enable) {
    let y = 2;
}

console.log("let y =", y); // lỗi not defined
