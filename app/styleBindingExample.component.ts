import {Component} from "angular2/core"

@Component({
    selector : 'StyleBindingExample',
    template : `<button class='btn btn-primary' 
                        [class.active]="IsActive" 
                        [style.backgroundColor]="IsActive ? 'green' : 'red'" >
                    Submit
                </button>`
})
export class StyleBindingExampleComponent {
    IsActive = true; // false
}