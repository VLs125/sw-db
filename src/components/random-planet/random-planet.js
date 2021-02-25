import React from 'react';
import SwapiService from '../../services/swapi-service'
export default class RandomPlanet extends React.Component {
  swapiService = new SwapiService();
  state  = {
    id:null,
    name:null,
    population:null,
    rotationPeriod : null,
    diameter:null,
  }
  constructor(){
    super();
    this.updatePlanet()
  }

  updatePlanet(){
    const id = Math.floor(Math.random()*25) + 2;
    this.swapiService
    .getPlanet(id)
    .then((planet)=>{
      this.setState({
        ...planet
      })

    }) 

    

  }

  render() {
    const {id,population,rotationPeriod,diameter,name} = this.state;
    
    return(
    <div class="card">
    <img class="card-img-top" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">{name}</h5>
      <p class="card-text">Population: {population}</p>
      <p class="card-text">Rotation period: {rotationPeriod}</p>
      <p class="card-text">Diameter: {diameter}</p>
    </div>
  </div>
        
    )}
}

