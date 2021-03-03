import React, { Component } from 'react';
import './item-list.css'
import Loader from '../loader/loader';



export default class ItemList extends Component {

  state = {
    itemList: null
  }
  componentDidMount() {

    const {getData} = this.props;
       getData()
       .then((itemList) => {
        this.setState({
          itemList
        })
      })


  }

  renderItems(arr){
   return arr.map((item) => {
     const {id,isShips} = item;
    const label = this.props.renderItem(item);
      return (
        <li key={id}
        onClick={() =>this.props.onItemSelected(id,isShips) } 
        className="list-group-item list-content">
          {label}
        </li>
        
      )
    })
  }



  render() {
    const { itemList } = this.state;
    if (!itemList) {
      return <Loader />
    }
    const items = this.renderItems(itemList); 

    return (
      <ul className="list-group list-wrapper">
        {items}
      </ul>
    )
  }
}

