import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';

@Directive({
    selector: '[modalTrigger]'
})

export class ModalTriggerDirective implements OnInit {
    private elementHtml: HTMLElement;
    @Input('modalTrigger') modalId: string;

    constructor(
        @Inject(JQ_TOKEN) private $: any,
        elementRef: ElementRef
    ) {
        this.elementHtml = elementRef.nativeElement;
    }

    ngOnInit() {
        this.elementHtml.addEventListener('click', event => {
            this.$(`#${this.modalId}`).modal({});
        });

    }
}
