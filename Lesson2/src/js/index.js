"use strict";

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

var _empl = _interopRequireDefault(require("./empl"));

var _mooney = _interopRequireDefault(require("./mooney"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Business =
/*#__PURE__*/
function () {
  function Business() {
    _classCallCheck(this, Business);

    this.empl = new _empl.default();
    this.employersNames = this.empl.changeEmplNames();
    this.mooney = new _mooney.default();
    this.money = this.mooney.mooneyCalc();
    this.sponsors = this.mooney.returnSponsors();
  }

  _createClass(Business, [{
    key: "returnMoney",
    value: function returnMoney() {
      return this.money;
    }
  }, {
    key: "returnEmployersNames",
    value: function returnEmployersNames() {
      return this.employersNames;
    }
  }, {
    key: "returnSponsors",
    value: function returnSponsors() {
      return this.sponsors;
    }
  }, {
    key: "makeBusiness",
    value: function makeBusiness(owner) {
      var director = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Victor';
      var cash = arguments.length > 2 ? arguments[2] : undefined;
      var emp = arguments.length > 3 ? arguments[3] : undefined;
      var sumSponsors = eu.concat(rus, 'unexpected sponsor');
      console.log("We have a business. Owner: ".concat(owner, ", director: ").concat(director, ". Our budget: ").concat(cash, ". And our employers: ").concat(emp));
      console.log('And we have a sponsors: ');
      console.log.apply(null, sumSponsors);
      console.log("Note. Be careful with ".concat(a, ". It's a huge risk."));
    }
  }]);

  return Business;
}();

var business = new Business();
var money = business.returnMoney();
var employersNames = business.returnEmployersNames();
var sponsors = business.returnSponsors();
var eu = sponsors.eu;

var _sponsors$eu = _slicedToArray(sponsors.eu, 1),
    a = _sponsors$eu[0];

var rus = sponsors.rus;
business.makeBusiness.apply(null, ['Sam',, money, employersNames]);