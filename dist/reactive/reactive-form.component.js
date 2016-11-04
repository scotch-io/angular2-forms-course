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
var forms_1 = require('@angular/forms');
var ReactiveFormComponent = (function () {
    function ReactiveFormComponent(fb) {
        this.fb = fb;
        this.formErrors = {
            name: '',
            username: '',
            addresses: [
                { city: '', country: '' }
            ]
        };
        this.validationMessages = {
            name: {
                required: 'Name is required.',
                minlength: 'Name must be 3 characters.',
                maxlength: 'Name can\'t be longer than 6 characters.'
            },
            username: {
                required: 'Username is required.',
                minlength: 'Username must be 3 characters.'
            },
            addresses: {
                city: {
                    required: 'City is required.',
                    minlength: 'City must be 3 characters.'
                },
                country: {
                    required: 'Country is required.'
                }
            }
        };
    }
    ReactiveFormComponent.prototype.ngOnInit = function () {
        // build the data model for our form
        this.buildForm();
    };
    /**
     * build the initial form
     */
    ReactiveFormComponent.prototype.buildForm = function () {
        var _this = this;
        // build our form
        this.form = this.fb.group({
            name: ['', [forms_1.Validators.minLength(3), forms_1.Validators.maxLength(6)]],
            username: ['', forms_1.Validators.minLength(3)],
            addresses: this.fb.array([
                this.createAddress()
            ])
        });
        // watch for changes and validate
        this.form.valueChanges.subscribe(function (data) { return _this.validateForm(); });
    };
    /**
     * validate the entire form
     */
    ReactiveFormComponent.prototype.validateForm = function () {
        for (var field in this.formErrors) {
            // clear that input field errors
            this.formErrors[field] = '';
            // grab an input field by name
            var input = this.form.get(field);
            if (input.invalid && input.dirty) {
                // figure out the type of error
                // loop over the formErrors field names
                for (var error in input.errors) {
                    // assign that type of error message to a variable
                    this.formErrors[field] = this.validationMessages[field][error];
                }
            }
        }
        this.validateAddresses();
    };
    /**
     * validate the addresses formarray
     */
    ReactiveFormComponent.prototype.validateAddresses = function () {
        // grab the addresses formarray
        var addresses = this.form.get('addresses');
        // clear the form errors
        this.formErrors.addresses = [];
        // loop through however many formgroups are in the formarray
        var n = 1;
        while (n <= addresses.length) {
            // add the clear errors back
            this.formErrors.addresses.push({ city: '', country: '' });
            // grab the specific group (address)
            var address = addresses.at(n - 1);
            // validate that specific group. loop through the groups controls
            for (var field in address.controls) {
                // get the formcontrol
                var input = address.get(field);
                // do the validation and save errors to formerrors if necessary 
                if (input.invalid && input.dirty) {
                    for (var error in input.errors) {
                        this.formErrors.addresses[n - 1][field] = this.validationMessages.addresses[field][error];
                    }
                }
            }
            n++;
        }
    };
    ReactiveFormComponent.prototype.createAddress = function () {
        return this.fb.group({
            city: ['', forms_1.Validators.minLength(3)],
            country: ['']
        });
    };
    ReactiveFormComponent.prototype.addAddress = function () {
        var addresses = this.form.get('addresses');
        addresses.push(this.createAddress());
    };
    ReactiveFormComponent.prototype.removeAddress = function (i) {
        var addresses = this.form.get('addresses');
        addresses.removeAt(i);
    };
    ReactiveFormComponent.prototype.processForm = function () {
        console.log('processing', this.form.value);
    };
    ReactiveFormComponent = __decorate([
        core_1.Component({
            selector: 'reactive-form',
            templateUrl: './app/reactive/reactive-form.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], ReactiveFormComponent);
    return ReactiveFormComponent;
}());
exports.ReactiveFormComponent = ReactiveFormComponent;
//# sourceMappingURL=reactive-form.component.js.map