import React, { useContext } from 'react';
import Context from '../swapi-context/swapi-service-context';


const withSwapiService = (Wrapped)=>{
    return (<Context.Consumer>
        {
        (swapiService)=>{
            return (<Wrapped {...this.props} swapiService = {swapiService}/>
            )
        }
        }
    </Context.Consumer>)
}

export default withSwapiService