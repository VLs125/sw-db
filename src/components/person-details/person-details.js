import React, { Fragment,useState } from 'react';
import { Record } from '../details-card/details-card';
import { PersonDetails, PersonList } from '../sw-component';

const PersonDetailsWrapper = () => {

    const [itemID, setItemId] = useState(null)
    const [hasError, setHasError] = useState(false)

    const onItemSelected = (id) => {

        setItemId(id);
    }
    return (
        <React.Fragment>
            <PersonList
                onItemSelected={onItemSelected}>
            </PersonList>
            <PersonDetails
                selectedId={itemID}>
                <Record field='name' label='Name' />
                <Record field='gender' label='Gender' />
                <Record field='eyeColor' label='Eye Color' />
            </PersonDetails>

        </React.Fragment>

    )

}

export default PersonDetailsWrapper