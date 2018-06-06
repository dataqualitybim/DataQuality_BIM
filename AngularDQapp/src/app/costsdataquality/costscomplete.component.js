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
var router_1 = require("@angular/router");
var costscompleteComponent = /** @class */ (function () {
    //class constructor to inject Bimservice into CheckcostComponent class
    function costscompleteComponent(_Bimservice, _router) {
        this._Bimservice = _Bimservice;
        this._router = _router;
        this.selectedifcobjecttypeRadioButton = 'All';
    }
    costscompleteComponent.prototype.onbackbuttonclick = function () {
        this._router.navigate(['/checkcosts']);
    };
    //issuing the service call, ngOnInit makes a service call and fetch the data from remote server
    costscompleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._Bimservice.costscompletedetails().subscribe(function (costdata) { return _this.costscomplete = costdata; }); //subscribing to the Observable returned by angular Bimservice
    };
    costscompleteComponent.prototype.onifcobjecttypeRadioButtonChange = function (selectedRadioButtonValue) {
        this.selectedifcobjecttypeRadioButton = selectedRadioButtonValue;
    };
    costscompleteComponent.prototype.getifctypewall = function () {
        return this.costscomplete.filter(function (cost) { return cost.IfcType === "IFCWall"; }).length;
    };
    costscompleteComponent.prototype.getifctypecolumn = function () {
        return this.costscomplete.filter(function (cost) { return cost.IfcType === "IFCColumn"; }).length;
    };
    costscompleteComponent.prototype.getifctypebeam = function () {
        return this.costscomplete.filter(function (cost) { return cost.IfcType === "IFCBeam"; }).length;
    };
    costscompleteComponent = __decorate([
        core_1.Component({
            selector: 'costscomplete',
            templateUrl: './costscomplete.html',
            providers: [bimcosts_service_1.BimService]
        }),
        __metadata("design:paramtypes", [bimcosts_service_1.BimService, router_1.Router])
    ], costscompleteComponent);
    return costscompleteComponent;
}());
exports.costscompleteComponent = costscompleteComponent;
//# sourceMappingURL=costscomplete.component.js.map