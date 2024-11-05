import {useEffect, useState} from "react";
import "/src/css/style.css"

import "./tempConverter.css";


const InputForm = () => {
    const [inputValue1, setInputValue1] = useState(Number(0))
    const [buttonTitle, setButtonTitle] = useState("°C to °F");
    const [change, setChange] = useState(false);

    const chooseCurrency = () => {
        setChange(!change);
        if (change === true) {
            setButtonTitle("°C to °F")
        } else {
            setButtonTitle("°F to °C")
        }
    }

// Works when a state changed ____________________________________________
    useEffect(() => {
        console.log("Input value changed: ", inputValue1)
    }, [inputValue1]);


// keeps an eye on state any changes at once
    const handleSubmit = (event) => {
        console.log(event)
        event.preventDefault(); // prevent default actions !!! Keep in mind
        const res = document.querySelector(".result")
        const titleEl = document.querySelector(".fieldAndButton111")
        let mainResult = Number(0);
        if (titleEl.innerHTML === "°C to °F") {
            let num = Number(inputValue1)
            mainResult = num + 32;
        } else if (titleEl.innerHTML === "°F to °C") {
            mainResult = Number(inputValue1 - 32);
        }
        res.innerHTML = "Calculation result: " + mainResult


    }


    return (
        <div>
            <button className={"fieldAndButton111"} onClick={chooseCurrency}>{buttonTitle}</button>

            <div className="fieldAndButton">
                <form onSubmit={handleSubmit}>
                    <div className={"upperField"}>
                        <input id="simpleInputField" type="text" value={inputValue1}
                               onChange={(event) => setInputValue1(event.target.value)}/>
                    </div>

                    <h3 className={"result"}>Result: </h3>

                    <button id="simpleButton" type={"submit"}>Submit</button>
                </form>
            </div>
        </div>
    );

};
export default InputForm;