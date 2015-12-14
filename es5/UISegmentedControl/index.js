"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},_createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();Object.defineProperty(exports,"__esModule",{value:!0});var _UIView2=require("../UIView"),_UIView3=_interopRequireDefault(_UIView2),_UIButton=require("../UIButton"),_UIButton2=_interopRequireDefault(_UIButton),_react=require("react"),_react2=_interopRequireDefault(_react),_reactDom=require("react-dom"),_classnames=require("classnames"),_classnames2=_interopRequireDefault(_classnames),_noop=require("../UIUtils/noop"),_noop2=_interopRequireDefault(_noop),UISegmentedControl=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,Object.getPrototypeOf(t).apply(this,arguments))}return _inherits(t,e),_createClass(t,[{key:"currentValue",value:function(){var e=void 0;return this.props.options.some(function(t){return t.selected?(e=t.value,!0):void 0}),e}},{key:"setFocus",value:function(e){(0,_reactDom.findDOMNode)(this.refs["option_$"+e]).focus()}},{key:"getNextOptionIndex",value:function(e){var t=e+1;return t<this.props.options.length?t:0}},{key:"getPreviousOptionIndex",value:function(e){var t=e-1;return 0>t?this.props.options.length-1:t}},{key:"handleBlur",value:function(e,t){this.state.indexOfOptionInFocus===e&&this.setState({indexOfOptionInFocus:null}),"function"==typeof e.onBlur&&(t.persist(),e.onBlur(t))}},{key:"handleClick",value:function(e,t){this.props.onOptionSelected(e.value),"function"==typeof e.onClick&&(t.persist(),e.onClick(t))}},{key:"handleFocus",value:function(e,t){this.setState({indexOfOptionInFocus:this.props.options.indexOf(e)}),"function"==typeof e.onFocus&&(t.persist(),e.onFocus(t))}},{key:"handleKeyDown",value:function(e){var t=e.key,n=this.state.indexOfOptionInFocus;"ArrowLeft"===t?(this.setFocus(this.getPreviousOptionIndex(n)),e.preventDefault()):"ArrowRight"===t?(this.setFocus(this.getNextOptionIndex(n)),e.preventDefault()):"Enter"===t&&(this.handleClick(this.props.options[n]),e.preventDefault()),"function"==typeof this.props.onKeyDown&&(e.persist(),this.props.onKeyDown(e))}},{key:"renderOptions",value:function(){var e=this;return this.props.options.map(function(t,n){return _react2.default.createElement(_UIButton2.default,_extends({},t,{role:"radio","aria-checked":String(t.selected),ref:"option_$"+n,key:t.value,className:(0,_classnames2.default)(_defineProperty({"ui-segmented-control-option":!0,"ui-segmented-control-option-selected":t.selected},t.className,!!t.className)),tabIndex:t.selected?0:-1,onBlur:e.handleBlur.bind(e,t),onClick:e.handleClick.bind(e,t),onFocus:e.handleFocus.bind(e,t)}),t.content)})}},{key:"render",value:function(){return _react2.default.createElement("div",_extends({},this.props,{ref:"wrapper","aria-required":"radiogroup",className:(0,_classnames2.default)(_defineProperty({"ui-segmented-control":!0},this.props.className,!!this.props.className)),onKeyDown:this.handleKeyDown.bind(this)}),this.renderOptions())}}]),t}(_UIView3.default);UISegmentedControl.propTypes={onOptionSelected:_react2.default.PropTypes.func,options:function(e){if(e.options.length<2)return new Error("Must provide at least two options.");var t=e.options.some(function(e){return"selected"in e?void 0:!0});if(t)return new Error("Must provide a `selected` prop for each option.");var n=e.options.some(function(e){return"value"in e?void 0:!0});if(n)return new Error("Must provide a `value` prop for each option.");var o=!1,r=e.options.some(function(e){if(e.selected){if(o)return!0;o=!0}});return r?new Error("Encountered multiple options with `selected: true`. There can be only one."):void 0}},UISegmentedControl.defaultProps={options:[],onOptionSelected:_noop2.default},exports.default=UISegmentedControl;