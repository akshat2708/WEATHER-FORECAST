const curdate=document.getElementById("date");
const weathericon=document.getElementById("weathericon");
const tempStatus = "Clouds";

const getCurrentDay = () => {

var weekday =new Array(7);

weekday[0] ="Sun";
weekday[1] ="Mon";
weekday[2] ="Tues";
weekday[3] ="Wed";
weekday[4] ="Thu";
weekday[5] ="Fri";
weekday[6] ="Sat";


let currentTime = new Date();
const rr=(weekday[currentTime.getDay()]);
return rr;
}
const getCurrentTime = () =>{
var now = new Date();
var month = now.getMonth() + 1;
var day = now.getDate();
let hours = now.getHours();
let mins = now.getMinutes();

let perios = "AM";

if (hours >11) {
    perios = "PM";
    if (hours > 12) hours -= 12;
}
if(mins<10){

mins= "0" + mins;
}

return `${month}/${day} | ${hours}:${mins}${perios}`;
};

curdate.innerHTML=getCurrentDay()+"|"+getCurrentTime();
  
