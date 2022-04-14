const clock =document.querySelector("#clock");

function getClock(){
    const date = new Date();
    //숫자값으로 받아오면 일의 자리수는 한자리로 표현
    //1>>
    const hours =String(date.getHours()).padStart(2,"0");
    const minutes =String(date.getMinutes()).padStart(2,"0");
    const seconds =String(date.getSeconds()).padStart(2,"0");
    return clock.innerHTML =`${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock,1000);

//처음 한번 출력
//clock.innerHTML=getClock();
//이후 화살표 함수로 값을 넣어줌
//setInterval(()=>{clock.innerHTML=getClock();},1000);