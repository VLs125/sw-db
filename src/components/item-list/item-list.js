import React from 'react';
import './item-list.css'



 const ItemList = (props) => {

  const {data, onItemSelected}= props
  const items = data.map((item) => {
    const {id} = item;
    const label = item.name
     return (
       <li key={id}
       onClick={() => onItemSelected(id)} 
       className="list-group-item list-content">
         {label}
       </li>
     )
   })
  return(
    <ul >
      {items}
    </ul>
  )
 }


export default ItemList