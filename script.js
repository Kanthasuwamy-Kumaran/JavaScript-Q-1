// // / Condition///////


// 1 /////
let age = 20;    //prompt("Enter your age:")
if (age >= 18) {
    document.getElementById("ConditionsQ1").innerHTML="You can drive."
} else {
  let yearsLeft = 18 - age;
  document.getElementById("ConditionsQ1").innerHTML=`You should improve ${yearsLeft} years  to drive.`
}
// Other step



// 2
let yourAge = 30;  //prompt("Enter your age:");
let myAge = 20;  // You can replace this with my actual age
if (yourAge > myAge) {
  let ageDifference = yourAge - myAge;
  document.getElementById("ConditionsQ2").innerHTML=`You are ${ageDifference} years older than me.`
} else if (yourAge < myAge) {
  let ageDifference = myAge - yourAge;
  document.getElementById("ConditionsQ2").innerHTML=`I am ${ageDifference} years older than you.`
} else {
    document.getElementById("ConditionsQ2").innerHTML="We are the same age!"
}


// 3
let a = 4;
let b = 3;
if (a > b) {
    document.getElementById("ConditionsQ3").innerHTML=`${a} is greater than ${b}`
} else {
    document.getElementById("ConditionsQ3").innerHTML=`${a} is less than ${b}`
  }
  // We used concat $ = + symbols this same useage



// 4
let score = 45; //prompt("Enter your score:")
if (score >= 80 && score <= 100) {
    document.getElementById("ConditionsQ4").innerHTML="Grade: A"
} else if (score >= 70 && score < 80) {
    document.getElementById("ConditionsQ4").innerHTML="Grade: B"
} else if (score >= 60 && score < 70) {
    document.getElementById("ConditionsQ4").innerHTML="Grade: C"
} else if (score >= 50 && score < 60) {
    document.getElementById("ConditionsQ4").innerHTML="Grade: D"
} else if (score >= 0 && score < 50) {
    document.getElementById("ConditionsQ4").innerHTML="Grade: F"
} else {
    document.getElementById("ConditionsQ4").innerHTML="Invalid score. Please enter a score between 0 and 100."
}



// 5
let month = uki; //prompt("Enter the current month:")
if (month === "September" || month === "October" || month === "November") {
    document.getElementById("ConditionsQ5").innerHTML="The season is Autumn."

} else if (month === "December" || month === "January" || month === "February") {
    document.getElementById("ConditionsQ5").innerHTML="The season is Winter."

} else if (month === "March" || month === "April" || month === "May") {
    document.getElementById("ConditionsQ5").innerHTML="The season is Spring."

} else if (month === "June" || month === "July" || month === "August") {
    document.getElementById("ConditionsQ5").innerHTML="The season is Summer."

} else {
    document.getElementById("ConditionsQ5").innerHTML="Invalid input. Please enter a valid month."
}


// //Switch 


//Function
// 1 Declare a function fullName and it will print out your full name.
function fullName(){
    document.getElementById("FunctionQ1").innerHTML="justin bieber"
}
fullName()



// 2 Declare a function fullName, and now it takes firstName and lastName as parameters and returns your full name.
function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
  }
  let myFullName = fullName("Zayn", "Malik");
  document.getElementById("FunctionQ2").innerHTML=myFullName;


// //   3 Declare a function addNumbers, and it takes two parameters and it returns the sum.
// function addNumbers(num1, num2) {
//     return num1 + num2;
//   }
//   let result = addNumbers(8, 9);
//   console.log(result);
// //   4 An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
// function areaOfRectangle(length,width){
//     return length*width;
// }
// let rectangleArea = areaOfRectangle(7,8);
// console.log(rectangleArea);
// // 5 A perimeter of a rectangle is calculated as follows: perimeter = 2x(length + width). Write a function which calculates perimeterOfRectangle.
// function perimeterOfRectangle(length, width) {
//     return 2 * (length + width);
//   }
//   const rectanglePerimeter = perimeterOfRectangle(5, 6);
//   console.log(rectanglePerimeter);
// //  6 A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
// function volumeOfRect(length, width, height) {
//     return length * width * height;
//   }
//   const prismVolume = volumeOfRect(6, 7, 5);
//   console.log(prismVolume);
// //   7 Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
// function areaOfCircle(radius) {
//     let pi = Math.PI;
//     return pi * radius * radius;
//   }
//   let circleArea = areaOfCircle(7);
//   console.log(circleArea);
//   //   8 Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
//   function circumOfCircle(radius) {
//     const pi = Math.PI;
//     return 2 * pi * radius;
//   }
//   const circleCircumference = circumOfCircle(6);
//   console.log(circleCircumference);
// // 9 The temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which converts oC to oF convertCelsiusToFahrenheit.
// function convertCelsiusToFahrenheit(celsius) {
//     var fahrenheit = (celsius * 9/5) + 32;
//     return fahrenheit;
// }
// var temperatureInCelsius = 27;
// var temperatureInFahrenheit = convertCelsiusToFahrenheit(temperatureInCelsius);
// console.log("Temperature in Fahrenheit: " + temperatureInFahrenheit);
// // 10 Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older. Check if a person is underweight, normal, overweight or obese based the information given below.
// /*The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more*/
// function calculateBMI(weightKg, heightM) {
//     return weightKg / (heightM * heightM);
//     if (bmi < 18.5) {
//         return "Underweight";
//     } else if (bmi >= 18.5 && bmi <= 24.9) {
//         return "Normal weight";
//     } else if (bmi >= 25 && bmi <= 29.9) {
//         return "Overweight";
//     } else {
//         return "Obese";
//     }
// }
// console.log(calculateBMI(60,182));


// // document.getElementById("first").innerHTML=checkGrade(prompt('Enter your marks'));

// //Map
//Square the value of every element in the array. Assume that you will only get numbers in the input array.
let aquareValue = [1,2,3,4,5]
let newAquare = aquareValue.map(x => x*x)
document.getElementById("MapQ1").innerHTML = newAquare

//If the given input is an array of numbers, return the sum of all the positive ones. If the array is empty or there aren't any positive numbers, return 0.





