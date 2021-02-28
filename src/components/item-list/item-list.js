import React, { Component } from 'react';
import './item-list.css'
import SwapiService from '../../services/swapi-service'
import Loader from '../loader/loader';



export default class ItemList extends Component {

  swapiService = new SwapiService();
  state = {
    peopleList: null
  }
  componentDidMount() {
    this.swapiService
      .getAllPeople()
      .then((peopleList) => {
        this.setState({
          peopleList
        })
      })


  }

  renderItems(arr){
   return arr.map(({id,name}) => {
      return (
        <li key={id}
        onClick={() =>this.props.onItemSelected(id) } 
        className="list-group-item list-content">
          {name}
        </li>
      )
    })
  }



  render() {
    const { peopleList } = this.state;
    if (!peopleList) {
      return <Loader />
    }
    const items = this.renderItems(peopleList); 

    return (
      <ul className="list-group list-wrapper">
        {items}
      </ul>
    )
  }
}

