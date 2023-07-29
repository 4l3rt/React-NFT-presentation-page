import React from 'react'
import { useState, useEffect } from 'react'
import '../../containers/howItWorks/howItWorks.css'
import {getRemainingTime} from './Utils/CountDownTimerUtils';
import dayjs from 'dayjs';

const defaultRemainingTime = {
    seconds: "00",
    minutes: "00",
    hours: "00"
}


const Timer = ({display, countdownTimestampMs}) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
        const intervalId = setInterval(() => {
             updateRemainingTime(countdownTimestampMs);
        }, 1000);
        return () => clearInterval(intervalId)
  }, [countdownTimestampMs])

    function updateRemainingTime(countdown) {
        setRemainingTime(getRemainingTime(countdown));
        console.log(dayjs())
    }

  return (
    <div className={display}>
        <p className='txt-basics'>Auction ends in:</p>
        <div className='NFT__shroom-time'>
            <div>
                <h1 className='txt-basics NFT__mobile-timer-h1'>{remainingTime.hours}</h1>
                <p className='txt-basics' >Hours</p>
            </div>
            <div>
                <h1 className='txt-basics NFT__mobile-timer-h1' >:</h1>
                </div>
                <div>
                    <h1 className='txt-basics NFT__mobile-timer-h1'>{remainingTime.minutes}</h1>
                    <p className='txt-basics' >Minutes</p>
                </div>
                <div>
                    <h1 className='txt-basics NFT__mobile-timer-h1' >:</h1>
                </div>
                <div>
                    <h1 className='txt-basics NFT__mobile-timer-h1'>{remainingTime.seconds}</h1>
                    <p className='txt-basics' >seconds</p>
                </div>
        </div>
    </div>
  )
}

export default Timer