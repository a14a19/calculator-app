// import logo from './logo.svg';
import './App.css';
import Button from './components/button';

let btns = ['%', '+/-', 'c', '/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', 0, ',', '=']

// let hex = '0123456789abcdef';


let button = btns.map((btn, i) => {
  return <Button symbol={btn} key={i}/> 
})

function App() {
  return (
    <div className="App">
      <div className='calculator'>
        <input type='text' className=''  placeholder='000'/>
        {button}
      </div>
    </div>
  );
}

export default App;
