import { Library } from "./library";
import { Partner } from "./partner";
import { Book } from "./book";

export class UtilClass {

    //AUXILIARY SEARCH METHOD
    public validatePassword(password :string) :boolean{
        if(password.length >= 6 && password.match(/[A-z]/) && password.match(/[A-Z]/) && password.match(/\d/) && password != "" ){
            return true;
        }else {
            return false;
        }
    }

}