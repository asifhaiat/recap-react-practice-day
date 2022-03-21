
import './App.css';
import { useEffect, useState } from 'react';


function App() {
  
  return (
    <div className="App">
      <Fruit name="Orange" calorie="1.54" country="Brazil"></Fruit>
      <District name="Tangail" speciality="Chomchom"></District>
      <Fruit name="Banana" calorie="2.84" country="India"></Fruit>
      <District name="Bogura" speciality="Doi"></District>
      <Fruit name="Coconut" calorie="3.94" country="Indonesia"></Fruit>
      <District name="Dhaka" speciality="Mosque"></District>
      <Fruit name="Date" calorie="4.74" country="Egypt"></Fruit>
      <LoadPosts></LoadPosts>

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
const dsitrictStyle ={
  backgroundColor: 'crimson',
  margin: '20px',
  padding: '20px',
  border: '2px solid coral',
  borderRadius: '15px'
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

function District(props){
  const [power, setPower] = useState(1);
  const increasePower = () => {
    const newPower = power * 2;
    setPower(newPower);
  }
  return (
    <div style={dsitrictStyle}>
      <h3>Name: {props.name}</h3>
      <h4>Speciality: {props.speciality}</h4>
      <h4>Power: {power}</h4>
      <button onClick={increasePower}>Boost the Power</button>
    </div>
  )
}

const postStyle = {
  backgroundColor: 'lightpink',
  margin: '20px',
  padding: '20px',
  border: '2px solid gray',
  borderRadius: '20px'
}
function LoadPosts () {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  },[])
  return (
    <div>
      <h3>Posts: {posts.length}</h3>
      {
        posts.map(post => <Post title={post.title} body={post.body}></Post>)
      }
    </div>
  )
}
function Post (props){
  return (
    <div className='post-grid'>
      <div style={postStyle}>
        <h3>Title: {props.title}</h3>
        <h3>Body: {props.body}</h3>
      </div>
    </div>
  )
}

export default App;
