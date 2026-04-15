import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, Validator } from "@angular/forms";

@Directive({
    selector: '[appNoSpaces]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: NoSpaceDirective,
            multi: true
        }
    ]
})
export class NoSpaceDirective implements Validator
{
    validate(control: AbstractControl)
    {
        if(control.value && control.value.includes(' '))
        {
            return {noSpaces: true};
        }
        return null;
    } 
}