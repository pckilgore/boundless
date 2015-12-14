"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _defineProperty(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!=typeof r&&"function"!=typeof r?e:r}function _inherits(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}var _extends=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},_createClass=function(){function e(e,r){for(var t=0;t<r.length;t++){var s=r[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(r,t,s){return t&&e(r.prototype,t),s&&e(r,s),r}}();Object.defineProperty(exports,"__esModule",{value:!0});var _react=require("react"),_react2=_interopRequireDefault(_react),_UIButton=require("../UIButton"),_UIButton2=_interopRequireDefault(_UIButton),_UIView2=require("../UIView"),_UIView3=_interopRequireDefault(_UIView2),_classnames=require("classnames"),_classnames2=_interopRequireDefault(_classnames),UIProgress=function(e){function r(){return _classCallCheck(this,r),_possibleConstructorReturn(this,Object.getPrototypeOf(r).apply(this,arguments))}return _inherits(r,e),_createClass(r,[{key:"renderLabel",value:function(){return this.props.label?_react2.default.createElement("div",_extends({},this.props.labelProps,{ref:"label",className:(0,_classnames2.default)(_defineProperty({"ui-progress-label":!0},this.props.labelProps.className,!!this.props.labelProps.className))}),this.props.label):void 0}},{key:"renderCancel",value:function(){return this.props.onCancel?_react2.default.createElement(_UIButton2.default,_extends({},this.props.cancelProps,{ref:"cancel",className:(0,_classnames2.default)(_defineProperty({"ui-progress-cancel":!0},this.props.cancelProps.className,!!this.props.cancelProps.className)),onClick:this.props.onCancel})):void 0}},{key:"renderProgress",value:function(){return _react2.default.createElement("div",_extends({},this.props.progressProps,{ref:"progress",className:(0,_classnames2.default)(_defineProperty({"ui-progress":!0,"ui-progress-indeterminate":"undefined"==typeof this.props.progress},this.props.progressProps.className,!!this.props.progressProps.className)),role:"presentation",style:_extends({},this.props.progressProps.style,_defineProperty({},this.props.tweenProperty,this.props.progress))}))}},{key:"render",value:function(){return _react2.default.createElement("div",_extends({},this.props,{ref:"wrapper",className:(0,_classnames2.default)(_defineProperty({"ui-progress-wrapper":!0},this.props.className,!!this.props.className))}),this.renderProgress(),this.renderLabel(),this.renderCancel())}}]),r}(_UIView3.default);UIProgress.defaultProps={cancelProps:{},labelProps:{},progressProps:{},tweenProperty:"width"},UIProgress.propTypes={cancelProps:_react2.default.PropTypes.object,label:_react2.default.PropTypes.node,labelProps:_react2.default.PropTypes.object,onCancel:_react2.default.PropTypes.func,progress:_react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string,_react2.default.PropTypes.number]),progressProps:_react2.default.PropTypes.object,tweenProperty:_react2.default.PropTypes.string},exports.default=UIProgress;