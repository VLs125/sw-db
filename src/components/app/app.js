import React,{Component} from 'react'
import SwapiService from '../../services/swapi-service'
import Error from '../error/error'
import Header from '../header/header'
import ItemList from '../item-list/item-list'
import DetailsCard from '../person-details/details-card'
import RandomPlanet from '../random-planet/random-planet'
import './app.css'

//Drop error for chldren props : IN PROGRESS
class ErrorTemplate extends Component {

    state= {
        hasError:false
    }

    componentDidCatch(){
        this.setState({
            hasError:true
        })
    }
    render(){
        if(this.state.hasError){
            return <Error/>

        }
        return this.props.children;
    }
}


export default class App extends Component{
    swapiService = new SwapiService();

    state = {
        itemId:null,
        isShips:true,
        hasError:false
    };
    
    onItemSelected = (id,isShips)=>{
        this.setState({
            itemId:id,
            isShips:isShips,

        })
    }
    onSelected = (toogle) =>{
        this.setState({
            tooglePlanet:toogle
        })
    }
    render(){


    return(
        <div>
            <Header/>
            <div className="planet-wrapper">

            <RandomPlanet/>
            <div className="hero-wrapper">

            <ItemList
            renderItem= {({name,gender,birthYear})=>`${name} (${gender},${birthYear})`}

            getData = {this.swapiService.getAllPeople}  
            onItemSelected={this.onItemSelected}/>

              <ItemList
           renderItem={(item)=>item.name}
           getData={this.swapiService.getAllShips}
           onItemSelected={this.onItemSelected}/>

           <ErrorTemplate>
           <DetailsCard
           isShips={this.state.isShips}
           selectedId={this.state.itemId}/>
           </ErrorTemplate>

           </div>
        </div>
        </div>

    )
}
}
