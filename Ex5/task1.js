function showTime(){
    var current = new Date();
    var time = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
    document.getElementById("DigitalCLOCK").innerText = time;
    document.getElementById("DigitalCLOCK").textContent = time; 
    
    setTimeout(showTime, 1000);
    
}

showTime();