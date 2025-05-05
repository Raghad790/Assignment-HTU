//async function
//promise function
async function fetchDate() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const value = Math.floor(Math.random() * 11);
      if (value > 4) resolve(value);
      else reject(value);
    }, 2000);
  });
}

async function callTheFetchApi() {
  const response = await fetchDate();
  console.log("After Promise");
}

//to run the promise function
// fetchDate().then(
//   (number) => {
//     console.log(value);
//   }
// ).catch((error)=>{})

// };
// console.log("After Promise");
//the function will print (after promise )then the number
