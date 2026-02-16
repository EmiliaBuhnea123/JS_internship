//1
// Create a function called downloadFile that:
// - takes a fileName
// - takes a callback
// - logs "Downloading <fileName>..."
// - after 1 second, calls the callback and logs "Download finished"
function downloadFile(fileName, callback) {
  console.log(`Downloading ${fileName}`);
  setTimeout(function() {
    console.log("Download finished");
    callback();
  }, 1000)
}

downloadFile("report.pdf", () => {
  console.log("Callback executed");
});

//2
// Create a function checkServerStatus() that returns a Promise
// After 1 second:
// resolve with "Server is running"
// OR reject with "Server is down" (choose one)
// Consume the promise using .then() and .catch()
function checkServerStatus() {
  return new Promise((reject) => {
    setTimeout(() => {
        reject("Server is down")
    }, 1000)
  });
}

checkServerStatus()
  .then(result => console.log(result))
  .catch(error => console.log(error));

//3
// Rewrite the task #2 using async / await instead of .then().
async function checkStatus() {
    const result = await checkServerStatus();
    console.log(result);
}

checkStatus();

//4
// Chain the promises so the final output is:
// Emilia is an Admin
function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Emilia");
    }, 1000);
  });
}

function getUserRole(user) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${user} is an Admin`);
    }, 1000);
  });
}

getUser().then(result => {return getUserRole(result)})
         .then(result => console.log(result));

async function makeSentence () {         
const name = await getUser();
const result = await getUserRole(name);
console.log(result);
}

makeSentence();

//5
// Rewrite the code using:
// - Promises
// - async / await
// setTimeout(() => {
//   console.log("Step 1");

//   setTimeout(() => {
//     console.log("Step 2");

//     setTimeout(() => {
//       console.log("Step 3");
//     }, 1000);
//   }, 1000);
// }, 1000);
function step_1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Step 1")
        }, 1000)
    })
}

function step_2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Step 2")
        }, 1000)
    })
}

function step_3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Step 3")
        }, 1000)
    })
}

step_1().then(result => {console.log(result); return step_2()})
        .then(result => {console.log(result); return step_3()})
        .then(result => {console.log(result)})


async function displaySteps() {
    const displayStep_1 = await step_1();
    console.log(displayStep_1);

    const displayStep_2 = await step_2();
    console.log(displayStep_2);

    const displayStep_3 = await step_3();
    console.log(displayStep_3);
}

displaySteps();