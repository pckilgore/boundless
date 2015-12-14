"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},_createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var s=t[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,r,s){return r&&e(t.prototype,r),s&&e(t,s),t}}();Object.defineProperty(exports,"__esModule",{value:!0});var _react=require("react"),_react2=_interopRequireDefault(_react),_UIView2=require("../UIView"),_UIView3=_interopRequireDefault(_UIView2),_classnames=require("classnames"),_classnames2=_interopRequireDefault(_classnames),_noop=require("../UIUtils/noop"),_noop2=_interopRequireDefault(_noop),UIRadio=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,Object.getPrototypeOf(t).apply(this,arguments))}return _inherits(t,e),_createClass(t,[{key:"initialState",value:function(){return{id:this.props.inputProps.id||this.uuid()}}},{key:"handleChange",value:function(e){e.target.checked&&this.props.onSelected(e.target.value),"function"==typeof this.props.inputProps.onChange&&(e.persist(),this.props.inputProps.onChange(e))}},{key:"renderInput",value:function(){return _react2.default.createElement("input",_extends({},this.props.inputProps,{ref:"input",type:"radio",id:this.state.id,className:(0,_classnames2.default)(_defineProperty({"ui-radio":!0,"ui-radio-selected":this.props.selected},this.props.inputProps.className,!!this.props.inputProps.className)),name:this.props.name,value:this.props.value,checked:this.props.selected,"aria-checked":String(this.props.selected),onChange:this.handleChange.bind(this)}))}},{key:"renderLabel",value:function(){return this.props.label?_react2.default.createElement("label",_extends({},this.props.labelProps,{ref:"label",className:(0,_classnames2.default)(_defineProperty({"ui-radio-label":!0},this.props.labelProps.className,!!this.props.labelProps.className)),htmlFor:this.state.id}),this.props.label):void 0}},{key:"render",value:function(){return _react2.default.createElement("div",_extends({},this.props,{ref:"wrapper",className:(0,_classnames2.default)(_defineProperty({"ui-radio-wrapper":!0},this.props.className,!!this.props.className))}),this.renderInput(),this.renderLabel())}}]),t}(_UIView3.default);UIRadio.propTypes={inputProps:_react2.default.PropTypes.object,label:_react2.default.PropTypes.node,labelProps:_react2.default.PropTypes.object,name:_react2.default.PropTypes.string.isRequired,onSelected:_react2.default.PropTypes.func,selected:_react2.default.PropTypes.bool,value:_react2.default.PropTypes.string.isRequired},UIRadio.defaultProps={inputProps:{},labelProps:{},onSelected:_noop2.default,selected:!1},exports.default=UIRadio;