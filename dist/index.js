'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _blacklist = require('blacklist');

var _blacklist2 = _interopRequireDefault(_blacklist);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VideoJs = function (_React$Component) {
    _inherits(VideoJs, _React$Component);

    function VideoJs() {
        _classCallCheck(this, VideoJs);

        return _possibleConstructorReturn(this, (VideoJs.__proto__ || Object.getPrototypeOf(VideoJs)).apply(this, arguments));
    }

    _createClass(VideoJs, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var self = this;
            var player = videojs(this.refs.video, this.props.options).ready(function () {
                self.player = this;
                self.player.on('play', self.handlePlay);
            });
            if (this.props.onPlayerInit) this.props.onPlayerInit(player);
        }
    }, {
        key: 'handlePlay',
        value: function handlePlay() {
            if (this.props.onPlay) this.props.onPlay(this.player);
        }
    }, {
        key: 'render',
        value: function render() {
            var props = (0, _blacklist2.default)(this.props, 'children', 'className', 'src', 'type', 'onPlay', 'onPlayerInit');
            props.className = (0, _classnames2.default)(this.props.className, 'videojs', 'video-js vjs-default-skin');

            (0, _objectAssign2.default)(props, {
                ref: 'video',
                controls: true
            });

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'video',
                    props,
                    _react2.default.createElement('source', { src: this.props.src, type: this.props.type })
                )
            );
        }
    }]);

    return VideoJs;
}(_react2.default.Component);

exports.default = VideoJs;