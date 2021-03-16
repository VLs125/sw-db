import React, { Component ,useState } from 'react'
import { Record } from '../details-card/details-card'
import Error from '../error/error'
import Header from '../header/header'
import RandomPlanet from '../random-planet/random-planet'
import { SwapiServiceConsumer, SwapiServiceProvider } from '../swapi-context'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {
    PersonList,
    PlanetList,
    StarshipList,
    PersonDetails,
    PlanetDetails,
    StarshipDetails
} from '../sw-component/index'

import './app.css'
import SwapiService from '../../services/swapi-service'
import PersonDetailsWrapper from '../person-details/person-details'
import PlanetDetailsWrapper from '../planet-details/planet-details'
import StarshipDetailsWrapper from '../starship-details/starship-details'


//Drop error for chldren props : IN PROGRESS
class ErrorTemplate extends Component {

    state = {
        hasError: false
    }

    componentDidCatch() {
        this.setState({
            hasError: true
        })
    }
    render() {
        if (this.state.hasError) {
            return <Error />

        }
        return this.props.children;
    } s
}


 const App = () => {
   const swapiService = new SwapiService();

        return (
            <SwapiServiceProvider value={swapiService}>
                <Router>
                <div>
                    <Header />
                    <div className="planet-wrapper">

                        <RandomPlanet />
                        <div className="hero-wrapper">


                        <ErrorTemplate>
                            <Route path='/people' component={PersonDetailsWrapper}/>
                            <Route path='/starship' component={StarshipDetailsWrapper}/>
                            <Route path='/planet' component={PlanetDetailsWrapper}/>
                            </ErrorTemplate>

                        </div>
                    </div>
                </div>
                </Router>
            </SwapiServiceProvider>

        )
    }

    export default App