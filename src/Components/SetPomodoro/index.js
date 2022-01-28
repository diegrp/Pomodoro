import React from 'react';

const SetPomodoro = () => {

  // Formulário de atualização do timer

  return (
    <div class="form-container">
      <form noValidate onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <input type="number" name="work" className="input" onChange={handleChange} value={} />
          <input type="number" name="shortBreak" className="input" onChange={handleChange} value={} />
          <input type="number" name="longBreak" className="input" onChange={handleChange} value={} />
        </div>
        <button type="submit">Set Timer</button>
      </form>
    </div>
  )
}

export default SetPomodoro