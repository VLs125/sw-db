import React,{Component} from 'react'
import Header from '../header/header'
import ItemList from '../item-list/item-list'
import PersonDetails from '../person-details/person-details'
import RandomPlanet from '../random-planet/random-planet'
import './app.css'


export default class App extends Component{

    state = {
        selectedPerson:null

    };
    onPersonSelected = (id)=>{
        this.setState({
            selectedPerson:id

        })
    }

    render(){
    return(
        <div>
            <Header/>
            <div className="planet-wrapper">
            <RandomPlanet/>
            <div className="hero-wrapper">
            <ItemList  onItemSelected={this.onPersonSelected}/>
           <PersonDetails selectedId={this.state.selectedPerson}/>
           </div>
        </div>
        </div>

    )
}
}
