import { Component, OnInit } from '@angular/core';
import { Material } from './material';
import { BimService } from './bimmaterial.service';
import { Router } from '@angular/router';

@Component({
    selector: 'materialcomplete',
    templateUrl: './materialcomplete.html',

    providers: [BimService]
})

//implementing the class OnInit
export class MaterialcompleteComponent implements OnInit {
    materialcomplete: Material[];

    selectedifcobjecttypeRadioButton: String = 'IfcWall';

    //class constructor to inject Bimservice into CheckifcComponent class
    constructor(private _Bimservice: BimService, private _router: Router) {

    }

    onbackbuttonclick(): void {
        this._router.navigate(['/checkmaterial']);
    }

    //issuing the service call, ngOnInit makes a service call and fetch the data from remote server
    ngOnInit() {
        this._Bimservice.materialcompletedetails().subscribe((materialdata) => this.materialcomplete = materialdata); //subscribing to the Observable returned by angular Bimservice
    }

    onifcobjecttypeRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedifcobjecttypeRadioButton = selectedRadioButtonValue;
    }

   // getallvaluescount(): number {
     //   return this.ifcprops.length;

   // }

    getifctypewall(): number {
        return this.materialcomplete.filter(materialcomplete => materialcomplete.IfcType === "IFCWall").length;

    }

    getifctypecolumn(): number {
        return this.materialcomplete.filter(materialcomplete => materialcomplete.IfcType === "IFCColumn").length;

    }

    getifctypebeam(): number {
        return this.materialcomplete.filter(materialcomplete => materialcomplete.IfcType === "IFCBeam").length;

    }

}
