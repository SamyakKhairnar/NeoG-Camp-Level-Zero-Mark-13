var inputDate = document.querySelector("#birth-date");
var checkButton = document.querySelector("#check-btn");
var message = document.querySelector("#message");
var privButton = document.querySelector("#check-priv");
var nextButton = document.querySelector("#check-next");

privButton.style.display = "none";
nextButton.style.display = "none";


checkButton.addEventListener("click", function clickHandler(){

    var bdayStr = inputDate.value;
  
    if(bdayStr !== ''){
        var listOfDate = bdayStr.split('-');

        var date = {
        day: Number(listOfDate[2]),
        month: Number(listOfDate[1]),
        year: Number(listOfDate[0])
        };
        message.innerText="";
        console.log(date);
        var isPalindrome = checkPalindromeForAllDateFormats(date);

        if(isPalindrome){
            message.innerText = "Yay! Your Birthday is a Palindrome!! 🥳🥳";
        }else {
            message.innerText = "Oh No ! Your Birthday is Not Palindrome 😔";
        }
    }else{
        message.innerText = "Select Date of Birth to Proceed";
    }
}
);

function checkPalindromeForAllDateFormats(date){
    var listOfPalindromes = getAllDateFormats(date);
  
    var flag = false;
  
    for(var i=0; i < listOfPalindromes.length; i++){
      if(isPalindrome(listOfPalindromes[i])){
        flag = true;
        break;
      }
    }
    
    return flag;
}

function getAllDateFormats(date) {
    var dateStr = convertDateToStr(date);
  
    var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
    var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
    var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
    var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
    var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
    var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;
  
    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
}

function convertDateToStr(date) {
  
    var dateStr = { day: '', month: '', year: '' };
  
    if (date.day < 10) {
      dateStr.day = '0' + date.day;
    }
    else {
      dateStr.day = date.day.toString();
    }
  
    if (date.month < 10) {
      dateStr.month = '0' + date.month;
    }
    else {
      dateStr.month = date.month.toString();
    }
  
    dateStr.year = date.year.toString();
    return dateStr;
}

function isPalindrome(str) {
    var reverse = reverseStr(str);
    return str === reverse;
}

function reverseStr(str) {
    var listOfChars = str.split('');
    var reverseListOfChars = listOfChars.reverse();
    var reversedStr = reverseListOfChars.join('');
    return reversedStr;
}



  