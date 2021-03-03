
class SwapiService {

  async getResource(url) {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(url)
    }
    return await res.json();

  }
   getAllPeople = async ()=>  {
    const allPeople = await this.getResource(`https://swapi.dev/api/people/`)
    return allPeople.results.map(this._transformPerson);

  }
   getPerson = async (id)=> {
     const person = await this.getResource(`https://swapi.dev/api/people/${id}`)
      return this._transformPerson(person)
    }
  

   getAllPlanets = async()=> {
    const allPlanets = await this.getResource(`https://swapi.dev/api/planets/`)
    return allPlanets.results.map(this._transformPlanet)

  }
   getPlanet=async(id)=> {
    if (Number.isInteger(id)) {
      const planet = await this.getResource(`https://swapi.dev/api/planets/${id}`)
      return this._transformPlanet(planet)
    }
    else {
      return `id ${id} not a number`
    }

  }

   getAllShips=async()=> {
    const allShips = await this.getResource(`https://swapi.dev/api/starships/`)
    return allShips.results.map(this._transformShips)

  }
   getShips = async(id) => {
    {
      const starship = await this.getResource(`https://swapi.dev/api/starships/${id}`)
      return this._transformShips(starship)

  }
}

  _transformPlanet =(planet)=> {
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
      isShips:true,
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
      isShips:false,
      id:this._getIdFromUrl(person),
      name:person.name,
      gender:person.gender,
      birthYear:person.birth_year,
      eyeColor:person.eye_color
    }
    
  }
  _getIdFromUrl(object) {
    const expressionTemplate = /\d+/
    const planetId = object.url.match(expressionTemplate)[0]
    return planetId;
  }

}

export default SwapiService