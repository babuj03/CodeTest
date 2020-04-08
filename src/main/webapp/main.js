(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");





var routes = [
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"] },
    { path: 'search', component: _search_search_component__WEBPACK_IMPORTED_MODULE_4__["SearchComponent"] },
    { path: '', redirectTo: '/contact', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    margin: 0;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n  }\r\n  \r\n  .topnav {\r\n    overflow: hidden;\r\n    background-color: #333;\r\n  }\r\n  \r\n  .topnav a {\r\n    float: left;\r\n    color: #f2f2f2;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n    font-size: 17px;\r\n  }\r\n  \r\n  .topnav a:hover {\r\n    background-color: #ddd;\r\n    color: black;\r\n  }\r\n  \r\n  .topnav a.active {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QseUNBQXlDO0VBQzNDOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtFQUNkIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICBcclxuICAudG9wbmF2IHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gIH1cclxuICBcclxuICAudG9wbmF2IGEge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBjb2xvcjogI2YyZjJmMjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICB9XHJcbiAgXHJcbiAgLnRvcG5hdiBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC50b3BuYXYgYS5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<body>\n  <div class=\"topnav\">\n    <a  [routerLink]=\"['/contact']\">Contact</a> \n    <a  [routerLink]=\"['/search']\">Search</a> \n  </div>\n  \n<router-outlet></router-outlet>\n  \n  </body>\n  </html>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'contactAndSearch';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _contact_service_contact_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact/service/contact.service */ "./src/app/contact/service/contact.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _contact_service_search_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact/service/search.service */ "./src/app/contact/service/search.service.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_6__["SearchComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]
            ],
            providers: [_contact_service_contact_service__WEBPACK_IMPORTED_MODULE_7__["ContactService"], _contact_service_search_service__WEBPACK_IMPORTED_MODULE_10__["SearchService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\r\n\tmargin:10% auto 0 auto;\r\n\tpadding:30px;\r\n\twidth:80%;\r\n\theight:80%;\r\n\toverflow:hidden;\r\n\tbackground:rgb(108, 111, 145);\r\n\tborder-radius:10px;\r\n  color: white;\r\n}\r\n\r\nform label {\r\n\tfont-size:14px;\r\n\tcursor:pointer;\r\n}\r\n\r\nform label,\r\nform input {\r\n\tfloat:left;\r\n\tclear:both;\r\n}\r\n\r\nform input {\r\n\tmargin:5px 0;\r\n\tpadding:10px 5px;\r\n\twidth:25%;\r\n\toutline:none;\r\n\tborder:1px solid #bbb;\r\n\tfont-size:14px;\r\n\tdisplay:inline-block;\r\n}\r\n\r\nhr.line {\r\n    border-top: 7px solid white;\r\n  }\r\n\r\n.error {\r\n    color: rgb(235, 154, 158);\r\n    font-size:19px;\r\n   \r\n  }\r\n\r\n.info{\r\n    color:rgb(191, 240, 191);\r\n    font-size:19px;\r\n  }\r\n\r\nhr.line1 {\r\n    border-top: 2px solid white;   \r\n    width:26%;\r\n    margin:0;\r\n  }\r\n\r\n.button {\r\n    background-color: rgb(245, 245, 245); /* Green */\r\n    border: none;\r\n    color: rgb(12, 11, 11);\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    float: right;\r\n    margin: 5px;\r\n  }\r\n\r\n.formButton {\r\n    background-color: rgb(245, 245, 245); /* Green */\r\n    border: none;\r\n    color: rgb(12, 11, 11);\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    margin-left: 170px;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxzQkFBc0I7Q0FDdEIsWUFBWTtDQUNaLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsZUFBZTtDQUNmLDZCQUE2QjtDQUM3QixrQkFBa0I7RUFDakIsWUFBWTtBQUNkOztBQUVBO0NBQ0MsY0FBYztDQUNkLGNBQWM7QUFDZjs7QUFFQTs7Q0FFQyxVQUFVO0NBQ1YsVUFBVTtBQUNYOztBQUVBO0NBQ0MsWUFBWTtDQUNaLGdCQUFnQjtDQUNoQixTQUFTO0NBQ1QsWUFBWTtDQUNaLHFCQUFxQjtDQUNyQixjQUFjO0NBQ2Qsb0JBQW9CO0FBQ3JCOztBQUlFO0lBQ0UsMkJBQTJCO0VBQzdCOztBQUdBO0lBQ0UseUJBQXlCO0lBQ3pCLGNBQWM7O0VBRWhCOztBQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLGNBQWM7RUFDaEI7O0FBQ0E7SUFDRSwyQkFBMkI7SUFDM0IsU0FBUztJQUNULFFBQVE7RUFDVjs7QUFDQTtJQUNFLG9DQUFvQyxFQUFFLFVBQVU7SUFDaEQsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0VBQ2I7O0FBRUE7SUFDRSxvQ0FBb0MsRUFBRSxVQUFVO0lBQ2hELFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixrQkFBa0I7RUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xyXG5cdG1hcmdpbjoxMCUgYXV0byAwIGF1dG87XHJcblx0cGFkZGluZzozMHB4O1xyXG5cdHdpZHRoOjgwJTtcclxuXHRoZWlnaHQ6ODAlO1xyXG5cdG92ZXJmbG93OmhpZGRlbjtcclxuXHRiYWNrZ3JvdW5kOnJnYigxMDgsIDExMSwgMTQ1KTtcclxuXHRib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5mb3JtIGxhYmVsIHtcclxuXHRmb250LXNpemU6MTRweDtcclxuXHRjdXJzb3I6cG9pbnRlcjtcclxufVxyXG5cclxuZm9ybSBsYWJlbCxcclxuZm9ybSBpbnB1dCB7XHJcblx0ZmxvYXQ6bGVmdDtcclxuXHRjbGVhcjpib3RoO1xyXG59XHJcblxyXG5mb3JtIGlucHV0IHtcclxuXHRtYXJnaW46NXB4IDA7XHJcblx0cGFkZGluZzoxMHB4IDVweDtcclxuXHR3aWR0aDoyNSU7XHJcblx0b3V0bGluZTpub25lO1xyXG5cdGJvcmRlcjoxcHggc29saWQgI2JiYjtcclxuXHRmb250LXNpemU6MTRweDtcclxuXHRkaXNwbGF5OmlubGluZS1ibG9jaztcclxufVxyXG5cclxuXHJcblxyXG4gIGhyLmxpbmUge1xyXG4gICAgYm9yZGVyLXRvcDogN3B4IHNvbGlkIHdoaXRlO1xyXG4gIH1cclxuXHJcblxyXG4gIC5lcnJvciB7XHJcbiAgICBjb2xvcjogcmdiKDIzNSwgMTU0LCAxNTgpO1xyXG4gICAgZm9udC1zaXplOjE5cHg7XHJcbiAgIFxyXG4gIH1cclxuXHJcbiAgLmluZm97XHJcbiAgICBjb2xvcjpyZ2IoMTkxLCAyNDAsIDE5MSk7XHJcbiAgICBmb250LXNpemU6MTlweDtcclxuICB9XHJcbiAgaHIubGluZTEge1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHdoaXRlOyAgIFxyXG4gICAgd2lkdGg6MjYlO1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgfVxyXG4gIC5idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ1LCAyNDUpOyAvKiBHcmVlbiAqL1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHJnYigxMiwgMTEsIDExKTtcclxuICAgIHBhZGRpbmc6IDE1cHggMzJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gIH1cclxuXHJcbiAgLmZvcm1CdXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ1LCAyNDUpOyAvKiBHcmVlbiAqL1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHJnYigxMiwgMTEsIDExKTtcclxuICAgIHBhZGRpbmc6IDE1cHggMzJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNzBweDtcclxuICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Default form contact -->\n\n<div class=\"container\">\n  <h1>Add Contact</h1>\n<form [formGroup]=\"form\">\n  <h1>Multi Contact Form  <button class=\"button\"  (click)=\"onSubmit()\">Submit</button><button  class=\"button\" (click)=\"addContact()\">Add</button> </h1>\n  <hr class=\"line\">\n  <div>\n  <div formArrayName=\"contact\" *ngFor=\"let creds of form.controls.contact?.value; let i = index trackBy:trackByFn\">\n    <br>\n    <span  *ngIf=\"success!=null && submited\" class=\"info\">\n           {{success}}\n    </span> \n    <span  *ngIf=\"error!=null && submited\" class=\"error\">\n      {{error}}\n    </span> \n    <ng-container [formGroupName]=\"i\" >\n      <br> <br> <br>\n          <h2>Contact  <button  class=\"formButton\"  (click)=\"remove(i)\"> Remove</button></h2>     \n          <hr class=\"line1\">   \n          <br> \n          <input type=\"text\" formControlName=\"name\"  placeholder=\"Name\"> &nbsp; &nbsp; &nbsp; &nbsp;\n          \n        <div *ngIf=\"submited\">\n          <span  *ngIf=\"(form.controls.contact.controls[i].controls.name.errors!=null \n           && form.controls.contact.controls[i].controls.name.errors.required)\" class=\"error\">\n            Name is required.\n          </span> \n          <span  *ngIf=\"(form.controls.contact.controls[i].controls.name.errors !=null \n          && form.controls.contact.controls[i].controls.name.errors.pattern)\" class=\"error\">\n            Invalid Name.\n         </span> \n          </div>\n          <br>\n          <input type=\"email\" formControlName=\"email\" required id=\"email\" placeholder=\"E-mail\"> &nbsp; &nbsp; &nbsp; &nbsp;\n          <div *ngIf=\"submited\">\n            <span  *ngIf=\"(form.controls.contact.controls[i].controls.email.errors!=null \n             && form.controls.contact.controls[i].controls.email.errors.required)\" class=\"error\">\n              Email is required.\n            </span> \n            <span  *ngIf=\"(form.controls.contact.controls[i].controls.email.errors!=null \n             && form.controls.contact.controls[i].controls.email.errors.pattern)\" class=\"error\">\n              Invalid Email format\n            </span> \n            </div>\n          <br>\n\n          <input type=\"text\" formControlName=\"phone\" required id=\"phone\" placeholder=\"Phone Number\"> &nbsp; &nbsp; &nbsp; &nbsp;\n          <div *ngIf=\"submited\">\n            <span  *ngIf=\"(form.controls.contact.controls[i].controls.phone.errors!=null \n             && form.controls.contact.controls[i].controls.phone.errors.required)\" class=\"error\">\n              Phone Number is required.\n            </span> \n            <span  *ngIf=\"(form.controls.contact.controls[i].controls.phone.errors !=null \n            && form.controls.contact.controls[i].controls.phone.errors.pattern)\" class=\"error\">\n              Invalid Phone Number.\n           </span> \n            \n            </div>\n          <br>\n          <br>\n       \n    </ng-container>\n\n  </div>\n  </div>\n\n\n\n</form>\n</div>\n<!-- Send button -->\n\n\n<!-- Default form contact -->"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_contact_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/contact.service */ "./src/app/contact/service/contact.service.ts");




var ContactComponent = /** @class */ (function () {
    function ContactComponent(fb, contactService) {
        this.fb = fb;
        this.contactService = contactService;
        this.submited = false;
        this.success = null;
        this.error = null;
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            contact: this.fb.array([]),
        });
        this.addContact();
    };
    ContactComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submited = true;
        this.error = null;
        this.success = null;
        var contact = this.form.controls.contact;
        if (contact.status === "VALID") {
            this.contactService.saveContact(contact.value).subscribe(function (res) {
                _this.success = res;
            }, function (error) {
                _this.error = error.error;
            });
        }
    };
    ContactComponent.prototype.remove = function (index) {
        var contact = this.form.controls.contact;
        contact.removeAt(index);
        this.success = '';
    };
    ContactComponent.prototype.addContact = function () {
        this.success = '';
        this.submited = false;
        var contact = this.form.controls.contact;
        contact.push(this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z]*')])],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]{10}')])],
        }));
    };
    ContactComponent.prototype.trackByFn = function (index, item) {
        return index;
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-contact",
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _service_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/contact/service/contact.service.ts":
/*!****************************************************!*\
  !*** ./src/app/contact/service/contact.service.ts ***!
  \****************************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ContactService = /** @class */ (function () {
    function ContactService(_http) {
        this._http = _http;
    }
    ContactService.prototype.saveContact = function (contacts) {
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', }), responseType: 'text' };
        return this._http.post("http://13.233.83.113:8080/NetpayApp/api/contact/save", contacts, httpOptions);
    };
    ContactService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ContactService);
    return ContactService;
}());



