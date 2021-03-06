System.register(["angular2/core", "./author.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, author_service_1, AuthorComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (author_service_1_1) {
                author_service_1 = author_service_1_1;
            }
        ],
        execute: function () {
            AuthorComponent = (function () {
                function AuthorComponent(authorService) {
                    this.authors = authorService.GetAuthors();
                }
                return AuthorComponent;
            }());
            AuthorComponent = __decorate([
                core_1.Component({
                    selector: 'authors',
                    template: "<h2>Authors</h2>\n                {{ title }}\n                <ul>\n                    <li *ngFor=\"#i of authors\">\n                        {{ i }}\n                    </li>\n                </ul>\n                ",
                    providers: [author_service_1.AuthorService]
                }),
                __metadata("design:paramtypes", [author_service_1.AuthorService])
            ], AuthorComponent);
            exports_1("AuthorComponent", AuthorComponent);
        }
    };
});
//# sourceMappingURL=author.component.js.map