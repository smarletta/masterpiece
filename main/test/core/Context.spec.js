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
const core_1 = require("../../src/core");
const chai_1 = require("chai");
const mocha_typescript_1 = require("mocha-typescript");
let ContextImplTest = ContextImplTest_1 = class ContextImplTest {
    instanceCreation() {
        const context = new core_1.Context();
        chai_1.assert.isOk(context);
    }
    testDefaultPort() {
        const context = new core_1.Context();
        chai_1.assert.equal(context.getPort(), ContextImplTest_1.DEFAULT_PORT);
    }
};
ContextImplTest.DEFAULT_PORT = 20202;
__decorate([
    mocha_typescript_1.test,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ContextImplTest.prototype, "instanceCreation", null);
__decorate([
    mocha_typescript_1.test,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ContextImplTest.prototype, "testDefaultPort", null);
ContextImplTest = ContextImplTest_1 = __decorate([
    mocha_typescript_1.suite
], ContextImplTest);
var ContextImplTest_1;
//# sourceMappingURL=Context.spec.js.map