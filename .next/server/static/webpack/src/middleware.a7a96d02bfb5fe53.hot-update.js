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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authConfig: () => (/* binding */ authConfig)\n/* harmony export */ });\nconst authConfig = {\n    pages: {\n        signIn: \"/login\"\n    },\n    providers: [],\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                token.id = user.id;\n                token.isAdmin = user.isAdmin;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (token) {\n                session.user.id = token.id;\n                session.user.isAdmin = token.isAdmin;\n            }\n            return session;\n        },\n        authorized ({ auth, request }) {\n            const user = auth?.user;\n            const isOnAdminPanel = request.nextUrl?.pathname.startsWith(\"/admin\");\n            const isOnBlogPanel = request.nextUrl?.pathname.startsWith(\"/blog\");\n            const isOnLoginPanel = request.nextUrl?.pathname.startsWith(\"/login\");\n            if (isOnAdminPanel && !user?.isAdmin) {\n                return false;\n            }\n            if (isOnBlogPanel && !user) {\n                return false;\n            }\n            if (isOnAdminPanel && user) {\n                return Response.redirect(new URL(\"/\", request.nextUrl));\n            }\n            return true;\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL2xpYi9hdXRoLmNvbmZpZy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsYUFBYTtJQUN0QkMsT0FBTTtRQUNGQyxRQUFRO0lBQ1o7SUFDQUMsV0FBVyxFQUFFO0lBQ2JDLFdBQVc7UUFDUCxNQUFNQyxLQUFJLEVBQUNDLEtBQUssRUFBRUMsSUFBSSxFQUFDO1lBQ25CLElBQUdBLE1BQUs7Z0JBQ0pELE1BQU1FLEVBQUUsR0FBR0QsS0FBS0MsRUFBRTtnQkFDbEJGLE1BQU1HLE9BQU8sR0FBR0YsS0FBS0UsT0FBTztZQUNoQztZQUNBLE9BQU9IO1FBQ1g7UUFDQSxNQUFNSSxTQUFRLEVBQUNBLE9BQU8sRUFBRUosS0FBSyxFQUFDO1lBQzFCLElBQUdBLE9BQU07Z0JBQ0xJLFFBQVFILElBQUksQ0FBQ0MsRUFBRSxHQUFHRixNQUFNRSxFQUFFO2dCQUMxQkUsUUFBUUgsSUFBSSxDQUFDRSxPQUFPLEdBQUdILE1BQU1HLE9BQU87WUFDeEM7WUFDQSxPQUFPQztRQUNYO1FBQ0FDLFlBQVcsRUFBQ0MsSUFBSSxFQUFFQyxPQUFPLEVBQUM7WUFFdEIsTUFBTU4sT0FBT0ssTUFBTUw7WUFDbkIsTUFBTU8saUJBQWlCRCxRQUFRRSxPQUFPLEVBQUVDLFNBQVNDLFdBQVc7WUFDNUQsTUFBTUMsZ0JBQWdCTCxRQUFRRSxPQUFPLEVBQUVDLFNBQVNDLFdBQVc7WUFDM0QsTUFBTUUsaUJBQWlCTixRQUFRRSxPQUFPLEVBQUVDLFNBQVNDLFdBQVc7WUFFNUQsSUFBR0gsa0JBQWtCLENBQUNQLE1BQU1FLFNBQVE7Z0JBQ2hDLE9BQU87WUFDWDtZQUNBLElBQUdTLGlCQUFpQixDQUFDWCxNQUFLO2dCQUN0QixPQUFPO1lBQ1g7WUFDQSxJQUFHTyxrQkFBa0JQLE1BQUs7Z0JBQ3RCLE9BQU9hLFNBQVNDLFFBQVEsQ0FBQyxJQUFJQyxJQUFJLEtBQUtULFFBQVFFLE9BQU87WUFDekQ7WUFFQSxPQUFPO1FBQ1g7SUFDSjtBQUNKLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xpYi9hdXRoLmNvbmZpZy5qcz83NjRjIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBhdXRoQ29uZmlnID0ge1xyXG4gICAgcGFnZXM6e1xyXG4gICAgICAgIHNpZ25JbjogJy9sb2dpbicsXHJcbiAgICB9LFxyXG4gICAgcHJvdmlkZXJzOiBbXSxcclxuICAgIGNhbGxiYWNrczoge1xyXG4gICAgICAgIGFzeW5jIGp3dCh7dG9rZW4sIHVzZXJ9KXtcclxuICAgICAgICAgICAgaWYodXNlcil7XHJcbiAgICAgICAgICAgICAgICB0b2tlbi5pZCA9IHVzZXIuaWQ7XHJcbiAgICAgICAgICAgICAgICB0b2tlbi5pc0FkbWluID0gdXNlci5pc0FkbWluO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0b2tlbjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jIHNlc3Npb24oe3Nlc3Npb24sIHRva2VufSl7XHJcbiAgICAgICAgICAgIGlmKHRva2VuKXtcclxuICAgICAgICAgICAgICAgIHNlc3Npb24udXNlci5pZCA9IHRva2VuLmlkO1xyXG4gICAgICAgICAgICAgICAgc2Vzc2lvbi51c2VyLmlzQWRtaW4gPSB0b2tlbi5pc0FkbWluO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzZXNzaW9uO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXV0aG9yaXplZCh7YXV0aCwgcmVxdWVzdH0pe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgdXNlciA9IGF1dGg/LnVzZXI7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzT25BZG1pblBhbmVsID0gcmVxdWVzdC5uZXh0VXJsPy5wYXRobmFtZS5zdGFydHNXaXRoKFwiL2FkbWluXCIpXHJcbiAgICAgICAgICAgIGNvbnN0IGlzT25CbG9nUGFuZWwgPSByZXF1ZXN0Lm5leHRVcmw/LnBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvYmxvZ1wiKVxyXG4gICAgICAgICAgICBjb25zdCBpc09uTG9naW5QYW5lbCA9IHJlcXVlc3QubmV4dFVybD8ucGF0aG5hbWUuc3RhcnRzV2l0aChcIi9sb2dpblwiKVxyXG5cclxuICAgICAgICAgICAgaWYoaXNPbkFkbWluUGFuZWwgJiYgIXVzZXI/LmlzQWRtaW4pe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGlzT25CbG9nUGFuZWwgJiYgIXVzZXIpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGlzT25BZG1pblBhbmVsICYmIHVzZXIpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlc3BvbnNlLnJlZGlyZWN0KG5ldyBVUkwoXCIvXCIsIHJlcXVlc3QubmV4dFVybCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufTsiXSwibmFtZXMiOlsiYXV0aENvbmZpZyIsInBhZ2VzIiwic2lnbkluIiwicHJvdmlkZXJzIiwiY2FsbGJhY2tzIiwiand0IiwidG9rZW4iLCJ1c2VyIiwiaWQiLCJpc0FkbWluIiwic2Vzc2lvbiIsImF1dGhvcml6ZWQiLCJhdXRoIiwicmVxdWVzdCIsImlzT25BZG1pblBhbmVsIiwibmV4dFVybCIsInBhdGhuYW1lIiwic3RhcnRzV2l0aCIsImlzT25CbG9nUGFuZWwiLCJpc09uTG9naW5QYW5lbCIsIlJlc3BvbnNlIiwicmVkaXJlY3QiLCJVUkwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./src/lib/auth.config.js\n");

/***/ })

});