import { useState } from 'react';


function App() {
  const [temperature, setTemperature] = useState(10);
  const [color, setColor] = useState ('cold');

  function increaseTemperature () {
    // if (temperature === 30) return;
    const newTemperature = temperature + 1;
    setTemperature(temperature + 1);
    if(newTemperature > 25) {
      setColor('hot');
    }
    if (newTemperature >= 15 && newTemperature <= 25) {
      setColor('natural');
    }
  }
  function decreseTemperature () {
    // if (temperature === -30) return;
    const newTemperature = temperature - 1;
    setTemperature(temperature - 1);
    if(newTemperature < 10) {
      setColor('cold');
    }
    if (newTemperature >= 15) {
      setColor('natural');
    }
  }
  return (
<div className="app-container">
    <div className="temperature-display-container">
      <div className={`temperature-display ${color}`}>{temperature}ºC</div>
    </div>
   <button disabled={ temperature === 30 } className="button-plus" onClick={() => increaseTemperature()}>+</button>
   <button disabled={ temperature === -30 }className="button-minus" onClick={() => decreseTemperature()}>-</button>
  
</div>
  );
}

export default App;
