import React from 'react';

import {SwapiServiceConsumer} from '../swapi-context';

const withSwapiService = (Wrapped)=>{
    return (<SwapiServiceConsumer>
        {
        (swapiService)=>{
            return (<Wrapped {...this.props} swapiService = {swapiService}/>
            )
        }
        }
    </SwapiServiceConsumer>)
}

export default withSwapiService