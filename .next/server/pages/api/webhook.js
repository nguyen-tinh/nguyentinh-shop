(function() {
var exports = {};
exports.id = "pages/api/webhook";
exports.ids = ["pages/api/webhook"];
exports.modules = {

/***/ "./src/pages/api/webhook.js":
/*!**********************************!*\
  !*** ./src/pages/api/webhook.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": function() { return /* binding */ config; }
/* harmony export */ });
/* harmony import */ var micro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micro */ "micro");
/* harmony import */ var micro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(micro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase-admin */ "firebase-admin");
/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_admin__WEBPACK_IMPORTED_MODULE_1__);



const serviceAccount = __webpack_require__(/*! ../../../permissions.json */ "./permissions.json"); // secure a connection firebase to backend


const app = !firebase_admin__WEBPACK_IMPORTED_MODULE_1__.apps.length ? firebase_admin__WEBPACK_IMPORTED_MODULE_1__.initializeApp({
  credential: firebase_admin__WEBPACK_IMPORTED_MODULE_1__.credential.cert(serviceAccount)
}) : firebase_admin__WEBPACK_IMPORTED_MODULE_1__.app(); //   establish connection to Stripe

const stripe = __webpack_require__(/*! stripe */ "stripe")(process.env.STRIPE_SECRET_KEY);

const endPointSecret = process.env.STRIPE_SIGNING_SECRET;

const fulfillOrder = async session => {
  return app.firestore().collection("users").doc(session.metadata.email).collection("orders").doc(session.id).set({
    amount: session.amount_total / 100,
    amount_shipping: session.total_details.amount_shipping / 100,
    images: JSON.parse(session.metadata.images),
    timestamp: firebase_admin__WEBPACK_IMPORTED_MODULE_1__.firestore.FieldValue.serverTimestamp()
  }).then(() => {
    console.log(`SUCCESS: Order ${session.id} had been added to the DB`);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  if (req.method === "POST") {
    const requestBuffer = await (0,micro__WEBPACK_IMPORTED_MODULE_0__.buffer)(req);
    const payload = await requestBuffer.toString();
    const sig = req.headers["stripe-signature"];
    let event; // verify that the event posted came from stripe

    try {
      event = stripe.webhooks.constructEvent(payload, sig, endPointSecret);
    } catch (err) {
      console.log("ERROR", err.message);
      return res.status(400).send(`Webhook error: ${err.message}`);
    } // Handle the checkout.session.completed event


    if (event.type === "checkout.session.completed") {
      const session = event.data.object; // fulfill the order...

      return fulfillOrder(session).then(() => res.status(200)).catch(err => res.status(400).send(`Webhook Error: ${err.message}`));
    }
  }
});
const config = {
  api: {
    bodyParser: false,
    externalResolver: true
  }
};

/***/ }),

