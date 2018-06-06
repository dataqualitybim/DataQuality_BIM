import { Component, OnInit } from '@angular/core';
import { Material } from './material';
import { BimService } from './bimmaterial.service';
import { Router } from '@angular/router';

@Component({
    selector: 'materialinappropriate',
    templateUrl: './materialinappropriate.html',

    providers: [BimService]
})

//implementing the class OnInit
export class MaterialInappropriateComponent implements OnInit {
    materialinappropriate: Material[];

    selectedifcobjecttypeRadioButton: String = 'IfcWall';

    //class constructor to inject Bimservice into CheckifcComponent class
    constructor(private _Bimservice: BimService, private _router: Router) {

    }
    onbackbuttonclick(): void {
        this._router.navigate(['/checkmaterial']);
    }

    //issuing the service call, ngOnInit makes a service call and fetch the data from remote server
    ngOnInit() {
        this._Bimservice.materialinappropriatedetails().subscribe((materialdata) => this.materialinappropriate = materialdata); //subscribing to the Observable returned by angular Bimservice
    }

    onifcobjecttypeRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedifcobjecttypeRadioButton = selectedRadioButtonValue;
    }

    // getallvaluescount(): number {
    //   return this.ifcprops.length;

    // }

    getifctypewall(): number {
        return this.materialinappropriate.filter(materialinappropriate => materialinappropriate.IfcType === "IFCWall").length;

    }
    getifctypecolumn(): number {
        return this.materialinappropriate.filter(materialinappropriate => materialinappropriate.IfcType === "IFCColumn").length;

    }

    getifctypebeam(): number {
        return this.materialinappropriate.filter(materialinappropriate => materialinappropriate.IfcType === "IFCBeam").length;

    }

}
