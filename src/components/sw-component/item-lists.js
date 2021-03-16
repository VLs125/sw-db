import React from 'react';
import SwapiService from '../../services/swapi-service';
import {WithDataList} from '../hoc-helper'
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
const PersonList = WithDataList(ListWithChildren,getAllPeople);
const PlanetList = WithDataList(ListWithChildren,getAllPlanets);
const StarshipList = WithDataList(ListWithChildren,getAllShips);

export{
    PersonList,
    PlanetList,
    StarshipList
}