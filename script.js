const date = document.getElementById ('date')
const day = document.getElementById ('day')
const month = document.getElementById ('month')
const year = document.getElementById ('year')
const timer = document.getElementById ('timer')




let today = new Date();

let weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

let allMonths = ["January","February","March","April","May","June","July","August","September","October","November","December"]


setInterval(myTimer, 1000);

function myTimer() {
  const clock = new Date();


date.innerHTML = (today.getDate()<10 ? "0" : "") + today.getUTCDate()
day.innerHTML = weekDays[today.getUTCDay()]
month.innerHTML = allMonths[today.getUTCMonth()]
year.innerHTML = today.getFullYear()
document.getElementById("timer").innerHTML = clock.toLocaleTimeString();

}


