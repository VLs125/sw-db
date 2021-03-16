import React, { useState } from 'react';
import { Record } from '../details-card/details-card';
import { PlanetDetails, PlanetList } from '../sw-component';

const PlanetDetailsWrapper = () => {

    const [itemID, setItemId] = useState(null)
    const [hasError, setHasError] = useState(false)

    const onItemSelected = (id) => {

        setItemId(id);
    }
    return (
        <React.Fragment>
            <PlanetList
                onItemSelected={onItemSelected}>
            </PlanetList>

            <PlanetDetails
                selectedId={itemID}>
                <Record field='name' label='Name' />
                <Record field='population' label='Population' />
                <Record field='diameter' label='Diameter' />
            </PlanetDetails>

        </React.Fragment>
    )

}

export default PlanetDetailsWrapper