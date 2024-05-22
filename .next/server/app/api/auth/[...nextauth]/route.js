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
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CUsers%5Cmauri%5COneDrive%5CDesktop%5Cthingstosave%5CProgramming%5Cfirst-project%5Cadmin-dashboard%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmauri%5COneDrive%5CDesktop%5Cthingstosave%5CProgramming%5Cfirst-project%5Cadmin-dashboard&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CUsers%5Cmauri%5COneDrive%5CDesktop%5Cthingstosave%5CProgramming%5Cfirst-project%5Cadmin-dashboard%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmauri%5COneDrive%5CDesktop%5Cthingstosave%5CProgramming%5Cfirst-project%5Cadmin-dashboard&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_mauri_OneDrive_Desktop_thingstosave_Programming_first_project_admin_dashboard_src_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/[...nextauth]/route.js */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\mauri\\\\OneDrive\\\\Desktop\\\\thingstosave\\\\Programming\\\\first-project\\\\admin-dashboard\\\\src\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_mauri_OneDrive_Desktop_thingstosave_Programming_first_project_admin_dashboard_src_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNtYXVyaSU1Q09uZURyaXZlJTVDRGVza3RvcCU1Q3RoaW5nc3Rvc2F2ZSU1Q1Byb2dyYW1taW5nJTVDZmlyc3QtcHJvamVjdCU1Q2FkbWluLWRhc2hib2FyZCU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDbWF1cmklNUNPbmVEcml2ZSU1Q0Rlc2t0b3AlNUN0aGluZ3N0b3NhdmUlNUNQcm9ncmFtbWluZyU1Q2ZpcnN0LXByb2plY3QlNUNhZG1pbi1kYXNoYm9hcmQmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQzRGO0FBQ3pLO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWRtaW4tZGFzaGJvYXJkLz8xMTdiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXG1hdXJpXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcdGhpbmdzdG9zYXZlXFxcXFByb2dyYW1taW5nXFxcXGZpcnN0LXByb2plY3RcXFxcYWRtaW4tZGFzaGJvYXJkXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcWy4uLm5leHRhdXRoXVxcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxtYXVyaVxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXHRoaW5nc3Rvc2F2ZVxcXFxQcm9ncmFtbWluZ1xcXFxmaXJzdC1wcm9qZWN0XFxcXGFkbWluLWRhc2hib2FyZFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXFsuLi5uZXh0YXV0aF1cXFxccm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CUsers%5Cmauri%5COneDrive%5CDesktop%5Cthingstosave%5CProgramming%5Cfirst-project%5Cadmin-dashboard%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmauri%5COneDrive%5CDesktop%5Cthingstosave%5CProgramming%5Cfirst-project%5Cadmin-dashboard&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.js":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* reexport safe */ _lib_auth__WEBPACK_IMPORTED_MODULE_0__.GET),\n/* harmony export */   POST: () => (/* reexport safe */ _lib_auth__WEBPACK_IMPORTED_MODULE_0__.POST)\n/* harmony export */ });\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/auth */ \"(rsc)/./src/lib/auth.js\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWRtaW4tZGFzaGJvYXJkLy4vc3JjL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLmpzPzIzMmQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHtHRVQsIFBPU1R9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9hdXRoJyJdLCJuYW1lcyI6WyJHRVQiLCJQT1NUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.js\n");

/***/ }),

