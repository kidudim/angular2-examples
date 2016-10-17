import {Component} from 'angular2/core'
import {CourseService} from './course.service'
import {AutoGrowDirective} from './auto-grow.Directive'

@Component({
    selector : 'courses',
    template : `<h2>all courses:</h2>
                {{title}}
                <input type="text" auto-grow/>
                <ul>
                    <li *ngFor="#i of courses">
                    {{ i }}
                    </li>
                </ul>
                `,
    providers : [ CourseService ],
    directives: [AutoGrowDirective]
})
export class CoursesComponent {
    title: string = "this is the title of the courses page";
    courses : string[]; // = ['course1','course2','course3'];

    constructor( courseService : CourseService) {
        this.courses = courseService.getCourses();
    }
}