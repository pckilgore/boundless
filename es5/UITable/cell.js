"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();Object.defineProperty(exports,"__esModule",{value:!0});var _react=require("react"),_react2=_interopRequireDefault(_react),_UIView2=require("../UIView"),_UIView3=_interopRequireDefault(_UIView2),UITableCell=function(e){function t(){var e;_classCallCheck(this,t);for(var r=arguments.length,n=Array(r),o=0;r>o;o++)n[o]=arguments[o];var i=_possibleConstructorReturn(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(n)));return i.handleClick=i.handleClick.bind(i),i}return _inherits(t,e),_createClass(t,[{key:"shouldComponentUpdate",value:function(e){return e.content!==this.props.content||e.width!==this.props.width||e.row!==this.props.row}},{key:"handleClick",value:function(e){this.props.onInteract&&(e.persist(),this.props.onInteract(e,this.props.row,this.props.content))}},{key:"renderContent",value:function(){return"number"==typeof this.props.width?_react2.default.createElement("div",{className:"ui-table-cell-inner"},_react2.default.createElement("span",{className:"ui-table-cell-inner-text"},this.props.content)):this.props.content}},{key:"render",value:function(){return _react2.default.createElement("div",{className:"ui-table-cell",title:"string"==typeof this.props.content?this.props.content:null,style:{width:this.props.width?this.props.width+"px":null},onClick:this.handleClick},this.renderContent())}}]),t}(_UIView3.default);UITableCell.propTypes={content:_react2.default.PropTypes.node,width:_react2.default.PropTypes.number,onInteract:_react2.default.PropTypes.func,row:_react2.default.PropTypes.object},exports.default=UITableCell;