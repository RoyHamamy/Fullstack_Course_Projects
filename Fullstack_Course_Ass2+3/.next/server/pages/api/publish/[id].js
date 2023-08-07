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
exports.id = "pages/api/publish/[id]";
exports.ids = ["pages/api/publish/[id]"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

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

/***/ "(api)/./pages/api/publish/[id].ts":
/*!***********************************!*\
  !*** ./pages/api/publish/[id].ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/prisma */ \"(api)/./lib/prisma.ts\");\n\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n// PUT /api/publish/:id\nasync function handle(req, res) {\n    const postId = req.query.id;\n    let myCookieValue = req.cookies.myCookie;\n    if (myCookieValue) {\n        let tokenValue = JSON.parse(myCookieValue);\n        tokenValue = tokenValue.token;\n        jwt.verify(tokenValue, process.env.SECRET, (err, decoded)=>{\n            if (err) {\n                // Token verification failed\n                console.error(\"Token verification failed:\", err);\n                return;\n            }\n            // Token is valid\n            // Extract the values from the decoded payload\n            myCookieValue = decoded;\n        });\n    }\n    if (myCookieValue) {\n        const post = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post.update({\n            where: {\n                id: Number(postId)\n            },\n            data: {\n                published: true\n            }\n        });\n        res.json(post);\n    } else {\n        res.status(401).send({\n            message: \"Unauthorized\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHVibGlzaC9baWRdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQ3dDO0FBQ3hDLE1BQU1DLE1BQU1DLG1CQUFPQSxDQUFDLGtDQUFjO0FBRWxDO0FBQ2UsZUFBZUMsT0FBT0MsR0FBbUIsRUFBRUMsR0FBb0IsRUFBRTtJQUM5RSxNQUFNQyxTQUFTRixJQUFJRyxLQUFLLENBQUNDLEVBQUU7SUFDM0IsSUFBSUMsZ0JBQWdCTCxJQUFJTSxPQUFPLENBQUNDLFFBQVE7SUFFeEMsSUFBR0YsZUFBYztRQUNmLElBQUlHLGFBQWFDLEtBQUtDLEtBQUssQ0FBQ0w7UUFDNUJHLGFBQWFBLFdBQVdHLEtBQUs7UUFDN0JkLElBQUllLE1BQU0sQ0FBQ0osWUFBWUssUUFBUUMsR0FBRyxDQUFDQyxNQUFNLEVBQUUsQ0FBQ0MsS0FBU0MsVUFBZ0I7WUFDbkUsSUFBSUQsS0FBSztnQkFDUDtnQkFDQUUsUUFBUUMsS0FBSyxDQUFDLDhCQUE4Qkg7Z0JBQzVDO1lBQ0Y7WUFDQTtZQUNBO1lBQ0FYLGdCQUFnQlk7UUFDbEI7SUFDRjtJQUVBLElBQUlaLGVBQWU7UUFDakIsTUFBTWUsT0FBTyxNQUFNeEIsK0RBQWtCLENBQUM7WUFDcEMwQixPQUFPO2dCQUFFbEIsSUFBSW1CLE9BQU9yQjtZQUFRO1lBQzVCc0IsTUFBTTtnQkFBRUMsV0FBVztZQUFLO1FBQzFCO1FBQ0F4QixJQUFJeUIsSUFBSSxDQUFDTjtJQUNYLE9BQU87UUFDTG5CLElBQUkwQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLFNBQVM7UUFBZTtJQUNqRDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVsbG8tbmV4dC8uL3BhZ2VzL2FwaS9wdWJsaXNoL1tpZF0udHM/ZWRhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IHByaXNtYSBmcm9tICcuLi8uLi8uLi9saWIvcHJpc21hJ1xuY29uc3Qgand0ID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTtcblxuLy8gUFVUIC9hcGkvcHVibGlzaC86aWRcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZShyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xuICBjb25zdCBwb3N0SWQgPSByZXEucXVlcnkuaWQ7XG4gIGxldCBteUNvb2tpZVZhbHVlID0gcmVxLmNvb2tpZXMubXlDb29raWU7XG5cbiAgaWYobXlDb29raWVWYWx1ZSl7XG4gICAgbGV0IHRva2VuVmFsdWUgPSBKU09OLnBhcnNlKG15Q29va2llVmFsdWUpO1xuICAgIHRva2VuVmFsdWUgPSB0b2tlblZhbHVlLnRva2VuOyBcbiAgICBqd3QudmVyaWZ5KHRva2VuVmFsdWUsIHByb2Nlc3MuZW52LlNFQ1JFVCwgKGVycjphbnksIGRlY29kZWQ6YW55KSA9PiB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIC8vIFRva2VuIHZlcmlmaWNhdGlvbiBmYWlsZWRcbiAgICAgICAgY29uc29sZS5lcnJvcignVG9rZW4gdmVyaWZpY2F0aW9uIGZhaWxlZDonLCBlcnIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBUb2tlbiBpcyB2YWxpZFxuICAgICAgLy8gRXh0cmFjdCB0aGUgdmFsdWVzIGZyb20gdGhlIGRlY29kZWQgcGF5bG9hZFxuICAgICAgbXlDb29raWVWYWx1ZSA9IGRlY29kZWQ7ICAgICBcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChteUNvb2tpZVZhbHVlKSB7XG4gICAgY29uc3QgcG9zdCA9IGF3YWl0IHByaXNtYS5wb3N0LnVwZGF0ZSh7XG4gICAgICB3aGVyZTogeyBpZDogTnVtYmVyKHBvc3RJZCkgfSxcbiAgICAgIGRhdGE6IHsgcHVibGlzaGVkOiB0cnVlIH0sXG4gICAgfSk7XG4gICAgcmVzLmpzb24ocG9zdCk7XG4gIH0gZWxzZSB7XG4gICAgcmVzLnN0YXR1cyg0MDEpLnNlbmQoeyBtZXNzYWdlOiAnVW5hdXRob3JpemVkJyB9KVxuICB9XG59XG4iXSwibmFtZXMiOlsicHJpc21hIiwiand0IiwicmVxdWlyZSIsImhhbmRsZSIsInJlcSIsInJlcyIsInBvc3RJZCIsInF1ZXJ5IiwiaWQiLCJteUNvb2tpZVZhbHVlIiwiY29va2llcyIsIm15Q29va2llIiwidG9rZW5WYWx1ZSIsIkpTT04iLCJwYXJzZSIsInRva2VuIiwidmVyaWZ5IiwicHJvY2VzcyIsImVudiIsIlNFQ1JFVCIsImVyciIsImRlY29kZWQiLCJjb25zb2xlIiwiZXJyb3IiLCJwb3N0IiwidXBkYXRlIiwid2hlcmUiLCJOdW1iZXIiLCJkYXRhIiwicHVibGlzaGVkIiwianNvbiIsInN0YXR1cyIsInNlbmQiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/publish/[id].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/publish/[id].ts"));
module.exports = __webpack_exports__;

})();