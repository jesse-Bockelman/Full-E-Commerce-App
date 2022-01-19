import { AbstractControl, ControlContainer, FormControl, ValidationErrors, Validator, ValidatorFn } from "@angular/forms";

export class Luv2ShopValidators{

    storage:Storage = sessionStorage;

    //whitespace validation
    static notOnlyWhitespace(control: FormControl) :ValidationErrors
    {
        //check if string only contains whitespace
        if((control.value != null) && (control.value.trim().length ===0))
        {
            //invalid, return error object
            return {'notOnlyWhitespace':true};
        }else{
            //valid, return null
            return null;
        }
    }

    static differentEmailInputted(theEmail:string): ValidatorFn
    {
        
        return( control: AbstractControl):{[key:string]: boolean} |null=>{
            /* console.log("[Luv2ShopValidator.differentEmailInputted]: found email inputted = "+ control.value +" and localStorage Data = "+theEmail);
            console.log("validating logic: ") */
            return (control.value.trim() !== null && control.value.trim() !== theEmail) ? {"differentEmailInputted":true} :null;
        };
    }
}
