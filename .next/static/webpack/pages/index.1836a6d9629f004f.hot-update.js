"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Note.jsx":
/*!*****************************!*\
  !*** ./components/Note.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _NotesList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotesList */ \"./components/NotesList.jsx\");\n/* harmony import */ var _EditIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditIcon */ \"./components/EditIcon.jsx\");\n/* harmony import */ var _DeleteIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DeleteIcon */ \"./components/DeleteIcon.jsx\");\n/* harmony import */ var _Submit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Submit */ \"./components/Submit.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n//selectall\nvar Note = function(param) {\n    var id = param.id, title = param.title, text = param.text, notes = param.notes, setNotes = param.setNotes;\n    _s();\n    var editNote = function(e) {\n        e.preventDefault();\n        var note = notes.find(function(s) {\n            return s.id === id;\n        });\n        note.title = title2;\n        note.text = text2;\n        /*  let data = notes;\r\n    let noteIndex = data.findIndex(s => s.id === id);\r\n    data[noteIndex].title = title2;\r\n    data[noteIndex].text = text2; */ var data = notes.filter(function(s) {\n            return s.id !== id;\n        });\n        setNotes((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(data).concat([\n            note\n        ]));\n        localStorage.setItem(\"notes\", JSON.stringify((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(data).concat([\n            note\n        ])));\n        setEdit(false);\n    };\n    var deleteNote = function() {\n        var data = notes.filter(function(item) {\n            return item.id !== id;\n        });\n        setNotes(data);\n        localStorage.setItem(\"notes\", JSON.stringify(data));\n    };\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false), edit = ref[0], setEdit = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(title), title2 = ref1[0], setTitle2 = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(text), text2 = ref2[0], setText2 = ref2[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: function(e) {\n            return editNote(e);\n        },\n        className: \" flex rounded-sm flex-col shadow-2xl bg-white/10 backdrop-blur-[8px] font-semibold backdrop-saturate-10 min-h-[300px] h-fit \",\n        children: [\n            edit ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                value: title2,\n                onChange: function(e) {\n                    return setTitle2(e.target.value);\n                },\n                className: \"h-full w-full\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Rhea Jain\\\\OneDrive\\\\Desktop\\\\Clone\\\\notes-app\\\\components\\\\Note.jsx\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full bg-transparent overflow-hidden h-full text-center px-2 text-3xl font-[700] tracking-wider text-blue-900\",\n                children: title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Rhea Jain\\\\OneDrive\\\\Desktop\\\\Clone\\\\notes-app\\\\components\\\\Note.jsx\",\n                lineNumber: 46,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                className: \"border-dashed border-blue-900 mt-1\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Rhea Jain\\\\OneDrive\\\\Desktop\\\\Clone\\\\notes-app\\\\components\\\\Note.jsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, _this),\n            edit ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                value: text2,\n                onChange: function(e) {\n                    return setText2(e.target.value);\n                },\n                className: \"h-full w-full\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Rhea Jain\\\\OneDrive\\\\Desktop\\\\Clone\\\\notes-app\\\\components\\\\Note.jsx\",\n                lineNumber: 52,\n                columnNumber: 9\n            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[95%] h-full bg-transparent px-8 text-left text-xl overflow-hidden py-2 text-blue-900\",\n                children: text\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Rhea Jain\\\\OneDrive\\\\Desktop\\\\Clone\\\\notes-app\\\\components\\\\Note.jsx\",\n                lineNumber: 58,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex mb-1 py-2 px-3 mt-auto ml-auto gap-x-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"w-7\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Submit__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Rhea Jain\\\\OneDrive\\\\Desktop\\\\Clone\\\\notes-app\\\\components\\\\Note.jsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Rhea Jain\\\\OneDrive\\\\Desktop\\\\Clone\\\\notes-app\\\\components\\\\Note.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_EditIcon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        className: \"w-7 h-7 cursor-pointer\",\n                        onClick: function() {\n                            return setEdit(true);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Rhea Jain\\\\OneDrive\\\\Desktop\\\\Clone\\\\notes-app\\\\components\\\\Note.jsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DeleteIcon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        className: \"w-7 h-7 cursor-pointer\",\n                        onClick: function() {\n                            return deleteNote();\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Rhea Jain\\\\OneDrive\\\\Desktop\\\\Clone\\\\notes-app\\\\components\\\\Note.jsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Rhea Jain\\\\OneDrive\\\\Desktop\\\\Clone\\\\notes-app\\\\components\\\\Note.jsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Rhea Jain\\\\OneDrive\\\\Desktop\\\\Clone\\\\notes-app\\\\components\\\\Note.jsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, _this);\n};\n_s(Note, \"PPx0IcVd53WjmTx0hngl1pLwII4=\");\n_c = Note;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Note);\nvar _c;\n$RefreshReg$(_c, \"Note\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vdGVzTGlzdCBmcm9tIFwiLi9Ob3Rlc0xpc3RcIlxyXG5pbXBvcnQgRWRpdEljb24gZnJvbSAnLi9FZGl0SWNvbic7XHJcbmltcG9ydCBEZWxldGVJY29uIGZyb20gJy4vRGVsZXRlSWNvbic7XHJcbmltcG9ydCBTdWJtaXQgZnJvbSBcIi4vU3VibWl0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vc2VsZWN0YWxsXHJcblxyXG5cclxuY29uc3QgTm90ZSA9ICh7IGlkLCB0aXRsZSwgdGV4dCwgbm90ZXMsIHNldE5vdGVzIH0pID0+IHtcclxuICBjb25zdCBlZGl0Tm90ZSA9IChlKSA9PiB7IFxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IG5vdGUgPSBub3Rlcy5maW5kKHMgPT4gcy5pZCA9PT0gaWQpO1xyXG4gICAgbm90ZS50aXRsZSA9IHRpdGxlMjtcclxuICAgIG5vdGUudGV4dCA9IHRleHQyO1xyXG4gICAvKiAgbGV0IGRhdGEgPSBub3RlcztcclxuICAgIGxldCBub3RlSW5kZXggPSBkYXRhLmZpbmRJbmRleChzID0+IHMuaWQgPT09IGlkKTtcclxuICAgIGRhdGFbbm90ZUluZGV4XS50aXRsZSA9IHRpdGxlMjtcclxuICAgIGRhdGFbbm90ZUluZGV4XS50ZXh0ID0gdGV4dDI7ICovXHJcbiAgICBsZXQgZGF0YSA9IG5vdGVzLmZpbHRlcihzID0+IHMuaWQgIT09IGlkKTsgIFxyXG4gICAgc2V0Tm90ZXMoWy4uLmRhdGEsIG5vdGVdKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdub3RlcycsIEpTT04uc3RyaW5naWZ5KFsuLi5kYXRhLCBub3RlXSkpO1xyXG4gICAgc2V0RWRpdChmYWxzZSk7XHJcbiAgfTtcclxuICBjb25zdCBkZWxldGVOb3RlID0gKCkgPT4ge1xyXG4gICAgbGV0IGRhdGEgPSBub3Rlcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkICE9PSBpZClcclxuICAgIHNldE5vdGVzKGRhdGEpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJub3Rlc1wiLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgfTtcclxuICBjb25zdCBbZWRpdCwgc2V0RWRpdF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3RpdGxlMiwgc2V0VGl0bGUyXSA9IHVzZVN0YXRlKHRpdGxlKTtcclxuICBjb25zdCBbdGV4dDIsIHNldFRleHQyXSA9IHVzZVN0YXRlKHRleHQpO1xyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtXHJcbiAgICAgIG9uU3VibWl0PXsoZSkgPT4gZWRpdE5vdGUoZSl9XHJcbiAgICAgIGNsYXNzTmFtZT1cIiBmbGV4IHJvdW5kZWQtc20gZmxleC1jb2wgc2hhZG93LTJ4bCAgYmctd2hpdGUvMTAgYmFja2Ryb3AtYmx1ci1bOHB4XSBmb250LXNlbWlib2xkIGJhY2tkcm9wLXNhdHVyYXRlLTEwIG1pbi1oLVszMDBweF0gaC1maXQgXCJcclxuICAgID5cclxuICAgICAge2VkaXQgPyAoXHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB2YWx1ZT17dGl0bGUyfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUaXRsZTIoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBiZy10cmFuc3BhcmVudCBvdmVyZmxvdy1oaWRkZW4gaC1mdWxsIHRleHQtY2VudGVyIHB4LTIgdGV4dC0zeGwgZm9udC1bNzAwXSB0cmFja2luZy13aWRlciB0ZXh0LWJsdWUtOTAwXCI+XHJcbiAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgIDxociBjbGFzc05hbWU9XCJib3JkZXItZGFzaGVkIGJvcmRlci1ibHVlLTkwMCBtdC0xXCIgLz5cclxuICAgICAge2VkaXQgPyAoXHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB2YWx1ZT17dGV4dDJ9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRleHQyKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImgtZnVsbCB3LWZ1bGxcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LVs5NSVdIGgtZnVsbCBiZy10cmFuc3BhcmVudCBweC04IHRleHQtbGVmdCB0ZXh0LXhsIG92ZXJmbG93LWhpZGRlbiBweS0yIHRleHQtYmx1ZS05MDBcIj5cclxuICAgICAgICAgIHt0ZXh0fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgICB7LyogICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWItMSBweS0yIHB4LTMgbXQtYXV0byBnYXAteC00XCI+ICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWItMSBweS0yIHB4LTMgbXQtYXV0byBtbC1hdXRvIGdhcC14LTRcIj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJ3LTdcIj5cclxuICAgICAgICAgIDxTdWJtaXQgLz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8RWRpdEljb25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctNyBoLTcgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RWRpdCh0cnVlKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxEZWxldGVJY29uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LTcgaC03IGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZU5vdGUoKX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm90ZTsiXSwibmFtZXMiOlsiTm90ZXNMaXN0IiwiRWRpdEljb24iLCJEZWxldGVJY29uIiwiU3VibWl0IiwidXNlU3RhdGUiLCJOb3RlIiwiaWQiLCJ0aXRsZSIsInRleHQiLCJub3RlcyIsInNldE5vdGVzIiwiZWRpdE5vdGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJub3RlIiwiZmluZCIsInMiLCJ0aXRsZTIiLCJ0ZXh0MiIsImRhdGEiLCJmaWx0ZXIiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInNldEVkaXQiLCJkZWxldGVOb3RlIiwiaXRlbSIsImVkaXQiLCJzZXRUaXRsZTIiLCJzZXRUZXh0MiIsImZvcm0iLCJvblN1Ym1pdCIsImNsYXNzTmFtZSIsImlucHV0IiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsImRpdiIsImhyIiwiYnV0dG9uIiwidHlwZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Note.jsx\n"));

/***/ })

});