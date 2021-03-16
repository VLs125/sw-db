import React,{useContext} from 'react';
import SwapiService from '../../services/swapi-service';
import DetailsCard from '../details-card/details-card';
import { WithDataDetails } from '../hoc-helper'
import Context from '../swapi-context/context';
const swapiService = new SwapiService();
const {
    getPerson,
    getPlanet,
    getShips,
    getPersonImage,
    getShipImage,
    getPlanetImage

} = swapiService

const PersonDetails =  WithDataDetails(DetailsCard,getPerson,getPersonImage)
const PlanetDetails = WithDataDetails(DetailsCard,getPlanet,getPlanetImage);
const StarshipDetails = WithDataDetails(DetailsCard,getShips,getShipImage);

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails,
}