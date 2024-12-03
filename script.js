function students(eng, math, phys, bio, chem) {
  const total = eng + math + phys + bio + chem;
  if (total >= 180) {
    console.log(`Favour: ${total}, you have been offered admission.`);
  } else {
    console.log(`chioma: ${total}, sorry, come back next year.`);
  }
}
students(50, 40, 45, 30, 20);
students(30, 30, 40, 35, 10);

// Arrow function
const studentsArrow = (eng, math, phys, bio, chem) => {
  const total = eng + math + phys + bio + chem;
  total >= 180
    ? console.log(`David: ${total}, you have been offered admission.`)
    : console.log(`King: ${total}, sorry, come back next year.`);
};

studentsArrow(60, 40, 30, 35, 20);
studentsArrow(25, 30, 20, 30, 40);

//  the second assignment so far from function
function validatePassword(password) {
  if (password.length < 6) {
    console.log("Password must be at least 6 characters long.");
    return false;
  }
  if (!password.includes("$")) {
    console.log("Password must include a dollar sign ($).");
    return false;
  }

  if (!password.includes("!")) {
    console.log("Password must include an exclamation mark (!).");
    return false;
  }
  console.log("Password is valid.");
  return true;
}

validatePassword("pass$!");
// so if you want to validate a password with the following conditions,  you  can go ahead and do that
// validatePassword("dug")
// validatePassword("do$")
// validatePassword("do!")
