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
exports.id = "pages/api/post/[id]";
exports.ids = ["pages/api/post/[id]"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "cloudinary":
/*!*****************************!*\
  !*** external "cloudinary" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("cloudinary");

/***/ }),

/***/ "formidable":
/*!*****************************!*\
  !*** external "formidable" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("formidable");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./data/models/metadata.js":
/*!*********************************!*\
  !*** ./data/models/metadata.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst metadata = new mongoose.Schema({\n    user: String,\n    date: String,\n    postId: String,\n    link: String\n});\nmodule.exports = mongoose.models.Metadata || mongoose.model(\"Metadata\", metadata);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYXRhL21vZGVscy9tZXRhZGF0YS5qcy5qcyIsIm1hcHBpbmdzIjoiO0FBQ0EsTUFBTUEsV0FBV0MsbUJBQU9BLENBQUM7QUFFekIsTUFBTUMsV0FBVyxJQUFJRixTQUFTRyxNQUFNLENBQUM7SUFDbkNDLE1BQU1DO0lBQ05DLE1BQU1EO0lBQ05FLFFBQVFGO0lBQ1JHLE1BQU1IO0FBQ1I7QUFFQUksT0FBT0MsT0FBTyxHQUFHVixTQUFTVyxNQUFNLENBQUNDLFFBQVEsSUFBSVosU0FBU2EsS0FBSyxDQUFDLFlBQVlYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVsbG8tbmV4dC8uL2RhdGEvbW9kZWxzL21ldGFkYXRhLmpzPzA1ZDAiXSwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJyk7XG5cbmNvbnN0IG1ldGFkYXRhID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gIHVzZXI6IFN0cmluZyxcbiAgZGF0ZTogU3RyaW5nLFxuICBwb3N0SWQ6IFN0cmluZyxcbiAgbGluazogU3RyaW5nLFxufSlcblxubW9kdWxlLmV4cG9ydHMgPSBtb25nb29zZS5tb2RlbHMuTWV0YWRhdGEgfHwgbW9uZ29vc2UubW9kZWwoXCJNZXRhZGF0YVwiLCBtZXRhZGF0YSk7Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmVxdWlyZSIsIm1ldGFkYXRhIiwiU2NoZW1hIiwidXNlciIsIlN0cmluZyIsImRhdGUiLCJwb3N0SWQiLCJsaW5rIiwibW9kdWxlIiwiZXhwb3J0cyIsIm1vZGVscyIsIk1ldGFkYXRhIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./data/models/metadata.js\n");

/***/ }),

/***/ "(api)/./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"prisma\": () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n// PrismaClient is attached to the `global` object in development to prevent\n// exhausting your database connection limit.\n//\n// Learn more:\n// https://pris.ly/d/help/next-js-best-practices\nconst globalForPrisma = global;\nconst prisma = globalForPrisma.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalForPrisma.prisma = prisma;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBNkM7QUFFN0MsNEVBQTRFO0FBQzVFLDZDQUE2QztBQUM3QyxFQUFFO0FBQ0YsY0FBYztBQUNkLGdEQUFnRDtBQUVoRCxNQUFNQyxrQkFBa0JDO0FBRWpCLE1BQU1DLFNBQVNGLGdCQUFnQkUsTUFBTSxJQUFJLElBQUlILHdEQUFZQSxHQUFFO0FBRWxFLElBQUlJLElBQXlCLEVBQWNILGdCQUFnQkUsTUFBTSxHQUFHQTtBQUVwRSxpRUFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbGxvLW5leHQvLi9saWIvcHJpc21hLnRzPzk4MjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5cbi8vIFByaXNtYUNsaWVudCBpcyBhdHRhY2hlZCB0byB0aGUgYGdsb2JhbGAgb2JqZWN0IGluIGRldmVsb3BtZW50IHRvIHByZXZlbnRcbi8vIGV4aGF1c3RpbmcgeW91ciBkYXRhYmFzZSBjb25uZWN0aW9uIGxpbWl0LlxuLy9cbi8vIExlYXJuIG1vcmU6XG4vLyBodHRwczovL3ByaXMubHkvZC9oZWxwL25leHQtanMtYmVzdC1wcmFjdGljZXNcblxuY29uc3QgZ2xvYmFsRm9yUHJpc21hID0gZ2xvYmFsIGFzIHVua25vd24gYXMgeyBwcmlzbWE6IFByaXNtYUNsaWVudCB9XG5cbmV4cG9ydCBjb25zdCBwcmlzbWEgPSBnbG9iYWxGb3JQcmlzbWEucHJpc21hIHx8IG5ldyBQcmlzbWFDbGllbnQoKVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA9IHByaXNtYVxuXG5leHBvcnQgZGVmYXVsdCBwcmlzbWFcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJnbG9iYWxGb3JQcmlzbWEiLCJnbG9iYWwiLCJwcmlzbWEiLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/prisma.ts\n");

