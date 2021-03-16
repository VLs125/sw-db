import React,{useState} from 'react';
import { Record } from '../details-card/details-card';
import { StarshipDetails, StarshipList } from '../sw-component';

const StarshipDetailsWrapper = () => {

    const [itemID, setItemId] = useState(null)
    const [hasError, setHasError] = useState(false)

    const onItemSelected = (id) => {

        setItemId(id);
    }
    return (
        <React.Fragment>
        <StarshipList
            onItemSelected={onItemSelected}>
        </StarshipList>
        <StarshipDetails
        selectedId={itemID}>
        <Record field='name' label='Name' />
        <Record field='model' label='Model' />
        <Record field='length' label='Length' />
    </StarshipDetails>
    </React.Fragment>
    )

}

export default StarshipDetailsWrapper