import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'dqobjecttype',
    templateUrl: './dqobjecttype.html',

})
export class dqobjecttypeComponent {

    selectedRadioButtonValue: string = 'IFCWall';

    @Output()
    countRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();
    
    @Input()
    IfcWall: number;

    @Input()
    IfcColumn: number;

    @Input()
    IfcBeam: number;

    onRadioButtonSelectionChange() {
        this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
    }
}