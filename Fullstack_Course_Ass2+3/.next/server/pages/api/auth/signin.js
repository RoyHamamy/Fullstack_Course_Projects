"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/signin";
exports.ids = ["pages/api/auth/signin"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "(api)/./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"prisma\": () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n// PrismaClient is attached to the `global` object in development to prevent\n// exhausting your database connection limit.\n//\n// Learn more:\n// https://pris.ly/d/help/next-js-best-practices\nconst globalForPrisma = global;\nconst prisma = globalForPrisma.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalForPrisma.prisma = prisma;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBNkM7QUFFN0MsNEVBQTRFO0FBQzVFLDZDQUE2QztBQUM3QyxFQUFFO0FBQ0YsY0FBYztBQUNkLGdEQUFnRDtBQUVoRCxNQUFNQyxrQkFBa0JDO0FBRWpCLE1BQU1DLFNBQVNGLGdCQUFnQkUsTUFBTSxJQUFJLElBQUlILHdEQUFZQSxHQUFFO0FBRWxFLElBQUlJLElBQXlCLEVBQWNILGdCQUFnQkUsTUFBTSxHQUFHQTtBQUVwRSxpRUFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbGxvLW5leHQvLi9saWIvcHJpc21hLnRzPzk4MjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5cbi8vIFByaXNtYUNsaWVudCBpcyBhdHRhY2hlZCB0byB0aGUgYGdsb2JhbGAgb2JqZWN0IGluIGRldmVsb3BtZW50IHRvIHByZXZlbnRcbi8vIGV4aGF1c3RpbmcgeW91ciBkYXRhYmFzZSBjb25uZWN0aW9uIGxpbWl0LlxuLy9cbi8vIExlYXJuIG1vcmU6XG4vLyBodHRwczovL3ByaXMubHkvZC9oZWxwL25leHQtanMtYmVzdC1wcmFjdGljZXNcblxuY29uc3QgZ2xvYmFsRm9yUHJpc21hID0gZ2xvYmFsIGFzIHVua25vd24gYXMgeyBwcmlzbWE6IFByaXNtYUNsaWVudCB9XG5cbmV4cG9ydCBjb25zdCBwcmlzbWEgPSBnbG9iYWxGb3JQcmlzbWEucHJpc21hIHx8IG5ldyBQcmlzbWFDbGllbnQoKVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA9IHByaXNtYVxuXG5leHBvcnQgZGVmYXVsdCBwcmlzbWFcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJnbG9iYWxGb3JQcmlzbWEiLCJnbG9iYWwiLCJwcmlzbWEiLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/prisma.ts\n");

/***/ }),

