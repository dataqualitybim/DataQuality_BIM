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
var IfcappropriateComponent = /** @class */ (function () {
    //class constructor to inject Bimservice into Checkif Component class
    function IfcappropriateComponent(_Bimservice, _router) {
        this._Bimservice = _Bimservice;
        this._router = _router;
        this.selectedifcobjecttypeRadioButton = 'IfcWall';
    }
    IfcappropriateComponent.prototype.onbackbuttonclick = function () {
        this._router.navigate(['/checkifc']);
    };
    //issuing the service call, ngOnInit makes a service call and fetch the data from remote server
    IfcappropriateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._Bimservice.ifcappropriate().subscribe(function (ifcdata) { return _this.ifcappropriate = ifcdata; }); //subscribing to the Observable returned by angular Bimservice
    };
    IfcappropriateComponent.prototype.onifcobjecttypeRadioButtonChange = function (selectedRadioButtonValue) {
        this.selectedifcobjecttypeRadioButton = selectedRadioButtonValue;
    };
    // getallvaluescount(): number {
    //   return this.ifcprops.length;
    // }
    IfcappropriateComponent.prototype.getifctypewall = function () {
        return this.ifcappropriate.filter(function (ifcappropriate) { return ifcappropriate.IfcType === "IFCWall"; }).length;
    };
    IfcappropriateComponent.prototype.getifctypecolumn = function () {
        return this.ifcappropriate.filter(function (ifcappropriate) { return ifcappropriate.IfcType === "IFCColumn"; }).length;
    };
    IfcappropriateComponent.prototype.getifctypebeam = function () {
        return this.ifcappropriate.filter(function (ifcappropriate) { return ifcappropriate.IfcType === "IFCBeam"; }).length;
    };
    IfcappropriateComponent = __decorate([
        core_1.Component({
            selector: 'ifcappropriate',
            templateUrl: './ifcappropriate.html',
            providers: [bimifc_service_1.BimService]
        })
        //implementing the class OnInit
        ,
        __metadata("design:paramtypes", [bimifc_service_1.BimService, router_1.Router])
    ], IfcappropriateComponent);
    return IfcappropriateComponent;
}());
exports.IfcappropriateComponent = IfcappropriateComponent;
//# sourceMappingURL=ifcappropriate.component.js.map