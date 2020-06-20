// ***************************************************************************************
// ///////////////////////////////////////////////////////////////////////////////////////
//                                      CHAPTER 21-25
// ///////////////////////////////////////////////////////////////////////////////////////
// ***************************************************************************************

// TASK 1
// var firstName = prompt("Enter Your First Name")
// var lastName = prompt("Enter Your Last Name");
// var fullName = firstName + " " + lastName;

// document.write("Welcome " + fullName);


// TASK 2
// var mob = prompt("Enter Your Favourite Mobile");
// var mob1 = mob.length;

// document.write("My favorite phone is: " +  mob + "<br>")
// document.write("Length Of String: " + mob1)


// TASK 3
// var name = "Pakistani";
// var name1 = name.indexOf("n");

// document.write("String: " +  name + "<br>")
// document.write("Index Of n: " + name1)


// TASK 4
// var name = "Hello World";
// var name1 = name.lastIndexOf("l");

// document.write("String: " +  name + "<br>")
// document.write("Index Of l: " + name1)


// TASK 5
// var name = "Pakistani";
// var name1 = name.charAt(5);

// document.write("String: " +  name + "<br>")
// document.write("Character at index 5: " + name1)


// TASK 6
// var firstName = prompt("Enter Your First Name")
// var lastName = prompt("Enter Your Last Name");
// var fullName = firstName.concat(" " , lastName);

// document.write(" Welcome " + fullName);


// TASK 7 
// var name = "HYDERABAD";
// document.write("City: " + name + "<br>");
// var firstLetter = name.replace("HYDER" ,"ISLAM");

// document.write("After Replacement: " + firstLetter  );


// TASK 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var message1 = message.replace(/and/g , "&");

// document.write(message1);


// TASK 9
// STRING
// const name = "472";
// document.write("Value: "+ name + "<br>");
// document.write("Type: "+ typeof name  + "<br>");
// NUMBER
// const age1 = 56;
// document.write("Value: "+ age1  + "<br>");
// document.write("Type: "+ typeof age1  + "<br>");


// TASK 10
// var program = prompt("Enter any word");
// document.write("User Input: " + program + "<br>");

// var program1 = program.toLocaleUpperCase();
// document.write("Upper Case: " + program1 + "<br>");


// TASK 11
// var str = prompt("Enter any word");
// document.write("User Input: " + str + "<br>");

// var firstLetter = str.slice(0,1).toUpperCase();
// var otherLetters = str.slice(1);
// document.write("Upper Case: " + firstLetter + otherLetters);


// TASK 12
// var num = 35.36;
// var num1 = num.toString();
// var num2 = num1.replace("." , "")

// document.write( "Number: " +  num1 + "<br>")
// document.write("Result: " + num2 + "<br>")


// TASK 13
// var name = prompt("Enter Name");

// for (var i = 0; i < name.length ; i++){
//     if(name[i] === "!" || name[i] === "@" || name[i] === "." || name[i] === "," || name[i] === "$"){
//         document.write("Error Found")
//     }
//      else(
//         document.write("No Error Found")
//     )
//     break;
// }


// TASK 14 
// var A = ["cake","apple pie","cookie","chips","patties"];
// var search=prompt("Welcome to ABC Bakery.What do you want to order Sir/Ma'm");

// var index = A.indexOf(search);
// if (index > -1) {
//     document.write(search+" is available at index "+(index+1)+" of our bakery");
//     check=true;
// }
// else {
//     document.write("We are sorry "+search  +" is not available in our bakery");
// }


// TASK 15 
// var password = prompt("Enter Your Password");
// var alphabets = "abcdefghijklmnopqrstuvwxyz"; 
// var numbers = '0123456789';
// if (password.length >= 6 && (alphabets !== numbers || alphabets === numbers)){
//     alert("This is correct Password")
// }else{
//     alert("Password can not begin with a number  \n Please enter a Valid Password")
// }


