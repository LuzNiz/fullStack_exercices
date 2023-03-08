import { Library } from "./library";
import { Partner } from "./partner";
import { Book } from "./book";

export class UtilClass{


    //AUXILIARY SEARCH METHOD


    public search(title :string):number{
        let index = Partner.books.findIndex(books => this.books.getTitle() == title);
        if(index >= 0){
            return index;
        }else {
            return -1;
        }
        
    }


    public  generateRandomString(number :number) :string {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < number; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }

    public validatePassword(password :string) :boolean{
        if(password.length < 6 && password.match(/[A-z]/) && password.match(/[A-Z]/) && password.match(/\d/) && password != "" ){
            return false;
        }else {
            return true;
        }

    }

}