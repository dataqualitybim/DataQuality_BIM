import { Component, OnInit } from '@angular/core';
import { Costs } from './costs';
import { BimService } from './bimcosts.service';

@Component({
    selector: 'checkcosts',
    templateUrl: './checkcosts.html',
    providers: [BimService]
})

export class CheckcostsComponent implements OnInit {
    checkCost: Costs[];

    selectedifcobjecttypeRadioButton: String = 'All';

    //class constructor to inject Bimservice into CheckcostComponent class
    constructor(private _Bimservice: BimService) {

    }
    //issuing the service call, ngOnInit makes a service call and fetch the data from remote server
    ngOnInit() {
        this._Bimservice.getcostdetails().subscribe((costdata) => this.checkCost = costdata); //subscribing to the Observable returned by angular Bimservice
    }

    onifcobjecttypeRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedifcobjecttypeRadioButton = selectedRadioButtonValue;
    }

    getallvaluescount(): number {
        return this.checkCost.length;

    }

    getifctypewall(): number {
        return this.checkCost.filter(cost => cost.IfcType === "IFCWall").length;

    }

    getifctypecolumn(): number {
        return this.checkCost.filter(cost => cost.IfcType === "IFCColumn").length;

    }

    getifctypebeam(): number {
        return this.checkCost.filter(cost => cost.IfcType === "IFCBeam").length;

    }

}