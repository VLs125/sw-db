import React from 'react';
import SwapiService from '../../services/swapi-service';
import DetailsCard from '../details-card/details-card';
import { withDataDetails } from '../hoc-helper'

const swapiService = new SwapiService();
const {
    getPerson,
    getPlanet,
    getShips,
    getPersonImage,
    getShipImage,
    getPlanetImage

} = swapiService

const PersonDetails =  withDataDetails(DetailsCard, getPerson, getPersonImage)
const PlanetDetails = withDataDetails(DetailsCard, getPlanet, getPlanetImage);
const StarshipDetails = withDataDetails(DetailsCard, getShips, getShipImage);

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails,
}