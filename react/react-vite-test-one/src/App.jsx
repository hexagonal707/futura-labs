import {useState} from "react";
import "./App.css";

export function App() {

    let [num, setNum] = useState(0);
    let [state, setState] = useState(true)

    function change(type) {

        switch (type) {

            case "increment":
                setNum(num + 1);
                return;
            case "decrement":
                setNum(num - 1);
                break;
            case "reset":
                setNum(0);
                break;


        }
    }

    let hide = () => {


        if (state) {
            setState(false);


        } else {

            setState(true);


        }


    }


    function countCheck (){

        if (num === 10) {

            setNum(0)

        }
        else    {

            setNum(num +1)

        }

    }


    return (

        <div className="container">
            <h1>{state ? num : null}</h1>
            <div>
                <button className={'btn inc-btn'} onClick={()=>change('increment')}>+</button>
                <button className={'btn dec-btn'} onClick={()=>change('decrement')}>-</button>
                <button className={'btn reset-btn'} onClick={()=>change('reset')}>Reset</button>
                <button className={'btn hide-btn'} onClick={hide}>{state ? 'Hide' : 'Show'}</button>
                <button className={'btn hide-btn'} onClick={()=>countCheck()}>Loop Reset</button>


            </div>
        </div>

    )
}

