import React, { Component } from 'react'
import { Record } from '../details-card/details-card'
import Error from '../error/error'
import Header from '../header/header'
import RandomPlanet from '../random-planet/random-planet'
import { SwapiServiceConsumer, SwapiServiceProvider } from '../swapi-context'
import {
    PersonList,
    PlanetList,
    StarshipList,
    PersonDetails,
    PlanetDetails,
    StarshipDetails
} from '../sw-component'
import './app.css'
import SwapiService from '../../services/swapi-service'


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


export default class App extends Component {
    swapiService = new SwapiService();

    state = {
        itemId: null,
        hasError: false
    };

    onItemSelected = (id) => {
        this.setState({
            itemId: id,
        })
    }
    onSelected = (toogle) => {
        this.setState({
            tooglePlanet: toogle
        })
    }
    render() {


        return (
            <SwapiServiceProvider value={this.swapiService}>
                <div>
                    <Header />
                    <div className="planet-wrapper">

                        <RandomPlanet />
                        <div className="hero-wrapper">


                            <PersonList
                                onItemSelected={this.onItemSelected}>
                            </PersonList>

                            {/* <StarshipList
                                onItemSelected={this.onItemSelected}>
                            </StarshipList>

                            <PlanetList
                                onItemSelected={this.onItemSelected}>
                            </PlanetList> */}

                            <ErrorTemplate>
                                <PersonDetails
                                    selectedId={this.state.itemId}>
                                    <Record field='name' label='Name' />
                                    <Record field='gender' label='Gender' />
                                    <Record field='eyeColor' label='Eye Color' />
                                </PersonDetails>
{/* 
                                <PlanetDetails
                                    selectedId={this.state.itemId}>
                                    <Record field='name' label='Name' />
                                    <Record field='gender' label='Gender' />
                                    <Record field='eyeColor' label='Eye Color' />
                                </PlanetDetails> */}

                            </ErrorTemplate>

                        </div>
                    </div>
                </div>
            </SwapiServiceProvider>

        )
    }
}
