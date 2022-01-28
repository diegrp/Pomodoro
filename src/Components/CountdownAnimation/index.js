import React, { useContext } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { SettingsContext } from '../../Context/SettingsContext';

const CountdownAnimation = ({ key, timer, animate, children }) => {

  // Parar a animação depois de ecerrar o tempo no contador

  const { stopAnimate } = useContext(SettingsContext);
  
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
        stopAnimate();
      }}
    >
      {children}
    </CountdownCircleTimer>
  )
}

export default CountdownAnimation