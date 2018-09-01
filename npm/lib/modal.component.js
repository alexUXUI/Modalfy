"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Modal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal(props) {
    var _this;

    _classCallCheck(this, Modal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Modal).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderTitle", function (id) {
      return _react.default.createElement("h1", {
        className: "modal__title"
      }, "Modal: ", id);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderCloseButton", function (close) {
      return _react.default.createElement("button", {
        onClick: close,
        className: "close__button"
      }, "close");
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderContent", function (content) {
      return _react.default.createElement("span", null, content);
    });

    _this.state = {
      open: false,
      loading: false
    };
    return _this;
  }

  _createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.mounted();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.props.updated();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.unmounted();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          close = _this$props.close,
          id = _this$props.id,
          content = _this$props.content;
      var showHideClassName = this.props.open ? "modal display-block" : "modal display-none";
      return _react.default.createElement("div", null, _react.default.createElement("div", {
        className: showHideClassName
      }, _react.default.createElement("section", {
        className: "modal-main"
      }, this.state.loading ? 'loading...' : _react.default.createElement("div", null, this.renderTitle(id), this.renderContent(content), this.renderCloseButton(close)))));
    }
  }]);

  return Modal;
}(_react.default.Component);

var _default = Modal;
exports.default = _default;