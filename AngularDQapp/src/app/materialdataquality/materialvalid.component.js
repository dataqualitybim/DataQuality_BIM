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
var MaterialvalidComponent = /** @class */ (function () {
    //class constructor to inject Bimservice into CheckifcComponent class
    function MaterialvalidComponent(_Bimservice, _router) {
        this._Bimservice = _Bimservice;
        this._router = _router;
        this.selectedifcobjecttypeRadioButton = 'IfcWall';
    }
    MaterialvalidComponent.prototype.onbackbuttonclick = function () {
        this._router.navigate(['/checkmaterial']);
    };
    //issuing the service call, ngOnInit makes a service call and fetch the data from remote server
    MaterialvalidComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._Bimservice.materialvaliddetails().subscribe(function (materialdata) { return _this.materialvalid = materialdata; }); //subscribing to the Observable returned by angular Bimservice
    };
    MaterialvalidComponent.prototype.onifcobjecttypeRadioButtonChange = function (selectedRadioButtonValue) {
        this.selectedifcobjecttypeRadioButton = selectedRadioButtonValue;
    };
    // getallvaluescount(): number {
    //   return this.ifcprops.length;
    // }
    MaterialvalidComponent.prototype.getifctypewall = function () {
        return this.materialvalid.filter(function (materialvalid) { return materialvalid.IfcType === "IFCWall"; }).length;
    };
    MaterialvalidComponent.prototype.getifctypecolumn = function () {
        return this.materialvalid.filter(function (materialvalid) { return materialvalid.IfcType === "IFCColumn"; }).length;
    };
    MaterialvalidComponent.prototype.getifctypebeam = function () {
        return this.materialvalid.filter(function (materialvalid) { return materialvalid.IfcType === "IFCBeam"; }).length;
    };
    MaterialvalidComponent = __decorate([
        core_1.Component({
            selector: 'materialvalid',
            templateUrl: './materialvalid.html',
            providers: [bimmaterial_service_1.BimService]
        })
        //implementing the class OnInit
        ,
        __metadata("design:paramtypes", [bimmaterial_service_1.BimService, router_1.Router])
    ], MaterialvalidComponent);
    return MaterialvalidComponent;
}());
exports.MaterialvalidComponent = MaterialvalidComponent;
//# sourceMappingURL=materialvalid.component.js.map