/***/ "(rsc)/./src/lib/auth.js":
/*!*************************!*\
  !*** ./src/lib/auth.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   signIn: () => (/* binding */ signIn),\n/* harmony export */   signOut: () => (/* binding */ signOut)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/github */ \"(rsc)/./node_modules/next-auth/providers/github.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"(rsc)/./src/lib/utils.js\");\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models */ \"(rsc)/./src/lib/models.js\");\n\n\n\n\nconst { handlers: { GET, POST }, auth, signIn, signOut } = (0,next_auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    providers: [\n        (0,next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            clientId: process.env.GITHUB_ID,\n            clientSecret: process.env.GITHUB_SECRET\n        })\n    ],\n    callbacks: {\n        async signIn ({ user, account, profile }) {\n            console.log(user, account, profile);\n            if (account.provider === \"github\") {\n                (0,_utils__WEBPACK_IMPORTED_MODULE_2__.connectToDb)();\n                try {\n                    const user = await _models__WEBPACK_IMPORTED_MODULE_3__.User.findOne({\n                        email: profile.email\n                    });\n                    if (!user) {\n                        const newUser = new _models__WEBPACK_IMPORTED_MODULE_3__.User({\n                            username: profile.login,\n                            email: profile.email,\n                            image: profile.avatar_url\n                        });\n                        await newUser.save();\n                    }\n                } catch (err) {\n                    console.log(err);\n                    return false;\n                }\n            }\n            return true;\n        }\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2F1dGguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ2U7QUFDVDtBQUNOO0FBQ3pCLE1BQU0sRUFBRUksVUFBUyxFQUFDQyxHQUFHLEVBQUVDLElBQUksRUFBQyxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsT0FBTyxFQUFDLEdBQUdULHFEQUFRQSxDQUFDO0lBQy9EVSxXQUFXO1FBQUVULHNFQUFNQSxDQUFDO1lBQUNVLFVBQVNDLFFBQVFDLEdBQUcsQ0FBQ0MsU0FBUztZQUNuREMsY0FBYUgsUUFBUUMsR0FBRyxDQUFDRyxhQUFhO1FBQ3RDO0tBQ0g7SUFDREMsV0FBVTtRQUNOLE1BQU1ULFFBQU8sRUFBQ1UsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBQztZQUNqQ0MsUUFBUUMsR0FBRyxDQUFDSixNQUFNQyxTQUFTQztZQUMzQixJQUFHRCxRQUFRSSxRQUFRLEtBQUssVUFBUztnQkFDN0JyQixtREFBV0E7Z0JBQ1gsSUFBSTtvQkFDQSxNQUFNZ0IsT0FBTyxNQUFNZix5Q0FBSUEsQ0FBQ3FCLE9BQU8sQ0FBQzt3QkFBQ0MsT0FBT0wsUUFBUUssS0FBSztvQkFBQTtvQkFFckQsSUFBRyxDQUFDUCxNQUFLO3dCQUNMLE1BQU1RLFVBQVUsSUFBSXZCLHlDQUFJQSxDQUFDOzRCQUNyQndCLFVBQVVQLFFBQVFRLEtBQUs7NEJBQ3ZCSCxPQUFPTCxRQUFRSyxLQUFLOzRCQUNwQkksT0FBT1QsUUFBUVUsVUFBVTt3QkFDN0I7d0JBQ0EsTUFBTUosUUFBUUssSUFBSTtvQkFDdEI7Z0JBQ0osRUFBRSxPQUFPQyxLQUFLO29CQUNWWCxRQUFRQyxHQUFHLENBQUNVO29CQUNaLE9BQU87Z0JBQ1g7WUFDSjtZQUNBLE9BQU87UUFDWDtJQUVKO0FBQ0osR0FBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2FkbWluLWRhc2hib2FyZC8uL3NyYy9saWIvYXV0aC5qcz84N2JkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCJcclxuaW1wb3J0IEdpdEh1YiBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9naXRodWJcIlxyXG5pbXBvcnQgeyBjb25uZWN0VG9EYiB9IGZyb20gXCIuL3V0aWxzXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi9tb2RlbHNcIjtcclxuZXhwb3J0IGNvbnN0IHsgaGFuZGxlcnM6e0dFVCwgUE9TVH0sIGF1dGgsIHNpZ25Jbiwgc2lnbk91dH0gPSBOZXh0QXV0aCh7IFxyXG4gICAgICAgIHByb3ZpZGVyczogWyBHaXRIdWIoe2NsaWVudElkOnByb2Nlc3MuZW52LkdJVEhVQl9JRCxcclxuICAgICAgICBjbGllbnRTZWNyZXQ6cHJvY2Vzcy5lbnYuR0lUSFVCX1NFQ1JFVCxcclxuICAgICAgICB9KSxcclxuICAgIF0sXHJcbiAgICBjYWxsYmFja3M6e1xyXG4gICAgICAgIGFzeW5jIHNpZ25Jbih7dXNlciwgYWNjb3VudCwgcHJvZmlsZX0pe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyLCBhY2NvdW50LCBwcm9maWxlKTtcclxuICAgICAgICAgICAgaWYoYWNjb3VudC5wcm92aWRlciA9PT0gJ2dpdGh1Yicpe1xyXG4gICAgICAgICAgICAgICAgY29ubmVjdFRvRGIoKTtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7ZW1haWw6IHByb2ZpbGUuZW1haWx9KVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmKCF1c2VyKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3VXNlciA9IG5ldyBVc2VyKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiBwcm9maWxlLmxvZ2luLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IHByb2ZpbGUuZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZTogcHJvZmlsZS5hdmF0YXJfdXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgbmV3VXNlci5zYXZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufSlcclxuXHJcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkdpdEh1YiIsImNvbm5lY3RUb0RiIiwiVXNlciIsImhhbmRsZXJzIiwiR0VUIiwiUE9TVCIsImF1dGgiLCJzaWduSW4iLCJzaWduT3V0IiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR0lUSFVCX0lEIiwiY2xpZW50U2VjcmV0IiwiR0lUSFVCX1NFQ1JFVCIsImNhbGxiYWNrcyIsInVzZXIiLCJhY2NvdW50IiwicHJvZmlsZSIsImNvbnNvbGUiLCJsb2ciLCJwcm92aWRlciIsImZpbmRPbmUiLCJlbWFpbCIsIm5ld1VzZXIiLCJ1c2VybmFtZSIsImxvZ2luIiwiaW1hZ2UiLCJhdmF0YXJfdXJsIiwic2F2ZSIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/auth.js\n");

