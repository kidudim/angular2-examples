import {Component} from 'angular2/core'

@Component({
    selector : 'ClassBindingExample',
    template : '<button class="btn btn-primary" [class.active]="IsActive">Submit</button>'
})
export class ClassBindingExampleComponent {
    IsActive = true; // false
}