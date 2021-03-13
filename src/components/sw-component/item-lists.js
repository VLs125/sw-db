import React from 'react';
import SwapiService from '../../services/swapi-service';
import {withData} from '../hoc-helper'
import ItemList from '../item-list/item-list';

const swapiService = new SwapiService();
const {
    getAllPeople,
    getAllShips,
    getAllPlanets
} = swapiService;

const withChildFuction = (Wrapped, fn)=>{
return (props)=>{
return(<Wrapped {...props}>
    {fn}
    </Wrapped>)
}
}
const PersonList = withData(ItemList,getAllPeople);
const PlanetList = withData(ItemList,getAllPlanets);
const StarshipList = withData(ItemList,getAllShips);

export{

    PersonList,
    PlanetList,
    StarshipList

}