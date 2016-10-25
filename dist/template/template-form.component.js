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
var core_1 = require('@angular/core');
var User = (function () {
    function User() {
    }
    return User;
}());
exports.User = User;
var TemplateFormComponent = (function () {
    function TemplateFormComponent() {
        this.submitted = false; // check if the form is submitted
    }
    TemplateFormComponent.prototype.ngOnInit = function () {
        this.user = {
            name: '',
            username: ''
        };
    };
    Object.defineProperty(TemplateFormComponent.prototype, "diagnostic", {
        get: function () {
            return JSON.stringify(this.user);
        },
        enumerable: true,
        configurable: true
    });
    TemplateFormComponent.prototype.processForm = function () {
        console.log(this.user);
        this.submitted = true;
        // create a user
        // this.service.createUser(this.user)...
    };
    TemplateFormComponent = __decorate([
        core_1.Component({
            selector: 'template-form',
            styleUrls: ['./app/template/template-form.component.css'],
            templateUrl: './app/template/template-form.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], TemplateFormComponent);
    return TemplateFormComponent;
}());
exports.TemplateFormComponent = TemplateFormComponent;
//# sourceMappingURL=template-form.component.js.map