/***/ }),

/***/ "(rsc)/./src/lib/models.js":
/*!***************************!*\
  !*** ./src/lib/models.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Post: () => (/* binding */ Post),\n/* harmony export */   User: () => (/* binding */ User)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    username: {\n        type: String,\n        required: true,\n        unique: true,\n        min: 3,\n        max: 20\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true,\n        max: 50\n    },\n    password: {\n        type: String\n    },\n    img: {\n        type: String\n    },\n    isAdmin: {\n        type: Boolean,\n        default: false\n    }\n}, {\n    timestamps: true\n});\nconst postSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    title: {\n        type: String,\n        required: true\n    },\n    desc: {\n        type: String,\n        required: true\n    },\n    img: {\n        type: String\n    },\n    userId: {\n        type: String,\n        required: true\n    },\n    slug: {\n        type: String,\n        unique: true,\n        required: true\n    }\n}, {\n    timestamps: true\n});\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models)?.User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", userSchema);\nconst Post = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models)?.Post || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Post\", postSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL21vZGVscy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQStCO0FBRS9CLE1BQU1DLGFBQWEsSUFBSUQsd0RBQWUsQ0FDbEM7SUFDSUcsVUFBVTtRQUNOQyxNQUFNQztRQUNOQyxVQUFVO1FBQ1ZDLFFBQVE7UUFDUkMsS0FBSztRQUNMQyxLQUFLO0lBQ1Q7SUFDQUMsT0FBTztRQUNITixNQUFNQztRQUNOQyxVQUFVO1FBQ1ZDLFFBQVE7UUFDUkUsS0FBSztJQUNUO0lBQ0FFLFVBQVU7UUFDTlAsTUFBTUM7SUFFVjtJQUNBTyxLQUFLO1FBQ0RSLE1BQU1DO0lBQ1Y7SUFDQVEsU0FBUztRQUNMVCxNQUFNVTtRQUNOQyxTQUFTO0lBQ2I7QUFDSixHQUNBO0lBQUNDLFlBQVk7QUFBSTtBQUlyQixNQUFNQyxhQUFhLElBQUlqQix3REFBZSxDQUNsQztJQUNJa0IsT0FBTztRQUNIZCxNQUFNQztRQUNOQyxVQUFVO0lBQ2Q7SUFDQWEsTUFBTTtRQUNGZixNQUFNQztRQUNOQyxVQUFVO0lBQ2Q7SUFDQU0sS0FBSztRQUNEUixNQUFNQztJQUNWO0lBQ0FlLFFBQVE7UUFDSmhCLE1BQU1DO1FBQ05DLFVBQVU7SUFDZDtJQUNBZSxNQUFLO1FBQ0RqQixNQUFNQztRQUNORSxRQUFRO1FBQ1JELFVBQVU7SUFDZDtBQUNKLEdBQ0E7SUFBQ1UsWUFBWTtBQUFJO0FBSWQsTUFBTU0sT0FBT3RCLHdEQUFlLEVBQUVzQixRQUFRdEIscURBQWMsQ0FBQyxRQUFRQyxZQUFZO0FBQ3pFLE1BQU13QixPQUFPekIsd0RBQWUsRUFBRXlCLFFBQVF6QixxREFBYyxDQUFDLFFBQVFpQixZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWRtaW4tZGFzaGJvYXJkLy4vc3JjL2xpYi9tb2RlbHMuanM/YzM2MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCJcclxuXHJcbmNvbnN0IHVzZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKFxyXG4gICAge1xyXG4gICAgICAgIHVzZXJuYW1lOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIHVuaXF1ZTogdHJ1ZSxcclxuICAgICAgICAgICAgbWluOiAzLFxyXG4gICAgICAgICAgICBtYXg6IDIwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW1haWw6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgdW5pcXVlOiB0cnVlLFxyXG4gICAgICAgICAgICBtYXg6IDUwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGFzc3dvcmQ6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW1nOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGlzQWRtaW46IHtcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsIFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge3RpbWVzdGFtcHM6IHRydWV9XHJcbik7XHJcblxyXG5cclxuY29uc3QgcG9zdFNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRlc2M6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGltZzoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB1c2VySWQ6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSwgXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzbHVnOntcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICB1bmlxdWU6IHRydWUsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7dGltZXN0YW1wczogdHJ1ZX1cclxuKVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyID0gbW9uZ29vc2UubW9kZWxzPy5Vc2VyIHx8IG1vbmdvb3NlLm1vZGVsKCdVc2VyJywgdXNlclNjaGVtYSk7XHJcbmV4cG9ydCBjb25zdCBQb3N0ID0gbW9uZ29vc2UubW9kZWxzPy5Qb3N0IHx8IG1vbmdvb3NlLm1vZGVsKCdQb3N0JywgcG9zdFNjaGVtYSk7Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwidXNlclNjaGVtYSIsIlNjaGVtYSIsInVzZXJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwidW5pcXVlIiwibWluIiwibWF4IiwiZW1haWwiLCJwYXNzd29yZCIsImltZyIsImlzQWRtaW4iLCJCb29sZWFuIiwiZGVmYXVsdCIsInRpbWVzdGFtcHMiLCJwb3N0U2NoZW1hIiwidGl0bGUiLCJkZXNjIiwidXNlcklkIiwic2x1ZyIsIlVzZXIiLCJtb2RlbHMiLCJtb2RlbCIsIlBvc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/models.js\n");

