import { Component, OnInit } from '@angular/core';
import { Ifc } from './ifc';
import { BimService } from './bimifc.service';
import { Router } from '@angular/router';

@Component({
    selector: 'ifcincomplete',
    templateUrl: './ifcincomplete.html',

    providers: [BimService]
})

//implementing the class OnInit
export class IfcincompleteComponent implements OnInit {
    ifcincomplete: Ifc[];

    selectedifcobjecttypeRadioButton: String = 'IfcWall';

    //class constructor to inject Bimservice into CheckifcComponent class
    constructor(private _Bimservice: BimService, private _router: Router) {

    }

    onbackbuttonclick(): void {
        this._router.navigate(['/checkifc']);
    }

    //issuing the service call, ngOnInit makes a service call and fetch the data from remote server
    ngOnInit() {
        this._Bimservice.ifcincompletedetails().subscribe((ifcdata) => this.ifcincomplete = ifcdata); //subscribing to the Observable returned by angular Bimservice
    }

    onifcobjecttypeRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedifcobjecttypeRadioButton = selectedRadioButtonValue;
    }

    // getallvaluescount(): number {
    //   return this.ifcprops.length;

    // }

    getifctypewall(): number {
        return this.ifcincomplete.filter(ifcincomplete => ifcincomplete.IfcType === "IFCWall").length;

    }

    getifctypecolumn(): number {
        return this.ifcincomplete.filter(ifcincomplete => ifcincomplete.IfcType === "IFCColumn").length;

    }

    getifctypebeam(): number {
        return this.ifcincomplete.filter(ifcincomplete => ifcincomplete.IfcType === "IFCBeam").length;

    }

}
