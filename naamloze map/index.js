// index.js
class Farm {
  constructor(name) {
    this.name = name;
    this.crops = [];
    this.animals = [];
  }

  addCrop(crop) {
    this.crops.push(crop);
  }
  calculateIncome() {
    const incomeCrop = this.crops
      .map(crop => crop.getYieldInEuros())
      .reduce((a, b) => a + b, 0);
    const incomeAnimal = this.animals
      .map(animal => animal.getValueInEuros())
      .reduce((a, b) => a + b, 0);
    return incomeCrop + incomeAnimal;
  }
  addAnimal(animal) {
    this.animals.push(animal);
  }
}
module.exports = { Farm };
