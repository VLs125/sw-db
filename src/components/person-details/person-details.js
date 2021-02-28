import React,{Component} from 'react';
import SwapiService from '../../services/swapi-service';
import '../person-details/person-details.css'

export default class PersonDetails extends Component {
  swapiService = new SwapiService();

  state = {
    person:null
  }


  getId(){
    const {selectedId} = this.props
    return selectedId
  }

  componentDidMount() {
    this.personUpdate(this.getId())
  }
  componentDidUpdate(prevProps){
    if(this.props.selectedId !== prevProps.selectedId){
      this.personUpdate(this.getId())
    }
  
  }

  personUpdate(id){
    if(id===null){
      return ;
    }
    this.swapiService
    .getPerson(id)
    .then((person) => {
      this.setState({
      ...person
      })
    })
  }

  render() {
    const {
      id,name,gender,birthYear,eyeColor
     } = this.state;

    return(
        <div className="card item-card-wrapper">
        <img className="card-img-top img-card" src={`https://starwars-visualguide.com/assets/img/characters/${this.getId()}.jpg`} alt="character"/>
        <div className="card-body">
          <h5 className="card-title">Information</h5>
          <p className="card-text">{name}</p>
          <p className="card-text">{gender}</p>
          <p className="card-text">{birthYear}</p>
          <p className="card-text">{eyeColor}</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    )
}


}
