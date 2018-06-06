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
var dqobjecttypeComponent = /** @class */ (function () {
    function dqobjecttypeComponent() {
        this.selectedRadioButtonValue = 'IFCWall';
        this.countRadioButtonSelectionChanged = new core_1.EventEmitter();
    }
    dqobjecttypeComponent.prototype.onRadioButtonSelectionChange = function () {
        this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], dqobjecttypeComponent.prototype, "countRadioButtonSelectionChanged", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], dqobjecttypeComponent.prototype, "IfcWall", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], dqobjecttypeComponent.prototype, "IfcColumn", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], dqobjecttypeComponent.prototype, "IfcBeam", void 0);
    dqobjecttypeComponent = __decorate([
        core_1.Component({
            selector: 'dqobjecttype',
            templateUrl: './dqobjecttype.html',
        })
    ], dqobjecttypeComponent);
    return dqobjecttypeComponent;
}());
exports.dqobjecttypeComponent = dqobjecttypeComponent;
//# sourceMappingURL=dqobjectType.component.js.map