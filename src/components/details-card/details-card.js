import React from 'react';
import './details-card.css'

const Record = ({data,field,label})=>{
      return (<p className="card-text"><b>{label} </b>{data[field]}</p>
        )
}
export{Record} 

const DetailsCard = (props) =>   {

  const {data} = props
    return(
        <div className="card item-card-wrapper">
        <img className="card-img-top img-card" src={props.image}/>
        <div className="card-body">
          <h5 className="card-title">Information</h5>
          {
          React.Children.map(props.children, (child)=>{
            return React.cloneElement(child, {data})
          })
          
          }
        </div>
      </div>
    )
        }

export default DetailsCard
    

        
