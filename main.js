(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Git\neue-lage\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");




function AppComponent_h1_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Neue Lage: ", ctx_r0.daysLeft, " Tage");
} }
function AppComponent_h1_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Neue Lage: ", ctx_r1.daysLeft, " Tag");
} }
function AppComponent_mat_grid_tile_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const date_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", date_r4.toLocaleDateString(), "");
} }
function AppComponent_mat_grid_tile_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const date_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", date_r5.toLocaleDateString(), "");
} }
class AppComponent {
    constructor() {
        this.dates = [
            new Date(2022, 8, 16),
            new Date(2022, 8, 17),
            new Date(2022, 8, 23),
            new Date(2022, 8, 30),
            new Date(2022, 9, 1),
            new Date(2022, 9, 7),
            new Date(2022, 9, 8),
            new Date(2022, 9, 14),
            new Date(2022, 9, 21),
            new Date(2022, 9, 22),
            new Date(2022, 10, 11),
            new Date(2022, 10, 12),
            new Date(2022, 10, 18),
            new Date(2022, 10, 25),
            new Date(2022, 11, 2),
            new Date(2022, 11, 16),
            new Date(2023, 0, 13),
            new Date(2023, 0, 14),
            new Date(2023, 0, 27),
            new Date(2023, 0, 28)
        ];
    }
    ngOnInit() {
        setInterval(() => {
            let currentDate = new Date();
            currentDate.setUTCHours(0, 0, 0, 0);
            let remainingDates = this.dates.filter(x => x >= currentDate);
            this.daysLeft = remainingDates.length;
            this.remainingDays = remainingDates;
            this.passedDays = this.dates.filter(x => x < currentDate);
        }, 1000);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 9, vars: 4, consts: [[1, "header"], ["class", "header-text", 4, "ngIf"], [1, "tiles"], ["cols", "5", "rowHeight", "5:3"], ["class", "passed-tile", 4, "ngFor", "ngForOf"], ["class", "remaining-tile", 4, "ngFor", "ngForOf"], [1, "main-text"], [1, "header-text"], [1, "passed-tile"], [1, "remaining-tile"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_h1_1_Template, 2, 1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_h1_2_Template, 2, 1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-grid-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_mat_grid_tile_5_Template, 2, 1, "mat-grid-tile", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_mat_grid_tile_6_Template, 2, 1, "mat-grid-tile", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "FH Campus02 - IWI Master");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.daysLeft !== 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.daysLeft === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.passedDays);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.remainingDays);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridTile"]], styles: [".passed-tile[_ngcontent-%COMP%] {\n  background-color: #0CBB11;\n  font-size: 25px;\n  font-weight: bolder;\n  border-radius: 2rem;\n  color: white;\n}\n\n.remaining-tile[_ngcontent-%COMP%] {\n  background-color: #DB2B31;\n  font-size: 25px;\n  font-weight: bolder;\n  border-radius: 2rem;\n  color: white;\n}\n\n.tiles[_ngcontent-%COMP%] {\n  margin: 2% 25%;\n}\n\n.header[_ngcontent-%COMP%] {\n  text-align: center;\n  height: 13%;\n}\n\n.header-text[_ngcontent-%COMP%] {\n  height: 100%;\n  padding-top: 45px;\n  font-size: 120px;\n  background: linear-gradient(-45deg, #FFE548, #FFB20F, #FF4B3E, #972D07);\n  background-size: 300%;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: 900;\n  letter-spacing: -5px;\n  text-transform: uppercase;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  animation: animated_text 10s ease-in-out infinite;\n  -moz-animation: animated_text 10s ease-in-out infinite;\n  -webkit-animation: animated_text 10s ease-in-out infinite;\n}\n\n.main-text[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 30px;\n  padding-top: 50px;\n}\n\n@keyframes animated_text {\n  0% {\n    background-position: 0px 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0px 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFFSSxjQUFBO0FBQUo7O0FBR0E7RUFFSSxrQkFBQTtFQUNBLFdBQUE7QUFESjs7QUFJQTtFQUVJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUVBQUE7RUFDSCxxQkFBQTtFQUNBLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLGlEQUFBO0VBQ0Esc0RBQUE7RUFDQSx5REFBQTtBQUZEOztBQUtBO0VBRUksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFISjs7QUFNQTtFQUNDO0lBQUssNEJBQUE7RUFGSjtFQUdEO0lBQU0sNkJBQUE7RUFBTDtFQUNEO0lBQU8sNEJBQUE7RUFFTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhc3NlZC10aWxle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBDQkIxMTtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ucmVtYWluaW5nLXRpbGV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREIyQjMxO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi50aWxlc1xyXG57XHJcbiAgICBtYXJnaW46IDIlIDI1JTtcclxufVxyXG5cclxuLmhlYWRlclxyXG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEzJTtcclxufVxyXG5cclxuLmhlYWRlci10ZXh0XHJcbntcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmctdG9wOiA0NXB4O1xyXG4gICAgZm9udC1zaXplOiAxMjBweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNGRkU1NDgsICNGRkIyMEYsICNGRjRCM0UsICM5NzJEMDcpO1xyXG5cdGJhY2tncm91bmQtc2l6ZTogMzAwJTtcclxuXHRmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuXHRmb250LXdlaWdodDogOTAwO1xyXG5cdGxldHRlci1zcGFjaW5nOiAtNXB4O1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0LXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcblx0LXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdGFuaW1hdGlvbjogYW5pbWF0ZWRfdGV4dCAxMHMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcblx0LW1vei1hbmltYXRpb246IGFuaW1hdGVkX3RleHQgMTBzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG5cdC13ZWJraXQtYW5pbWF0aW9uOiBhbmltYXRlZF90ZXh0IDEwcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxufVxyXG5cclxuLm1haW4tdGV4dFxyXG57XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGFuaW1hdGVkX3RleHQge1xyXG5cdDAlIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IDUwJTsgfVxyXG5cdDUwJSB7IGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNTAlOyB9XHJcblx0MTAwJSB7IGJhY2tncm91bmQtcG9zaXRpb246IDBweCA1MCU7IH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map