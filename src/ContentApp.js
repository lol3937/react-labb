import React from "react";
import "./ContentApp.css";

function Card(props){
    return <div className="card">
        
        <div className="content">
            {props.children}
        </div>
    </div>
}

//Array
/*const days = ["mån", "tis", "ons", "tors", "fre", "PIZZALÖRDAG"];*/
const dishes = [{ "day": "Måndag", "dish": "\"Daal\" Indisk linsgryta serveras med buljongkokt bulgur och salladsbuffé", "alt_dish": "Ugnsgratinerad kycklingkorv serveras med potatismos och salladsbuffé" }, { "day": "Tisdag", "dish": "Chili sin carne serveras med buljongkokt bulgur och salladsbuffé", "alt_dish": "Köttfärslimpa serveras med stekt lök, skysås, kokt potatis, kokta morötter och salladsbuffé" }, { "day": "Onsdag", "dish": "\"Lasagne Verde\" Lasagne med bladspenat och ostsås serveras med salladsbuffé", "alt_dish": "Pocherad torskfilé på rotfruktsbädd serveras med vitvinssås, kokt potatis och salladsbuffé" }, { "day": "Torsdag", "dish": "Spenatsoppa serveras med pocherat ägg, färskost, bröd, frukt och salladsbuffé", "alt_dish": "Grönsakssoppa serveras med bröd, färskost,frukt och salladsbuffé" }, { "day": "Fredag", "dish": "MAT 2019- Terrin på högrev, aubergine \u0026 zuccinni-", "alt_dish": "MAT 2019-Gryta på röttvin, rotfrukter \u0026 svamp, serveras med selleripuré" }];

export function ContentApp(props){
    /*let persons = data.map(person => <Person key={person.id} name={person.name} city={person.city} />)
    return <ul>{persons}</ul>*/

    //map
    /*let cards = days.map(day => <Card key={day} title={day}/>)*/
    let meals = dishes.map(meal => <Card key={meal} title={meal}/>)

    return <div>{meals}</div>
}