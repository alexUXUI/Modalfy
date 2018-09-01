"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _modal = _interopRequireDefault(require("./modal.component"));

require("./styles/modal.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var Modalfy =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Modalfy, _React$Component);

  function Modalfy(props) {
    var _this;

    _classCallCheck(this, Modalfy);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Modalfy).call(this, props));
    _this.state = {
      open: false // private methods

    };
    _this.open = _this.open.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.close = _this.close.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    /**
     * public / overridable methods 
     * user can pass functions for lifecycle hooks
     * or fall back to default 
     */

    _this.mounted = _this.props.mounted.bind(_assertThisInitialized(_assertThisInitialized(_this))) || _this.mounted.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.updated = _this.props.updated.bind(_assertThisInitialized(_assertThisInitialized(_this))) || _this.updated.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.unmounted = _this.props.unmounted.bind(_assertThisInitialized(_assertThisInitialized(_this))) || _this.unmounted.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Modalfy, [{
    key: "open",
    value: function open() {
      this.setState({
        open: true
      });
    }
  }, {
    key: "close",
    value: function close() {
      this.setState({
        open: false
      });
    }
  }, {
    key: "mounted",
    value: function mounted() {// console.log('Mounted function default')
    }
  }, {
    key: "updated",
    value: function updated() {// console.log('Updated function default')
    }
  }, {
    key: "unmounted",
    value: function unmounted() {// console.log('Unmounted function default')
    }
  }, {
    key: "renderModal",
    value: function renderModal(open, id) {
      return _react.default.createElement(_modal.default, {
        id: id,
        open: open,
        close: this.close,
        updated: this.updated,
        mounted: this.mounted,
        unmounted: this.unmounted
      });
    }
  }, {
    key: "render",
    value: function render() {
      var open = this.state.open;
      var id = this.props.id;
      return _react.default.createElement("div", null, open ? this.renderModal(open, id) : null, _react.default.createElement("button", {
        onClick: this.open
      }, "open"));
    }
  }]);

  return Modalfy;
}(_react.default.Component);

exports.default = Modalfy;