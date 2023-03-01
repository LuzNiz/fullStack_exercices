var Televisor = /** @class */ (function () {
    //CONSTRUCTOR
    function Televisor(estaPrendido, canalActual, volumenActual, marca, esSmartTV, color) {
        this.estaPrendido = estaPrendido;
        this.canalActual = canalActual;
        this.volumenActual = volumenActual;
        this.marca = marca;
        this.esSmartTV = esSmartTV;
        this.color = color;
    }
    //GETTERS AND SETTERS
    Televisor.prototype.setEstaPrendido = function (estaPrendido) {
        this.estaPrendido = estaPrendido;
    };
    Televisor.prototype.getEstaPrendido = function () {
        return this.estaPrendido;
    };
    Televisor.prototype.setcanalActual = function (canalActual) {
        this.canalActual = canalActual;
    };
    Televisor.prototype.getCanalActual = function () {
        return this.canalActual;
    };
    Televisor.prototype.setVolumenActual = function (volumenActual) {
        this.volumenActual = volumenActual;
    };
    Televisor.prototype.getVolumenActual = function () {
        return this.volumenActual;
    };
    Televisor.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Televisor.prototype.getMarca = function () {
        return this.marca;
    };
    Televisor.prototype.setEsSmartTV = function (esSmartTV) {
        this.esSmartTV = esSmartTV;
    };
    Televisor.prototype.getEsSmartTV = function () {
        return this.esSmartTV;
    };
    Televisor.prototype.setColor = function (color) {
        this.color = color;
    };
    Televisor.prototype.getColor = function () {
        return this.color;
    };
    Televisor.prototype.prenderApagar = function () {
        if (this.estaPrendido == false) {
            this.estaPrendido = true;
        }
        else {
            this.estaPrendido = false;
        }
    };
    Televisor.prototype.bajarVolumen = function () {
        if (this.volumenActual <= 100 && this.volumenActual >= 1) {
            this.volumenActual = this.volumenActual--;
        }
    };
    Televisor.prototype.subirVolumen = function () {
        if (this.volumenActual >= 0 && this.volumenActual <= 100) {
            this.volumenActual = this.volumenActual++;
        }
    };
    Televisor.prototype.bajarCanal = function () {
        if (this.canalActual <= 800 && this.canalActual > 0) {
            this.canalActual = this.canalActual--;
        }
        else if (this.canalActual <= 800 && this.canalActual > 1) {
            this.canalActual = this.canalActual++;
        }
    };
    Televisor.prototype.subirCanal = function () {
        if (this.canalActual <= 800 && this.canalActual > 1) {
            this.canalActual = this.canalActual++;
        }
    };
    return Televisor;
}());
var televisor1 = new Televisor(true, 155, 73, "Samsung", true, "Negro");
var televisor2 = new Televisor(false, 35, 50, "LG", true, "Blanco");
//console.log(televisor1);
//console.log(televisor2);
console.log(televisor1.getMarca());
televisor1.prenderApagar();
console.log(televisor1.getEstaPrendido());
console.log(televisor2.getMarca());
televisor2.prenderApagar();
console.log(televisor2.getEstaPrendido());
