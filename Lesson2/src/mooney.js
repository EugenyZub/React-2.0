"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Mooney =
/*#__PURE__*/
function () {
  function Mooney(money) {
    _classCallCheck(this, Mooney);

    this.sponsors = {
      cash: [40000, 5000, 30400, 12000],
      eu: ['SRL', 'PLO', 'J&K'],
      rus: ['RusAuto', 'SBO']
    };
    this.money = money;
  }

  _createClass(Mooney, [{
    key: "calcCash",
    value: function calcCash() {
      var own = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var everyCash = Array.prototype.slice.call(arguments);
      var total = own;

      for (var i = 0; i < everyCash[1].length; i++) {
        total += +everyCash[1][i];
      }

      return total;
    }
  }, {
    key: "mooneyCalc",
    value: function mooneyCalc() {
      var cash = this.sponsors.cash;
      this.money = this.calcCash(null, cash);
      return this.money;
    }
  }, {
    key: "returnSponsors",
    value: function returnSponsors() {
      return this.sponsors;
    }
  }]);

  return Mooney;
}(); // let sponsors = {
//     cash: [40000, 5000, 30400, 12000],
//     eu: ['SRL', 'PLO', 'J&K'],
//     rus: ['RusAuto', 'SBO']
// };
// function calcCash(own = 0) {
//     let everyCash = Array.prototype.slice.call(arguments);
//     let total = own;
//     for (let i = 0; i < everyCash[1].length; i++) {
//         total += +everyCash[1][i];
//     }
//     return total;
// }
//const {cash} = sponsors;
//let money = calcCash(null, cash);
//export {sponsors, money};


exports.default = Mooney;