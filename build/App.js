"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_2 = require("react");
//import logo from './logo.svg';
var react_grid_layout_1 = __importDefault(require("react-grid-layout"));
var react_tabs_1 = require("react-tabs");
var nosleep_js_1 = __importDefault(require("@uriopass/nosleep.js"));
require("./App.css");
var layoutsdefault_1 = require("./layoutsdefault");
var react_swipeable_1 = require("react-swipeable");
function App() {
    var _this = this;
    var noSleep = new nosleep_js_1.default();
    var _a = (0, react_2.useState)(null), layout = _a[0], setLayout = _a[1];
    var _b = (0, react_2.useState)(null), selectedPage = _b[0], setSelectedPage = _b[1];
    var _c = (0, react_2.useState)(0), selectedPageI = _c[0], setSelectedPageI = _c[1];
    var _d = (0, react_2.useState)(0), pageW = _d[0], setPageW = _d[1];
    var _f = (0, react_2.useState)(selectedPageI), activeTab = _f[0], setActiveTab = _f[1];
    var _g = (0, react_2.useState)(false), noSleepDiv = _g[0], setNoSleepDiv = _g[1];
    (0, react_2.useEffect)(function () {
        var fetchLayouts = function () { return __awaiter(_this, void 0, void 0, function () {
            var response, data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, fetch('/layout')];
                    case 1:
                        response = _a.sent();
                        console.log(response);
                        if (!response.ok) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        console.log(data.layout);
                        setLayout(data.layout);
                        if (data.layout.nosleep === true) {
                            setNoSleepDiv(data.layout.nosleep);
                        }
                        return [3 /*break*/, 4];
                    case 3: throw new Error('Erreur lors de la récupération des layouts');
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_1 = _a.sent();
                        console.error(error_1);
                        fetchFakeLayouts();
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        var fetchFakeLayouts = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                setLayout(layoutsdefault_1.DefaultLayouts[0]);
                console.log(layoutsdefault_1.DefaultLayouts);
                return [2 /*return*/];
            });
        }); };
        fetchLayouts();
        window.addEventListener('resize', function () {
            setPageW(window.innerWidth);
        });
    }, []);
    (0, react_2.useEffect)(function () {
        if (layout) {
            handleChangePage(0);
        }
    }, [layout]);
    var handleNoSleep = function (status) {
        if (status === true) {
            noSleep.enable();
        }
        else {
            noSleep.disable();
        }
        setNoSleepDiv(false);
    };
    var handleChangePage = function (index) {
        setSelectedPage(layout.pages[index]);
        setSelectedPageI(index);
        setPageW(window.innerWidth);
        setActiveTab(index);
    };
    var handleSendKey = function (e, uid) {
        console.log(uid);
        e.preventDefault();
        fetch("/key/".concat(uid), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    };
    var handleClick = function (_e, element) {
        console.log(element.onclickcolor);
        console.log(_e.target.style.color);
        _e.target.style.color = element.onclickcolor;
        _e.target.style.background = element.onclickbgcolor;
        _e.target.style.border = element.onclickborder;
        setTimeout(function () {
            _e.target.style.color = element.color;
            _e.target.style.background = element.bgcolor;
            _e.target.style.border = element.border;
        }, 500);
    };
    var handlers = (0, react_swipeable_1.useSwipeable)({
        onSwipedLeft: function () { return (handleSwipe(-1)); },
        onSwipedRight: function () { return (handleSwipe(1)); },
        trackTouch: true,
    });
    var handleSwipe = function (direction) {
        console.log(direction);
        if (direction > 0) {
            console.log('left');
            if (selectedPageI === 0) {
                handleChangePage(layout.pages.length - 1);
            }
            else {
                handleChangePage(selectedPageI - 1);
            }
        }
        else if (direction < 0) {
            console.log('right');
            if (selectedPageI === layout.pages.length - 1) {
                handleChangePage(0);
            }
            else {
                handleChangePage(selectedPageI + 1);
            }
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", { children: [noSleepDiv &&
                (0, jsx_runtime_1.jsx)("div", { id: 'nosleep', children: (0, jsx_runtime_1.jsxs)("div", { id: 'nosleepcontent', children: [(0, jsx_runtime_1.jsx)("p", { children: "NoSleep activated and require a manual confirm" }), (0, jsx_runtime_1.jsxs)("div", { id: 'nosleepconfirm', children: [(0, jsx_runtime_1.jsx)("button", { onClick: function () { return handleNoSleep(true); }, children: "confirm" }), (0, jsx_runtime_1.jsx)("button", { onClick: function () { return handleNoSleep(false); }, children: "cancel" })] })] }) }), layout && selectedPage &&
                (0, jsx_runtime_1.jsx)("div", __assign({ id: "layoutdisplay", style: {
                        backgroundRepeat: selectedPage.pageConfig.bgrepeat,
                        backgroundPositionX: selectedPage.pageConfig.bgpos.x,
                        backgroundPositionY: selectedPage.pageConfig.bgpos.y,
                        backgroundSize: selectedPage.pageConfig.bgsize,
                        backgroundImage: "url(\"images/".concat(selectedPage.pageConfig.bgimg, "\")")
                    } }, handlers, { children: (0, jsx_runtime_1.jsx)("div", { id: 'layoutdisplaybgcolor', style: {
                            backgroundColor: selectedPage === null || selectedPage === void 0 ? void 0 : selectedPage.pageConfig.bgcolor,
                            height: "inherit"
                        }, children: (0, jsx_runtime_1.jsx)(react_tabs_1.Tabs, { selectedIndex: selectedPageI, onSelect: function (index) { return handleChangePage(index); }, children: (0, jsx_runtime_1.jsxs)("div", { style: {
                                    backgroundImage: "url(\"images/".concat(selectedPage.pageListConfig.bgimg, "\")"),
                                    backgroundRepeat: selectedPage.pageListConfig.bgrepeat,
                                    backgroundPositionX: selectedPage.pageListConfig.bgpos.x,
                                    backgroundPositionY: selectedPage.pageListConfig.bgpos.y,
                                    backgroundSize: selectedPage.pageListConfig.bgsize,
                                }, children: [(0, jsx_runtime_1.jsx)(react_tabs_1.TabList, { style: {
                                            backgroundColor: selectedPage.pageListConfig.bgcolor,
                                            justifyContent: selectedPage.pageListConfig.justifyitems,
                                            margin: selectedPage.pageListConfig.margin,
                                            padding: selectedPage.pageListConfig.padding,
                                        }, children: layout.pages.map(function (page, index) { return ((0, react_1.createElement)(react_tabs_1.Tab, __assign({}, handlers, { style: {
                                                backgroundImage: "url(\"images/".concat(page.pageItemConfig.bgimg, "\")"),
                                                backgroundSize: page.pageItemConfig.bgsize,
                                                backgroundColor: page.pageItemConfig.bgcolor,
                                                backgroundRepeat: page.pageItemConfig.bgrepeat,
                                                backgroundPositionX: page.pageItemConfig.bgpos.x,
                                                backgroundPositionY: page.pageItemConfig.bgpos.y,
                                                margin: page.pageItemConfig.margin,
                                                padding: page.pageItemConfig.padding,
                                                border: page.pageItemConfig.border,
                                                borderRadius: page.pageItemConfig.borderRadius,
                                                width: page.pageItemConfig.width,
                                                height: page.pageItemConfig.height,
                                                fontFamily: page.pageItemConfig.fontFamily,
                                                fontWeight: page.pageItemConfig.fontWeight,
                                                fontSize: page.pageItemConfig.fontSize,
                                                color: activeTab === index ? page.pageItemConfig.onclickcolor : page.pageItemConfig.color
                                            }, key: page.uid }),
                                            (0, jsx_runtime_1.jsx)("div", { className: 'tabinn', style: {
                                                    background: activeTab === index ? page.pageItemConfig.onclickbgcolor : page.pageItemConfig.bgcolor,
                                                }, children: page.name }))); }) }), layout.pages.map(function (page, index) { return ((0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(react_grid_layout_1.default, { autoSize: true, compactType: null, width: pageW, cols: 12, rowHeight: 10, preventCollision: true, isBounded: false, children: page.items.map(function (item) { return ((0, jsx_runtime_1.jsx)("button", { className: "btn", onClick: function (e) { return handleSendKey(e, item.action); }, "data-grid": {
                                                    x: item.grid.x,
                                                    y: item.grid.y,
                                                    w: item.grid.w,
                                                    h: item.grid.h,
                                                    static: true
                                                }, style: {
                                                    backgroundRepeat: item.bgrepeat,
                                                    backgroundPositionX: item.bgpos.x,
                                                    backgroundPositionY: item.bgpos.y,
                                                    backgroundSize: item.bgsize,
                                                    backgroundImage: "url(\"images/".concat(item.bgimg, "\")"),
                                                    borderRadius: item.borderRadius,
                                                    textShadow: item.textShadow,
                                                    boxShadow: item.type === "button" ? item.boxShadow : ""
                                                }, children: (0, jsx_runtime_1.jsx)("div", { className: 'btninn', style: {
                                                        background: item.bgcolor,
                                                        border: item.border,
                                                        borderRadius: item.borderRadius,
                                                        color: item.color,
                                                        fontFamily: item.fontFamily,
                                                        fontWeight: item.fontWeight,
                                                        fontSize: item.fontSize,
                                                    }, onClick: function (e) { return handleClick(e, item); }, children: item.name }) }, item.grid.i)); }) }) }, index)); })] }) }) }) }))] }));
}
exports.default = App;
