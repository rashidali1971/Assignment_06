 // ################################################
 // ######## Assignment 06 (Chapter 21-25) #########
 // ################################################
//  // Q1.
//  var first_name 
//  var last_name
//  var full_name
 
//  first_name = prompt("Please enter your first name");
//  last_name = prompt("Please enter your last name");
//  full_name = first_name +" "+last_name;
//  alert("Your full name is "+full_name);
 

// // Q2.
// var phone_model 
// var length_phone
// var fupholl_name
 
// phone_model = prompt("Please enter your favorite mobile phone model");
// length_phone = phone_model.length;
// document.write("My favorite phone is : "+phone_model+"<br>");
// document.write("Length of string : "+length_phone);


// Q3.
// var string = "Pakistani";
// var index_num = string.indexOf('n');
// document.write("String : "+string+"<br>");
// document.write("Index of 'n' : "+index_num);

// Q4.
// var string = "Hello World";
// var index_num = string.lastIndexOf('l');
// document.write("String : "+string+"<br>");
// document.write("Last index of 'l' : "+index_num);

//Q5.
// var string = "Pakistani";
// var index_num = string.charAt(3);
// document.write("String : "+string+"<br>");
// document.write("Character at index 3 : "+ index_num);

// Q6.
//  var first_name 
//  var last_name
//  var full_name
 
//  first_name = prompt("Please enter your first name");
//  last_name = prompt("Please enter your last name");
//  full_name = first_name.concat(last_name);
//  alert("Your full name is "+full_name);

// Q7.
// var city_name = "Hyderabad";
// var replace_name = city_name.replace("Hyder","Islam");
// document.write("City : "+city_name+"<br>");
// document.write("After replacement : "+replace_name);

// Q8.
// var message = "Ali and Sami are best friends. They play cricket and football together."; 
// var replace_message = message.replace(/and/g,"&");
// document.write("Befor replacement message :"+message+"<br>");
// document.write("Afer replacement message :"+replace_message);

// Q9.
// var string = 472 
// var num  = parseInt(string);

// document.write("Value :"+string+"<br>");
// document.write("Type : String"+"<br>");
// document.write("Value :"+num+"<br>");
// document.write("Type : Number");

// Q10.
// var user_input;
// var upper_user_input;
 
// user_input = prompt("Please enter in small letters");

// upper_user_input = user_input.toUpperCase();
// document.write("User input :"+user_input+"<br>");
// document.write("Upper Case :"+upper_user_input);

// Q11.
// var num = user_input;
// var title_user_input;
 
// user_input = prompt("Please enter in small letters");

// title_user_input = user_input.charAt(0).toUpperCase()+user_input.substr(1).toLowerCase();
// document.write("User input :"+user_input+"<br>");
// document.write("Title Case :"+title_user_input);


// Q12.
// var num = 35.36; 
// var string = num.toString();

// result = string.slice(0,2)+string.slice(3);
// document.write("Number :"+num+"<br>");
// document.write("Result :"+result);


// Q13.
// var user_name; 
// user_name = prompt("Enter user name");

// for (var i = 0; i < user_name.length; i++) {
//     // document.write(user_name.charCodeAt(i) +"<br>")};
//     if (user_name.charCodeAt(i) == "33" || user_name.charCodeAt(i) == "44"||  
//         user_name.charCodeAt(i) == "46" || user_name.charCodeAt(i) == "64")
//     {document.write("Invalid password");
//      break;}
//     else{
//         document.write("Valid password");
//         break; 
//     }
// }

// Q14.
// var A = ["cake","Apple pie","cookie","chips","patties"];
// var item;
// var bakery = prompt("Welcome to ABC Bakery, What do you want to order Sir/Mam");

// for(var i=0; i<=A.length; i++){
//     item = A[i].toUpperCase().indexOf(bakery.toUpperCase());
//     if(item >= 0){
//         document.write(bakery +" is available at index "+ i );
//         break;}
// }
//     if(item < 0){
//     document.write("We are sorry. "+bakery +" is not available in our bakery");
//     }
// Q15.
// var lowerCaseLetters = /[a-z]/g;
// var upperCaseLetters = /[A-Z]/g;
// var numbers = /[0-9]/g;
// var pw = prompt("Enter Password");

