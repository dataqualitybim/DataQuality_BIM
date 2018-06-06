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
var bim_service_1 = require("./bim.service");
var CheckmaterialComponent = /** @class */ (function () {
    //class constructor to inject Bimservice into CheckifcComponent class
    function CheckmaterialComponent(_Bimservice) {
        this._Bimservice = _Bimservice;
        this.selectedifcobjecttypeRadioButton = 'All';
    }
    //issuing the service call, ngOnInit makes a service call and fetch the data from remote server
    CheckmaterialComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._Bimservice.getmaterialdetails().subscribe(function (materialdata) { return _this.AmtofMaterial = materialdata; }); //subscribing to the Observable returned by angular Bimservice
    };
    CheckmaterialComponent.prototype.onifcobjecttypeRadioButtonChange = function (selectedRadioButtonValue) {
        this.selectedifcobjecttypeRadioButton = selectedRadioButtonValue;
    };
    CheckmaterialComponent.prototype.getallvaluescount = function () {
        return this.AmtofMaterial.length;
    };
    CheckmaterialComponent.prototype.getifctypewall = function () {
        return this.AmtofMaterial.filter(function (AmtofMaterial) { return AmtofMaterial.IfcType === "IFCWall"; }).length;
    };
    CheckmaterialComponent.prototype.getifctypecolumn = function () {
        return this.AmtofMaterial.filter(function (AmtofMaterial) { return AmtofMaterial.IfcType === "IFCColumn"; }).length;
    };
    CheckmaterialComponent.prototype.getifctypebeam = function () {
        return this.AmtofMaterial.filter(function (AmtofMaterial) { return AmtofMaterial.IfcType === "IFCBeam"; }).length;
    };
    CheckmaterialComponent = __decorate([
        core_1.Component({
            selector: 'checkmaterial',
            templateUrl: './checkmaterial.html',
            providers: [bim_service_1.BimService]
        }),
        __metadata("design:paramtypes", [bim_service_1.BimService])
    ], CheckmaterialComponent);
    return CheckmaterialComponent;
}());
exports.CheckmaterialComponent = CheckmaterialComponent;
//# sourceMappingURL=checkmaterial.component.js.map