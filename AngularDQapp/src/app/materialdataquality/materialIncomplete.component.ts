import { Component, OnInit } from '@angular/core';
import { Material } from './material';
import { BimService } from './bimmaterial.service';
import { Router } from '@angular/router';

@Component({
    selector: 'materialincomplete',
    templateUrl: './materialincomplete.html',

    providers: [BimService]
})

//implementing the class OnInit
export class MaterialIncompleteComponent implements OnInit {
    materialincomplete: Material[];

    selectedifcobjecttypeRadioButton: String = 'IfcWall';

    //class constructor to inject Bimservice into CheckifcComponent class
    constructor(private _Bimservice: BimService, private _router: Router) {

    }

    onbackbuttonclick(): void {
        this._router.navigate(['/checkmaterial']);
    }

    //issuing the service call, ngOnInit makes a service call and fetch the data from remote server
    ngOnInit() {
        this._Bimservice.materialincompletedetails().subscribe((materialdata) => this.materialincomplete = materialdata); //subscribing to the Observable returned by angular Bimservice
    }

    onifcobjecttypeRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedifcobjecttypeRadioButton = selectedRadioButtonValue;
    }

    // getallvaluescount(): number {
    //   return this.ifcprops.length;

    // }

    getifctypewall(): number {
        return this.materialincomplete.filter(materialincomplete => materialincomplete.IfcType === "IFCWall").length;

    }

    getifctypecolumn(): number {
        return this.materialincomplete.filter(materialincomplete => materialincomplete.IfcType === "IFCColumn").length;

    }
    getifctypebeam(): number {
        return this.materialincomplete.filter(materialincomplete => materialincomplete.IfcType === "IFCBeam").length;

    }

}
