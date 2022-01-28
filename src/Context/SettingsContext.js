import React, { createContext, useState } from 'react';

export const SettingsContext = createContext();

const SettingsContextProvider = ( props ) => {

  // Principais estados para o funcionamento da lógica do app

  const [ pomodoro, setPomodoro ] = useState(0);
  const [ executing, setExecuting ] = useState({});
  const [ startAnimate, setStartAnimate ] = useState(false);

  // Função que armazena os dados enviados pelo formulário de atualização do timer

  const updateExecute = (UpdateSettings) => {
    setExecuting(UpdateSettings);
    setTimerTime(UpdateSettings);
  }

  // Execução da atualização do time no contador

  const setCurrentTimer = (active_state) => {
    setExecuting({
      ...executing,
      active: active_state
    });
    setTimerTime(executing);
    startAnimate(false);
  }

  // Envia o time para o pomodoro, que leva ao countdownCircleTimer em suas props

  const setTimerTime = (evaluate) => {
    switch (evaluate.active) {
      case "work":
        setPomodoro(evaluate.work);
        break;
      case "short":
        setPomodoro(evaluate.short);
        break;
      case "long":
        setPomodoro(evaluate.long);
        break;  
      default:
        setPomodoro(0);
        break;
    }
  }

  // Reseta o timer para uma nova redefinição 

  const SettingsBtn = () => {
    setPomodoro(0);
    setExecuting({});
  }

  // Controle sobre a animação do contador: start, pause e stop

  const startTimer = () => {
    setStartAnimate(true);
  }

  const pauseTimer = () => {
    setStartAnimate(false);
  }

  const stopTimer = () => {
    setStartAnimate(false);
  }

  // Renderização dos minutos e segundos no timer

  const children = ({ reimaningTime }) => {
    const minutes = Math.floor( reimaningTime / 60 );
    const seconds = reimaningTime % 60;

    return `${minutes}:${seconds}`;
  }

  return(
    <SettingsContext.Provider value={{
      pomodoro,
      executing,
      startAnimate,
      updateExecute,
      setCurrentTimer,
      SettingsBtn,
      startTimer,
      pauseTimer,
      stopTimer,
      children
     }}>
      {props.children}
    </SettingsContext.Provider>
  )
}

export default SettingsContextProvider