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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var BimService = /** @class */ (function () {
    //Creating constructor to inject http call over service 
    //// Inject Angular http service
    function BimService(_http) {
        this._http = _http;
    }
    BimService.prototype.getifdetails = function () {
        // To convert Observable<Response> to Observable<IEmployee[]>
        // we are using the map operator
        return this._http.get("http://localhost:51865/api/checkifc/")
            .map(function (response) { return response.json(); });
    };
    BimService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], BimService);
    return BimService;
}());
exports.BimService = BimService;
//# sourceMappingURL=bimifc.service.js.map