import {Component} from 'angular2/core'
import {AuthorService} from './author.service'

@Component( {
    selector : 'authors',
    template : `<h2>Authors</h2>
                {{ title }}
                <ul>
                    <li *ngFor="#i of authors">
                        {{ i }}
                    </li>
                </ul>
                `,
    providers : [ AuthorService]
})
export class AuthorComponent {

    authors : string[] ;

    constructor (authorService : AuthorService) {
        this.authors = authorService.GetAuthors();
    }
}