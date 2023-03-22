import { iPhone } from "./iPhone";
import { SmartPhone } from "./smartphone";

let tel01 = new SmartPhone();

tel01.on();
console.log(tel01.getIsOn());
tel01.call("2224445837");
tel01.takePhoto();
tel01.off();
console.log(tel01.getIsOn());
