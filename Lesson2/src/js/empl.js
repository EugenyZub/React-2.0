"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Empl =
/*#__PURE__*/
function () {
  function Empl() {
    var employers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];
    var employersNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    _classCallCheck(this, Empl);

    this.employers = employers;
    this.employersNames = employersNames;
  }

  _createClass(Empl, [{
    key: "changeEmplNames",
    value: function changeEmplNames() {
      for (var i = 0; i < this.employers.length; i++) {
        if (this.employers[i].length > 0 && this.employers[i].length != '') {
          this.employersNames.push(this.employers[i]);
        }
      }

      for (var _i = 0; _i < this.employersNames.length; _i++) {
        this.employersNames[_i] = this.employersNames[_i].toLowerCase().trim();
      }

      return this.employersNames;
    }
  }]);

  return Empl;
}(); //let employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];
//let employersNames = [];
// for (let i = 0; i < employers.length; i++) {
// 	if (employers[i].length > 0 && employers[i].length != '') {
// 		employersNames.push(employers[i]);
// 	}
// }
// for (let i = 0; i < employersNames.length; i++) {
// 	employersNames[i] = employersNames[i].toLowerCase().trim();
// }


exports.default = Empl;