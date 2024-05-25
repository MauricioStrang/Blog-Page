"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src/middleware",{

/***/ "(middleware)/./src/lib/auth.config.js":
/*!********************************!*\
  !*** ./src/lib/auth.config.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authConfig: () => (/* binding */ authConfig)\n/* harmony export */ });\nconst authConfig = {\n    pages: {\n        signIn: \"/login\"\n    },\n    providers: [],\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                token.id = user.id;\n                token.isAdmin = user.isAdmin;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (token) {\n                session.user.id = token.id;\n                session.user.isAdmin = token.isAdmin;\n            }\n            return session;\n        },\n        authorized ({ auth, request }) {\n            return false;\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL2xpYi9hdXRoLmNvbmZpZy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsYUFBYTtJQUN0QkMsT0FBTTtRQUNGQyxRQUFRO0lBQ1o7SUFDQUMsV0FBVyxFQUFFO0lBQ2JDLFdBQVc7UUFDUCxNQUFNQyxLQUFJLEVBQUNDLEtBQUssRUFBRUMsSUFBSSxFQUFDO1lBQ25CLElBQUdBLE1BQUs7Z0JBQ0pELE1BQU1FLEVBQUUsR0FBR0QsS0FBS0MsRUFBRTtnQkFDbEJGLE1BQU1HLE9BQU8sR0FBR0YsS0FBS0UsT0FBTztZQUNoQztZQUNBLE9BQU9IO1FBQ1g7UUFDQSxNQUFNSSxTQUFRLEVBQUNBLE9BQU8sRUFBRUosS0FBSyxFQUFDO1lBQzFCLElBQUdBLE9BQU07Z0JBQ0xJLFFBQVFILElBQUksQ0FBQ0MsRUFBRSxHQUFHRixNQUFNRSxFQUFFO2dCQUMxQkUsUUFBUUgsSUFBSSxDQUFDRSxPQUFPLEdBQUdILE1BQU1HLE9BQU87WUFDeEM7WUFDQSxPQUFPQztRQUNYO1FBQ0FDLFlBQVcsRUFBQ0MsSUFBSSxFQUFFQyxPQUFPLEVBQUM7WUFDdEIsT0FBTztRQUNYO0lBQ0o7QUFDSixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9saWIvYXV0aC5jb25maWcuanM/NzY0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgYXV0aENvbmZpZyA9IHtcclxuICAgIHBhZ2VzOntcclxuICAgICAgICBzaWduSW46ICcvbG9naW4nLFxyXG4gICAgfSxcclxuICAgIHByb3ZpZGVyczogW10sXHJcbiAgICBjYWxsYmFja3M6IHtcclxuICAgICAgICBhc3luYyBqd3Qoe3Rva2VuLCB1c2VyfSl7XHJcbiAgICAgICAgICAgIGlmKHVzZXIpe1xyXG4gICAgICAgICAgICAgICAgdG9rZW4uaWQgPSB1c2VyLmlkO1xyXG4gICAgICAgICAgICAgICAgdG9rZW4uaXNBZG1pbiA9IHVzZXIuaXNBZG1pbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdG9rZW47XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3luYyBzZXNzaW9uKHtzZXNzaW9uLCB0b2tlbn0pe1xyXG4gICAgICAgICAgICBpZih0b2tlbil7XHJcbiAgICAgICAgICAgICAgICBzZXNzaW9uLnVzZXIuaWQgPSB0b2tlbi5pZDtcclxuICAgICAgICAgICAgICAgIHNlc3Npb24udXNlci5pc0FkbWluID0gdG9rZW4uaXNBZG1pbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gc2Vzc2lvblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXV0aG9yaXplZCh7YXV0aCwgcmVxdWVzdH0pe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn07Il0sIm5hbWVzIjpbImF1dGhDb25maWciLCJwYWdlcyIsInNpZ25JbiIsInByb3ZpZGVycyIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwidXNlciIsImlkIiwiaXNBZG1pbiIsInNlc3Npb24iLCJhdXRob3JpemVkIiwiYXV0aCIsInJlcXVlc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./src/lib/auth.config.js\n");

/***/ })

});