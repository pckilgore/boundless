module.exports=function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};return e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=4)}([function(t,e){t.exports=require("boundless-utils-omit-keys")},function(t,e){t.exports=require("boundless-utils-uuid")},function(t,e){t.exports=require("classnames")},function(t,e){t.exports=require("react")},function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=r(3),u=r.n(a),i=r(2),l=r.n(i),c=r(0),p=r.n(c),f=r(1),d=r.n(f),y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},h=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),b=function(t){function e(){var t,r,s,a;n(this,e);for(var u=arguments.length,i=Array(u),l=0;l<u;l++)i[l]=arguments[l];return r=s=o(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(i))),s.state={status:e.status.LOADING},a=r,o(s,a)}return s(e,t),h(e,[{key:"componentWillReceiveProps",value:function(t){t.src!==this.props.src&&(this.resetPreloader(),this.setState({status:e.status.LOADING}))}},{key:"componentDidMount",value:function(){this.preload()}},{key:"componentDidUpdate",value:function(){this.preload()}},{key:"componentWillUnmount",value:function(){this.resetPreloader()}},{key:"resetPreloader",value:function(){this.loader.onload=null,this.loader.onerror=null,this.loader=null}},{key:"preload",value:function(){var t=this;this.loader||(this.loader=document.createElement("img"),this.loader.onload=function(){return t.setState({status:e.status.LOADED})},this.loader.onerror=function(){return t.setState({status:e.status.ERROR})},this.loader.src=this.props.src)}},{key:"render",value:function(){return u.a.createElement(this.props.component,y({},p()(this.props,e.internalKeys),{className:l()("b-image",this.props.className,{"b-image-loading":this.state.status===e.status.LOADING,"b-image-loaded":this.state.status===e.status.LOADED,"b-image-error":this.state.status===e.status.ERROR}),title:this.props.alt,role:"img",style:y({},this.props.style,{backgroundImage:"url("+this.props.src+")"})})," ")}}]),e}(u.a.PureComponent);b.status={LOADING:d()(),LOADED:d()(),ERROR:d()()},b.propTypes={"*":a.PropTypes.any,alt:a.PropTypes.string,component:a.PropTypes.string,src:a.PropTypes.string.isRequired},b.defaultProps={alt:"",component:"div",src:"about:blank"},b.internalKeys=Object.keys(b.defaultProps),e.default=b}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIGYyNmRiMzAxNTJhMmJiMTVhOTRmIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJjb21tb25qczJcIjpcImJvdW5kbGVzcy11dGlscy1vbWl0LWtleXNcIn0iLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcImNvbW1vbmpzMlwiOlwiYm91bmRsZXNzLXV0aWxzLXV1aWRcIn0iLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcImNvbW1vbmpzMlwiOlwiY2xhc3NuYW1lc1wifSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wiY29tbW9uanMyXCI6XCJyZWFjdFwifSIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9ib3VuZGxlc3MtaW1hZ2UvaW5kZXguanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsIm1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJpbnN0YWxsZWRNb2R1bGVzIiwiaSIsImwiLCJjYWxsIiwibSIsImMiLCJ2YWx1ZSIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsImdldCIsIm4iLCJfX2VzTW9kdWxlIiwib2JqZWN0IiwicHJvcGVydHkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwicmVxdWlyZSIsIl9fd2VicGFja19leHBvcnRzX18iLCJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiVHlwZUVycm9yIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4iLCJzZWxmIiwiUmVmZXJlbmNlRXJyb3IiLCJfaW5oZXJpdHMiLCJzdWJDbGFzcyIsInN1cGVyQ2xhc3MiLCJjcmVhdGUiLCJjb25zdHJ1Y3RvciIsIndyaXRhYmxlIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcmVhY3RfXyIsIl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9yZWFjdF9fX2RlZmF1bHQiLCJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfY2xhc3NuYW1lc19fIiwiX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX2NsYXNzbmFtZXNfX19kZWZhdWx0IiwiX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX2JvdW5kbGVzc191dGlsc19vbWl0X2tleXNfXyIsIl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9ib3VuZGxlc3NfdXRpbHNfb21pdF9rZXlzX19fZGVmYXVsdCIsIl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19ib3VuZGxlc3NfdXRpbHNfdXVpZF9fIiwiX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX2JvdW5kbGVzc191dGlsc191dWlkX19fZGVmYXVsdCIsIl9leHRlbmRzIiwiYXNzaWduIiwidGFyZ2V0IiwiYXJndW1lbnRzIiwibGVuZ3RoIiwic291cmNlIiwia2V5IiwiX2NyZWF0ZUNsYXNzIiwiZGVmaW5lUHJvcGVydGllcyIsInByb3BzIiwiZGVzY3JpcHRvciIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsIkltYWdlIiwiX1JlYWN0JFB1cmVDb21wb25lbnQiLCJfcmVmIiwiX3RlbXAiLCJfdGhpcyIsIl9yZXQiLCJ0aGlzIiwiX2xlbiIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJnZXRQcm90b3R5cGVPZiIsImFwcGx5IiwiY29uY2F0Iiwic3RhdGUiLCJzdGF0dXMiLCJMT0FESU5HIiwibmV4dFByb3BzIiwic3JjIiwicmVzZXRQcmVsb2FkZXIiLCJzZXRTdGF0ZSIsInByZWxvYWQiLCJsb2FkZXIiLCJvbmxvYWQiLCJvbmVycm9yIiwiX3RoaXMyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiTE9BREVEIiwiRVJST1IiLCJhIiwiY29tcG9uZW50IiwiaW50ZXJuYWxLZXlzIiwiY2xhc3NOYW1lIiwiYi1pbWFnZS1sb2FkaW5nIiwiYi1pbWFnZS1sb2FkZWQiLCJiLWltYWdlLWVycm9yIiwidGl0bGUiLCJhbHQiLCJyb2xlIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJQdXJlQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiKiIsImFueSIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJkZWZhdWx0UHJvcHMiLCJrZXlzIl0sIm1hcHBpbmdzIjoiQUFBQUEsT0FBT0MsUUFDRSxTQUFVQyxHQ0duQixRQUFBQyxHQUFBQyxHQUdBLEdBQUFDLEVBQUFELEdBQ0EsTUFBQUMsR0FBQUQsR0FBQUgsT0FHQSxJQUFBRCxHQUFBSyxFQUFBRCxJQUNBRSxFQUFBRixFQUNBRyxHQUFBLEVBQ0FOLFdBVUEsT0FOQUMsR0FBQUUsR0FBQUksS0FBQVIsRUFBQUMsUUFBQUQsSUFBQUMsUUFBQUUsR0FHQUgsRUFBQU8sR0FBQSxFQUdBUCxFQUFBQyxRQXZCQSxHQUFBSSxLQStEQSxPQW5DQUYsR0FBQU0sRUFBQVAsRUFHQUMsRUFBQU8sRUFBQUwsRUFHQUYsRUFBQUcsRUFBQSxTQUFBSyxHQUEyQyxNQUFBQSxJQUczQ1IsRUFBQVMsRUFBQSxTQUFBWCxFQUFBWSxFQUFBQyxHQUNBWCxFQUFBWSxFQUFBZCxFQUFBWSxJQUNBRyxPQUFBQyxlQUFBaEIsRUFBQVksR0FDQUssY0FBQSxFQUNBQyxZQUFBLEVBQ0FDLElBQUFOLEtBTUFYLEVBQUFrQixFQUFBLFNBQUFyQixHQUNBLEdBQUFjLEdBQUFkLEtBQUFzQixXQUNBLFdBQTJCLE1BQUF0QixHQUFBLFNBQzNCLFdBQWlDLE1BQUFBLEdBRWpDLE9BREFHLEdBQUFTLEVBQUFFLEVBQUEsSUFBQUEsR0FDQUEsR0FJQVgsRUFBQVksRUFBQSxTQUFBUSxFQUFBQyxHQUFzRCxNQUFBUixRQUFBUyxVQUFBQyxlQUFBbEIsS0FBQWUsRUFBQUMsSUFHdERyQixFQUFBd0IsRUFBQSxHQUdBeEIsSUFBQXlCLEVBQUEsS0RPTSxTQUFVNUIsRUFBUUMsR0V2RXhCRCxFQUFBQyxRQUFBNEIsUUFB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USxNQUFNQyxTQUFXZixFQUFNZSxPQUFPYyxRQUV4RFEsTUFBTy9CLEtBQUtWLE1BQU0wQyxJQUNsQkMsS0FBSyxNQUNMQyxNQUFBckQsS0FDT21CLEtBQUtWLE1BQU00QyxPQUNkQyx1QkFBd0JuQyxLQUFLVixNQUFNc0IsSUFBbkMsUUFYUixTTjJCNC9HbEIsR01sR3IrR3BCLEVBQUFrRCxFQUFNWSxjQUFwQjFDLEdBQ1ZlLFFBQ0hDLFFBQVM5QixNQUNUMEMsT0FBUTFDLE1BQ1IyQyxNQUFPM0MsT0FKTWMsRUFPVjJDLFdBSUhDLElBQUtqRSxFQUFBLFVBQVVrRSxJQUtmUCxJQUFLM0QsRUFBQSxVQUFVbUUsT0FLZmYsVUFBV3BELEVBQUEsVUFBVW1FLE9BS3JCNUIsSUFBS3ZDLEVBQUEsVUFBVW1FLE9BQU9DLFlBMUJUL0MsRUE2QlZnRCxjQUNIVixJQUFLLEdBQ0xQLFVBQVcsTUFDWGIsSUFBSyxlQWhDUWxCLEVBbUNWZ0MsYUFBZW5GLE9BQU9vRyxLQUFLakQsRUFBTWdELGNOK0RncUlyRixFQUE2QixRTWxHcHRJcUMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9XG4vKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4vKioqKioqLyBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4vKioqKioqLyBcdFx0XHRcdGdldDogZ2V0dGVyXG4vKioqKioqLyBcdFx0XHR9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvdW5kbGVzcy11dGlscy1vbWl0LWtleXNcIik7XG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib3VuZGxlc3MtdXRpbHMtdXVpZFwiKTtcblxuLyoqKi8gfSksXG4vKiAyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzbmFtZXNcIik7XG5cbi8qKiovIH0pLFxuLyogMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxuLyoqKi8gfSksXG4vKiA0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KF9fd2VicGFja19leHBvcnRzX18sIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9yZWFjdF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcmVhY3RfX19kZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5uKF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9yZWFjdF9fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfY2xhc3NuYW1lc19fID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfY2xhc3NuYW1lc19fX2RlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm4oX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX2NsYXNzbmFtZXNfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX2JvdW5kbGVzc191dGlsc19vbWl0X2tleXNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX2JvdW5kbGVzc191dGlsc19vbWl0X2tleXNfX19kZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5uKF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9ib3VuZGxlc3NfdXRpbHNfb21pdF9rZXlzX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19ib3VuZGxlc3NfdXRpbHNfdXVpZF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfYm91bmRsZXNzX3V0aWxzX3V1aWRfX19kZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5uKF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19ib3VuZGxlc3NfdXRpbHNfdXVpZF9fKTtcbnZhciBfZXh0ZW5kcz1PYmplY3QuYXNzaWdufHxmdW5jdGlvbih0YXJnZXQpe2Zvcih2YXIgaT0xO2k8YXJndW1lbnRzLmxlbmd0aDtpKyspe3ZhciBzb3VyY2U9YXJndW1lbnRzW2ldO2Zvcih2YXIga2V5IGluIHNvdXJjZSl7aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSxrZXkpKXt0YXJnZXRba2V5XT1zb3VyY2Vba2V5XTt9fX1yZXR1cm4gdGFyZ2V0O307dmFyIF9jcmVhdGVDbGFzcz1mdW5jdGlvbigpe2Z1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LHByb3BzKXtmb3IodmFyIGk9MDtpPHByb3BzLmxlbmd0aDtpKyspe3ZhciBkZXNjcmlwdG9yPXByb3BzW2ldO2Rlc2NyaXB0b3IuZW51bWVyYWJsZT1kZXNjcmlwdG9yLmVudW1lcmFibGV8fGZhbHNlO2Rlc2NyaXB0b3IuY29uZmlndXJhYmxlPXRydWU7aWYoXCJ2YWx1ZVwiaW4gZGVzY3JpcHRvcilkZXNjcmlwdG9yLndyaXRhYmxlPXRydWU7T2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCxkZXNjcmlwdG9yLmtleSxkZXNjcmlwdG9yKTt9fXJldHVybiBmdW5jdGlvbihDb25zdHJ1Y3Rvcixwcm90b1Byb3BzLHN0YXRpY1Byb3BzKXtpZihwcm90b1Byb3BzKWRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLHByb3RvUHJvcHMpO2lmKHN0YXRpY1Byb3BzKWRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3Isc3RhdGljUHJvcHMpO3JldHVybiBDb25zdHJ1Y3Rvcjt9O30oKTtmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsQ29uc3RydWN0b3Ipe2lmKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3Rvcikpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7fX1mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLGNhbGwpe2lmKCFzZWxmKXt0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7fXJldHVybiBjYWxsJiYodHlwZW9mIGNhbGw9PT1cIm9iamVjdFwifHx0eXBlb2YgY2FsbD09PVwiZnVuY3Rpb25cIik/Y2FsbDpzZWxmO31mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3Msc3VwZXJDbGFzcyl7aWYodHlwZW9mIHN1cGVyQ2xhc3MhPT1cImZ1bmN0aW9uXCImJnN1cGVyQ2xhc3MhPT1udWxsKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIit0eXBlb2Ygc3VwZXJDbGFzcyk7fXN1YkNsYXNzLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MmJnN1cGVyQ2xhc3MucHJvdG90eXBlLHtjb25zdHJ1Y3Rvcjp7dmFsdWU6c3ViQ2xhc3MsZW51bWVyYWJsZTpmYWxzZSx3cml0YWJsZTp0cnVlLGNvbmZpZ3VyYWJsZTp0cnVlfX0pO2lmKHN1cGVyQ2xhc3MpT2JqZWN0LnNldFByb3RvdHlwZU9mP09iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcyxzdXBlckNsYXNzKTpzdWJDbGFzcy5fX3Byb3RvX189c3VwZXJDbGFzczt9dmFyIEltYWdlPWZ1bmN0aW9uKF9SZWFjdCRQdXJlQ29tcG9uZW50KXtfaW5oZXJpdHMoSW1hZ2UsX1JlYWN0JFB1cmVDb21wb25lbnQpO2Z1bmN0aW9uIEltYWdlKCl7dmFyIF9yZWY7dmFyIF90ZW1wLF90aGlzLF9yZXQ7X2NsYXNzQ2FsbENoZWNrKHRoaXMsSW1hZ2UpO2Zvcih2YXIgX2xlbj1hcmd1bWVudHMubGVuZ3RoLGFyZ3M9QXJyYXkoX2xlbiksX2tleT0wO19rZXk8X2xlbjtfa2V5Kyspe2FyZ3NbX2tleV09YXJndW1lbnRzW19rZXldO31yZXR1cm4gX3JldD0oX3RlbXA9KF90aGlzPV9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsKF9yZWY9SW1hZ2UuX19wcm90b19ffHxPYmplY3QuZ2V0UHJvdG90eXBlT2YoSW1hZ2UpKS5jYWxsLmFwcGx5KF9yZWYsW3RoaXNdLmNvbmNhdChhcmdzKSkpLF90aGlzKSxfdGhpcy5zdGF0ZT17c3RhdHVzOkltYWdlLnN0YXR1cy5MT0FESU5HfSxfdGVtcCksX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsX3JldCk7fV9jcmVhdGVDbGFzcyhJbWFnZSxbe2tleTonY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsdmFsdWU6ZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe2lmKG5leHRQcm9wcy5zcmMhPT10aGlzLnByb3BzLnNyYyl7dGhpcy5yZXNldFByZWxvYWRlcigpO3RoaXMuc2V0U3RhdGUoe3N0YXR1czpJbWFnZS5zdGF0dXMuTE9BRElOR30pO319fSx7a2V5Oidjb21wb25lbnREaWRNb3VudCcsdmFsdWU6ZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKXt0aGlzLnByZWxvYWQoKTt9fSx7a2V5Oidjb21wb25lbnREaWRVcGRhdGUnLHZhbHVlOmZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpe3RoaXMucHJlbG9hZCgpO319LHtrZXk6J2NvbXBvbmVudFdpbGxVbm1vdW50Jyx2YWx1ZTpmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpe3RoaXMucmVzZXRQcmVsb2FkZXIoKTt9fSx7a2V5OidyZXNldFByZWxvYWRlcicsdmFsdWU6ZnVuY3Rpb24gcmVzZXRQcmVsb2FkZXIoKXt0aGlzLmxvYWRlci5vbmxvYWQ9bnVsbDt0aGlzLmxvYWRlci5vbmVycm9yPW51bGw7dGhpcy5sb2FkZXI9bnVsbDt9fSx7a2V5OidwcmVsb2FkJyx2YWx1ZTpmdW5jdGlvbiBwcmVsb2FkKCl7dmFyIF90aGlzMj10aGlzO2lmKHRoaXMubG9hZGVyKXtyZXR1cm47fXRoaXMubG9hZGVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO3RoaXMubG9hZGVyLm9ubG9hZD1mdW5jdGlvbigpe3JldHVybiBfdGhpczIuc2V0U3RhdGUoe3N0YXR1czpJbWFnZS5zdGF0dXMuTE9BREVEfSk7fTt0aGlzLmxvYWRlci5vbmVycm9yPWZ1bmN0aW9uKCl7cmV0dXJuIF90aGlzMi5zZXRTdGF0ZSh7c3RhdHVzOkltYWdlLnN0YXR1cy5FUlJPUn0pO307dGhpcy5sb2FkZXIuc3JjPXRoaXMucHJvcHMuc3JjO319LHtrZXk6J3JlbmRlcicsdmFsdWU6ZnVuY3Rpb24gcmVuZGVyKCl7cmV0dXJuIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9yZWFjdF9fX2RlZmF1bHQuYS5jcmVhdGVFbGVtZW50KHRoaXMucHJvcHMuY29tcG9uZW50LF9leHRlbmRzKHt9LF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9ib3VuZGxlc3NfdXRpbHNfb21pdF9rZXlzX19fZGVmYXVsdCgpKHRoaXMucHJvcHMsSW1hZ2UuaW50ZXJuYWxLZXlzKSx7Y2xhc3NOYW1lOl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9jbGFzc25hbWVzX19fZGVmYXVsdCgpKCdiLWltYWdlJyx0aGlzLnByb3BzLmNsYXNzTmFtZSx7J2ItaW1hZ2UtbG9hZGluZyc6dGhpcy5zdGF0ZS5zdGF0dXM9PT1JbWFnZS5zdGF0dXMuTE9BRElORywnYi1pbWFnZS1sb2FkZWQnOnRoaXMuc3RhdGUuc3RhdHVzPT09SW1hZ2Uuc3RhdHVzLkxPQURFRCwnYi1pbWFnZS1lcnJvcic6dGhpcy5zdGF0ZS5zdGF0dXM9PT1JbWFnZS5zdGF0dXMuRVJST1J9KSx0aXRsZTp0aGlzLnByb3BzLmFsdCxyb2xlOidpbWcnLHN0eWxlOl9leHRlbmRzKHt9LHRoaXMucHJvcHMuc3R5bGUse2JhY2tncm91bmRJbWFnZTondXJsKCcrdGhpcy5wcm9wcy5zcmMrJyknfSl9KSwnXFx4QTAnKTt9fV0pO3JldHVybiBJbWFnZTt9KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9yZWFjdF9fX2RlZmF1bHQuYS5QdXJlQ29tcG9uZW50KTtJbWFnZS5zdGF0dXM9e0xPQURJTkc6X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX2JvdW5kbGVzc191dGlsc191dWlkX19fZGVmYXVsdCgpKCksTE9BREVEOl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19ib3VuZGxlc3NfdXRpbHNfdXVpZF9fX2RlZmF1bHQoKSgpLEVSUk9SOl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19ib3VuZGxlc3NfdXRpbHNfdXVpZF9fX2RlZmF1bHQoKSgpfTtJbWFnZS5wcm9wVHlwZXM9eycqJzpfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcmVhY3RfX1tcIlByb3BUeXBlc1wiXS5hbnksYWx0Ol9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9yZWFjdF9fW1wiUHJvcFR5cGVzXCJdLnN0cmluZyxjb21wb25lbnQ6X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3JlYWN0X19bXCJQcm9wVHlwZXNcIl0uc3RyaW5nLHNyYzpfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcmVhY3RfX1tcIlByb3BUeXBlc1wiXS5zdHJpbmcuaXNSZXF1aXJlZH07SW1hZ2UuZGVmYXVsdFByb3BzPXthbHQ6JycsY29tcG9uZW50OidkaXYnLHNyYzonYWJvdXQ6YmxhbmsnfTtJbWFnZS5pbnRlcm5hbEtleXM9T2JqZWN0LmtleXMoSW1hZ2UuZGVmYXVsdFByb3BzKTsvKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIF9fd2VicGFja19leHBvcnRzX19bXCJkZWZhdWx0XCJdID0gSW1hZ2U7XG5cbi8qKiovIH0pXG4vKioqKioqLyBdKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gaW5kZXguanMiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBmMjZkYjMwMTUyYTJiYjE1YTk0ZiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvdW5kbGVzcy11dGlscy1vbWl0LWtleXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wiY29tbW9uanMyXCI6XCJib3VuZGxlc3MtdXRpbHMtb21pdC1rZXlzXCJ9XG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvdW5kbGVzcy11dGlscy11dWlkXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcImNvbW1vbmpzMlwiOlwiYm91bmRsZXNzLXV0aWxzLXV1aWRcIn1cbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJjb21tb25qczJcIjpcImNsYXNzbmFtZXNcIn1cbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wiY29tbW9uanMyXCI6XCJyZWFjdFwifVxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXN9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcblxuaW1wb3J0IG9taXQgZnJvbSAnYm91bmRsZXNzLXV0aWxzLW9taXQta2V5cyc7XG5pbXBvcnQgdXVpZCBmcm9tICdib3VuZGxlc3MtdXRpbHMtdXVpZCc7XG5cbi8qKlxuX19BbiBpbWFnZSBibG9jayB3aXRoIHBsYWNlaG9sZGVyIHN1cHBvcnQgZm9yIGxvYWRpbmcgYW5kIGZhbGxiYWNrIHNjZW5hcmlvcy5fX1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICAgIHN0YXRpYyBzdGF0dXMgPSB7XG4gICAgICAgIExPQURJTkc6IHV1aWQoKSxcbiAgICAgICAgTE9BREVEOiB1dWlkKCksXG4gICAgICAgIEVSUk9SOiB1dWlkKCksXG4gICAgfVxuXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIGFueSBbUmVhY3Qtc3VwcG9ydGVkIGF0dHJpYnV0ZV0oaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvZG9jcy90YWdzLWFuZC1hdHRyaWJ1dGVzLmh0bWwjaHRtbC1hdHRyaWJ1dGVzKVxuICAgICAgICAgKi9cbiAgICAgICAgJyonOiBQcm9wVHlwZXMuYW55LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBhIHdyaXR0ZW4gZGVzY3JpcHRpb24gb2YgdGhlIGltYWdlIGZvciBzZWFyY2ggZW5naW5lcywgaG92ZXJ0ZXh0IGFuZCB0aG9zZSB1c2luZyBhY2Nlc3NpYmlsaXR5IHRlY2hub2xvZ2llc1xuICAgICAgICAgKi9cbiAgICAgICAgYWx0OiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBvdmVycmlkZXMgdGhlIGNvbXBvbmVudCBIVE1MIHRhZ1xuICAgICAgICAgKi9cbiAgICAgICAgY29tcG9uZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBhIHZhbGlkIHBhdGggdG8gdGhlIGRlc2lyZWQgaW1hZ2VcbiAgICAgICAgICovXG4gICAgICAgIHNyYzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIH1cblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGFsdDogJycsXG4gICAgICAgIGNvbXBvbmVudDogJ2RpdicsXG4gICAgICAgIHNyYzogJ2Fib3V0OmJsYW5rJyxcbiAgICB9XG5cbiAgICBzdGF0aWMgaW50ZXJuYWxLZXlzID0gT2JqZWN0LmtleXMoSW1hZ2UuZGVmYXVsdFByb3BzKVxuXG4gICAgc3RhdGUgPSB7XG4gICAgICAgIHN0YXR1czogSW1hZ2Uuc3RhdHVzLkxPQURJTkcsXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgaWYgKG5leHRQcm9wcy5zcmMgIT09IHRoaXMucHJvcHMuc3JjKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0UHJlbG9hZGVyKCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzdGF0dXM6IEltYWdlLnN0YXR1cy5MT0FESU5HfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpICAgICB7IHRoaXMucHJlbG9hZCgpOyB9XG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCkgICAgeyB0aGlzLnByZWxvYWQoKTsgfVxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkgIHsgdGhpcy5yZXNldFByZWxvYWRlcigpOyB9XG5cbiAgICByZXNldFByZWxvYWRlcigpIHtcbiAgICAgICAgdGhpcy5sb2FkZXIub25sb2FkID0gbnVsbDtcbiAgICAgICAgdGhpcy5sb2FkZXIub25lcnJvciA9IG51bGw7XG4gICAgICAgIHRoaXMubG9hZGVyID0gbnVsbDtcbiAgICB9XG5cbiAgICBwcmVsb2FkKCkge1xuICAgICAgICBpZiAodGhpcy5sb2FkZXIpIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgdGhpcy5sb2FkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgICAgICB0aGlzLmxvYWRlci5vbmxvYWQgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHtzdGF0dXM6IEltYWdlLnN0YXR1cy5MT0FERUR9KTtcbiAgICAgICAgdGhpcy5sb2FkZXIub25lcnJvciA9ICgpID0+IHRoaXMuc2V0U3RhdGUoe3N0YXR1czogSW1hZ2Uuc3RhdHVzLkVSUk9SfSk7XG5cbiAgICAgICAgdGhpcy5sb2FkZXIuc3JjID0gdGhpcy5wcm9wcy5zcmM7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHRoaXMucHJvcHMuY29tcG9uZW50XG4gICAgICAgICAgICAgICAgey4uLm9taXQodGhpcy5wcm9wcywgSW1hZ2UuaW50ZXJuYWxLZXlzKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KCdiLWltYWdlJywgdGhpcy5wcm9wcy5jbGFzc05hbWUsIHtcbiAgICAgICAgICAgICAgICAgICAgJ2ItaW1hZ2UtbG9hZGluZyc6IHRoaXMuc3RhdGUuc3RhdHVzID09PSBJbWFnZS5zdGF0dXMuTE9BRElORyxcbiAgICAgICAgICAgICAgICAgICAgJ2ItaW1hZ2UtbG9hZGVkJzogdGhpcy5zdGF0ZS5zdGF0dXMgPT09IEltYWdlLnN0YXR1cy5MT0FERUQsXG4gICAgICAgICAgICAgICAgICAgICdiLWltYWdlLWVycm9yJzogdGhpcy5zdGF0ZS5zdGF0dXMgPT09IEltYWdlLnN0YXR1cy5FUlJPUixcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICB0aXRsZT17dGhpcy5wcm9wcy5hbHR9XG4gICAgICAgICAgICAgICAgcm9sZT0naW1nJ1xuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMucHJvcHMuc3R5bGUsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke3RoaXMucHJvcHMuc3JjfSlgLFxuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgPC90aGlzLnByb3BzLmNvbXBvbmVudD5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9ib3VuZGxlc3MtaW1hZ2UvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9