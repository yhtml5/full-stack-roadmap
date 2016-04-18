var bcModules = bcModules || {};
var bcUtil = bcUtil || {};

(function(u) {
    'use strict';
    u.bcVersion = function(link) {
        return link + "?" + window.scriptVersion;
    };
    u.getTemplate = function(module, partern) {
        if (!module || module == "common") {
            return u.bcVersion("template/" + partern + ".html");
        } else {
            return u.bcVersion("app/" + module + "/template/" + partern + ".html?");
        }

    }
    u.getControl = function(module, subControl) {
        if (!subControl) {
            return u.bcVersion("app/" + module + "/control.js");
        } else {
            return u.bcVersion("app/" + module + "/" + subControl + ".control.js");
        }
    }
    u.getDataPath = function(module) {
        if (!module || module == "common") {
            return "data/";
        } else {
            return "app/" + module + "/data/";
        }
    }
    u.routeFactory = function(prefix, module) {
        var moduleUpperName = module.charAt(0).toUpperCase() + module.slice(1);
        var that = {
            url: "/" + module,
            views: {
                'menu': {
                    templateUrl: u.getTemplate(prefix, 'menu.left')
                },
                'panel': {
                    templateUrl: u.getTemplate(prefix, module),
                    controller: prefix + moduleUpperName + "Ctrl"
                }
            },
            _files: []
        };

        that.resolve = {
            "data": ['$ocLazyLoad', function ($ocLazyLoad) {
                // you can lazy load files for an existing module
                return $ocLazyLoad.load({
                    name: prefix + moduleUpperName,
                    serie: true,
                    files: that._files
                });
            }]
        };

        return that
    }
    u.appanalysisRouteFactory = function(module) {
        var route = u.routeFactory("appanalysis", module);
        route._files = [
            u.getControl("appanalysis", module)];
        return route;
    };
    u.appdataRouteFactory = function(module) {
        var route = u.routeFactory("appdata", module);
        route._files = [
            '/plugin/angular-modal-service/angular-modal-service.min.js',
            '/plugin/angular-modal-service/custom.css',
            '/plugin/angular-dropdowns/angular-dropdowns.js',
            '/plugin/angular-dropdowns/angular-dropdowns.css',
            u.getControl("appdata", module)];
        return route;
    }
    u.usersettingRouteFactory = function(module) {
        var route = u.routeFactory("usersetting", module);
        route._files = [ '/plugin/angular-file-upload/angular-file-upload.js',
            '/plugin/angular-upload-button/angular-upload-button.js',
            '/plugin/angular-dropdowns/angular-dropdowns.js',
            '/plugin/angular-dropdowns/angular-dropdowns.css',
            u.getControl("usersetting", module)];
        return route;
    }
    u.appsettingRouteFactory = function(module) {
        var moduleUpperName = module.charAt(0).toUpperCase() + module.slice(1);
        return {
            url: "/" + module,
                views : {
                'menu': {
                    templateUrl: u.getTemplate("appsetting", 'menu.left')
                },
                'panel': {
                    templateUrl:  u.getTemplate("common", 'validation'),
                        controller: "appsetting" + moduleUpperName + "Ctrl"
                }
            },
            resolve : {
                "setting": ['$ocLazyLoad', function($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load({
                        name: 'appsetting' + moduleUpperName,
                        serie: true,
                        files: [ '/plugin/angular-file-upload/angular-file-upload.js',
                            '/plugin/angular-upload-button/angular-upload-button.js',
                            u.getControl("appsetting", module)]
                    });
                }]
            }
        };
    }
}(bcUtil));
(function(m,u) {
    'use strict';
    var moduleName = "dashboard";
    var module = m[moduleName] = angular.module(moduleName,['ui.router', 'oc.lazyLoad']);
    module.constant("hintMsg", {
        savedSuccess: "保存成功",
        savedFail: "保存失败",
        copiedSuccess: "复制成功",
        copiedFail: "复制失败"
    })
    /**
     * for x-www-urlencode
     */
    module.config(function($httpProvider) {
        //对php的post处理
        $httpProvider.defaults.transformRequest = function(request){
            if(typeof(request)!='object'){
                return request;
            }
            var str = [];
            for(var k in request){
                if(k.charAt(0)=='$'){
                    delete request[k];
                    continue;
                }
                var v='object'==typeof(request[k])?JSON.stringify(request[k]):request[k];
                str.push(encodeURIComponent(k) + "=" + encodeURIComponent(v));
            }
            return str.join("&");
        };
        $httpProvider.defaults.timeout=20000;
        $httpProvider.defaults.headers.post = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'X-Requested-With': 'XMLHttpRequest'
        };
    });

    /**
     * route
     */
    module.config(function($stateProvider,   $urlRouterProvider) {
        $urlRouterProvider.otherwise("/view/applist");
        $stateProvider
            .state("view", {
                url: "/view",
                template: '<header ui-view="header"></header><div ui-view="content"></div>'
            })
            .state("view.applist", {
                url: "/applist",
                views : {
                    'header': {
                        templateUrl: u.getTemplate("applist", 'header'),
                        controller: "applistHeaderCtrl"
                    },
                    'content': {
                        templateUrl:  u.getTemplate("applist", 'content'),
                        controller: "applistContentCtrl"
                    }
                },
                resolve : {
                    "applist": ['$ocLazyLoad', function($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load({
                            name: 'applist',
                            serie: true,
                            files: [ '/lib/js/angular-1.4.0-cookies.min.js',
                                '/lib/js/md5.js',
                                '/plugin/angular-modal-service/angular-modal-service.min.js',
                                '/plugin/angular-modal-service/custom.css',
                                u.getControl("applist")]
                        });
                    }]
                }
            })
            .state("user",{
                url: "/user",
                template: '<header ui-view="header"></header><section style="background-color:#32323a;" ui-view="content"></section>'
            })
            .state("user.setting",{
                url: "/setting",
                views : {
                    'header': {
                        templateUrl: u.getTemplate("usersetting", 'header'),
                        controller: "usersettingHeaderCtrl"
                    },
                    'content': {
                        templateUrl:  u.getTemplate("common", 'content'),
                        controller: "usersettingContentCtrl"
                    }
                },
                resolve : {
                    "setting": ['$ocLazyLoad', function($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load({
                            name: 'usersetting',
                            serie: true,
                            files: [ '/lib/js/angular-1.4.0-cookies.min.js',
                                '/lib/js/md5.js',
                                '/plugin/angular-ui-switch/angular-ui-switch.min.js',
                                '/plugin/angular-ui-switch/angular-ui-switch.min.css',
                                u.getControl("usersetting")]
                        });
                    }]
                }
            })
            .state("user.setting.pwd",u.usersettingRouteFactory("pwd"))
            .state("user.setting.verify",u.usersettingRouteFactory("verify"))
            .state("user.setting.preference",u.usersettingRouteFactory("preference"))
            .state("user.setting.issued",u.usersettingRouteFactory("issued"))
            .state("user.setting.manageaccount",u.usersettingRouteFactory("manageaccount"))
            .state("user.setting.coupon",u.usersettingRouteFactory("coupon"))
            .state("user.setting.bcgateway",u.usersettingRouteFactory("bcgateway"))
            .state("app", {
                url: "/app",
                template: '<header ui-view="header"></header><section style="background-color:#32323a;" ui-view="content"></section>'
            })
            .state("app.apply", {
                url: "/apply/:appName/:objectid",
                views : {
                    'header': {
                        templateUrl: u.getTemplate("appapply", 'header'),
                        controller: "appapplyHeaderCtrl"
                    },
                    'content': {
                        templateUrl:  u.getTemplate("common", 'content'),
                        controller: "appapplyContentCtrl"
                    }
                },
                resolve : {
                    "appanalysis": ['$ocLazyLoad', function($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load({
                            name: 'appapply',
                            serie: true,
                            files: [
                                '/plugin/angular-ui-switch/angular-ui-switch.min.js',
                                '/plugin/angular-ui-switch/angular-ui-switch.min.css',
                                u.getControl("appapply")
                            ]
                        });
                    }]
                }
            })
            .state("app.apply.progress", {
                url: "/progress",
                views : {
                    'menu': {
                        templateUrl: u.getTemplate("appapply", 'menu.left')
                    },
                    'panel': {
                        templateUrl:  u.getTemplate("appapply", 'progress'),
                        controller: "appapplyProgressCtrl"
                    }
                },
                resolve : {
                    "setting": ['$ocLazyLoad', function($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load({
                            name: 'apppapplyProgress',
                            serie: true,
                            files: [
                                u.getControl("appapply", 'progress')]
                        });
                    }]
                }
            })
            .state("app.apply.create", {
                url: "/create",
                views : {
                    'menu': {
                        templateUrl: u.getTemplate("appapply", 'menu.left')
                    },
                    'panel': {
                        templateUrl:  u.getTemplate("appapply", 'create'),
                        controller: "appapplyCreateCtrl"
                    }
                },
                resolve : {
                    "setting": ['$ocLazyLoad', function($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load({
                            name: 'apppapplyCreate',
                            serie: true,
                            files: [ '/plugin/angular-file-upload/angular-file-upload.js',
                                '/plugin/angular-upload-button/angular-upload-button.js',
                                u.getControl("appapply", 'create')]
                        });
                    }]
                }

            })
            .state("app.apply.walletapply", {
                url: "/walletapply",
                views : {
                    'menu': {
                        templateUrl: u.getTemplate("appapply", 'menu.left')
                    },
                    'panel': {
                        templateUrl:  u.getTemplate("appapply", 'walletapply'),
                        controller: "appapplyWalletapplyCtrl"
                    }
                },
                resolve : {
                    "setting": ['$ocLazyLoad', function($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load({
                            name: 'apppapplyWalletapply',
                            serie: true,
                            files: [ '/plugin/angular-file-upload/angular-file-upload.js',
                                '/plugin/angular-upload-button/angular-upload-button.js',
                                u.getControl("appapply", 'walletapply')]
                        });
                    }]
                }

            })
            .state("app.analysis", {
                url: "/analysis/:appName/:objectid",
                views : {
                    'header': {
                        templateUrl: u.getTemplate("appanalysis", 'header'),
                        controller: "appanalysisHeaderCtrl"
                    },
                    'content': {
                        templateUrl:  u.getTemplate("common", 'content'),
                        controller: "appanalysisContentCtrl"
                    }
                },
                resolve : {
                    "appanalysis": ['$ocLazyLoad', function($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load({
                            name: 'appanalysis',
                            serie: true,
                            files: [
                                '/plugin/highcharts/highcharts.js',
                                //'/plugin/highcharts/no-data-display.js',
                                "/plugin/highcharts/highcharts-ng.min.js",
                                u.bcVersion("/lib/js/jquery-ui-1.11.4.custom.min.js"),
                                "/plugin/ui-date/date.js",
                                //"/plugin/ui-date/jquery-ui.min.css",
                                '/plugin/angular-dropdowns/angular-dropdowns.js',
                                '/plugin/angular-dropdowns/angular-dropdowns.css',
                                u.getControl("appanalysis")
                               ]
                        });
                    }]
                }
            })
            .state("app.analysis.payoverview", u.appanalysisRouteFactory("payoverview"))
            .state("app.analysis.overview", u.appanalysisRouteFactory("overview"))
            .state("app.analysis.revenue", u.appanalysisRouteFactory("revenue"))
            .state("app.analysis.bill", u.appanalysisRouteFactory("bill"))
            .state("app.analysis.distribution", u.appanalysisRouteFactory("distribution"))
            .state("app.analysis.income", u.appanalysisRouteFactory("income"))
            .state("app.analysis.trade", u.appanalysisRouteFactory("trade"))
            .state("app.analysis.category", u.appanalysisRouteFactory("category"))
            //.state("app.analysis.feedback", u.appanalysisRouteFactory("feedback"))
            .state("app.analysis.feedback", {
                url: "/feedback",
                views : {
                    'menu': {
                        templateUrl: u.getTemplate("appanalysis", 'menu.left')
                    },
                    'panel': {
                        templateUrl:  u.getTemplate("appanalysis", 'feedback'),
                        controller: "analysisFeedbackCtrl"
                    }
                },
                resolve : {
                    "setting": ['$ocLazyLoad', function($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load({
                            name: 'analysisFeedback',
                            serie: true,
                            files: [
                                u.getControl("appanalysis", "feedback")]
                        });
                    }]
                }
            })
            .state("app.data", {
                url: "/data/:appName/:objectid",
                views : {
                    'header': {
                        templateUrl: u.getTemplate("appdata", 'header'),
                        controller: "appdataHeaderCtrl"
                    },
                    'content': {
                        templateUrl:  u.getTemplate("common", 'content'),
                        controller: "appdataContentCtrl"
                    }
                },
                resolve : {
                    "data": ['$ocLazyLoad', function($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load({
                            name: 'appdata',
                            serie: true,
                            files: [ '/lib/js/angular-1.4.0-cookies.min.js',
                                '/plugin/angular-ui-switch/angular-ui-switch.min.js',
                                '/plugin/angular-ui-switch/angular-ui-switch.min.css',
                                u.bcVersion('/resource/css/beecloud.grid.css'),
                                u.bcVersion("/lib/js/jquery-ui-1.11.4.custom.min.js"),
                                u.bcVersion("/lib/js/jquery.event.drag-2.2.js"),
                                u.bcVersion('/resource/js/beecloud.dashboard.grid.js'),
                                u.getControl("appdata")]
                        });
                    }]
                }
            })
            .state("app.data.bill",  u.appdataRouteFactory("bill"))
            .state("app.data.refund",  u.appdataRouteFactory("refund"))
            .state("app.data.prerefund",  u.appdataRouteFactory("prerefund"))
            .state("app.setting", {
                url: "/setting/:appName/:objectid",
                views : {
                    'header': {
                        templateUrl: u.getTemplate("appsetting", 'header'),
                        controller: "appsettingHeaderCtrl"
                    },
                    'content': {
                        templateUrl:  u.getTemplate("common", 'content'),
                        controller: "appsettingContentCtrl"
                    }
                },
                resolve : {
                    "setting": ['$ocLazyLoad', function($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load({
                            name: 'appsetting',
                            serie: true,
                            files: [ '/lib/js/angular-1.4.0-cookies.min.js',
                                '/plugin/angular-dropdowns/angular-dropdowns.js',
                                '/plugin/angular-dropdowns/angular-dropdowns.css',
                                '/plugin/angular-ui-switch/angular-ui-switch.min.js',
                                '/plugin/angular-ui-switch/angular-ui-switch.min.css',
                                u.getControl("appsetting")]
                        });
                    }]
                }
            })
            .state("app.setting.info", {
                url: "/info",
                views : {
                    'menu': {
                        templateUrl: u.getTemplate("appsetting", 'menu.left')
                    },
                    'panel': {
                        templateUrl:  u.getTemplate("appsetting", 'info'),
                        controller: "appsettingInfoCtrl"
                    }
                },
                resolve : {
                    "setting": ['$ocLazyLoad', function($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load({
                            name: 'appsettingInfo',
                            serie: true,
                            files: [ '/plugin/zeroclipboard/ZeroClipboard.js',
                                '/plugin/angular-zeroclipboard/angular-zeroclipboard.js',
                                '/lib/js/md5.js',
                                '/plugin/angular-modal-service/angular-modal-service.min.js',
                                '/plugin/angular-modal-service/custom.css',
                                u.getControl("appsetting", "info")]
                        });
                    }]
                }
            })
            .state("app.setting.btn", {
                url: "/spay-button",
                views : {
                    'menu': {
                        templateUrl: u.getTemplate("appsetting", 'menu.left')
                    },
                    'panel': {
                        templateUrl:  u.getTemplate("common", 'validation'),
                        controller: "appsettingBtnCtrl"
                    }
                },
                resolve : {
                    "setting": ['$ocLazyLoad', function($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load({
                            name: 'appsettingBtn',
                            serie: true,
                            files: [ '/plugin/angular-drag/drag.min.js',
                                '/plugin/zeroclipboard/ZeroClipboard.js',
                                '/plugin/angular-zeroclipboard/angular-zeroclipboard.js',
                                u.getControl("appsetting", "btn")]
                        });
                    }]
                }
            })
            .state("app.setting.ali", u.appsettingRouteFactory("ali"))
            .state("app.setting.wechat", u.appsettingRouteFactory("wechat"))
            .state("app.setting.union", u.appsettingRouteFactory("union"))
            .state("app.setting.kuaiqian", u.appsettingRouteFactory("kuaiqian"))
            .state("app.setting.jd", u.appsettingRouteFactory("jd"))
            .state("app.setting.baidu", u.appsettingRouteFactory("baidu"))
            .state("app.setting.yee", u.appsettingRouteFactory("yee"))
            .state("app.setting.paypal", u.appsettingRouteFactory("paypal"))
            .state("app.setting.ms", u.appsettingRouteFactory("ms"))
            .state("app.setting.applepay", u.appsettingRouteFactory("applepay"))
            .state("app.setting.webhook", {
                url: "/webhook",
                views : {
                    'menu': {
                        templateUrl: u.getTemplate("appsetting", 'menu.left')
                    },
                    'panel': {
                        templateUrl:  u.getTemplate("appsetting", 'webhook'),
                        controller: "appsettingWebhookCtrl"
                    }
                },
                resolve : {
                    "setting": ['$ocLazyLoad', function($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load({
                            name: 'appsettingWebhook',
                            serie: true,
                            files: [
                                u.getControl("appsetting", "webhook")]
                        });
                    }]
                }
            })
    });
    module.constant("uploadHint",
        {
            uploaded: "已上传",
            needUpload: "请上传"
        });
    module.factory("userVerifyinfo", ['$q', '$http', function($q, $http) {
        var verifyinfo = {
            data : null,
            defer : null,
            lastUpdate: null,
            refresh: function() {
                var defer = $q.defer();
                var that = this;
                this.defer = $http.get("data/user/verifyinfo.get.php").success(function(data) {
                    that.data = angular.copy(data);
                    defer.resolve(that);
                }).error(function() {
                    defer.reject();
                });
                this.lastUpdate = defer.promise;
                return defer.promise;
            },
            get : function() {
                return this.lastUpdate;
            },
            updateIfVerified : function(cb) {
                this.lastUpdate.then(function(res) {
                    if (res.data.verify_company_status == "accepted") {
                        cb();
                    }
                });
            }
        };
        verifyinfo.refresh();
        return verifyinfo;
    }]);
    module.factory("app", ['$q', 'appList', function($q, appList) {
        var app = {
            data : null,
            defer : null,
            lastUpdate: null,
            get: function(appId) {
                var defer = $q.defer();
                var that = this;
                appList.get().then(function(list) {
                    //console.log(list);
                    if(window.isChild){
                        for(var i in list.data.detail) {
                            if (list.data.detail[i]["app_id"] == appId) {
                                app.data = list.data.detail[i];
                                app.data.objectid = list.data.detail[i].app_id;
                                app.data.appkey = list.data.detail[i].app_key;
                                app.data.account_name = list.data.account_name;
                                app.data.account = list.data.account;
                                app.data.parent_account = list.data.parent_account;
                                defer.resolve(that);
                                return;
                            }
                        }
                    }else{
                        for(var i in list.data) {
                            if (list.data[i]["objectid"] == appId) {
                                app.data = list.data[i];
                                defer.resolve(that);
                                return;
                            }
                        }
                    }

                    //for(var i in list.data) {
                    //    if (list.data[i]["objectid"] == appId) {
                    //        app.data = list.data[i];
                    //        defer.resolve(that);
                    //        return;
                    //    }
                    //}
                    defer.reject(that);
                }, function() {

                });
                return defer.promise;
            }
        };
        return app;
    }]);

    module.factory("appList", ['$http', '$timeout', '$q', function($http, $timeout, $q) {
        var appList = {
            data : null,
            defer : null,
            lastUpdate: null,
            refresh: function() {
                var defer = $q.defer();
                var that = this;

                if(window.isChild){
                    this.defer = $http.post("data/app/subaccount.data.php").success(function (data) {
                        //console.log(data);
                        if (data.resultCode != 0) {
                            defer.reject();
                        } else {
                            that.data = angular.copy(data.data);
                            console.log(data.data.verify_status);
                            defer.resolve(that);
                        }

                    }).error(function () {
                        defer.reject();
                    });
                }else {
                    this.defer = $http.get("data/app/list.php").success(function (data) {
                        console.log(data);
                        if (data.resultCode != 0) {
                            defer.reject();
                        } else {
                            that.data = angular.copy(data.results);
                            that.data.app_limit = data.result.app_limit;
                            defer.resolve(that);
                        }

                    }).error(function () {
                        defer.reject();
                    });
                }


                this.lastUpdate = defer.promise;
                return defer.promise;
            },
            get : function() {
                return this.lastUpdate;
            }
        };
        appList.refresh();
        return appList;
    }]);
    module.filter('currentApp', function () {
        return function(input,params) {
                var results = [];
                if(typeof (params) == "undefined") {
                    return input;
                }
                if (input == null || typeof(input) == "undefined") {
                    return [];
                }

                for(var i in input) {
                    if(!input[i].objectid.match(params)) {
                        results.push(input[i]);
                    }
                }
                return results;
            };
    });
    module.controller("dashboardCtrl", ['$scope', '$http', '$timeout', '$q', 'appList', '$state', 'userVerifyinfo', 'uploadHint', function ($scope, $http, $timeout, $q, appList, $state, userVerifyinfo, uploadHint) {
            $scope.util = {
                oauthFrom: window.oauth,
                username: window.username,
                messageTimer: null,
                message : {}
            };
            $scope.isChild = window.isChild;//判断子账户，设置全局变量isChild；
            $scope.util.channelName = {
                "ALI": "支付宝",
                "WX": "微信",
                "BD": "百度",
                "YEE": "易宝",
                "KUAIQIAN": "快钱",
                "PAYPAL": "PAYPAL",
                "JD": "京东",
                "UN": "银联"
            }
        //var pays = {
        //    ali_app:"支付宝App支付",
        //    ali_offline_qrcode:"支付宝线下扫码",
        //    ali_qrcode: "支付宝线上扫码",
        //    ali_wap: "支付宝Wap支付",
        //    ali_web: "支付宝网页支付",
        //    ali_scan: "支付宝线下",
        //    un_app: "银联App支付",
        //    un_web: "银联网页支付",
        //    wx_app: "微信App支付",
        //    wx_jsapi: "微信公众号支付",
        //    wx_native: "微信扫码支付",
        //    wx_scan: "微信线下",
        //    bd_app: "百度钱包App支付",
        //    bd_web: "百度钱包网页支付",
        //    bd_wap: "百度钱包Wap支付",
        //    yee_web: "易宝网页支付",
        //    yee_wap: "易宝Wap支付",
        //    yee_nobankcard: "易宝点卡支付",
        //    jd_web: "京东网页支付",
        //    jd_wap: "京东Wap支付",
        //    kuaiqian_web: "快钱网页支付",
        //    kuaiqian_wap: "快钱Wap支付"
        //};
            $scope.util.logout = function() {
                //判断子账户
                if(isChild){
                    $http.post(u.getDataPath("usersetting") + "subaccount.logout.php").success(function(res){
                         if (res.resultCode == 0) {
                            window.location.href = '/';
                         }
                     }).error(function(){

                     });
                }else{
                    $http.get('/login/data/logout.php').success(function(data) {
                        if (data.resultCode == 0) {
                            window.location.href = '/';
                        }
                    });
                }
            }
            $scope.util.closeMsg = function() {
                angular.element("#alert-message").animate({top:"-55px"});
                $scope.util.message = {};
                if ($scope.util.messageTimer != null) {
                    $timeout.cancel($scope.util.messageTimer);
                    $scope.util.messageTimer = null;
                }
            };
            $scope.util.alertMsg = function(message, cssClass, timeout) {
                console.log("alert msg");
                if ($scope.util.messageTimer != null) {
                    $timeout.cancel($scope.util.messageTimer);
                }
                timeout = (!!timeout?timeout:3000);
                $scope.util.message.text = message;
                $scope.util.message.class = cssClass ? cssClass : "success" ;
                angular.element("#alert-message").animate({top:"0px"});
                $scope.util.messageTimer = $timeout(function () {
                    $scope.util.closeMsg();
                },timeout);
            }

            if(isChild){
                $scope.util.appState = {
                    analysis: {
                        name: "分析",
                        state: "app.analysis.payoverview"
                    },
                    data: {
                        name: "支付",
                        state: "app.data.bill"
                    }

                }
            }else{
                $scope.util.appState = {
                    proxy: {
                        name: "代申请",
                        state: "app.apply.create"
                    },
                    analysis: {
                        name: "分析",
                        state: "app.analysis.payoverview"
                    },
                    setting: {
                        name: "设置",
                        state: "app.setting.info"
                    },
                    data: {
                        name: "支付",
                        state: "app.data.bill"
                    }

                }
            }


            $scope.util.goToDefaultState = function(state, params) {
                console.log(state);
                console.log(params);
                $state.go(state, params);
            }

            $scope.uploaderInit = function(uploader, fileSizeLimit, successHint, successFunc) {
                uploader.loader.filters.push({
                    name: 'certFilter',
                    fn: function(item, options) {

                        if (item.size < (!!fileSizeLimit ? fileSizeLimit :10485760)) {
                            return true;
                        }
                        uploader.isUploading = false;
                        uploader.status = "none";
                        $scope.util.alertMsg("文件超过"+ (!!fileSizeLimit ? fileSizeLimit / 1000000 : "10") + "M", "error");
                        return false;
                    }
                });

                uploader.loader.onWhenAddingFileFailed = function(item, filter, options) {

                }
                uploader.loader.onAfterAddingFile = function(fileItem) {
                    console.log(fileItem);
                    if (uploader.loader.queue.length > 1) {
                        uploader.loader.removeFromQueue(0);
                    }
                };
                uploader.loader.onBeforeUploadItem = function(item) {

                };
                uploader.loader.onSuccessItem = function(item, response, status, headers) {
                    uploader.isUploading = false;
                    uploader.message = item._file.name + successHint;
                    if (typeof(successFunc) == "function") {
                        successFunc();
                    }
                    uploader.loader.removeFromQueue(0);
                };

                uploader.loader.onErrorItem = function(item, response, status, headers) {

                    uploader.isUploading = false;
                    uploader.loader.removeFromQueue(0);
                };

            };

            $scope.util.userVerified = false;

        //子账户企业认证判断
        if(window.isChild){
            appList.get().then(function(res){
                $scope.util.userVerified = res.verify_status;
            }, function(err) {

            });
        }else{
            userVerifyinfo.updateIfVerified(function() {
                $scope.util.userVerified = true;
            });
        }


            $scope.uploadHint = angular.copy(uploadHint);
            $scope.uploadFile = function(name, fileObj) {
                fileObj.isUploading = true;
                angular.element("#" + name).trigger("click");
            };



        //余额
        $http.post(u.getDataPath("usersetting") + "get.balance.php").success(function(res) {
            console.log(res);
            if (res.resultCode == 0) {
                $scope.balance = res["balance"];
            } else {
                $scope.balance = 0;
                //$scope.util.alertMsg(res["err"], "error");
            }
        });

        }]);

}(bcModules, bcUtil));

