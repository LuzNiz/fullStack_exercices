import { Phone } from "./phone";
import { PhoneWithCamera } from "./phoneWithCamera";
import { PhoneWithRadio } from "./phoneWithRadio";
import { Contact } from "./contact";

//const contacts: Contact[] = [];
const telUno = new PhoneWithCamera();
const telDos = new PhoneWithRadio();

console.log(telUno instanceof Phone);
console.log(telUno instanceof PhoneWithCamera);
console.log(telUno instanceof PhoneWithRadio);
console.log(telDos instanceof Phone);
console.log(telDos instanceof PhoneWithRadio);
console.log(telDos instanceof PhoneWithCamera);


telUno.newContact(new Contact("Luz","Niz", 2224445837));

console.log(telUno.getContacts());


telUno.sendMessage("Hola Mundo","Luz","Niz");

telUno.makeCall("Luz","Niz");
