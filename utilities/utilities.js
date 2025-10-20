//string To Number [value]
function valueById(id){
    const number = document.getElementById(id).value;
    const convertedNumber = parseInt(number);
    return convertedNumber;
} 
// string to Number [innerText]
function innerTextById(id){
    const number = document.getElementById(id).innerText;
    const convertedNumber = parseInt(number);
    return convertedNumber;
} 
