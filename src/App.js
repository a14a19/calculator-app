// import logo from './logo.svg';
import './App.css';
import Button from './components/button';

let btns = ['c', '%', '+/-', '/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', 0, ',', '=']


let hex = '0123456789abcdef';

let randomColor = () => {
  let hexC = '#';
  for(let x = 0; x < 8; x++){
    hexC += hex[Math.floor(Math.random() * hex.length)];
  }
  return hexC;
}

let generate = () => {
  let color1 = randomColor();
  let color2 = randomColor();
  
  return `linear-gradient(${color1}, ${color2})`;
}

let button = btns.map((btn, i) => {
  return <Button symbol={btn} key={i} /> 
})

function App() {
  return (
    <div className="App" style={{ background: generate() }}>
      <div className='calculator'>
        <input type='text' className=''  placeholder='000'/>
        <div className='r-Display'></div>
        {button}
      </div>
    </div>
  );
}

export default App;
