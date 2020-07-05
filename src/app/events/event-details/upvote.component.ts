import { Input, Component, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'upvote',
    templateUrl: './upvote.component.html',
    styleUrls: ['./upvote.component.css']
})

export class UpvoteComponent {
    @Input() count: number;
    iconColor: string;
    // @Input() voted: boolean;
    @Input() set voted(val) {
        this.iconColor = val ? 'red' : 'white';
    }
    @Output() vote = new EventEmitter();

    onClick() {
        this.vote.emit({});
    }
}
