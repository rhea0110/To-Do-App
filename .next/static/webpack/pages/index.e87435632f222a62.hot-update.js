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

/***/ "./components/NotesList.jsx":
/*!**********************************!*\
  !*** ./components/NotesList.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SearchIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchIcon */ \"./components/SearchIcon.jsx\");\n/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uniqid */ \"./node_modules/uniqid/index.js\");\n/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Note__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Note */ \"./components/Note.jsx\");\n/* harmony import */ var _PlusIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PlusIcon */ \"./components/PlusIcon.jsx\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n/*   new Array(50).fill(0).map((el, index) => {\r\n    return {\r\n      id: uniqid(),\r\n      title: `Note - ${(index += 1)}`,\r\n      text: \"random text writing for text\",\r\n    };\r\n  }); */ var NotesList = function(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), notes = ref[0], setNotes = ref[1];\n    var showResults = function() {\n        if (searchQuery === \"\") {\n            window.location.reload();\n        }\n        var data = notes.filter(function(note1) {\n            if (note1.title.includes(searchQuery) || note1.text.includes(searchQuery)) return true;\n            else return false;\n        });\n        setNotes(data);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setNotes(localStorage.getItem(\"notes\") ? JSON.parse(localStorage.getItem(\"notes\")) : []);\n    }, []);\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), searchQuery = ref1[0], setSearchQuery = ref1[1];\n    var addNote = function() {\n        var newNotes = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(notes);\n        newNotes.unshift({\n            id: uniqid__WEBPACK_IMPORTED_MODULE_3___default()(),\n            text: \"Add notes\",\n            title: \"Add a title\"\n        });\n        setNotes(newNotes);\n        localStorage.setItem(\"notes\", JSON.stringify(newNotes));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full min-h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-blue-900 font-medium text-5xl tracking-wide text-center mb-4\",\n                children: \"Post Notes\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Rhea Jain\\\\OneDrive\\\\Desktop\\\\Clone\\\\notes-app\\\\components\\\\NotesList.jsx\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex relative rounded-sm text-blue-900 font-semibold items-center border-2 border-blue-900 mx-auto w-[70%] sm:w-[50%] h-[40px] backdrop-blur-[8px] backdrop-saturate-100\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PlusIcon__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        className: \"w-[35px] right-0 translate-x-[150%] backdrop-blur-[8px] ease-in backdrop-saturate-10 hover:scale-150 transition-all hover:cursor-pointer absolute text-blue-900 -mt-[18px]\",\n                        onClick: function() {\n                            return addNote();\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Rhea Jain\\\\OneDrive\\\\Desktop\\\\Clone\\\\notes-app\\\\components\\\\NotesList.jsx\",\n                        lineNumber: 55,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchIcon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        className: \"w-6 h-6 ml-2\",\n                        placeholder: \"Search border-4 border-red-500\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Rhea Jain\\\\OneDrive\\\\Desktop\\\\Clone\\\\notes-app\\\\components\\\\NotesList.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"Search\",\n                        className: \"bg-transparent outline-none flex flex-grow indent-2 placeholder-blue-900\",\n                        placeholder: \"Search by a keyword\",\n                        onChange: function(e) {\n                            return setSearchQuery(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Rhea Jain\\\\OneDrive\\\\Desktop\\\\Clone\\\\notes-app\\\\components\\\\NotesList.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: showResults,\n                        className: \"\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"binoculars.png\",\n                            alt: \"Search\",\n                            className: \"w-10 border-l-2 border-blue-900 p-1\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Rhea Jain\\\\OneDrive\\\\Desktop\\\\Clone\\\\notes-app\\\\components\\\\NotesList.jsx\",\n                            lineNumber: 65,\n                            columnNumber: 54\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Rhea Jain\\\\OneDrive\\\\Desktop\\\\Clone\\\\notes-app\\\\components\\\\NotesList.jsx\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Rhea Jain\\\\OneDrive\\\\Desktop\\\\Clone\\\\notes-app\\\\components\\\\NotesList.jsx\",\n                lineNumber: 54,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full grid grid-cols-1 md:grid-cols-3 gap-y-[50px] gap-x-8 p-12 \",\n                children: notes.map(function(param) {\n                    var id = param.id, title = param.title, text = param.text;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Note__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            id: id,\n                            title: title,\n                            text: text,\n                            notes: notes,\n                            setNotes: setNotes\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Rhea Jain\\\\OneDrive\\\\Desktop\\\\Clone\\\\notes-app\\\\components\\\\NotesList.jsx\",\n                            lineNumber: 73,\n                            columnNumber: 29\n                        }, _this)\n                    }, id, false, {\n                        fileName: \"C:\\\\Users\\\\Rhea Jain\\\\OneDrive\\\\Desktop\\\\Clone\\\\notes-app\\\\components\\\\NotesList.jsx\",\n                        lineNumber: 72,\n                        columnNumber: 27\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Rhea Jain\\\\OneDrive\\\\Desktop\\\\Clone\\\\notes-app\\\\components\\\\NotesList.jsx\",\n                lineNumber: 68,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Rhea Jain\\\\OneDrive\\\\Desktop\\\\Clone\\\\notes-app\\\\components\\\\NotesList.jsx\",\n        lineNumber: 49,\n        columnNumber: 7\n    }, _this);\n};\n_s(NotesList, \"G75ip/7/IAKoxR9laxxchPxACxo=\");\n_c = NotesList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NotesList);\nvar _c;\n$RefreshReg$(_c, \"NotesList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05vdGVzTGlzdC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUEwQjtBQUNZO0FBQ007QUFDaEI7QUFDRjtBQUNRO0FBRWxDOztJQVFJLElBQTBCRSxHQUUzQixHQUYyQkE7SUFHNUIsSUFBTVMsV0FBVyxHQUFHLFdBQU07UUFHeEIsSUFBSUMsV0FBVyxLQUFLLEVBQUUsRUFBRTs7UUFFeEIsQ0FBQztRQUNEO1lBQ0UsaURBQVVPLEtBQUssQ0FBQ0MsUUFBUSxDQUFDUixXQUFXLENBQUMsSUFBSU0sS0FBSyxDQUFDRztpQkFHN0MsT0FBTyxLQUFLLENBQUM7UUFDakIsQ0FBQyxDQUFDO1FBQ0ZYLFFBQVEsQ0FBQ00sSUFBSSxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUVEYixTQUFTLENBQUMsV0FBTTtRQUNoQk8sUUFBUSxDQUFDWSxZQUFZLENBQUNDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNILFlBQVksQ0FBQ0MsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ3hGLENBQUMsRUFBRSxFQUFFLENBQUU7SUFDTCxJQUFzQ3JCO0lBQ3RDLElBQU15QixPQUFPLEdBQUc7O29EQUVaQyxHQUFRLENBQUNDLE9BQU8sQ0FBQztZQUNiQyxFQUFFLEVBQUUxQixNQUFNLEVBQUU7O1lBRVplLEdBQUFBLCtDQUFPLFNBQWE7U0FDdkIsQ0FBQztRQUNKVCxRQUFRLENBQUNrQixNQUFBQSxvRkFBVTtRQUNuQk4sWUFBWSxDQUFDUztJQUNmLENBQUM7SUFDRCxxQkFDRTtRQUFLRyxTQUFTLEVBQUM7OzBCQUNiO2dCQUFJQSxTQUFTLEVBQUM7Ozs7OztxQkFFVDswQkFFRCxRQUFDRDtnQkFBSUMsU0FBUyxFQUFDOzs7d0JBQ0RBOzt5RkFDS1AsT0FBTzt5QkFBRTs7Ozs7NkJBQ3RCOzt3QkFDSU8sU0FBUyxFQUFDO3dCQUFlRyxXQUFXLEVBQUMsZ0NBQWdDOzs7Ozs2QkFBRztrQ0FDcEYsUUFBQ0MsT0FBSzt3QkFDSkMsSUFBSSxFQUFDLFFBQVE7d0JBQ2JMLFNBQVMsRUFBQywwRUFBMEU7d0JBQzVFRyxXQUFXLEVBQUM7d0JBQ1pHLFFBQVEsRUFBRTs7eUJBQXFDOzs7Ozs2QkFDdkQ7O3dCQUNNSixPQUFPLEVBQUV6Qjt3QkFBYXVCLFNBQVMsRUFBQyxFQUFFO2tDQUFDOzRCQUFLWSxHQUFHLEVBQUM7NEJBQWlCQzs0QkFBYWIsTUFBQUEsNkRBQVU7Ozs7O2lDQUF1Qzs7Ozs7NkJBQVM7Ozs7OztxQkFDcEk7O2dCQUVEQSxTQUFTLEVBQUM7MEJBRVB6QixLQUFLLENBQUN1QyxHQUFHLENBQUMsZ0JBQXVCO3dCQUFyQmxCLEVBQUU7b0JBQ1Y7O3VGQUdVQSxDQUFFOzRCQUNOWCxLQUFLLEVBQUVBLEtBQUs7NEJBQ1pFLElBQUksRUFBRUEsSUFBSTs0QkFDVlosS0FBSyxFQUFFQSxLQUFLOzRCQUNaQyxRQUFRLEVBQUVBLEdBQUFBLDZEQUFROzs7OztpQ0FDbEI7dUJBUE1vQixFQUFFOzs7OzZCQVFOLENBQ047Z0JBQ04sQ0FBQyxDQUFDOzs7OztxQkFFSjs7Ozs7O2FBQ04sQ0FDTjtBQUNOLENBQUM7R0F4RUt2QixTQUFTO0FBQVRBLEtBQUFBLFNBQVM7QUEwRWYsZUFBZUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ob3Rlc0xpc3QuanN4P2M5OGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tIFwiLi9TZWFyY2hJY29uXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHVuaXFpZCBmcm9tIFwidW5pcWlkXCI7XHJcbmltcG9ydCBOb3RlIGZyb20gXCIuL05vdGVcIjtcclxuaW1wb3J0IFBsdXNJY29uIGZyb20gXCIuL1BsdXNJY29uXCI7XHJcblxyXG4vKiAgIG5ldyBBcnJheSg1MCkuZmlsbCgwKS5tYXAoKGVsLCBpbmRleCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaWQ6IHVuaXFpZCgpLFxyXG4gICAgICB0aXRsZTogYE5vdGUgLSAkeyhpbmRleCArPSAxKX1gLFxyXG4gICAgICB0ZXh0OiBcInJhbmRvbSB0ZXh0IHdyaXRpbmcgZm9yIHRleHRcIixcclxuICAgIH07XHJcbiAgfSk7ICovXHJcbmNvbnN0IE5vdGVzTGlzdCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW25vdGVzLCBzZXROb3Rlc10gPSB1c2VTdGF0ZShcclxuICAgICAgW11cclxuICApO1xyXG4gIGNvbnN0IHNob3dSZXN1bHRzID0gKCkgPT4ge1xyXG4gIFxyXG5cclxuICAgIGlmIChzZWFyY2hRdWVyeSA9PT0gJycpIHtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgfSBcclxuICAgIGxldCBkYXRhID0gbm90ZXMuZmlsdGVyKG5vdGUxID0+IHtcclxuICAgICAgaWYgKG5vdGUxLnRpdGxlLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5KSB8fCBub3RlMS50ZXh0LmluY2x1ZGVzKHNlYXJjaFF1ZXJ5KSlcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgZWxzZVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pXHJcbiAgICBzZXROb3RlcyhkYXRhKTtcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7IFxyXG4gIHNldE5vdGVzKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibm90ZXNcIikgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibm90ZXNcIikpIDogW10pXHJcbiAgfSwgW10gKVxyXG4gICAgY29uc3QgW3NlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBhZGROb3RlID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld05vdGVzID0gWy4uLm5vdGVzXTtcclxuICAgICAgICBuZXdOb3Rlcy51bnNoaWZ0KHtcclxuICAgICAgICAgICAgaWQ6IHVuaXFpZCgpLFxyXG4gICAgICAgICAgICB0ZXh0OiAnQWRkIG5vdGVzJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdBZGQgYSB0aXRsZScsXHJcbiAgICAgICAgfSlcclxuICAgICAgc2V0Tm90ZXMobmV3Tm90ZXMpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbm90ZXMnLCBKU09OLnN0cmluZ2lmeShuZXdOb3RlcykpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWluLWgtc2NyZWVuXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtYmx1ZS05MDAgZm9udC1tZWRpdW0gdGV4dC01eGwgdHJhY2tpbmctd2lkZSB0ZXh0LWNlbnRlciBtYi00XCI+XHJcbiAgICAgICAgICBQb3N0IE5vdGVzXHJcbiAgICAgICAgPC9oMT5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCByZWxhdGl2ZSByb3VuZGVkLXNtIHRleHQtYmx1ZS05MDAgZm9udC1zZW1pYm9sZCBpdGVtcy1jZW50ZXIgYm9yZGVyLTIgYm9yZGVyLWJsdWUtOTAwIG14LWF1dG8gdy1bNzAlXSBzbTp3LVs1MCVdIGgtWzQwcHhdIGJhY2tkcm9wLWJsdXItWzhweF0gYmFja2Ryb3Atc2F0dXJhdGUtMTAwXCI+XHJcbiAgICAgICAgICAgICAgICA8UGx1c0ljb24gY2xhc3NOYW1lPSd3LVszNXB4XSByaWdodC0wIHRyYW5zbGF0ZS14LVsxNTAlXSBiYWNrZHJvcC1ibHVyLVs4cHhdIGVhc2UtaW4gYmFja2Ryb3Atc2F0dXJhdGUtMTAgaG92ZXI6c2NhbGUtMTUwIHRyYW5zaXRpb24tYWxsIGhvdmVyOmN1cnNvci1wb2ludGVyIGFic29sdXRlIHRleHQtYmx1ZS05MDAgLW10LVsxOHB4XSdcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFkZE5vdGUoKSB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFNlYXJjaEljb24gY2xhc3NOYW1lPVwidy02IGgtNiBtbC0yXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggYm9yZGVyLTQgYm9yZGVyLXJlZC01MDBcIiAvPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJTZWFyY2hcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy10cmFuc3BhcmVudCBvdXRsaW5lLW5vbmUgZmxleCBmbGV4LWdyb3cgaW5kZW50LTIgcGxhY2Vob2xkZXItYmx1ZS05MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGJ5IGEga2V5d29yZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoUXVlcnkoZS50YXJnZXQudmFsdWUpIH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Nob3dSZXN1bHRzfSBjbGFzc05hbWU9XCJcIj48aW1nIHNyYz1cImJpbm9jdWxhcnMucG5nXCIgYWx0PVwiU2VhcmNoXCIgY2xhc3NOYW1lPVwidy0xMCBib3JkZXItbC0yIGJvcmRlci1ibHVlLTkwMCBwLTFcIi8+PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7Lypub3RlcyovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0zIGdhcC15LVs1MHB4XSBnYXAteC04IHAtMTIgXCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm90ZXMubWFwKCh7aWQsIHRpdGxlLCB0ZXh0fSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Tm90ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17aWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17dGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90ZXM9e25vdGVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXROb3Rlcz17c2V0Tm90ZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vdGVzTGlzdDsiXSwibmFtZXMiOlsiUmVhY3QiLCJTZWFyY2hJY29uIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1bmlxaWQiLCJOb3RlIiwiUGx1c0ljb24iLCJOb3Rlc0xpc3QiLCJwcm9wcyIsIm5vdGVzIiwic2V0Tm90ZXMiLCJzaG93UmVzdWx0cyIsInNlYXJjaFF1ZXJ5Iiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJkYXRhIiwiZmlsdGVyIiwibm90ZTEiLCJ0aXRsZSIsImluY2x1ZGVzIiwidGV4dCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJzZXRTZWFyY2hRdWVyeSIsImFkZE5vdGUiLCJuZXdOb3RlcyIsInVuc2hpZnQiLCJpZCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIm9uQ2xpY2siLCJwbGFjZWhvbGRlciIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiYnV0dG9uIiwiaW1nIiwic3JjIiwiYWx0IiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/NotesList.jsx\n"));

/***/ })

});