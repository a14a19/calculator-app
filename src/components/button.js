import './button.css';

let n1 = '';
let n2 = '';
let operator = '';
let result = '';

function Button({ symbol, showResult }) {

    let getInput = (e) => {
        let inputValue = e.target.innerText;

        if (inputValue === 'C') {
            n1 = '';
            n2 = '';
            operator = '';
            result = '';
            showResult('');
        }
        if (inputValue === '+' || inputValue === '-' || inputValue === '*' || inputValue === '/' || inputValue === '%') {
            operator = inputValue;
            showResult(`${n1} ${operator} ${n2}`)
        }
        else if (operator !== '' && inputValue !== '=') {
            n2 += inputValue;
            showResult(`${n1} ${operator} ${n2}`)
        }
        else if (inputValue !== '=' && inputValue !== 'C') {
            n1 += inputValue;
            showResult(`${n1} ${operator} ${n2}`)
        }
        else if (inputValue === '=') {
            if (inputValue === '.') {
                result = eval(`${+n1} ${operator} ${+n2}`).toFixed(2);
                showResult(result);
                n1 = result;
                n2 = '';
            }
            else {
                result = eval(`${+n1} ${operator} ${+n2}`)
                showResult(result);
                n1 = result;
                n2 = '';
            }
        }
        console.log(`n1 (${n1}) ${operator} n2 (${n2}) = ${result}`);
        console.log(result);
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