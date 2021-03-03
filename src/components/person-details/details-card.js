import React,{Component} from 'react';
import SwapiService from '../../services/swapi-service';
import Loader from '../loader/loader';
import '../person-details/details-card.css'

export default class DetailsCard extends Component {
  swapiService = new SwapiService();

  state = {
    details:null,
    loading:false,
    isShips:null
  }


  getId(){
    const {selectedId} = this.props
    return selectedId
  }

  componentDidMount() {
  
    this.detailsUpdate(this.getId())
  }

  componentDidUpdate(prevProps){
    if(this.props.selectedId !== prevProps.selectedId){
     
      this.detailsUpdate(this.getId())
    }
  
  }
  detailsUpdate(id){
    if(id===null){
      return ;
    }
    const {isShips,selectedId} = this.props

    if(isShips){
      this.swapiService.getShips(selectedId)
      .then((details) => {
        this.setState({
        ...details,
        loading:true,
        })
      })

    }
    if(!isShips){
    this.swapiService.getPerson(selectedId)
    .then((details) => {
      this.setState({
      ...details,
      loading:true,
      })
    })
  }
  else{
    return;
  }
  }

  render() {
     

    const {
      name,gender,birthYear,eyeColor
     } = this.state;

     const { loading } = this.state;
     if (!loading) {
       return <Loader/>
     }

    return(
  
        <div className="card item-card-wrapper">
        <img className="card-img-top img-card" src={`https://starwars-visualguide.com/assets/img/${this.state.isShips?"starships":"characters"}/${this.getId()}.jpg`} alt="character"/>
        <div className="card-body">
          <h5 className="card-title">Information</h5>
          <p className="card-text"><b>Name: </b>{name}</p>
          <p className="card-text"><b>Gender: </b>{gender}</p>
          <p className="card-text"><b>birthYear: </b>{birthYear}</p>
          <p className="card-text"><b>EyeColor: </b>{eyeColor}</p>
          <p className="card-text"><b>EyeColor: </b>{}</p>
        </div>
      </div>
    )
}


}
