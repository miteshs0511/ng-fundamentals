import { Component, Input } from '@angular/core';



@Component({
    selector: 'collapsible-well',
    templateUrl: './collapsible-well.component.html'
})
export class CollapsibleWellComponent {

    visible = true;

    toggleContent() {
        this.visible = !this.visible;
    }
}
