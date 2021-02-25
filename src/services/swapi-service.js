
class SwapiService {

    async getResource(url){
      const res = await fetch(url);
  
      if(!res.ok){
      throw new Error (url)
      }
      return await res.json();
      
    }
    async getAllPeople(){
    const res = await this.getResource(`https://swapi.dev/api/people/`)
    return res.results;
  
    }
    getPerson(id){
      if(Number.isInteger(id)){
      return this.getResource(`https://swapi.dev/api/people/${id}`)
    }
    else {
      return `id ${id} not a number`
    }
  
    }
  
    async getAllPlanets(){
      const res = await this.getResource(`https://swapi.dev/api/planets/`)
      return res.results.map(this._transformPlanet)
    
      }
     async getPlanet(id){
        if(Number.isInteger(id)){
        const planet = await this.getResource(`https://swapi.dev/api/planets/${id}`)
        return this._transformPlanet(planet)
      }
      else {
        return `id ${id} not a number`
      }
    
      }
  
      async getAllShips(){
        const res = await this.getResource(`https://swapi.dev/api/starships/`)
        return res.results;
      
        }
       async getShips(id){
          if(Number.isInteger(id)){
          const starship = await this.getResource(`https://swapi.dev/api/starship/${id}`)
          return starship
        }
        else {
          return `id ${id} not a number`
        }
      
        }

        _transformPlanet (planet) {
          return{
              id:this._getIdFromUrl(planet),
              name : planet.name,
              population:planet.population,
              rotationPeriod:planet.rotation_period,
              diameter:planet.diameter
            }
  }
  _getIdFromUrl(planet){
     const expressionTemplate = /\d+/
      const planetId = planet.url.match(expressionTemplate)[0]
     return planetId;
  }
  _transformShips(ship){
    
  }
}

  export default SwapiService