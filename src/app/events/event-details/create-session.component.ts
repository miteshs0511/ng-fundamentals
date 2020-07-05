import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { ISession } from '../shared/event.model';
import { restrictedWords } from '../shared/restricted-words.validators';



@Component({
    selector: 'create-session',
    templateUrl: './create-session.component.html',
    styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {

    newSessionForm: FormGroup;
    name: FormControl;
    presenter: FormControl;
    duration: FormControl;
    level: FormControl;
    abstract: FormControl;

    @Output() saveNewSession = new EventEmitter();
    @Output() cancelAddSession = new EventEmitter();

    constructor() {

    }

    ngOnInit() {
        this.name = new FormControl('', Validators.required);
        this.presenter = new FormControl('', Validators.required);
        this.duration = new FormControl('', Validators.required);
        this.level = new FormControl('', Validators.required);
        this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400),
            restrictedWords(['foo', 'bar'])]);


        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        });
    }

    // private restrictedWords(words){
    //     return (control: FormControl): {[key:string]:any} => {
    //         if(!words)
    //             return null

    //         var invalidWords = words.map(w=> control.value.includes(w) ? w : null)
    //                                 .filter(w => w!= null)

    //         return invalidWords && invalidWords.length > 0
    //          ? {'restrictedWords': invalidWords} : null
    //     }
    // }

    saveEvent(formValues) {
        const session: ISession = {
            id: undefined,
            name: formValues.name,
            presenter: formValues.presenter,
            duration: +formValues.duration,
            level: formValues.level,
            abstract: formValues.abstract,
            voters: []
        };
        // console.log(session);
        // console.log(formValues);
        this.saveNewSession.emit(session);

    }

    cancel() {
        this.cancelAddSession.emit();
    }
}
