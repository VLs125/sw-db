import React, { Component } from 'react'
import Error from '../error/error'
import Header from '../header/header'
import RandomPlanet from '../random-planet/random-planet'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './app.css'
import SwapiService from '../../services/swapi-service'
import PersonDetailsWrapper from '../person-details/person-details'
import PlanetDetailsWrapper from '../planet-details/planet-details'
import StarshipDetailsWrapper from '../starship-details/starship-details'
import Context from '../swapi-context/context';


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
        <Context.Provider value ={swapiService}>
            <Router>
                <div>
                    <Header />
                    <div className="planet-wrapper">

                        <RandomPlanet />
                        <div className="hero-wrapper">


                            <ErrorTemplate>
                                <Route path='/people' component={PersonDetailsWrapper} />
                                <Route path='/starship' component={StarshipDetailsWrapper} />
                                <Route path='/planet' component={PlanetDetailsWrapper} />
                            </ErrorTemplate>

                        </div>
                    </div>
                </div>
            </Router>
        </Context.Provider>

    )
}

export default App