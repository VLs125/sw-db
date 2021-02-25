import React from 'react'
import Header from '../header/header'
import ItemList from '../item-list/item-list'
import PersonDetails from '../person-details/person-details'
import RandomPlanet from '../random-planet/random-planet'
import './app.css'


const App = ()=>{
    return(
        <div>
            <Header/>
            <div className="main-wrapper">
            <RandomPlanet/>
            <ItemList/>
           <PersonDetails/>
        </div>
        </div>

    )
}

export default App