/***/ "./permissions.json":
/*!**************************!*\
  !*** ./permissions.json ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"type":"service_account","project_id":"nguyen-tinh-shop","private_key_id":"80ff79938cf6a9b9da9eab034a7a1696a01375b9","private_key":"-----BEGIN PRIVATE KEY-----\\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCU3AzATHnESRBp\\nnuG/VJQfVdI99XMBRnEJAlWrt3SbPX1hmsQXi95VL8TmOC1W6PoZp6mTT7z3wdj/\\nxlh1UphpjSBc4sLq3svzb6vaWybHeFBePi0gAccescEUKqY9h9ZGsSMdgPSdsUWa\\nZDbQLVeiIbll5qgTsazARkqpzyLbLKNv5sHwQYU0a7lYxUfBX74I3Tq5lOG+ywP/\\nXtYTDuJwS0kAS/9TLxTNweWtOkKFBxQGN139JNwdizBgwFe4UJRzXdAHEzUrSaGd\\nD+nMwA0eAUXdS4NKGbCwfYzI7dOtLQRvCNuzXBurWKmL2tA0PujJOyX/mLLeHekj\\nSiEMltE7AgMBAAECggEAM4XchfySUt2FKEGdWkdwg04FmHtppGHYwukDdQ1o90h3\\nqr5SK+I2AJ8plBOSode+pP2SpJG/UrPOI21n9aeyaCo4Lt4v3/JgfjBDN69AA1+B\\n1bTIkqD65gVZUl0WsAphoJM0F8SoJiKS+EbCcBiZkd0BWiNVPofLRrutoQu4QUqx\\nPHcwheZFKazHgZ0nyfj5UqTPWeW9PllugeH2FAgdhHPOIOA2R8KyD9fQL1frPo9q\\nCOc0ChGOIUBXkjuMmIrENxrEwecGo/FwelpxYPH1a42nHtmqYbbCLH9uGqFTtzb/\\n0iYPQAvTUvKk3tUDq1ZDdbmLl+s/TdR2uzLKCSQZnQKBgQDMDtNkxkR0k/WLGHkj\\n5RfSrtADaLVvp7ouFsqcHAjRmSsXWSe4ftNKaHkoeTSMhW0iTKVxoMaf/3YZJc/7\\nBMhxLEuyQtNA/o1CE7tqrQ7KIEeDLBNWewALBdw38k9EWNiMC+HxYuPssH/W+HMs\\nmkPwwO/r916Yx9qyO5CNjhz1xwKBgQC6wEtTCipDfJFpPi9m7K0XtvRNiQHPI9bY\\nbtcSgSLn6uC3Z1y3ApLsZi1Xtubds6+g8wRyKVPJox50SqRDqyMCUa9oOluEy9GU\\neXrqj0Pah7uAkD6zguFgsk2m8+PECIhT6+K9Qq7euVKEygSPw0lyUEBsMphs8irx\\nnVRACt547QKBgCM4q+RJFKfKoidQIhjAAkyrP9xWxnpvSQOLi41GiX8kIPv2t5Rw\\nz6eYQNFrmlZm8V9qO2RRi/cx8QCGNk/tk2t1adtrDWu6hEdTgJX5KQRabf2GLhBP\\nSsKcUFaXzHbPnxENPAKePxkrneVNHRQlzHRR2RexqvJUDLuW7GyCix0hAoGADBIZ\\nzEg/6xTGIVNPpQtvNLUynUBZyZW7cUnYxO1r4CmiVLhtmbak4HrKO30q9vGCTJjo\\nlKhvLf1JHqMkcutA3AmDmO0MtUynQz2G4FpaPGnBiNHJ+7hd8O4VbtEcy7LxfNsm\\nUK1auDKqTsLwAIrS2HyvbU7n40LT28Ibi/gn4RECgYEAjO2D0HO0mwwUkmsrpZT4\\nMORTCc6MBWeJ2D1cyBoE/3Dk6ALteMD0AY+gf01UfKjJI8YIpdGXD5QI8Ra7Da4i\\nzwEJR2dwurCLfVv5Q+OdEv7XGjIaVRQ90P9ljtGM+HrsCSwzEO4kE8ZUO6AORXIu\\nq1XFodUM6erhI4fRTZRYL7Q=\\n-----END PRIVATE KEY-----\\n","client_email":"firebase-adminsdk-zejy3@nguyen-tinh-shop.iam.gserviceaccount.com","client_id":"115099294407039323993","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-zejy3%40nguyen-tinh-shop.iam.gserviceaccount.com"}');

/***/ }),

/***/ "firebase-admin":
/*!*********************************!*\
  !*** external "firebase-admin" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("firebase-admin");;

/***/ }),

