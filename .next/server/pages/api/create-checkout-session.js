(function() {
var exports = {};
exports.id = "pages/api/create-checkout-session";
exports.ids = ["pages/api/create-checkout-session"];
exports.modules = {

/***/ "./src/pages/api/create-checkout-session.js":
/*!**************************************************!*\
  !*** ./src/pages/api/create-checkout-session.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const stripe = __webpack_require__(/*! stripe */ "stripe")(process.env.STRIPE_SECRET_KEY);

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const {
    items,
    email
  } = req.body;
  const transformedItems = items.map(item => ({
    description: item.description,
    quantity: 1,
    price_data: {
      currency: "gbp",
      unit_amount: item.price * 100,
      product_data: {
        name: item.title,
        images: [item.image]
      }
    }
  }));
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_rates: ["shr_1JGaXqCAI2HUyggkSE4TaIYL"],
    shipping_address_collection: {
      allowed_countries: ["GB", "US", "CA"]
    },
    line_items: transformedItems,
    mode: "payment",
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/checkout`,
    metadata: {
      email,
      images: JSON.stringify(items.map(item => item.image))
    }
  });
  res.status(200).json({
    id: session.id
  });
});

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("stripe");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/create-checkout-session.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9wLy4vc3JjL3BhZ2VzL2FwaS9jcmVhdGUtY2hlY2tvdXQtc2Vzc2lvbi5qcyIsIndlYnBhY2s6Ly9zaG9wL2V4dGVybmFsIFwic3RyaXBlXCIiXSwibmFtZXMiOlsic3RyaXBlIiwicmVxdWlyZSIsInByb2Nlc3MiLCJlbnYiLCJTVFJJUEVfU0VDUkVUX0tFWSIsInJlcSIsInJlcyIsIml0ZW1zIiwiZW1haWwiLCJib2R5IiwidHJhbnNmb3JtZWRJdGVtcyIsIm1hcCIsIml0ZW0iLCJkZXNjcmlwdGlvbiIsInF1YW50aXR5IiwicHJpY2VfZGF0YSIsImN1cnJlbmN5IiwidW5pdF9hbW91bnQiLCJwcmljZSIsInByb2R1Y3RfZGF0YSIsIm5hbWUiLCJ0aXRsZSIsImltYWdlcyIsImltYWdlIiwic2Vzc2lvbiIsImNoZWNrb3V0Iiwic2Vzc2lvbnMiLCJjcmVhdGUiLCJwYXltZW50X21ldGhvZF90eXBlcyIsInNoaXBwaW5nX3JhdGVzIiwic2hpcHBpbmdfYWRkcmVzc19jb2xsZWN0aW9uIiwiYWxsb3dlZF9jb3VudHJpZXMiLCJsaW5lX2l0ZW1zIiwibW9kZSIsInN1Y2Nlc3NfdXJsIiwiSE9TVCIsImNhbmNlbF91cmwiLCJtZXRhZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdGF0dXMiLCJqc29uIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsTUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLHNCQUFELENBQVAsQ0FBa0JDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxpQkFBOUIsQ0FBZjs7QUFFQSwrREFBZSxPQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDakMsUUFBTTtBQUFFQyxTQUFGO0FBQVNDO0FBQVQsTUFBbUJILEdBQUcsQ0FBQ0ksSUFBN0I7QUFFQSxRQUFNQyxnQkFBZ0IsR0FBR0gsS0FBSyxDQUFDSSxHQUFOLENBQVdDLElBQUQsS0FBVztBQUM1Q0MsZUFBVyxFQUFFRCxJQUFJLENBQUNDLFdBRDBCO0FBRTVDQyxZQUFRLEVBQUUsQ0FGa0M7QUFHNUNDLGNBQVUsRUFBRTtBQUNWQyxjQUFRLEVBQUUsS0FEQTtBQUVWQyxpQkFBVyxFQUFFTCxJQUFJLENBQUNNLEtBQUwsR0FBYSxHQUZoQjtBQUdWQyxrQkFBWSxFQUFFO0FBQ1pDLFlBQUksRUFBRVIsSUFBSSxDQUFDUyxLQURDO0FBRVpDLGNBQU0sRUFBRSxDQUFDVixJQUFJLENBQUNXLEtBQU47QUFGSTtBQUhKO0FBSGdDLEdBQVgsQ0FBVixDQUF6QjtBQWFBLFFBQU1DLE9BQU8sR0FBRyxNQUFNeEIsTUFBTSxDQUFDeUIsUUFBUCxDQUFnQkMsUUFBaEIsQ0FBeUJDLE1BQXpCLENBQWdDO0FBQ3BEQyx3QkFBb0IsRUFBRSxDQUFDLE1BQUQsQ0FEOEI7QUFFcERDLGtCQUFjLEVBQUUsQ0FBQyw4QkFBRCxDQUZvQztBQUdwREMsK0JBQTJCLEVBQUU7QUFDM0JDLHVCQUFpQixFQUFFLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiO0FBRFEsS0FIdUI7QUFNcERDLGNBQVUsRUFBRXRCLGdCQU53QztBQU9wRHVCLFFBQUksRUFBRSxTQVA4QztBQVFwREMsZUFBVyxFQUFHLEdBQUVoQyxPQUFPLENBQUNDLEdBQVIsQ0FBWWdDLElBQUssVUFSbUI7QUFTcERDLGNBQVUsRUFBRyxHQUFFbEMsT0FBTyxDQUFDQyxHQUFSLENBQVlnQyxJQUFLLFdBVG9CO0FBVXBERSxZQUFRLEVBQUU7QUFDUjdCLFdBRFE7QUFFUmMsWUFBTSxFQUFFZ0IsSUFBSSxDQUFDQyxTQUFMLENBQWVoQyxLQUFLLENBQUNJLEdBQU4sQ0FBV0MsSUFBRCxJQUFVQSxJQUFJLENBQUNXLEtBQXpCLENBQWY7QUFGQTtBQVYwQyxHQUFoQyxDQUF0QjtBQWdCQWpCLEtBQUcsQ0FBQ2tDLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxNQUFFLEVBQUVsQixPQUFPLENBQUNrQjtBQUFkLEdBQXJCO0FBQ0QsQ0FqQ0QsRTs7Ozs7Ozs7Ozs7QUNGQSxvQyIsImZpbGUiOiJwYWdlcy9hcGkvY3JlYXRlLWNoZWNrb3V0LXNlc3Npb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzdHJpcGUgPSByZXF1aXJlKFwic3RyaXBlXCIpKHByb2Nlc3MuZW52LlNUUklQRV9TRUNSRVRfS0VZKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIGNvbnN0IHsgaXRlbXMsIGVtYWlsIH0gPSByZXEuYm9keTtcclxuXHJcbiAgY29uc3QgdHJhbnNmb3JtZWRJdGVtcyA9IGl0ZW1zLm1hcCgoaXRlbSkgPT4gKHtcclxuICAgIGRlc2NyaXB0aW9uOiBpdGVtLmRlc2NyaXB0aW9uLFxyXG4gICAgcXVhbnRpdHk6IDEsXHJcbiAgICBwcmljZV9kYXRhOiB7XHJcbiAgICAgIGN1cnJlbmN5OiBcImdicFwiLFxyXG4gICAgICB1bml0X2Ftb3VudDogaXRlbS5wcmljZSAqIDEwMCxcclxuICAgICAgcHJvZHVjdF9kYXRhOiB7XHJcbiAgICAgICAgbmFtZTogaXRlbS50aXRsZSxcclxuICAgICAgICBpbWFnZXM6IFtpdGVtLmltYWdlXSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSkpO1xyXG5cclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgc3RyaXBlLmNoZWNrb3V0LnNlc3Npb25zLmNyZWF0ZSh7XHJcbiAgICBwYXltZW50X21ldGhvZF90eXBlczogW1wiY2FyZFwiXSxcclxuICAgIHNoaXBwaW5nX3JhdGVzOiBbXCJzaHJfMUpHYVhxQ0FJMkhVeWdna1NFNFRhSVlMXCJdLFxyXG4gICAgc2hpcHBpbmdfYWRkcmVzc19jb2xsZWN0aW9uOiB7XHJcbiAgICAgIGFsbG93ZWRfY291bnRyaWVzOiBbXCJHQlwiLCBcIlVTXCIsIFwiQ0FcIl0sXHJcbiAgICB9LFxyXG4gICAgbGluZV9pdGVtczogdHJhbnNmb3JtZWRJdGVtcyxcclxuICAgIG1vZGU6IFwicGF5bWVudFwiLFxyXG4gICAgc3VjY2Vzc191cmw6IGAke3Byb2Nlc3MuZW52LkhPU1R9L3N1Y2Nlc3NgLFxyXG4gICAgY2FuY2VsX3VybDogYCR7cHJvY2Vzcy5lbnYuSE9TVH0vY2hlY2tvdXRgLFxyXG4gICAgbWV0YWRhdGE6IHtcclxuICAgICAgZW1haWwsXHJcbiAgICAgIGltYWdlczogSlNPTi5zdHJpbmdpZnkoaXRlbXMubWFwKChpdGVtKSA9PiBpdGVtLmltYWdlKSksXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGlkOiBzZXNzaW9uLmlkIH0pO1xyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHJpcGVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=