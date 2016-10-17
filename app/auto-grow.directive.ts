import {Directive, ElementRef, Renderer} from 'angular2/core'

@Directive({
    selector : '[auto-grow]',
    host : {
        '(focus)' : 'OnFocus()',
        '(blur)' : 'OnBlur()'
    }

})
export class AutoGrowDirective {
    constructor( private el: ElementRef, private renderer : Renderer) {

    }

    OnFocus(){
        this.renderer.setElementStyle(this.el.nativeElement,'width','200');
    }

    OnBlur(){

        this.renderer.setElementStyle(this.el.nativeElement,'width','120');
    }
}