// TASK 16
// var university = "University of Karachi"
// for(i = 0; i < university.length; i++){
//     document.write(university[i] + "<br>")
// }


// TASK 17
// var name = prompt("Enter Any Name");
// var lastIndex = name.length - 1;
// var lastLetter = name.charAt(lastIndex);
// console.log(lastLetter)


// TASK 18
// var str = "the quick brown fox jumps over the lazy dog";
// var count = (str.match(/the/g) || []).length;
// document.write("Text: " + str + "<br>");
// document.write("There are " + count + " occurrences of word the ");






// ***************************************************************************************
// ///////////////////////////////////////////////////////////////////////////////////////
//                                      CHAPTER 26-30
// ///////////////////////////////////////////////////////////////////////////////////////
// ***************************************************************************************

// TASK 1 
// var num = +prompt("Enter a positive number");
// var round = Math.round(num);
// var ceil = Math.ceil(num);
// var floor = Math.floor(num)

// document.write("Number: " + num + "<br>");
// document.write("Round of value: " + round + "<br>");
// document.write("Ceil Value: " + ceil + "<br>");
// document.write("Floor Value: " + floor + "<br>");


// TASK 2 
// var num = +prompt("Enter a negative number");
// var round = Math.round(num);
// var ceil = Math.ceil(num);
// var floor = Math.floor(num)

// document.write("Number: " + num + "<br>");
// document.write("Round of value: " + round + "<br>");
// document.write("Ceil Value: " + ceil + "<br>");
// document.write("Floor Value: " + floor + "<br>");


// TASK 3 
// var num = +prompt("Enter a value");
// var num1 = Math.abs(num);

// document.write("The Absolute value of " + num + " is " + num1)


// TASK 4 
// var num = Math.floor( Math.random() * 6 ) +1;
// document.write('Random Dice value: ' + num);


// TASK 5
// var toss = Math.random() * 2;

// var toss = Math.floor(Math.random() * 2) + 1
// if( toss === 1){
//     document.write(toss + "<br>" + "Random Coin Value: Heads")
// }else{
//     document.write(toss + "<br>" +"Random Coin Value: Tails")
// }


// TASK 6
// var num = Math.floor(Math.random() * 100) + 1;
// document.write("Random Number Between 1 and 100: " + num)


// TASK 7 
// var weight = +prompt("Enter Your Weight");
// var round = Math.round(weight);
// var ceil = Math.ceil(weight);
// var floor = Math.floor(weight)

// document.write("Number: " + weight +  "Kgs <br>");
// document.write("Weight In Round: " + round + "Kgs <br>");
// document.write("Weight In Ceil: " + ceil + "Kgs <br>");
// document.write("Weight In Floor: " + floor + "Kgs <br>");


// TASK 8 
// var num = Math.floor(Math.random() * 10 ) +1;
// var num1 = +prompt("Enter Your Number");
// if (num === num1){
//     alert("Congratulation You Guess a Right Number")
// }else{
//     alert("Sorry...! Try Again!")
// }





// ***************************************************************************************
// ///////////////////////////////////////////////////////////////////////////////////////
//                                      CHAPTER 31-34
// ///////////////////////////////////////////////////////////////////////////////////////
// ***************************************************************************************

// TASK 1 
// var date = new Date();
// document.write(date)


// TASK 2 
// var month = ["January","February","March","April","May","June","July","August","September","October","November","December"]
// var date = new Date();
// var currMonth = month[date.getMonth()];

// alert("Current Month: " + currMonth)


// TASK 3
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var date = new Date();
// var currDay = dayNames[date.getDay()];

// alert("Today is " + currDay)


// TASK 4
// var dayNames = ["Sunday", "Monday", "Tueday", "Wedneday", "Thursday", "Friday", "Saturday"];
// var date = new Date();
// var currDay = dayNames[date.getDay()];
// if(currDay === 0 || currDay === 6){
//     document.write("it's FunDay")
// }else{
//     document.write("It is Working Day")
// }


