import {
    Component, OnInit,  
    Input, Output,
    EventEmitter, ViewChild, ViewChildren, ElementRef, QueryList, ContentChild, TemplateRef
} from '@angular/core';
import { TypeaheadMatch } from 'ng2-bootstrap/components/typeahead/typeahead-match.class';

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
    @ContentChild(TemplateRef) itemTemplate;

    constructor() { }

    ngOnInit() {
        console.info(this.datasource);
        console.log(this.itemTemplate);
        // this.customItemTemplate.nativeElement.innerHTML = ``;
    }

    explore(): void {

    }

    public typeaheadOnSelect(e: TypeaheadMatch): void {
        console.info('Selected value: ', e.value);
    }
}