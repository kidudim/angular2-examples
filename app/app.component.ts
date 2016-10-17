import {Component} from 'angular2/core';
import {CoursesComponent} from './course.component';
import {AuthorComponent} from './author.component';
import {ClassBindingExampleComponent} from './classBindingExample.component'
import {StyleBindingExampleComponent} from './styleBindingExample.component'

@Component({
    selector: 'my-app', 
    // template: '<h1>My First Angular 2  App - EINAT</h1><courses></courses><authors></authors>',
    // template: '<classBindingExample></classBindingExample>',
    template : '<StyleBindingExample></StyleBindingExample>',
    directives: [CoursesComponent , AuthorComponent, ClassBindingExampleComponent, StyleBindingExampleComponent]
})
export class AppComponent { }