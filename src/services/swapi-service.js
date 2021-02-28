
class SwapiService {

  async getResource(url) {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(url)
    }
    return await res.json();

  }
  async getAllPeople() {
    const allPeople = await this.getResource(`https://swapi.dev/api/people/`)
    return allPeople.results.map(this._transformPerson);

  }
  async getPerson(id) {
  
     const person = await this.getResource(`https://swapi.dev/api/people/${id}`)
      return this._transformPerson(person)
    }
  

  async getAllPlanets() {
    const allPlanets = await this.getResource(`https://swapi.dev/api/planets/`)
    return allPlanets.results.map(this._transformPlanet)

  }
  async getPlanet(id) {
    if (Number.isInteger(id)) {
      const planet = await this.getResource(`https://swapi.dev/api/planets/${id}`)
      return this._transformPlanet(planet)
    }
    else {
      return `id ${id} not a number`
    }

  }

  async getAllShips() {
    const allShips = await this.getResource(`https://swapi.dev/api/starships/`)
    return allShips.results.map(this._transformShips)

  }
  async getShips(id) {
    if (Number.isInteger(id)) {
      const starship = await this.getResource(`https://swapi.dev/api/starship/${id}`)
      return starship
    }
    else {
      return `id ${id} not a number`
    }

  }

  _transformPlanet =( planet)=> {
    return {
      id: this._getIdFromUrl(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    }

  }
  _transformShips=(starship)=>{
    return{
      id:this._getIdFromUrl(starship),
      name:starship.name,
      model:starship.model,
      manufacturer:starship.manufacturer,
      costInCredits:starship.costInCredits,
      length:starship.length,
      crew:starship.crew,
      passengers:starship.passengers,
      cargoCapacity:starship.cargoCapacity

    }
    
  }
  _transformShips=(starship)=>{
    return{
      id:this._getIdFromUrl(starship),
      name:starship.name,
      model:starship.model,
      manufacturer:starship.manufacturer,
      costInCredits:starship.costInCredits,
      length:starship.length,
      crew:starship.crew,
      passengers:starship.passengers,
      cargoCapacity:starship.cargoCapacity

    }
    
  }
  _transformPerson=(person)=>{
    return{
      id:this._getIdFromUrl(person),
      name:person.name,
      gender:person.gender,
      birthYear:person.birthYear,
      eyeColor:person.eyeColor
    }
    
  }
  _getIdFromUrl(object) {
    const expressionTemplate = /\d+/
    const planetId = object.url.match(expressionTemplate)[0]
    return planetId;
  }

}

export default SwapiService