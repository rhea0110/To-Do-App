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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SearchIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchIcon */ \"./components/SearchIcon.jsx\");\n/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uniqid */ \"./node_modules/uniqid/index.js\");\n/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Note__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Note */ \"./components/Note.jsx\");\n/* harmony import */ var _PlusIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PlusIcon */ \"./components/PlusIcon.jsx\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n/*   new Array(50).fill(0).map((el, index) => {\r\n    return {\r\n      id: uniqid(),\r\n      title: `Note - ${(index += 1)}`,\r\n      text: \"random text writing for text\",\r\n    };\r\n  }); */ var NotesList = function(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), notes = ref[0], setNotes = ref[1];\n    var showResults = function() {\n        if (searchQuery === \"\") {\n            window.location.reload();\n        }\n        var data = notes.filter(function(note1) {\n            if (note1.title.includes(searchQuery) || note1.text.includes(searchQuery)) return true;\n            else return false;\n        });\n        setNotes(data);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setNotes(localStorage.getItem(\"notes\") ? JSON.parse(localStorage.getItem(\"notes\")) : []);\n    }, []);\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), searchQuery = ref1[0], setSearchQuery = ref1[1];\n    var addNote = function() {\n        var newNotes = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(notes);\n        newNotes.unshift({\n            id: uniqid__WEBPACK_IMPORTED_MODULE_3___default()(),\n            text: \"Add notes\",\n            title: \"Add a title\"\n        });\n        setNotes(newNotes);\n        localStorage.setItem(\"notes\", JSON.stringify(newNotes));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full min-h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-blue-900 font-medium text-5xl tracking-wide text-center mb-4\",\n                children: \"Post Notes\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Rhea Jain\\\\OneDrive\\\\Desktop\\\\Clone\\\\notes-app\\\\components\\\\NotesList.jsx\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col lg:flex-row relative rounded-sm text-blue-900 font-semibold items-center border-2 border-blue-900 mx-auto w-full sm:w-[50%] h-[40px] backdrop-blur-[8px] backdrop-saturate-100\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PlusIcon__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        className: \"w-[35px] right-0 translate-x-[150%] backdrop-blur-[8px] ease-in backdrop-saturate-10 hover:scale-150 transition-all hover:cursor-pointer absolute text-blue-900 -mt-[18px]\",\n                        onClick: function() {\n                            return addNote();\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Rhea Jain\\\\OneDrive\\\\Desktop\\\\Clone\\\\notes-app\\\\components\\\\NotesList.jsx\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchIcon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        className: \"w-6 h-6 ml-2 \",\n                        placeholder: \"Search \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Rhea Jain\\\\OneDrive\\\\Desktop\\\\Clone\\\\notes-app\\\\components\\\\NotesList.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"Search\",\n                        className: \"bg-transparent outline-none flex flex-grow indent-2 placeholder-blue-900\",\n                        placeholder: \"Search by a keyword\",\n                        onChange: function(e) {\n                            return setSearchQuery(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Rhea Jain\\\\OneDrive\\\\Desktop\\\\Clone\\\\notes-app\\\\components\\\\NotesList.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: showResults,\n                        className: \"\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"binoculars.png\",\n                            alt: \"Search\",\n                            className: \"w-10 border-l-2 border-blue-900 p-1\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Rhea Jain\\\\OneDrive\\\\Desktop\\\\Clone\\\\notes-app\\\\components\\\\NotesList.jsx\",\n                            lineNumber: 67,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Rhea Jain\\\\OneDrive\\\\Desktop\\\\Clone\\\\notes-app\\\\components\\\\NotesList.jsx\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Rhea Jain\\\\OneDrive\\\\Desktop\\\\Clone\\\\notes-app\\\\components\\\\NotesList.jsx\",\n                lineNumber: 54,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full grid grid-cols-1 md:grid-cols-3 gap-y-[50px] gap-x-8 p-12 \",\n                children: notes.map(function(param) {\n                    var id = param.id, title = param.title, text = param.text;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Note__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            id: id,\n                            title: title,\n                            text: text,\n                            notes: notes,\n                            setNotes: setNotes\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Rhea Jain\\\\OneDrive\\\\Desktop\\\\Clone\\\\notes-app\\\\components\\\\NotesList.jsx\",\n                            lineNumber: 79,\n                            columnNumber: 17\n                        }, _this)\n                    }, id, false, {\n                        fileName: \"C:\\\\Users\\\\Rhea Jain\\\\OneDrive\\\\Desktop\\\\Clone\\\\notes-app\\\\components\\\\NotesList.jsx\",\n                        lineNumber: 78,\n                        columnNumber: 15\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Rhea Jain\\\\OneDrive\\\\Desktop\\\\Clone\\\\notes-app\\\\components\\\\NotesList.jsx\",\n                lineNumber: 75,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Rhea Jain\\\\OneDrive\\\\Desktop\\\\Clone\\\\notes-app\\\\components\\\\NotesList.jsx\",\n        lineNumber: 49,\n        columnNumber: 7\n    }, _this);\n};\n_s(NotesList, \"G75ip/7/IAKoxR9laxxchPxACxo=\");\n_c = NotesList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NotesList);\nvar _c;\n$RefreshReg$(_c, \"NotesList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05vdGVzTGlzdC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUEwQjtBQUNZO0FBQ007QUFDaEI7QUFDRjtBQUNRO0FBRWxDOztJQVFJLElBQTBCRSxHQUUzQixHQUYyQkE7SUFHNUIsSUFBTVMsV0FBVyxHQUFHLFdBQU07UUFHeEIsSUFBSUMsV0FBVyxLQUFLLEVBQUUsRUFBRTs7UUFFeEIsQ0FBQztRQUNEO1lBQ0UsaURBQVVPLEtBQUssQ0FBQ0MsUUFBUSxDQUFDUixXQUFXLENBQUMsSUFBSU0sS0FBSyxDQUFDRztpQkFHN0MsT0FBTyxLQUFLLENBQUM7UUFDakIsQ0FBQyxDQUFDO1FBQ0ZYLFFBQVEsQ0FBQ00sSUFBSSxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUVEYixTQUFTLENBQUMsV0FBTTtRQUNoQk8sUUFBUSxDQUFDWSxZQUFZLENBQUNDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNILFlBQVksQ0FBQ0MsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ3hGLENBQUMsRUFBRSxFQUFFLENBQUU7SUFDTCxJQUFzQ3JCO0lBQ3RDLElBQU15QixPQUFPLEdBQUc7O29EQUVaQyxHQUFRLENBQUNDLE9BQU8sQ0FBQztZQUNiQyxFQUFFLEVBQUUxQixNQUFNLEVBQUU7O1lBRVplLEdBQUFBLCtDQUFPLFNBQWE7U0FDdkIsQ0FBQztRQUNKVCxRQUFRLENBQUNrQixNQUFBQSxvRkFBVTtRQUNuQk4sWUFBWSxDQUFDUztJQUNmLENBQUM7SUFDRCxxQkFDRTtRQUFLRyxTQUFTLEVBQUM7OzBCQUNiO2dCQUFJQSxTQUFTLEVBQUM7Ozs7OztxQkFFVDswQkFFTCxRQUFDRDtnQkFBSUMsU0FBUyxFQUFDOzs7d0JBRVhBOzt5RkFDZVAsT0FBTzt5QkFBRTs7Ozs7NkJBQ3hCOzt3QkFDVU8sU0FBUyxFQUFDO3dCQUFnQkcsV0FBVyxFQUFDLFNBQVM7Ozs7OzZCQUFHO2tDQUM5RCxRQUFDQzt3QkFDQ0MsSUFBSSxFQUFDLFFBQVE7d0JBQ2JMLFNBQVMsRUFBQywwRUFBMEU7d0JBQ3BGRyxXQUFXLEVBQUM7d0JBQ1pHLFFBQVEsRUFBRTs7eUJBQXFDOzs7Ozs2QkFDL0M7O3dCQUNNSixPQUFPLEVBQUV6Qjt3QkFBYXVCLFNBQVMsRUFBQyxFQUFFO2tDQUN4Qzs0QkFDRVksR0FBRyxFQUFDOzRCQUNKQzs0QkFDQWIsTUFBQUEsNkRBQVU7Ozs7O2lDQUNWOzs7Ozs2QkFDSzs7Ozs7O3FCQUNMOztnQkFFREEsU0FBUyxFQUFDOzBCQUNaekIsS0FBSyxDQUFDdUMsR0FBRyxDQUFDLGdCQUF5Qjt3QkFBdEJsQixFQUFFO29CQUNkOzt1RkFHVUEsQ0FBRTs0QkFDTlgsS0FBSyxFQUFFQSxLQUFLOzRCQUNaRSxJQUFJLEVBQUVBLElBQUk7NEJBQ1ZaLEtBQUssRUFBRUEsS0FBSzs0QkFDWkMsUUFBUSxFQUFFQSxHQUFBQSw2REFBUTs7Ozs7aUNBQ2xCO3VCQVBNb0IsRUFBRTs7Ozs2QkFRTixDQUNOO2dCQUNKLENBQUMsQ0FBQzs7Ozs7cUJBQ0U7Ozs7OzthQUNGLENBQ047QUFDTixDQUFDO0dBN0VLdkIsU0FBUztBQUFUQSxLQUFBQSxTQUFTO0FBK0VmLGVBQWVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTm90ZXNMaXN0LmpzeD9jOThlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNlYXJjaEljb24gZnJvbSBcIi4vU2VhcmNoSWNvblwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB1bmlxaWQgZnJvbSBcInVuaXFpZFwiO1xyXG5pbXBvcnQgTm90ZSBmcm9tIFwiLi9Ob3RlXCI7XHJcbmltcG9ydCBQbHVzSWNvbiBmcm9tIFwiLi9QbHVzSWNvblwiO1xyXG5cclxuLyogICBuZXcgQXJyYXkoNTApLmZpbGwoMCkubWFwKChlbCwgaW5kZXgpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGlkOiB1bmlxaWQoKSxcclxuICAgICAgdGl0bGU6IGBOb3RlIC0gJHsoaW5kZXggKz0gMSl9YCxcclxuICAgICAgdGV4dDogXCJyYW5kb20gdGV4dCB3cml0aW5nIGZvciB0ZXh0XCIsXHJcbiAgICB9O1xyXG4gIH0pOyAqL1xyXG5jb25zdCBOb3Rlc0xpc3QgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtub3Rlcywgc2V0Tm90ZXNdID0gdXNlU3RhdGUoXHJcbiAgICAgIFtdXHJcbiAgKTtcclxuICBjb25zdCBzaG93UmVzdWx0cyA9ICgpID0+IHtcclxuICBcclxuXHJcbiAgICBpZiAoc2VhcmNoUXVlcnkgPT09ICcnKSB7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIH0gXHJcbiAgICBsZXQgZGF0YSA9IG5vdGVzLmZpbHRlcihub3RlMSA9PiB7XHJcbiAgICAgIGlmIChub3RlMS50aXRsZS5pbmNsdWRlcyhzZWFyY2hRdWVyeSkgfHwgbm90ZTEudGV4dC5pbmNsdWRlcyhzZWFyY2hRdWVyeSkpXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KVxyXG4gICAgc2V0Tm90ZXMoZGF0YSk7XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4geyBcclxuICBzZXROb3Rlcyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm5vdGVzXCIpID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm5vdGVzXCIpKSA6IFtdKVxyXG4gIH0sIFtdIClcclxuICAgIGNvbnN0IFtzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnldID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgYWRkTm90ZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBuZXdOb3RlcyA9IFsuLi5ub3Rlc107XHJcbiAgICAgICAgbmV3Tm90ZXMudW5zaGlmdCh7XHJcbiAgICAgICAgICAgIGlkOiB1bmlxaWQoKSxcclxuICAgICAgICAgICAgdGV4dDogJ0FkZCBub3RlcycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnQWRkIGEgdGl0bGUnLFxyXG4gICAgICAgIH0pXHJcbiAgICAgIHNldE5vdGVzKG5ld05vdGVzKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ25vdGVzJywgSlNPTi5zdHJpbmdpZnkobmV3Tm90ZXMpKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1pbi1oLXNjcmVlblwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtOTAwIGZvbnQtbWVkaXVtIHRleHQtNXhsIHRyYWNraW5nLXdpZGUgdGV4dC1jZW50ZXIgbWItNFwiPlxyXG4gICAgICAgICAgUG9zdCBOb3Rlc1xyXG4gICAgICAgIDwvaDE+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyByZWxhdGl2ZSByb3VuZGVkLXNtIHRleHQtYmx1ZS05MDAgZm9udC1zZW1pYm9sZCBpdGVtcy1jZW50ZXIgYm9yZGVyLTIgYm9yZGVyLWJsdWUtOTAwIG14LWF1dG8gdy1mdWxsIHNtOnctWzUwJV0gaC1bNDBweF0gYmFja2Ryb3AtYmx1ci1bOHB4XSBiYWNrZHJvcC1zYXR1cmF0ZS0xMDBcIj5cclxuICAgICAgICAgIDxQbHVzSWNvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LVszNXB4XSByaWdodC0wIHRyYW5zbGF0ZS14LVsxNTAlXSBiYWNrZHJvcC1ibHVyLVs4cHhdIGVhc2UtaW4gYmFja2Ryb3Atc2F0dXJhdGUtMTAgaG92ZXI6c2NhbGUtMTUwIHRyYW5zaXRpb24tYWxsIGhvdmVyOmN1cnNvci1wb2ludGVyIGFic29sdXRlIHRleHQtYmx1ZS05MDAgLW10LVsxOHB4XVwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFkZE5vdGUoKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8U2VhcmNoSWNvbiBjbGFzc05hbWU9XCJ3LTYgaC02IG1sLTIgXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggXCIgLz5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiU2VhcmNoXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctdHJhbnNwYXJlbnQgb3V0bGluZS1ub25lIGZsZXggZmxleC1ncm93IGluZGVudC0yIHBsYWNlaG9sZGVyLWJsdWUtOTAwXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggYnkgYSBrZXl3b3JkXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2hRdWVyeShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzaG93UmVzdWx0c30gY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9XCJiaW5vY3VsYXJzLnBuZ1wiXHJcbiAgICAgICAgICAgICAgYWx0PVwiU2VhcmNoXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwIGJvcmRlci1sLTIgYm9yZGVyLWJsdWUtOTAwIHAtMVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7Lypub3RlcyovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTMgZ2FwLXktWzUwcHhdIGdhcC14LTggcC0xMiBcIj5cclxuICAgICAgICAgIHtub3Rlcy5tYXAoKHsgaWQsIHRpdGxlLCB0ZXh0IH0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8ZGl2IGtleT17aWR9PlxyXG4gICAgICAgICAgICAgICAgPE5vdGVcclxuICAgICAgICAgICAgICAgICAgaWQ9e2lkfVxyXG4gICAgICAgICAgICAgICAgICB0aXRsZT17dGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgIHRleHQ9e3RleHR9XHJcbiAgICAgICAgICAgICAgICAgIG5vdGVzPXtub3Rlc31cclxuICAgICAgICAgICAgICAgICAgc2V0Tm90ZXM9e3NldE5vdGVzfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vdGVzTGlzdDsiXSwibmFtZXMiOlsiUmVhY3QiLCJTZWFyY2hJY29uIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1bmlxaWQiLCJOb3RlIiwiUGx1c0ljb24iLCJOb3Rlc0xpc3QiLCJwcm9wcyIsIm5vdGVzIiwic2V0Tm90ZXMiLCJzaG93UmVzdWx0cyIsInNlYXJjaFF1ZXJ5Iiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJkYXRhIiwiZmlsdGVyIiwibm90ZTEiLCJ0aXRsZSIsImluY2x1ZGVzIiwidGV4dCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJzZXRTZWFyY2hRdWVyeSIsImFkZE5vdGUiLCJuZXdOb3RlcyIsInVuc2hpZnQiLCJpZCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIm9uQ2xpY2siLCJwbGFjZWhvbGRlciIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiYnV0dG9uIiwiaW1nIiwic3JjIiwiYWx0IiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/NotesList.jsx\n"));

/***/ })

});