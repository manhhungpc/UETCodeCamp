// nested object
//camelCase

let myIntroduce = {
    firstName: "pham",
    lastName: "hung",
    hobby: ["football", "book"],
    info: {
        fullName: "pham hung",
        school: "UET",
        live: "Hanoi",
        gpa: {
            firstSem: 1,
            secondSem: 2,
            thirdSem: 3,
            fourthSem: 4,
        },
    },
};

// console.log(myIntroduce.info.gpa.secondSem);

//destruct object

const { lastName, info } = myIntroduce;
// console.log(myIntroduce.lastName, lastName);
// console.log(info.school);

const { school } = info;
console.log(school);
