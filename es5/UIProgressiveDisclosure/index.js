"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},_createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();Object.defineProperty(exports,"__esModule",{value:!0});var _react=require("react"),_react2=_interopRequireDefault(_react),_UIView2=require("../UIView"),_UIView3=_interopRequireDefault(_UIView2),_classnames=require("classnames"),_classnames2=_interopRequireDefault(_classnames),_noop=require("../UIUtils/noop"),_noop2=_interopRequireDefault(_noop),UIProgressiveDisclosure=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,Object.getPrototypeOf(t).apply(this,arguments))}return _inherits(t,e),_createClass(t,[{key:"initialState",value:function(){return{expanded:this.props.expanded}}},{key:"dispatchCallback",value:function(){this.props[this.state.expanded?"onExpand":"onHide"]()}},{key:"componentWillReceiveProps",value:function(e){var t=this;e.expanded!==this.props.expanded&&this.setState({expanded:e.expanded},function(){return t.dispatchCallback()})}},{key:"handleClick",value:function(){var e=this;this.setState({expanded:!this.state.expanded},function(){return e.dispatchCallback()}),"function"==typeof this.props.toggleProps.onClick&&(event.persist(),this.props.toggleProps.onClick(event))}},{key:"handleKeyDown",value:function(e){var t=this;switch(e.key){case"Enter":e.preventDefault(),this.setState({expanded:!this.state.expanded},function(){return t.dispatchCallback()})}"function"==typeof this.props.toggleProps.onKeyDown&&(e.persist(),this.props.toggleProps.onKeyDown(e))}},{key:"render",value:function(){return _react2.default.createElement("div",_extends({},this.props,{ref:"wrapper",className:(0,_classnames2.default)(_defineProperty({"ui-disclosure":!0,"ui-disclosure-expanded":this.state.expanded},this.props.className,!!this.props.className))}),_react2.default.createElement("div",_extends({},this.props.toggleProps,{ref:"toggle",className:(0,_classnames2.default)(_defineProperty({"ui-disclosure-toggle":!0},this.props.toggleProps.className,!!this.props.toggleProps.className)),onClick:this.handleClick.bind(this),onKeyDown:this.handleKeyDown.bind(this),tabIndex:"0"}),this.props.teaser),_react2.default.createElement("div",{ref:"content",className:"ui-disclosure-content"},this.props.children))}}]),t}(_UIView3.default);exports.default=UIProgressiveDisclosure,UIProgressiveDisclosure.propTypes={children:_react2.default.PropTypes.node,expanded:_react2.default.PropTypes.bool,onExpand:_react2.default.PropTypes.func,onHide:_react2.default.PropTypes.func,teaser:_react2.default.PropTypes.node,toggleProps:_react2.default.PropTypes.object},UIProgressiveDisclosure.defaultProps={expanded:!1,onExpand:_noop2.default,onHide:_noop2.default,toggleProps:{}},exports.default=UIProgressiveDisclosure;