// if (pw.length < 5) {
//     document.write("The password length must be  at least 6 characters long");}
// else if (pw.charCodeAt(0) < 48 || pw.charCodeAt(0) > 57)
//  {document.write("Password must be start with alphabets");}
 
//  for(var i=0; i<=pw.length; i++){
//    if (pw.charCodeAt(i) >= 48 || pw.charCodeAt(i) <= 57||
//     pw.charCodeAt(i) >= 65 || pw.charCodeAt(i) <= 90||
//     pw.charCodeAt(i) >= 97 || pw.charCodeAt(i) <= 122){}
//     else
//      {document.write("Invalid Password")}
// }
// // Q16.
// var university = "University of Karachi"; 
// var arr = university.split(''); 

// for(var i=0; i<=arr.length-1; i++){
// document.write(arr[i] +"<br>"); 
// }

// Q17.
// var user_input= prompt("User input"); 
// var input_length = user_input.length-1;
// var last_ch = user_input.charAt(input_length);
// document.write("Last character of input:"+last_ch); 

// Q18.
// var text = "The quick brown fox jumps over the lazy dog";
// var arr = text.split(' '); 
// var word = "the";
// var count = 0;

// for(var i=0; i<=arr.length-1; i++){
//     if(arr[i].toUpperCase() == word.toUpperCase()){
//         count = ++count;
//     }  
// }
// document.write("There are "+count+" occurraence(s) of the word 'the'"); 


// ################################################
// ######## Assignment 06 (Chapter 26-30) #########
// ################################################
// Q 1.
/*
 var num = prompt("Enter any positive decimal number");
 var round = Math.round(num);
 var floor = Math.floor(num);
 var ceil = Math.ceil(num);
 document.write("Number " + num +"<br>");
 document.write("Round off Valu " + round +"<br>");
 document.write("Floor Value " + floor +"<br>");
 document.write("Ceil value " + ceil +"<br>");
*/

 // Q 2.
/*
 var num = prompt("Enter any positive decimal number");
 var round = Math.round(num);
 var floor = Math.floor(num);
 var ceil = Math.ceil(num);
 document.write("Number " + num +"<br>");
 document.write("Round off Valu " + round +"<br>");
 document.write("Floor Value " + floor +"<br>");
 document.write("Ceil value " + ceil +"<br>");
 */

// Q 3.
/*
var num = prompt("Enter any positive/Negative number");

var abso = Math.abs(num);

document.write("The absolute value of " + num + " is " + abso);
*/

// Q 4.

/*
var abc = Math.floor( Math.random() * 6 );
var diceRoll = abc +1;
var abcd = Math.floor( Math.random() * 6 );
var diceRolld = abcd +1;
document.write("Random Dice value:  " + diceRoll +"<br>");
document.write("Random Dice value:  " + diceRolld +"<br>");
*/

// Q 5.

/*
var abc = Math.floor( Math.random() * 2 );
var diceRoll = abc +1;
var abcd = Math.floor( Math.random() * 2 );
var diceRolld = abcd +1;
if(diceRoll == 2 && diceRolld == 1)
{
    document.write(diceRoll + "<br> Random Coin value: Head <br>");
    document.write(diceRolld + "<br> Random Coin value: Tail <br>");
}
*/

// Q 6.

/*
var abc = Math.floor( Math.random() * 99 );
var diceRoll = abc +1;
document.write("Random Number between 1 and 100: " + diceRoll +"<br>");
*/

//Q 7.

/*
var abc = Math.floor( Math.random() * 49 );
var diceRoll = abc +1;
document.write("The weight of user is: " + diceRoll +" Kilogram <br>");
*/

// Q 8.

/*
var abc = Math.floor( Math.random() * 9 );
var secretnum = abc +1;
var userinput = prompt("Enter number between 1 and 10 ");
if(userinput == secretnum){
    alert("Congratulation Your Number is Found");
}
else{
    alert("Prevent This page from creating additional dialogue ")
}
*/

// ################################################
// ######## Assignment 06 (Chapter 31-34) #########
// ################################################

// Q1.
// var dat = new Date();
// document.write(dat);

