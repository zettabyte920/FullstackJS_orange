import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//ReactDOM.render(<h1>Bonjour </h1>, document.getElementById('root'));

{/*const todo = (
  <ol>
    <li>Working</li>
    <li>Go Shopping</li>
    <li>Dinner</li>
  </ol>
);
ReactDOM.render(todo, document.getElementById('root')); 
*/}

{/*function tick() {
  const element = (
    <div>
      <h1>Bonjour!</h1>
      <h2>Aujourd'hui : {new Date().toLocaleDateString()}.</h2>
      <h2>il est : {new Date().toLocaleTimeString()}.</h2>
    </div>
  )
  ReactDOM.render(element, document.getElementById('root'))
}
setInterval(tick, 1000)
*/}

{/*let x = "Bonjour"
let y = " tout"
const z = " le monde !"

ReactDOM.render(x + y + z, document.getElementById('root'))
*/}

{/* var Nom = <h2> Anis </h2>
var Prenom = <h2> Assas </h2>
const Photo = <img src="images/image.png" alt="maPhoto"
  width="400px" height="400px" />;
const user = {
  Nom: "Hossem",
  Prenom: "Hamami",
  Photo: "images/image.png"
}

ReactDOM.render(<div><h2>{user.Nom}</h2> <h2>{user.Prenom}</h2> <img src={user.Photo}></img></div>, document.getElementById('root'))


*/}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
