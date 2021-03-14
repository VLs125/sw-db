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

const renderName = ({name})=><span>{name}</span>;
const renderModelAndName = ({model,name})=><span>{name}({model})</span>;


const ListWithChildren = withChildFuction(ItemList, renderName);
const PersonList = withData(ListWithChildren,getAllPeople);
const PlanetList = withData(ListWithChildren,getAllPlanets);
const StarshipList = withData(ListWithChildren,getAllShips);

export{
    PersonList,
    PlanetList,
    StarshipList
}