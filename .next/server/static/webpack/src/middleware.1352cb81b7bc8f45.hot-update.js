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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authConfig: () => (/* binding */ authConfig)\n/* harmony export */ });\nconst authConfig = {\n    pages: {\n        signIn: \"/login\"\n    },\n    providers: [],\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                token.id = user.id;\n                token.isAdmin = user.isAdmin;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (token) {\n                session.user.id = token.id;\n                session.user.isAdmin = token.isAdmin;\n            }\n        },\n        authorized ({ auth, request }) {\n            return false;\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL2xpYi9hdXRoLmNvbmZpZy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsYUFBYTtJQUN0QkMsT0FBTTtRQUNGQyxRQUFRO0lBQ1o7SUFDQUMsV0FBVyxFQUFFO0lBQ2JDLFdBQVc7UUFDUCxNQUFNQyxLQUFJLEVBQUNDLEtBQUssRUFBRUMsSUFBSSxFQUFDO1lBQ25CLElBQUdBLE1BQUs7Z0JBQ0pELE1BQU1FLEVBQUUsR0FBR0QsS0FBS0MsRUFBRTtnQkFDbEJGLE1BQU1HLE9BQU8sR0FBR0YsS0FBS0UsT0FBTztZQUNoQztZQUNBLE9BQU9IO1FBQ1g7UUFDQSxNQUFNSSxTQUFRLEVBQUNBLE9BQU8sRUFBRUosS0FBSyxFQUFDO1lBQzFCLElBQUdBLE9BQU07Z0JBQ0xJLFFBQVFILElBQUksQ0FBQ0MsRUFBRSxHQUFHRixNQUFNRSxFQUFFO2dCQUMxQkUsUUFBUUgsSUFBSSxDQUFDRSxPQUFPLEdBQUdILE1BQU1HLE9BQU87WUFDeEM7UUFDSjtRQUNBRSxZQUFXLEVBQUNDLElBQUksRUFBRUMsT0FBTyxFQUFDO1lBQ3RCLE9BQU87UUFDWDtJQUNKO0FBQ0osRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbGliL2F1dGguY29uZmlnLmpzPzc2NGMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGF1dGhDb25maWcgPSB7XHJcbiAgICBwYWdlczp7XHJcbiAgICAgICAgc2lnbkluOiAnL2xvZ2luJyxcclxuICAgIH0sXHJcbiAgICBwcm92aWRlcnM6IFtdLFxyXG4gICAgY2FsbGJhY2tzOiB7XHJcbiAgICAgICAgYXN5bmMgand0KHt0b2tlbiwgdXNlcn0pe1xyXG4gICAgICAgICAgICBpZih1c2VyKXtcclxuICAgICAgICAgICAgICAgIHRva2VuLmlkID0gdXNlci5pZDtcclxuICAgICAgICAgICAgICAgIHRva2VuLmlzQWRtaW4gPSB1c2VyLmlzQWRtaW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXN5bmMgc2Vzc2lvbih7c2Vzc2lvbiwgdG9rZW59KXtcclxuICAgICAgICAgICAgaWYodG9rZW4pe1xyXG4gICAgICAgICAgICAgICAgc2Vzc2lvbi51c2VyLmlkID0gdG9rZW4uaWQ7XHJcbiAgICAgICAgICAgICAgICBzZXNzaW9uLnVzZXIuaXNBZG1pbiA9IHRva2VuLmlzQWRtaW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGF1dGhvcml6ZWQoe2F1dGgsIHJlcXVlc3R9KXtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59OyJdLCJuYW1lcyI6WyJhdXRoQ29uZmlnIiwicGFnZXMiLCJzaWduSW4iLCJwcm92aWRlcnMiLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsInVzZXIiLCJpZCIsImlzQWRtaW4iLCJzZXNzaW9uIiwiYXV0aG9yaXplZCIsImF1dGgiLCJyZXF1ZXN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./src/lib/auth.config.js\n");

/***/ })

});