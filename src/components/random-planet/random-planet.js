import React from 'react';
import SwapiService from '../../services/swapi-service'
import Loader from '../loader/loader';
import './random-planet.css'
export default class RandomPlanet extends React.Component {
  swapiService = new SwapiService();
  state  = {
    planet:null,
    loading:true,
    error:false,
    togglePlanet:false

  }
  componentDidMount() {
    this.updatePlanet()
  }

  onPlanetLoaded =(planet) =>{
    this.setState({
      planet,
      loading:false,
      
    })
  }

  onError = (err)=>{
   this.setState({
     loading:false,
     error:true
   })
  }

  updatePlanet=()=>{
    const id = Math.floor(Math.random()*17) + 2;
    this.swapiService
    .getPlanet(id)
    .then(this.onPlanetLoaded)
    .catch(this.onError)
    .then();

    }
    onToggleButtonClick = ()=>{
      this.setState({
        togglePlanet:!this.state.togglePlanet
      })
      if(this.state.togglePlanet){
        this.updatePlanet()
      }

    }


  

  render() {
    const { planet,loading,error,togglePlanet} = this.state;
    const hasData = !(loading||error) && !togglePlanet
    const errorMessage = error ? <div>Sorry something wrong</div>:null;
    const loader = loading ? <Loader/> : null;
    const content = hasData ? <PlanetView planet ={planet}/> : null;


    return(
    <div className="card card-wrapper">
      {errorMessage}
      {loader}
      {content}
      <button  type="button" className="btn btn-warning custom-button" onClick={this.onToggleButtonClick} >Toggle planet</button>
      </div>

  

        
    )}
}

const PlanetView = ({planet})=>{
  const { id,population,rotationPeriod,diameter,name} = planet;
  return (
    <React.Fragment>
    <img className="card-img-top img-content" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">Population: {population}</p>
      <p className="card-text">Rotation period: {rotationPeriod}</p>
      <p className="card-text">Diameter: {diameter}</p>
      
    </div>

    </React.Fragment>
  )

}