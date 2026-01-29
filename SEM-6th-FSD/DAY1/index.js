const myPromise = new Promise((resolve, reject) => {
    let marks = 78;
    if (marks >= 33) {
        resolve("You passed!");
    } else {
        reject("You failed!");
    }
})
myPromise.then((msg) => console.log(msg)).catch((error) => console.log("some error occurred",error));
