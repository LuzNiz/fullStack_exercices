var Electrodomestico = /** @class */ (function () {
    function Electrodomestico() {
    }
    //SET and GET of the name 
    Electrodomestico.prototype.setName = function (name) {
        this.name = name;
    };
    Electrodomestico.prototype.getName = function () {
        return this.name;
    };
    //SET and GET of the price
    Electrodomestico.prototype.setPrice = function (price) {
        this.price = price;
    };
    Electrodomestico.prototype.getPrice = function () {
        return this.price;
    };
    //SET and GET of the color
    Electrodomestico.prototype.setColor = function (color) {
        this.color = color;
    };
    Electrodomestico.prototype.getColor = function () {
        return this.color;
    };
    //SET and GET of energy consumption
    Electrodomestico.prototype.setEnergyConsumption = function (energy) {
        this.energyConsumption = energy;
    };
    Electrodomestico.prototype.getEnergyConsumption = function () {
        return this.energyConsumption;
    };
    //SET and GET of weight
    Electrodomestico.prototype.setWeight = function (weight) {
        this.weight = weight;
    };
    Electrodomestico.prototype.getWeight = function () {
        return this.weight;
    };
    //methods 
    Electrodomestico.prototype.lowConsumption = function () {
        if (this.energyConsumption < 1500) {
            return true;
        }
        else {
            return false;
        }
    };
    Electrodomestico.prototype.calcularBalance = function () {
        return this.price / this.price;
    };
    Electrodomestico.prototype.highEnd = function () {
        if (this.calcularBalance() > 3) {
            return true;
        }
        else {
            return false;
        }
    };
    return Electrodomestico;
}());
