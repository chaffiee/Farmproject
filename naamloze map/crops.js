// ...to the top
class Crop {
  constructor(acres) {
    this.acres = acres;
  }
  getYieldInEuros() {
    return this.price * this.getYieldInKg();
  }
  getCosts() {
    return this.acres * this.costs;
  }
}

// ...to the bottom

class Wheat extends Crop {
  constructor(...args) {
    super(...args);
    this.price = 1.5;
    this.costs = 340;
  }

  getYieldInKg() {
    return Math.pow(this.acres * 1.5, 1.3);
  }
}
class Sugarcane extends Crop {
  constructor(...args) {
    super(...args);
    this.price = 2.0;
    this.costs = 166;
  }

  getYieldInKg() {
    return Math.pow(this.acres * 2.6, 1.1);
  }
}
module.exports = { Crop, Wheat, Sugarcane };
