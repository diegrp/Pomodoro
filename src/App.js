import React,{useContext, useEffect} from 'react';
import { SettingsContext } from './Context/SettingsContext';
import SetPomodoro from './Components/SetPomodoro';
import Button from './Components/Button';
import CountdownAnimation from './Components/CountdownAnimation';

const App = () => {
  
  const {
    pomodoro,
    executing,
    startAnimate,
    setCurrentTimer,
    updateExecute,
    startTimer,
    pauseTimer,
    SettingsBtn,
    children
  } = useContext(SettingsContext);

  // Atualiza meu timer toda vez que tiver alguma alteração em uma das dependências do useEffect
  useEffect(() => {
    updateExecute(executing);
  },[updateExecute, executing, startAnimate]);

  return (
    <main>
      {/*Montagem do app usando estados de funções do context e componentes externos*/}
      <div className="container">
        <h3>Pomodoro</h3>
        <small>Seja produtivo da maneira certa</small>
        {pomodoro === 0 ? (
          <SetPomodoro/>
        ):(
          <div>
            {/* Botões de tempos pré-definidos para rodar no contador */}
            <ul className="labels">
              <li>
                <Button title="Work" activeClass={executing.active === 'work' ? 'active-label':undefined} _callback={() => setCurrentTimer('work')}/>
              </li>
              <li>
                <Button title="Short" activeClass={executing.active === 'short' ? 'active-label':undefined} _callback={() => setCurrentTimer('short')}/>
              </li>
              <li>
                <Button title="Long" activeClass={executing.active === 'long' ? 'active-label':undefined} _callback={() => setCurrentTimer('long')}/>
              </li>
            </ul>
            {/* Acesso ao formulário de atualização do timer */}
            <Button title="Settings" _callback={SettingsBtn} />
            {/* Atualiação de estado atribuida ao timer */}
            <div className="timer-container">
              <div className="timer-wrapper">
                <CountdownAnimation
                  key={pomodoro}
                  timer={pomodoro}
                  animate={startAnimate}
                >
                  {children}
                </CountdownAnimation>
              </div>
            </div>
            {/* Botões de start e pause para ter controle sobre o timer */}
            <div className="button-wrapper">
              <Button title="Start" activeClass={startAnimate ? 'active-button':undefined} _callback={startTimer} />
              <Button title="Pause" activeClass={!startAnimate ? 'active-button':undefined} _callback={pauseTimer} />
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

export default App