"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var app_routes_1 = require("./app.routes");
var common_1 = require("@angular/common");
var app_component_1 = require("./app.component");
var homepage_component_1 = require("./homepage/homepage.component");
var checkifc_component_1 = require("./checkifc/checkifc.component");
var checkmaterial_component_1 = require("./checkmaterial/checkmaterial.component");
var checkcosts_component_1 = require("./checkcosts/checkcosts.component");
var ifcobjectType_component_1 = require("./ifcobjectType.component");
var dqifccheck_component_1 = require("./ifcdataquality/dqifccheck.component");
var dqobjectType_component_1 = require("./dqobjectType.component");
var ifccomplete_component_1 = require("./ifcdataquality/ifccomplete.component");
var ifcincomplete_component_1 = require("./ifcdataquality/ifcincomplete.component");
var ifcvalid_component_1 = require("./ifcdataquality/ifcvalid.component");
var Ifcinvalid_Component_1 = require("./ifcdataquality/Ifcinvalid.Component");
var ifcappropriate_component_1 = require("./ifcdataquality/ifcappropriate.component");
var ifcinappropriate_component_1 = require("./ifcdataquality/ifcinappropriate.component");
var dqcheckmaterial_component_1 = require("./materialdataquality/dqcheckmaterial.component");
var materialcomplete_component_1 = require("./materialdataquality/materialcomplete.component");
var MaterialIncomplete_component_1 = require("./materialdataquality/MaterialIncomplete.component");
var materialvalid_component_1 = require("./materialdataquality/materialvalid.component");
var materialInvalid_component_1 = require("./materialdataquality/materialInvalid.component");
var materialappropriate_component_1 = require("./materialdataquality/materialappropriate.component");
var materialinappropriate_component_1 = require("./materialdataquality/materialinappropriate.component");
var dqcheckcost_component_1 = require("./costsdataquality/dqcheckcost.component");
var costscomplete_component_1 = require("./costsdataquality/costscomplete.component");
var costsincomplete_component_1 = require("./costsdataquality/costsincomplete.component");
var costsvalid_component_1 = require("./costsdataquality/costsvalid.component");
var costsinvalid_component_1 = require("./costsdataquality/costsinvalid.component");
var costsappropriate_component_1 = require("./costsdataquality/costsappropriate.component");
var costsinappropriate_component_1 = require("./costsdataquality/costsinappropriate.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, app_routes_1.routing, forms_1.FormsModule, http_1.HttpModule,],
            declarations: [app_component_1.AppComponent, homepage_component_1.HomePageComponent, checkifc_component_1.CheckifcComponent, checkmaterial_component_1.CheckmaterialComponent, checkcosts_component_1.CheckcostsComponent, ifcobjectType_component_1.ifcobjecttypeComponent,
                dqifccheck_component_1.dqifcCheckComponent, dqobjectType_component_1.dqobjecttypeComponent, ifccomplete_component_1.IfccompleteComponent, ifcincomplete_component_1.IfcincompleteComponent, ifcvalid_component_1.IfcvalidComponent, Ifcinvalid_Component_1.IfcinvalidComponent, ifcappropriate_component_1.IfcappropriateComponent,
                ifcinappropriate_component_1.IfcinappropriateComponent, dqcheckmaterial_component_1.dqcheckmaterialComponent, materialcomplete_component_1.MaterialcompleteComponent, MaterialIncomplete_component_1.MaterialIncompleteComponent, materialvalid_component_1.MaterialvalidComponent,
                materialInvalid_component_1.MaterialInvalidComponent, materialappropriate_component_1.MaterialappropriateComponent, materialinappropriate_component_1.MaterialInappropriateComponent, dqcheckcost_component_1.dqcheckcostComponent,
                costscomplete_component_1.costscompleteComponent, costsincomplete_component_1.costsIncompleteComponent, costsvalid_component_1.costsvalidComponent, costsinvalid_component_1.costsInvalidComponent, costsappropriate_component_1.costsappropriateComponent,
                costsinappropriate_component_1.costsInappropriateComponent],
            providers: [{ provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map