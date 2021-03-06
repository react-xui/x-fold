'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Panel = require('./Panel');

var _Panel2 = _interopRequireDefault(_Panel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created with Visual Studio Code.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * github: https://github.com/React-xui/x-fold
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * User: 田想兵
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Date: 2017-05-14
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Time: 20:00:00
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Contact: 55342775@qq.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Fold = function (_Component) {
  _inherits(Fold, _Component);

  function Fold(props) {
    _classCallCheck(this, Fold);

    var _this = _possibleConstructorReturn(this, (Fold.__proto__ || Object.getPrototypeOf(Fold)).call(this, props));

    _initialiseProps.call(_this);

    var active = props.defaultActive;
    _this.state = { active: active };
    return _this;
  }

  _createClass(Fold, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newprops) {
      if (typeof newprops.active !== 'undefined' && newprops.active != this.state.active) {
        this.setState({ active: newprops.active });
      }
    }
  }, {
    key: 'formatTabs',
    value: function formatTabs() {
      var _this2 = this;

      // console.log(React.Children)
      var headers = [];
      var contents = [];
      var active = this.state.active;
      var forceRender = this.props.forceRender;

      _react2.default.Children.forEach(this.props.children, function (item, k) {
        if (item && item.type === _Panel2.default) {
          var _item$props = item.props,
              children = _item$props.children,
              tab = _item$props.tab,
              locale = _item$props.locale;

          var cls = 'x-fold-header-item',
              clsCon = 'x-fold-item';
          var key = item.key;

          var isShow = true;
          if (active.indexOf(key) > -1) {
            cls += " active";
            clsCon += " active";
          }
          if (locale) {
            tab = locale[tab] || tab;
          }
          headers.push(_react2.default.createElement(
            'div',
            { key: key, className: cls },
            _react2.default.createElement(
              'div',
              { className: 'fold-title', onMouseEnter: _this2.onMouseEnter, onClick: _this2.onSelect.bind(_this2, key, 'header') },
              _react2.default.createElement(
                'i',
                { className: 'fold-title-icon', onClick: _this2.onSelect.bind(_this2, key, 'icon') },
                _react2.default.createElement(
                  'svg',
                  { viewBox: '64 64 896 896', 'data-icon': 'right', width: '1em', height: '1em', fill: 'currentColor', 'aria-hidden': 'true' },
                  _react2.default.createElement('path', { d: 'M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z' })
                )
              ),
              tab
            ),
            _react2.default.createElement(
              'div',
              { className: clsCon },
              _react2.default.cloneElement(item)
            )
          ));
        }
      });
      return _react2.default.createElement(
        'div',
        null,
        headers
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var className = this.props.className;

      var cls = typeof className === 'undefined' ? "x-fold" : className + ' x-fold';
      return _react2.default.createElement(
        'div',
        { className: cls },
        this.formatTabs()
      );
    }
  }]);

  return Fold;
}(_react.Component);

Fold.propTypes = {
  handle: _propTypes2.default.string
};
Fold.defaultProps = {
  handle: 'header'
};
Fold.Panel = _Panel2.default;

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.onMouseEnter = function (e) {
    if (_this3.props.handle === 'header') {
      e.currentTarget.style.cursor = 'pointer';
    }
  };

  this.onSelect = function (key, eventHandle, e) {
    if (_this3.props.handle === eventHandle) {
      var active = _this3.state.active;

      var index = active.indexOf(key);
      if (index > -1) {
        active.splice(index, 1);
      } else {
        active.push(key);
      }
      _this3.setState({ active: active }, function () {
        _this3.props.onChange && _this3.props.onChange(key);
      });
    }
  };
};

exports.default = Fold;