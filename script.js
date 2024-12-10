// function students(eng, math, phys, bio, chem) {
//   const total = eng + math + phys + bio + chem;
//   if (total >= 180) {
//     console.log(`Favour: ${total}, you have been offered admission.`);
//   } else {
//     console.log(`chioma: ${total}, sorry, come back next year.`);
//   }
// }
// students(50, 40, 45, 30, 20);
// students(30, 30, 40, 35, 10);

// // Arrow function
// const studentsArrow = (eng, math, phys, bio, chem) => {
//   const total = eng + math + phys + bio + chem;
//   total >= 180
//     ? console.log(`David: ${total}, you have been offered admission.`)
//     : console.log(`King: ${total}, sorry, come back next year.`);
// };

// studentsArrow(60, 40, 30, 35, 20);
// studentsArrow(25, 30, 20, 30, 40);

// //  the second assignment so far from function
// function validatePassword(password) {
//   if (password.length < 6) {
//     console.log("Password must be at least 6 characters long.");
//     return false;
//   }
//   if (!password.includes("$")) {
//     console.log("Password must include a dollar sign ($).");
//     return false;
//   }

//   if (!password.includes("!")) {
//     console.log("Password must include an exclamation mark (!).");
//     return false;
//   }
//   console.log("Password is valid.");
//   return true;
// }

// validatePassword("pass$!");
// // so if you want to validate a password with the following conditions,  you  can go ahead and do that
// // validatePassword("dug")
// // validatePassword("do$")
// // validatePassword("do!
// // ")


// // function return
// const yy = ()=>{
    
// }


// // assignment for this array and function also 
// const names = ["a", "b", "c", "d"];
// const numbers = [100, 102, 103, 104];
// function addTen() {
//   for (let i = 0; i < numbers.length; i++) {
//     console.log((numbers[i] + 10))
//   }
  
// }
// addTen()
// let newScore = []
// function addTen() {
//   for (let i = 0; i < numbers.length; i++) {
//     newScore.push(numbers[i] + 10)
//     }
//     return newScore;
    
// }
// addTen()

// // 
// function addValues (){
//   for (let a = 0; names < names.length; a++) {
//     if (names [a] == "a"){
//       newScore.push(numbers[0] + 10)
      
//     }else if(names[a] == "b"){
//       newScore.push(numbers[1] + 15)
//     }else if(names[a] == "c"){
//       newScore.push(numbers[2] + 20)
    
//   }else if(names(a) == "d"){
//     newScore.push(numbers[3] + 25)
//   }
// }
// console.log(newScore)
// }
// addValues()



// higher array method
const data = [
  { name: "John",
     Score: 25,
     gender:"male",
     course:["eng", "math", "science"],
     location:"port Harcourt",
     address:{
      city: "PH",
      country:"Nigeria"
     }

   },
   {
    name: "Fred",
     Score: 50,
     gender:"male",
     course:["eng", "bio", "Chem"],
     location:"Delta",
     address:{
      city: "Delta",
      country:"Nigeria"
     }
   },
   {
    name: "David",
     Score: 60,
     gender:"Male",
     course:["Geo", "lab", "bioTech"],
     location:"lagos",
     address:{
      city: "lagos",
      country:"Nigeria"
     }
   },
]
// data.forEach((each, i)=>{
//   console.log(`Name: ${each.name}, Got: ${each.Score}`)

// })

// // maping
// const result = data.map((each, i) => {
//   return `Name: ${each.name}, Got: ${each.Score}`

// })
// console.log(result);

// filter
// const response = data.filter((each, idx)=>{
//   return each.Score > 50
// })
// console.log(response);
// Function to fetch data from the API
// const getDataFromDb = () => {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json()) // Parse JSON from the response
//     .then((result) => {
//       // Map over the result to extract names
//       const names = result.map((each) => each.name);
//       console.log("Names:", names);
//     })
//     .catch((error) => {
//       console.error("Error fetching data:", error);
//     });
// };

// // Call the function to fetch and process data
// getDataFromDb();







// my assignment on fetching of APIS 

const getMyApi = () => {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => response.json())
    .then((result) => {
      const MyComData = result.map((each) => ({
        id: each.id,
        name: each.name,
        body: each.body,
      }));

      console.log("Comments Data:", MyComData);
      const getOnly = result.filter((each, idx)=>{
        return each.id ===  "Nicklaus@talon.io";
  
      })
  console.log(getOnly);
    })
 

};
getMyApi();

