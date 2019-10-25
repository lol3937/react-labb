import React from "react";

function Display(props){
    return  <p>Nuvarande värde: {props.value}</p>
}

export function EventLabb(props){

    const [counter, setCounter] = React.useState(0);
    function plusClick(){
        setCounter(counter+100)

    }

    function minClick(){
        setCounter(counter-6)
    }


    //Skapa en button och en textrad
    return <div>
        <Display value={counter} />
        <button onClick={plusClick}>ÖKA FÖR FEN</button>
        <button onClick={minClick}>MINSKA</button>
    </div>
}