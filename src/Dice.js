import React from "react";
import "./Dize.css"

function DiceValue(props){
    return <p>{props.value}</p> 
}
export function Dice(){

    const [GreenCounter, setGreenCounter] = React.useState(0);
    const [BlackCounter, setBlackCounter] = React.useState(0);
    const [YellowCounter, setYellowCounter] = React.useState(0);
    
    
    function GreenDice(){
        let number = 1 + Math.floor(Math.random()*20);

        setGreenCounter(number);
    }
    function BlackDice(){
        let number = 1 + Math.floor(Math.random()*20);

        setBlackCounter(number);

    }
    function YellowDice(){
        let number = 1 + Math.floor(Math.random()*20);

        setYellowCounter(number);
    }

    
    
    return <div>
        
        <button id="GreenDice"onClick={GreenDice}> <DiceValue value={GreenCounter}/></button>
        <button id="BlackDice"onClick={BlackDice}><DiceValue value={BlackCounter}/></button>
        <button id="YellowDice" onClick={YellowDice}> <DiceValue value={YellowCounter}/></button>
    </div>

}