// TASK 5 
// var date = new Date();
// if (date <= 15){
//     document.write("First fifteen days of the month ")
// } else{
//     document.write("Last days of the month")
// }


// TASK 6 
// var date = new Date();
// document.write("Current Date: " + date + "<br>")

// var year = date.getTime();
// document.write("Elapesd milliseconds since January 1, 1970: " + year + "<br>")

// var mint = year/(1000*60)
// document.write("Elapesd minutes since January 1, 1970: " + mint + "<br>")


// TASK 7
// var date = new Date();
// var hour = date.getTime();

// if(hour < 12){
//     document.write("It's AM")
// }else{
//     document.write("It's PM")
// }


// TASK 8 
// var laterDate = new Date("December 31, 2020");
// document.write("Later Date Of Year: " + laterDate)


// TASK 9 
// var date = new Date().getTime()
// var rdate = new Date("June 18, 2015").getTime();
// var diff = (date - rdate );
// var rdiff = Math.floor(diff / (1000*60*60*24))
// document.write(rdiff + " days have passed since 1st Ramzan 2015." )


// TASK 10 
// var date = new Date("January 1,2015").getTime()
// var date1 = new Date("December 5, 2015").getTime();
// var diff = (date1 - date );
// var diff1 = Math.floor(diff / (1000*60))
// document.write(diff1 + " days have passed since 1st Ramzan 2015." )

// TASK 11 
// var date = new Date();
// document.write("Curent Date: " + date + "<br>")

// var hour = new Date();
// var hour1 = hour.getHours() - 1
// hour.setHours(hour1)
// document.write( "1 hour ago, it was " + hour)


// TASK 12
// var date = new Date();
// document.write("Curent Date: " + date + "<br>")

// var backYear = new Date();
// backYear.setFullYear(1920)
// document.write( "100 Years Back, it was " + backYear)


// TASK 13 
// var dob = new Date(prompt("Enter Your Birth Year"));
// var dob1 = dob.getTime();
// var today = new Date();
// var today1 = today.getTime();
// var diff = today1 - dob1
// var age = Math.floor(diff/(1000*60*60*30*12*24));
// var birthYear = new Date().getFullYear() - age 
// document.write("Your age is " + age + "<br>");
// document.write("Yor Birth Year is " + birthYear)



// TASK 14 
// var name = prompt("Enter Customer Name");
// var month = prompt("Enter Month Name");
// var unit = +prompt("Enter Used Units");
// var unitPrice = +prompt("Enter Price of units ");
// var charge = 200;

// var billPay = unit*unitPrice;
// var billAfterDate = billPay + charge;

// document.write("<h1>" + "K-Electric Bill " + "</h1>" + "<br>"  );
// document.write("Customer Name: " + name +  "<br>");
// document.write("Current Month: " +  month +  "<br>");
// document.write("Number of units: " +  + unit +  "<br>");
// document.write("Charges per unit: " +  + unitPrice  + "<br>" + "<br>");
// document.write("Net Amount Payable (within Due Date): " + billPay.toFixed(2) + "</h1>" + "<br>");
// document.write("Late Payment Surcharge: " +  charge.toFixed(2) + "<br>");
// document.write("Gross Amount Payable (after Due Date):" + billAfterDate.toFixed(2)  + "<br>");






// ***************************************************************************************
// ///////////////////////////////////////////////////////////////////////////////////////
//                                      CHAPTER 35-38
// ///////////////////////////////////////////////////////////////////////////////////////
// ***************************************************************************************




// TASK 1 is pending




// TASK 2 is pending




// TASK 3 is pending




// TASK 4 is pending




// TASK 5 is pending




// TASK 6 is pending




// TASK 7 is pending




// TASK 8 is pending




// TASK 9 is pending




// TASK 10 is pending




// TASK 11 is pending




// TASK 12 is pending




// TASK 13 is pending




// TASK 14 is pending

