function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _communities_communities_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./communities/communities.component */
    "./src/app/communities/communities.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./notifications/notifications.component */
    "./src/app/notifications/notifications.component.ts");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/profile/profile.component.ts");
    /* harmony import */


    var _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./projects/projects.component */
    "./src/app/projects/projects.component.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/signup/signup.component.ts");
    /* harmony import */


    var _singlecommunity_singlecommunity_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./singlecommunity/singlecommunity.component */
    "./src/app/singlecommunity/singlecommunity.component.ts");
    /* harmony import */


    var _submit_submit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./submit/submit.component */
    "./src/app/submit/submit.component.ts");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    }, {
      path: 'signup',
      component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"]
    }, {
      path: 'profile',
      component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"]
    }, {
      path: 'communities',
      component: _communities_communities_component__WEBPACK_IMPORTED_MODULE_2__["CommunitiesComponent"]
    }, {
      path: 'singlecommunity',
      component: _singlecommunity_singlecommunity_component__WEBPACK_IMPORTED_MODULE_9__["SinglecommunityComponent"]
    }, {
      path: 'notifications',
      component: _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_5__["NotificationsComponent"]
    }, {
      path: 'projects',
      component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"]
    }, {
      path: 'submit',
      component: _submit_submit_component__WEBPACK_IMPORTED_MODULE_10__["SubmitComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Drumstick';
      this.text = 'Wakimuok warazi watabuya';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 12,
      vars: 0,
      consts: [["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["rel", "stylesheet", "href", "https://fonts.googleapis.com/css?family=Ovo"], ["rel", "stylesheet", "href", "https://fonts.googleapis.com/css?family=Archivo+Black"], ["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css", "integrity", "sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==", "crossorigin", "anonymous"], ["href", "/your-path-to-fontawesome/css/fontawesome.css", "rel", "stylesheet"], ["href", "/your-path-to-fontawesome/css/brands.css", "rel", "stylesheet"], ["href", "/your-path-to-fontawesome/css/solid.css", "rel", "stylesheet"], ["href", "https://cdn.syncfusion.com/ej2/material.css", "rel", "stylesheet"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "link", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "link", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "link", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "link", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "link", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "link", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dpbC9EZXNrdG9wL0RydW1zdGljay9EcnVtc3RpY2svc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxTQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLCBib2R5IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xufSIsImh0bWwsIGJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/profile/profile.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/signup/signup.component.ts");
    /* harmony import */


    var _communities_communities_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./communities/communities.component */
    "./src/app/communities/communities.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-slick-carousel */
    "./node_modules/ngx-slick-carousel/__ivy_ngcc__/fesm2015/ngx-slick-carousel.js");
    /* harmony import */


    var _singlecommunity_singlecommunity_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./singlecommunity/singlecommunity.component */
    "./src/app/singlecommunity/singlecommunity.component.ts");
    /* harmony import */


    var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./notifications/notifications.component */
    "./src/app/notifications/notifications.component.ts");
    /* harmony import */


    var _projects_projects_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./projects/projects.component */
    "./src/app/projects/projects.component.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _submit_submit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./submit/submit.component */
    "./src/app/submit/submit.component.ts");
    /* harmony import */


    var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @kolkov/angular-editor */
    "./node_modules/@kolkov/angular-editor/__ivy_ngcc__/fesm2015/kolkov-angular-editor.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _submit_submit_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./submit/submit.directive */
    "./src/app/submit/submit.directive.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_10__["SlickCarouselModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FontAwesomeModule"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_16__["AngularEditorModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"], _communities_communities_component__WEBPACK_IMPORTED_MODULE_8__["CommunitiesComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"], _singlecommunity_singlecommunity_component__WEBPACK_IMPORTED_MODULE_11__["SinglecommunityComponent"], _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_12__["NotificationsComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_13__["ProjectsComponent"], _submit_submit_component__WEBPACK_IMPORTED_MODULE_15__["SubmitComponent"], _submit_submit_directive__WEBPACK_IMPORTED_MODULE_18__["SubmitDirective"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_10__["SlickCarouselModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FontAwesomeModule"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_16__["AngularEditorModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"], _communities_communities_component__WEBPACK_IMPORTED_MODULE_8__["CommunitiesComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"], _singlecommunity_singlecommunity_component__WEBPACK_IMPORTED_MODULE_11__["SinglecommunityComponent"], _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_12__["NotificationsComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_13__["ProjectsComponent"], _submit_submit_component__WEBPACK_IMPORTED_MODULE_15__["SubmitComponent"], _submit_submit_directive__WEBPACK_IMPORTED_MODULE_18__["SubmitDirective"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_10__["SlickCarouselModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FontAwesomeModule"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_16__["AngularEditorModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/communities/communities.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/communities/communities.component.ts ***!
    \******************************************************/

  /*! exports provided: CommunitiesComponent */

  /***/
  function srcAppCommunitiesCommunitiesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommunitiesComponent", function () {
      return CommunitiesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var CommunitiesComponent = /*#__PURE__*/function () {
      function CommunitiesComponent() {
        _classCallCheck(this, CommunitiesComponent);
      }

      _createClass(CommunitiesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CommunitiesComponent;
    }();

    CommunitiesComponent.ɵfac = function CommunitiesComponent_Factory(t) {
      return new (t || CommunitiesComponent)();
    };

    CommunitiesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CommunitiesComponent,
      selectors: [["app-communities"]],
      decls: 272,
      vars: 0,
      consts: [[1, "container-fluid", 2, "background", "#f0f0f08f", "height", "100%"], [1, "row"], [1, "col-md", "sidebar"], [1, "sidenavs"], ["routerLink", "/"], ["href", "/profile"], [1, "sidenavs-active"], ["routerLink", "/communities"], ["routerLink", "/notifications"], ["routerLink", "/projects"], [1, "col-md-9"], [1, "row", 2, "margin-top", "21px"], [1, "col-md-7", "communities"], [1, "heading"], [1, "superscript"], [1, "container", "list"], ["href", "/singlecommunity"], [1, "row", "unread"], [1, "col-sm-1"], ["src", "/assets/angular kenya.jpg"], [1, "col"], [1, "username"], [1, "title"], [1, "time"], ["src", "/assets/random1.jpg"], ["src", "/assets/random5.jpg"], ["src", "/assets/random11.jpg"], ["src", "/assets/random8.jpg"], [1, "col-md", 2, "text-align", "center"], [1, "container-fluid", 2, "background", "white", "width", "120%", "border", "#d8d8d8 0.01em solid", "padding", "10px"], [1, "col-md-5"], ["id", "app-cover"], ["id", "select-box"], ["type", "checkbox", "id", "options-view-button"], ["id", "select-button", 1, "brd"], ["id", "selected-value"], ["id", "chevrons"], [1, "fas", "fa-chevron-up"], [1, "fas", "fa-chevron-down"], ["id", "options"], [1, "option"], ["type", "radio", "name", "platform", "value", "angular", 1, "s-c", "top"], ["type", "radio", "name", "platform", "value", "angular", 1, "s-c", "bottom"], [1, "fab", "fa-python"], [1, "label"], [1, "opt-val"], ["type", "radio", "name", "platform", "value", "dribbble", 1, "s-c", "top"], ["type", "radio", "name", "platform", "value", "dribbble", 1, "s-c", "bottom"], [1, "fab", "fa-java"], ["type", "radio", "name", "platform", "value", "behance", 1, "s-c", "top"], ["type", "radio", "name", "platform", "value", "behance", 1, "s-c", "bottom"], [1, "fas", "fa-gem"], ["type", "radio", "name", "platform", "value", "hackerrank", 1, "s-c", "top"], ["type", "radio", "name", "platform", "value", "hackerrank", 1, "s-c", "bottom"], [1, "fab", "fa-html5"], ["type", "radio", "name", "platform", "value", "stackoverflow", 1, "s-c", "top"], ["type", "radio", "name", "platform", "value", "stackoverflow", 1, "s-c", "bottom"], [1, "fab", "fa-js"], ["type", "radio", "name", "platform", "value", "freecodecamp", 1, "s-c", "top"], ["type", "radio", "name", "platform", "value", "freecodecamp", 1, "s-c", "bottom"], [1, "fab", "fa-cuttlefish", "c"], [1, "fab", "fa-cuttlefish", "cplusplus"], [1, "fab", "fa-cuttlefish", "csharp"], [1, "fab", "fa-php"], [1, "fas", "fa-database"], [1, "fab", "fa-swift"], ["id", "option-bg"], [2, "display", "inline-block", "font-size", "20px"], ["type", "input", "placeholder", "search", 1, "search", 2, "width", "90%", "display", "inline-block", "margin-left", "10px"], [1, "fas", "fa-search"], [1, "com-list"], ["data-toggle", "modal", "data-target", "#com-modal"], [1, "noma"], [1, "tooltip"], ["id", "com-modal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLongTitle", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLongTitle", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", 1, "btn", "btn-primary"]],
      template: function CommunitiesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h6", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Communities");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h6", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Notifications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h6", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Communities");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "sup", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ul", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Angular Kenya");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Pew Pew:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Project1.9-7.14");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Working on a loader for ngx-translate internationalization library that loads locally stored translations for NativeScript Angular. In need of one angular dev.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "3mins");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Devcom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "JonSkeet: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Stack Overflow");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Made a web application to help developers share their blockers, and fellow developers are able to assist with the blocker in real time.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "58mins");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "ColorfulWorld");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "JonSkeet: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Stack Overflow");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Made a web application to help developers share their blockers, and fellow developers are able to assist with the blocker in real time.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "2hrs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "code lovers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "JonSkeet: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Stack Overflow");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " Made a web application to help developers share their blockers, and fellow developers are able to assist with the blocker in real time.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "6hrs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Timers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "JonSkeet: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Stack Overflow");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " Made a web application to help developers share their blockers, and fellow developers are able to assist with the blocker in real time.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "8hrs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "form", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "i", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "input", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "input", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "i", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Python");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "span", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Python");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "input", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "input", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "i", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Java");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "span", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Java");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "input", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "input", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "i", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Ruby");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "span", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Ruby");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "input", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "input", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "i", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "HTML");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "span", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "HTML");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "input", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "input", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "i", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "JavaScript");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "span", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "JavaScript");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "input", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "input", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "i", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "C -Language");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "span", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "C -Language");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "input", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "input", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "i", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "++");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "C++ -Language");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "span", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "C++ -Language");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "input", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "input", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "i", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "C# -Language");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "span", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "C# -Language");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "input", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "input", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "i", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "php");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "span", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "php");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "input", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "input", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "i", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "SQL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "span", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "SQL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "input", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "input", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "i", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "Swift");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "span", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "Swift");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "span", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "| ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "input", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "i", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "ul", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "li", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "Timer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "li", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](226, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "Timer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "span", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, " tooltip in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](232, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "Timer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](236, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "Timer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "Timer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](244, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "Timer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](248, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "Timer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](252, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "Timer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "h5", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "Modal title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "button", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "span", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, " ... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "button", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "button", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "Save changes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](271, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"]],
      styles: [".sidebar[_ngcontent-%COMP%] {\n  background: white;\n  text-align: center;\n  width: 400px;\n}\n\n.sidenavs[_ngcontent-%COMP%] {\n  padding: 20px 0;\n  margin-left: -15px;\n  margin-right: -15px;\n  margin-top: -5px;\n}\n\n.sidenavs-active[_ngcontent-%COMP%] {\n  padding: 20px 0;\n  margin-top: -5px;\n  margin-left: -15px;\n  margin-right: -15px;\n  background-color: #ff6347;\n}\n\n.sidenavs-active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: bold;\n}\n\n.sidenavs[_ngcontent-%COMP%]:hover, .sidenavs[_ngcontent-%COMP%]:active, .sidenavs[_ngcontent-%COMP%]:focus {\n  background: #ff634733;\n}\n\n.sidenavs[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%], .sidenavs[_ngcontent-%COMP%]:active   a[_ngcontent-%COMP%], .sidenavs[_ngcontent-%COMP%]:focus   a[_ngcontent-%COMP%] {\n  color: tomato;\n}\n\n.sidenavs[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.sidebar[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-top: 65%;\n}\n\n.communities[_ngcontent-%COMP%] {\n  margin: 0 45px;\n  padding: 10px;\n}\n\n.communities[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #FD7F20;\n  margin-left: 30px;\n  margin-top: 10px;\n}\n\n.communities[_ngcontent-%COMP%]   .unread[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: bolder;\n}\n\n.communities[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%] {\n  max-height: 75vh;\n  overflow-y: auto;\n  list-style: none;\n}\n\n.communities[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 80px;\n  width: 80px;\n  border-radius: 50%;\n  display: inline-block;\n}\n\n.communities[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.communities[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-left: 40px;\n  width: 550px;\n  white-space: nowrap;\n  overflow: hidden;\n  color: grey;\n  text-overflow: ellipsis;\n}\n\n.communities[_ngcontent-%COMP%]   .unread[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.username[_ngcontent-%COMP%] {\n  color: #FD7F20;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.time[_ngcontent-%COMP%] {\n  margin-left: 95%;\n  color: #FD7F20;\n}\n\n.heading[_ngcontent-%COMP%] {\n  color: #FD7F20;\n  font-weight: bolder;\n  margin-top: 30px;\n  margin-left: 20px;\n}\n\n.superscript[_ngcontent-%COMP%] {\n  color: white;\n  padding: 2px 5px;\n  background: #08DD80;\n  border-radius: 5px;\n  font-size: 15px;\n  margin-left: 5px;\n}\n\n.search[_ngcontent-%COMP%] {\n  border: none;\n  background: #f1f1f1;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  padding-left: 5px;\n  padding-right: 30px;\n}\n\n.fa-search[_ngcontent-%COMP%] {\n  color: grey;\n  margin-left: -25px;\n}\n\n.com-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin-top: 15px;\n  max-height: 450px;\n  overflow-y: auto;\n  width: 120%;\n}\n\n.com-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 7px;\n}\n\n.com-list[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n}\n\n.com-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: black;\n  text-align: center;\n}\n\n.com-list[_ngcontent-%COMP%]   .noma[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  visibility: hidden;\n  width: 300px;\n  background: #f7ddc5;\n  text-align: center;\n  border-radius: 5px;\n  padding: 5px 3px;\n  position: absolute;\n  z-index: 1;\n}\n\n.com-list[_ngcontent-%COMP%]   .noma[_ngcontent-%COMP%]:hover   .tooltip[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n\n.dropbutton[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n}\n\n*[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n\n*[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n  min-height: 100%;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  padding-bottom: 100px;\n  margin: 0;\n  background-color: #ebf3f3;\n}\n\n.brd[_ngcontent-%COMP%] {\n  border: 1px solid #e2eded;\n  border-color: #eaf1f1 #e4eded #dbe7e7 #e4eded;\n}\n\n#info[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  color: #2d3667;\n  font-size: 16px;\n  text-align: center;\n  padding: 14px;\n  background-color: #f3f9f9;\n}\n\n#app-cover[_ngcontent-%COMP%] {\n  top: 0;\n  right: 0;\n  left: 0;\n  width: 100%;\n  height: 35px;\n}\n\n#select-button[_ngcontent-%COMP%] {\n  height: 16px;\n  padding: 12px 14px;\n  background-color: #fff;\n  border: none;\n  cursor: pointer;\n}\n\n#options-view-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  opacity: 0;\n  cursor: pointer;\n  z-index: 3;\n}\n\n#selected-value[_ngcontent-%COMP%] {\n  font-size: 16px;\n  text-align: center;\n  color: gray;\n}\n\n.option[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n\n.option[_ngcontent-%COMP%], .label[_ngcontent-%COMP%] {\n  color: #2d3667;\n  font-size: 16px;\n}\n\n#chevrons[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  width: 12px;\n  padding: 9px 14px;\n}\n\n#chevrons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: block;\n  height: 50%;\n  color: #d1dede;\n  font-size: 12px;\n  text-align: right;\n}\n\n#options-view-button[_ngcontent-%COMP%]:checked    + #select-button[_ngcontent-%COMP%]   #chevrons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #2d3667;\n}\n\n.options[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  width: 250px;\n}\n\n#options[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 42px;\n  right: 0;\n  left: 0;\n  width: 200px;\n  margin: 0 auto;\n  background-color: #fff;\n  border-radius: 4px;\n}\n\n#options-view-button[_ngcontent-%COMP%]:checked    ~ #options[_ngcontent-%COMP%] {\n  border: 1px solid #e2eded;\n  border-color: #eaf1f1 #e4eded #dbe7e7 #e4eded;\n}\n\n.option[_ngcontent-%COMP%] {\n  position: relative;\n  line-height: 1;\n  transition: 0.3s ease all;\n  z-index: 2;\n}\n\n.option[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 14px;\n  padding: 0;\n  display: none;\n}\n\n#options-view-button[_ngcontent-%COMP%]:checked    ~ #options[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: block;\n  padding: 12px 0;\n}\n\n.label[_ngcontent-%COMP%] {\n  display: none;\n  padding: 0;\n  margin-left: 27px;\n}\n\n#options-view-button[_ngcontent-%COMP%]:checked    ~ #options[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  display: block;\n  padding: 12px 14px;\n}\n\n.s-c[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  height: 50%;\n}\n\n.s-c.top[_ngcontent-%COMP%] {\n  top: 0;\n}\n\n.s-c.bottom[_ngcontent-%COMP%] {\n  bottom: 0;\n}\n\ninput[type=radio][_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  left: 0;\n  width: 100%;\n  height: 50%;\n  margin: 0;\n  opacity: 0;\n  cursor: pointer;\n}\n\n.s-c[_ngcontent-%COMP%]:hover    ~ i[_ngcontent-%COMP%] {\n  color: #fff;\n  opacity: 0;\n}\n\n.s-c[_ngcontent-%COMP%]:hover {\n  height: 100%;\n  z-index: 1;\n}\n\n.s-c.bottom[_ngcontent-%COMP%]:hover    + i[_ngcontent-%COMP%] {\n  bottom: 10px;\n  -webkit-animation: moveup 0.3s ease 0.1s forwards;\n          animation: moveup 0.3s ease 0.1s forwards;\n}\n\n.s-c.top[_ngcontent-%COMP%]:hover    ~ i[_ngcontent-%COMP%] {\n  top: -25px;\n  -webkit-animation: movedown 0.3s ease 0.1s forwards;\n          animation: movedown 0.3s ease 0.1s forwards;\n}\n\n@-webkit-keyframes moveup {\n  0% {\n    bottom: -25px;\n    opacity: 0;\n  }\n  100% {\n    bottom: 0;\n    opacity: 1;\n  }\n}\n\n@keyframes moveup {\n  0% {\n    bottom: -25px;\n    opacity: 0;\n  }\n  100% {\n    bottom: 0;\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes movedown {\n  0% {\n    top: -25px;\n    opacity: 0;\n  }\n  100% {\n    top: 0;\n    opacity: 1;\n  }\n}\n\n@keyframes movedown {\n  0% {\n    top: -25px;\n    opacity: 0;\n  }\n  100% {\n    top: 0;\n    opacity: 1;\n  }\n}\n\n.label[_ngcontent-%COMP%] {\n  transition: 0.3s ease all;\n}\n\n.opt-val[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 14px;\n  width: 180px;\n  height: 21px;\n  opacity: 0;\n  background-color: #ffffff;\n  transform: scale(0);\n}\n\n.option[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    ~ .opt-val[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1);\n}\n\n.option[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    ~ i[_ngcontent-%COMP%] {\n  top: 0;\n  bottom: auto;\n  opacity: 1;\n  -webkit-animation: unset;\n          animation: unset;\n}\n\n.option[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    ~ i[_ngcontent-%COMP%], .option[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    ~ .label[_ngcontent-%COMP%] {\n  color: #080808;\n}\n\n.option[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    ~ .label[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: -1;\n}\n\n#options-view-button[_ngcontent-%COMP%]:not(:checked)    ~ #options[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    ~ .opt-val[_ngcontent-%COMP%] {\n  top: -30px;\n}\n\n.option[_ngcontent-%COMP%]:nth-child(1)   input[type=radio][_ngcontent-%COMP%]:checked    ~ .label[_ngcontent-%COMP%]:before {\n  background-color: #4B8BBE;\n  border-radius: 4px 4px 0 0;\n}\n\n.option[_ngcontent-%COMP%]:nth-child(1)   input[type=radio][_ngcontent-%COMP%]:checked    ~ .opt-val[_ngcontent-%COMP%] {\n  top: -31px;\n}\n\n.option[_ngcontent-%COMP%]:nth-child(2)   input[type=radio][_ngcontent-%COMP%]:checked    ~ .label[_ngcontent-%COMP%]:before {\n  background-color: #f89820;\n}\n\n.option[_ngcontent-%COMP%]:nth-child(2)   input[type=radio][_ngcontent-%COMP%]:checked    ~ .opt-val[_ngcontent-%COMP%] {\n  top: -71px;\n}\n\n.option[_ngcontent-%COMP%]:nth-child(3)   input[type=radio][_ngcontent-%COMP%]:checked    ~ .opt-val[_ngcontent-%COMP%] {\n  top: -111px;\n}\n\n.option[_ngcontent-%COMP%]:nth-child(4)   input[type=radio][_ngcontent-%COMP%]:checked    ~ .label[_ngcontent-%COMP%]:before {\n  background-color: #e34c26;\n}\n\n.option[_ngcontent-%COMP%]:nth-child(4)   input[type=radio][_ngcontent-%COMP%]:checked    ~ .opt-val[_ngcontent-%COMP%] {\n  top: -151px;\n}\n\n.option[_ngcontent-%COMP%]:nth-child(5)   input[type=radio][_ngcontent-%COMP%]:checked    ~ .label[_ngcontent-%COMP%]:before {\n  background-color: #f48024;\n}\n\n.option[_ngcontent-%COMP%]:nth-child(5)   input[type=radio][_ngcontent-%COMP%]:checked    ~ .opt-val[_ngcontent-%COMP%] {\n  top: -191px;\n}\n\n.option[_ngcontent-%COMP%]:nth-child(6)   input[type=radio][_ngcontent-%COMP%]:checked    ~ .label[_ngcontent-%COMP%]:before {\n  background-color: #006400;\n  border-radius: 0 0 4px 4px;\n}\n\n.option[_ngcontent-%COMP%]:nth-child(6)   input[type=radio][_ngcontent-%COMP%]:checked    ~ .opt-val[_ngcontent-%COMP%] {\n  top: -231px;\n}\n\n.option[_ngcontent-%COMP%]   .fa-python[_ngcontent-%COMP%] {\n  color: #4B8BBE;\n}\n\n.option[_ngcontent-%COMP%]   .fa-java[_ngcontent-%COMP%] {\n  color: #f89820;\n}\n\n.option[_ngcontent-%COMP%]   .fa-gem[_ngcontent-%COMP%] {\n  color: #A91401;\n}\n\n.option[_ngcontent-%COMP%]   .fa-html5[_ngcontent-%COMP%] {\n  color: #e34c26;\n}\n\n.option[_ngcontent-%COMP%]   .fa-js[_ngcontent-%COMP%] {\n  color: #f0db4f;\n}\n\n.option[_ngcontent-%COMP%]   .c[_ngcontent-%COMP%] {\n  color: #42408f;\n}\n\n.option[_ngcontent-%COMP%]   .cplusplus[_ngcontent-%COMP%] {\n  color: #2a72ad;\n}\n\n.option[_ngcontent-%COMP%]   .csharp[_ngcontent-%COMP%] {\n  color: #8a118a;\n}\n\n.option[_ngcontent-%COMP%]   .fa-php[_ngcontent-%COMP%] {\n  color: #787CB5;\n}\n\n.option[_ngcontent-%COMP%]   .fa-database[_ngcontent-%COMP%] {\n  color: #26e4d4;\n}\n\n.option[_ngcontent-%COMP%]   .fa-swift[_ngcontent-%COMP%] {\n  color: #d62e10;\n}\n\n#option-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  height: 40px;\n  transition: 0.3s ease all;\n  z-index: 1;\n  display: none;\n}\n\n#options-view-button[_ngcontent-%COMP%]:checked    ~ #options[_ngcontent-%COMP%]   #option-bg[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.option[_ngcontent-%COMP%]:hover   .label[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.option[_ngcontent-%COMP%]:nth-child(1):hover    ~ #option-bg[_ngcontent-%COMP%] {\n  top: 0;\n  background-color: #4B8BBE;\n  border-radius: 4px 4px 0 0;\n}\n\n.option[_ngcontent-%COMP%]:nth-child(2):hover    ~ #option-bg[_ngcontent-%COMP%] {\n  top: 40px;\n  background-color: #f89820;\n}\n\n.option[_ngcontent-%COMP%]:nth-child(3):hover    ~ #option-bg[_ngcontent-%COMP%] {\n  top: 80px;\n  background-color: #A91401;\n}\n\n.option[_ngcontent-%COMP%]:nth-child(4):hover    ~ #option-bg[_ngcontent-%COMP%] {\n  top: 120px;\n  background-color: #e34c26;\n}\n\n.option[_ngcontent-%COMP%]:nth-child(5):hover    ~ #option-bg[_ngcontent-%COMP%] {\n  top: 160px;\n  background-color: #f0db4f;\n}\n\n.option[_ngcontent-%COMP%]:nth-child(6):hover    ~ #option-bg[_ngcontent-%COMP%] {\n  top: 200px;\n  background-color: #42408f;\n  border-radius: 0 0 4px 4px;\n}\n\n.option[_ngcontent-%COMP%]:nth-child(7):hover    ~ #option-bg[_ngcontent-%COMP%] {\n  top: 240px;\n  background-color: #2a72ad;\n  border-radius: 0 0 4px 4px;\n}\n\n.option[_ngcontent-%COMP%]:nth-child(8):hover    ~ #option-bg[_ngcontent-%COMP%] {\n  top: 280px;\n  background-color: #8a118a;\n  border-radius: 0 0 4px 4px;\n}\n\n.option[_ngcontent-%COMP%]:nth-child(9):hover    ~ #option-bg[_ngcontent-%COMP%] {\n  top: 320px;\n  background-color: #787CB5;\n  border-radius: 0 0 4px 4px;\n}\n\n.option[_ngcontent-%COMP%]:nth-child(10):hover    ~ #option-bg[_ngcontent-%COMP%] {\n  top: 360px;\n  background-color: #26e4d4;\n  border-radius: 0 0 4px 4px;\n}\n\n.option[_ngcontent-%COMP%]:nth-child(11):hover    ~ #option-bg[_ngcontent-%COMP%] {\n  top: 400px;\n  background-color: #d62e10;\n  border-radius: 0 0 4px 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dpbC9EZXNrdG9wL0RydW1zdGljay9EcnVtc3RpY2svc3JjL2FwcC9jb21tdW5pdGllcy9jb21tdW5pdGllcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tbXVuaXRpZXMvY29tbXVuaXRpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0FDQ0o7O0FEQ0k7RUFDSSxhQUFBO0FDQ1I7O0FER0E7RUFDSSxZQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0FDQUo7O0FER0E7RUFDSSxjQUFBO0VBQ0EsYUFBQTtBQ0FKOztBREdBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHQTtFQUNJLG1CQUFBO0FDQUo7O0FER0E7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ0FKOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBREdBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBQ0FKOztBREdBO0VBQ0ksWUFBQTtBQ0FKOztBREdBO0VBQ0ksY0FBQTtBQ0FKOztBREdBO0VBQ0ksaUJBQUE7QUNBSjs7QURHQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQ0FKOztBREdBO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREdBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0FKOztBRElBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURJQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQ0RKOztBRElBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDREo7O0FER0k7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0FDRFI7O0FESUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDRlI7O0FES0k7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUNIUjs7QURNSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBRUEsa0JBQUE7RUFDQSxVQUFBO0FDTFI7O0FEUUk7RUFDSSxtQkFBQTtBQ05SOztBRFVBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FDUEo7O0FEVUE7RUFFSSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7QUNSSjs7QURXQTtFQUVJLGFBQUE7QUNUSjs7QURZQTtFQUVJLFlBQUE7RUFDQSxnQkFBQTtBQ1ZKOztBRGFBO0VBRUksNERBQUE7RUFDQSxxQkFBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtBQ1hKOztBRGNBO0VBRUkseUJBQUE7RUFDQSw2Q0FBQTtBQ1pKOztBRGVBO0VBRUksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FDYko7O0FEZ0JBO0VBRUksTUFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNkSjs7QURpQkE7RUFFSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDZko7O0FEa0JBO0VBRUksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FDaEJKOztBRG1CQTtFQUVJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNqQko7O0FEb0JBO0VBRUksV0FBQTtFQUNBLFlBQUE7QUNsQko7O0FEcUJBO0VBRUksY0FBQTtFQUNBLGVBQUE7QUNuQko7O0FEc0JBO0VBRUksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNwQko7O0FEdUJBO0VBRUksY0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDckJKOztBRHdCQTtFQUVJLGNBQUE7QUN0Qko7O0FEeUJBO0VBRUksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtBQ3ZCSjs7QUQwQkE7RUFFSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ3hCSjs7QUQyQkE7RUFFSSx5QkFBQTtFQUNBLDZDQUFBO0FDekJKOztBRDRCQTtFQUVJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtBQzFCSjs7QUQ2QkE7RUFFSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQzNCSjs7QUQ4QkE7RUFFSSxjQUFBO0VBQ0EsZUFBQTtBQzVCSjs7QURnQ0E7RUFFSSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FDOUJKOztBRGlDQTtFQUVJLGNBQUE7RUFDQSxrQkFBQTtBQy9CSjs7QURrQ0E7RUFFSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ2hDSjs7QURtQ0E7RUFFSSxNQUFBO0FDakNKOztBRG9DQTtFQUVJLFNBQUE7QUNsQ0o7O0FEcUNBO0VBRUksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDbkNKOztBRHNDQTtFQUVJLFdBQUE7RUFDQSxVQUFBO0FDcENKOztBRHVDQTtFQUVJLFlBQUE7RUFDQSxVQUFBO0FDckNKOztBRHdDQTtFQUVJLFlBQUE7RUFDQSxpREFBQTtVQUFBLHlDQUFBO0FDdENKOztBRHlDQTtFQUVJLFVBQUE7RUFDQSxtREFBQTtVQUFBLDJDQUFBO0FDdkNKOztBRDBDQTtFQUVJO0lBQUksYUFBQTtJQUFlLFVBQUE7RUN0Q3JCO0VEdUNFO0lBQU0sU0FBQTtJQUFXLFVBQUE7RUNuQ25CO0FBQ0Y7O0FEK0JBO0VBRUk7SUFBSSxhQUFBO0lBQWUsVUFBQTtFQ3RDckI7RUR1Q0U7SUFBTSxTQUFBO0lBQVcsVUFBQTtFQ25DbkI7QUFDRjs7QURxQ0E7RUFFSTtJQUFJLFVBQUE7SUFBWSxVQUFBO0VDbENsQjtFRG1DRTtJQUFNLE1BQUE7SUFBUSxVQUFBO0VDL0JoQjtBQUNGOztBRDJCQTtFQUVJO0lBQUksVUFBQTtJQUFZLFVBQUE7RUNsQ2xCO0VEbUNFO0lBQU0sTUFBQTtJQUFRLFVBQUE7RUMvQmhCO0FBQ0Y7O0FEaUNBO0VBRUkseUJBQUE7QUNoQ0o7O0FEbUNBO0VBRUksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ2pDSjs7QURvQ0E7RUFFSSxVQUFBO0VBQ0EsbUJBQUE7QUNsQ0o7O0FEcUNBO0VBRUksTUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esd0JBQUE7VUFBQSxnQkFBQTtBQ25DSjs7QURzQ0E7RUFFSSxjQUFBO0FDcENKOztBRHVDQTtFQUVJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0FDckNKOztBRHdDQTtFQUVJLFVBQUE7QUN0Q0o7O0FEeUNBO0VBRUkseUJBQUE7RUFDQSwwQkFBQTtBQ3ZDSjs7QUQwQ0E7RUFFSSxVQUFBO0FDeENKOztBRDJDQTtFQUVJLHlCQUFBO0FDekNKOztBRDRDQTtFQUVJLFVBQUE7QUMxQ0o7O0FENkNBO0VBRUksV0FBQTtBQzNDSjs7QUQ4Q0E7RUFFSSx5QkFBQTtBQzVDSjs7QUQrQ0E7RUFFSSxXQUFBO0FDN0NKOztBRGdEQTtFQUVJLHlCQUFBO0FDOUNKOztBRGlEQTtFQUVJLFdBQUE7QUMvQ0o7O0FEa0RBO0VBRUkseUJBQUE7RUFDQSwwQkFBQTtBQ2hESjs7QURtREE7RUFFSSxXQUFBO0FDakRKOztBRG9EQTtFQUVJLGNBQUE7QUNsREo7O0FEcURBO0VBRUksY0FBQTtBQ25ESjs7QURzREE7RUFFSSxjQUFBO0FDcERKOztBRHVEQTtFQUVJLGNBQUE7QUNyREo7O0FEd0RBO0VBRUksY0FBQTtBQ3RESjs7QUR5REE7RUFFSSxjQUFBO0FDdkRKOztBRDBEQTtFQUVJLGNBQUE7QUN4REo7O0FEMkRBO0VBRUksY0FBQTtBQ3pESjs7QUQ0REE7RUFFSSxjQUFBO0FDMURKOztBRDZEQTtFQUVJLGNBQUE7QUMzREo7O0FEOERBO0VBRUksY0FBQTtBQzVESjs7QUQrREE7RUFFSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FDN0RKOztBRGdFQTtFQUVJLGNBQUE7QUM5REo7O0FEaUVBO0VBRUksV0FBQTtBQy9ESjs7QURrRUE7RUFFSSxNQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtBQ2hFSjs7QURtRUE7RUFFSSxTQUFBO0VBQ0EseUJBQUE7QUNqRUo7O0FEb0VBO0VBRUksU0FBQTtFQUNBLHlCQUFBO0FDbEVKOztBRHFFQTtFQUVJLFVBQUE7RUFDQSx5QkFBQTtBQ25FSjs7QURzRUE7RUFFSSxVQUFBO0VBQ0EseUJBQUE7QUNwRUo7O0FEdUVBO0VBRUksVUFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7QUNyRUo7O0FEd0VBO0VBRUksVUFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7QUN0RUo7O0FEeUVBO0VBRUksVUFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7QUN2RUo7O0FEMEVBO0VBRUksVUFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7QUN4RUo7O0FEMkVBO0VBRUksVUFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7QUN6RUo7O0FENEVBO0VBRUksVUFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7QUMxRUoiLCJmaWxlIjoic3JjL2FwcC9jb21tdW5pdGllcy9jb21tdW5pdGllcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlYmFyIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDQwMHB4OyAgICBcbn1cblxuLnNpZGVuYXZzIHtcbiAgICBwYWRkaW5nOjIwcHggMDsgICBcbiAgICBtYXJnaW4tbGVmdDogLTE1cHg7IFxuICAgIG1hcmdpbi1yaWdodDogLTE1cHg7ICAgICBcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xufVxuXG4uc2lkZW5hdnMtYWN0aXZlIHtcbiAgICBwYWRkaW5nOjIwcHggMDsgIFxuICAgIG1hcmdpbi10b3A6IC01cHg7IFxuICAgIG1hcmdpbi1sZWZ0OiAtMTVweDsgXG4gICAgbWFyZ2luLXJpZ2h0OiAtMTVweDsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjM0NzsgICAgXG59XG5cbi5zaWRlbmF2cy1hY3RpdmUgYSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uc2lkZW5hdnM6aG92ZXIsLnNpZGVuYXZzOmFjdGl2ZSwuc2lkZW5hdnM6Zm9jdXMge1xuICAgIGJhY2tncm91bmQ6ICNmZjYzNDczMzsgICAgXG5cbiAgICBhIHtcbiAgICAgICAgY29sb3I6IHRvbWF0bztcbiAgICB9XG59XG5cbi5zaWRlbmF2cyBhIHtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5zaWRlYmFyIGg1IHtcbiAgICBtYXJnaW4tdG9wOiA2NSU7XG59XG5cbi5jb21tdW5pdGllcyB7XG4gICAgbWFyZ2luOjAgNDVweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uY29tbXVuaXRpZXMgaDQge1xuICAgIGNvbG9yOiAjRkQ3RjIwOyAgICAgICAgXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmNvbW11bml0aWVzIC51bnJlYWQgaDQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7ICAgXG59XG5cbi5jb21tdW5pdGllcyAubGlzdCB7XG4gICAgbWF4LWhlaWdodDogNzV2aDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5jb21tdW5pdGllcyBpbWcge1xuICAgIGhlaWdodDogODBweDtcbiAgICB3aWR0aDogODBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogIGlubGluZS1ibG9jaztcbn1cbi5jb21tdW5pdGllcyAucm93IHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuXG4uY29tbXVuaXRpZXMgcCB7XG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgd2lkdGg6IDU1MHB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBjb2xvcjogZ3JleTtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmNvbW11bml0aWVzIC51bnJlYWQgcCB7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4udXNlcm5hbWUge1xuICAgIGNvbG9yOiNGRDdGMjA7XG59XG5cbi50aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50aW1lIHtcbiAgICBtYXJnaW4tbGVmdDogOTUlO1xuICAgIGNvbG9yOiNGRDdGMjA7XG59XG5cbi5oZWFkaW5nIHtcbiAgICBjb2xvcjojRkQ3RjIwO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLnN1cGVyc2NyaXB0IHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMnB4IDVweDtcbiAgICBiYWNrZ3JvdW5kOiMwOEREODA7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBtYXJnaW4tbGVmdDogNXB4OyAgICBcbn1cblxuXG4uc2VhcmNoIHtcbiAgICBib3JkZXI6IG5vbmU7ICAgIFxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XG4gICAgcGFkZGluZy10b3A6IDVweDsgXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgICAgXG59XG4uZmEtc2VhcmNoIHtcbiAgICBjb2xvcjogZ3JleTtcbiAgICBtYXJnaW4tbGVmdDogLTI1cHg7XG59XG5cbi5jb20tbGlzdCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBtYXJnaW4tdG9wOiAxNXB4OyAgICAgICAgXG4gICAgbWF4LWhlaWdodDogNDUwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB3aWR0aDogMTIwJTsgICBcblxuICAgIGxpIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwYWRkaW5nOiAzcHggN3B4OyAgICAgICAgXG4gICAgfVxuXG4gICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIH1cblxuICAgIHAge1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAubm9tYSAudG9vbHRpcCB7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjQ3LCAyMjEsIDE5Nyk7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBwYWRkaW5nOiA1cHggM3B4OyAgICAgICAgXG5cbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgIH1cblxuICAgIC5ub21hOmhvdmVyIC50b29sdGlwIHtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICB9XG59XG5cbi5kcm9wYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuKlxue1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4qOmZvY3VzXG57XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuaHRtbCwgYm9keVxue1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5XG57XG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ViZjNmMztcbn1cblxuLmJyZFxue1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMmVkZWQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjZWFmMWYxICNlNGVkZWQgI2RiZTdlNyAjZTRlZGVkO1xufVxuXG4jaW5mb1xue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogMDtcbiAgICBjb2xvcjogIzJkMzY2NztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDE0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjlmOTtcbn1cblxuI2FwcC1jb3ZlclxueyAgICBcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDM1cHg7ICAgIFxufVxuXG4jc2VsZWN0LWJ1dHRvblxueyAgICAgICBcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgcGFkZGluZzogMTJweCAxNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI29wdGlvbnMtdmlldy1idXR0b25cbntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgb3BhY2l0eTogMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgei1pbmRleDogMztcbn1cblxuI3NlbGVjdGVkLXZhbHVlXG57XG4gICAgZm9udC1zaXplOiAxNnB4OyBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgXG4gICAgY29sb3I6IGdyYXk7XG59XG5cbi5vcHRpb24gaVxue1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIGhlaWdodDogMTZweDtcbn1cblxuLm9wdGlvbiwgLmxhYmVsXG57XG4gICAgY29sb3I6ICMyZDM2Njc7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4jY2hldnJvbnNcbntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMTJweDtcbiAgICBwYWRkaW5nOiA5cHggMTRweDtcbn1cblxuI2NoZXZyb25zIGlcbntcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICBjb2xvcjogI2QxZGVkZTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbiNvcHRpb25zLXZpZXctYnV0dG9uOmNoZWNrZWQgKyAjc2VsZWN0LWJ1dHRvbiAjY2hldnJvbnMgaVxue1xuICAgIGNvbG9yOiAjMmQzNjY3O1xufVxuXG4ub3B0aW9uc1xue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAyNTBweDtcbn1cblxuI29wdGlvbnNcbntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0MnB4O1xuICAgIHJpZ2h0OiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4jb3B0aW9ucy12aWV3LWJ1dHRvbjpjaGVja2VkIH4gI29wdGlvbnNcbntcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTJlZGVkO1xuICAgIGJvcmRlci1jb2xvcjogI2VhZjFmMSAjZTRlZGVkICNkYmU3ZTcgI2U0ZWRlZDtcbn1cblxuLm9wdGlvblxue1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UgYWxsO1xuICAgIHotaW5kZXg6IDI7ICAgIFxufVxuXG4ub3B0aW9uIGlcbntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMTRweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGRpc3BsYXk6IG5vbmU7ICAgIFxufVxuXG4jb3B0aW9ucy12aWV3LWJ1dHRvbjpjaGVja2VkIH4gI29wdGlvbnMgLm9wdGlvbiBpXG57XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMTJweCAwO1xuICAgIFxufVxuXG4ubGFiZWxcbntcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luLWxlZnQ6IDI3cHg7ICAgIFxufVxuXG4jb3B0aW9ucy12aWV3LWJ1dHRvbjpjaGVja2VkIH4gI29wdGlvbnMgLmxhYmVsXG57XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMTJweCAxNHB4OyAgICBcbn1cblxuLnMtY1xue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTAlO1xufVxuXG4ucy1jLnRvcFxue1xuICAgIHRvcDogMDtcbn1cblxuLnMtYy5ib3R0b21cbntcbiAgICBib3R0b206IDA7XG59XG5cbmlucHV0W3R5cGU9XCJyYWRpb1wiXVxue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTAlO1xuICAgIG1hcmdpbjogMDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnMtYzpob3ZlciB+IGlcbntcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBvcGFjaXR5OiAwO1xufVxuXG4ucy1jOmhvdmVyXG57XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5zLWMuYm90dG9tOmhvdmVyICsgaVxue1xuICAgIGJvdHRvbTogMTBweDtcbiAgICBhbmltYXRpb246IG1vdmV1cCAwLjNzIGVhc2UgMC4xcyBmb3J3YXJkcztcbn1cblxuLnMtYy50b3A6aG92ZXIgfiBpXG57XG4gICAgdG9wOiAtMjVweDtcbiAgICBhbmltYXRpb246IG1vdmVkb3duIDAuM3MgZWFzZSAwLjFzIGZvcndhcmRzO1xufVxuXG5Aa2V5ZnJhbWVzIG1vdmV1cFxue1xuICAgIDAleyBib3R0b206IC0yNXB4OyBvcGFjaXR5OiAwO31cbiAgICAxMDAleyBib3R0b206IDA7IG9wYWNpdHk6IDE7fVxufVxuXG5Aa2V5ZnJhbWVzIG1vdmVkb3duXG57XG4gICAgMCV7IHRvcDogLTI1cHg7IG9wYWNpdHk6IDA7fVxuICAgIDEwMCV7IHRvcDogMDsgb3BhY2l0eTogMTt9XG59XG5cbi5sYWJlbFxue1xuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZSBhbGw7XG59XG5cbi5vcHQtdmFsXG57XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDE0cHg7XG4gICAgd2lkdGg6IDE4MHB4O1xuICAgIGhlaWdodDogMjFweDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTsgICAgXG59XG5cbi5vcHRpb24gaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgfiAub3B0LXZhbFxue1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLm9wdGlvbiBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCB+IGlcbntcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiBhdXRvO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYW5pbWF0aW9uOiB1bnNldDtcbn1cblxuLm9wdGlvbiBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCB+IGksIC5vcHRpb24gaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgfiAubGFiZWxcbntcbiAgICBjb2xvcjpyZ2IoOCwgOCwgOCk7XG59XG5cbi5vcHRpb24gaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgfiAubGFiZWw6YmVmb3JlXG57XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAtMTsgICAgXG59XG5cbiNvcHRpb25zLXZpZXctYnV0dG9uOm5vdCg6Y2hlY2tlZCkgfiAjb3B0aW9ucyAub3B0aW9uIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkIH4gLm9wdC12YWxcbntcbiAgICB0b3A6IC0zMHB4O1xufVxuXG4ub3B0aW9uOm50aC1jaGlsZCgxKSBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCB+IC5sYWJlbDpiZWZvcmVcbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEI4QkJFO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMCAwO1xufVxuXG4ub3B0aW9uOm50aC1jaGlsZCgxKSBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCB+IC5vcHQtdmFsXG57XG4gICAgdG9wOiAtMzFweDtcbn1cblxuLm9wdGlvbjpudGgtY2hpbGQoMikgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgfiAubGFiZWw6YmVmb3JlXG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4OTgyMDtcbn1cblxuLm9wdGlvbjpudGgtY2hpbGQoMikgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgfiAub3B0LXZhbFxue1xuICAgIHRvcDogLTcxcHg7XG59XG5cbi5vcHRpb246bnRoLWNoaWxkKDMpIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkIH4gLm9wdC12YWxcbntcbiAgICB0b3A6IC0xMTFweDtcbn1cblxuLm9wdGlvbjpudGgtY2hpbGQoNCkgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgfiAubGFiZWw6YmVmb3JlXG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UzNGMyNjtcbn1cblxuLm9wdGlvbjpudGgtY2hpbGQoNCkgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgfiAub3B0LXZhbFxue1xuICAgIHRvcDogLTE1MXB4O1xufVxuXG4ub3B0aW9uOm50aC1jaGlsZCg1KSBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCB+IC5sYWJlbDpiZWZvcmVcbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ4MDI0O1xufVxuXG4ub3B0aW9uOm50aC1jaGlsZCg1KSBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCB+IC5vcHQtdmFsXG57XG4gICAgdG9wOiAtMTkxcHg7XG59XG5cbi5vcHRpb246bnRoLWNoaWxkKDYpIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkIH4gLmxhYmVsOmJlZm9yZVxue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDY0MDA7XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDRweCA0cHg7XG59XG5cbi5vcHRpb246bnRoLWNoaWxkKDYpIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkIH4gLm9wdC12YWxcbntcbiAgICB0b3A6IC0yMzFweDtcbn1cblxuLm9wdGlvbiAuZmEtcHl0aG9uXG57XG4gICAgY29sb3I6IzRCOEJCRTtcbn1cblxuLm9wdGlvbiAuZmEtamF2YVxue1xuICAgIGNvbG9yOiNmODk4MjA7XG59XG5cbi5vcHRpb24gLmZhLWdlbVxue1xuICAgIGNvbG9yOiNBOTE0MDE7XG59XG5cbi5vcHRpb24gLmZhLWh0bWw1XG57XG4gICAgY29sb3I6ICNlMzRjMjY7XG59XG5cbi5vcHRpb24gLmZhLWpzXG57XG4gICAgY29sb3I6ICNmMGRiNGY7XG59XG5cbi5vcHRpb24gLmNcbntcbiAgICBjb2xvcjogIzQyNDA4Zjtcbn1cblxuLm9wdGlvbiAuY3BsdXNwbHVzXG57XG4gICAgY29sb3I6ICMyYTcyYWQ7XG59XG5cbi5vcHRpb24gLmNzaGFycFxue1xuICAgIGNvbG9yOiAjOGExMThhO1xufVxuXG4ub3B0aW9uIC5mYS1waHBcbntcbiAgICBjb2xvcjogIzc4N0NCNTtcbn1cblxuLm9wdGlvbiAuZmEtZGF0YWJhc2VcbntcbiAgICBjb2xvcjogIzI2ZTRkNDtcbn1cblxuLm9wdGlvbiAuZmEtc3dpZnRcbntcbiAgICBjb2xvcjogI2Q2MmUxMDtcbn1cblxuI29wdGlvbi1iZ1xue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlIGFsbDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNvcHRpb25zLXZpZXctYnV0dG9uOmNoZWNrZWQgfiAjb3B0aW9ucyAjb3B0aW9uLWJnXG57XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5vcHRpb246aG92ZXIgLmxhYmVsXG57XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5vcHRpb246bnRoLWNoaWxkKDEpOmhvdmVyIH4gI29wdGlvbi1iZ1xue1xuICAgIHRvcDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM0QjhCQkU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XG59XG5cbi5vcHRpb246bnRoLWNoaWxkKDIpOmhvdmVyIH4gI29wdGlvbi1iZ1xue1xuICAgIHRvcDogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmODk4MjA7XG59XG5cbi5vcHRpb246bnRoLWNoaWxkKDMpOmhvdmVyIH4gI29wdGlvbi1iZ1xue1xuICAgIHRvcDogODBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTkxNDAxO1xufVxuXG4ub3B0aW9uOm50aC1jaGlsZCg0KTpob3ZlciB+ICNvcHRpb24tYmdcbntcbiAgICB0b3A6IDEyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMzRjMjY7XG59XG5cbi5vcHRpb246bnRoLWNoaWxkKDUpOmhvdmVyIH4gI29wdGlvbi1iZ1xue1xuICAgIHRvcDogMTYwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZGI0Zjtcbn1cblxuLm9wdGlvbjpudGgtY2hpbGQoNik6aG92ZXIgfiAjb3B0aW9uLWJnXG57XG4gICAgdG9wOiAyMDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MDhmO1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMCA0cHggNHB4O1xufVxuXG4ub3B0aW9uOm50aC1jaGlsZCg3KTpob3ZlciB+ICNvcHRpb24tYmdcbntcbiAgICB0b3A6IDI0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYTcyYWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDRweCA0cHg7XG59XG5cbi5vcHRpb246bnRoLWNoaWxkKDgpOmhvdmVyIH4gI29wdGlvbi1iZ1xue1xuICAgIHRvcDogMjgwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhhMTE4YTtcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgNHB4IDRweDtcbn1cblxuLm9wdGlvbjpudGgtY2hpbGQoOSk6aG92ZXIgfiAjb3B0aW9uLWJnXG57XG4gICAgdG9wOiAzMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzg3Q0I1O1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMCA0cHggNHB4O1xufVxuXG4ub3B0aW9uOm50aC1jaGlsZCgxMCk6aG92ZXIgfiAjb3B0aW9uLWJnXG57XG4gICAgdG9wOiAzNjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjZlNGQ0O1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMCA0cHggNHB4O1xufVxuXG4ub3B0aW9uOm50aC1jaGlsZCgxMSk6aG92ZXIgfiAjb3B0aW9uLWJnXG57XG4gICAgdG9wOiA0MDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDYyZTEwO1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMCA0cHggNHB4O1xufVxuIiwiLnNpZGViYXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogNDAwcHg7XG59XG5cbi5zaWRlbmF2cyB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xuICBtYXJnaW4tdG9wOiAtNXB4O1xufVxuXG4uc2lkZW5hdnMtYWN0aXZlIHtcbiAgcGFkZGluZzogMjBweCAwO1xuICBtYXJnaW4tdG9wOiAtNXB4O1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG4gIG1hcmdpbi1yaWdodDogLTE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjYzNDc7XG59XG5cbi5zaWRlbmF2cy1hY3RpdmUgYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5zaWRlbmF2czpob3ZlciwgLnNpZGVuYXZzOmFjdGl2ZSwgLnNpZGVuYXZzOmZvY3VzIHtcbiAgYmFja2dyb3VuZDogI2ZmNjM0NzMzO1xufVxuLnNpZGVuYXZzOmhvdmVyIGEsIC5zaWRlbmF2czphY3RpdmUgYSwgLnNpZGVuYXZzOmZvY3VzIGEge1xuICBjb2xvcjogdG9tYXRvO1xufVxuXG4uc2lkZW5hdnMgYSB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnNpZGViYXIgaDUge1xuICBtYXJnaW4tdG9wOiA2NSU7XG59XG5cbi5jb21tdW5pdGllcyB7XG4gIG1hcmdpbjogMCA0NXB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uY29tbXVuaXRpZXMgaDQge1xuICBjb2xvcjogI0ZEN0YyMDtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5jb21tdW5pdGllcyAudW5yZWFkIGg0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLmNvbW11bml0aWVzIC5saXN0IHtcbiAgbWF4LWhlaWdodDogNzV2aDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLmNvbW11bml0aWVzIGltZyB7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IDgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uY29tbXVuaXRpZXMgLnJvdyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29tbXVuaXRpZXMgcCB7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICB3aWR0aDogNTUwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGNvbG9yOiBncmV5O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmNvbW11bml0aWVzIC51bnJlYWQgcCB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnVzZXJuYW1lIHtcbiAgY29sb3I6ICNGRDdGMjA7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udGltZSB7XG4gIG1hcmdpbi1sZWZ0OiA5NSU7XG4gIGNvbG9yOiAjRkQ3RjIwO1xufVxuXG4uaGVhZGluZyB7XG4gIGNvbG9yOiAjRkQ3RjIwO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLnN1cGVyc2NyaXB0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAycHggNXB4O1xuICBiYWNrZ3JvdW5kOiAjMDhERDgwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLnNlYXJjaCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG59XG5cbi5mYS1zZWFyY2gge1xuICBjb2xvcjogZ3JleTtcbiAgbWFyZ2luLWxlZnQ6IC0yNXB4O1xufVxuXG4uY29tLWxpc3Qge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXgtaGVpZ2h0OiA0NTBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgd2lkdGg6IDEyMCU7XG59XG4uY29tLWxpc3QgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDNweCA3cHg7XG59XG4uY29tLWxpc3QgaW1nIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLmNvbS1saXN0IHAge1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb20tbGlzdCAubm9tYSAudG9vbHRpcCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgd2lkdGg6IDMwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjdkZGM1O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogNXB4IDNweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xufVxuLmNvbS1saXN0IC5ub21hOmhvdmVyIC50b29sdGlwIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLmRyb3BidXR0b24ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbioge1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuKjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbmh0bWwsIGJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmYzZjM7XG59XG5cbi5icmQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlZGVkO1xuICBib3JkZXItY29sb3I6ICNlYWYxZjEgI2U0ZWRlZCAjZGJlN2U3ICNlNGVkZWQ7XG59XG5cbiNpbmZvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICBjb2xvcjogIzJkMzY2NztcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2Y5Zjk7XG59XG5cbiNhcHAtY292ZXIge1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuXG4jc2VsZWN0LWJ1dHRvbiB7XG4gIGhlaWdodDogMTZweDtcbiAgcGFkZGluZzogMTJweCAxNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI29wdGlvbnMtdmlldy1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBvcGFjaXR5OiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHotaW5kZXg6IDM7XG59XG5cbiNzZWxlY3RlZC12YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogZ3JheTtcbn1cblxuLm9wdGlvbiBpIHtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbn1cblxuLm9wdGlvbiwgLmxhYmVsIHtcbiAgY29sb3I6ICMyZDM2Njc7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuI2NoZXZyb25zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMnB4O1xuICBwYWRkaW5nOiA5cHggMTRweDtcbn1cblxuI2NoZXZyb25zIGkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiA1MCU7XG4gIGNvbG9yOiAjZDFkZWRlO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4jb3B0aW9ucy12aWV3LWJ1dHRvbjpjaGVja2VkICsgI3NlbGVjdC1idXR0b24gI2NoZXZyb25zIGkge1xuICBjb2xvcjogIzJkMzY2Nztcbn1cblxuLm9wdGlvbnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAyNTBweDtcbn1cblxuI29wdGlvbnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDJweDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuI29wdGlvbnMtdmlldy1idXR0b246Y2hlY2tlZCB+ICNvcHRpb25zIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UyZWRlZDtcbiAgYm9yZGVyLWNvbG9yOiAjZWFmMWYxICNlNGVkZWQgI2RiZTdlNyAjZTRlZGVkO1xufVxuXG4ub3B0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsaW5lLWhlaWdodDogMTtcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlIGFsbDtcbiAgei1pbmRleDogMjtcbn1cblxuLm9wdGlvbiBpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxNHB4O1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jb3B0aW9ucy12aWV3LWJ1dHRvbjpjaGVja2VkIH4gI29wdGlvbnMgLm9wdGlvbiBpIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDEycHggMDtcbn1cblxuLmxhYmVsIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLWxlZnQ6IDI3cHg7XG59XG5cbiNvcHRpb25zLXZpZXctYnV0dG9uOmNoZWNrZWQgfiAjb3B0aW9ucyAubGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTJweCAxNHB4O1xufVxuXG4ucy1jIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MCU7XG59XG5cbi5zLWMudG9wIHtcbiAgdG9wOiAwO1xufVxuXG4ucy1jLmJvdHRvbSB7XG4gIGJvdHRvbTogMDtcbn1cblxuaW5wdXRbdHlwZT1yYWRpb10ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MCU7XG4gIG1hcmdpbjogMDtcbiAgb3BhY2l0eTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucy1jOmhvdmVyIH4gaSB7XG4gIGNvbG9yOiAjZmZmO1xuICBvcGFjaXR5OiAwO1xufVxuXG4ucy1jOmhvdmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAxO1xufVxuXG4ucy1jLmJvdHRvbTpob3ZlciArIGkge1xuICBib3R0b206IDEwcHg7XG4gIGFuaW1hdGlvbjogbW92ZXVwIDAuM3MgZWFzZSAwLjFzIGZvcndhcmRzO1xufVxuXG4ucy1jLnRvcDpob3ZlciB+IGkge1xuICB0b3A6IC0yNXB4O1xuICBhbmltYXRpb246IG1vdmVkb3duIDAuM3MgZWFzZSAwLjFzIGZvcndhcmRzO1xufVxuXG5Aa2V5ZnJhbWVzIG1vdmV1cCB7XG4gIDAlIHtcbiAgICBib3R0b206IC0yNXB4O1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgYm90dG9tOiAwO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbW92ZWRvd24ge1xuICAwJSB7XG4gICAgdG9wOiAtMjVweDtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIHRvcDogMDtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4ubGFiZWwge1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UgYWxsO1xufVxuXG4ub3B0LXZhbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTRweDtcbiAgd2lkdGg6IDE4MHB4O1xuICBoZWlnaHQ6IDIxcHg7XG4gIG9wYWNpdHk6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG59XG5cbi5vcHRpb24gaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCB+IC5vcHQtdmFsIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLm9wdGlvbiBpbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkIH4gaSB7XG4gIHRvcDogMDtcbiAgYm90dG9tOiBhdXRvO1xuICBvcGFjaXR5OiAxO1xuICBhbmltYXRpb246IHVuc2V0O1xufVxuXG4ub3B0aW9uIGlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQgfiBpLCAub3B0aW9uIGlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQgfiAubGFiZWwge1xuICBjb2xvcjogIzA4MDgwODtcbn1cblxuLm9wdGlvbiBpbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkIH4gLmxhYmVsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAtMTtcbn1cblxuI29wdGlvbnMtdmlldy1idXR0b246bm90KDpjaGVja2VkKSB+ICNvcHRpb25zIC5vcHRpb24gaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCB+IC5vcHQtdmFsIHtcbiAgdG9wOiAtMzBweDtcbn1cblxuLm9wdGlvbjpudGgtY2hpbGQoMSkgaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCB+IC5sYWJlbDpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEI4QkJFO1xuICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcbn1cblxuLm9wdGlvbjpudGgtY2hpbGQoMSkgaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCB+IC5vcHQtdmFsIHtcbiAgdG9wOiAtMzFweDtcbn1cblxuLm9wdGlvbjpudGgtY2hpbGQoMikgaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCB+IC5sYWJlbDpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjg5ODIwO1xufVxuXG4ub3B0aW9uOm50aC1jaGlsZCgyKSBpbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkIH4gLm9wdC12YWwge1xuICB0b3A6IC03MXB4O1xufVxuXG4ub3B0aW9uOm50aC1jaGlsZCgzKSBpbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkIH4gLm9wdC12YWwge1xuICB0b3A6IC0xMTFweDtcbn1cblxuLm9wdGlvbjpudGgtY2hpbGQoNCkgaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCB+IC5sYWJlbDpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTM0YzI2O1xufVxuXG4ub3B0aW9uOm50aC1jaGlsZCg0KSBpbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkIH4gLm9wdC12YWwge1xuICB0b3A6IC0xNTFweDtcbn1cblxuLm9wdGlvbjpudGgtY2hpbGQoNSkgaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCB+IC5sYWJlbDpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ4MDI0O1xufVxuXG4ub3B0aW9uOm50aC1jaGlsZCg1KSBpbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkIH4gLm9wdC12YWwge1xuICB0b3A6IC0xOTFweDtcbn1cblxuLm9wdGlvbjpudGgtY2hpbGQoNikgaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCB+IC5sYWJlbDpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2NDAwO1xuICBib3JkZXItcmFkaXVzOiAwIDAgNHB4IDRweDtcbn1cblxuLm9wdGlvbjpudGgtY2hpbGQoNikgaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCB+IC5vcHQtdmFsIHtcbiAgdG9wOiAtMjMxcHg7XG59XG5cbi5vcHRpb24gLmZhLXB5dGhvbiB7XG4gIGNvbG9yOiAjNEI4QkJFO1xufVxuXG4ub3B0aW9uIC5mYS1qYXZhIHtcbiAgY29sb3I6ICNmODk4MjA7XG59XG5cbi5vcHRpb24gLmZhLWdlbSB7XG4gIGNvbG9yOiAjQTkxNDAxO1xufVxuXG4ub3B0aW9uIC5mYS1odG1sNSB7XG4gIGNvbG9yOiAjZTM0YzI2O1xufVxuXG4ub3B0aW9uIC5mYS1qcyB7XG4gIGNvbG9yOiAjZjBkYjRmO1xufVxuXG4ub3B0aW9uIC5jIHtcbiAgY29sb3I6ICM0MjQwOGY7XG59XG5cbi5vcHRpb24gLmNwbHVzcGx1cyB7XG4gIGNvbG9yOiAjMmE3MmFkO1xufVxuXG4ub3B0aW9uIC5jc2hhcnAge1xuICBjb2xvcjogIzhhMTE4YTtcbn1cblxuLm9wdGlvbiAuZmEtcGhwIHtcbiAgY29sb3I6ICM3ODdDQjU7XG59XG5cbi5vcHRpb24gLmZhLWRhdGFiYXNlIHtcbiAgY29sb3I6ICMyNmU0ZDQ7XG59XG5cbi5vcHRpb24gLmZhLXN3aWZ0IHtcbiAgY29sb3I6ICNkNjJlMTA7XG59XG5cbiNvcHRpb24tYmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogNDBweDtcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlIGFsbDtcbiAgei1pbmRleDogMTtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI29wdGlvbnMtdmlldy1idXR0b246Y2hlY2tlZCB+ICNvcHRpb25zICNvcHRpb24tYmcge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm9wdGlvbjpob3ZlciAubGFiZWwge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm9wdGlvbjpudGgtY2hpbGQoMSk6aG92ZXIgfiAjb3B0aW9uLWJnIHtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEI4QkJFO1xuICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcbn1cblxuLm9wdGlvbjpudGgtY2hpbGQoMik6aG92ZXIgfiAjb3B0aW9uLWJnIHtcbiAgdG9wOiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjg5ODIwO1xufVxuXG4ub3B0aW9uOm50aC1jaGlsZCgzKTpob3ZlciB+ICNvcHRpb24tYmcge1xuICB0b3A6IDgwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNBOTE0MDE7XG59XG5cbi5vcHRpb246bnRoLWNoaWxkKDQpOmhvdmVyIH4gI29wdGlvbi1iZyB7XG4gIHRvcDogMTIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMzRjMjY7XG59XG5cbi5vcHRpb246bnRoLWNoaWxkKDUpOmhvdmVyIH4gI29wdGlvbi1iZyB7XG4gIHRvcDogMTYwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGRiNGY7XG59XG5cbi5vcHRpb246bnRoLWNoaWxkKDYpOmhvdmVyIH4gI29wdGlvbi1iZyB7XG4gIHRvcDogMjAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjQwOGY7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCA0cHggNHB4O1xufVxuXG4ub3B0aW9uOm50aC1jaGlsZCg3KTpob3ZlciB+ICNvcHRpb24tYmcge1xuICB0b3A6IDI0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmE3MmFkO1xuICBib3JkZXItcmFkaXVzOiAwIDAgNHB4IDRweDtcbn1cblxuLm9wdGlvbjpudGgtY2hpbGQoOCk6aG92ZXIgfiAjb3B0aW9uLWJnIHtcbiAgdG9wOiAyODBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhhMTE4YTtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDRweCA0cHg7XG59XG5cbi5vcHRpb246bnRoLWNoaWxkKDkpOmhvdmVyIH4gI29wdGlvbi1iZyB7XG4gIHRvcDogMzIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3ODdDQjU7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCA0cHggNHB4O1xufVxuXG4ub3B0aW9uOm50aC1jaGlsZCgxMCk6aG92ZXIgfiAjb3B0aW9uLWJnIHtcbiAgdG9wOiAzNjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2ZTRkNDtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDRweCA0cHg7XG59XG5cbi5vcHRpb246bnRoLWNoaWxkKDExKTpob3ZlciB+ICNvcHRpb24tYmcge1xuICB0b3A6IDQwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDYyZTEwO1xuICBib3JkZXItcmFkaXVzOiAwIDAgNHB4IDRweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommunitiesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-communities',
          templateUrl: './communities.component.html',
          styleUrls: ['./communities.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-slick-carousel */
    "./node_modules/ngx-slick-carousel/__ivy_ngcc__/fesm2015/ngx-slick-carousel.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);

        this.posts = [{
          id: 1,
          user_id: 1,
          community_id: 1,
          tag_id: 1,
          live_link: 'https://www.google.co.ke',
          repo_link: 'https://www.github.com',
          post_heading: 'Stack Overflow',
          description: 'Made a web application to help developers share their blockers, and fellow developers are able to assist with the blocker in real time.',
          deadline: '25/September/2020',
          creation: '23/Sept/2020',
          is_open_source: true,
          is_paid: true,
          needs_contrib: true
        }];
        this.slide1Config = {
          "slidesToShow": 7,
          "slidesToScroll": 1,
          "autoplay": true,
          "autoplaySpeed": 5550
        };
        this.slide2Config = {
          "slidesToShow": 6,
          "slidesToScroll": 1,
          "autoplay": true,
          "autoplaySpeed": 5030
        };
      }

      _createClass(HomeComponent, [{
        key: "expandpost",
        value: function expandpost(complete) {
          var big = document.getElementById("fullpost");
          var small = document.getElementById("shortpost");

          if (big.style.display === "none") {
            big.style.display = "block";
            small.style.display = "none";
          } else {
            big.style.display = "none";
          }
        }
      }, {
        key: "minimisepost",
        value: function minimisepost(complete) {
          var big = document.getElementById("fullpost");
          var small = document.getElementById("shortpost");

          if (big.style.display === "block") {
            big.style.display = "none";
            small.style.display = "block";
          } else {
            big.style.display = "block";
          }
        }
      }, {
        key: "openNav",
        value: function openNav() {
          document.getElementById("mySidepanel").style.width = "250px";
        }
      }, {
        key: "closeNav",
        value: function closeNav() {
          document.getElementById("mySidepanel").style.width = "0";
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          jquery__WEBPACK_IMPORTED_MODULE_1__(document).ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__('.autoplay').slick({
              slidesToShow: 3,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2000
            });
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 264,
      vars: 1,
      consts: [[1, "container-fluid", "background"], [1, "row"], [1, "col"], [1, "col", "sidepanel"], ["id", "mySidepanel", 1, "sidebar"], ["href", "javascript:void(0)", 1, "closebtn", 3, "click"], [1, "sidenavs-active"], ["routerLink", "/"], [1, "sidenavs"], ["routerLink", "/profile"], ["routerLink", "/communities"], ["routerLink", "/notifications"], ["routerLink", "/projects"], [1, "fas", "fa-bars", "openbtn", 3, "click"], [1, "col-md-8", 2, "height", "fit-content"], [1, "container", "trend"], [1, "heading"], [1, "tag"], [2, "width", "108%", "margin-left", "-15px"], [1, "container", "trending"], [1, "info"], [1, "col-md-1"], ["src", "/assets/random3.jpg"], [1, "col-md-8"], [1, "community"], [1, "join"], [2, "margin-top", "-10px"], ["src", "/assets/random8.jpg"], ["src", "/assets/random11.jpg"], [1, "col-md-7", 2, "height", "fit-content"], [1, "container-fluid", "C1", "com"], [1, "carousel", "top_slider", 3, "config"], ["slickModal", "slick-carousel"], ["ngxSlickItem", "", "href", "/communities", 1, "slide", "items"], ["src", "/assets/angular kenya.jpg"], ["ngxSlickItem", "", "routerLink", "/communities", 1, "slide", "items"], ["src", "/assets/random2.jpg"], ["src", "/assets/random4.jpg"], ["src", "/assets/random5.jpg"], ["src", "/assets/random6.jpg"], ["src", "/assets/random7.jpg"], ["src", "/assets/random9.jpg"], ["src", "/assets/random10.jpg"], [1, "container", "C1", "mp"], ["href", "/submit"], ["type", "text", "placeholder", "Post something...", 1, "form-control", "text"], [1, "fas", "fa-photo-video"], [1, "fas", "fa-link"], [1, "container", "C1", "post"], [1, "container", "user"], [1, "col-md-11"], ["href", "/profile"], [1, "username"], ["href", "/singlecommunity"], [1, "fas", "fa-ellipsis-h"], [1, "title"], [1, "text"], ["src", "/assets/random6.jpg", 1, "image-post"], [1, "container", "info"], [1, "bullet"], [1, "row", "interact"], [1, "far", "fa-star"], [1, "far", "fa-comment"], [1, "far", "fa-share-square"], ["src", "/assets/random11.jpg", 1, "image-post"], ["src", "/assets/stackoverflow.png", 1, "image-post"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_7_listener() {
            return ctx.closeNav();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h6", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h6", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Communities");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h6", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Notifications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h6", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_i_click_24_listener() {
            return ctx.openNav();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h4", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Trends");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "hr", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Trending in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "mobile development");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " MobileDev");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "654 posts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " join");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "hr", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Trending in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "python");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " PythonLovers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "24.5K posts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " join");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "hr", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Trending in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "front end");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "img", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " FigmaGurus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "1.3K posts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " join");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "hr", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "ngx-slick-carousel", 31, 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "img", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "AngularKenya");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "a", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "img", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "UbuntuLovers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "a", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "PythonCrave");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "a", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "img", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Devhub");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "a", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "img", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "ColorfulWorld");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "a", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "img", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "MobileDev");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "a", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "img", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Lights");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "a", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Lights");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "a", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "img", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Lights");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "a", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "img", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Lights");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "a", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "img", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "input", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "i", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "i", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "a", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "img", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "p", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Messaps ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, " \u2022 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "a", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, " MobileDev");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "i", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "h5", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Mobile development");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "p", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "I'm a mobile development enthusiast, I love them clean, crisp and colorful.Some friends call it an obsession, but it's just in me.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "img", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "300 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "stars ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "span", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, " \u2022 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "999+ ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "comments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "hr", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "i", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "star ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "i", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "comment ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "i", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "share ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "a", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "p", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Fenty ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, " \u2022 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "a", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, " AngularKenya");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "i", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "h5", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "My love for code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "img", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "16 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "stars ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "span", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, " \u2022 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "comments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "hr", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](213, "i", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "star ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "i", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "comment ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "i", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "share ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "a", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](229, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "p", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "Jon Skeet ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, " \u2022 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "a", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, " AngularKenya");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](238, "i", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "h5", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "Stackoverflow Guru!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "p", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "I believe I hold the record for the most answered questions on stackoverflow. I enjoy helping guys out, all I want is to make a difference.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](243, "img", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "45 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "stars ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](249, "hr", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](252, "i", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "star ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](256, "i", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "comment ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](260, "i", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "share ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](263, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.slide1Config);
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_4__["SlickCarouselComponent"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_4__["SlickItemDirective"]],
      styles: [".background[_ngcontent-%COMP%] {\n  background: #f0f0f08f;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  max-height: 93vh;\n  overflow-y: scroll;\n  width: 100%;\n}\n\n.sidepanel[_ngcontent-%COMP%]   .fa-bars[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 10px;\n  padding: 10px;\n  font-size: 25px;\n  background: white;\n  border-radius: 30%;\n  text-shadow: 2px 2px 3px #ff634733;\n}\n\n.sidepanel[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n  background: white;\n  text-align: center;\n  width: 0;\n  position: fixed;\n  overflow-x: hidden;\n  z-index: 1;\n  top: 7vh;\n  left: 0;\n  transition: 0.5s;\n}\n\n.sidepanel[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 20px;\n  font-size: 36px;\n  margin-left: 50px;\n  color: grey;\n}\n\n.sidepanel[_ngcontent-%COMP%]   .sidenavs[_ngcontent-%COMP%] {\n  padding: 20px 0;\n  margin-left: -15px;\n  margin-right: -15px;\n  margin-top: -5px;\n  display: block;\n  transition: 0.3s;\n}\n\n.sidepanel[_ngcontent-%COMP%]   .sidenavs-active[_ngcontent-%COMP%] {\n  padding: 20px 0;\n  margin-top: -5px;\n  margin-left: -15px;\n  margin-right: -15px;\n  background-color: tomato;\n}\n\n.sidepanel[_ngcontent-%COMP%]   .sidenavs-active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: bold;\n}\n\n.sidepanel[_ngcontent-%COMP%]   .sidenavs[_ngcontent-%COMP%]:hover, .sidepanel[_ngcontent-%COMP%]   .sidenavs[_ngcontent-%COMP%]:active, .sidepanel[_ngcontent-%COMP%]   .sidenavs[_ngcontent-%COMP%]:focus {\n  background: #ff634733;\n}\n\n.sidepanel[_ngcontent-%COMP%]   .sidenavs[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%], .sidepanel[_ngcontent-%COMP%]   .sidenavs[_ngcontent-%COMP%]:active   a[_ngcontent-%COMP%], .sidepanel[_ngcontent-%COMP%]   .sidenavs[_ngcontent-%COMP%]:focus   a[_ngcontent-%COMP%] {\n  color: tomato;\n}\n\n.sidepanel[_ngcontent-%COMP%]   .sidenavs[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.sidepanel[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-top: 65%;\n}\n\n.C1[_ngcontent-%COMP%] {\n  border: solid #e0e0e0 0.01em;\n  margin-top: 2%;\n  background: white;\n  border-radius: 3px;\n}\n\n.com[_ngcontent-%COMP%] {\n  height: 100px;\n  padding: 0 10px;\n}\n\n.top_slider[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.top_slider[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  text-align: center;\n  display: inline-block;\n  padding: 10px 5px;\n}\n\n.top_slider[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  border-radius: 50%;\n  margin-top: -4px;\n}\n\n.top_slider[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #615353;\n  font-size: 15px;\n  width: 70px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.mp[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 70%;\n  background: #ffffff;\n}\n\n.mp[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 37px;\n  height: 37px;\n  border-radius: 50%;\n  margin-top: 2%;\n  margin-left: 20px;\n  display: inline-block;\n}\n\n.mp[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 25px;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: solid #cfcfcf 0.05em;\n  background: transparent;\n  width: 220px;\n}\n\n.mp[_ngcontent-%COMP%]   .fa-photo-video[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 10px;\n  margin-left: 20px;\n  color: #615353;\n}\n\n.mp[_ngcontent-%COMP%]   .fa-link[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 10px;\n  margin-left: 15px;\n  color: #615353;\n}\n\n.post[_ngcontent-%COMP%] {\n  min-height: 200px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.post[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%] {\n  background: #eeeded;\n  height: 35px;\n}\n\n.post[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 30px;\n  border-radius: 50%;\n  display: inline-block;\n  margin-top: 2px;\n}\n\n.post[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .username[_ngcontent-%COMP%] {\n  color: #615353;\n  display: inline-block;\n  margin-left: 10px;\n}\n\n.post[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #a8a5a5;\n  padding: 2px 10px;\n}\n\n.post[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .community[_ngcontent-%COMP%] {\n  color: #08DD80;\n  font-style: italic;\n  display: inline-block;\n  font-size: 13px;\n}\n\n.post[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 10px;\n  color: #a8a5a5;\n}\n\n.title[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  color: #fd8020bd;\n  padding: 0 5px;\n}\n\n.text[_ngcontent-%COMP%] {\n  color: #615353;\n  padding: 0 15px;\n}\n\n.image-post[_ngcontent-%COMP%] {\n  width: 105%;\n  margin-left: -15px;\n  max-height: 65vh;\n}\n\n.info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  display: inline-block;\n}\n\n.info[_ngcontent-%COMP%]   .bullet[_ngcontent-%COMP%] {\n  padding: 0 5px;\n}\n\n.interact[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .far[_ngcontent-%COMP%] {\n  font-size: 20px;\n  display: inline-block;\n}\n\n.interact[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .fa-star[_ngcontent-%COMP%] {\n  margin-left: 40%;\n}\n\n.interact[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .fa-comment[_ngcontent-%COMP%] {\n  margin-left: 10%;\n}\n\n.interact[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-weight: bold;\n  margin-left: 5px;\n  margin-top: -5px;\n}\n\n.trend[_ngcontent-%COMP%] {\n  position: fixed;\n  background: #e2e1e18f;\n  width: 22%;\n  margin-top: 10px;\n  border-radius: 5px;\n}\n\n.trend[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-family: \"Archivo Black\";\n  background: -webkit-linear-gradient(#eee, #333, #eee);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.trend[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-weight: bolder;\n}\n\n.trending[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #615353;\n  margin-top: -7px;\n}\n\n.trending[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin-top: -10px;\n}\n\n.trending[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #615353;\n  margin-top: -19px;\n  margin-left: 15px;\n}\n\n.trending[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  display: inline-block;\n}\n\n.trending[_ngcontent-%COMP%]   .community[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: #615353;\n  margin-left: 15px;\n  font-weight: bold;\n}\n\n.trending[_ngcontent-%COMP%]   .join[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: #08DD80;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dpbC9EZXNrdG9wL0RydW1zdGljay9EcnVtc3RpY2svc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHFCQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNBSjs7QURNSTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0FDSE47O0FES0k7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0FDSE47O0FETUk7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0pOOztBRE9JO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0xSOztBRFFJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FDTlI7O0FEU0k7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUNQUjs7QURVSTtFQUNJLHFCQUFBO0FDUlI7O0FEVVE7RUFDSSxhQUFBO0FDUlo7O0FEWUk7RUFDSSxZQUFBO0FDVlI7O0FEYUk7RUFDSSxlQUFBO0FDWFI7O0FEa0JFO0VBQ0UsNEJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ2ZKOztBRG1CRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FDaEJKOztBRG9CRTtFQUNFLGFBQUE7QUNqQko7O0FEcUJFO0VBQ0UsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FDbEJKOztBRHNCRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ25CSjs7QUR1QkU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDcEJKOztBRDBCQTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUN2Qko7O0FEMEJJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FDeEJOOztBRDRCSTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQzFCTjs7QUQ4Qkk7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDNUJOOztBRGdDSTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUM5Qk47O0FEb0NFO0VBQ0UsaUJBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7QUNqQ0o7O0FEb0NJO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FDbENOOztBRHFDTTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUNuQ1I7O0FEc0NNO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNwQ1I7O0FEdUNNO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDckNSOztBRHdDTTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQ3RDUjs7QUR5Q007RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ3ZDUjs7QUQ2Q0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDMUNKOztBRDZDRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDMUNKOztBRDhDRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDM0NKOztBRGdESTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtBQzdDTjs7QURnREk7RUFDRSxjQUFBO0FDOUNOOztBRHNETTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtBQ25EUjs7QURzRE07RUFDRSxnQkFBQTtBQ3BEUjs7QUR1RE07RUFDRSxnQkFBQTtBQ3JEUjs7QUR3RE07RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ3REUjs7QUQ2REU7RUFDRSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQzFESjs7QUQ0REk7RUFDRSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxxREFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7QUMxRE47O0FENkRJO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQzNETjs7QURpRUk7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDOUROOztBRGlFSTtFQUNFLGlCQUFBO0FDL0ROOztBRGdFTTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQzlEUjs7QURrRUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNoRU47O0FEbUVJO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ2pFTjs7QURvRUk7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ2xFTiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vQmFja2dyb3VuZFxuLmJhY2tncm91bmQge1xuICAgIGJhY2tncm91bmQ6ICNmMGYwZjA4ZjsgIFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgbWF4LWhlaWdodDogOTN2aDsgXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAvL1NpZGVwYW5lbFxuICAuc2lkZXBhbmVsIHsgICAgXG4gICAgXG4gICAgLmZhLWJhcnMge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlOyBcbiAgICAgIGJvcmRlci1yYWRpdXM6IDMwJTtcbiAgICAgIHRleHQtc2hhZG93OiAycHggMnB4IDNweCAjZmY2MzQ3MzM7XG4gICAgfVxuICAgIC5zaWRlYmFyIHtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgd2lkdGg6IDA7ICAgIFxuICAgICAgcG9zaXRpb246IGZpeGVkOyAgICBcbiAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgICB0b3A6IDd2aDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgIH1cbiAgICBcbiAgICAuY2xvc2VidG4ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgICBtYXJnaW4tbGVmdDogNTBweDtcbiAgICAgIGNvbG9yOiBncmV5O1xuICAgIH1cbiAgXG4gICAgLnNpZGVuYXZzIHtcbiAgICAgICAgcGFkZGluZzoyMHB4IDA7ICAgXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTVweDsgXG4gICAgICAgIG1hcmdpbi1yaWdodDogLTE1cHg7ICAgICBcbiAgICAgICAgbWFyZ2luLXRvcDogLTVweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgfVxuICAgIFxuICAgIC5zaWRlbmF2cy1hY3RpdmUge1xuICAgICAgICBwYWRkaW5nOjIwcHggMDsgIFxuICAgICAgICBtYXJnaW4tdG9wOiAtNXB4OyBcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xNXB4OyBcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMTVweDsgXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRvbWF0bzsgICAgXG4gICAgfVxuICAgIFxuICAgIC5zaWRlbmF2cy1hY3RpdmUgYSB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICAgIFxuICAgIC5zaWRlbmF2czpob3Zlciwuc2lkZW5hdnM6YWN0aXZlLC5zaWRlbmF2czpmb2N1cyB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZjYzNDczMzsgICAgXG4gICAgXG4gICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6IHRvbWF0bztcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAuc2lkZW5hdnMgYSB7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICB9XG4gICAgXG4gICAgLnNpZGViYXIgaDUge1xuICAgICAgICBtYXJnaW4tdG9wOiA2NSU7XG4gICAgfVxuICBcbiAgfVxuICAgIFxuICBcbiAgLy9CYXNlIGNvbnRhaW5lclxuICAuQzEge1xuICAgIGJvcmRlcjogc29saWQgI2UwZTBlMCAwLjAxZW07XG4gICAgbWFyZ2luLXRvcDogMiU7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB9XG4gIFxuICAvL0NvbW11bml0aWVzIHNsaWRlciBjb250YWluZXJcbiAgLmNvbSB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gIH1cbiAgXG4gIC8vc2xpZGVyIHN0eWxpbmdcbiAgLnRvcF9zbGlkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgXG4gIC8vc2xpZGVyIGl0ZW1zXG4gIC50b3Bfc2xpZGVyIC5pdGVtcyB7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50OyBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgXG4gICAgcGFkZGluZzoxMHB4IDVweDtcbiAgfVxuICBcbiAgLy9jb21tdW5pdGllcyBpY29uc1xuICAudG9wX3NsaWRlciAuaXRlbXMgaW1nIHtcbiAgICB3aWR0aDogNzBweDsgXG4gICAgaGVpZ2h0OiA3MHB4OyBcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbWFyZ2luLXRvcDogLTRweDtcbiAgfVxuICBcbiAgLy9jb21tdW5pdGllcyB0aXRsZVxuICAudG9wX3NsaWRlciAuaXRlbXMgcCB7ICBcbiAgICBjb2xvcjogIzYxNTM1MzsgICAgXG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIH1cbiAgXG4gIFxuICBcbi8vTWFrZSBwb3N0IGNhcmRcbi5tcCB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA3MCU7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjsgIFxuICBcbiAgICAvL1VzZXIgcHJvZmlsZSBwaG90b1xuICAgIGltZyB7XG4gICAgICB3aWR0aDogMzdweDtcbiAgICAgIGhlaWdodDogMzdweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgIFxuICAgICAgbWFyZ2luLXRvcDogMiU7XG4gICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG5cbiAgICAvLyBtYWtlIHBvc3QgaW5wdXQgZmllbGRcbiAgICAudGV4dCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBtYXJnaW4tbGVmdDogMjVweDtcbiAgICAgIGJvcmRlci10b3A6IG5vbmU7ICAgICAgXG4gICAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICAgIGJvcmRlci1ib3R0b206c29saWQgI2NmY2ZjZiAwLjA1ZW07XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIHdpZHRoOiAyMjBweDtcbiAgICB9ICAgIFxuXG4gICAgLy9tZWRpYSBpY29uXG4gICAgLmZhLXBob3RvLXZpZGVvIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgICAgICAgIFxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgY29sb3I6ICM2MTUzNTM7XG4gICAgfVxuXG4gICAgLy8gbGluayB1cmwgaWNvblxuICAgIC5mYS1saW5rIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgICAgICAgIFxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgY29sb3I6ICM2MTUzNTM7XG4gICAgfVxuICAgIFxufVxuICBcbiAgLy9wb3N0IGNhcmRcbiAgLnBvc3Qge1xuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7ICBcbiAgXG4gICAgLy91c2VyIGluZm8gc2VjdGlvbiBcbiAgICAudXNlciB7ICAgIFxuICAgICAgYmFja2dyb3VuZDogI2VlZWRlZDsgICAgXG4gICAgICBoZWlnaHQ6IDM1cHg7XG4gIFxuICBcbiAgICAgIGltZyB7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyAgICAgICAgICAgXG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLnVzZXJuYW1lIHsgICAgICBcbiAgICAgICAgY29sb3I6IzYxNTM1MzsgICBcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgc3BhbiB7XG4gICAgICAgIGNvbG9yOiAjYThhNWE1O1xuICAgICAgICBwYWRkaW5nOiAycHggMTBweDtcbiAgICAgIH1cbiAgXG4gICAgICAuY29tbXVuaXR5IHsgICAgICBcbiAgICAgICAgY29sb3I6IzA4REQ4MDsgICAgIFxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7IFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIH1cbiAgXG4gICAgICAuZmFzIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyAgICBcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDsgICAgICBcbiAgICAgICAgY29sb3I6ICNhOGE1YTU7ICBcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC8vcG9zdCB0aXRsZSBcbiAgLnRpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgY29sb3I6ICNmZDgwMjBiZDtcbiAgICBwYWRkaW5nOiAwIDVweDtcbiAgfVxuICBcbiAgLnRleHQge1xuICAgIGNvbG9yOiAjNjE1MzUzO1xuICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgfVxuICBcbiAgLy9wb3N0IGltYWdlXG4gIC5pbWFnZS1wb3N0IHtcbiAgICB3aWR0aDogMTA1JTtcbiAgICBtYXJnaW4tbGVmdDogLTE1cHg7ICBcbiAgICBtYXgtaGVpZ2h0OiA2NXZoOyAgXG4gIH1cbiAgXG4gIC8vcG9zdCBpbmZvXG4gIC5pbmZvIHtcbiAgICBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgICAgICBcbiAgICB9XG4gIFxuICAgIC5idWxsZXQge1xuICAgICAgcGFkZGluZzogMCA1cHg7XG4gICAgfVxuICB9XG4gIFxuICAvL3Bvc3QgaW50ZXJhY3RcbiAgLmludGVyYWN0IHtcbiAgXG4gICAgLmNvbCB7ICAgIFxuICAgICAgLmZhciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgfVxuICBcbiAgICAgIC5mYS1zdGFyIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQwJTtcbiAgICAgIH1cbiAgXG4gICAgICAuZmEtY29tbWVudCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7ICBcbiAgICAgIH1cbiAgXG4gICAgICBoNiB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IC01cHg7XG4gICAgICB9ICAgIFxuICAgIH1cbiAgICBcbiAgfVxuICBcbiAgLy90cmVkaW5nIHNlY3Rpb25cbiAgLnRyZW5kIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7ICBcbiAgICBiYWNrZ3JvdW5kOiAjZTJlMWUxOGY7O1xuICAgIHdpZHRoOiAyMiU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIFxuICAgIC50YWcge1xuICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgZm9udC1mYW1pbHk6ICdBcmNoaXZvIEJsYWNrJztcbiAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCNlZWUsICMzMzMsICNlZWUpO1xuICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxuICBcbiAgICAuaGVhZGluZyB7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICB9XG4gIFxuICB9XG4gIFxuICAudHJlbmRpbmcge1xuICAgIC5pbmZvIHtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIGNvbG9yOiM2MTUzNTM7XG4gICAgICBtYXJnaW4tdG9wOiAtN3B4O1xuICAgIH1cbiAgXG4gICAgLnJvdyB7XG4gICAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICAgIC5pbmZvIHtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBjb2xvcjojNjE1MzUzO1xuICAgICAgICBtYXJnaW4tdG9wOiAtMTlweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICB9ICAgIFxuICAgIH1cbiAgXG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cbiAgXG4gICAgLmNvbW11bml0eSB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBjb2xvcjojNjE1MzUzO1xuICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gIFxuICAgIC5qb2luIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIGNvbG9yOiMwOEREODA7ICAgICBcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgfSIsIi5iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogI2YwZjBmMDhmO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBtYXgtaGVpZ2h0OiA5M3ZoO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2lkZXBhbmVsIC5mYS1iYXJzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDMwJTtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggM3B4ICNmZjYzNDczMztcbn1cbi5zaWRlcGFuZWwgLnNpZGViYXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIHotaW5kZXg6IDE7XG4gIHRvcDogN3ZoO1xuICBsZWZ0OiAwO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuLnNpZGVwYW5lbCAuY2xvc2VidG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIGNvbG9yOiBncmV5O1xufVxuLnNpZGVwYW5lbCAuc2lkZW5hdnMge1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcbiAgbWFyZ2luLXRvcDogLTVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG4uc2lkZXBhbmVsIC5zaWRlbmF2cy1hY3RpdmUge1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIG1hcmdpbi10b3A6IC01cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdG9tYXRvO1xufVxuLnNpZGVwYW5lbCAuc2lkZW5hdnMtYWN0aXZlIGEge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnNpZGVwYW5lbCAuc2lkZW5hdnM6aG92ZXIsIC5zaWRlcGFuZWwgLnNpZGVuYXZzOmFjdGl2ZSwgLnNpZGVwYW5lbCAuc2lkZW5hdnM6Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiAjZmY2MzQ3MzM7XG59XG4uc2lkZXBhbmVsIC5zaWRlbmF2czpob3ZlciBhLCAuc2lkZXBhbmVsIC5zaWRlbmF2czphY3RpdmUgYSwgLnNpZGVwYW5lbCAuc2lkZW5hdnM6Zm9jdXMgYSB7XG4gIGNvbG9yOiB0b21hdG87XG59XG4uc2lkZXBhbmVsIC5zaWRlbmF2cyBhIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuLnNpZGVwYW5lbCAuc2lkZWJhciBoNSB7XG4gIG1hcmdpbi10b3A6IDY1JTtcbn1cblxuLkMxIHtcbiAgYm9yZGVyOiBzb2xpZCAjZTBlMGUwIDAuMDFlbTtcbiAgbWFyZ2luLXRvcDogMiU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi5jb20ge1xuICBoZWlnaHQ6IDEwMHB4O1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG5cbi50b3Bfc2xpZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnRvcF9zbGlkZXIgLml0ZW1zIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMTBweCA1cHg7XG59XG5cbi50b3Bfc2xpZGVyIC5pdGVtcyBpbWcge1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi10b3A6IC00cHg7XG59XG5cbi50b3Bfc2xpZGVyIC5pdGVtcyBwIHtcbiAgY29sb3I6ICM2MTUzNTM7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgd2lkdGg6IDcwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4ubXAge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA3MCU7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG4ubXAgaW1nIHtcbiAgd2lkdGg6IDM3cHg7XG4gIGhlaWdodDogMzdweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5tcCAudGV4dCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkICNjZmNmY2YgMC4wNWVtO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgd2lkdGg6IDIyMHB4O1xufVxuLm1wIC5mYS1waG90by12aWRlbyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIGNvbG9yOiAjNjE1MzUzO1xufVxuLm1wIC5mYS1saW5rIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgY29sb3I6ICM2MTUzNTM7XG59XG5cbi5wb3N0IHtcbiAgbWluLWhlaWdodDogMjAwcHg7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG59XG4ucG9zdCAudXNlciB7XG4gIGJhY2tncm91bmQ6ICNlZWVkZWQ7XG4gIGhlaWdodDogMzVweDtcbn1cbi5wb3N0IC51c2VyIGltZyB7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG4ucG9zdCAudXNlciAudXNlcm5hbWUge1xuICBjb2xvcjogIzYxNTM1MztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5wb3N0IC51c2VyIHNwYW4ge1xuICBjb2xvcjogI2E4YTVhNTtcbiAgcGFkZGluZzogMnB4IDEwcHg7XG59XG4ucG9zdCAudXNlciAuY29tbXVuaXR5IHtcbiAgY29sb3I6ICMwOEREODA7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDEzcHg7XG59XG4ucG9zdCAudXNlciAuZmFzIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBjb2xvcjogI2E4YTVhNTtcbn1cblxuLnRpdGxlIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBjb2xvcjogI2ZkODAyMGJkO1xuICBwYWRkaW5nOiAwIDVweDtcbn1cblxuLnRleHQge1xuICBjb2xvcjogIzYxNTM1MztcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuXG4uaW1hZ2UtcG9zdCB7XG4gIHdpZHRoOiAxMDUlO1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG4gIG1heC1oZWlnaHQ6IDY1dmg7XG59XG5cbi5pbmZvIHAge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5pbmZvIC5idWxsZXQge1xuICBwYWRkaW5nOiAwIDVweDtcbn1cblxuLmludGVyYWN0IC5jb2wgLmZhciB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmludGVyYWN0IC5jb2wgLmZhLXN0YXIge1xuICBtYXJnaW4tbGVmdDogNDAlO1xufVxuLmludGVyYWN0IC5jb2wgLmZhLWNvbW1lbnQge1xuICBtYXJnaW4tbGVmdDogMTAlO1xufVxuLmludGVyYWN0IC5jb2wgaDYge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBtYXJnaW4tdG9wOiAtNXB4O1xufVxuXG4udHJlbmQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQ6ICNlMmUxZTE4ZjtcbiAgd2lkdGg6IDIyJTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLnRyZW5kIC50YWcge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkFyY2hpdm8gQmxhY2tcIjtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoI2VlZSwgIzMzMywgI2VlZSk7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4udHJlbmQgLmhlYWRpbmcge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4udHJlbmRpbmcgLmluZm8ge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjNjE1MzUzO1xuICBtYXJnaW4tdG9wOiAtN3B4O1xufVxuLnRyZW5kaW5nIC5yb3cge1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbn1cbi50cmVuZGluZyAucm93IC5pbmZvIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzYxNTM1MztcbiAgbWFyZ2luLXRvcDogLTE5cHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuLnRyZW5kaW5nIGltZyB7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLnRyZW5kaW5nIC5jb21tdW5pdHkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiAjNjE1MzUzO1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4udHJlbmRpbmcgLmpvaW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiAjMDhERDgwO1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent() {
        _classCallCheck(this, LoginComponent);
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)();
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 14,
      vars: 0,
      consts: [[1, "row", 2, "height", "20vh"], [1, "form"], ["routerLink", "", 1, "brand"], [1, "login-form"], ["type", "text", "placeholder", "username"], ["type", "password", "placeholder", "password"], ["href", "profile"], [1, "message"], ["href", "signup"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Drumstick");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Not registered?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Create an account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]],
      styles: [".brand[_ngcontent-%COMP%] {\n  font-family: \"Ovo\";\n  color: #FD7F20;\n  padding: 20px;\n  left: 0.4%;\n  font-size: 45px;\n}\n\n.form[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  background: #9393c973;\n  max-width: 600px;\n  margin: 0 auto 100px;\n  padding: 45px;\n  text-align: center;\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\n}\n\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  outline: 0;\n  background: #f2f2f2;\n  width: 100%;\n  border: 0;\n  margin: 0 0 15px;\n  padding: 15px;\n  box-sizing: border-box;\n  font-size: 14px;\n}\n\n.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  text-transform: uppercase;\n  outline: 0;\n  background: #4CAF50;\n  width: 100%;\n  border: 0;\n  padding: 15px;\n  font-size: 14px;\n  transition: all 0.3 ease;\n  cursor: pointer;\n}\n\n.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n}\n\n.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n  background: #43A047;\n}\n\n.form[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  margin: 15px 0 0;\n  color: #b3b3b3;\n  font-size: 12px;\n}\n\n.form[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #4CAF50;\n  text-decoration: none;\n}\n\n.form[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.container[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  max-width: 300px;\n  margin: 0 auto;\n}\n\n.container[_ngcontent-%COMP%]:before, .container[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n\n.container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  margin: 50px auto;\n  text-align: center;\n}\n\n.container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 15px;\n  padding: 0;\n  font-size: 36px;\n  font-weight: 300;\n  color: #1a1a1a;\n}\n\n.container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #4d4d4d;\n  font-size: 12px;\n}\n\n.container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #000000;\n  text-decoration: none;\n}\n\n.container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  color: #EF3B3A;\n}\n\nbody[_ngcontent-%COMP%] {\n  background: #76b852;\n  \n  background: linear-gradient(to left, #76b852, #8DC26F);\n  font-family: \"Roboto\", sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dpbC9EZXNrdG9wL0RydW1zdGljay9EcnVtc3RpY2svc3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUU7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNDSjs7QURDRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDBFQUFBO0FDRUo7O0FEQUU7RUFDRSxpQ0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FDR0o7O0FEREU7RUFDRSxpQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBRUEsZUFBQTtFQUVBLHdCQUFBO0VBQ0EsZUFBQTtBQ0dKOztBREFFO0VBQ0UsY0FBQTtBQ0dKOztBRERFO0VBQ0UsbUJBQUE7QUNJSjs7QURGRTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNLSjs7QURIRTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQ01KOztBREpFO0VBQ0UsYUFBQTtBQ09KOztBRExFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDUUo7O0FETkU7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNTSjs7QURQRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNVSjs7QURSRTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNXSjs7QURURTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDWUo7O0FEVkU7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUNhSjs7QURYRTtFQUNFLGNBQUE7QUNjSjs7QURaRTtFQUNFLG1CQUFBO0VBQXFCLDhCQUFBO0VBSXJCLHNEQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0FDZ0JKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIC5icmFuZCB7XG4gICAgZm9udC1mYW1pbHk6IFwiT3ZvXCI7ICAgIFxuICAgIGNvbG9yOiAjRkQ3RjIwOyAgICBcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGxlZnQ6MC40JTtcbiAgICBmb250LXNpemU6IDQ1cHg7XG4gIH1cbiAgLmZvcm0ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIGJhY2tncm91bmQ6ICM5MzkzYzk3MztcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvIDEwMHB4O1xuICAgIHBhZGRpbmc6IDQ1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDVweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICB9XG4gIC5mb3JtIGlucHV0IHtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAwO1xuICAgIG1hcmdpbjogMCAwIDE1cHg7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICAuZm9ybSBidXR0b24ge1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgb3V0bGluZTogMDtcbiAgICBiYWNrZ3JvdW5kOiAjNENBRjUwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIFxuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjMgZWFzZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zIGVhc2U7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLmZvcm0gYnV0dG9uIGEge1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICB9XG4gIC5mb3JtIGJ1dHRvbjpob3ZlciwuZm9ybSBidXR0b246YWN0aXZlLC5mb3JtIGJ1dHRvbjpmb2N1cyB7XG4gICAgYmFja2dyb3VuZDogIzQzQTA0NztcbiAgfVxuICAuZm9ybSAubWVzc2FnZSB7XG4gICAgbWFyZ2luOiAxNXB4IDAgMDtcbiAgICBjb2xvcjogI2IzYjNiMztcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbiAgLmZvcm0gLm1lc3NhZ2UgYSB7XG4gICAgY29sb3I6ICM0Q0FGNTA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gIC5mb3JtIC5yZWdpc3Rlci1mb3JtIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgLmNvbnRhaW5lcjpiZWZvcmUsIC5jb250YWluZXI6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY2xlYXI6IGJvdGg7XG4gIH1cbiAgLmNvbnRhaW5lciAuaW5mbyB7XG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5jb250YWluZXIgLmluZm8gaDEge1xuICAgIG1hcmdpbjogMCAwIDE1cHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBjb2xvcjogIzFhMWExYTtcbiAgfVxuICAuY29udGFpbmVyIC5pbmZvIHNwYW4ge1xuICAgIGNvbG9yOiAjNGQ0ZDRkO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuICAuY29udGFpbmVyIC5pbmZvIHNwYW4gYSB7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gIC5jb250YWluZXIgLmluZm8gc3BhbiAuZmEge1xuICAgIGNvbG9yOiAjRUYzQjNBO1xuICB9XG4gIGJvZHkge1xuICAgIGJhY2tncm91bmQ6ICM3NmI4NTI7IC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChyaWdodCwgIzc2Yjg1MiwgIzhEQzI2Rik7XG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQocmlnaHQsICM3NmI4NTIsICM4REMyNkYpO1xuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudChyaWdodCwgIzc2Yjg1MiwgIzhEQzI2Rik7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICM3NmI4NTIsICM4REMyNkYpO1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7ICAgICAgXG4gIH0iLCIuYnJhbmQge1xuICBmb250LWZhbWlseTogXCJPdm9cIjtcbiAgY29sb3I6ICNGRDdGMjA7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGxlZnQ6IDAuNCU7XG4gIGZvbnQtc2l6ZTogNDVweDtcbn1cblxuLmZvcm0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQ6ICM5MzkzYzk3MztcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWFyZ2luOiAwIGF1dG8gMTAwcHg7XG4gIHBhZGRpbmc6IDQ1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yNCk7XG59XG5cbi5mb3JtIGlucHV0IHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIG91dGxpbmU6IDA7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDA7XG4gIG1hcmdpbjogMCAwIDE1cHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmZvcm0gYnV0dG9uIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG91dGxpbmU6IDA7XG4gIGJhY2tncm91bmQ6ICM0Q0FGNTA7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjMgZWFzZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZm9ybSBidXR0b24gYSB7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4uZm9ybSBidXR0b246aG92ZXIsIC5mb3JtIGJ1dHRvbjphY3RpdmUsIC5mb3JtIGJ1dHRvbjpmb2N1cyB7XG4gIGJhY2tncm91bmQ6ICM0M0EwNDc7XG59XG5cbi5mb3JtIC5tZXNzYWdlIHtcbiAgbWFyZ2luOiAxNXB4IDAgMDtcbiAgY29sb3I6ICNiM2IzYjM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmZvcm0gLm1lc3NhZ2UgYSB7XG4gIGNvbG9yOiAjNENBRjUwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5mb3JtIC5yZWdpc3Rlci1mb3JtIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5jb250YWluZXI6YmVmb3JlLCAuY29udGFpbmVyOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4uY29udGFpbmVyIC5pbmZvIHtcbiAgbWFyZ2luOiA1MHB4IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lciAuaW5mbyBoMSB7XG4gIG1hcmdpbjogMCAwIDE1cHg7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICMxYTFhMWE7XG59XG5cbi5jb250YWluZXIgLmluZm8gc3BhbiB7XG4gIGNvbG9yOiAjNGQ0ZDRkO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5jb250YWluZXIgLmluZm8gc3BhbiBhIHtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmNvbnRhaW5lciAuaW5mbyBzcGFuIC5mYSB7XG4gIGNvbG9yOiAjRUYzQjNBO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZDogIzc2Yjg1MjtcbiAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChyaWdodCwgIzc2Yjg1MiwgIzhEQzI2Rik7XG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHJpZ2h0LCAjNzZiODUyLCAjOERDMjZGKTtcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHJpZ2h0LCAjNzZiODUyLCAjOERDMjZGKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICM3NmI4NTIsICM4REMyNkYpO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/navbar/navbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/navbar/navbar.component.ts ***!
    \********************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)();
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 22,
      vars: 0,
      consts: [["rel", "stylesheet", "type", "text/css", "href", "//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"], [1, "navbar-fluid", "navbar-expand-lg", "navbar-light", "nav"], [1, "container-fluid", "print"], [1, "line1"], [1, "line2"], ["routerLink", "", 1, "navbar-brand", "brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarText", "aria-controls", "navbarText", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarText", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", 2, "padding-right", "30px", "margin-top", "10px"], [2, "color", "gray"], [1, "nav-item", 2, "padding-right", "17px"], [1, "btn", "login", 2, "height", "40px"], ["href", "/login", 1, "nav-link", 2, "padding", "0 8px"], [1, "nav-item"], [1, "btn", "signup", 2, "height", "40px"], ["href", "/signup", 1, "nav-link", 2, "padding", "0 8px"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Drumstick");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Signup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".print[_ngcontent-%COMP%] {\n  position: relative;\n  margin-left: -2px;\n  width: 45px;\n  height: 50px;\n  background: url(\"https://media.istockphoto.com/vectors/tribal-pattern-vector-seamless-vector-id814505894\");\n  background-size: contain;\n}\n\n.line1[_ngcontent-%COMP%] {\n  position: relative;\n  border-left: 7px solid #FD7F20;\n  height: 50px;\n  left: 0.2%;\n}\n\n.line2[_ngcontent-%COMP%] {\n  position: relative;\n  border-left: 3px solid #000000;\n  height: 50px;\n  left: 0.3%;\n}\n\n.brand[_ngcontent-%COMP%] {\n  font-family: \"Ovo\";\n  color: #FD7F20;\n  padding-right: 70%;\n  position: relative;\n  left: 0.4%;\n  font-size: 30px;\n}\n\n.login[_ngcontent-%COMP%] {\n  background: #08DD80;\n}\n\n.login[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: bold;\n}\n\n.signup[_ngcontent-%COMP%] {\n  border: 1px solid #08DD80;\n}\n\n.signup[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #08DD80;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dpbC9EZXNrdG9wL0RydW1zdGljay9EcnVtc3RpY2svc3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEdBQUE7RUFDQSx3QkFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDRUo7O0FEQUE7RUFDSSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNHSjs7QUREQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ0lKOztBRERBO0VBQ0ksbUJBQUE7QUNJSjs7QURISTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQ0tSOztBREZBO0VBQ0kseUJBQUE7QUNLSjs7QURKSTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQ01SIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmludCB7ICAgIFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tbGVmdDogLTJweDtcbiAgICB3aWR0aDogNDVweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9tZWRpYS5pc3RvY2twaG90by5jb20vdmVjdG9ycy90cmliYWwtcGF0dGVybi12ZWN0b3Itc2VhbWxlc3MtdmVjdG9yLWlkODE0NTA1ODk0XCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjsgICAgXG59XG4ubGluZTEge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItbGVmdDogN3B4IHNvbGlkICNGRDdGMjA7XG4gICAgaGVpZ2h0OiA1MHB4OyAgICAgIFxuICAgIGxlZnQ6IDAuMiU7XG59XG4ubGluZTIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICMwMDAwMDA7XG4gICAgaGVpZ2h0OiA1MHB4OyAgICAgIFxuICAgIGxlZnQ6IDAuMyU7XG59XG4uYnJhbmQge1xuICAgIGZvbnQtZmFtaWx5OiBcIk92b1wiO1xuICAgIGNvbG9yOiAjRkQ3RjIwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDcwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDowLjQlO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLmxvZ2luIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDhERDgwO1xuICAgIGEge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbn1cbi5zaWdudXAge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwOEREODA7XG4gICAgYSB7XG4gICAgICAgIGNvbG9yOiAjMDhERDgwO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG59IiwiLnByaW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tbGVmdDogLTJweDtcbiAgd2lkdGg6IDQ1cHg7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9tZWRpYS5pc3RvY2twaG90by5jb20vdmVjdG9ycy90cmliYWwtcGF0dGVybi12ZWN0b3Itc2VhbWxlc3MtdmVjdG9yLWlkODE0NTA1ODk0XCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG59XG5cbi5saW5lMSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCAjRkQ3RjIwO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGxlZnQ6IDAuMiU7XG59XG5cbi5saW5lMiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjMDAwMDAwO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGxlZnQ6IDAuMyU7XG59XG5cbi5icmFuZCB7XG4gIGZvbnQtZmFtaWx5OiBcIk92b1wiO1xuICBjb2xvcjogI0ZEN0YyMDtcbiAgcGFkZGluZy1yaWdodDogNzAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDAuNCU7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLmxvZ2luIHtcbiAgYmFja2dyb3VuZDogIzA4REQ4MDtcbn1cbi5sb2dpbiBhIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnNpZ251cCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwOEREODA7XG59XG4uc2lnbnVwIGEge1xuICBjb2xvcjogIzA4REQ4MDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/notifications/notifications.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/notifications/notifications.component.ts ***!
    \**********************************************************/

  /*! exports provided: NotificationsComponent */

  /***/
  function srcAppNotificationsNotificationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function () {
      return NotificationsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var NotificationsComponent = /*#__PURE__*/function () {
      function NotificationsComponent() {
        _classCallCheck(this, NotificationsComponent);
      }

      _createClass(NotificationsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotificationsComponent;
    }();

    NotificationsComponent.ɵfac = function NotificationsComponent_Factory(t) {
      return new (t || NotificationsComponent)();
    };

    NotificationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotificationsComponent,
      selectors: [["app-notifications"]],
      decls: 141,
      vars: 0,
      consts: [[1, "container-fluid", 2, "background", "#f0f0f08f", "height", "100%"], [1, "row"], [1, "col-md", "sidebar"], [1, "sidenavs"], ["routerLink", "/"], ["href", "/profile"], ["routerLink", "/communities"], [1, "sidenavs-active"], ["routerLink", "/notifications"], ["routerLink", "/projects"], [1, "col-md-9"], [1, "row", 2, "margin-top", "21px"], [1, "col-md-9", "notifications"], [1, "heading"], [1, "superscript"], [1, "container", "list", "unread"], ["href", "/singlecommunity"], ["src", "/assets/kayla_news.jpg"], [1, "username"], [1, "community"], [1, "time"], [1, "col-md", 2, "text-align", "center"], [1, "col-md-1"], [1, "col"]],
      template: function NotificationsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h6", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Communities");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h6", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Notifications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h6", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Notifications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "sup", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ul", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Kayla ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Mentioned you in a post, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Devcom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h6", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "3mins");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Kayla ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Mentioned you in a post, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Devcom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h6", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "3mins");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Kayla ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Mentioned you in a post, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Devcom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h6", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "3mins");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Kayla ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Mentioned you in a post, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Devcom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h6", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "3mins");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Kayla ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " Mentioned you in a post, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " Devcom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h6", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "3mins");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Kayla ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " Mentioned you in a post, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " Devcom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "h6", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "3mins");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Kayla ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " Mentioned you in a post, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " Devcom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "h6", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "3mins");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Kayla ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " Mentioned you in a post, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, " Devcom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "h6", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "3mins");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Kayla ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " Mentioned you in a post, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, " Devcom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "h6", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "3mins");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, " meme ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: [".sidebar[_ngcontent-%COMP%] {\n  background: white;\n  text-align: center;\n  width: 400px;\n}\n\n.sidenavs[_ngcontent-%COMP%] {\n  padding: 20px 0;\n  margin-left: -15px;\n  margin-right: -15px;\n  margin-top: -5px;\n}\n\n.sidenavs-active[_ngcontent-%COMP%] {\n  padding: 20px 0;\n  margin-top: -5px;\n  margin-left: -15px;\n  margin-right: -15px;\n  background-color: #ff6347;\n}\n\n.sidenavs-active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: bold;\n}\n\n.sidenavs[_ngcontent-%COMP%]:hover, .sidenavs[_ngcontent-%COMP%]:active, .sidenavs[_ngcontent-%COMP%]:focus {\n  background: #ff634733;\n}\n\n.sidenavs[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%], .sidenavs[_ngcontent-%COMP%]:active   a[_ngcontent-%COMP%], .sidenavs[_ngcontent-%COMP%]:focus   a[_ngcontent-%COMP%] {\n  color: tomato;\n}\n\n.sidenavs[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.sidebar[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-top: 65%;\n}\n\n.notifications[_ngcontent-%COMP%] {\n  margin: 0 45px;\n}\n\n.heading[_ngcontent-%COMP%] {\n  color: #08DD80;\n  font-weight: bolder;\n  margin-top: 30px;\n  margin-left: 20px;\n}\n\n.superscript[_ngcontent-%COMP%] {\n  color: white;\n  padding: 2px 5px;\n  background: #FD7F20;\n  border-radius: 5px;\n  font-size: 15px;\n  margin-left: 5px;\n}\n\n.unread[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: bolder;\n}\n\n.notifications[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.list[_ngcontent-%COMP%] {\n  list-style: none;\n  display: inline-block;\n  width: 100%;\n  max-height: 75vh;\n  overflow-y: auto;\n}\n\n.list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 20px;\n  color: gray;\n}\n\n.unread[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.list[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 80px;\n  width: 80px;\n  border-radius: 50%;\n}\n\n.username[_ngcontent-%COMP%] {\n  font-weight: bolder;\n}\n\n.community[_ngcontent-%COMP%] {\n  color: #08DD80;\n}\n\n.time[_ngcontent-%COMP%] {\n  margin-left: 95%;\n  color: #FD7F20;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dpbC9EZXNrdG9wL0RydW1zdGljay9EcnVtc3RpY2svc3JjL2FwcC9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7QUNDSjs7QURDSTtFQUNJLGFBQUE7QUNDUjs7QURHQTtFQUNJLFlBQUE7QUNBSjs7QURHQTtFQUNJLGVBQUE7QUNBSjs7QURHQTtFQUNJLGNBQUE7QUNBSjs7QURHQTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHQTtFQUNJLG1CQUFBO0FDQUo7O0FES0E7RUFDSSxXQUFBO0FDRko7O0FES0E7RUFDSSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNGSjs7QURLQTtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDRko7O0FES0E7RUFDSSxZQUFBO0FDRko7O0FESUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDREo7O0FESUE7RUFDSSxtQkFBQTtBQ0RKOztBRElBO0VBQ0ksY0FBQTtBQ0RKOztBRElBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZWJhciB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiA0MDBweDsgICAgXG59XG5cbi5zaWRlbmF2cyB7XG4gICAgcGFkZGluZzoyMHB4IDA7ICAgXG4gICAgbWFyZ2luLWxlZnQ6IC0xNXB4OyBcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNXB4OyAgICAgXG4gICAgbWFyZ2luLXRvcDogLTVweDtcbn1cblxuLnNpZGVuYXZzLWFjdGl2ZSB7XG4gICAgcGFkZGluZzoyMHB4IDA7ICBcbiAgICBtYXJnaW4tdG9wOiAtNXB4OyBcbiAgICBtYXJnaW4tbGVmdDogLTE1cHg7IFxuICAgIG1hcmdpbi1yaWdodDogLTE1cHg7IFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjYzNDc7ICAgIFxufVxuXG4uc2lkZW5hdnMtYWN0aXZlIGEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnNpZGVuYXZzOmhvdmVyLC5zaWRlbmF2czphY3RpdmUsLnNpZGVuYXZzOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmY2MzQ3MzM7ICAgIFxuXG4gICAgYSB7XG4gICAgICAgIGNvbG9yOiB0b21hdG87XG4gICAgfVxufVxuXG4uc2lkZW5hdnMgYSB7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4uc2lkZWJhciBoNSB7XG4gICAgbWFyZ2luLXRvcDogNjUlO1xufVxuXG4ubm90aWZpY2F0aW9ucyB7XG4gICAgbWFyZ2luOiAwIDQ1cHg7XG59XG5cbi5oZWFkaW5nIHtcbiAgICBjb2xvcjojMDhERDgwO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLnN1cGVyc2NyaXB0IHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMnB4IDVweDtcbiAgICBiYWNrZ3JvdW5kOiNGRDdGMjA7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBtYXJnaW4tbGVmdDogNXB4OyAgICBcbn1cblxuLnVucmVhZCBoNCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuXG5cbi5ub3RpZmljYXRpb25zIC5yb3cge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ubGlzdCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogNzV2aDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4ubGlzdCBwIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgY29sb3I6IGdyYXk7XG59XG5cbi51bnJlYWQgcCB7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuLmxpc3QgaW1nIHtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4udXNlcm5hbWUge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi5jb21tdW5pdHkge1xuICAgIGNvbG9yOiAjMDhERDgwO1xufVxuXG4udGltZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDk1JTtcbiAgICBjb2xvcjojRkQ3RjIwO1xufSIsIi5zaWRlYmFyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDQwMHB4O1xufVxuXG4uc2lkZW5hdnMge1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcbiAgbWFyZ2luLXRvcDogLTVweDtcbn1cblxuLnNpZGVuYXZzLWFjdGl2ZSB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgbWFyZ2luLXRvcDogLTVweDtcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2MzQ3O1xufVxuXG4uc2lkZW5hdnMtYWN0aXZlIGEge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uc2lkZW5hdnM6aG92ZXIsIC5zaWRlbmF2czphY3RpdmUsIC5zaWRlbmF2czpmb2N1cyB7XG4gIGJhY2tncm91bmQ6ICNmZjYzNDczMztcbn1cbi5zaWRlbmF2czpob3ZlciBhLCAuc2lkZW5hdnM6YWN0aXZlIGEsIC5zaWRlbmF2czpmb2N1cyBhIHtcbiAgY29sb3I6IHRvbWF0bztcbn1cblxuLnNpZGVuYXZzIGEge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5zaWRlYmFyIGg1IHtcbiAgbWFyZ2luLXRvcDogNjUlO1xufVxuXG4ubm90aWZpY2F0aW9ucyB7XG4gIG1hcmdpbjogMCA0NXB4O1xufVxuXG4uaGVhZGluZyB7XG4gIGNvbG9yOiAjMDhERDgwO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLnN1cGVyc2NyaXB0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAycHggNXB4O1xuICBiYWNrZ3JvdW5kOiAjRkQ3RjIwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLnVucmVhZCBoNCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi5ub3RpZmljYXRpb25zIC5yb3cge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmxpc3Qge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiA3NXZoO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4ubGlzdCBwIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgY29sb3I6IGdyYXk7XG59XG5cbi51bnJlYWQgcCB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmxpc3QgaW1nIHtcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogODBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4udXNlcm5hbWUge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4uY29tbXVuaXR5IHtcbiAgY29sb3I6ICMwOEREODA7XG59XG5cbi50aW1lIHtcbiAgbWFyZ2luLWxlZnQ6IDk1JTtcbiAgY29sb3I6ICNGRDdGMjA7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-notifications',
          templateUrl: './notifications.component.html',
          styleUrls: ['./notifications.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/profile/profile.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/profile/profile.component.ts ***!
    \**********************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-slick-carousel */
    "./node_modules/ngx-slick-carousel/__ivy_ngcc__/fesm2015/ngx-slick-carousel.js");

    var ProfileComponent = /*#__PURE__*/function () {
      function ProfileComponent() {
        _classCallCheck(this, ProfileComponent);

        this.slideConfig = {
          "slidesToShow": 3,
          "slidesToScroll": 1,
          "autoplay": true,
          "autoplaySpeed": 5550
        };
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          jquery__WEBPACK_IMPORTED_MODULE_1__(document).ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__('.autoplay').slick({
              slidesToShow: 3,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2000
            });
          });
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
      return new (t || ProfileComponent)();
    };

    ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProfileComponent,
      selectors: [["app-profile"]],
      decls: 117,
      vars: 1,
      consts: [[1, "container-fluid", 2, "background", "#f0f0f08f", "height", "fit-content"], [1, "row"], [1, "col-md", "sidebar"], [1, "sidenavs"], ["routerLink", "/"], [1, "sidenavs-active"], ["routerLink", "/profile"], ["routerLink", "/communities"], ["routerLink", "/notifications"], ["routerLink", "/projects"], [1, "col-md-9"], [1, "row", 2, "margin-top", "21px"], [1, "col-md-3", 2, "text-align", "center"], ["src", "/assets/random10.jpg", 1, "prof-pic"], [1, "user"], [1, "profession"], [1, "email"], [1, "socials"], ["href", "httpls://twitter.com"], ["src", "/assets/twitter.png", 1, "twitter"], ["href", "httpls://github.com"], ["src", "/assets/github.png", 1, "github"], ["src", "/assets/linkedin.png", 1, "github"], [1, "col-md-1"], [1, "col-md", 2, "text-align", "center"], ["src", "/assets/mowiki.png", 1, "mowiki-icon"], [1, "container", "mowiki"], [1, "keyword"], [1, "review-heading"], [1, "container-fluid", 2, "margin-left", "15px", "height", "190px"], [1, "carousel", "top_slider", 3, "config"], ["slickModal", "slick-carousel"], ["ngxSlickItem", "", 1, "review-slot"], [1, "card", "review"], [1, "row", 2, "padding", "3px"], [1, "col-md-1", 2, "text-align", "center"], ["src", "/assets/random1.jpg"], [1, "col"], ["src", "/assets/random8.jpg"], ["src", "/assets/random4.jpg"], ["src", "/assets/random13.jpg"]],
      template: function ProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h6", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Communities");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h6", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Notifications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h6", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h1", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h4", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Mobile Developer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h5", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Usernamedrummer@mail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ul", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "[Descriptive phrase]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " is the phrase that comes to mind when I think about ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "[name]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, ". I've had the pleasure of knowing ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "[name]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " for ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "[length of time], during which ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "[description of your working relationship]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, ". Above all, I was impressed with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "[name]'s ability to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "[description of what makes person really stand out]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, ". And, ofcourse, his/her ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "[personalitu trait]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, ". ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "[Name]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " would be a true asset for any positions requiring ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "[1-2 skills needed for position]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " and comes with my heartfelt recommendation.\" ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h6", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "What they say about you");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "ngx-slick-carousel", 30, 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "img", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "username1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Here is my review about this girl. She's smart, pretty and most of all, she writes code. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "img", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "username2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Here is my another review about this dude. He's cool mahn and mastered code. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "img", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "username3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Review on this bona fied developer. Kung fu on that code.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "img", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "username4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "if you're still reading this, clearly you're idle. How about we play among us then, good idea right ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.slideConfig);
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_4__["SlickCarouselComponent"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_4__["SlickItemDirective"]],
      styles: [".prof-pic[_ngcontent-%COMP%] {\n  height: 250px;\n  width: 250px;\n  margin-top: 20%;\n  padding: 10px;\n  border-radius: 50%;\n}\n\n.user[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #FD7F20;\n  padding-top: 15px;\n}\n\n.profession[_ngcontent-%COMP%] {\n  padding-top: 5px;\n}\n\n.email[_ngcontent-%COMP%] {\n  padding-top: 5px;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  background: white;\n  text-align: center;\n  width: 400px;\n}\n\n.sidenavs[_ngcontent-%COMP%] {\n  padding: 20px 0;\n  margin-left: -15px;\n  margin-right: -15px;\n  margin-top: -5px;\n}\n\n.sidenavs-active[_ngcontent-%COMP%] {\n  padding: 20px 0;\n  margin-top: -5px;\n  margin-left: -15px;\n  margin-right: -15px;\n  background-color: tomato;\n}\n\n.sidenavs-active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: bold;\n}\n\n.sidenavs[_ngcontent-%COMP%]:hover, .sidenavs[_ngcontent-%COMP%]:active, .sidenavs[_ngcontent-%COMP%]:focus {\n  background: #ff634733;\n}\n\n.sidenavs[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%], .sidenavs[_ngcontent-%COMP%]:active   a[_ngcontent-%COMP%], .sidenavs[_ngcontent-%COMP%]:focus   a[_ngcontent-%COMP%] {\n  color: tomato;\n}\n\n.sidenavs[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.sidebar[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-top: 65%;\n}\n\n.mowiki[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px;\n  margin-top: 10px;\n}\n\n.mowiki-icon[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  margin-top: 70px;\n}\n\n.keyword[_ngcontent-%COMP%] {\n  color: #FD7F20;\n}\n\n.review[_ngcontent-%COMP%] {\n  border: solid grey 0.01em;\n  background: white;\n  width: 400px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding: 10px;\n}\n\n.review-slot[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n\n.review-heading[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-left: 80px;\n  padding: 20px;\n  display: inline-block;\n  color: #08DD80;\n}\n\n.review[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 35px;\n  width: 35px;\n  border-radius: 50%;\n}\n\n.review[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  margin-top: 11px;\n  color: #08DD80;\n  font-weight: bold;\n}\n\n.review[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: gray;\n  margin-top: 10px;\n  text-align: center;\n}\n\n.socials[_ngcontent-%COMP%] {\n  list-style: none;\n  margin-left: -50px;\n  margin-top: 20px;\n}\n\n.socials[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 10px;\n}\n\n.twitter[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 30px;\n}\n\n.github[_ngcontent-%COMP%] {\n  width: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dpbC9EZXNrdG9wL0RydW1zdGljay9EcnVtc3RpY2svc3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtBQ0NKOztBRENJO0VBQ0ksYUFBQTtBQ0NSOztBREdBO0VBQ0ksWUFBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtBQ0FKOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHQTtFQUNJLGNBQUE7QUNBSjs7QURHQTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsYUFBQTtBQ0FKOztBREdBO0VBQ0ksY0FBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQ0FKOztBREVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0VKOztBRENBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURDQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0VKOztBRENBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0FDRUo7O0FEQ0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ0VKOztBRENBO0VBQ0ksV0FBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2YtcGljIHtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBtYXJnaW4tdG9wOiAyMCU7ICAgIFxuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlOyAgICBcbn1cblxuLnVzZXIge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiNGRDdGMjA7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG59XG5cbi5wcm9mZXNzaW9uIHtcbiAgICBwYWRkaW5nLXRvcDogNXB4OyAgICBcbn1cblxuLmVtYWlsIHtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG4uc2lkZWJhciB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiA0MDBweDsgICAgXG59XG5cbi5zaWRlbmF2cyB7XG4gICAgcGFkZGluZzoyMHB4IDA7ICAgXG4gICAgbWFyZ2luLWxlZnQ6IC0xNXB4OyBcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNXB4OyAgICAgXG4gICAgbWFyZ2luLXRvcDogLTVweDtcbn1cblxuLnNpZGVuYXZzLWFjdGl2ZSB7XG4gICAgcGFkZGluZzoyMHB4IDA7ICBcbiAgICBtYXJnaW4tdG9wOiAtNXB4OyBcbiAgICBtYXJnaW4tbGVmdDogLTE1cHg7IFxuICAgIG1hcmdpbi1yaWdodDogLTE1cHg7IFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRvbWF0bzsgICAgXG59XG5cbi5zaWRlbmF2cy1hY3RpdmUgYSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uc2lkZW5hdnM6aG92ZXIsLnNpZGVuYXZzOmFjdGl2ZSwuc2lkZW5hdnM6Zm9jdXMge1xuICAgIGJhY2tncm91bmQ6ICNmZjYzNDczMzsgICAgXG5cbiAgICBhIHtcbiAgICAgICAgY29sb3I6IHRvbWF0bztcbiAgICB9XG59XG5cbi5zaWRlbmF2cyBhIHtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5zaWRlYmFyIGg1IHtcbiAgICBtYXJnaW4tdG9wOiA2NSU7XG59XG5cbi5tb3dpa2kge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5tb3dpa2ktaWNvbiB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbi10b3A6IDcwcHg7ICBcbn1cblxuLmtleXdvcmQge1xuICAgIGNvbG9yOiAjRkQ3RjIwO1xufVxuXG4ucmV2aWV3IHtcbiAgICBib3JkZXI6IHNvbGlkIGdyZXkgMC4wMWVtO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHdpZHRoOiA0MDBweDsgXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDsgICBcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ucmV2aWV3LXNsb3Qge1xuICAgIG1hcmdpbjogMCAxMHB4O1xufVxuXG4ucmV2aWV3LWhlYWRpbmcge1xuICAgIG1hcmdpbi10b3A6IDVweDsgXG4gICAgbWFyZ2luLWxlZnQ6IDgwcHg7IFxuICAgIHBhZGRpbmc6IDIwcHg7IFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgXG4gICAgY29sb3I6ICMwOEREODA7XG59XG4ucmV2aWV3IGltZyB7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgICAgXG59XG4ucmV2aWV3IGg2IHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAxMXB4O1xuICAgIGNvbG9yOiAjMDhERDgwO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucmV2aWV3IHAge1xuICAgIGNvbG9yOiBncmF5O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc29jaWFscyB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBtYXJnaW4tbGVmdDogLTUwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnNvY2lhbHMgbGkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW46IDAgMTBweDtcbn1cblxuLnR3aXR0ZXIge1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMzBweDtcbn1cblxuLmdpdGh1YiB7XG4gICAgd2lkdGg6IDMwcHg7XG59IiwiLnByb2YtcGljIHtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgd2lkdGg6IDI1MHB4O1xuICBtYXJnaW4tdG9wOiAyMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnVzZXIge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNGRDdGMjA7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xufVxuXG4ucHJvZmVzc2lvbiB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbi5lbWFpbCB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbi5zaWRlYmFyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDQwMHB4O1xufVxuXG4uc2lkZW5hdnMge1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcbiAgbWFyZ2luLXRvcDogLTVweDtcbn1cblxuLnNpZGVuYXZzLWFjdGl2ZSB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgbWFyZ2luLXRvcDogLTVweDtcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0b21hdG87XG59XG5cbi5zaWRlbmF2cy1hY3RpdmUgYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5zaWRlbmF2czpob3ZlciwgLnNpZGVuYXZzOmFjdGl2ZSwgLnNpZGVuYXZzOmZvY3VzIHtcbiAgYmFja2dyb3VuZDogI2ZmNjM0NzMzO1xufVxuLnNpZGVuYXZzOmhvdmVyIGEsIC5zaWRlbmF2czphY3RpdmUgYSwgLnNpZGVuYXZzOmZvY3VzIGEge1xuICBjb2xvcjogdG9tYXRvO1xufVxuXG4uc2lkZW5hdnMgYSB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnNpZGViYXIgaDUge1xuICBtYXJnaW4tdG9wOiA2NSU7XG59XG5cbi5tb3dpa2kge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5tb3dpa2ktaWNvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLXRvcDogNzBweDtcbn1cblxuLmtleXdvcmQge1xuICBjb2xvcjogI0ZEN0YyMDtcbn1cblxuLnJldmlldyB7XG4gIGJvcmRlcjogc29saWQgZ3JleSAwLjAxZW07XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5yZXZpZXctc2xvdCB7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuXG4ucmV2aWV3LWhlYWRpbmcge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiA4MHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiAjMDhERDgwO1xufVxuXG4ucmV2aWV3IGltZyB7XG4gIGhlaWdodDogMzVweDtcbiAgd2lkdGg6IDM1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnJldmlldyBoNiB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMXB4O1xuICBjb2xvcjogIzA4REQ4MDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5yZXZpZXcgcCB7XG4gIGNvbG9yOiBncmF5O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zb2NpYWxzIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luLWxlZnQ6IC01MHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uc29jaWFscyBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG5cbi50d2l0dGVyIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbn1cblxuLmdpdGh1YiB7XG4gIHdpZHRoOiAzMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-profile',
          templateUrl: './profile.component.html',
          styleUrls: ['./profile.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/projects/projects.component.ts":
  /*!************************************************!*\
    !*** ./src/app/projects/projects.component.ts ***!
    \************************************************/

  /*! exports provided: ProjectsComponent */

  /***/
  function srcAppProjectsProjectsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () {
      return ProjectsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ProjectsComponent = /*#__PURE__*/function () {
      function ProjectsComponent() {
        _classCallCheck(this, ProjectsComponent);
      }

      _createClass(ProjectsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProjectsComponent;
    }();

    ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) {
      return new (t || ProjectsComponent)();
    };

    ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProjectsComponent,
      selectors: [["app-projects"]],
      decls: 206,
      vars: 0,
      consts: [[1, "container-fluid", 2, "background", "#f0f0f08f", "height", "100%"], [1, "row"], [1, "col-md", "sidebar"], [1, "sidenavs"], ["routerLink", "/"], ["href", "/profile"], ["routerLink", "/communities"], ["routerLink", "/notifications"], [1, "sidenavs-active"], ["routerLink", "/projects"], [1, "col-md-9"], [1, "row", 2, "margin-top", "21px", "margin-left", "50px"], [1, "col-md-11"], [1, "heading"], ["type", "text", "placeholder", "Search", 1, "search"], [1, "table", "table-hover"], ["scope", "col"], ["scope", "col", 1, "section"], [1, "list"], [1, "project"], ["scope", "row"], ["src", "assets/project_icon.png"], [1, "team"], [1, "open"], ["src", "/assets/open.png"], [1, "money"], ["src", "/assets/money.png"], [1, "not"], [1, "col-md", 2, "text-align", "center"], [1, "col-md-1"], [1, "col"]],
      template: function ProjectsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h6", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Communities");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h6", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Notifications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h6", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "My Projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "table", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Project Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Team");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Due date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Priority");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "tbody", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tr", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Stack Overflow");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "StackDevs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "30/10/2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "High");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "not started");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "tr", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "th", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Stack Overflow");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "StackDevs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "30/10/2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "High");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "not started");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "tr", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "th", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Stack Overflow");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "StackDevs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "30/10/2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "High");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "not started");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "tr", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "th", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Stack Overflow");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "StackDevs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "30/10/2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "High");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "not started");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "tr", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "th", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Stack Overflow");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "StackDevs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "30/10/2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "High");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "not started");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "tr", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "th", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Stack Overflow");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "StackDevs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "30/10/2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "High");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "not started");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "tr", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "th", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Stack Overflow");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "StackDevs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "30/10/2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "High");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "not started");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "tr", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "th", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Stack Overflow");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "StackDevs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "30/10/2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "High");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "not started");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "tr", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "th", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "Stack Overflow");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "StackDevs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "30/10/2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "High");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "not started");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, " meme ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: [".sidebar[_ngcontent-%COMP%] {\n  background: white;\n  text-align: center;\n  width: 400px;\n}\n\n.sidenavs[_ngcontent-%COMP%] {\n  padding: 20px 0;\n  margin-left: -15px;\n  margin-right: -15px;\n  margin-top: -5px;\n}\n\n.sidenavs-active[_ngcontent-%COMP%] {\n  padding: 20px 0;\n  margin-top: -5px;\n  margin-left: -15px;\n  margin-right: -15px;\n  background-color: #ff6347;\n}\n\n.sidenavs-active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: bold;\n}\n\n.sidenavs[_ngcontent-%COMP%]:hover, .sidenavs[_ngcontent-%COMP%]:active, .sidenavs[_ngcontent-%COMP%]:focus {\n  background: #ff634733;\n}\n\n.sidenavs[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%], .sidenavs[_ngcontent-%COMP%]:active   a[_ngcontent-%COMP%], .sidenavs[_ngcontent-%COMP%]:focus   a[_ngcontent-%COMP%] {\n  color: tomato;\n}\n\n.sidenavs[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.sidebar[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-top: 65%;\n}\n\n.heading[_ngcontent-%COMP%] {\n  color: #FD7F20;\n  font-weight: bolder;\n  margin-top: 30px;\n  margin-left: 20px;\n  display: inline-block;\n}\n\n.search[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 68%;\n}\n\n.project[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 30px;\n  display: inline-block;\n}\n\n.project[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #FD7F20;\n  display: inline-block;\n  font-weight: bolder;\n  margin-left: 15px;\n}\n\n.project[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.section[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.team[_ngcontent-%COMP%] {\n  color: #08DD80;\n}\n\n.not[_ngcontent-%COMP%] {\n  background: #C4C4C4;\n  padding: 7px 25px;\n  border-radius: 20px;\n  display: inline-block;\n  margin-left: 30px;\n}\n\n.open[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 20px;\n  width: 20px;\n}\n\n.list[_ngcontent-%COMP%] {\n  max-height: 75vh;\n  overflow-y: scroll;\n}\n\n.money[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 20px;\n  width: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dpbC9EZXNrdG9wL0RydW1zdGljay9EcnVtc3RpY2svc3JjL2FwcC9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0FDQ0o7O0FEQ0k7RUFDSSxhQUFBO0FDQ1I7O0FER0E7RUFDSSxZQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0FDQUo7O0FER0E7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUNBSjs7QURHQTtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUNBSjs7QURHQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtBQ0FKOztBREdBO0VBQ0ksY0FBQTtBQ0FKOztBREdBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREdBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREdBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREdBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZWJhciB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiA0MDBweDsgICAgXG59XG5cbi5zaWRlbmF2cyB7XG4gICAgcGFkZGluZzoyMHB4IDA7ICAgXG4gICAgbWFyZ2luLWxlZnQ6IC0xNXB4OyBcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNXB4OyAgICAgXG4gICAgbWFyZ2luLXRvcDogLTVweDtcbn1cblxuLnNpZGVuYXZzLWFjdGl2ZSB7XG4gICAgcGFkZGluZzoyMHB4IDA7ICBcbiAgICBtYXJnaW4tdG9wOiAtNXB4OyBcbiAgICBtYXJnaW4tbGVmdDogLTE1cHg7IFxuICAgIG1hcmdpbi1yaWdodDogLTE1cHg7IFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjYzNDc7ICAgIFxufVxuXG4uc2lkZW5hdnMtYWN0aXZlIGEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnNpZGVuYXZzOmhvdmVyLC5zaWRlbmF2czphY3RpdmUsLnNpZGVuYXZzOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmY2MzQ3MzM7ICAgIFxuXG4gICAgYSB7XG4gICAgICAgIGNvbG9yOiB0b21hdG87XG4gICAgfVxufVxuXG4uc2lkZW5hdnMgYSB7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4uc2lkZWJhciBoNSB7XG4gICAgbWFyZ2luLXRvcDogNjUlO1xufVxuXG4uaGVhZGluZyB7XG4gICAgY29sb3I6I0ZEN0YyMDtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7IFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnNlYXJjaCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiA2OCU7XG59XG5cbi5wcm9qZWN0IGltZyB7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnByb2plY3QgaDUge1xuICAgIGNvbG9yOiNGRDdGMjA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbi5wcm9qZWN0IHRkIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zZWN0aW9uIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50ZWFtIHtcbiAgICBjb2xvcjojMDhERDgwOyAgICBcbn1cblxuLm5vdCB7XG4gICAgYmFja2dyb3VuZDojQzRDNEM0O1xuICAgIHBhZGRpbmc6IDdweCAyNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuXG4ub3BlbiBpbWcge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG59XG5cbi5saXN0IHsgICAgXG4gICAgbWF4LWhlaWdodDogNzV2aDsgICAgXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4ubW9uZXkgaW1nIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xufVxuIiwiLnNpZGViYXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogNDAwcHg7XG59XG5cbi5zaWRlbmF2cyB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xuICBtYXJnaW4tdG9wOiAtNXB4O1xufVxuXG4uc2lkZW5hdnMtYWN0aXZlIHtcbiAgcGFkZGluZzogMjBweCAwO1xuICBtYXJnaW4tdG9wOiAtNXB4O1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG4gIG1hcmdpbi1yaWdodDogLTE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjYzNDc7XG59XG5cbi5zaWRlbmF2cy1hY3RpdmUgYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5zaWRlbmF2czpob3ZlciwgLnNpZGVuYXZzOmFjdGl2ZSwgLnNpZGVuYXZzOmZvY3VzIHtcbiAgYmFja2dyb3VuZDogI2ZmNjM0NzMzO1xufVxuLnNpZGVuYXZzOmhvdmVyIGEsIC5zaWRlbmF2czphY3RpdmUgYSwgLnNpZGVuYXZzOmZvY3VzIGEge1xuICBjb2xvcjogdG9tYXRvO1xufVxuXG4uc2lkZW5hdnMgYSB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnNpZGViYXIgaDUge1xuICBtYXJnaW4tdG9wOiA2NSU7XG59XG5cbi5oZWFkaW5nIHtcbiAgY29sb3I6ICNGRDdGMjA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5zZWFyY2gge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiA2OCU7XG59XG5cbi5wcm9qZWN0IGltZyB7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnByb2plY3QgaDUge1xuICBjb2xvcjogI0ZEN0YyMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuLnByb2plY3QgdGQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zZWN0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGVhbSB7XG4gIGNvbG9yOiAjMDhERDgwO1xufVxuXG4ubm90IHtcbiAgYmFja2dyb3VuZDogI0M0QzRDNDtcbiAgcGFkZGluZzogN3B4IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59XG5cbi5vcGVuIGltZyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbn1cblxuLmxpc3Qge1xuICBtYXgtaGVpZ2h0OiA3NXZoO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi5tb25leSBpbWcge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-projects',
          templateUrl: './projects.component.html',
          styleUrls: ['./projects.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/signup/signup.component.ts":
  /*!********************************************!*\
    !*** ./src/app/signup/signup.component.ts ***!
    \********************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var SignupComponent = /*#__PURE__*/function () {
      function SignupComponent() {
        _classCallCheck(this, SignupComponent);
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SignupComponent;
    }();

    SignupComponent.ɵfac = function SignupComponent_Factory(t) {
      return new (t || SignupComponent)();
    };

    SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignupComponent,
      selectors: [["app-signup"]],
      decls: 41,
      vars: 0,
      consts: [[1, "row", 2, "width", "100%"], [1, "col-md-7", 2, "background", "orange"], [1, "col"], [1, "row", 2, "height", "10vh"], [1, "form"], ["routerLink", "", 1, "brand"], [1, "register-form"], ["type", "text", "placeholder", "name"], ["type", "text", "placeholder", "email"], ["type", "password", "placeholder", "password"], ["href", "/profile"], [1, "message"], ["href", "/login"], ["href", "https://www.google.com/"], [1, "card", 2, "outline", "solid #3da1e4 0.1em"], [1, "row"], [1, "col-1"], ["src", "/assets/google.png", 1, "google-icon"], [1, "col-md-7"], [1, "option"], ["href", "https://www.github.com/"], [1, "card", 2, "background", "rgb(34, 33, 33)"], ["src", "/assets/github2.png", 1, "git-icon"], [1, "option", 2, "color", "white"]],
      template: function SignupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Drumstick");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "ALready registered?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Log in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "or");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h6", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Sign up with Google");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h6", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Sign up with Github");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]],
      styles: [".brand[_ngcontent-%COMP%] {\n  font-family: \"Ovo\";\n  color: #FD7F20;\n  position: relative;\n  left: 0.4%;\n  font-size: 45px;\n}\n\n.form[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  background: #FFFFFF;\n  width: 500px;\n  margin: 0 auto 100px;\n  padding: 45px;\n  text-align: center;\n}\n\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  outline: 0;\n  background: #f2f2f2;\n  width: 100%;\n  border: 0;\n  margin: 0 0 15px;\n  padding: 15px;\n  box-sizing: border-box;\n  font-size: 14px;\n}\n\n.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  text-transform: uppercase;\n  outline: 0;\n  background: #4CAF50;\n  width: 100%;\n  border: 0;\n  padding: 15px;\n  font-size: 14px;\n  transition: all 0.3 ease;\n  cursor: pointer;\n}\n\n.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n}\n\n.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n  background: #43A047;\n}\n\n.form[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  margin: 15px 0 0;\n  color: #b3b3b3;\n  font-size: 12px;\n}\n\n.form[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #4CAF50;\n  text-decoration: none;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\n.card[_ngcontent-%COMP%] {\n  height: 40px;\n}\n\n.google-icon[_ngcontent-%COMP%] {\n  height: 25px;\n  width: 25px;\n  margin-top: 5px;\n  margin-left: 10px;\n}\n\n.git-icon[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n}\n\n.option[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-weight: bold;\n}\n\nul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dpbC9EZXNrdG9wL0RydW1zdGljay9EcnVtc3RpY2svc3JjL2FwcC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ0NKOztBRENFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURDRTtFQUNFLGlDQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUNFSjs7QURBRTtFQUNFLGlDQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFFQSxlQUFBO0VBRUEsd0JBQUE7RUFDQSxlQUFBO0FDRUo7O0FEQUE7RUFDRSxjQUFBO0FDR0Y7O0FEQUU7RUFDRSxtQkFBQTtBQ0dKOztBRERFO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0lKOztBREZFO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FDS0o7O0FESEU7RUFDSSxnQkFBQTtBQ01OOztBREpFO0VBQ0ksWUFBQTtBQ09OOztBRExFO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNRTjs7QURKRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDT0o7O0FETEU7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FDUU47O0FETkU7RUFDSSxZQUFBO0FDU04iLCJmaWxlIjoic3JjL2FwcC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAuYnJhbmQge1xuICAgIGZvbnQtZmFtaWx5OiBcIk92b1wiO1xuICAgIGNvbG9yOiAjRkQ3RjIwOyAgICBcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDowLjQlO1xuICAgIGZvbnQtc2l6ZTogNDVweDtcbiAgfVxuICAuZm9ybSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG8gMTAwcHg7XG4gICAgcGFkZGluZzogNDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgXG4gIH1cbiAgLmZvcm0gaW5wdXQge1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICAgIG91dGxpbmU6IDA7XG4gICAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDA7XG4gICAgbWFyZ2luOiAwIDAgMTVweDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIC5mb3JtIGJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJhY2tncm91bmQ6ICM0Q0FGNTA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAwO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgXG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMyBlYXNlO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjMgZWFzZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbi5mb3JtIGJ1dHRvbiBhIHtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG5cbiAgLmZvcm0gYnV0dG9uOmhvdmVyLC5mb3JtIGJ1dHRvbjphY3RpdmUsLmZvcm0gYnV0dG9uOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kOiAjNDNBMDQ3O1xuICB9XG4gIC5mb3JtIC5tZXNzYWdlIHtcbiAgICBtYXJnaW46IDE1cHggMCAwO1xuICAgIGNvbG9yOiAjYjNiM2IzO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuICAuZm9ybSAubWVzc2FnZSBhIHtcbiAgICBjb2xvcjogIzRDQUY1MDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgdWwge1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgfVxuICAuY2FyZCB7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gIH1cbiAgLmdvb2dsZS1pY29uIHtcbiAgICAgIGhlaWdodDogMjVweDtcbiAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICBcbiAgfVxuXG4gIC5naXQtaWNvbiB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICB9XG4gIC5vcHRpb24ge1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOyAgICAgIFxuICB9XG4gIHVsIGEge1xuICAgICAgcGFkZGluZzogMnB4O1xuICB9IiwiLmJyYW5kIHtcbiAgZm9udC1mYW1pbHk6IFwiT3ZvXCI7XG4gIGNvbG9yOiAjRkQ3RjIwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDAuNCU7XG4gIGZvbnQtc2l6ZTogNDVweDtcbn1cblxuLmZvcm0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIHdpZHRoOiA1MDBweDtcbiAgbWFyZ2luOiAwIGF1dG8gMTAwcHg7XG4gIHBhZGRpbmc6IDQ1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZvcm0gaW5wdXQge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgb3V0bGluZTogMDtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMDtcbiAgbWFyZ2luOiAwIDAgMTVweDtcbiAgcGFkZGluZzogMTVweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uZm9ybSBidXR0b24ge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgb3V0bGluZTogMDtcbiAgYmFja2dyb3VuZDogIzRDQUY1MDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogMTVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMyBlYXNlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5mb3JtIGJ1dHRvbiBhIHtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG5cbi5mb3JtIGJ1dHRvbjpob3ZlciwgLmZvcm0gYnV0dG9uOmFjdGl2ZSwgLmZvcm0gYnV0dG9uOmZvY3VzIHtcbiAgYmFja2dyb3VuZDogIzQzQTA0Nztcbn1cblxuLmZvcm0gLm1lc3NhZ2Uge1xuICBtYXJnaW46IDE1cHggMCAwO1xuICBjb2xvcjogI2IzYjNiMztcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZm9ybSAubWVzc2FnZSBhIHtcbiAgY29sb3I6ICM0Q0FGNTA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxudWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4uY2FyZCB7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLmdvb2dsZS1pY29uIHtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMjVweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmdpdC1pY29uIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbn1cblxuLm9wdGlvbiB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG51bCBhIHtcbiAgcGFkZGluZzogMnB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-signup',
          templateUrl: './signup.component.html',
          styleUrls: ['./signup.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/singlecommunity/singlecommunity.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/singlecommunity/singlecommunity.component.ts ***!
    \**************************************************************/

  /*! exports provided: SinglecommunityComponent */

  /***/
  function srcAppSinglecommunitySinglecommunityComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SinglecommunityComponent", function () {
      return SinglecommunityComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");

    var SinglecommunityComponent = /*#__PURE__*/function () {
      function SinglecommunityComponent() {
        _classCallCheck(this, SinglecommunityComponent);
      }

      _createClass(SinglecommunityComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SinglecommunityComponent;
    }();

    SinglecommunityComponent.ɵfac = function SinglecommunityComponent_Factory(t) {
      return new (t || SinglecommunityComponent)();
    };

    SinglecommunityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SinglecommunityComponent,
      selectors: [["app-singlecommunity"]],
      decls: 127,
      vars: 0,
      consts: [[1, "container-fluid", 2, "background", "#f0f0f08f", "height", "100%"], [1, "container", 2, "background", "white"], [1, "row", "main"], [1, "col-md-4"], [1, "sidebar"], [1, "search-bar"], ["type", "text", "placeholder", "search drumstick"], [1, "guidelines"], [1, "header"], [1, "connect"], [2, "text-align", "center", "color", "black"], [1, "links"], ["href", "#"], ["src", "/assets/twitter.png", "alt", "", "width", "45%"], ["src", "/assets/github.png", "alt", ""], [1, "similar"], [1, "community"], ["src", "/assets/profile.jpg", "alt", "avatar"], [1, "col"], [1, "container-fluid", "community-section"], [1, "images"], ["src", "/assets/alc.jpeg", "alt", "", 1, "background"], [1, "row"], [1, "col-md-3"], [1, "logo"], ["src", "/assets/angular kenya.jpg", "alt", ""], [1, "group-details"], [1, "about"], [1, "textarea"], [1, "button"], [1, "community-posts"], [1, "post"], [1, "info"], [1, "title-section"], [1, "details"], ["src", "/assets/github.png", "alt", "github"], ["src", "/assets/open.png", "alt", "open source"], ["src", "/assets/money.png", "alt", "paid"], [1, "img"], ["src", "/assets/screenshot.png", "alt", "screenshot"], [1, "footer"], [1, "comments"], ["src", "/assets/comment.png", "alt", ""], [1, "share"], ["src", "/assets/share.png", "alt", ""]],
      template: function SinglecommunityComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Community guidelines");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Be polite");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, ", friendly, welcoming, and generally a nice person. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Be respectful and constructive");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " with your communication to fellow members. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Be collaborative.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " We can learn a lot from each other. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h5", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Connect with us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Similar communities");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Andela Kenya");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "GDG Nairobi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Angular Kenya");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "We 'ng serve' the Kenyan tech community to become proficient Angular developers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " JOIN ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Pew Pew");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Project1.9-7.14");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "img", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "img", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "img", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Working on a loader for ngx-translate internationalization library that loads locally stored translations for NativeScript Angular. In need of one angular dev.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "img", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "img", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "comments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "img", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "share");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "John Skeet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Stack overflow");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "img", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Made a web application to help developers share their blockers, and fellow developers are able to assist with the blocker in real time.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "img", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "comments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "img", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "share");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"]],
      styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap\");\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: \"Source Sans Pro\", sans-serif;\n  color: black;\n}\n.main[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.sidebar[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 90%;\n  z-index: 1;\n  overflow-x: hidden;\n}\n.sidebar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.sidebar[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/search.png\");\n  background-repeat: no-repeat;\n  background-position: left;\n  background-position-x: 8%;\n  background-size: 18px;\n  text-align: center;\n  height: 40px;\n  width: 250px;\n  border: 1px solid #08DD80;\n  border-radius: 30px;\n}\n.sidebar[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border: 1px solid #FD7F20;\n  border-radius: 30px;\n  outline: none;\n  color: #08DD80;\n}\n.sidebar[_ngcontent-%COMP%]   .guidelines[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .connect[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .similar[_ngcontent-%COMP%] {\n  border: solid gray 0.02em;\n}\n.sidebar[_ngcontent-%COMP%]   .guidelines[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .connect[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .similar[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  padding: 2%;\n  color: white;\n}\n.sidebar[_ngcontent-%COMP%]   .guidelines[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  background-color: #08DD80;\n}\n.sidebar[_ngcontent-%COMP%]   .connect[_ngcontent-%COMP%] {\n  padding-bottom: 1%;\n  background-color: rgba(8, 221, 128, 0.14);\n}\n.sidebar[_ngcontent-%COMP%]   .connect[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n}\n.sidebar[_ngcontent-%COMP%]   .similar[_ngcontent-%COMP%]   .community[_ngcontent-%COMP%] {\n  background-color: #eee;\n  text-align: left;\n  padding-left: 2%;\n  padding-top: 2%;\n  display: flex;\n  justify-content: left;\n}\n.sidebar[_ngcontent-%COMP%]   .similar[_ngcontent-%COMP%]   .community[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n}\n.sidebar[_ngcontent-%COMP%]   .similar[_ngcontent-%COMP%]   .community[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: bold;\n  padding-top: 1%;\n}\n.sidebar[_ngcontent-%COMP%]   .similar[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  background-color: #FD7F20;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #000;\n}\np[_ngcontent-%COMP%] {\n  font-size: 15px;\n  padding-left: 3%;\n  padding-right: 3%;\n  padding-top: 1.5%;\n}\n.community-section[_ngcontent-%COMP%] {\n  text-align: center;\n  max-height: 90vh;\n  overflow-y: auto;\n}\n.community-section[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.community-section[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 100%;\n  margin-top: -80px;\n  height: 140px;\n  border: 3px solid white;\n  display: inline-block;\n}\n.community-section[_ngcontent-%COMP%]   .group-details[_ngcontent-%COMP%] {\n  text-align: left;\n  display: inline-block;\n}\n.community-section[_ngcontent-%COMP%]   .group-details[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.community-section[_ngcontent-%COMP%]   .group-details[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   .textarea[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.community-section[_ngcontent-%COMP%]   .group-details[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  padding-top: 5%;\n}\n.community-section[_ngcontent-%COMP%]   .group-details[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex-direction: row;\n  background: white;\n  border: 3px solid #08DD80;\n  border-radius: 50%;\n}\n.community-section[_ngcontent-%COMP%]   .group-details[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #08DD80;\n}\n.community-posts[_ngcontent-%COMP%] {\n  border: 1px solid #FD7F20;\n  margin-left: 30px;\n  margin-right: 25px;\n}\n.community-posts[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  background-color: #eee;\n  text-align: left;\n  padding-left: 2%;\n  padding-top: 2%;\n  display: flex;\n  justify-content: left;\n}\n.community-posts[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n}\n.community-posts[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: bold;\n  padding-top: 1%;\n}\n.community-posts[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  text-align: left;\n  margin-left: 3%;\n  margin-right: 3%;\n}\n.community-posts[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  font-weight: bold;\n  color: #FD7F20;\n}\n.community-posts[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-right: 3%;\n}\n.community-posts[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.community-posts[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dpbC9EZXNrdG9wL0RydW1zdGljay9EcnVtc3RpY2svc3JjL2FwcC9zaW5nbGVjb21tdW5pdHkvc2luZ2xlY29tbXVuaXR5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaW5nbGVjb21tdW5pdHkvc2luZ2xlY29tbXVuaXR5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLG9GQUFBO0FBQ1I7RUFDSSxzQkFBQTtBQ0NKO0FERUE7RUFDSSxTQUFBO0VBQ0EsMENBQUE7RUFDQSxZQUFBO0FDQ0o7QURFQTtFQUNJLFdBQUE7QUNDSjtBRENBO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNFSjtBREFJO0VBQ0ksa0JBQUE7QUNFUjtBREFJO0VBQ0ksMkNBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDRVI7QURBSTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQ0VSO0FEQUk7OztFQUdJLHlCQUFBO0FDRVI7QUREUTs7O0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNLWjtBREZJO0VBQ0kseUJBQUE7QUNJUjtBREZJO0VBQ0ksa0JBQUE7RUFDQSx5Q0FBQTtBQ0lSO0FESFE7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7QUNLWjtBRERRO0VBQ0ksc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtBQ0daO0FERlk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDSWhCO0FERlk7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUNJaEI7QUREUTtFQUNJLHlCQUFBO0FDR1o7QURFQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtBQ0NKO0FERUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDQ0o7QURHQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0FKO0FERUk7RUFDSSxXQUFBO0FDQVI7QURHSTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBQ0RSO0FER0k7RUFDSSxnQkFBQTtFQUNBLHFCQUFBO0FDRFI7QURFUTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQ0FaO0FERWdCO0VBQ0ksaUJBQUE7QUNBcEI7QURHWTtFQUNJLGVBQUE7QUNEaEI7QURFZ0I7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0FwQjtBRENvQjtFQUNJLGNBQUE7QUNDeEI7QURTQTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ05KO0FEUVE7RUFDSSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FDTlo7QURPWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNMaEI7QURPWTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQ0xoQjtBRFVnQjtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDUnBCO0FEU29CO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ1B4QjtBRFdnQjtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUNUcEI7QURhUTtFQUNJLFdBQUE7QUNYWjtBRGNRO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0FDWloiLCJmaWxlIjoic3JjL2FwcC9zaW5nbGVjb21tdW5pdHkvc2luZ2xlY29tbXVuaXR5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U291cmNlK1NhbnMrUHJvJmRpc3BsYXk9c3dhcCcpO1xuKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5tYWluIHtcbiAgICB3aWR0aDogMTAwJTsgICAgXG59XG4uc2lkZWJhciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiA5MCU7ICAgXG4gICAgei1pbmRleDogMTsgICBcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG5cbiAgICBwIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAuc2VhcmNoLWJhciBpbnB1dCB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9zZWFyY2gucG5nJyk7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogOCU7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMThweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzA4REQ4MDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICB9XG4gICAgLnNlYXJjaC1iYXIgaW5wdXQ6Zm9jdXMge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRkQ3RjIwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBjb2xvcjogIzA4REQ4MDtcbiAgICB9XG4gICAgLmd1aWRlbGluZXMsXG4gICAgLmNvbm5lY3QsXG4gICAgLnNpbWlsYXIge1xuICAgICAgICBib3JkZXI6IHNvbGlkIGdyYXkgMC4wMmVtO1xuICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIlO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5ndWlkZWxpbmVzIC5oZWFkZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDhERDgwO1xuICAgIH1cbiAgICAuY29ubmVjdCB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4LCAyMjEsIDEyOCwgMC4xNCk7XG4gICAgICAgIC5saW5rcyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnNpbWlsYXIge1xuICAgICAgICAuY29tbXVuaXR5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyJTtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMSU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkQ3RjIwO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5hIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICMwMDA7XG59XG5cbnAge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDMlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDMlO1xuICAgIHBhZGRpbmctdG9wOiAxLjUlO1xufVxuXG4vLyBDb21tdW5pdHkgaW5mb1xuLmNvbW11bml0eS1zZWN0aW9uIHsgICAgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgIFxuICAgIG1heC1oZWlnaHQ6IDkwdmg7XG4gICAgb3ZlcmZsb3cteTogYXV0bzsgICAgXG5cbiAgICAuYmFja2dyb3VuZCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5pbWFnZXMgLmxvZ28gaW1nIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogLTgwcHg7ICAgICAgICBcbiAgICAgICAgaGVpZ2h0OiAxNDBweDsgICAgICAgICAgICAgICAgXG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuICAgIC5ncm91cC1kZXRhaWxzIHsgICAgICAgICAgICAgICAgXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7ICAgICAgICBcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAuYWJvdXQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDsgICAgICAgICAgICBcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIC50ZXh0YXJlYSB7XG4gICAgICAgICAgICAgICAgaDQge1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNSU7XG4gICAgICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICMwOEREODA7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzA4REQ4MDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gY29tbXVuaXR5IHBvc3RzXG5cbi5jb21tdW5pdHktcG9zdHMge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGRDdGMjA7XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICAgIC5wb3N0IHtcbiAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMiU7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMiU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDElO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5pbmZvIHtcbiAgICAgICAgICAgIC50aXRsZS1zZWN0aW9uIHtcbiAgICAgICAgICAgICAgICAuZGV0YWlscyB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDMlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMlO1xuICAgICAgICAgICAgICAgICAgICBoNSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRkQ3RjIwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuaW1hZ2VzIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMyU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5pbWcgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvb3RlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U291cmNlK1NhbnMrUHJvJmRpc3BsYXk9c3dhcFwiKTtcbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogXCJTb3VyY2UgU2FucyBQcm9cIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ubWFpbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2lkZWJhciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDkwJTtcbiAgei1pbmRleDogMTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuLnNpZGViYXIgcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zaWRlYmFyIC5zZWFyY2gtYmFyIGlucHV0IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9zZWFyY2gucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDglO1xuICBiYWNrZ3JvdW5kLXNpemU6IDE4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMjUwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwOEREODA7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG59XG4uc2lkZWJhciAuc2VhcmNoLWJhciBpbnB1dDpmb2N1cyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNGRDdGMjA7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiAjMDhERDgwO1xufVxuLnNpZGViYXIgLmd1aWRlbGluZXMsXG4uc2lkZWJhciAuY29ubmVjdCxcbi5zaWRlYmFyIC5zaW1pbGFyIHtcbiAgYm9yZGVyOiBzb2xpZCBncmF5IDAuMDJlbTtcbn1cbi5zaWRlYmFyIC5ndWlkZWxpbmVzIC5oZWFkZXIsXG4uc2lkZWJhciAuY29ubmVjdCAuaGVhZGVyLFxuLnNpZGViYXIgLnNpbWlsYXIgLmhlYWRlciB7XG4gIHBhZGRpbmc6IDIlO1xuICBjb2xvcjogd2hpdGU7XG59XG4uc2lkZWJhciAuZ3VpZGVsaW5lcyAuaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4REQ4MDtcbn1cbi5zaWRlYmFyIC5jb25uZWN0IHtcbiAgcGFkZGluZy1ib3R0b206IDElO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgsIDIyMSwgMTI4LCAwLjE0KTtcbn1cbi5zaWRlYmFyIC5jb25uZWN0IC5saW5rcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuLnNpZGViYXIgLnNpbWlsYXIgLmNvbW11bml0eSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogMiU7XG4gIHBhZGRpbmctdG9wOiAyJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xufVxuLnNpZGViYXIgLnNpbWlsYXIgLmNvbW11bml0eSBpbWcge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uc2lkZWJhciAuc2ltaWxhciAuY29tbXVuaXR5IHAge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy10b3A6IDElO1xufVxuLnNpZGViYXIgLnNpbWlsYXIgLmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRDdGMjA7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG5wIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDMlO1xuICBwYWRkaW5nLXJpZ2h0OiAzJTtcbiAgcGFkZGluZy10b3A6IDEuNSU7XG59XG5cbi5jb21tdW5pdHktc2VjdGlvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWF4LWhlaWdodDogOTB2aDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbi5jb21tdW5pdHktc2VjdGlvbiAuYmFja2dyb3VuZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbW11bml0eS1zZWN0aW9uIC5pbWFnZXMgLmxvZ28gaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgbWFyZ2luLXRvcDogLTgwcHg7XG4gIGhlaWdodDogMTQwcHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uY29tbXVuaXR5LXNlY3Rpb24gLmdyb3VwLWRldGFpbHMge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uY29tbXVuaXR5LXNlY3Rpb24gLmdyb3VwLWRldGFpbHMgLmFib3V0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmNvbW11bml0eS1zZWN0aW9uIC5ncm91cC1kZXRhaWxzIC5hYm91dCAudGV4dGFyZWEgaDQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb21tdW5pdHktc2VjdGlvbiAuZ3JvdXAtZGV0YWlscyAuYWJvdXQgLmJ1dHRvbiB7XG4gIHBhZGRpbmctdG9wOiA1JTtcbn1cbi5jb21tdW5pdHktc2VjdGlvbiAuZ3JvdXAtZGV0YWlscyAuYWJvdXQgLmJ1dHRvbiBidXR0b24ge1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyOiAzcHggc29saWQgIzA4REQ4MDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLmNvbW11bml0eS1zZWN0aW9uIC5ncm91cC1kZXRhaWxzIC5hYm91dCAuYnV0dG9uIGJ1dHRvbiBhIHtcbiAgY29sb3I6ICMwOEREODA7XG59XG5cbi5jb21tdW5pdHktcG9zdHMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjRkQ3RjIwO1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xufVxuLmNvbW11bml0eS1wb3N0cyAucG9zdCAuaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiAyJTtcbiAgcGFkZGluZy10b3A6IDIlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG59XG4uY29tbXVuaXR5LXBvc3RzIC5wb3N0IC5oZWFkZXIgaW1nIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLmNvbW11bml0eS1wb3N0cyAucG9zdCAuaGVhZGVyIHAge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy10b3A6IDElO1xufVxuLmNvbW11bml0eS1wb3N0cyAucG9zdCAuaW5mbyAudGl0bGUtc2VjdGlvbiAuZGV0YWlscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDMlO1xuICBtYXJnaW4tcmlnaHQ6IDMlO1xufVxuLmNvbW11bml0eS1wb3N0cyAucG9zdCAuaW5mbyAudGl0bGUtc2VjdGlvbiAuZGV0YWlscyBoNSB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjRkQ3RjIwO1xufVxuLmNvbW11bml0eS1wb3N0cyAucG9zdCAuaW5mbyAudGl0bGUtc2VjdGlvbiAuaW1hZ2VzIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMyU7XG59XG4uY29tbXVuaXR5LXBvc3RzIC5wb3N0IC5pbWcgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29tbXVuaXR5LXBvc3RzIC5wb3N0IC5mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SinglecommunityComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-singlecommunity',
          templateUrl: './singlecommunity.component.html',
          styleUrls: ['./singlecommunity.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/submit/submit.component.ts":
  /*!********************************************!*\
    !*** ./src/app/submit/submit.component.ts ***!
    \********************************************/

  /*! exports provided: SubmitComponent */

  /***/
  function srcAppSubmitSubmitComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubmitComponent", function () {
      return SubmitComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _submit_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./submit.directive */
    "./src/app/submit/submit.directive.ts");

    var SubmitComponent = /*#__PURE__*/function () {
      function SubmitComponent() {
        _classCallCheck(this, SubmitComponent);
      }

      _createClass(SubmitComponent, [{
        key: "showpost",
        value: function showpost() {
          document.getElementById("post-field").style.display = "block";
          document.getElementById("project-field").style.display = "none";
          document.getElementById("media-field").style.display = "none";
        }
      }, {
        key: "showproject",
        value: function showproject() {
          document.getElementById("project-field").style.display = "block";
          document.getElementById("post-field").style.display = "none";
          document.getElementById("media-field").style.display = "none";
        }
      }, {
        key: "showmedia",
        value: function showmedia() {
          document.getElementById("media-field").style.display = "block";
          document.getElementById("post-field").style.display = "none";
          document.getElementById("project-field").style.display = "none";
        }
      }, {
        key: "addlink",
        value: function addlink() {
          document.getElementById("additional").style.display = "block";
          document.getElementById("addition").style.display = "none";
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          jquery__WEBPACK_IMPORTED_MODULE_1__('#the-title').keyup(function () {
            var characterCount = jquery__WEBPACK_IMPORTED_MODULE_1__(this).val().length,
                current = jquery__WEBPACK_IMPORTED_MODULE_1__('#current'),
                maximum = jquery__WEBPACK_IMPORTED_MODULE_1__('#maximum'),
                theCount = jquery__WEBPACK_IMPORTED_MODULE_1__('#the-count');
            current.text(characterCount);
          });
        }
      }]);

      return SubmitComponent;
    }();

    SubmitComponent.ɵfac = function SubmitComponent_Factory(t) {
      return new (t || SubmitComponent)();
    };

    SubmitComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SubmitComponent,
      selectors: [["app-submit"]],
      decls: 116,
      vars: 0,
      consts: [["href", "https://cdn.syncfusion.com/ej2/material.css", "rel", "stylesheet"], [1, "container-fluid", "background"], [1, "row"], [1, "col"], [1, "col-9"], [1, "heading"], [1, "row", 2, "margin-top", "25px"], [1, "col", 2, "background", "white", "height", "fit-content", "border", "solid #e0e0e0 0.01em"], [1, "container", 2, "padding", "10px"], [1, "guide"], [1, "container-fluid", "upload"], [1, "col", "navigation"], ["id", "post", 1, "post", 3, "click"], [1, "fas", "fa-clone"], [1, "project", 3, "click"], [1, "fas", "fa-project-diagram"], [1, "media1", 3, "click"], [1, "fas", "fa-photo-video"], [1, "poll"], [1, "fas", "fa-poll-h"], [1, "col-10"], [1, "container-fluid", "submit-area"], ["id", "inputGroupSelect01", 1, "form-control", "community-select"], ["selected", ""], ["value", "1"], ["value", "2"], ["value", "3"], [1, "input-group", "mb-3"], ["type", "text", "id", "the-title", "placeholder", "Title", "aria-label", "Title", "maxlength", "300", "aria-describedby", "basic-addon1", 1, "form-control"], [1, "input-group-append"], ["id", "the-count", 1, "input-group-text"], ["id", "current"], ["id", "maximum"], ["id", "post-field", 1, "input-group", "mb-3"], ["name", "text", "rows", "10", "placeholder", "Write text...", 1, "textfield"], ["id", "project-field", 1, "input-group", "mb-3"], [1, "row", 2, "width", "100%"], [1, "col-7"], ["appSubmit", "", 1, "dropzone"], ["type", "file", "id", "fileDropRef", "multiple", ""], ["fileDropRef", ""], [1, "fas", "fa-upload"], ["for", "fileDropRef"], [1, "input-group", "input"], [1, "input-group-prepend", "prepend"], ["id", "basic-addon1", 1, "input-group-text"], [1, "fab", "fa-github"], ["type", "text", "placeholder", "github link", "aria-label", "Githublink", "aria-describedby", "basic-addon1", 1, "form-control", "githublink"], ["src", "/assets/deployed.png"], ["type", "text", "placeholder", "deployed link", "aria-label", "Deployedlink", "aria-describedby", "basic-addon1", 1, "form-control", "deployedlink"], ["id", "additional", 1, "another"], [1, "fas", "fa-link"], ["type", "text", "placeholder", "link ...", "aria-label", "Anotherlink", "aria-describedby", "basic-addon1", 1, "form-control", "anotherlink"], ["id", "addition", 1, "addition", 3, "click"], ["name", "text", "rows", "4", "placeholder", "Describe your project...", 1, "textfield"], ["id", "media-field", 1, "input-group", "mb-3"], [1, "col-md-7"], ["name", "text", "rows", "4", "placeholder", "Write text...", 1, "textfield"], ["type", "submit", 1, "btn"]],
      template: function SubmitComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Post something...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "When posting ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "1. Show politeness and be friendly.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "2. Respect others.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "3. Share constructive post.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "4. Check for duplicates before.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "5. Beware of community guidelines.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubmitComponent_Template_p_click_28_listener() {
            return ctx.showpost();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Post");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubmitComponent_Template_p_click_31_listener() {
            return ctx.showproject();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubmitComponent_Template_p_click_34_listener() {
            return ctx.showmedia();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Media");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Poll");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "form", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "select", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Choose community...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "option", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "One");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "option", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Two");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Three");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "/ 300");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "textarea", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "input", 39, 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Drag and drop project image here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "or");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "label", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Browse for image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "project link:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "i", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "input", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "img", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "input", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "i", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "input", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubmitComponent_Template_p_click_93_listener() {
            return ctx.addlink();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "+");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "textarea", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "input", 39, 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Drag and drop image/video here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "or");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "label", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Browse for image/video");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "textarea", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "button", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Post");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _submit_directive__WEBPACK_IMPORTED_MODULE_4__["SubmitDirective"]],
      styles: [".background[_ngcontent-%COMP%] {\n  background: #f0f0f08f;\n  height: 100%;\n  max-height: 93.9vh;\n}\n\n.heading[_ngcontent-%COMP%] {\n  margin-top: 8%;\n}\n\n.upload[_ngcontent-%COMP%] {\n  height: 550px;\n  background-color: white;\n  border-radius: 5px;\n  border: solid #e0e0e0 0.01em;\n  padding-top: 20px;\n  margin-bottom: 45px;\n}\n\n.guide[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n\n.navigation[_ngcontent-%COMP%] {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: 15% 0;\n  background: white;\n}\n\n.navigation[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 550;\n  background: #f3f3f3;\n}\n\n.navigation[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover {\n  background: #08dd812c;\n  color: #08dd81;\n}\n\n.navigation[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding: 10px;\n  width: 119%;\n  margin-left: -15px;\n}\n\n.navigation[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background: linear-gradient(-45deg, #ffba2494, #dadd0894, #08dd1a98, #067746b4);\n  background-size: 400% 400%;\n  -webkit-animation: gradient 15s ease infinite;\n          animation: gradient 15s ease infinite;\n  color: white;\n}\n\n@-webkit-keyframes gradient {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n\n@keyframes gradient {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n\n.navigation[_ngcontent-%COMP%]   .project[_ngcontent-%COMP%] {\n  margin-top: -16px;\n  padding: 10px;\n  width: 119%;\n  margin-left: -15px;\n}\n\n.navigation[_ngcontent-%COMP%]   .media1[_ngcontent-%COMP%] {\n  margin-top: -16px;\n  padding: 10px;\n  width: 119%;\n  margin-left: -15px;\n}\n\n.navigation[_ngcontent-%COMP%]   .poll[_ngcontent-%COMP%] {\n  margin-top: -16px;\n  padding: 10px;\n  width: 119%;\n  margin-left: -15px;\n}\n\n.navigation[_ngcontent-%COMP%]   .fa-clone[_ngcontent-%COMP%] {\n  margin-left: -15px;\n  margin-right: 5px;\n}\n\n.navigation[_ngcontent-%COMP%]   .fa-project-diagram[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.navigation[_ngcontent-%COMP%]   .fa-photo-video[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  margin-left: -10px;\n}\n\n.navigation[_ngcontent-%COMP%]   .fa-poll-h[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  margin-left: -25px;\n}\n\n.submit-area[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 10px;\n}\n\n.community-select[_ngcontent-%COMP%] {\n  width: 40%;\n  margin-top: 10px;\n}\n\n#the-title[_ngcontent-%COMP%] {\n  border-right: none;\n  margin-top: 15px;\n}\n\n#the-count[_ngcontent-%COMP%] {\n  float: right;\n  padding: 0 0.3em 0 0.1em;\n  font-size: 0.675rem;\n  background: white;\n  border-left: none;\n  margin-top: 15px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  margin-left: 40%;\n  background-color: orange;\n  color: white;\n  padding: 5px 25px;\n}\n\n#post-field[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.textfield[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  width: 100%;\n  border: solid #d3d3d3 0.01em;\n  padding: 5px 0 5px 5px;\n}\n\n#project-field[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.dropzone[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px;\n  padding: 2rem;\n  text-align: center;\n  border: dashed 1px #979797;\n  position: relative;\n}\n\n.dropzone[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  position: absolute;\n  z-index: 2;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n\n.dropzone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 30px;\n  margin-bottom: 10px;\n  color: #b1afaf;\n}\n\n.dropzone[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: white;\n  border-radius: 21.5px;\n  background-color: #08dd81c2;\n  padding: 2px 10px;\n}\n\n.dropzone[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: #b1afaf;\n}\n\n#additional[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.input[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n\n.prepend[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  border-right: none;\n}\n\n#basic-addon1[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 15px;\n}\n\n#basic-addon1[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-left: -6px;\n}\n\n#basic-addon1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: -6px;\n  height: 20px;\n  width: 20px;\n  border-radius: 50%;\n}\n\n.githublink[_ngcontent-%COMP%] {\n  border-left: none;\n  margin-left: -10px;\n  border-radius: 15px;\n}\n\n.deployedlink[_ngcontent-%COMP%] {\n  border-left: none;\n  margin-left: -10px;\n  border-radius: 15px;\n}\n\n.anotherlink[_ngcontent-%COMP%] {\n  border-left: none;\n  margin-left: -10px;\n  border-radius: 15px;\n}\n\n.addition[_ngcontent-%COMP%] {\n  text-align: center;\n  color: gray;\n  margin-top: 5px;\n  font-size: 20px;\n}\n\n#addition[_ngcontent-%COMP%] {\n  display: block;\n}\n\n#media-field[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dpbC9EZXNrdG9wL0RydW1zdGljay9EcnVtc3RpY2svc3JjL2FwcC9zdWJtaXQvc3VibWl0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdWJtaXQvc3VibWl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURHQTtFQUNJLGNBQUE7QUNBSjs7QURHQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDQUo7O0FES0E7RUFDSSxlQUFBO0FDRko7O0FEUUE7RUFDSSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNMSjs7QURPSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0xSOztBRFFJO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0FDTlI7O0FEUUk7RUFDRyxnQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNOUDs7QURTSTtFQUNJLCtFQUFBO0VBQ0gsMEJBQUE7RUFDRyw2Q0FBQTtVQUFBLHFDQUFBO0VBQ0EsWUFBQTtBQ1BSOztBRFVJO0VBQ0k7SUFDSSwyQkFBQTtFQ1JWO0VEVU07SUFDSSw2QkFBQTtFQ1JWO0VEVU07SUFDSSwyQkFBQTtFQ1JWO0FBQ0Y7O0FEREk7RUFDSTtJQUNJLDJCQUFBO0VDUlY7RURVTTtJQUNJLDZCQUFBO0VDUlY7RURVTTtJQUNJLDJCQUFBO0VDUlY7QUFDRjs7QURhSTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ1hSOztBRGNJO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDWlI7O0FEY0k7RUFDSSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNaUjs7QURlSTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUNiUjs7QURnQkk7RUFDSSxpQkFBQTtBQ2RSOztBRGlCSTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUNmUjs7QURrQkk7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FDaEJSOztBRHFCQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQ2xCSjs7QUR1QkE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7QUNwQko7O0FEd0JBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQ3JCSjs7QUR3QkE7RUFDSSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ3JCSjs7QUR5QkE7RUFDSSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDdEJKOztBRDJCQTtFQUNJLGNBQUE7QUN4Qko7O0FEMkJBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQ3hCSjs7QURnQ0E7RUFDSSxhQUFBO0FDN0JKOztBRGlDQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtBQzlCSjs7QURnQ0k7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQzlCUjs7QURpQ0k7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDL0JSOztBRGtDSTtFQUNJLFlBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7QUNoQ1I7O0FEbUNJO0VBQ0ksY0FBQTtBQ2pDUjs7QUR1Q0E7RUFDSSxhQUFBO0FDcENKOztBRHVDQTtFQUNJLGtCQUFBO0FDcENKOztBRHVDQTtFQUNJLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGtCQUFBO0FDcENKOztBRHVDQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7QUNwQ0o7O0FEc0NJO0VBQ0ksaUJBQUE7QUNwQ1I7O0FEdUNJO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDckNSOztBRHlDQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ3RDSjs7QUR5Q0E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUN0Q0o7O0FEMENBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDdkNKOztBRDJDQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDeENKOztBRDJDQTtFQUNJLGNBQUE7QUN4Q0o7O0FENENBO0VBQ0ksYUFBQTtBQ3pDSiIsImZpbGUiOiJzcmMvYXBwL3N1Ym1pdC9zdWJtaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL0JhY2tncm91bmRcbi5iYWNrZ3JvdW5kIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwOGY7ICBcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogOTMuOXZoOyAgICAgXG59XG5cbi5oZWFkaW5nIHtcbiAgICBtYXJnaW4tdG9wOiA4JTsgICAgXG59XG5cbi51cGxvYWQge1xuICAgIGhlaWdodDogNTUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogIHNvbGlkICNlMGUwZTAgMC4wMWVtOyAgICBcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA0NXB4OyAgICBcbn1cblxuLy8vLy8vLyBHdWlkZWxpbmVzIHNlY3Rpb24gLy8vLy8vL1xuXG4uZ3VpZGUge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcblxufVxuXG5cbi8vbmF2aWdhdGlvbiBcbi5uYXZpZ2F0aW9uIHsgICAgXG4gICAgaGVpZ2h0OmZpdC1jb250ZW50O1xuICAgIG1hcmdpbjogMTUlIDA7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgXG4gICAgcCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICAgICAgICAgICBcbiAgICAgICAgZm9udC13ZWlnaHQ6IDU1MDtcbiAgICAgICAgYmFja2dyb3VuZDogI2YzZjNmMztcbiAgICB9XG5cbiAgICBwOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzA4ZGQ4MTJjO1xuICAgICAgICBjb2xvcjogIzA4ZGQ4MTtcbiAgICB9XG4gICAgLnBvc3Qge1xuICAgICAgIG1hcmdpbi10b3A6IDIwcHg7IFxuICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgd2lkdGg6IDExOSU7XG4gICAgICAgbWFyZ2luLWxlZnQ6IC0xNXB4OyAgICAgICAgXG4gICAgfVxuXG4gICAgLmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNmZmJhMjQ5NCwgI2RhZGQwODk0LCAjMDhkZDFhOTgsICMwNjc3NDZiNCk7XG5cdCAgICBiYWNrZ3JvdW5kLXNpemU6IDQwMCUgNDAwJTtcbiAgICAgICAgYW5pbWF0aW9uOiBncmFkaWVudCAxNXMgZWFzZSBpbmZpbml0ZTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgZ3JhZGllbnQge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XG4gICAgICAgIH1cbiAgICAgICAgNTAlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNTAlO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIC5wcm9qZWN0IHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTE2cHg7ICAgICAgICAgXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIHdpZHRoOiAxMTklO1xuICAgICAgICBtYXJnaW4tbGVmdDogLTE1cHg7ICAgICAgICBcbiAgICB9XG5cbiAgICAubWVkaWExIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTE2cHg7ICAgICAgICAgXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIHdpZHRoOiAxMTklO1xuICAgICAgICBtYXJnaW4tbGVmdDogLTE1cHg7ICAgICAgICBcbiAgICB9XG4gICAgLnBvbGwge1xuICAgICAgICBtYXJnaW4tdG9wOiAtMTZweDsgICAgICAgICBcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgd2lkdGg6IDExOSU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTVweDsgICAgXG4gICAgfVxuXG4gICAgLmZhLWNsb25lIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICB9XG4gICAgXG4gICAgLmZhLXByb2plY3QtZGlhZ3JhbSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIH1cblxuICAgIC5mYS1waG90by12aWRlbyB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gICAgfVxuXG4gICAgLmZhLXBvbGwtaCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogLTI1cHg7XG4gICAgfVxufVxuXG4vL3N1Ym1pdCBhcmVhIFxuLnN1Ym1pdC1hcmVhIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuXG59XG5cbi8vY29tbXVuaXR5IHNlbGVjdCBmaWVsZFxuLmNvbW11bml0eS1zZWxlY3Qge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLy90aXRsZSBpbnB1dCBmaWVsZFxuI3RoZS10aXRsZSB7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbiN0aGUtY291bnQgeyAgICBcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcGFkZGluZzogMCAwLjNlbSAwIDAuMWVtIDtcbiAgICBmb250LXNpemU6IDAuNjc1cmVtO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlOyAgIFxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG5cbn1cblxuLmJ0biB7XG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDVweCAyNXB4O1xufVxuXG4vLy8vLy8vLy8vIHBvc3Qgb3B0aW9uIC8vLy8vLy8vLy9cbi8vcG9zdCBmaWVsZFxuI3Bvc3QtZmllbGQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4udGV4dGZpZWxkIHtcbiAgICBtYXJnaW4tdG9wOiAxNXB4OyAgICBcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IHNvbGlkICNkM2QzZDMgMC4wMWVtO1xuICAgIHBhZGRpbmc6IDVweCAwIDVweCA1cHg7XG59XG5cblxuXG5cbi8vLy8vLy8vLy8gcHJvamVjdCBvcHRpb24gLy8vLy8vLy8vL1xuXG4jcHJvamVjdC1maWVsZCB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLy9wcm9qZWN0IGZpZWxkXG4uZHJvcHpvbmUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgcGFkZGluZzogIDJyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlcjogZGFzaGVkIDFweCAjOTc5Nzk3O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBcbiAgICBpbnB1dCB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgIH1cbiAgICBcbiAgICBpIHtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICBjb2xvcjogI2IxYWZhZjtcbiAgICB9XG5cbiAgICBsYWJlbCB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTsgICAgICAgIFxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMS41cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwOGRkODFjMjtcbiAgICAgICAgcGFkZGluZzogMnB4IDEwcHg7XG4gICAgfVxuXG4gICAgaDYgeyAgICAgICAgXG4gICAgICAgIGNvbG9yOiAjYjFhZmFmO1xuICAgIH1cbn1cblxuXG4vL2FkZCBsaW5rIGFyZWFcbiNhZGRpdGlvbmFsIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uaW5wdXQge1xuICAgIG1hcmdpbi1ib3R0b206IDVweDsgICAgXG59XG5cbi5wcmVwZW5kIHtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lOyAgICAgIFxufVxuXG4jYmFzaWMtYWRkb24xIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTsgXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDsgICBcblxuICAgIGkge1xuICAgICAgICBtYXJnaW4tbGVmdDogLTZweDtcbiAgICB9XG5cbiAgICBpbWcge1xuICAgICAgICBtYXJnaW4tbGVmdDogLTZweDtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIH1cbn1cblxuLmdpdGh1Ymxpbmsge1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4uZGVwbG95ZWRsaW5rIHtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuXG4uYW5vdGhlcmxpbmsge1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4vL2FkZCBhbm90aGVyIGxpbmsgZmllbGRcbi5hZGRpdGlvbiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiBncmF5OyAgXG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuI2FkZGl0aW9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLy8vLy8vLy8vLyBtZWRpYSBvcHRpb24gLy8vLy8vLy8vL1xuI21lZGlhLWZpZWxkIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuIiwiLmJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiAjZjBmMGYwOGY7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LWhlaWdodDogOTMuOXZoO1xufVxuXG4uaGVhZGluZyB7XG4gIG1hcmdpbi10b3A6IDglO1xufVxuXG4udXBsb2FkIHtcbiAgaGVpZ2h0OiA1NTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBzb2xpZCAjZTBlMGUwIDAuMDFlbTtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDQ1cHg7XG59XG5cbi5ndWlkZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLm5hdmlnYXRpb24ge1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBtYXJnaW46IDE1JSAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi5uYXZpZ2F0aW9uIHAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA1NTA7XG4gIGJhY2tncm91bmQ6ICNmM2YzZjM7XG59XG4ubmF2aWdhdGlvbiBwOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzA4ZGQ4MTJjO1xuICBjb2xvcjogIzA4ZGQ4MTtcbn1cbi5uYXZpZ2F0aW9uIC5wb3N0IHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDExOSU7XG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcbn1cbi5uYXZpZ2F0aW9uIC5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjZmZiYTI0OTQsICNkYWRkMDg5NCwgIzA4ZGQxYTk4LCAjMDY3NzQ2YjQpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDQwMCUgNDAwJTtcbiAgYW5pbWF0aW9uOiBncmFkaWVudCAxNXMgZWFzZSBpbmZpbml0ZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuQGtleWZyYW1lcyBncmFkaWVudCB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XG4gIH1cbiAgNTAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDUwJTtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XG4gIH1cbn1cbi5uYXZpZ2F0aW9uIC5wcm9qZWN0IHtcbiAgbWFyZ2luLXRvcDogLTE2cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiAxMTklO1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG59XG4ubmF2aWdhdGlvbiAubWVkaWExIHtcbiAgbWFyZ2luLXRvcDogLTE2cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiAxMTklO1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG59XG4ubmF2aWdhdGlvbiAucG9sbCB7XG4gIG1hcmdpbi10b3A6IC0xNnB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogMTE5JTtcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xufVxuLm5hdmlnYXRpb24gLmZhLWNsb25lIHtcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5uYXZpZ2F0aW9uIC5mYS1wcm9qZWN0LWRpYWdyYW0ge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5uYXZpZ2F0aW9uIC5mYS1waG90by12aWRlbyB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG59XG4ubmF2aWdhdGlvbiAuZmEtcG9sbC1oIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMjVweDtcbn1cblxuLnN1Ym1pdC1hcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5jb21tdW5pdHktc2VsZWN0IHtcbiAgd2lkdGg6IDQwJTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuI3RoZS10aXRsZSB7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuI3RoZS1jb3VudCB7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZzogMCAwLjNlbSAwIDAuMWVtO1xuICBmb250LXNpemU6IDAuNjc1cmVtO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5idG4ge1xuICBtYXJnaW4tbGVmdDogNDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNXB4IDI1cHg7XG59XG5cbiNwb3N0LWZpZWxkIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi50ZXh0ZmllbGQge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBzb2xpZCAjZDNkM2QzIDAuMDFlbTtcbiAgcGFkZGluZzogNXB4IDAgNXB4IDVweDtcbn1cblxuI3Byb2plY3QtZmllbGQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uZHJvcHpvbmUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgcGFkZGluZzogMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IGRhc2hlZCAxcHggIzk3OTc5NztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmRyb3B6b25lIGlucHV0IHtcbiAgb3BhY2l0eTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG4uZHJvcHpvbmUgaSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgY29sb3I6ICNiMWFmYWY7XG59XG4uZHJvcHpvbmUgbGFiZWwge1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDIxLjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4ZGQ4MWMyO1xuICBwYWRkaW5nOiAycHggMTBweDtcbn1cbi5kcm9wem9uZSBoNiB7XG4gIGNvbG9yOiAjYjFhZmFmO1xufVxuXG4jYWRkaXRpb25hbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5pbnB1dCB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLnByZXBlbmQge1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbn1cblxuI2Jhc2ljLWFkZG9uMSB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuI2Jhc2ljLWFkZG9uMSBpIHtcbiAgbWFyZ2luLWxlZnQ6IC02cHg7XG59XG4jYmFzaWMtYWRkb24xIGltZyB7XG4gIG1hcmdpbi1sZWZ0OiAtNnB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5naXRodWJsaW5rIHtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLmRlcGxveWVkbGluayB7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi5hbm90aGVybGluayB7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi5hZGRpdGlvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IGdyYXk7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4jYWRkaXRpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuI21lZGlhLWZpZWxkIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubmitComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-submit',
          templateUrl: './submit.component.html',
          styleUrls: ['./submit.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/submit/submit.directive.ts":
  /*!********************************************!*\
    !*** ./src/app/submit/submit.directive.ts ***!
    \********************************************/

  /*! exports provided: SubmitDirective */

  /***/
  function srcAppSubmitSubmitDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubmitDirective", function () {
      return SubmitDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SubmitDirective = function SubmitDirective() {
      _classCallCheck(this, SubmitDirective);
    };

    SubmitDirective.ɵfac = function SubmitDirective_Factory(t) {
      return new (t || SubmitDirective)();
    };

    SubmitDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: SubmitDirective,
      selectors: [["", "appSubmit", ""]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubmitDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[appSubmit]'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/wil/Desktop/Drumstick/Drumstick/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map