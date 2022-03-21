
import './App.css';
import { useState } from 'react';

function App() {
  
  return (
    <div className="App">
      <Fruit name="Orange" calorie="1.54" country="Brazil"></Fruit>
      <Fruit name="Banana" calorie="2.84" country="India"></Fruit>
      <Fruit name="Coconut" calorie="3.94" country="Indonesia"></Fruit>
      <Fruit name="Date" calorie="4.74" country="Egypt"></Fruit>
    </div>
  );
}

const fruitsStyle = {
  backgroundColor: 'coral',
  margin: '20px',
  padding: '20px',
  border: '2px solid MistyRose',
  borderRadius: '20px'
}
function Fruit(props){
  const [fruit, setFruit] = useState(1)
  const increaseFruits = () => {
    const newIncreaseFruits = fruit * 2;
    setFruit(newIncreaseFruits);
  }

  return(
    <div style={fruitsStyle}>
      <h3>Name: {props.name}  </h3>
      <h3>Calorie: {props.calorie}</h3>
      <h4>Produce Country Name: {props.country}</h4>
      <h5>Calorie in Power: {fruit}</h5>
      <button onClick={increaseFruits}>Boost the power in Fruits</button>
    </div>
  )
}

export default App;
