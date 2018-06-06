import { Component, OnInit } from '@angular/core';
import { Costs } from './costs';
import { BimService } from './bimcosts.service';
import { Router } from '@angular/router';

@Component({
    selector: 'costsinvalid',
    templateUrl: './costsinvalid.html',
    providers: [BimService]
})

export class costsInvalidComponent implements OnInit {
    costsinvalid: Costs[];

    selectedifcobjecttypeRadioButton: String = 'All';

    //class constructor to inject Bimservice into CheckcostComponent class
    constructor(private _Bimservice: BimService, private _router: Router) {

    }
    onbackbuttonclick(): void {
        this._router.navigate(['/checkcosts']);
    }

    //issuing the service call, ngOnInit makes a service call and fetch the data from remote server
    ngOnInit() {
        this._Bimservice.costsinvaliddetails().subscribe((costdata) => this.costsinvalid = costdata); //subscribing to the Observable returned by angular Bimservice
    }

    onifcobjecttypeRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedifcobjecttypeRadioButton = selectedRadioButtonValue;
    }

   
    getifctypewall(): number {
        return this.costsinvalid.filter(cost => cost.IfcType === "IFCWall").length;

    }

    getifctypecolumn(): number {
        return this.costsinvalid.filter(cost => cost.IfcType === "IFCColumn").length;

    }

    getifctypebeam(): number {
        return this.costsinvalid.filter(cost => cost.IfcType === "IFCBeam").length;

    }

}