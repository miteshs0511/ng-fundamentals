import { Input, Component, ViewChild, ElementRef, Inject } from '@angular/core';
import { $ } from 'protractor';
import { JQ_TOKEN } from './jQuery.service';


@Component({
    selector: 'simple-modal',
    templateUrl: './simple-modal.component.html',
    styleUrls: ['./simple-modal.component.css']
})

export class SimpleModalComponent {
    @Input() title: string;
    @Input() elementId: string;
    @ViewChild('modalContainer') containerEl: ElementRef;
    @Input() closeOnBodyClick: string;
    constructor(@Inject(JQ_TOKEN) private $: any) {}

    closeModal() {
        if (this.closeOnBodyClick.toLocaleLowerCase() === 'true') {
        this.$(this.containerEl.nativeElement).modal('hide');
        }
    }

}
