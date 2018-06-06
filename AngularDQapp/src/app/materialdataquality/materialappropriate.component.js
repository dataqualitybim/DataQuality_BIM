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
var bimmaterial_service_1 = require("./bimmaterial.service");
var router_1 = require("@angular/router");
var MaterialappropriateComponent = /** @class */ (function () {
    //class constructor to inject Bimservice into CheckifcComponent class
    function MaterialappropriateComponent(_Bimservice, _router) {
        this._Bimservice = _Bimservice;
        this._router = _router;
        this.selectedifcobjecttypeRadioButton = 'IfcWall';
    }
    MaterialappropriateComponent.prototype.onbackbuttonclick = function () {
        this._router.navigate(['/checkmaterial']);
    };
    //issuing the service call, ngOnInit makes a service call and fetch the data from remote server
    MaterialappropriateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._Bimservice.materialappropriatedetails().subscribe(function (materialdata) { return _this.materialappropriate = materialdata; }); //subscribing to the Observable returned by angular Bimservice
    };
    MaterialappropriateComponent.prototype.onifcobjecttypeRadioButtonChange = function (selectedRadioButtonValue) {
        this.selectedifcobjecttypeRadioButton = selectedRadioButtonValue;
    };
    // getallvaluescount(): number {
    //   return this.ifcprops.length;
    // }
    MaterialappropriateComponent.prototype.getifctypewall = function () {
        return this.materialappropriate.filter(function (materialappropriate) { return materialappropriate.IfcType === "IFCWall"; }).length;
    };
    MaterialappropriateComponent.prototype.getifctypecolumn = function () {
        return this.materialappropriate.filter(function (materialappropriate) { return materialappropriate.IfcType === "IFCColumn"; }).length;
    };
    MaterialappropriateComponent.prototype.getifctypebeam = function () {
        return this.materialappropriate.filter(function (materialappropriate) { return materialappropriate.IfcType === "IFCBeam"; }).length;
    };
    MaterialappropriateComponent = __decorate([
        core_1.Component({
            selector: 'materialappropriate',
            templateUrl: './materialappropriate.html',
            providers: [bimmaterial_service_1.BimService]
        })
        //implementing the class OnInit
        ,
        __metadata("design:paramtypes", [bimmaterial_service_1.BimService, router_1.Router])
    ], MaterialappropriateComponent);
    return MaterialappropriateComponent;
}());
exports.MaterialappropriateComponent = MaterialappropriateComponent;
//# sourceMappingURL=materialappropriate.component.js.map