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
var CheckifcdqComponent = /** @class */ (function () {
    //class constructor to inject Bimservice into CheckifcComponent class
    function CheckifcdqComponent(_Bimservice) {
        this._Bimservice = _Bimservice;
        this.selectedifcobjecttypeRadioButton = 'Ifcwall';
    }
    //issuing the service call, ngOnInit makes a service call and fetch the data from remote server
    CheckifcdqComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._Bimservice.getifdetails().subscribe(function (ifcdata) { return _this.ifcprops = ifcdata; }); //subscribing to the Observable returned by angular Bimservice
    };
    CheckifcdqComponent.prototype.onifcobjecttypeRadioButtonChange = function (selectedRadioButtonValue) {
        this.selectedifcobjecttypeRadioButton = selectedRadioButtonValue;
    };
    CheckifcdqComponent = __decorate([
        core_1.Component({
            selector: 'checkifcdq',
            templateUrl: './checkifc.html',
        }),
        __metadata("design:paramtypes", [bimifc_service_1.BimService])
    ], CheckifcdqComponent);
    return CheckifcdqComponent;
}());
exports.CheckifcdqComponent = CheckifcdqComponent;
//# sourceMappingURL=checkifcdq.component.js.map