//Promises
//How to make my function =>Promise
function fetchData_1() {
  //return constructor function =>PROMISE =>Promise has a callback function takes 2values(resolve,reject) both of 2 values are void functions
  //resolve=>success(response)
  //reject=>failure(response)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //1=>pendding promise

      const value = Math.floor(Math.random() * 11);
      //2=>fulfilled promise

      resolve(value);
    }, 2000);
  });
}
fetchData_1().then((value) => {
  console.log(value);
});

console.log("After Promise");
//async function=>{print "after promise" then the value of the random number}

 async function fetchData_2() {
 
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //1=>pendding promise

      const value = Math.floor(Math.random() * 11);
      //2=>fulfilled promise

     if(value>4) resolve(value);
     else reject(value);
    }, 2000);
  });
}
//number ==value in rhe resolve function
fetchData_2().then((number) => {
  console.log(number);
},(error)=>{
  console.log(error);
});
//then take 2callback function :1>onfullfilled 2>onrejected
console.log("After Promise");



//The seconed method to deal with error:chain method=>catch
function fetchData_3() {
 
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //1=>pendding promise

      const value = Math.floor(Math.random() * 11);
      //2=>fulfilled promise

     if(value>4) resolve(value);
     else reject(value);
    }, 2000);
  });
}
//number ==value in rhe resolve function
fetchData_2().then((number) => {
  console.log(number);
}).catch((error)=>{});

//async -await
async  function callTheFetchApi() {
  //async function
  const response = await fetchData_2();

}
callTheFetchApi();
console.log("After async");