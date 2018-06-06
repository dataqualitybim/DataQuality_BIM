import { Component, OnInit } from '@angular/core';
import { Material } from './material';
import { BimService } from './bimmaterial.service';
import { Router } from '@angular/router';

@Component({
    selector: 'materialinvalid',
    templateUrl: './materialinvalid.html',

    providers: [BimService]
})

//implementing the class OnInit
export class MaterialInvalidComponent implements OnInit {
    materialinvalid: Material[];

    selectedifcobjecttypeRadioButton: String = 'IfcWall';

    //class constructor to inject Bimservice into CheckifcComponent class
    constructor(private _Bimservice: BimService, private _router: Router) {

    }
    onbackbuttonclick(): void {
        this._router.navigate(['/checkmaterial']);
    }

    //issuing the service call, ngOnInit makes a service call and fetch the data from remote server
    ngOnInit() {
        this._Bimservice.materialinvaliddetails().subscribe((materialdata) => this.materialinvalid = materialdata); //subscribing to the Observable returned by angular Bimservice
    }

    onifcobjecttypeRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedifcobjecttypeRadioButton = selectedRadioButtonValue;
    }

    // getallvaluescount(): number {
    //   return this.ifcprops.length;

    // }

    getifctypewall(): number {
        return this.materialinvalid.filter(materialinvalid => materialinvalid.IfcType === "IFCWall").length;

    }

    getifctypecolumn(): number {
        return this.materialinvalid.filter(materialinvalid => materialinvalid.IfcType === "IFCColumn").length;

    }

    getifctypebeam(): number {
        return this.materialinvalid.filter(materialinvalid => materialinvalid.IfcType === "IFCBeam").length;

    }

}