// Q2.
// var dat = new Date();
// var month_num = dat.getMonth();
// var month_name = '';

// if (month_num == "0"){
//     month_name = "January";
// }
// else if (month_num == "1"){
//     month_name = "February";
// }
// else if (month_num == "2"){
//     month_name = "March";
// }
// else if (month_num == "3"){
//     month_name = "April";
// }
// else if (month_num == "4"){
//     month_name = "May";
// }
// else if (month_num == "5"){
//     month_name = "June";
// }
// else if (month_num == "6"){
//     month_name = "July";
// }
// else if (month_num == "7"){
//     month_name = "August";
// }
// else if (month_num == "8"){
//     month_name = "September";
// }
// else if (month_num == "9"){
//     month_name = "October";
// }
// else if (month_num == "10"){
//     month_name = "November";
// }
// else if (month_num == "11"){
//     month_name = "December";
// }

// document.write(month_name);

// Q3.
// var dat = new Date();
// var dt = dat.toString();
// var day = dt.slice(0,3);
// document.write("Today is "+day);


// Q4.
// var dat = new Date();
// var dt = dat.toString();
// var day = dt.slice(0,3);

// if(day == "Sat"|| day == "Sun")
// document.write("It's Funday");


// Q5.
// var month = 0; // January
// var days = new Date().getDate();

// if (days <  16 ){
//     document.write("First fifteen days of the month");
// }
// else {
//     document.write("Last days of the month");
// }

// Q6.
// var current_date = new Date();
// var milli_sec = new Date().getTime();
// var milli_min = Math.floor(milli_sec/(1000*60*60));

// document.write("Current Date : "+current_date+"<br>");
// document.write("Elapsed milli seconds since January 1, 1970 : "+milli_sec+"<br>");
// document.write("Elapsed milli minutes since January 1, 1970 : "+milli_min);

// Q7.
// var current_date = new Date();
// var hours = new Date().getHours();

// if (hours >=  12){
//     alert("It's PM");
// }
// else{
//     alert("It's AM");
// }

// Q8.
// var current_date = new Date();
// var day = "31";
// var month = "11";
// var year = "2020";
// var later_date = new Date(year, month, day);
// document.write("Later Date : "+later_date);

// Q9.
// var current_date = new Date();
// var ramzan_date = new Date(2015, 6, 15);
// var cur_date_milli = current_date.getTime();
// var ram_date_milli = ramzan_date.getTime();
// var diff = cur_date_milli - ram_date_milli;
// var days = diff/(1000*60*60*24*30);

// days = Math.floor(days);

// document.write(days+" days have passed since 1st Ramzan, 2015");


// Q10.
// var ref_date = new Date(2015, 11, 5);
// var start_date = new Date(2015, 0, 0);
// var ref_date_milli = ref_date.getTime();
// var start_date_milli = start_date.getTime();
// var diff = ref_date_milli - start_date_milli;
// var sec = diff/(1000*60);

// sec = Math.floor(sec);

// document.write("On reference date " +ref_date+"<br>");
// document.write(sec+" seconds have passed since begining of 2015");

// Q11.
// var current_date = new Date();
// var hours = new Date().getHours();

// var previous_date = current_date.setHours(hours-1);
// document.write("Current Date : "+current_date+"<br>");
// document.write("1 hours ago it was :"+previous_date);

// Q12.
// var current_date = new Date();
// var years = new Date().getFullYear();

// var previous_date = current_date.setYears(years-100);
// document.write("Current Date : "+current_date+"<br>");
// document.write("1oo years back it was :"+previous_date);

// Q13. 
// var age = prompt("Your age is"); 
// var cur_year = new Date().getFullYear();

// var birth_year = cur_year - age;

// document.write("Your birth year is :"+birth_year); 

// Q14.
// var customer_name = "ABC CUSTOMER";
// var current_month = "FEBRUARY";
// var number_of_units = 410;
// var charges_per_unit = 16;
// var net_amount_payable = 0;
// var late_payment_surcharge = 350;
// var gross_amount_paybale = 0;