/***/ "micro":
/*!************************!*\
  !*** external "micro" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("micro");;

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
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/webhook.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9wLy4vc3JjL3BhZ2VzL2FwaS93ZWJob29rLmpzIiwid2VicGFjazovL3Nob3AvZXh0ZXJuYWwgXCJmaXJlYmFzZS1hZG1pblwiIiwid2VicGFjazovL3Nob3AvZXh0ZXJuYWwgXCJtaWNyb1wiIiwid2VicGFjazovL3Nob3AvZXh0ZXJuYWwgXCJzdHJpcGVcIiJdLCJuYW1lcyI6WyJzZXJ2aWNlQWNjb3VudCIsInJlcXVpcmUiLCJhcHAiLCJhZG1pbiIsImNyZWRlbnRpYWwiLCJzdHJpcGUiLCJwcm9jZXNzIiwiZW52IiwiU1RSSVBFX1NFQ1JFVF9LRVkiLCJlbmRQb2ludFNlY3JldCIsIlNUUklQRV9TSUdOSU5HX1NFQ1JFVCIsImZ1bGZpbGxPcmRlciIsInNlc3Npb24iLCJmaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwiZG9jIiwibWV0YWRhdGEiLCJlbWFpbCIsImlkIiwic2V0IiwiYW1vdW50IiwiYW1vdW50X3RvdGFsIiwiYW1vdW50X3NoaXBwaW5nIiwidG90YWxfZGV0YWlscyIsImltYWdlcyIsIkpTT04iLCJwYXJzZSIsInRpbWVzdGFtcCIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwicmVxIiwicmVzIiwibWV0aG9kIiwicmVxdWVzdEJ1ZmZlciIsImJ1ZmZlciIsInBheWxvYWQiLCJ0b1N0cmluZyIsInNpZyIsImhlYWRlcnMiLCJldmVudCIsIndlYmhvb2tzIiwiY29uc3RydWN0RXZlbnQiLCJlcnIiLCJtZXNzYWdlIiwic3RhdHVzIiwic2VuZCIsInR5cGUiLCJkYXRhIiwib2JqZWN0IiwiY2F0Y2giLCJjb25maWciLCJhcGkiLCJib2R5UGFyc2VyIiwiZXh0ZXJuYWxSZXNvbHZlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxjQUFjLEdBQUdDLG1CQUFPLENBQUMscURBQUQsQ0FBOUIsQyxDQUVBOzs7QUFDQSxNQUFNQyxHQUFHLEdBQUcsQ0FBQ0MsdURBQUQs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Ozs7Ozs7Ozs7O0FDQUEsb0MiLCJmaWxlIjoicGFnZXMvYXBpL3dlYmhvb2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBidWZmZXIgfSBmcm9tIFwibWljcm9cIjtcclxuaW1wb3J0ICogYXMgYWRtaW4gZnJvbSBcImZpcmViYXNlLWFkbWluXCI7XHJcblxyXG5jb25zdCBzZXJ2aWNlQWNjb3VudCA9IHJlcXVpcmUoXCIuLi8uLi8uLi9wZXJtaXNzaW9ucy5qc29uXCIpO1xyXG5cclxuLy8gc2VjdXJlIGEgY29ubmVjdGlvbiBmaXJlYmFzZSB0byBiYWNrZW5kXHJcbmNvbnN0IGFwcCA9ICFhZG1pbi5hcHBzLmxlbmd0aFxyXG4gID8gYWRtaW4uaW5pdGlhbGl6ZUFwcCh7XHJcbiAgICAgIGNyZWRlbnRpYWw6IGFkbWluLmNyZWRlbnRpYWwuY2VydChzZXJ2aWNlQWNjb3VudCksXHJcbiAgICB9KVxyXG4gIDogYWRtaW4uYXBwKCk7XHJcblxyXG4vLyAgIGVzdGFibGlzaCBjb25uZWN0aW9uIHRvIFN0cmlwZVxyXG5jb25zdCBzdHJpcGUgPSByZXF1aXJlKFwic3RyaXBlXCIpKHByb2Nlc3MuZW52LlNUUklQRV9TRUNSRVRfS0VZKTtcclxuXHJcbmNvbnN0IGVuZFBvaW50U2VjcmV0ID0gcHJvY2Vzcy5lbnYuU1RSSVBFX1NJR05JTkdfU0VDUkVUO1xyXG5cclxuY29uc3QgZnVsZmlsbE9yZGVyID0gYXN5bmMgKHNlc3Npb24pID0+IHtcclxuICByZXR1cm4gYXBwXHJcbiAgICAuZmlyZXN0b3JlKClcclxuICAgIC5jb2xsZWN0aW9uKFwidXNlcnNcIilcclxuICAgIC5kb2Moc2Vzc2lvbi5tZXRhZGF0YS5lbWFpbClcclxuICAgIC5jb2xsZWN0aW9uKFwib3JkZXJzXCIpXHJcbiAgICAuZG9jKHNlc3Npb24uaWQpXHJcbiAgICAuc2V0KHtcclxuICAgICAgYW1vdW50OiBzZXNzaW9uLmFtb3VudF90b3RhbCAvIDEwMCxcclxuICAgICAgYW1vdW50X3NoaXBwaW5nOiBzZXNzaW9uLnRvdGFsX2RldGFpbHMuYW1vdW50X3NoaXBwaW5nIC8gMTAwLFxyXG4gICAgICBpbWFnZXM6IEpTT04ucGFyc2Uoc2Vzc2lvbi5tZXRhZGF0YS5pbWFnZXMpLFxyXG4gICAgICB0aW1lc3RhbXA6IGFkbWluLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgfSlcclxuICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coYFNVQ0NFU1M6IE9yZGVyICR7c2Vzc2lvbi5pZH0gaGFkIGJlZW4gYWRkZWQgdG8gdGhlIERCYCk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xyXG4gICAgY29uc3QgcmVxdWVzdEJ1ZmZlciA9IGF3YWl0IGJ1ZmZlcihyZXEpO1xyXG4gICAgY29uc3QgcGF5bG9hZCA9IGF3YWl0IHJlcXVlc3RCdWZmZXIudG9TdHJpbmcoKTtcclxuICAgIGNvbnN0IHNpZyA9IHJlcS5oZWFkZXJzW1wic3RyaXBlLXNpZ25hdHVyZVwiXTtcclxuXHJcbiAgICBsZXQgZXZlbnQ7XHJcblxyXG4gICAgLy8gdmVyaWZ5IHRoYXQgdGhlIGV2ZW50IHBvc3RlZCBjYW1lIGZyb20gc3RyaXBlXHJcbiAgICB0cnkge1xyXG4gICAgICBldmVudCA9IHN0cmlwZS53ZWJob29rcy5jb25zdHJ1Y3RFdmVudChwYXlsb2FkLCBzaWcsIGVuZFBvaW50U2VjcmV0KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkVSUk9SXCIsIGVyci5tZXNzYWdlKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKGBXZWJob29rIGVycm9yOiAke2Vyci5tZXNzYWdlfWApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEhhbmRsZSB0aGUgY2hlY2tvdXQuc2Vzc2lvbi5jb21wbGV0ZWQgZXZlbnRcclxuICAgIGlmIChldmVudC50eXBlID09PSBcImNoZWNrb3V0LnNlc3Npb24uY29tcGxldGVkXCIpIHtcclxuICAgICAgY29uc3Qgc2Vzc2lvbiA9IGV2ZW50LmRhdGEub2JqZWN0O1xyXG5cclxuICAgICAgLy8gZnVsZmlsbCB0aGUgb3JkZXIuLi5cclxuICAgICAgcmV0dXJuIGZ1bGZpbGxPcmRlcihzZXNzaW9uKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHJlcy5zdGF0dXMoMjAwKSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4gcmVzLnN0YXR1cyg0MDApLnNlbmQoYFdlYmhvb2sgRXJyb3I6ICR7ZXJyLm1lc3NhZ2V9YCkpO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgYXBpOiB7XHJcbiAgICBib2R5UGFyc2VyOiBmYWxzZSxcclxuICAgIGV4dGVybmFsUmVzb2x2ZXI6IHRydWUsXHJcbiAgfSxcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UtYWRtaW5cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1pY3JvXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHJpcGVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=