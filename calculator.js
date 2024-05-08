let now = new Date()
var todayDate = now.getDate()
document.getElementById('inputTodayDate').setAttribute('placeholder',todayDate)
let monthsArray = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
var todayMonth = monthsArray[now.getMonth()]
document.getElementById('inputTodayMonth').setAttribute('placeholder',todayMonth)

var todayYear = now.getFullYear()
document.getElementById('inputTodayYear').setAttribute('placeholder',todayYear)

function calculate(){
    var userbirthDate = document.getElementById('userbirthdate').value;
    var userBirthMonth = document.getElementById('userbirthmonth').value;
    var userbirthYear = document.getElementById("userBirthYear").value;
    let now1 = new Date(`${userbirthDate}-${userBirthMonth}-${userbirthYear}`);
    let now = new Date();
    let FinalDate = now.getFullYear() - userbirthYear;
    // console.log(`This is your age ${FinalDate}`);
    let FinalMilliSecond = now - now1;
    // console.log(`This is your MilliSeconds: ${FinalMilliSecond}`);
    let finalDays = Math.floor(FinalMilliSecond / (1000 * 60 * 60 * 24));
    // console.log(finalDays);
    let Months =  now1.getMonth() - now.getMonth() 
    let FinalMonth = FinalDate*12 + Months
    // console.log(FinalMonth);
    let Finalweeks = FinalDate*52
    // console.log(Finalweeks);

    let Final = `Your Age is ${FinalDate}\n This is your Days ${finalDays}\n This is your weeks ${Finalweeks}\n This is your Months ${FinalMonth}\n This is your MilliSeconds ${FinalMilliSecond}`
    document.getElementById("final").innerText = Final
}