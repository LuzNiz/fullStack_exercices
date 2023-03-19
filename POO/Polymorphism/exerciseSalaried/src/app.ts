import { Salaried } from "./salaried";
import { DistributionEmployee } from "./distributionEmployee";
import { ProductionEmployee } from "./productionEmployee";

let salariedEmployee01 = new Salaried("Juan", 132412543, 30, 80000);
let ProductionEmployee01 = new ProductionEmployee("Javier", 12412441, 15, 60000, "Mañana");
let distributionEmployee01 = new DistributionEmployee("Diego", 12476142, 15, 50000, "Zona 4");

console.log(salariedEmployee01.getSalary());
console.log(ProductionEmployee01.getSalary());
console.log(distributionEmployee01.getSalary());