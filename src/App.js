import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <District name="Tangail" speciality="Chomchom"></District>
      <District name="Bogura" speciality="Doi"></District>
      <District name="Natore" speciality="Kacha Golla"></District>
      <District name="Dhaka" speciality="Mosque"></District>
    </div>
  );
}
const districtInformation = {
  backgroundColor: 'lightGreen',
  margin: '20px',
  padding: '20px',
  borderRadius: '20px',
  border: '2px solid pink'
}
function District(props){
  return(
    <div style={districtInformation}>
      <h3>Name: {props.name}</h3>
      <h4>Speciality: {props.speciality}</h4>
    </div>
  )
}

export default App;
