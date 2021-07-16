import './Timer.css';
import Navbar from './Navbar';
import React, { useEffect, useRef, useState } from 'react';

const Timer = () =>{
  const [timerDays,setTimerDays]=useState('00');
  const [timerHours,setTimerHours]=useState('00');
  const [timerMinutes,setTimerMinutes]=useState('00');
  const [timerSeconds,setTimerSeconds]=useState('00');
  const [entereddate, setEntereddate] = useState("");
  const dateChangeHandler = (event) => {
    setEntereddate(event.target.value);
  };
console.log(entereddate);
const [newdate,setnewdate] = useState('00');
const submitHandler = (event) => {
  event.preventDefault();
 const date=new Date(entereddate);
 setnewdate(date); 
}

let interval =useRef();
 const startTimer =() =>{
const countdownDate = new Date(newdate).getTime();

interval =setInterval(() => {
  const now = new Date().getTime();
  const distance= countdownDate-now;


  const days= Math.floor(distance /(1000 *60 * 60 * 24));
  const hours= Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes= Math.floor((distance / 1000 / 60) % 60);
  const seconds= Math.floor((distance / 1000) % 60);

     if(distance< 0){
       //stop our timer
       clearInterval(interval.current);
     } else{
       //update timer
       setTimerDays(days);
       setTimerHours(hours);
       setTimerMinutes(minutes);
       setTimerSeconds(seconds);
     }


}, 1000);

};
//componentDidMount
useEffect(() => {
startTimer();
return () => {
  clearInterval(interval.current);
};
});

return (
<div className="backgroundclass">
<Navbar />
<section className="timer-container">
<section className="timer">
<div>
   <span className="mdi mdi-calendar-clock timer-icon"></span>
   <h2 className="countdowntimerheading">Countdown Timer</h2>
   <p>I love to keep busy. But I never forget it's the countdown that made it all possible.</p>
</div>
<div className="timerdisplay">
  <section>
    <p>{timerDays}</p>
    <p><small>Days</small></p>
  </section>
  <span>:</span>
  <section>
    <p>{timerHours}</p>
    <p><small>Hours</small></p>
  </section>
  <span>:</span>
  <section>
    <p>{timerMinutes}</p>
    <p><small>Minutes</small></p>
  </section>
  <span>:</span>
  <section>
    <p>{timerSeconds}</p>
    <p><small>Seconds</small></p>
  </section>
</div>
</section>
<div className="divclass">
<form onSubmit={submitHandler}>
    <input
              type="text"
            placeholder="mm/dd/yyyy"
              value={entereddate}
              onChange={dateChangeHandler}
            />
            { "" }&nbsp;
  <button type="submit">submit</button>
  </form>

</div>
</section>
</div>
);
};

export default Timer;