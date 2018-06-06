import { Component, OnInit } from '@angular/core';
import { Material } from './material';
import { BimService } from './bim.service';

@Component({
    selector: 'checkmaterial',
    templateUrl: './checkmaterial.html',
    providers: [BimService]
})

export class CheckmaterialComponent implements OnInit {
    AmtofMaterial: Material[];

    selectedifcobjecttypeRadioButton: String = 'All';

    //class constructor to inject Bimservice into CheckifcComponent class
    constructor(private _Bimservice: BimService) {

    }
    //issuing the service call, ngOnInit makes a service call and fetch the data from remote server
    ngOnInit() {
        this._Bimservice.getmaterialdetails().subscribe((materialdata) => this.AmtofMaterial = materialdata); //subscribing to the Observable returned by angular Bimservice
    }

    onifcobjecttypeRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedifcobjecttypeRadioButton = selectedRadioButtonValue;
    }

    getallvaluescount(): number {
        return this.AmtofMaterial.length;

    }

    getifctypewall(): number {
        return this.AmtofMaterial.filter(AmtofMaterial => AmtofMaterial.IfcType === "IFCWall").length;

    }

    getifctypecolumn(): number {
        return this.AmtofMaterial.filter(AmtofMaterial => AmtofMaterial.IfcType === "IFCColumn").length;

    }

    getifctypebeam(): number {
        return this.AmtofMaterial.filter(AmtofMaterial => AmtofMaterial.IfcType === "IFCBeam").length;

    }

}

