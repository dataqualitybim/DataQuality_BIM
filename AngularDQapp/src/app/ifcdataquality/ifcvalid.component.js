"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var bimifc_service_1 = require("./bimifc.service");
var router_1 = require("@angular/router");
var IfcvalidComponent = /** @class */ (function () {
    //class constructor to inject Bimservice into CheckifcComponent class
    function IfcvalidComponent(_Bimservice, _router) {
        this._Bimservice = _Bimservice;
        this._router = _router;
        this.selectedifcobjecttypeRadioButton = 'IfcWall';
    }
    IfcvalidComponent.prototype.onbackbuttonclick = function () {
        this._router.navigate(['/checkifc']);
    };
    //issuing the service call, ngOnInit makes a service call and fetch the data from remote server
    IfcvalidComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._Bimservice.ifcvalid().subscribe(function (ifcdata) { return _this.ifcvalid = ifcdata; }); //subscribing to the Observable returned by angular Bimservice
    };
    IfcvalidComponent.prototype.onifcobjecttypeRadioButtonChange = function (selectedRadioButtonValue) {
        this.selectedifcobjecttypeRadioButton = selectedRadioButtonValue;
    };
    // getallvaluescount(): number {
    //   return this.ifcprops.length;
    // }
    IfcvalidComponent.prototype.getifctypewall = function () {
        return this.ifcvalid.filter(function (ifcvalid) { return ifcvalid.IfcType === "IFCWall"; }).length;
    };
    IfcvalidComponent.prototype.getifctypecolumn = function () {
        return this.ifcvalid.filter(function (ifcvalid) { return ifcvalid.IfcType === "IFCColumn"; }).length;
    };
    IfcvalidComponent.prototype.getifctypebeam = function () {
        return this.ifcvalid.filter(function (ifcvalid) { return ifcvalid.IfcType === "IFCBeam"; }).length;
    };
    IfcvalidComponent = __decorate([
        core_1.Component({
            selector: 'ifcvalid',
            templateUrl: './ifcvalid.html',
            providers: [bimifc_service_1.BimService]
        })
        //implementing the class OnInit
        ,
        __metadata("design:paramtypes", [bimifc_service_1.BimService, router_1.Router])
    ], IfcvalidComponent);
    return IfcvalidComponent;
}());
exports.IfcvalidComponent = IfcvalidComponent;
//# sourceMappingURL=ifcvalid.component.js.map