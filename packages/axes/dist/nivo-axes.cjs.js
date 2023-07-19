"use strict";var e=require("react"),t=require("@react-spring/web"),i=require("@nivo/core"),n=require("d3-time-format"),r=require("d3-format"),a=require("@nivo/scales"),o=require("react/jsx-runtime"),s=require("prop-types");function l(e){var t=Object.create(null);return e&&Object.keys(e).forEach((function(i){if("default"!==i){var n=Object.getOwnPropertyDescriptor(e,i);Object.defineProperty(t,i,n.get?n:{enumerable:!0,get:function(){return e[i]}})}})),t.default=e,Object.freeze(t)}var c=l(e);function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},u.apply(this,arguments)}var x=function(e){var t,n=e.axis,r=e.scale,o=e.ticksPosition,s=e.tickValues,l=e.tickSize,c=e.tickPadding,x=e.tickRotation,d=e.engine,f=void 0===d?"svg":d,m=a.getScaleTicks(r,s),y=i.textPropsByEngine[f],g="bandwidth"in r?a.centerScale(r):r,h={lineX:0,lineY:0},k={textX:0,textY:0},v="object"==typeof document&&"rtl"===document.dir,p=y.align.center,b=y.baseline.center;return"x"===n?(t=function(e){var t;return{x:null!=(t=g(e))?t:0,y:0}},h.lineY=l*("after"===o?1:-1),k.textY=(l+c)*("after"===o?1:-1),b="after"===o?y.baseline.top:y.baseline.bottom,0===x?p=y.align.center:"after"===o&&x<0||"before"===o&&x>0?(p=y.align[v?"left":"right"],b=y.baseline.center):("after"===o&&x>0||"before"===o&&x<0)&&(p=y.align[v?"right":"left"],b=y.baseline.center)):(t=function(e){var t;return{x:0,y:null!=(t=g(e))?t:0}},h.lineX=l*("after"===o?1:-1),k.textX=(l+c)*("after"===o?1:-1),p="after"===o?y.align.left:y.align.right),{ticks:m.map((function(e){return u({key:e instanceof Date?""+e.valueOf():""+e,value:e},t(e),h,k)})),textAlign:p,textBaseline:b}},d=function(e,t){if(void 0===e||"function"==typeof e)return e;if("time"===t.type){var i=n.timeFormat(e);return function(e){return i(e instanceof Date?e:new Date(e))}}return r.format(e)},f=function(e){var t,i=e.width,n=e.height,r=e.scale,o=e.axis,s=e.values,l=(t=s,Array.isArray(t)?s:void 0)||a.getScaleTicks(r,s),c="bandwidth"in r?a.centerScale(r):r,u="x"===o?l.map((function(e){var t,i;return{key:e instanceof Date?""+e.valueOf():""+e,x1:null!=(t=c(e))?t:0,x2:null!=(i=c(e))?i:0,y1:0,y2:n}})):l.map((function(e){var t,n;return{key:e instanceof Date?""+e.valueOf():""+e,x1:0,x2:i,y1:null!=(t=c(e))?t:0,y2:null!=(n=c(e))?n:0}}));return u},m=e.memo((function(n){var r,a=n.value,s=n.format,l=n.lineX,c=n.lineY,x=n.onClick,d=n.textBaseline,f=n.textAnchor,m=n.animatedProps,y=i.useTheme(),g=y.axis.ticks.line,h=y.axis.ticks.text,k=null!=(r=null==s?void 0:s(a))?r:a,v=e.useMemo((function(){var e={opacity:m.opacity};return x?{style:u({},e,{cursor:"pointer"}),onClick:function(e){return x(e,k)}}:{style:e}}),[m.opacity,x,k]);return o.jsxs(t.animated.g,u({transform:m.transform},v,{children:[o.jsx("line",{x1:0,x2:l,y1:0,y2:c,style:g}),h.outlineWidth>0&&o.jsx(t.animated.text,{dominantBaseline:d,textAnchor:f,transform:m.textTransform,style:h,strokeWidth:2*h.outlineWidth,stroke:h.outlineColor,strokeLinejoin:"round",children:""+k}),o.jsx(t.animated.text,{dominantBaseline:d,textAnchor:f,transform:m.textTransform,style:h,children:""+k})]}))})),y=function(n){var r=n.axis,a=n.scale,s=n.x,l=void 0===s?0:s,f=n.y,y=void 0===f?0:f,g=n.length,h=n.ticksPosition,k=n.tickValues,v=n.tickSize,p=void 0===v?5:v,b=n.tickPadding,T=void 0===b?5:b,P=n.tickRotation,j=void 0===P?0:P,S=n.format,O=n.renderTick,A=void 0===O?m:O,W=n.legend,C=n.legendPosition,w=void 0===C?"end":C,B=n.legendOffset,X=void 0===B?0:B,Y=n.onClick,q=n.ariaHidden,z=i.useTheme(),R=z.axis.legend.text,V=e.useMemo((function(){return d(S,a)}),[S,a]),D=x({axis:r,scale:a,ticksPosition:h,tickValues:k,tickSize:p,tickPadding:T,tickRotation:j}),E=D.ticks,M=D.textAlign,F=D.textBaseline,L=null;if(void 0!==W){var G,N=0,H=0,I=0;"y"===r?(I=-90,N=X,"start"===w?(G="start",H=g):"middle"===w?(G="middle",H=g/2):"end"===w&&(G="end")):(H=X,"start"===w?G="start":"middle"===w?(G="middle",N=g/2):"end"===w&&(G="end",N=g)),L=o.jsxs(o.Fragment,{children:[R.outlineWidth>0&&o.jsx("text",{transform:"translate("+N+", "+H+") rotate("+I+")",textAnchor:G,style:u({dominantBaseline:"central"},R),strokeWidth:2*R.outlineWidth,stroke:R.outlineColor,strokeLinejoin:"round",children:W}),o.jsx("text",{transform:"translate("+N+", "+H+") rotate("+I+")",textAnchor:G,style:u({dominantBaseline:"central"},R),children:W})]})}var J=i.useMotionConfig(),K=J.animate,Q=J.config,U=t.useSpring({transform:"translate("+l+","+y+")",lineX2:"x"===r?g:0,lineY2:"x"===r?0:g,config:Q,immediate:!K}),Z=e.useCallback((function(e){return{opacity:1,transform:"translate("+e.x+","+e.y+")",textTransform:"translate("+e.textX+","+e.textY+") rotate("+j+")"}}),[j]),$=e.useCallback((function(e){return{opacity:0,transform:"translate("+e.x+","+e.y+")",textTransform:"translate("+e.textX+","+e.textY+") rotate("+j+")"}}),[j]),_=t.useTransition(E,{keys:function(e){return e.key},initial:Z,from:$,enter:Z,update:Z,leave:{opacity:0},config:Q,immediate:!K});return o.jsxs(t.animated.g,{transform:U.transform,"aria-hidden":q,children:[_((function(e,t,i,n){return c.createElement(A,u({tickIndex:n,format:V,rotate:j,textBaseline:F,textAnchor:M,animatedProps:e},t,Y?{onClick:Y}:{}))})),o.jsx(t.animated.line,{style:z.axis.domain.line,x1:0,x2:U.lineX2,y1:0,y2:U.lineY2}),L]})},g=e.memo(y),h={ticksPosition:s.oneOf(["before","after"]),tickValues:s.oneOfType([s.number,s.arrayOf(s.oneOfType([s.number,s.string,s.instanceOf(Date)])),s.string]),tickSize:s.number,tickPadding:s.number,tickRotation:s.number,format:s.oneOfType([s.func,s.string]),renderTick:s.func,legend:s.node,legendPosition:s.oneOf(["start","middle","end"]),legendOffset:s.number,ariaHidden:s.bool},k=s.shape(h),v=["top","right","bottom","left"],p=e.memo((function(e){var t=e.xScale,i=e.yScale,n=e.width,r=e.height,a={top:e.top,right:e.right,bottom:e.bottom,left:e.left};return o.jsx(o.Fragment,{children:v.map((function(e){var s=a[e];if(!s)return null;var l="top"===e||"bottom"===e,c="top"===e||"left"===e?"before":"after";return o.jsx(g,u({},s,{axis:l?"x":"y",x:"right"===e?n:0,y:"bottom"===e?r:0,scale:l?t:i,length:l?n:r,ticksPosition:c}),e)}))})})),b=e.memo((function(e){var n=e.animatedProps,r=i.useTheme();return o.jsx(t.animated.line,u({},n,r.grid.line))})),T=e.memo((function(n){var r=n.lines,a=i.useMotionConfig(),s=a.animate,l=a.config,c=t.useTransition(r,{keys:function(e){return e.key},initial:function(e){return{opacity:1,x1:e.x1,x2:e.x2,y1:e.y1,y2:e.y2}},from:function(e){return{opacity:0,x1:e.x1,x2:e.x2,y1:e.y1,y2:e.y2}},enter:function(e){return{opacity:1,x1:e.x1,x2:e.x2,y1:e.y1,y2:e.y2}},update:function(e){return{opacity:1,x1:e.x1,x2:e.x2,y1:e.y1,y2:e.y2}},leave:{opacity:0},config:l,immediate:!s});return o.jsx("g",{children:c((function(t,i){return e.createElement(b,u({},i,{key:i.key,animatedProps:t}))}))})})),P=e.memo((function(t){var i=t.width,n=t.height,r=t.xScale,a=t.yScale,s=t.xValues,l=t.yValues,c=e.useMemo((function(){return!!r&&f({width:i,height:n,scale:r,axis:"x",values:s})}),[r,s,i,n]),u=e.useMemo((function(){return!!a&&f({width:i,height:n,scale:a,axis:"y",values:l})}),[n,i,a,l]);return o.jsxs(o.Fragment,{children:[c&&o.jsx(T,{lines:c}),u&&o.jsx(T,{lines:u})]})})),j=function(e,t){var n,r=t.axis,a=t.scale,o=t.x,s=void 0===o?0:o,l=t.y,c=void 0===l?0:l,u=t.length,d=t.ticksPosition,f=t.tickValues,m=t.tickSize,y=void 0===m?5:m,g=t.tickPadding,h=void 0===g?5:g,k=t.tickRotation,v=void 0===k?0:k,p=t.format,b=t.legend,T=t.legendPosition,P=void 0===T?"end":T,j=t.legendOffset,S=void 0===j?0:j,O=t.theme,A=x({axis:r,scale:a,ticksPosition:d,tickValues:f,tickSize:y,tickPadding:h,tickRotation:v,engine:"canvas"}),W=A.ticks,C=A.textAlign,w=A.textBaseline;e.save(),e.translate(s,c),e.textAlign=C,e.textBaseline=w;var B=O.axis.ticks.text;e.font=(B.fontWeight?B.fontWeight+" ":"")+B.fontSize+"px "+B.fontFamily,(null!=(n=O.axis.domain.line.strokeWidth)?n:0)>0&&(e.lineWidth=Number(O.axis.domain.line.strokeWidth),e.lineCap="square",O.axis.domain.line.stroke&&(e.strokeStyle=O.axis.domain.line.stroke),e.beginPath(),e.moveTo(0,0),e.lineTo("x"===r?u:0,"x"===r?0:u),e.stroke());var X="function"==typeof p?p:function(e){return""+e};if(W.forEach((function(t){var n;(null!=(n=O.axis.ticks.line.strokeWidth)?n:0)>0&&(e.lineWidth=Number(O.axis.ticks.line.strokeWidth),e.lineCap="square",O.axis.ticks.line.stroke&&(e.strokeStyle=O.axis.ticks.line.stroke),e.beginPath(),e.moveTo(t.x,t.y),e.lineTo(t.x+t.lineX,t.y+t.lineY),e.stroke());var r=X(t.value);e.save(),e.translate(t.x+t.textX,t.y+t.textY),e.rotate(i.degreesToRadians(v)),B.outlineWidth>0&&(e.strokeStyle=B.outlineColor,e.lineWidth=2*B.outlineWidth,e.lineJoin="round",e.strokeText(""+r,0,0)),O.axis.ticks.text.fill&&(e.fillStyle=B.fill),e.fillText(""+r,0,0),e.restore()})),void 0!==b){var Y=0,q=0,z=0,R="center";"y"===r?(z=-90,Y=S,"start"===P?(R="start",q=u):"middle"===P?(R="center",q=u/2):"end"===P&&(R="end")):(q=S,"start"===P?R="start":"middle"===P?(R="center",Y=u/2):"end"===P&&(R="end",Y=u)),e.translate(Y,q),e.rotate(i.degreesToRadians(z)),e.font=(O.axis.legend.text.fontWeight?O.axis.legend.text.fontWeight+" ":"")+O.axis.legend.text.fontSize+"px "+O.axis.legend.text.fontFamily,O.axis.legend.text.fill&&(e.fillStyle=O.axis.legend.text.fill),e.textAlign=R,e.textBaseline="middle",e.fillText(b,0,0)}e.restore()};exports.Axes=p,exports.Axis=g,exports.AxisTick=m,exports.Grid=P,exports.GridLine=b,exports.GridLines=T,exports.NonMemoizedAxis=y,exports.axisPropType=k,exports.axisPropTypes=h,exports.positions=v,exports.renderAxesToCanvas=function(e,t){var i=t.xScale,n=t.yScale,r=t.width,a=t.height,o=t.top,s=t.right,l=t.bottom,c=t.left,x=t.theme,f={top:o,right:s,bottom:l,left:c};v.forEach((function(t){var o=f[t];if(!o)return null;var s="top"===t||"bottom"===t,l="top"===t||"left"===t?"before":"after",c=s?i:n,m=d(o.format,c);j(e,u({},o,{axis:s?"x":"y",x:"right"===t?r:0,y:"bottom"===t?a:0,scale:c,format:m,length:s?r:a,ticksPosition:l,theme:x}))}))},exports.renderAxisToCanvas=j,exports.renderGridLinesToCanvas=function(e,t){var i=t.width,n=t.height,r=t.scale,a=t.axis,o=t.values;f({width:i,height:n,scale:r,axis:a,values:o}).forEach((function(t){e.beginPath(),e.moveTo(t.x1,t.y1),e.lineTo(t.x2,t.y2),e.stroke()}))};
//# sourceMappingURL=nivo-axes.cjs.js.map
