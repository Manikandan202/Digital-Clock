let ampm=document.getElementById("ampm")
function displayTime(){
    let dateTime=new Date();
    let hr =padZero(dateTime.getHours());
    let min=padZero(dateTime.getMinutes());
    let sec= padZero(dateTime.getSeconds());
    let date1=padZero(dateTime.getDate());
    let month1=padZero(dateTime.getMonth()+1);

    
    let year1=dateTime.getFullYear();
        if (hr>12){
        hr=hr-12
        ampm.innerHTML="PM"
    }
    else{
        ampm.innerHTML="AM"
    }
    document.getElementById("hours").innerHTML=(hr)
    document.getElementById("minutes").innerHTML=(min)
    document.getElementById("seconds").innerHTML=(sec)
    document.getElementById("date").innerHTML=(date1)
    document.getElementById("month").innerHTML=(month1)
    document.getElementById("year").innerHTML=(year1)

}
function padZero(num){
        return  num<10 ?"0"+num:num
    }

setInterval(
displayTime,400)

