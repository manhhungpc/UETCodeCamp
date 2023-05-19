let mySecondPromise = new Promise((myResolve, myReject) => {
    // "Producing Code" (May take some time)
    // select ... in database
    let data = { age: 20 };
    const err = "got error";
    const setErr = false;

    if (!setErr) {
        myResolve(data); // when successful
    } else {
        myReject(err); // when error
    }
});

// chaining
// myPromise
//     .then((user) => {
//         console.log(`User id: ${user.userId}`);
//     })
//     .catch((err) => {
//         console.log(`Error: ${err}`);
//     })
//     .finally(() => {
//         console.log("Do it!");
//     });

let myPromise = new Promise((myResolve, myReject) => {
    // select ...
    let data = { userId: "123" };
    const err = { err: "Not found!", statusCode: 404 };
    const setErr = true;

    //try setTimeout
    setTimeout(() => {
        // const newUser = "hung";
        if (!setErr) {
            myResolve(data); // when successful
        } else {
            myReject(err); // when error
        }
    }, 2000);

    // console.log(newUser); // lỗi
});

async function getUserData() {
    try {
        const response = await myPromise;
        return response;
    } catch (err) {
        return err;
    }
}

async function printUser() {
    const response = await getUserData();
    console.log(response);
}

// high-level function
printUser();

// Tạo Promise() trong đó setTimeout() 2s và trả về 1 data = {first_name: "", last_name: ""}
// Sử dụng async await để lấy kết quả từ promise trên
