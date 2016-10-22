import {
    Component, OnInit,
    Input, Output,
    EventEmitter, ViewChild, ViewChildren, ElementRef, QueryList, ContentChild, TemplateRef
} from '@angular/core';
import { TypeaheadMatch } from 'ng2-bootstrap/components/typeahead/typeahead-match.class';
import { ModalDirective } from 'ng2-bootstrap';

@Component({
    //moduleId: module.id,
    selector: 'picker',
    templateUrl: './picker.component.html',
    styleUrls: ['./picker.component.css']
})
export class PickerComponent implements OnInit {
    @Input() id: string;
    @Input() value: string = "";
    @Input() placeholder: string = "";
    @Input() datasource: any[];
    @Input() datasourceurl: string;
    @Output() valueChanged: EventEmitter<any> = new EventEmitter<any>();
    @ViewChild('lgModal') private lgModal: ModalDirective;

    constructor() { }

    ngOnInit() {
    }

    ngAfterViewInit() {
    }

    explore(): void {
        this.lgModal.show();
    }

    public typeaheadOnSelect(e: TypeaheadMatch): void {
        console.info('Selected value: ', e.value);
    }

    private onRowClick(row: any): void {
        console.log(row);
    }
}