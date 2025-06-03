function updateTime() {
    const now = moment(); 

    const hours = now.format('hh');  
    const minutes = now.format('mm');
    const seconds = now.format('ss');
    const ampm = now.format('A');    

    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    document.getElementById('ampm').textContent = ampm;
}


setInterval(updateTime, 1000);

updateTime(); 