// net_amount_payable = Math.round(number_of_units * charges_per_unit);
// gross_amount_paybale = Math.round(net_amount_payable + late_payment_surcharge);
// document.write("<H1> K-Eelectric Bill </H1><br>"); 
// document.write("Customer Name : "+customer_name+"<br>"); 
// document.write("Current Month : "+current_month+"<br>"); 
// document.write("Number of units : "+number_of_units+"<br>"); 
// document.write("Charges per unit : "+charges_per_unit+"<br><br><br>"); 
// document.write("Net amount payable (with in due date) : "+net_amount_payable+"<br>"); 
// document.write("Late payment surcharge : "+late_payment_surcharge+"<br>"); 
// document.write("Gross amount paybale (after due date) : "+gross_amount_paybale+"<br>"); 

// ################################################
// ######## Assignment 06 (Chapter 35-38) #########
// ################################################

 // Q 1.
/*
 var date = new Date();
document.write(date);
*/

 // Q 2.
 /*
 function user(){
    var fname = prompt("Enter First Name");
    var lname = prompt("Enter Last Name");
    document.write(fname+" "+lname);
 }
 user();
 */

  // Q 3.
  /*
var num1 = prompt("Enter First Number");
var num2 = prompt("Enter 2nd Number");
function add(a,b){
    var z = (+a)+(+b);
    return z;
}
var g = add(num1,num2);
document.write(g);
*/

// Q 4.
/*
var num1 = prompt("Enter First Number");
var operator = prompt("Enter Operator");
var num2 = prompt("Enter 2nd Number");
function calc(a,b,c){
    if(operator === "+"){
        return (+a)+(+c);
    }else if(operator === "-"){
        return a-c;
    }else if(operator === "*"){
        return a*c;
    }else if(operator === "/"){
        return a/c;
    }else{
        return "Incorrect Operator";
    }
}
var g = calc(num1,operator,num2);
document.write(g);
*/

// Q 5.
/*
var num = prompt("Enter any one Number");
function user(a){
    return a*a;
 }
var f = user(num);
document.write(f);
*/

// Q 6.
/*
var n = prompt("Enter any one Number");
function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }  
  }
  answer = factorial(n)
  document.write("The factorial of " + n + " is " + answer);
  */

// Q 7.
/*
 var startnum = prompt("Enter Starting Number");
 var endtnum = prompt("Enter Ending Number");
 function user(){
     for(var i = startnum; i<=endtnum; i++){
        document.write(i + "<br>");
     }
  }
 user();
*/

// Q 8.
/*
var Base = prompt("Enter Base of trianglr");
var Per = prompt("Enter Perpendicular of triangle");
function hypoteneus(sideA, sideB){
    var z = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
    return z;
  }
  
var a = hypoteneus(Base, Per);
document.write(a);
*/

// Q 9.
/*
var width = prompt("Enter Width");
var Height = prompt("Enter Height");
function area(sideA, sideB){
    var z = sideA*sideB;
    return z;
  }
  
var a = area(width, Height);
document.write(a);
*/

// Q 10.
/*
var string = prompt("Enter String palindrome or not");
function palindrome(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          return false;
      }
    }
    return true;
   }
   var g = palindrome(string);
   document.write("This is " +g+ " palindrom");
   */

   // Q 11.
/*

  var string = prompt("Enter String palindrome or not");
  function upper(str) {
    return str.replace(/(^| )./g, x => x.toUpperCase())
  }
  var g = upper(string);
  document.write(g);
*/

// Q 12
/*
var string = prompt("Enter String ");
function longestword(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
var g = longestword(string);
document.write("The Longest Word is "+g);
*/

// Q 13.
/*
var string = prompt("Enter String");
var letter = prompt("Enter letter");
function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

var g = char_count(string,letter);

document.write(letter+ " found "+ g + " times");
*/

// Q 14.
/*
var num = prompt("Enter any one Number for Circumference");
var pi = 3.1416;
function calcCircumference(a){
    var circumference = 2*pi*a;
    return circumference;
 }
var f = calcCircumference(num);
document.write("The Circumference is "+f+"<br>");


var num = prompt("Enter any one Number for Area");
var pi = 3.1416;
function calcCircumference(a){
    var r = a*a;
    var area = pi*r;
    return area;
 }
var f = calcCircumference(num);
document.write("The Area is "+f);
*/