/***/ "(api)/./pages/api/auth/signin.tsx":
/*!***********************************!*\
  !*** ./pages/api/auth/signin.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/prisma */ \"(api)/./lib/prisma.ts\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);\n\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nasync function handler(req, res) {\n    const { password , email  } = req.body;\n    const result = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findUnique({\n        where: {\n            email: email\n        }\n    });\n    if (!result) {\n        res.status(404).send({\n            message: \"error: given email is not registered.\"\n        });\n        return null;\n    }\n    bcrypt__WEBPACK_IMPORTED_MODULE_1___default().compare(password, result.password || \"\", (err, ans)=>{\n        if (ans) {\n            // Passwords match\n            const userForToken = {\n                email: result.email,\n                id: result.id,\n                name: result.name\n            };\n            const token = jwt.sign(userForToken, process.env.SECRET, {\n                expiresIn: 60 * 60 * 8\n            });\n            let userToken = {\n                token,\n                email: result.email,\n                name: result.name,\n                id: result.id,\n                image: result.image || null\n            };\n            res.setHeader(\"Set-Cookie\", `myCookie=${encodeURIComponent(JSON.stringify(userToken))}; Max-Age=7200; Path=/;`);\n            res.status(200).send(userToken);\n        } else {\n            // Passwords don't match\n            res.status(400).send({\n                message: \"incorrect credentials\"\n            });\n            return -1;\n        }\n    });\n    return 1;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9zaWduaW4udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBd0M7QUFDeEMsTUFBTUMsTUFBTUMsbUJBQU9BLENBQUMsa0NBQWM7QUFFUDtBQUVaLGVBQWVFLFFBQzVCQyxHQUFtQixFQUNuQkMsR0FBb0IsRUFDcEI7SUFDQSxNQUFNLEVBQUVDLFNBQUFBLEVBQVVDLE1BQUFBLEVBQU8sR0FBR0gsSUFBSUksSUFBSTtJQUNwQyxNQUFNQyxTQUFTLE1BQU1WLG1FQUFzQixDQUFDO1FBQzFDYSxPQUFPO1lBQ0xMLE9BQU9BO1FBQ1Q7SUFDRjtJQUNBLElBQUksQ0FBQ0UsUUFBUTtRQUNYSixJQUFJUSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLFNBQVM7UUFBd0M7UUFDeEUsT0FBTyxJQUFJO0lBQ2I7SUFDQWIscURBQWMsQ0FBQ0ksVUFBVUcsT0FBT0gsUUFBUSxJQUFJLElBQUksQ0FBQ1csS0FBS0MsTUFBUTtRQUM1RCxJQUFJQSxLQUFLO1lBQ1A7WUFDQSxNQUFNQyxlQUFlO2dCQUNuQlosT0FBT0UsT0FBT0YsS0FBSztnQkFDbkJhLElBQUlYLE9BQU9XLEVBQUU7Z0JBQ2JDLE1BQU1aLE9BQU9ZLElBQUFBO1lBQ2Y7WUFDQSxNQUFNQyxRQUFRdEIsSUFBSXVCLElBQUksQ0FBQ0osY0FBY0ssUUFBUUMsR0FBRyxDQUFDQyxNQUFNLEVBQUU7Z0JBQ3ZEQyxXQUFXLEtBQUssS0FBSztZQUN2QjtZQUNBLElBQUlDLFlBQVk7Z0JBQ2ROO2dCQUNBZixPQUFPRSxPQUFPRixLQUFLO2dCQUNuQmMsTUFBTVosT0FBT1ksSUFBSTtnQkFDakJELElBQUlYLE9BQU9XLEVBQUU7Z0JBQ2JTLE9BQU9wQixPQUFPb0IsS0FBSyxJQUFJO1lBQ3pCO1lBQ0F4QixJQUFJeUIsU0FBUyxDQUNYLGNBQ0MsWUFBV0MsbUJBQ1ZDLEtBQUtDLFNBQVMsQ0FBQ0wsWUFDZix3QkFDSjtZQUNBdkIsSUFBSVEsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ2M7UUFDdkIsT0FBTztZQUNMO1lBQ0F2QixJQUFJUSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUNuQkMsU0FBUztZQUNYO1lBQ0EsT0FBTyxDQUFDO1FBQ1Y7SUFDRjtJQUNBLE9BQU87QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbGxvLW5leHQvLi9wYWdlcy9hcGkvYXV0aC9zaWduaW4udHN4Pzc2MDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByaXNtYSBmcm9tIFwiLi4vLi4vLi4vbGliL3ByaXNtYVwiO1xyXG5jb25zdCBqd3QgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpO1xyXG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXHJcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcclxuICByZXM6IE5leHRBcGlSZXNwb25zZVxyXG4pIHtcclxuICBjb25zdCB7IHBhc3N3b3JkLCBlbWFpbCB9ID0gcmVxLmJvZHk7XHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICB3aGVyZToge1xyXG4gICAgICBlbWFpbDogZW1haWwsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGlmICghcmVzdWx0KSB7XHJcbiAgICByZXMuc3RhdHVzKDQwNCkuc2VuZCh7IG1lc3NhZ2U6IFwiZXJyb3I6IGdpdmVuIGVtYWlsIGlzIG5vdCByZWdpc3RlcmVkLlwiIH0pO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG4gIGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLCByZXN1bHQucGFzc3dvcmQgfHwgXCJcIiwgKGVyciwgYW5zKSA9PiB7XHJcbiAgICBpZiAoYW5zKSB7XHJcbiAgICAgIC8vIFBhc3N3b3JkcyBtYXRjaFxyXG4gICAgICBjb25zdCB1c2VyRm9yVG9rZW4gPSB7XHJcbiAgICAgICAgZW1haWw6IHJlc3VsdC5lbWFpbCxcclxuICAgICAgICBpZDogcmVzdWx0LmlkLFxyXG4gICAgICAgIG5hbWU6IHJlc3VsdC5uYW1lLFxyXG4gICAgICB9O1xyXG4gICAgICBjb25zdCB0b2tlbiA9IGp3dC5zaWduKHVzZXJGb3JUb2tlbiwgcHJvY2Vzcy5lbnYuU0VDUkVULCB7XHJcbiAgICAgICAgZXhwaXJlc0luOiA2MCAqIDYwICogOCxcclxuICAgICAgfSk7XHJcbiAgICAgIGxldCB1c2VyVG9rZW4gPSB7XHJcbiAgICAgICAgdG9rZW4sXHJcbiAgICAgICAgZW1haWw6IHJlc3VsdC5lbWFpbCxcclxuICAgICAgICBuYW1lOiByZXN1bHQubmFtZSxcclxuICAgICAgICBpZDogcmVzdWx0LmlkLFxyXG4gICAgICAgIGltYWdlOiByZXN1bHQuaW1hZ2UgfHwgbnVsbCxcclxuICAgICAgfTtcclxuICAgICAgcmVzLnNldEhlYWRlcihcclxuICAgICAgICBcIlNldC1Db29raWVcIixcclxuICAgICAgICBgbXlDb29raWU9JHtlbmNvZGVVUklDb21wb25lbnQoXHJcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeSh1c2VyVG9rZW4pXHJcbiAgICAgICAgKX07IE1heC1BZ2U9NzIwMDsgUGF0aD0vO2BcclxuICAgICAgKTtcclxuICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQodXNlclRva2VuKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIFBhc3N3b3JkcyBkb24ndCBtYXRjaFxyXG4gICAgICByZXMuc3RhdHVzKDQwMCkuc2VuZCh7XHJcbiAgICAgICAgbWVzc2FnZTogXCJpbmNvcnJlY3QgY3JlZGVudGlhbHNcIixcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiAtMTtcclxuICAgIH1cclxuICB9KTtcclxuICByZXR1cm4gMTtcclxufVxyXG4iXSwibmFtZXMiOlsicHJpc21hIiwiand0IiwicmVxdWlyZSIsImJjcnlwdCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJwYXNzd29yZCIsImVtYWlsIiwiYm9keSIsInJlc3VsdCIsInVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJzdGF0dXMiLCJzZW5kIiwibWVzc2FnZSIsImNvbXBhcmUiLCJlcnIiLCJhbnMiLCJ1c2VyRm9yVG9rZW4iLCJpZCIsIm5hbWUiLCJ0b2tlbiIsInNpZ24iLCJwcm9jZXNzIiwiZW52IiwiU0VDUkVUIiwiZXhwaXJlc0luIiwidXNlclRva2VuIiwiaW1hZ2UiLCJzZXRIZWFkZXIiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/signin.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/signin.tsx"));
module.exports = __webpack_exports__;

})();