import React, { useState, useContext } from 'react';
import { SettingsContext } from '../../Context/SettingsContext';

const SetPomodoro = () => {

  const { updateExecute } = useContext(SettingsContext);

  // Estado do timer com objeto inicial de dados padrões

  const [ newTimer, setNewTimer ] = useState({
    work: 0.2,
    short: 0.1,
    long: 0.5,
    active: "work"
  });

  // Atualização de dados de um estado, com base na alternância dos atributos do evento usando o switch

  const handleChange = ({ target }) => {
    
    const { name, value } = target;

    switch (name) {
      case "work":
        setNewTimer({
          ...newTimer,
          work: parseInt(value)
        });
        break;
      case "shortBreak":
        setNewTimer({
          ...newTimer,
          short: parseInt(value)
        });
        break;
      case "shortLong":
        setNewTimer({
          ...newTimer,
          long: parseInt(value)
        });
        break;
      default:
        throw new Error('Error value!');
    }
  }

  // Insere no estado as configurações do timer definidas pelo usuário ao enviar

  const handleSubmit = (e) => {
    e.preventDefault();
    updateExecute();
  }

  // Formulário de atualização do timer

  return (
    <div class="form-container">
      <form noValidate onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <input type="number" name="work" className="input" onChange={handleChange} value={newTimer.work} />
          <input type="number" name="shortBreak" className="input" onChange={handleChange} value={newTimer.short} />
          <input type="number" name="longBreak" className="input" onChange={handleChange} value={newTimer.long} />
        </div>
        <button type="submit">Set Timer</button>
      </form>
    </div>
  )
}

export default SetPomodoro