const timeinput = document.getElementById('time');

function currentTime(){
    const time = new Date();
    let hours= time.getHours();
    hours = hours<10?`0${hours}`:hours;
    const maridiem = hours<12?'AM':'PM'
    let minutes= time.getMinutes();
    minutes = minutes<10?`0${minutes}`:minutes
    let seconds= time.getSeconds();
    seconds = seconds<10?`0${seconds}`:seconds
    timeinput.textContent = `${hours}:${minutes}:${seconds} ${maridiem}`
}

currentTime();
setInterval(currentTime,1000);