/***/ }),

/***/ "(api)/./pages/api/post/[id].ts":
/*!********************************!*\
  !*** ./pages/api/post/[id].ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/prisma */ \"(api)/./lib/prisma.ts\");\n/* harmony import */ var _data_models_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../data/models/metadata */ \"(api)/./data/models/metadata.js\");\n/* harmony import */ var _data_models_metadata__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_data_models_metadata__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cloudinary */ \"cloudinary\");\n/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cloudinary__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\ncloudinary__WEBPACK_IMPORTED_MODULE_2__.v2.config({\n    cloud_name: \"dmavrozmb\",\n    api_key: \"527255586394151\",\n    api_secret: \"6v9qMbYhqq4NZ01koR__h-OUgWk\"\n});\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\n// DELETE /api/post/:id\nasync function handle(req, res) {\n    const postId = req.query.id;\n    if (req.method === \"DELETE\") {\n        const post = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post[\"delete\"]({\n            where: {\n                id: Number(postId)\n            }\n        });\n        if (post.video) {\n            _data_models_metadata__WEBPACK_IMPORTED_MODULE_1___default().findOneAndDelete({\n                _id: post.video\n            }).then((deletedMetadata)=>{\n                if (deletedMetadata) {\n                    const deletedPostId = deletedMetadata.postId;\n                    console.log(deletedPostId);\n                    cloudinary__WEBPACK_IMPORTED_MODULE_2__.v2.uploader.destroy(deletedPostId).then((cont)=>{\n                        console.log(cont);\n                        console.log(\"Cloudinary file deleted successfully\");\n                    }).catch((error)=>{\n                        console.error(\"Error deleting Cloudinary file:\", error);\n                    });\n                    console.log(\"Metadata deleted successfully\");\n                } else {\n                    console.log(\"Metadata not found\");\n                }\n            }).catch((error)=>{\n                console.error(\"Error deleting Metadata:\", error);\n            });\n        }\n        res.json(post);\n    } else if (req.method === \"PUT\") {\n        const newId = req.query.id;\n        const data = await new Promise((resolve, reject)=>{\n            const form = new formidable__WEBPACK_IMPORTED_MODULE_3__.IncomingForm();\n            form.parse(req, (err, fields, files)=>{\n                if (err) return reject(err);\n                resolve({\n                    fields,\n                    files\n                });\n            });\n        });\n        const file = data.fields.video;\n        const post = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post.update({\n            where: {\n                id: Number(postId)\n            },\n            data: {\n                video: file\n            }\n        });\n        res.json(post);\n    } else {\n        throw new Error(`The HTTP ${req.method} method is not supported at this route.`);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcG9zdC9baWRdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUN3QztBQUNZO0FBQ1A7QUFDSjtBQUV6Q0csaURBQWlCLENBQUM7SUFDaEJHLFlBQVk7SUFDWkMsU0FBUztJQUNUQyxZQUFZO0FBQ2Q7QUFFTyxNQUFNSCxTQUFTO0lBQ3BCSSxLQUFLO1FBQ0hDLFlBQVk7SUFDZDtBQUNGLEVBQUM7QUFFRDtBQUNlLGVBQWVDLE9BQzVCQyxHQUFtQixFQUNuQkMsR0FBb0IsRUFDcEI7SUFDQSxNQUFNQyxTQUFTRixJQUFJRyxLQUFLLENBQUNDLEVBQUU7SUFFM0IsSUFBSUosSUFBSUssTUFBTSxLQUFLLFVBQVU7UUFDM0IsTUFBTUMsT0FBTyxNQUFNbEIsa0VBQWtCLENBQUM7WUFDcENvQixPQUFPO2dCQUFFSixJQUFJSyxPQUFPUDtZQUFRO1FBQzlCO1FBQ0EsSUFBSUksS0FBS0ksS0FBSyxFQUFFO1lBQ2RyQiw2RUFDbUIsQ0FBQztnQkFBRXVCLEtBQUtOLEtBQUtJLEtBQUFBO1lBQU0sR0FDbkNHLElBQUksQ0FBQyxDQUFDQyxrQkFBeUM7Z0JBQzlDLElBQUlBLGlCQUFpQjtvQkFDbkIsTUFBTUMsZ0JBQWdCRCxnQkFBZ0JaLE1BQU07b0JBQzVDYyxRQUFRQyxHQUFHLENBQUNGO29CQUNaeEIsMkRBQ1UsQ0FBQ3dCLGVBQ1JGLElBQUksQ0FBRU8sQ0FBQUEsT0FBUzt3QkFDZEosUUFBUUMsR0FBRyxDQUFDRzt3QkFDWkosUUFBUUMsR0FBRyxDQUFDO29CQUNkLEdBQ0NJLEtBQUssQ0FBQyxDQUFDQyxRQUFlO3dCQUNyQk4sUUFBUU0sS0FBSyxDQUFDLG1DQUFtQ0E7b0JBQ25EO29CQUNGTixRQUFRQyxHQUFHLENBQUM7Z0JBQ2QsT0FBTztvQkFDTEQsUUFBUUMsR0FBRyxDQUFDO2dCQUNkO1lBQ0YsR0FDQ0ksS0FBSyxDQUFDLENBQUNDLFFBQWU7Z0JBQ3JCTixRQUFRTSxLQUFLLENBQUMsNEJBQTRCQTtZQUM1QztRQUNKO1FBQ0FyQixJQUFJc0IsSUFBSSxDQUFDakI7SUFDWCxPQUFPLElBQUlOLElBQUlLLE1BQU0sS0FBSyxPQUFPO1FBQy9CLE1BQU1tQixRQUFheEIsSUFBSUcsS0FBSyxDQUFDQyxFQUFFO1FBQy9CLE1BQU1xQixPQUFZLE1BQU0sSUFBSUMsUUFBUSxDQUFDQyxTQUFTQyxTQUFXO1lBQ3ZELE1BQU1DLE9BQU8sSUFBSXJDLG9EQUFZQTtZQUM3QnFDLEtBQUtDLEtBQUssQ0FBQzlCLEtBQUssQ0FBQytCLEtBQUtDLFFBQVFDLFFBQVU7Z0JBQ3RDLElBQUlGLEtBQUssT0FBT0gsT0FBT0c7Z0JBQ3ZCSixRQUFRO29CQUFFSztvQkFBUUM7Z0JBQU07WUFDMUI7UUFDRjtRQUNBLE1BQU1DLE9BQU9ULEtBQUtPLE1BQU0sQ0FBQ3RCLEtBQUs7UUFDOUIsTUFBTUosT0FBTyxNQUFNbEIsK0RBQWtCLENBQUM7WUFDcENvQixPQUFPO2dCQUFFSixJQUFJSyxPQUFPUDtZQUFRO1lBQzVCdUIsTUFBTTtnQkFBRWYsT0FBT3dCO1lBQUs7UUFDdEI7UUFDQWpDLElBQUlzQixJQUFJLENBQUNqQjtJQUNYLE9BQU87UUFDTCxNQUFNLElBQUk4QixNQUNQLFlBQVdwQyxJQUFJSyxNQUFPLHlDQUN6QixFQUFDO0lBQ0g7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbGxvLW5leHQvLi9wYWdlcy9hcGkvcG9zdC9baWRdLnRzPzIxYWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBwcmlzbWEgZnJvbSBcIi4uLy4uLy4uL2xpYi9wcmlzbWFcIjtcbmltcG9ydCBtZXRhZGF0YSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9tb2RlbHMvbWV0YWRhdGFcIjtcbmltcG9ydCB7IHYyIGFzIGNsb3VkaW5hcnkgfSBmcm9tIFwiY2xvdWRpbmFyeVwiO1xuaW1wb3J0IHsgSW5jb21pbmdGb3JtIH0gZnJvbSBcImZvcm1pZGFibGVcIjtcblxuY2xvdWRpbmFyeS5jb25maWcoe1xuICBjbG91ZF9uYW1lOiBcImRtYXZyb3ptYlwiLFxuICBhcGlfa2V5OiBcIjUyNzI1NTU4NjM5NDE1MVwiLFxuICBhcGlfc2VjcmV0OiBcIjZ2OXFNYllocXE0TlowMWtvUl9faC1PVWdXa1wiLFxufSk7XG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIGFwaToge1xuICAgIGJvZHlQYXJzZXI6IGZhbHNlLFxuICB9LFxufTtcblxuLy8gREVMRVRFIC9hcGkvcG9zdC86aWRcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZShcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2Vcbikge1xuICBjb25zdCBwb3N0SWQgPSByZXEucXVlcnkuaWQ7XG5cbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiREVMRVRFXCIpIHtcbiAgICBjb25zdCBwb3N0ID0gYXdhaXQgcHJpc21hLnBvc3QuZGVsZXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkOiBOdW1iZXIocG9zdElkKSB9LFxuICAgIH0pO1xuICAgIGlmIChwb3N0LnZpZGVvKSB7XG4gICAgICBtZXRhZGF0YVxuICAgICAgICAuZmluZE9uZUFuZERlbGV0ZSh7IF9pZDogcG9zdC52aWRlbyB9KVxuICAgICAgICAudGhlbigoZGVsZXRlZE1ldGFkYXRhOiB7IHBvc3RJZDogYW55IH0pOmFueSA9PiB7XG4gICAgICAgICAgaWYgKGRlbGV0ZWRNZXRhZGF0YSkge1xuICAgICAgICAgICAgY29uc3QgZGVsZXRlZFBvc3RJZCA9IGRlbGV0ZWRNZXRhZGF0YS5wb3N0SWQ7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkZWxldGVkUG9zdElkKTtcbiAgICAgICAgICAgIGNsb3VkaW5hcnkudXBsb2FkZXJcbiAgICAgICAgICAgICAgLmRlc3Ryb3koZGVsZXRlZFBvc3RJZClcbiAgICAgICAgICAgICAgLnRoZW4oKGNvbnQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb250KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNsb3VkaW5hcnkgZmlsZSBkZWxldGVkIHN1Y2Nlc3NmdWxseVwiKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGRlbGV0aW5nIENsb3VkaW5hcnkgZmlsZTpcIiwgZXJyb3IpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTWV0YWRhdGEgZGVsZXRlZCBzdWNjZXNzZnVsbHlcIik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTWV0YWRhdGEgbm90IGZvdW5kXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGRlbGV0aW5nIE1ldGFkYXRhOlwiLCBlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXMuanNvbihwb3N0KTtcbiAgfSBlbHNlIGlmIChyZXEubWV0aG9kID09PSBcIlBVVFwiKSB7XG4gICAgY29uc3QgbmV3SWQ6IGFueSA9IHJlcS5xdWVyeS5pZDtcbiAgICBjb25zdCBkYXRhOiBhbnkgPSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBmb3JtID0gbmV3IEluY29taW5nRm9ybSgpO1xuICAgICAgZm9ybS5wYXJzZShyZXEsIChlcnIsIGZpZWxkcywgZmlsZXMpID0+IHtcbiAgICAgICAgaWYgKGVycikgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgICByZXNvbHZlKHsgZmllbGRzLCBmaWxlcyB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGNvbnN0IGZpbGUgPSBkYXRhLmZpZWxkcy52aWRlbztcbiAgICBjb25zdCBwb3N0ID0gYXdhaXQgcHJpc21hLnBvc3QudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkOiBOdW1iZXIocG9zdElkKSB9LFxuICAgICAgZGF0YTogeyB2aWRlbzogZmlsZSB9LFxuICAgIH0pO1xuICAgIHJlcy5qc29uKHBvc3QpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGBUaGUgSFRUUCAke3JlcS5tZXRob2R9IG1ldGhvZCBpcyBub3Qgc3VwcG9ydGVkIGF0IHRoaXMgcm91dGUuYFxuICAgICk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJtZXRhZGF0YSIsInYyIiwiY2xvdWRpbmFyeSIsIkluY29taW5nRm9ybSIsImNvbmZpZyIsImNsb3VkX25hbWUiLCJhcGlfa2V5IiwiYXBpX3NlY3JldCIsImFwaSIsImJvZHlQYXJzZXIiLCJoYW5kbGUiLCJyZXEiLCJyZXMiLCJwb3N0SWQiLCJxdWVyeSIsImlkIiwibWV0aG9kIiwicG9zdCIsImRlbGV0ZSIsIndoZXJlIiwiTnVtYmVyIiwidmlkZW8iLCJmaW5kT25lQW5kRGVsZXRlIiwiX2lkIiwidGhlbiIsImRlbGV0ZWRNZXRhZGF0YSIsImRlbGV0ZWRQb3N0SWQiLCJjb25zb2xlIiwibG9nIiwidXBsb2FkZXIiLCJkZXN0cm95IiwiY29udCIsImNhdGNoIiwiZXJyb3IiLCJqc29uIiwibmV3SWQiLCJkYXRhIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmb3JtIiwicGFyc2UiLCJlcnIiLCJmaWVsZHMiLCJmaWxlcyIsImZpbGUiLCJ1cGRhdGUiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/post/[id].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/post/[id].ts"));
module.exports = __webpack_exports__;

})();