/***/ }),

/***/ "./src/app/contact/service/search.service.ts":
/*!***************************************************!*\
  !*** ./src/app/contact/service/search.service.ts ***!
  \***************************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SearchService = /** @class */ (function () {
    function SearchService(httpClient) {
        this.httpClient = httpClient;
    }
    SearchService.prototype.search = function (text) {
        var options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json') };
        return this.httpClient.get("http://13.233.83.113:8080/NetpayApp/api/search?text=" + text);
    };
    SearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\r\n\tmargin:10% auto 0 auto;\r\n\tpadding:30px;\r\n\twidth:50%;\r\n\theight:80%;\r\n\toverflow:hidden;\r\n\tbackground:rgb(108, 111, 145);\r\n\tborder-radius:10px;\r\n  color: white;\r\n}\r\n\r\nlabel {\r\n\tfont-size:14px;\r\n\tcursor:pointer;\r\n}\r\n\r\nform label,\r\nform input {\r\n\tfloat:left;\r\n    clear:both;\r\n    font-size:20px;\r\n}\r\n\r\nform input {\r\n\tmargin:5px 0;\r\n\tpadding:16px 5px;\r\n\twidth:55%;\r\n\toutline:none;\r\n\tborder:1px solid #bbb;\r\n\tfont-size:14px;\r\n\tdisplay:inline-block;\r\n}\r\n\r\nhr.line {\r\n    border-top: 7px solid white;\r\n  }\r\n\r\n.error {\r\n    color: #D8000C;\r\n   \r\n  }\r\n\r\n.info{\r\n    color:rgb(162, 223, 162);\r\n  }\r\n\r\nhr.line1 {\r\n    border-top: 2px solid white;   \r\n    width:26%;\r\n    margin:0;\r\n  }\r\n\r\n.formButton {\r\n    background-color: rgb(245, 245, 245); /* Green */\r\n    border: none;\r\n    color: rgb(12, 11, 11);\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    margin-left: 100px;\r\n    margin-top: 20px;\r\n    \r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0Msc0JBQXNCO0NBQ3RCLFlBQVk7Q0FDWixTQUFTO0NBQ1QsVUFBVTtDQUNWLGVBQWU7Q0FDZiw2QkFBNkI7Q0FDN0Isa0JBQWtCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxjQUFjO0FBQ2Y7O0FBRUE7O0NBRUMsVUFBVTtJQUNQLFVBQVU7SUFDVixjQUFjO0FBQ2xCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLGdCQUFnQjtDQUNoQixTQUFTO0NBQ1QsWUFBWTtDQUNaLHFCQUFxQjtDQUNyQixjQUFjO0NBQ2Qsb0JBQW9CO0FBQ3JCOztBQUlFO0lBQ0UsMkJBQTJCO0VBQzdCOztBQUdBO0lBQ0UsY0FBYzs7RUFFaEI7O0FBRUE7SUFDRSx3QkFBd0I7RUFDMUI7O0FBQ0E7SUFDRSwyQkFBMkI7SUFDM0IsU0FBUztJQUNULFFBQVE7RUFDVjs7QUFHQTtJQUNFLG9DQUFvQyxFQUFFLFVBQVU7SUFDaEQsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7O0VBRWxCIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XHJcblx0bWFyZ2luOjEwJSBhdXRvIDAgYXV0bztcclxuXHRwYWRkaW5nOjMwcHg7XHJcblx0d2lkdGg6NTAlO1xyXG5cdGhlaWdodDo4MCU7XHJcblx0b3ZlcmZsb3c6aGlkZGVuO1xyXG5cdGJhY2tncm91bmQ6cmdiKDEwOCwgMTExLCAxNDUpO1xyXG5cdGJvcmRlci1yYWRpdXM6MTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuXHRmb250LXNpemU6MTRweDtcclxuXHRjdXJzb3I6cG9pbnRlcjtcclxufVxyXG5cclxuZm9ybSBsYWJlbCxcclxuZm9ybSBpbnB1dCB7XHJcblx0ZmxvYXQ6bGVmdDtcclxuICAgIGNsZWFyOmJvdGg7XHJcbiAgICBmb250LXNpemU6MjBweDtcclxufVxyXG5cclxuZm9ybSBpbnB1dCB7XHJcblx0bWFyZ2luOjVweCAwO1xyXG5cdHBhZGRpbmc6MTZweCA1cHg7XHJcblx0d2lkdGg6NTUlO1xyXG5cdG91dGxpbmU6bm9uZTtcclxuXHRib3JkZXI6MXB4IHNvbGlkICNiYmI7XHJcblx0Zm9udC1zaXplOjE0cHg7XHJcblx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcblxyXG5cclxuICBoci5saW5lIHtcclxuICAgIGJvcmRlci10b3A6IDdweCBzb2xpZCB3aGl0ZTtcclxuICB9XHJcblxyXG5cclxuICAuZXJyb3Ige1xyXG4gICAgY29sb3I6ICNEODAwMEM7XHJcbiAgIFxyXG4gIH1cclxuXHJcbiAgLmluZm97XHJcbiAgICBjb2xvcjpyZ2IoMTYyLCAyMjMsIDE2Mik7XHJcbiAgfVxyXG4gIGhyLmxpbmUxIHtcclxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCB3aGl0ZTsgICBcclxuICAgIHdpZHRoOjI2JTtcclxuICAgIG1hcmdpbjowO1xyXG4gIH1cclxuXHJcblxyXG4gIC5mb3JtQnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0NSwgMjQ1KTsgLyogR3JlZW4gKi9cclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiByZ2IoMTIsIDExLCAxMSk7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDMycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgXHJcbiAgfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Search Files/Directory</h1>\n  <form   [formGroup]=\"searchForm\"  (ngSubmit)=\"submit(this)\">      \n    <label>\n      Search:      \n    </label><input type=\"text\"  formControlName=\"search\" name=\"search\">   \n      <button type=\"submit\" (click)=\"submit(this)\"  class=\"formButton\">Submit</button>     \n \n      <br>\n      <br>\n      <div *ngIf=\"results!=null\">\n         <div *ngFor=\"let search of results\">\n           <label> {{search.path}} </label>\n       </div>\n      </div>\n</form>\n</div>"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _contact_service_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contact/service/search.service */ "./src/app/contact/service/search.service.ts");




var SearchComponent = /** @class */ (function () {
    function SearchComponent(sarchService) {
        this.sarchService = sarchService;
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            search: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.message = '';
        this.results = null;
        console.log("===============SearchComponent==========================");
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.submit = function (event) {
        var _this = this;
        console.log(this.searchForm.value);
        console.log(this.searchForm.value.search);
        this.sarchService.search(this.searchForm.value.search).subscribe(function (response) {
            console.log(response);
            if (response != null) {
                _this.results = response;
            }
            else {
                _this.message = "No result found";
            }
        });
    };
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_contact_service_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Babu\Angular\contactWithRouter\contactAndSearch\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map