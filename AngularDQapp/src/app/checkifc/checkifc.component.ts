import { Component, OnInit } from '@angular/core';
import { Ifc } from './ifc';
import { BimService } from './bimifc.service';

@Component({
    selector: 'checkifc',
    templateUrl: './checkifc.html',
    //Register BimService in this component by
    // declaring it in the providers array
    providers: [BimService]
})

//implementing the class OnInit
export class CheckifcComponent implements OnInit {
    ifcprops: Ifc[];

    selectedifcobjecttypeRadioButton: String = 'All';

    //class constructor to inject Bimservice into CheckifcComponent class
    constructor(private _Bimservice: BimService) {

    }

    //issuing the service call, ngOnInit makes a service call and fetch the data from remote server
    ngOnInit() {
        this._Bimservice.getifdetails().subscribe((ifcdata) => this.ifcprops = ifcdata); //subscribing to the Observable returned by angular Bimservice
    }

    onifcobjecttypeRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedifcobjecttypeRadioButton = selectedRadioButtonValue;
    }

    getallvaluescount(): number {
        return this.ifcprops.length;

    }

    getifctypewall(): number {
        return this.ifcprops.filter(ifcprops => ifcprops.IfcType === "IFCWall").length;

    }

    getifctypecolumn(): number {
        return this.ifcprops.filter(ifcprops => ifcprops.IfcType === "IFCColumn").length;

    }
    getifctypebeam(): number {
        return this.ifcprops.filter(ifcprops => ifcprops.IfcType === "IFCBeam").length;

    }

}
