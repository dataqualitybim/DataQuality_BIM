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
var bimcosts_service_1 = require("./bimcosts.service");
var CheckcostsComponent = /** @class */ (function () {
    //class constructor to inject Bimservice into CheckcostComponent class
    function CheckcostsComponent(_Bimservice) {
        this._Bimservice = _Bimservice;
        this.selectedifcobjecttypeRadioButton = 'All';
    }
    //issuing the service call, ngOnInit makes a service call and fetch the data from remote server
    CheckcostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._Bimservice.getcostdetails().subscribe(function (costdata) { return _this.checkCost = costdata; }); //subscribing to the Observable returned by angular Bimservice
    };
    CheckcostsComponent.prototype.onifcobjecttypeRadioButtonChange = function (selectedRadioButtonValue) {
        this.selectedifcobjecttypeRadioButton = selectedRadioButtonValue;
    };
    CheckcostsComponent.prototype.getallvaluescount = function () {
        return this.checkCost.length;
    };
    CheckcostsComponent.prototype.getifctypewall = function () {
        return this.checkCost.filter(function (cost) { return cost.IfcType === "IFCWall"; }).length;
    };
    CheckcostsComponent.prototype.getifctypecolumn = function () {
        return this.checkCost.filter(function (cost) { return cost.IfcType === "IFCColumn"; }).length;
    };
    CheckcostsComponent.prototype.getifctypebeam = function () {
        return this.checkCost.filter(function (cost) { return cost.IfcType === "IFCBeam"; }).length;
    };
    CheckcostsComponent = __decorate([
        core_1.Component({
            selector: 'checkcosts',
            templateUrl: './checkcosts.html',
            providers: [bimcosts_service_1.BimService]
        }),
        __metadata("design:paramtypes", [bimcosts_service_1.BimService])
    ], CheckcostsComponent);
    return CheckcostsComponent;
}());
exports.CheckcostsComponent = CheckcostsComponent;
//# sourceMappingURL=checkcosts.component.js.map