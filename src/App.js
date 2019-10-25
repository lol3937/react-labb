import React from "react";
import "./App.css";

/*function Button(props){
    return <button>{props.message}</button>;
}*/

function Box(props){
    return <div>
        <h1>{props.title}</h1>
         {props.message}
         </div>
}

function Headline(props){
    return <h1>{props.title}</h1>;
}

//kan skriva med email och namn osv
function ApplicationFooter(props){
    let emailString = "";
    if(props.showEmail)
        emailString = "Email: " + props.email;
    return (
    <div> 
      <div className="author">{props.author}</div>
      <div className="email">{emailString}</div>  
    </div>
    );
}

export function App(){
    return <div>
        <Headline title="Tjabba" />
        <Box message="tja" title="gabriel"/>
        Tjabba Tjabba Tjabba Tjabba Tjabba Tjabba Tjabba Tjabba Tjabba
        <ApplicationFooter
        author="Joel"
        email="joda00001@utb.vaxjo.se"
        showEmail= {true}
        />
        </div>
}