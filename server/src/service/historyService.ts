import fs from "fs"
//Define a City class with name and id properties
class City{
  name: string;
  id: string;

  constructor(name: string, id: string) {
    this.name = name;
    this.id = id;
  }
}

//Complete the HistoryService class
class HistoryService {

  // TODO: Define a read method that reads from the searchHistory.json file

  // private async read() {}
private async read(){
  return await fs.readFileSync('db/db.json', {flag: 'a+', encoding: 'utf-8'});
}
  // TODO: Define a write method that writes the updated cities array to the searchHistory.json file
  
  
  // private async write(cities: City[]) {}
private async write(cities: City[]){
  return await fs .writeFileSync('db/db.json', JSON.stringify(cities, null, '\t'));
}
  // TODO: Define a getCities method that reads the cities from the searchHistory.json file and returns them as an array of City objects

  // async getCities() {}
async getCities() {
  return await this.read()
  .then(data =>{return JSON.parse(data)})
}

  // TODO Define an addCity method that adds a city to the searchHistory.json file
async addCity(city: string) {
  return await this.getCities()
  .then((cities) => {
    const newCity = new City(city, Date.now().toString());
    cities.push(newCity);
    return cities;
  })
  .then((cities) => this.write(cities))
}

  // * BONUS TODO: Define a removeCity method that removes a city from the searchHistory.json file

  // async removeCity(id: string) {}
  async romoveCity(id: string) {
    return await this.getCities()
    .then((cities) => cities.filter((city:any) => city.id !== id))
    .then((filteredCities) => this.write(filteredCities));
}
}
export default new HistoryService();
