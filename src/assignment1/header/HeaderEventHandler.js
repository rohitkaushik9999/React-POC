setInterval(() => {
    var d = new Date(); //object of date()
    var hr = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    var hr_rotation = 30 * hr + min / 2; //converting current time
    var min_rotation = 6 * min;
    var sec_rotation = 6 * sec;
    
    var hour = document.getElementById("hour");
    var minute = document.getElementById("minute");
    var second = document.getElementById("second");
    
    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);
