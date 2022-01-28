import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const CountdownAnimation = ({ key, timer, animate, children }) => {
  
  // CountdownCircleTimer e vínculo de props aos atributos do componente externo da lib instalada
  
  return (
    <CountdownCircleTimer
      key={key}
      isPlaying={animate}
      duration={timer * 60}
      colors={[
        ["#FE6E6B"],
        ["#FE6E6B"],
        ["#FE6E6B"]
      ]}
      colorsTime={[
        [0.33],
        [0.33],
        [0.33]
      ]}
      strokeWidth={6}
      size={222}
      trailColor="#151932"
      onComplete={() => {

      }}
    >
      {children}
    </CountdownCircleTimer>
  )
}

export default CountdownAnimation