/***/ }),

/***/ "(rsc)/./src/lib/utils.js":
/*!**************************!*\
  !*** ./src/lib/utils.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectToDb: () => (/* binding */ connectToDb)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connection = {};\nconst connectToDb = async ()=>{\n    try {\n        if (connection.isConnected) {\n            console.log(\"Using existing connection\");\n            return;\n        }\n        if (!process.env.MONGO) {\n            throw new Error(\"MONGO environment variable is not defined\");\n        }\n        const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO);\n        connection.isConnected = db.connections[0].readyState;\n    } catch (error) {\n        console.error(\"Error connecting to the database:\", error);\n        throw new Error(`Could not connect to the database: ${error.message}`);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL3V0aWxzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxhQUFhLENBQUM7QUFFYixNQUFNQyxjQUFjO0lBQ3ZCLElBQUk7UUFDQSxJQUFHRCxXQUFXRSxXQUFXLEVBQUM7WUFDdEJDLFFBQVFDLEdBQUcsQ0FBQztZQUNaO1FBQ0o7UUFDQSxJQUFJLENBQUNDLFFBQVFDLEdBQUcsQ0FBQ0MsS0FBSyxFQUFFO1lBQ3BCLE1BQU0sSUFBSUMsTUFBTTtRQUNwQjtRQUVBLE1BQU1DLEtBQUssTUFBTVYsdURBQWdCLENBQUNNLFFBQVFDLEdBQUcsQ0FBQ0MsS0FBSztRQUNuRFAsV0FBV0UsV0FBVyxHQUFHTyxHQUFHRSxXQUFXLENBQUMsRUFBRSxDQUFDQyxVQUFVO0lBQ3ZELEVBQUUsT0FBT0MsT0FBTztRQUNkVixRQUFRVSxLQUFLLENBQUMscUNBQXFDQTtRQUNuRCxNQUFNLElBQUlMLE1BQU0sQ0FBQyxtQ0FBbUMsRUFBRUssTUFBTUMsT0FBTyxDQUFDLENBQUM7SUFDdkU7QUFDTixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWRtaW4tZGFzaGJvYXJkLy4vc3JjL2xpYi91dGlscy5qcz82NWJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmNvbnN0IGNvbm5lY3Rpb24gPSB7fTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb25uZWN0VG9EYiA9IGFzeW5jICgpPT57XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGlmKGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVzaW5nIGV4aXN0aW5nIGNvbm5lY3Rpb25cIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFwcm9jZXNzLmVudi5NT05HTykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNT05HTyBlbnZpcm9ubWVudCB2YXJpYWJsZSBpcyBub3QgZGVmaW5lZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZGIgPSBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPKTtcclxuICAgICAgICBjb25uZWN0aW9uLmlzQ29ubmVjdGVkID0gZGIuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY29ubmVjdGluZyB0byB0aGUgZGF0YWJhc2U6XCIsIGVycm9yKTtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENvdWxkIG5vdCBjb25uZWN0IHRvIHRoZSBkYXRhYmFzZTogJHtlcnJvci5tZXNzYWdlfWApO1xyXG4gICAgICB9XHJcbn07Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdGlvbiIsImNvbm5lY3RUb0RiIiwiaXNDb25uZWN0ZWQiLCJjb25zb2xlIiwibG9nIiwicHJvY2VzcyIsImVudiIsIk1PTkdPIiwiRXJyb3IiLCJkYiIsImNvbm5lY3QiLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiLCJlcnJvciIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/utils.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/jose","vendor-chunks/@auth","vendor-chunks/oauth4webapi","vendor-chunks/next-auth","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/cookie","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CUsers%5Cmauri%5COneDrive%5CDesktop%5Cthingstosave%5CProgramming%5Cfirst-project%5Cadmin-dashboard%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmauri%5COneDrive%5CDesktop%5Cthingstosave%5CProgramming%5Cfirst-project%5Cadmin-dashboard&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();