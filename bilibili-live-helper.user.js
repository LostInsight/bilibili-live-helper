// ==UserScript==
// @name         Bilibili直播间挂机助手
// @namespace    keepsome
// @version      1.2.9b
// @description  Bilibili直播间自动签到，领瓜子，参加抽奖，完成任务，送礼等
// @author       keepsome, SeaLoong
// @include      /https?:\/\/live\.bilibili\.com\/\d+/
// @grant        none
// @run-at       document-end
// @license      MIT License
// ==/UserScript==

(function() {
    'use strict';
    
    var head = document.getElementsByTagName('head')[0];
    var script_rollbar= document.createElement('script');
    script_rollbar.innerHTML =  'var _rollbarConfig={accessToken:"90ab7491d4864fa891e8072d86405845",captureUncaught:true,payload:{environment:"production"}};!function(r){function o(n){if(e[n])return e[n].exports;var t=e[n]={exports:{},id:n,loaded:!1};return r[n].call(t.exports,t,t.exports,o),t.loaded=!0,t.exports}var e={};return o.m=r,o.c=e,o.p="",o(0)}([function(r,o,e){"use strict";var n=e(1),t=e(4);_rollbarConfig=_rollbarConfig||{},_rollbarConfig.rollbarJsUrl=_rollbarConfig.rollbarJsUrl||"https://cdnjs.cloudflare.com/ajax/libs/rollbar.js/2.3.1/rollbar.min.js",_rollbarConfig.async=void 0===_rollbarConfig.async||_rollbarConfig.async;var a=n.setupShim(window,_rollbarConfig),l=t(_rollbarConfig);window.rollbar=n.Rollbar,a.loadFull(window,document,!_rollbarConfig.async,_rollbarConfig,l)},function(r,o,e){"use strict";function n(r){return function(){try{return r.apply(this,arguments)}catch(r){try{console.error("[Rollbar]: Internal error",r)}catch(r){}}}}function t(r,o){this.options=r,this._rollbarOldOnError=null;var e=s++;this.shimId=function(){return e},window&&window._rollbarShims&&(window._rollbarShims[e]={handler:o,messages:[]})}function a(r,o){var e=o.globalAlias||"Rollbar";if("object"==typeof r[e])return r[e];r._rollbarShims={},r._rollbarWrappedError=null;var t=new p(o);return n(function(){o.captureUncaught&&(t._rollbarOldOnError=r.onerror,i.captureUncaughtExceptions(r,t,!0),i.wrapGlobals(r,t,!0)),o.captureUnhandledRejections&&i.captureUnhandledRejections(r,t,!0);var n=o.autoInstrument;return(void 0===n||n===!0||"object"==typeof n&&n.network)&&r.addEventListener&&(r.addEventListener("load",t.captureLoad.bind(t)),r.addEventListener("DOMContentLoaded",t.captureDomContentLoaded.bind(t))),r[e]=t,t})()}function l(r){return n(function(){var o=this,e=Array.prototype.slice.call(arguments,0),n={shim:o,method:r,args:e,ts:new Date};window._rollbarShims[this.shimId()].messages.push(n)})}var i=e(2),s=0,d=e(3),c=function(r,o){return new t(r,o)},p=d.bind(null,c);t.prototype.loadFull=function(r,o,e,t,a){var l=function(){var o;if(void 0===r._rollbarDidLoad){o=new Error("rollbar.js did not load");for(var e,n,t,l,i=0;e=r._rollbarShims[i++];)for(e=e.messages||[];n=e.shift();)for(t=n.args||[],i=0;i<t.length;++i)if(l=t[i],"function"==typeof l){l(o);break}}"function"==typeof a&&a(o)},i=!1,s=o.createElement("script"),d=o.getElementsByTagName("script")[0],c=d.parentNode;s.crossOrigin="",s.src=t.rollbarJsUrl,e||(s.async=!0),s.onload=s.onreadystatechange=n(function(){if(!(i||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState)){s.onload=s.onreadystatechange=null;try{c.removeChild(s)}catch(r){}i=!0,l()}}),c.insertBefore(s,d)},t.prototype.wrap=function(r,o,e){try{var n;if(n="function"==typeof o?o:function(){return o||{}},"function"!=typeof r)return r;if(r._isWrap)return r;if(!r._rollbar_wrapped&&(r._rollbar_wrapped=function(){e&&"function"==typeof e&&e.apply(this,arguments);try{return r.apply(this,arguments)}catch(e){var o=e;throw"string"==typeof o&&(o=new String(o)),o._rollbarContext=n()||{},o._rollbarContext._wrappedSource=r.toString(),window._rollbarWrappedError=o,o}},r._rollbar_wrapped._isWrap=!0,r.hasOwnProperty))for(var t in r)r.hasOwnProperty(t)&&(r._rollbar_wrapped[t]=r[t]);return r._rollbar_wrapped}catch(o){return r}};for(var u="log,debug,info,warn,warning,error,critical,global,configure,handleUncaughtException,handleUnhandledRejection,captureDomContentLoaded,captureLoad".split(","),f=0;f<u.length;++f)t.prototype[u[f]]=l(u[f]);r.exports={setupShim:a,Rollbar:p}},function(r,o){"use strict";function e(r,o,e){if(r){var t;"function"==typeof o._rollbarOldOnError?t=o._rollbarOldOnError:r.onerror&&!r.onerror.belongsToShim&&(t=r.onerror,o._rollbarOldOnError=t);var a=function(){var e=Array.prototype.slice.call(arguments,0);n(r,o,t,e)};a.belongsToShim=e,r.onerror=a}}function n(r,o,e,n){r._rollbarWrappedError&&(n[4]||(n[4]=r._rollbarWrappedError),n[5]||(n[5]=r._rollbarWrappedError._rollbarContext),r._rollbarWrappedError=null),o.handleUncaughtException.apply(o,n),e&&e.apply(r,n)}function t(r,o,e){if(r){"function"==typeof r._rollbarURH&&r._rollbarURH.belongsToShim&&r.removeEventListener("unhandledrejection",r._rollbarURH);var n=function(r){var e=r.reason,n=r.promise,t=r.detail;!e&&t&&(e=t.reason,n=t.promise),o&&o.handleUnhandledRejection&&o.handleUnhandledRejection(e,n)};n.belongsToShim=e,r._rollbarURH=n,r.addEventListener("unhandledrejection",n)}}function a(r,o,e){if(r){var n,t,a="EventTarget,Window,Node,ApplicationCache,AudioTrackList,ChannelMergerNode,CryptoOperation,EventSource,FileReader,HTMLUnknownElement,IDBDatabase,IDBRequest,IDBTransaction,KeyOperation,MediaController,MessagePort,ModalWindow,Notification,SVGElementInstance,Screen,TextTrack,TextTrackCue,TextTrackList,WebSocket,WebSocketWorker,Worker,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload".split(",");for(n=0;n<a.length;++n)t=a[n],r[t]&&r[t].prototype&&l(o,r[t].prototype,e)}}function l(r,o,e){if(o.hasOwnProperty&&o.hasOwnProperty("addEventListener")){for(var n=o.addEventListener;n._rollbarOldAdd&&n.belongsToShim;)n=n._rollbarOldAdd;var t=function(o,e,t){n.call(this,o,r.wrap(e),t)};t._rollbarOldAdd=n,t.belongsToShim=e,o.addEventListener=t;for(var a=o.removeEventListener;a._rollbarOldRemove&&a.belongsToShim;)a=a._rollbarOldRemove;var l=function(r,o,e){a.call(this,r,o&&o._rollbar_wrapped||o,e)};l._rollbarOldRemove=a,l.belongsToShim=e,o.removeEventListener=l}}r.exports={captureUncaughtExceptions:e,captureUnhandledRejections:t,wrapGlobals:a}},function(r,o){"use strict";function e(r,o){this.impl=r(o,this),this.options=o,n(e.prototype)}function n(r){for(var o=function(r){return function(){var o=Array.prototype.slice.call(arguments,0);if(this.impl[r])return this.impl[r].apply(this.impl,o)}},e="log,debug,info,warn,warning,error,critical,global,configure,handleUncaughtException,handleUnhandledRejection,_createItem,wrap,loadFull,shimId,captureDomContentLoaded,captureLoad".split(","),n=0;n<e.length;n++)r[e[n]]=o(e[n])}e.prototype._swapAndProcessMessages=function(r,o){this.impl=r(this.options);for(var e,n,t;e=o.shift();)n=e.method,t=e.args,this[n]&&"function"==typeof this[n]&&("captureDomContentLoaded"===n||"captureLoad"===n?this[n].apply(this,[t[0],e.ts]):this[n].apply(this,t));return this},r.exports=e},function(r,o){"use strict";r.exports=function(r){return function(o){if(!o&&!window._rollbarInitialized){r=r||{};for(var e,n,t=r.globalAlias||"Rollbar",a=window.rollbar,l=function(r){return new a(r)},i=0;e=window._rollbarShims[i++];)n||(n=e.handler),e.handler._swapAndProcessMessages(l,e.messages);window[t]=n,window._rollbarInitialized=!0}}}}]);';
    head.insertBefore(script_rollbar,head.childNodes[0]);
    
    var consolere = {
        channel:'ff-server-bilibili',
        api:'https://console.re/connector.js',
        ready: function(c) {var d=document,s=d.createElement('script'),l;s.src=this.api;s.id='consolerescript';s.setAttribute('data-channel', this.channel);s.onreadystatechange=s.onload=function(){if(!l){c();}l=true;};d.getElementsByTagName('head')[0].appendChild(s);}
    };
    consolere.ready(function() {
        window.console.re.info('Bilibili log start');
    });


    /* 可修改以下内容用以自定义功能 */
    var CONFIG = { // 请注意JSON格式
        USE_SIGN: true, // 自动签到: true:启用, false:不启用
        USE_AWARD: true, // 自动领取瓜子: true:启用, false:不启用
        USE_LOTTERY: true, // 自动参加抽奖: true:启用, false:不启用
        USE_TASK: true, // 自动完成任务: true:启用, false:不启用
        USE_GIFT: false, // 自动送礼物: true:启用, false:不启用
        GIFT_CONFIG: { // 若启用自动送礼物，则需要设置以下项
            SHORT_ROOMID: 0, // 送礼物的直播间ID(即地址中live.bilibili.com/后面的数字), 设置为0则表示自动检查当前主播勋章
            CHANGE_MEDAL: true, // 当有当前主播勋章，且当前佩戴的勋章不是当前主播勋章时自动切换为当前主播勋章: true:自动切换，false:不切换
            USE_SILVER: false, // 消耗银瓜子购买辣条来送礼物: true:允许, false:不允许
            ONLY_AFTER_23: true, // 只允许在23:00后消耗银瓜子购买辣条送礼物: true:只允许23:00后，false:任意时间都可用银瓜子
            ALLOW_GIFT: [1] // 设置允许送的礼物类型编号(见下方列表)，多个请用英文逗号(,)隔开，为空则表示允许送出所有类型的礼物
        },
        SHOW_TOAST: true // 显示浮动提示: true:显示，false:不显示
    };
    /* 可修改以上内容用以自定义功能 */

    /* 礼物编号及对应礼物、亲密度对照表
    (有些数据暂时不清楚，如有知道的可以告诉我，目前采用的亲密度计算方法是:礼物亲密度=向下取整(礼物价值瓜子数/100))
    1:辣条：亲密度+1
    3:B坷垃：亲密度+99
    4:喵娘：亲密度+52
    6:亿元：亲密度+10
    7:666：亲密度+?
    8:233：亲密度+?
    25:小电视：亲密度+12450?
    39:节奏风暴：亲密度+1000?
    105:火力票：亲密度+20
    106:哔哩星：亲密度+20
    */

    var NAME = 'Bilibili-LiveRoom-HangHelper';
    var TaskAward_Running = false;
    var Toast = {
        element: null,
        list: [],
        count: 0
    };
    var DOM = {
        treasure: {
            div: null,
            image: null,
            canvas: null,
            div_tip: null,
            div_timer: null
        },
        storm: {
            div: null,
            image: null,
            canvas: null
        }
    };
    var interval_treasure_timer;
    var room_id_list = [];
    var lottery_list_last = [],
        lottery_check_time = 20;
    var gift_list;
    var Info = {
        short_id: null,
        uid: null,
        ruid: null,
        roomid: null,
        rnd: null,
        area_id: null, // area_v2_id
        area_parent_id: null,
        old_area_id: null, // areaId
        csrf_token: function() {
            return getCookie('bili_jct');
        },
        today_feed: null,
        day_limit: null,
        silver: null,
        gold: null,
        mobile_verified: null,
        medal_list: null,
        medal_target_id: null,
        task_list: null,
        bag_list: null
    };
    var DEBUG = function(arg) {
        // console.debug(arg);
    };
    var API = {
        last_ajax: 0,
        cnt_fast_ajax: 0,
        ajax: function(settings) {
            if (Date.now() - API.last_ajax < 20) {
                API.cnt_fast_ajax++;
            } else {
                API.cnt_fast_ajax = 0;
            }
            API.last_ajax = Date.now();
            if (API.cnt_fast_ajax > 5) throw Error('调用Bilibili API太快，可能出现了bug');
            // DEBUG('API.ajax: settings:' + JSON.stringify(settings));
            if (settings.xhrFields) {
                $.extend(settings.xhrFields, {
                    withCredentials: true
                });
            } else {
                settings.xhrFields = {
                    withCredentials: true
                };
            }
            $.extend(settings, {
                url: (settings.url.substr(0, 2) == '//' ? '' : '//api.live.bilibili.com/') + settings.url,
                type: settings.type || 'GET',
                crossDomain: true,
                dataType: settings.dataType || 'json'
            });
            return $.ajax(settings);
        },
        ajaxGetCaptchaKey: function() {
            return API.ajax({
                url: '//www.bilibili.com/plus/widget/ajaxGetCaptchaKey.php?js'
            });
        },
        msg: function(roomid, csrf_token) {
            return API.ajax({
                type: 'POST',
                url: 'ajax/msg',
                data: {
                    roomid: roomid,
                    csrf_token: typeof csrf_token == 'function' ? csrf_token() : csrf_token
                }
            });
        },
        ajaxCapsule: function(id, ts, platform, player_type) {
            return API.ajax({
                url: 'api/ajaxCapsule'
            });
        },
        player: function(id, ts, platform, player_type) { //获取直播流相关信息
            return API.ajax({
                url: 'api/player',
                data: {
                    id: id,
                    ts: ts, // HEX
                    platform: platform || 'pc',
                    player_type: player_type || 'web'
                },
                dataType: 'text'
            });
        },
        create: function(width, height) { // 生成一个验证码
            return API.ajax({
                url: 'captcha/v1/Captcha/create',
                data: {
                    width: width,
                    height: height,
                    _: Date.now()
                }
            });
        },
        topList: function(roomid, page, ruid) {
            return API.ajax({
                url: 'guard/topList',
                data: {
                    roomid: roomid,
                    page: page,
                    ruid: ruid
                }
            });
        },
        getSuser: function() {
            return API.ajax({
                url: 'msg/getSuser'
            });
        },
        refresh: function() {
            return API.ajax({
                url: 'index/refresh?area=all'
            });
        },
        get_ip_addr: function() {
            return API.ajax({
                url: 'ip_service/v1/ip_service/get_ip_addr'
            });
        },
        ajaxGetMyMedalList: function() {
            return API.ajax({
                url: '//live.bilibili.com/i/ajaxGetMyMedalList'
            });
        },
        getuserinfo: function() {
            return API.ajax({
                url: '//live.bilibili.com/user/getuserinfo'
            });
        },
        MyInfo: function() {
            return API.ajax({
                url: '//space.bilibili.com/ajax/member/MyInfo'
            });
        },
        activity: {
            mobileActivity: function() {
                return API.ajax({
                    url: 'activity/v1/Common/mobileActivity'
                });
            },
            roomInfo: function(roomid, ruid) {
                return API.ajax({
                    url: 'activity/v1/Common/roomInfo',
                    data: {
                        roomid: roomid,
                        ruid: ruid
                    }
                });
            },
            welcomeInfo: function(roomid) {
                return API.ajax({
                    url: 'activity/v1/Common/welcomeInfo?roomid=' + roomid
                });
            },
            master_invite_task: function() {
                return API.ajax({
                    url: 'activity/v1/invite/master_invite_task'
                });
            },
            check: function(roomid) {
                return API.ajax({
                    url: 'activity/v1/Raffle/check?roomid=' + roomid
                });
            },
            join: function(roomid, raffleId) {
                return API.ajax({
                    url: 'activity/v1/Raffle/join',
                    data: {
                        roomid: roomid,
                        raffleId: raffleId
                    }
                });
            },
            notice: function(roomid, raffleId) {
                return API.ajax({
                    url: 'activity/v1/Raffle/notice',
                    data: {
                        roomid: roomid,
                        raffleId: raffleId
                    }
                });
            },
            master_limit_tasks: function() {
                return API.ajax({
                    url: 'activity/v1/task/master_limit_tasks'
                });
            },
            receive_award: function(task_id, csrf_token) {
                return API.ajax({
                    type: 'POST',
                    url: 'activity/v1/task/receive_award',
                    data: {
                        task_id: task_id,
                        csrf_token: typeof csrf_token == 'function' ? csrf_token() : csrf_token
                    }
                });
            },
            user_limit_tasks: function() {
                return API.ajax({
                    url: 'activity/v1/task/user_limit_tasks'
                });
            }
        },
        feed: {
            getList: function(page, page_size) {
                return API.ajax({
                    url: 'feed/v1/feed/getList',
                    data: {
                        page: page,
                        page_size: page_size,
                        _: Date.now()
                    }
                });
            },
            heartBeat: function(_cb) {
                return API.ajax({
                    url: 'feed/v1/feed/heartBeat',
                    data: {
                        _cb: _cb
                    }
                });
            },
            GetUserFc: function(follow) { // follow: 主播uid==ruid
                return API.ajax({
                    url: 'feed/v1/Feed/GetUserFc?follow=' + follow
                });
            },
            IsUserFollow: function(follow) { // follow: 主播uid==ruid
                return API.ajax({
                    url: 'feed/v1/Feed/IsUserFollow?follow=' + follow
                });
            },
        },
        feed_svr: {
            notice: function(csrf_token) {
                return API.ajax({
                    type: 'POST',
                    url: 'feed_svr/v1/feed_svr/notice',
                    data: {
                        csrf_token: typeof csrf_token == 'function' ? csrf_token() : csrf_token
                    }
                });
            },
            my: function(page_size, csrf_token, live_status, type, offset) {
                return API.ajax({
                    type: 'POST',
                    url: 'feed_svr/v1/feed_svr/my',
                    data: {
                        live_status: live_status || 0,
                        type: type || 0,
                        page_size: page_size,
                        offset: offset || 0,
                        csrf_token: typeof csrf_token == 'function' ? csrf_token() : csrf_token
                    }
                });
            }
        },
        FreeSilver: {
            getSurplus: function() {
                return API.ajax({
                    url: 'FreeSilver/getSurplus'
                });
            },
            getAward: function(time_start, end_time, captcha) {
                return API.ajax({
                    url: 'FreeSilver/getAward',
                    data: {
                        time_start: time_start,
                        end_time: end_time,
                        captcha: captcha
                    }
                });
            },
            getCurrentTask: function() {
                return API.ajax({
                    url: 'FreeSilver/getCurrentTask'
                });
            },
            getCaptcha: function(ts, callback) {
                getBlobDataURL("//api.live.bilibili.com/freeSilver/getCaptcha?ts=" + ts, callback);
            }
        },
        gift: {
            bag_list: function() {
                return API.ajax({
                    url: 'gift/v2/gift/bag_list'
                });
            },
            send: function(uid, gift_id, ruid, gift_num, coin_type, biz_id, rnd, csrf_token, platform, biz_code, storm_beat_id) {
                return API.ajax({
                    type: 'POST',
                    url: 'gift/v2/gift/send',
                    data: {
                        uid: uid,
                        gift_id: gift_id,
                        ruid: ruid,
                        gift_num: gift_num,
                        coin_type: coin_type || 'silver',
                        bag_id: 0,
                        platform: platform || 'pc',
                        biz_code: biz_code || 'live',
                        biz_id: biz_id, //roomid
                        rnd: rnd,
                        storm_beat_id: storm_beat_id || 0,
                        // metadata: metadata,
                        csrf_token: typeof csrf_token == 'function' ? csrf_token() : csrf_token
                    }
                });
            },
            bag_send: function(uid, gift_id, ruid, gift_num, bag_id, biz_id, rnd, csrf_token, platform, biz_code, storm_beat_id) {
                return API.ajax({
                    type: 'POST',
                    url: 'gift/v2/live/bag_send',
                    data: {
                        uid: uid,
                        gift_id: gift_id,
                        ruid: ruid,
                        gift_num: gift_num,
                        bag_id: bag_id,
                        platform: platform || 'pc',
                        biz_code: biz_code || 'live',
                        biz_id: biz_id, //roomid
                        rnd: rnd,
                        storm_beat_id: storm_beat_id || 0,
                        // metadata: metadata,
                        csrf_token: typeof csrf_token == 'function' ? csrf_token() : csrf_token
                    }
                });
            },
            heart_gift_receive: function(roomid, area_v2_id) {
                return API.ajax({
                    url: 'gift/v2/live/heart_gift_receive',
                    data: {
                        roomid: roomid,
                        area_v2_id: area_v2_id
                    }
                });
            },
            heart_gift_status: function(roomid, area_v2_id) {
                return API.ajax({
                    url: 'gift/v2/live/heart_gift_status',
                    data: {
                        roomid: roomid,
                        area_v2_id: area_v2_id
                    }
                });
            },
            receive_daily_bag: function() {
                return API.ajax({
                    url: 'gift/v2/live/receive_daily_bag'
                });
            },
            room_gift_list: function(roomid, area_v2_id) {
                return API.ajax({
                    url: 'gift/v2/live/room_gift_list',
                    data: {
                        roomid: roomid,
                        area_v2_id: area_v2_id
                    }
                });
            },
            smalltv: {
                check: function(roomid) {
                    return API.ajax({
                        url: 'gift/v2/smalltv/check',
                        data: {
                            roomid: roomid
                        }
                    });
                },
                join: function(roomid, raffleId) {
                    return API.ajax({
                        url: 'gift/v2/smalltv/join',
                        data: {
                            roomid: roomid,
                            raffleId: raffleId
                        }
                    });
                },
                notice: function(roomid, raffleId) {
                    return API.ajax({
                        url: 'gift/v2/smalltv/notice',
                        data: {
                            roomid: roomid,
                            raffleId: raffleId
                        }
                    });
                }
            }
        },
        giftBag: {
            getSendGift: function() {
                return API.ajax({
                    url: 'giftBag/getSendGift'
                });
            },
            sendDaily: function() {
                return API.ajax({
                    url: 'giftBag/sendDaily'
                });
            }
        },
        i: {
            ajaxGetAchieve: function(page, pageSize, type, status, category, keywords) {
                return API.ajax({
                    url: 'i/api/ajaxGetAchieve',
                    data: {
                        type: type || 'normal', // or'legend'
                        status: status || 0,
                        category: category || 'all',
                        keywords: keywords,
                        page: page,
                        pageSize: pageSize || 6
                    }
                });
            },
            ajaxCancelWear: function() {
                return API.ajax({
                    url: 'i/ajaxCancelWear'
                });
            },
            ajaxWearFansMedal: function(medal_id) {
                return API.ajax({
                    url: 'i/ajaxWearFansMedal?medal_id=' + medal_id
                });
            },
            following: function(page, pageSize) {
                return API.ajax({
                    url: 'i/api/following',
                    data: {
                        page: page,
                        pageSize: pageSize
                    }
                });
            },
            guard: function(page, pageSize) {
                return API.ajax({
                    url: 'i/api/guard',
                    data: {
                        page: page,
                        pageSize: pageSize
                    }
                });
            },
            liveinfo: function() {
                return API.ajax({
                    url: 'i/api/liveinfo'
                });
            },
            medal: function(page, pageSize) {
                return API.ajax({
                    url: 'i/api/medal',
                    data: {
                        page: page,
                        pageSize: pageSize
                    }
                });
            },
            operation: function(page) {
                return API.ajax({
                    url: 'i/api/operation?page=' + page
                });
            },
            taskInfo: function() {
                return API.ajax({
                    url: 'i/api/taskInfo'
                });
            }
        },
        live: {
            getRoomKanBanModel: function(roomid) {
                return API.ajax({
                    url: 'live/getRoomKanBanModel?roomid' + roomid
                });
            },
            rankTab: function(roomid) {
                return API.ajax({
                    url: 'live/rankTab?roomid=' + roomid
                });
            },
            roomAdList: function() {
                return API.ajax({
                    url: 'live/roomAdList'
                });
            }
        },
        live_user: {
            get_anchor_in_room: function(roomid) {
                return API.ajax({
                    url: 'live_user/v1/UserInfo/get_anchor_in_room?roomid=' + roomid
                });
            },
            get_info_in_room: function(roomid) {
                return API.ajax({
                    url: 'live_user/v1/UserInfo/get_info_in_room?roomid=' + roomid
                });
            },
            get_weared_medal: function(uid, target_id, csrf_token, source) {
                return API.ajax({
                    type: 'POST',
                    url: 'live_user/v1/UserInfo/get_weared_medal',
                    data: {
                        source: source || 1,
                        uid: uid,
                        target_id: target_id, // roomid
                        csrf_token: typeof csrf_token == 'function' ? csrf_token() : csrf_token
                    }
                });
            }
        },
        lottery: {
            getRoomActivityByRoomid: function(roomid) {
                return API.ajax({
                    url: 'lottery/v1/box/getRoomActivityByRoomid?roomid=' + roomid
                });
            },
            check: function(roomid) {
                return API.ajax({
                    url: 'lottery/v1/Storm/check?roomid=' + roomid
                });
            },
            join: function(id, color, captcha_token, captcha_phrase, csrf_token) { // 参加节奏风暴
                return API.ajax({
                    type: 'POST',
                    url: 'lottery/v1/Storm/join',
                    data: {
                        id: id,
                        color: color, // HEX
                        captcha_token: captcha_token,
                        captcha_phrase: captcha_phrase,
                        csrf_token: typeof csrf_token == 'function' ? csrf_token() : csrf_token
                    }
                });
            }
        },
        rankdb: {
            roomInfo: function(ruid, roomid, areaId) {
                return API.ajax({
                    url: 'rankdb/v1/Common/roomInfo',
                    data: {
                        ruid: ruid,
                        roomid: roomid,
                        areaId: areaId
                    }
                });
            }
        },
        room: {
            get_info: function(room_id, from) {
                return API.ajax({
                    url: 'room/v1/Room/get_info',
                    data: {
                        room_id: room_id,
                        from: from || 'room'
                    }
                });
            },
            playUrl: function(cid, quality, platform) {
                return API.ajax({
                    url: 'room/v1/Room/playUrl',
                    data: {
                        cid: cid, // roomid
                        quality: quality || '0',
                        platform: platform || 'web'
                    }
                });
            },
            room_entry_action: function(room_id, csrf_token, platform) {
                return API.ajax({
                    type: 'POST',
                    url: 'room/v1/Room/room_entry_action',
                    data: {
                        room_id: room_id,
                        platform: platform || 'pc',
                        csrf_token: typeof csrf_token == 'function' ? csrf_token() : csrf_token
                    }
                });
            },
            room_init: function(id) {
                return API.ajax({
                    url: 'room/v1/Room/room_init?id=' + id
                });
            }
        },
        sign: {
            doSign: function() {
                return API.ajax({
                    url: 'sign/doSign'
                });
            },
            GetSignInfo: function() {
                return API.ajax({
                    url: 'sign/GetSignInfo'
                });
            },
            getLastMonthSignDays: function() {
                return API.ajax({
                    url: 'sign/getLastMonthSignDays'
                });
            }
        },
        user: {
            getWear: function(uid) {
                return API.ajax({
                    url: 'user/v1/user_title/getWear?uid=' + uid
                });
            },
            userOnlineHeart: function() {
                return API.ajax({
                    type: 'POST',
                    url: 'User/userOnlineHeart'
                });
            },
            getUserInfo: function(ts) { // ms
                return API.ajax({
                    url: 'User/getUserInfo?ts=' + ts
                });
            }
        },
        YearWelfare: {
            checkFirstCharge: function() {
                return API.ajax({
                    url: 'YearWelfare/checkFirstCharge'
                });
            },
            inviteUserList: function() {
                return API.ajax({
                    url: 'YearWelfare/inviteUserList/1'
                });
            }
        }
    };

    function ts_s() {
        return Math.floor(Date.now() / 1000);
    }

    function ts_ms() {
        return Date.now();
    }

    function getCookie(name) {
        var arr, reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
        if ((arr = document.cookie.match(reg))) {
            return unescape(arr[2]);
        } else {
            return null;
        }
    }

    function setCookie(name, value, seconds) {
        seconds = seconds || 0;
        var expires = '';
        if (parseInt(seconds, 10) !== 0) {
            var date = new Date();
            date.setTime(date.getTime() + (seconds * 1000));
            expires = '; expires=' + date.toGMTString();
        }
        document.cookie = name + '=' + escape(value) + expires + '; path=/';
    }

    function getBlobDataURL(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.responseType = 'blob';
        xhr.withCredentials = true;
        xhr.onload = function() {
            var reader = new FileReader();
            reader.onloadend = function() {
                callback(reader.result);
            };
            reader.readAsDataURL(xhr.response);
        };
        xhr.send();
    }

    /*
    验证码识别算法来自互联网，作者未知
    该算法已被简单修改
    */
    function getChar(t) {
        if (t.sum <= 50) return '-';
        if (t.sum > 120 && t.sum < 135) return '+';
        if (t.sum > 155 && t.sum < 162) return 1;
        if (t.sum > 189 && t.sum < 195) return 7;
        if (t.sum > 228 && t.sum < 237) return 4;
        if (t.sum > 250 && t.sum < 260) return 2;
        if (t.sum > 286 && t.sum < 296) return 3;
        if (t.sum > 303 && t.sum < 313) return 5;
        if (t.sum > 335 && t.sum < 342) return 8;
        if (t.sum > 343 && t.sum < 350) {
            if (t.first > 24 && t.last > 24) return 0;
            if (t.first < 24 && t.last > 24) return 9;
            if (t.first > 24 && t.last < 24) return 6;
        }
    }

    function calcImg() {
        /*
         * 1.验证码图片->二维点阵
         * 2.二维点阵->横向一维压缩
         * 3.分析并计算
         */
        var ctx = DOM.treasure.canvas[0].getContext("2d");
        ctx.drawImage(DOM.treasure.image[0], 0, 0, 120, 40);
        var pixels = ctx.getImageData(0, 0, 120, 40).data;
        var pix = [];
        var i = 0;
        var j = 0;
        var n = 0;
        for (i = 1; i <= 40; i++) {
            pix[i] = [];
            for (j = 1; j <= 120; j++) {
                var c = 1;
                if (pixels[n] - (-pixels[n + 1]) - (-pixels[n + 2]) > 200) {
                    c = 0;
                }
                n += 4;
                pix[i][j] = c;
            }
        }
        //二维点阵pix[40][120]
        var line = [];
        line[0] = 0;
        for (i = 1; i <= 120; i++) {
            line[i] = 0;
            for (j = 1; j <= 40; j++) {
                line[i] += pix[j][i];
            }
        }
        //一维line[120]
        var temp = [];
        n = 0;
        for (i = 1; i <= 120; i++) {
            if (line[i] > 0 && line[i - 1] === 0) {
                n++;
                temp[n] = {};
                temp[n].first = line[i];
                temp[n].sum = 0;
            }
            if (line[i] > 0) {
                temp[n].sum += line[i];
            }
            if (line[i - 1] > 0 && line[i] === 0) {
                temp[n].last = line[i - 1];
            }
        }
        if (n == 4) {
            var result = 0;
            var a = getChar(temp[1]) * 10 - (-getChar(temp[2]));
            var b = getChar(temp[4]);
            if (getChar(temp[3]) == '+') {
                result = a - (-b);
            } else {
                result = a - b;
            }
            DEBUG('TaskAward: calcImg: 识别验证码: ' + getChar(temp[1]) + getChar(temp[2]) + ' ' + getChar(temp[3]) + ' ' + getChar(temp[4]) + ' = ' + result);
            return result;
        } else {
            DEBUG('TaskAward: calcImg: 识别验证码失败');
            return null;
        }
    }
    /* TODO
        function recognizeCaptcha() {
            var ctx = DOM.storm.canvas[0].getContext('2d');
            ctx.drawImage(DOM.storm.image[0], 0, 0, 112, 32);
            return OCRAD(ctx.getImageData(0, 0, 112, 32));
        }
    */
    var liveQuickLogin = function() {
        if (!getCookie('DedeUserID') && !getCookie('LIVE_LOGIN_DATA')) {
            try {
                if (!window.biliQuickLogin) {
                    $.getScript('https://static-s.bilibili.com/account/bili_quick_login.js', function(response, status) {
                        if (status == 'success') login();
                    });
                } else {
                    login();
                }
            } catch (tryErr) {
                throw new Error(tryErr);
            }
        }

        function login() {
            if (window.biliQuickLogin) {
                window.biliQuickLogin(function() {
                    window.location.reload();
                });
                throw 'Bilibili Live: 您还未登陆.';
            } else {
                throw 'Bilibili Live: 快速登录脚本加载失败.';
            }
        }
    };

    function giftIDtoFeed(gift_id) {
        for (var i = gift_list.length - 1; i >= 0; i--) {
            if (gift_list[i].id === gift_id) {
                return Math.floor(gift_list[i].price / 100);
            }
        }
        return null;
    }

    function toast(e, n, r) {
        var t = Toast.element;
        var now = new Date();
        Rollbar.info('['+now.toLocaleTimeString()+']'+'【B站挂机】<'+n+'>'+e);
        window.console.re.log('['+now.toLocaleTimeString()+']'+'【B站挂机】<'+n+'>'+e);
        console.log('['+now.toLocaleTimeString()+']'+'【B站挂机】<'+n+'>'+e);
        if (!CONFIG.SHOW_TOAST || !t) return;
        if ('boolean' == typeof n) n = 'info';
        var o = document.createDocumentFragment(),
            a = document.createElement('div');
        if ('success' !== (n = n || 'info') && 'caution' !== n && 'error' !== n && 'info' !== n)
            throw new Error(i + ' 在使用 Link Toast 时必须指定正确的类型: success || caution || error || info');
        if (a.innerHTML = '<span class="toast-text">' + e + '</span>',
            a.className = 'link-toast ' + n + ' ' + (r ? 'fixed' : ''), !t.className && !t.attributes)
            throw new Error(i + ' 传入 element 不是有效节点.');
        var c = t.getBoundingClientRect(),
            s = c.left,
            u = c.top,
            l = c.width,
            f = c.height,
            p = document.documentElement && document.documentElement.scrollLeft || document.body.scrollLeft;
        a.style.left = s + l + p + 'px';
        var d = document.documentElement && document.documentElement.scrollTop || document.body.scrollTop;
        a.style.top = u + f + d + Toast.count * 40 + 'px';
        setTimeout((function() {
            a.className += ' out';
            setTimeout((function() { // TODO
                Toast.count--;
                Toast.list.unshift();
                Toast.list.forEach(function(v) {
                    v.style.top = (parseInt(v.style.top, 10) - 40) + 'px';
                });
                a.parentNode.removeChild(a);
            }), 200);
        }), 4e3);
        o.appendChild(a);
        document.body.appendChild(o);
        var h = document.body.offsetWidth,
            v = a.getBoundingClientRect().left,
            m = a.offsetWidth;
        if (h - m - v < 0) a.style.left = h - m - 10 + p + 'px';
        Toast.count++;
        Toast.list.push(a);
    }

    function execUntilSuccess(callback) {
        var interval = setInterval(function() {
            if (callback()) clearInterval(interval);
        }, 200);
    }

    /*
    window.BilibiliLive.ANCHOR_UID
    window.BilibiliLive.COLORFUL_LOGGER
    window.BilibiliLive.INIT_TIME
    window.BilibiliLive.RND === window.DANMU_RND
    window.BilibiliLive.ROOMID
    window.BilibiliLive.SHORT_ROOMID
    window.BilibiliLive.UID
    window.captcha_key
    window.Yb
    */

    function Init() {
        // liveQuickLogin();
        execUntilSuccess(function() {
            if (window.BilibiliLive) {
                DEBUG('Init: BilibiliLive: ' + JSON.stringify(window.BilibiliLive));
                if (parseInt(window.BilibiliLive.UID, 10) !== 0) {
                    Info.short_id = window.BilibiliLive.SHORT_ROOMID;
                    Info.uid = window.BilibiliLive.UID;
                    Info.roomid = window.BilibiliLive.ROOMID;
                    Info.ruid = window.BilibiliLive.ANCHOR_UID;
                    Info.rnd = window.BilibiliLive.RND;
                    room_id_list[Info.short_id] = Info.roomid;
                    if (CONFIG.USE_AWARD) {
                        execUntilSuccess(function() {
                            var _treasure_box = $('div.treasure-box.p-relative');
                            if (_treasure_box[0]) {
                                _treasure_box.attr('id', 'old_treasure_box');
                                _treasure_box.hide();
                                DOM.treasure.div = $('<div id="' + NAME + '_treasure_div" class="treasure-box p-relative"></div>');
                                DOM.treasure.div_tip = $('<div id="' + NAME + '_treasure_div_tip" class="t-center b-box none-select">自动<br>领取中</div>');
                                DOM.treasure.div_timer = $('<div id="' + NAME + '_treasure_div_timer" class="t-center b-box none-select">0</div>');
                                DOM.treasure.image = $('<img id="' + NAME + '_treasure_image" style="display:none">');
                                DOM.treasure.canvas = $('<canvas id="' + NAME + '_treasure_canvas" style="display:none" height="40" width="120"></canvas>');
                                var css_text = {
                                    'max-width': '40px',
                                    'padding': '2px 3px',
                                    'margin-top': '3px',
                                    'font-size': '12px',
                                    'color': '#fff',
                                    'background-color': 'rgba(0,0,0,.5)',
                                    'border-radius': '10px'
                                };
                                DOM.treasure.div_tip.css(css_text);
                                DOM.treasure.div_timer.css(css_text);
                                DOM.treasure.div_tip.after(DOM.treasure.div_timer);
                                DOM.treasure.div.append(DOM.treasure.div_tip);
                                DOM.treasure.div.append(DOM.treasure.image);
                                DOM.treasure.div.append(DOM.treasure.canvas);
                                _treasure_box.after(DOM.treasure.div);
                                interval_treasure_timer = setInterval(function() {
                                    var t = parseInt(DOM.treasure.div_timer.text(), 10);
                                    if (t > 0) DOM.treasure.div_timer.text((t - 1) + 's');
                                }, 1e3);
                                return true;
                            }
                        });
                    }
                    /* TODO
                    if (CONFIG.USE_LOTTERY) {
                        DOM.storm.div = $('<div id="' + NAME + '_storm_div" style="display:none"></div>');
                        DOM.storm.image = $('<img id="' + NAME + '_storm_image" style="display:none">');
                        DOM.storm.canvas = $('<canvas id="' + NAME + '_storm_canvas" style="display:none"></canvas>');
                        DOM.storm.div.append(DOM.storm.image);
                        DOM.storm.div.append(DOM.storm.canvas);
                        document.body.appendChild(DOM.storm.div[0]);
                    }
                    */
                    if (CONFIG.USE_GIFT && (CONFIG.GIFT_CONFIG.SHORT_ROOMID === 0 || CONFIG.GIFT_CONFIG.SHORT_ROOMID == Info.short_id)) {
                        API.live_user.get_weared_medal(Info.uid, Info.roomid, Info.csrf_token).done(function(response) {
                            DEBUG('Init: get_weared_medal: ' + JSON.stringify(response));
                            if (response.code === 0) {
                                Info.medal_target_id = response.data.target_id;
                                Info.today_feed = parseInt(response.data.today_feed, 10);
                                Info.day_limit = response.data.day_limit;
                                Info.old_area_id = response.data.area;
                                Info.area_id = response.data.area_v2_id;
                                Info.area_parent_id = response.data.area_v2_parent_id;
                                API.gift.room_gift_list(Info.roomid, Info.area_id).done(function(response) {
                                    // DEBUG('Init: room_gift_list: ' + JSON.stringify(response));
                                    if (response.code === 0) {
                                        gift_list = response.data;
                                    }
                                });
                            }
                        });
                        API.live_user.get_info_in_room(Info.roomid).done(function(response) {
                            DEBUG('Init: get_info_in_room: ' + JSON.stringify(response));
                            if (response.code === 0) {
                                Info.silver = response.data.wallet.silver;
                                Info.gold = response.data.wallet.gold;
                                Info.mobile_verified = response.data.info.mobile_verified;
                            }
                        });
                    }
                    setTimeout(function() {
                        DEBUG('Init: Info: ' + JSON.stringify(Info));
                        Toast.element = $('<div id="' + NAME + '_div_toast"></div>');
                        Toast.element.appendTo($('#rank-list-vm'));
                        Toast.element = Toast.element[0];
                        var str = [];
                        if (CONFIG.USE_SIGN) str.push('自动签到');
                        if (CONFIG.USE_AWARD) str.push('自动领取瓜子');
                        if (CONFIG.USE_LOTTERY) str.push('自动参加抽奖');
                        if (CONFIG.USE_TASK) str.push('自动完成任务');
                        if (CONFIG.USE_GIFT) str.push('自动送礼');
                        if (str.length) str = str.join('，');
                        else str = '无';
                        toast('助手已启用功能：' + str, 'info');
                        TaskStart();
                    }, 3e3);
                } else {
                    // 未登录
                    toast('你还没有登录，助手无法使用！', 'error');
                }
                return true;
            }
        });
    }
    /*
        function TaskLogWatcher(callback) {
            var logs_last_length = 0;
            setInterval(function() {
                if (logs_last_length !== window.Yb.length) {
                    var logs_new = window.Yb.slice(logs_last_length, window.Yb.length);
                    if (logs_new && logs_new.length) {
                        logs_last_length = window.Yb.length;
                        callback(logs_new);
                    }
                }
            }, 1000);
        }
    */
    function SmallTV(room_id, callback) {
        API.gift.smalltv.check(room_id).done(function(response) { // 检查是否有小电视抽奖
            DEBUG('TaskLottery: smalltv.check: ' + JSON.stringify(response));
            if (response.code === 0) {
                response.data.forEach(function(v) {
                    var time = v.time;
                    if (v.status === 1) { // 可以参加
                        API.gift.smalltv.join(room_id, v.raffleId).done(function(response) {
                            DEBUG('TaskLottery: smalltv.join: ' + JSON.stringify(response));
                            if (response.code === 0) {
                                setTimeout(function() {
                                    SmallTVNotice(room_id, response.data.raffleId, function(msg) {
                                        toast(msg, 'info');
                                    }, 0);
                                }, time * 1e3 + 8e3);
                                callback();
                            }
                        });
                    }
                });
            }
        });
    }

    function Raffle(room_id, callback) {
        API.activity.check(room_id).done(function(response) { // 检查是否有活动抽奖
            DEBUG('TaskLottery: activity.check: ' + JSON.stringify(response));
            if (response.code === 0) {
                response.data.forEach(function(v) {
                    if (v.status === 1) {
                        var time = v.time;
                        API.activity.join(room_id, v.raffleId).done(function(response) {
                            DEBUG('TaskLottery: activity.join: ' + JSON.stringify(response));
                            if (response.code === 0) {
                                setTimeout(function() {
                                    RaffleNotice(room_id, response.data.raffleId, function(msg) {
                                        toast(msg, 'info');
                                    }, 0);
                                }, time * 1e3 + 8e3);
                                callback();
                            }
                        });
                    }
                });
            }
        });
    }

    function SmallTVNotice(room_id, raffleId, callback, cnt) {
        if (cnt > 5) return;
        API.gift.smalltv.notice(room_id, raffleId).done(function(response) {
            DEBUG('TaskLottery: smalltv.notice: ' + JSON.stringify(response));
            if (response.code === 0 && response.data.status !== 3) {
                if (parseInt(response.data.gift_id, 10) === -1 && !response.data.gift_name) {
                    callback(response.msg);
                } else {
                    callback('直播间【' + room_id + '】小电视抽奖结果：' + response.data.gift_name + '*' + response.data.gift_num);
                }
            } else {
                // 还未开奖或其他情况
                setTimeout(function() {
                    SmallTVNotice(room_id, raffleId, callback, cnt + 1);
                }, 5e3);
            }
        });
    }

    function RaffleNotice(room_id, raffleId, callback, cnt) {
        if (cnt > 5) return;
        API.activity.notice(room_id, raffleId).done(function(response) {
            DEBUG('TaskLottery: activity.notice: ' + JSON.stringify(response));
            if (response.code === 0) {
                if (parseInt(response.data.gift_id, 10) === -1) {
                    callback(response.msg);
                } else {
                    callback('直播间【' + room_id + '】活动抽奖结果：' + response.data.gift_name + '*' + response.data.gift_num);
                }
            } else {
                // 还未开奖或其他情况
                setTimeout(function() {
                    RaffleNotice(room_id, raffleId, callback, cnt + 1);
                }, 5e3);
            }
        });
    }
    /*
        function Storm(cnt) {
            if (cnt > 5) return;
            API.create(112, 32).done(function(response) {
                if (response.code === 0) {
                    DOM.storm.image.load(function() {
                        // TODO
                        var phrase = recognizeCaptcha();
                        // 暂时不清楚验证码与phrase的关系，猜测是对验证码计算sha1
                        API.lottery.join(id, color, response.data.token, phrase, Info.csrf_token).done(function(response) {
                            if (response.code === 0) {
                                toast('节奏风暴抽奖结果：' + response.data.gift_name + '*' + response.data.gift_num, 'info');
                            } else {
                                setTimeout(function() {
                                    Storm(cnt + 1);
                                }, 1e3);
                            }
                        });
                    });
                    DOM.storm.image.attr('src', response.data.image);
                }
            });
        }
    */
    function Award(callback, cnt) {
        if (cnt > 5) {
            callback();
            return;
        }
        API.FreeSilver.getCaptcha(ts_ms(), function(dataURL) {
            DOM.treasure.image[0].onload = function() {
                var captcha = calcImg();
                if (captcha) {
                    // 验证码识别成功
                    API.FreeSilver.getAward(ts_s(), ts_s(), captcha).done(function(response) {
                        DEBUG('TaskAward: getAward: ' + JSON.stringify(response));
                        if (response.code === 0) {
                            // 领取瓜子成功
                            toast('领取了 ' + response.data.awardSilver + ' 银瓜子', 'success');
                            callback();
                        } else if (response.code === -903) {
                            // -903: 已经领取过这个宝箱
                            toast('已经领取过这个宝箱', 'success');
                            callback();
                        } else if (response.code === -902 || response.code === -901) {
                            // -902: 验证码错误, -901: 验证码过期
                            setTimeout(function() {
                                Award(callback, cnt + 1);
                            }, 2e3);
                        }
                    });
                } else {
                    // 验证码识别失败
                    setTimeout(function() {
                        Award(callback, cnt);
                    }, 500);
                }
            };
            DOM.treasure.image[0].src = dataURL;
        });
    }

    function Lottery() {
        var lottery_list = [],
            lottery_list_temp = [],
            overlap_index = Infinity;
        $('div.chat-item.system-msg div.msg-content a.link').each(function(index, el) {
            var matched = el.pathname.match(/^\/(\d+).*/);
            if (matched && matched[1]) {
                var short_id = parseInt(matched[1], 10);
                lottery_list_temp.push(short_id);
            }
        });
        $.each(lottery_list_temp, function(i, v) {
            if (i === 0) {
                var index = lottery_list_last.indexOf(v);
                if (index > -1) {
                    overlap_index = lottery_list_last.length - index;
                } else {
                    overlap_index = 0;
                    lottery_list.push(v);
                }
            } else if (i >= overlap_index) {
                lottery_list.push(v);
            }
        });
        lottery_list_last = lottery_list_temp;
        lottery_list_temp = lottery_list;
        lottery_list = [];
        lottery_list_temp.forEach(function(v) {
            if (lottery_list.indexOf(v) === -1) lottery_list.push(v);
        });
        DEBUG('TaskLottery: Lottery: last: ' + lottery_list_last.toString());
        DEBUG('TaskLottery: Lottery: list: ' + lottery_list.toString());
        // 根据可抽奖的房间数自动调整检测周期
        if (lottery_list.length > 11) {
            lottery_check_time = 4;
        } else if (lottery_list.length > 9) {
            lottery_check_time = 7;
        } else if (lottery_list.length > 6) {
            lottery_check_time = 11;
        } else if (lottery_list.length > 1) {
            lottery_check_time = 15;
        } else {
            lottery_check_time = 20;
        }
        lottery_list.forEach(function(short_id) {
            if (short_id > 0) {
                var room_id = room_id_list[short_id];
                if (room_id > 0) {
                    SmallTV(room_id, function() {
                        toast('已参加直播间【' + room_id + '】的小电视抽奖', 'success');
                    });
                    Raffle(room_id, function() {
                        toast('已参加直播间【' + room_id + '】的活动抽奖', 'success');
                    });
                } else {
                    API.room.room_init(short_id).done(function(response) {
                        DEBUG('TaskLottery: room_init: ' + JSON.stringify(response));
                        if (response.code === 0) {
                            room_id = response.data.room_id;
                            room_id_list[short_id] = room_id;
                            SmallTV(room_id, function() {
                                toast('已参加直播间【' + room_id + '】的小电视抽奖', 'success');
                            });
                            Raffle(room_id, function() {
                                toast('已参加直播间【' + room_id + '】的活动抽奖', 'success');
                            });
                        }
                    });
                }
            }
        });
        setTimeout(Lottery, lottery_check_time * 1e3);
    }

    function TaskSign() {
        API.sign.GetSignInfo().done(function(response) {
            DEBUG('TaskSign: GetSignInfo: ' + JSON.stringify(response));
            if (response.code === 0) {
                if (response.data.status === 0) {
                    // 未签到
                    API.sign.doSign().done(function(response) {
                        DEBUG('TaskSign: doSign: ' + JSON.stringify(response));
                        if (response.code === 0) {
                            // 签到成功
                            toast(response.data.text, 'success');
                        } else {
                            toast(response.data.text, 'error');
                        }
                    });
                } else if (response.data.status === 1) {
                    // 已签到
                    toast('今日已签到：' + response.data.text, 'success');
                }
            }
        });
    }

    function TaskAward_newTask() {
        API.FreeSilver.getCurrentTask().done(function(response) {
            DEBUG('TaskAward: getCurrentTask: ' + JSON.stringify(response));
            if (response.code === 0) {
                // 获取任务成功
                if (parseInt(response.data.minute, 10) !== 0) {
                    setTimeout(TaskAward, response.data.minute * 60e3 + 5e3);
                    TaskAward_Running = true;
                    execUntilSuccess(function() {
                        if (DOM.treasure.div_timer) {
                            DOM.treasure.div_timer.text((response.data.minute * 60e3 + 4e3) + 's');
                            return true;
                        }
                    });
                    execUntilSuccess(function() {
                        if (DOM.treasure.div_tip) {
                            DOM.treasure.div_tip.html('次数: ' + response.data.times + '/' + response.data.max_times + '<br>银瓜子: ' + response.data.silver);
                            return true;
                        }
                    });
                }
            } else if (response.code === -10017) {
                // 今天所有的宝箱已经领完!
                toast(response.msg, 'info');
                clearInterval(interval_treasure_timer);
                execUntilSuccess(function() {
                    if (DOM.treasure.div_tip) {
                        DOM.treasure.div_tip.html('今日<br>已领完');
                        return true;
                    }
                });
            } else {
                toast(response.msg, 'info');
            }
        });
    }

    function TaskAward() {
        if (TaskAward_Running) Award(TaskAward_newTask, 0);
        else TaskAward_newTask();
    }

    function TaskLottery() {
        setTimeout(Lottery, 4e3);
    }

    function TaskReceiveAward(task_id) {
        API.activity.receive_award(task_id, Info.csrf_token).done(function(response) {
            // DEBUG('TaskTask: receive_award: ' + JSON.stringify(response));
            if (response.code === 0) {
                // 完成任务
                toast('完成任务：' + task_id, 'success');
            }
        });
    }

    function Task() {
        toast('检查任务完成情况', 'info');
        API.i.taskInfo().done(function(response) {
            DEBUG('TaskTask: taskInfo: ' + JSON.stringify(response));
            if (response.code === 0) {
                for (var key in response.data) {
                    if (response.data[key].task_id && response.data[key].status) {
                        // 当前对象是任务且任务可完成
                        TaskReceiveAward(response.data[key].task_id);
                    }
                }
            }
        });
        API.activity.user_limit_tasks().done(function(response) {
            DEBUG('TaskTask: user_limit_tasks: ' + JSON.stringify(response));
            if (response.code === 0) {
                for (var key in response.data) {
                    if (response.data[key].task_id && response.data[key].status) {
                        // 当前对象是任务且任务可完成
                        TaskReceiveAward(response.data[key].task_id);
                    }
                }
            }
        });
        API.activity.master_limit_tasks().done(function(response) {
            DEBUG('TaskTask: master_limit_tasks: ' + JSON.stringify(response));
            if (response.code === 0) {
                for (var key in response.data) {
                    if (response.data[key].task_id && response.data[key].status) {
                        // 当前对象是任务且任务可完成
                        TaskReceiveAward(response.data[key].task_id);
                    }
                }
            }
        });
        setTimeout(Task, 3600e3);
    }

    function TaskTask() {
        setTimeout(Task, 6e3);
    }

    function Gift() {
        /*
        任务周期1小时，脚本运行后立即执行一次任务
        判断是否佩戴当前主播的头衔
        否：判断是否拥有当前主播的头衔，有则自动切换，没有则停止任务
        是：刷新当前亲密度上限和已喂养亲密度
        可以继续喂养则刷新背包，不可以则停止任务
        按照过期时间(天)从短到长排序，同一天按照礼物提供的亲密度从大到小排序
        按已排序的背包顺序送礼，直到亲密度已满或无法送礼，如：亲密度还可增加9但没有辣条，此时不送礼物
        可选：消耗银瓜子购买辣条送礼，直到亲密度已满或银瓜子不足
             可选：当前时间超过23:00时才消耗银瓜子
        */
        API.live_user.get_weared_medal(Info.uid, Info.roomid, Info.csrf_token).done(function(response) {
            DEBUG('TaskGift: get_weared_medal: ' + JSON.stringify(response));
            if (response.code === 0) {
                Info.medal_target_id = response.data.target_id;
                if (Info.medal_target_id !== Info.ruid) {
                    setTimeout(TaskGift, 1e3);
                    return;
                }
                Info.today_feed = parseInt(response.data.today_feed, 10);
                Info.day_limit = response.data.day_limit;
                var remain_feed = Info.day_limit - Info.today_feed;
                if (remain_feed > 0) {
                    toast('今日亲密度未满，送礼开始', 'info');
                    API.gift.bag_list().done(function(response) {
                        DEBUG('TaskGift: bag_list: ' + JSON.stringify(response));
                        if (response.code === 0) {
                            Info.bag_list = response.data.list;
                            // DEBUG('TaskGift: remain_feed: ' + remain_feed + ',day_limit:' + Info.day_limit + ',today_feed:' + Info.today_feed);
                            $.each(Info.bag_list, function(i, v) {
                                if (remain_feed <= 0) return false;
                                else if (CONFIG.GIFT_CONFIG.ALLOW_GIFT.indexOf(v.gift_id) > -1 || !CONFIG.GIFT_CONFIG.ALLOW_GIFT[0]) {
                                    var feed_single = giftIDtoFeed(v.gift_id);
                                    // DEBUG('TaskGift: Before bag_send: remain_feed:' + remain_feed + ',giftIDtoFeed(v.gift_id):' + giftIDtoFeed(v.gift_id) + ',' + JSON.stringify(v));
                                    if (feed_single > 0) {
                                        var feed_num = Math.floor(remain_feed / feed_single);
                                        if (feed_num > v.gift_num) {
                                            feed_num = v.gift_num;
                                        }
                                        // DEBUG('TaskGift: Before bag_send: remain_feed:' + remain_feed + ',feed_num:' + feed_num + ',feed_single:' + feed_single);
                                        if (feed_num > 0) {
                                            API.gift.bag_send(Info.uid, v.gift_id, Info.ruid, feed_num, v.bag_id, Info.roomid, Info.rnd, Info.csrf_token).done(function(response) {
                                                DEBUG('TaskGift: bag_send: ' + JSON.stringify(response));
                                                if (response.code === 0) {
                                                    // 送礼成功
                                                    Info.rnd = response.data.rnd;
                                                    toast('包裹送礼成功，送出' + feed_num + '个' + v.gift_name, 'success');
                                                } else {
                                                    toast('包裹送礼异常，' + response.msg, 'error');
                                                }
                                            });
                                            remain_feed -= feed_num * feed_single;
                                        }
                                    }
                                }
                            });
                            if (CONFIG.GIFT_CONFIG.USE_SILVER && remain_feed > 0 && (CONFIG.GIFT_CONFIG.ALLOW_GIFT.indexOf(1) > -1 || !CONFIG.GIFT_CONFIG.ALLOW_GIFT[0])) {
                                if (CONFIG.GIFT_CONFIG.ONLY_AFTER_23) {
                                    DEBUG('TaskGift: 检查当前时间: ' + (new Date()).getHours());
                                    if ((new Date()).getHours() < 23) {
                                        toast('时间未到23:00', 'info');
                                        setTimeout(Gift, 3600e3);
                                        return;
                                    }
                                }
                                var feed_num = remain_feed;
                                if (feed_num * 100 > Info.silver) {
                                    feed_num = Math.floor(Info.silver / 100);
                                }
                                if (feed_num > 0) {
                                    API.gift.send(Info.uid, 1, Info.ruid, feed_num, 'silver', Info.roomid, Info.rnd, Info.csrf_token).done(function(response) {
                                        DEBUG('TaskGift: send: ' + JSON.stringify(response));
                                        if (response.code === 0) {
                                            // 送礼成功
                                            Info.rnd = response.data.rnd;
                                            Info.silver = response.data.extra.wallet.silver;
                                            Info.gold = response.data.extra.wallet.gold;
                                            toast('银瓜子送礼成功，送出' + feed_num + '个辣条，剩余银瓜子：' + Info.silver, 'success');
                                        } else {
                                            toast('银瓜子送礼异常，' + response.msg, 'error');
                                        }
                                    });
                                    remain_feed -= feed_num;
                                }
                            }
                            if (remain_feed > 0) {
                                toast('送礼结束，1小时后再次送礼', 'success');
                                setTimeout(Gift, 3600e3);
                            } else {
                                toast('送礼结束，今日亲密度已满', 'success');
                            }
                        } else {
                            toast('获取包裹礼物异常，' + response.msg, 'error');
                        }
                    });
                }
            } else {
                toast('获取亲密度异常，' + response.msg, 'error');
            }
        });
    }

    function TaskGift() {
        if (!(CONFIG.GIFT_CONFIG.SHORT_ROOMID === 0 || CONFIG.GIFT_CONFIG.SHORT_ROOMID == Info.short_id)) return;
        if (Info.medal_target_id !== Info.ruid) {
            if (!CONFIG.GIFT_CONFIG.CHANGE_MEDAL) {
                toast('已佩戴的勋章不是当前主播勋章，送礼功能停止', 'info');
                return;
            }
            API.i.medal(1, 25).done(function(response) {
                DEBUG('TaskGift: medal: ' + JSON.stringify(response));
                if (response.code === 0) {
                    Info.medal_list = response.data.fansMedalList;
                    $.each(Info.medal_list, function(index, v) {
                        if (v.target_id === Info.ruid) {
                            API.i.ajaxWearFansMedal(v.medal_id).done(function(response) {
                                DEBUG('TaskGift: ajaxWearFansMedal: ' + JSON.stringify(response));
                                toast('已自动切换为当前主播勋章', 'success');
                                setTimeout(Gift, 9e3);
                            });
                            return false;
                        }
                    });
                }
            });
        } else {
            setTimeout(Gift, 9e3);
        }
    }

    function TaskStart() {
        if (CONFIG.USE_SIGN) TaskSign();
        if (CONFIG.USE_AWARD) TaskAward();
        if (CONFIG.USE_LOTTERY) TaskLottery();
        if (CONFIG.USE_TASK) TaskTask();
        if (CONFIG.USE_GIFT) TaskGift();
    }

    $(document).ready(function() {
        DEBUG(NAME + ': 脚本已运行');
        Init();
    });

})();
