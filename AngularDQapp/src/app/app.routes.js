"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var homepage_component_1 = require("./homepage/homepage.component");
var checkifc_component_1 = require("./checkifc/checkifc.component");
var checkmaterial_component_1 = require("./checkmaterial/checkmaterial.component");
var checkcosts_component_1 = require("./checkcosts/checkcosts.component");
var ifccomplete_component_1 = require("./ifcdataquality/ifccomplete.component");
var ifcincomplete_component_1 = require("./ifcdataquality/ifcincomplete.component");
var ifcvalid_component_1 = require("./ifcdataquality/ifcvalid.component");
var Ifcinvalid_Component_1 = require("./ifcdataquality/Ifcinvalid.Component");
var ifcappropriate_component_1 = require("./ifcdataquality/ifcappropriate.component");
var ifcinappropriate_component_1 = require("./ifcdataquality/ifcinappropriate.component");
var materialcomplete_component_1 = require("./materialdataquality/materialcomplete.component");
var MaterialIncomplete_component_1 = require("./materialdataquality/MaterialIncomplete.component");
var materialvalid_component_1 = require("./materialdataquality/materialvalid.component");
var materialInvalid_component_1 = require("./materialdataquality/materialInvalid.component");
var materialappropriate_component_1 = require("./materialdataquality/materialappropriate.component");
var materialinappropriate_component_1 = require("./materialdataquality/materialinappropriate.component");
var costscomplete_component_1 = require("./costsdataquality/costscomplete.component");
var costsincomplete_component_1 = require("./costsdataquality/costsincomplete.component");
var costsvalid_component_1 = require("./costsdataquality/costsvalid.component");
var costsinvalid_component_1 = require("./costsdataquality/costsinvalid.component");
var costsappropriate_component_1 = require("./costsdataquality/costsappropriate.component");
var costsinappropriate_component_1 = require("./costsdataquality/costsinappropriate.component");
exports.routes = [
    { path: 'homepage', component: homepage_component_1.HomePageComponent },
    { path: 'checkifc', component: checkifc_component_1.CheckifcComponent },
    { path: 'checkmaterial', component: checkmaterial_component_1.CheckmaterialComponent },
    { path: 'checkcosts', component: checkcosts_component_1.CheckcostsComponent },
    { path: 'checkifc/ifccomplete', component: ifccomplete_component_1.IfccompleteComponent },
    { path: 'checkifc/ifcincomplete', component: ifcincomplete_component_1.IfcincompleteComponent },
    { path: 'checkifc/ifcvalid', component: ifcvalid_component_1.IfcvalidComponent },
    { path: 'checkifc/ifcinvalid', component: Ifcinvalid_Component_1.IfcinvalidComponent },
    { path: 'checkifc/ifcappropriate', component: ifcappropriate_component_1.IfcappropriateComponent },
    { path: 'checkifc/ifcinappropriate', component: ifcinappropriate_component_1.IfcinappropriateComponent },
    { path: 'checkmaterial/materialcomplete', component: materialcomplete_component_1.MaterialcompleteComponent },
    { path: 'checkmaterial/materialincomplete', component: MaterialIncomplete_component_1.MaterialIncompleteComponent },
    { path: 'checkmaterial/materialvalid', component: materialvalid_component_1.MaterialvalidComponent },
    { path: 'checkmaterial/materialinvalid', component: materialInvalid_component_1.MaterialInvalidComponent },
    { path: 'checkmaterial/materialappropriate', component: materialappropriate_component_1.MaterialappropriateComponent },
    { path: 'checkmaterial/materialinappropriate', component: materialinappropriate_component_1.MaterialInappropriateComponent },
    { path: 'checkcosts/costscomplete', component: costscomplete_component_1.costscompleteComponent },
    { path: 'checkcosts/costsincomplete', component: costsincomplete_component_1.costsIncompleteComponent },
    { path: 'checkcosts/costsvalid', component: costsvalid_component_1.costsvalidComponent },
    { path: 'checkcosts/costsinvalid', component: costsinvalid_component_1.costsInvalidComponent },
    { path: 'checkcosts/costsappropriate', component: costsappropriate_component_1.costsappropriateComponent },
    { path: 'checkcosts/costsinappropriate', component: costsinappropriate_component_1.costsInappropriateComponent },
    { path: '', redirectTo: '/checkifc', pathMatch: 'full' }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map