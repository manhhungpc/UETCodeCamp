/*
 * CÁC KIỂU DỮ LIỆU CƠ BẢN
 */
// string, number, boolean
let name = "hung",
    age = 23,
    isUET = true;

// Check type - Check kiểu dữ liệu
console.log(typeof age, typeof isUET);

// Sử dụng template string
const introduce = `My name is ${name}. I'm ${age} years old`;
console.log(introduce);

// object
let info = {
    first_name: "pham",
    last_name: "hung",
    age: 20,
    liveInHanoi: true,
    getFirstName: function () {
        console.log(this.first_name);
    },
    // arrow function
    /**
     * Nên sử dụng arrow function nếu không muốn sử dụng từ khóa `this`
     * Nếu muốn dùng `this`, an toàn hơn là dùng function(){} bình thường
     */
    getFirstNameButError: () => {
        console.log(this.first_name);
    },
    setFirstName: function (newFirstName) {
        this.first_name = newFirstName;
    },
};

// lấy 1 object
console.log("Name of info: ", info.name);
console.log("Age of info: ", info["age"]);

// mutate object - sửa đổi object
info.fullname = info.first_name + " " + info.last_name;
info.getFullname = function () {
    console.log(info.fullname);
};

// thêm 1 trường (field) cho object
info.fullname = info.name + info.name_last;
info.getFullname();

// xóa 1 trường khỏi object
delete info.fullname;

// sửa giá trị
info.name = "hung123";
