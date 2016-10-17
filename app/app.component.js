System.register(["angular2/core", "./course.component", "./author.component", "./classBindingExample.component", "./styleBindingExample.component"], function (exports_1, context_1) {
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
    var core_1, course_component_1, author_component_1, classBindingExample_component_1, styleBindingExample_component_1, AppComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (course_component_1_1) {
                course_component_1 = course_component_1_1;
            },
            function (author_component_1_1) {
                author_component_1 = author_component_1_1;
            },
            function (classBindingExample_component_1_1) {
                classBindingExample_component_1 = classBindingExample_component_1_1;
            },
            function (styleBindingExample_component_1_1) {
                styleBindingExample_component_1 = styleBindingExample_component_1_1;
            }
        ],
        execute: function () {
            AppComponent = (function () {
                function AppComponent() {
                }
                return AppComponent;
            }());
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'my-app',
                    // template: '<h1>My First Angular 2  App - EINAT</h1><courses></courses><authors></authors>',
                    // template: '<classBindingExample></classBindingExample>',
                    template: '<StyleBindingExample></StyleBindingExample>',
                    directives: [course_component_1.CoursesComponent, author_component_1.AuthorComponent, classBindingExample_component_1.ClassBindingExampleComponent, styleBindingExample_component_1.StyleBindingExampleComponent]
                }),
                __metadata("design:paramtypes", [])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    };
});
//# sourceMappingURL=app.component.js.map