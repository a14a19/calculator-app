import './button.css';

let n1 = '';
let n2 = '';
let operator = '';
let result = '';

function Button({ symbol }) {

    function getInput(e) {
        let inputValue = e.target.innerText;
        console.log(inputValue);
       
        if (inputValue === '+' || inputValue === '-' || inputValue === '*' || inputValue === '/') {
            operator = inputValue;
        } else if (operator !== '' && inputValue !== '=') {
            n2 += inputValue;
        } else if(inputValue !== '=' && inputValue !== 'c'){
            n1 += inputValue;
        } else if (inputValue === '=') {
            result = eval(`${+n1} ${operator} ${+n2}`)
            console.log(result);
            n1 = '';
            n2 = '';
            operator = '';
            result = '';
        } else if (inputValue === 'c') {
            n1 = '';
            n2 = '';
            operator = '';
            result = '';
        }

        console.log(`n1 (${n1}) ${operator} n2 (${n2}) = ${result}`);
    }
    return (
        <button
            className={symbol === "=" ? 'equal' : 'button'}
            onClick={getInput}
        >
            {symbol}
        </button>
    )
}

export default Button;