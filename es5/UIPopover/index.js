"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _defineProperty(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},_createClass=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}();Object.defineProperty(exports,"__esModule",{value:!0});var _react=require("react"),_react2=_interopRequireDefault(_react),_reactDom=require("react-dom"),_reactDom2=_interopRequireDefault(_reactDom),_UIDialog=require("../UIDialog"),_UIDialog2=_interopRequireDefault(_UIDialog),_UIView2=require("../UIView"),_UIView3=_interopRequireDefault(_UIView2),_transform=require("../UIUtils/transform"),_transform2=_interopRequireDefault(_transform),_classnames=require("classnames"),_classnames2=_interopRequireDefault(_classnames),UIPopover=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,Object.getPrototypeOf(t).apply(this,arguments))}return _inherits(t,e),_createClass(t,[{key:"initialState",value:function(){return{anchorXAlign:this.props.anchorXAlign,anchorYAlign:this.props.anchorYAlign,selfXAlign:this.props.selfXAlign,selfYAlign:this.props.selfYAlign}}},{key:"componentWillMount",value:function(){document.body.appendChild(this.container=document.createElement("div")),this.refs={},this.refs.dialog=this.renderDialog(),this.node=_reactDom2.default.findDOMNode(this.refs.dialog),this.align=this.align.bind(this),this.align(),window.addEventListener("resize",this.align,!0)}},{key:"componentDidUpdate",value:function(){this.renderDialog(),this.align()}},{key:"componentWillUnmount",value:function(){_reactDom2.default.unmountComponentAtNode(this.container),document.body.removeChild(this.container),window.removeEventListener("resize",this.align,!0)}},{key:"getNextXPosition",value:function(e,o){var n=this.state,i=t.position,r=e.getBoundingClientRect().left+document.body.scrollLeft;switch(n.anchorXAlign){case i.MIDDLE:r+=e.offsetWidth/2;break;case i.END:r+=e.offsetWidth}switch(n.selfXAlign){case i.MIDDLE:r-=o.clientWidth/2;break;case i.END:r-=o.clientWidth}return r}},{key:"getNextYPosition",value:function(e,o){var n=this.state,i=t.position,r=e.getBoundingClientRect().top+document.body.scrollTop,s=e.offsetHeight,a=r+s;switch(n.anchorYAlign){case i.START:a=r;break;case i.MIDDLE:a=r+s/2}switch(n.selfYAlign){case i.MIDDLE:a-=o.clientHeight/2;break;case i.END:a-=o.clientHeight}return a}},{key:"getAlignmentCorrectionIfOverflowing",value:function(e,o,n){if(!this.props.autoReposition)return!1;var i={},r=e.clientWidth,s=e.clientHeight,a=document.body.scrollWidth,l=document.body.scrollHeight;return o+r>a?(i.anchorXAlign=t.position.END,i.selfXAlign=t.position.END):0>o?(i.anchorXAlign=t.position.START,i.selfXAlign=t.position.START):n+s>l?(i.anchorYAlign=t.position.START,i.selfYAlign=t.position.END):0>n&&(i.anchorYAlign=t.position.END,i.anchorXAlign=t.position.MIDDLE,i.selfYAlign=t.position.START,i.selfXAlign=t.position.MIDDLE),i}},{key:"applyTranslation",value:function(e,t,o){_transform2.default?e.style[_transform2.default]="translate("+t+"px, "+o+"px)":(e.style.left=t+"px",e.style.top=o+"px")}},{key:"align",value:function(){var e=this,t=this.props.anchor instanceof HTMLElement?this.props.anchor:_reactDom2.default.findDOMNode(this.props.anchor),o=this.getNextXPosition(t,this.node),n=this.getNextYPosition(t,this.node),i=this.getAlignmentCorrectionIfOverflowing(this.node,o,n);return i&&Object.keys(i).length?this.setState(i,function(){return e.componentDidUpdate()}):void this.applyTranslation(this.node,o,n)}},{key:"getClassAlignmentFragment",value:function(e){var o=t.position;switch(e){case o.START:return"start";case o.MIDDLE:return"middle";case o.END:return"end"}}},{key:"renderDialog",value:function(){var e,t=this.state,o=this.getClassAlignmentFragment;return _reactDom2.default.render(_react2.default.createElement(_UIDialog2.default,_extends({},this.props,{captureFocus:!1,className:(0,_classnames2.default)((e={"ui-popover":!0},_defineProperty(e,"ui-popover-anchor-x-"+o(t.anchorXAlign),!0),_defineProperty(e,"ui-popover-anchor-y-"+o(t.anchorYAlign),!0),_defineProperty(e,"ui-popover-self-x-"+o(t.selfXAlign),!0),_defineProperty(e,"ui-popover-self-y-"+o(t.selfYAlign),!0),_defineProperty(e,this.props.className,!!this.props.className),e)),style:_extends({},this.props.style,{position:"absolute",top:"0px",left:"0px"})})),this.container)}},{key:"render",value:function(){return _react2.default.createElement("div",null)}}]),t}(_UIView3.default);UIPopover.position={START:"START",MIDDLE:"MIDDLE",END:"END"},UIPopover.propTypes=_extends({},_UIDialog2.default.propTypes,{anchor:_react2.default.PropTypes.oneOfType([_react2.default.PropTypes.instanceOf(HTMLElement),_react2.default.PropTypes.shape({props:_react2.default.PropTypes.object,state:_react2.default.PropTypes.object})]).isRequired,anchorXAlign:_react2.default.PropTypes.oneOf([UIPopover.position.START,UIPopover.position.MIDDLE,UIPopover.position.END]),anchorYAlign:_react2.default.PropTypes.oneOf([UIPopover.position.START,UIPopover.position.MIDDLE,UIPopover.position.END]),autoReposition:_react2.default.PropTypes.bool,selfXAlign:_react2.default.PropTypes.oneOf([UIPopover.position.START,UIPopover.position.MIDDLE,UIPopover.position.END]),selfYAlign:_react2.default.PropTypes.oneOf([UIPopover.position.START,UIPopover.position.MIDDLE,UIPopover.position.END])}),UIPopover.defaultProps=_extends({},_UIDialog2.default.defaultProps,{anchorXAlign:UIPopover.position.START,anchorYAlign:UIPopover.position.END,autoReposition:!0,selfXAlign:UIPopover.position.START,selfYAlign:UIPopover.position.START}),exports.default=UIPopover;