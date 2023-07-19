"use strict";var e=require("@nivo/core"),t=require("@nivo/legends"),o=require("react"),n=require("react/jsx-runtime"),r=require("@nivo/tooltip"),i=require("d3-time-format"),a=require("d3-scale"),d=require("lodash/isDate"),l=require("lodash/memoize"),s=require("lodash/range"),u=require("d3-time");function c(e){var t=Object.create(null);return e&&Object.keys(e).forEach((function(o){if("default"!==o){var n=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(t,o,n.get?n:{enumerable:!0,get:function(){return e[o]}})}})),t.default=e,Object.freeze(t)}var h=c(o);function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},m.apply(this,arguments)}function g(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}var f,v=o.memo((function(e){var t=e.years,o=e.legend,r=e.theme;return n.jsx(n.Fragment,{children:t.map((function(e){return n.jsx("text",{transform:"translate("+e.x+","+e.y+") rotate("+e.rotation+")",textAnchor:"middle",style:r.labels.text,children:o(e.year)},e.year)}))})})),y=o.memo((function(e){var t=e.path,o=e.borderWidth,r=e.borderColor;return n.jsx("path",{d:t,style:{fill:"none",strokeWidth:o,stroke:r,pointerEvents:"none"}})})),p=o.memo((function(e){var t=e.months,o=e.legend,r=e.theme;return n.jsx(n.Fragment,{children:t.map((function(e){return n.jsx("text",{transform:"translate("+e.x+","+e.y+") rotate("+e.rotation+")",textAnchor:"middle",style:r.labels.text,children:o(e.year,e.month,e.date)},e.date.toString()+".legend")}))})})),x=o.memo((function(e){var t=e.data,i=e.x,a=e.y,d=e.size,l=e.color,s=e.borderWidth,u=e.borderColor,c=e.isInteractive,g=e.tooltip,f=e.onMouseEnter,v=e.onMouseMove,y=e.onMouseLeave,p=e.onClick,x=e.formatValue,b=r.useTooltip(),S=b.showTooltipFromEvent,W=b.hideTooltip,w=o.useCallback((function(e){if("value"in t){var o=m({},t,{value:x(t.value),data:m({},t.data)});S(h.createElement(g,m({},o)),e),null==f||f(t,e)}}),[S,g,t,f,x]),k=o.useCallback((function(e){if("value"in t){var o=m({},t,{value:x(t.value),data:m({},t.data)});S(h.createElement(g,m({},o)),e),v&&v(t,e)}}),[S,g,t,v,x]),C=o.useCallback((function(e){"value"in t&&(W(),null==y||y(t,e))}),[W,t,y]),L=o.useCallback((function(e){return null==p?void 0:p(t,e)}),[t,p]);return n.jsx("rect",{x:i,y:a,width:d,height:d,style:{fill:l,strokeWidth:s,stroke:u},onMouseEnter:c?w:void 0,onMouseMove:c?k:void 0,onMouseLeave:c?C:void 0,onClick:c?L:void 0})})),b=o.memo((function(e){var t=e.value,o=e.day,i=e.color;return void 0===t||isNaN(Number(t))?null:n.jsx(r.BasicTooltip,{id:o,value:t,color:i,enableChip:!0})})),S=i.timeFormat("%b"),W={colors:["#61cdbb","#97e3d5","#e8c1a0","#f47560"],align:"center",direction:"horizontal",emptyColor:"#fff",minValue:0,maxValue:"auto",yearSpacing:30,yearLegend:function(e){return e},yearLegendPosition:"before",yearLegendOffset:10,monthBorderWidth:2,monthBorderColor:"#000",monthSpacing:0,monthLegend:function(e,t,o){return S(o)},monthLegendPosition:"before",monthLegendOffset:10,daySpacing:0,dayBorderWidth:1,dayBorderColor:"#000",isInteractive:!0,legends:[],tooltip:b},w=m({},W,{role:"img"}),k=m({},W,{pixelRatio:"undefined"!=typeof window&&null!=(f=window.devicePixelRatio)?f:1}),C=m({},w,{dayBorderColor:"#fff",dayRadius:0,square:!0,weekdayLegendOffset:75,firstWeekday:"sunday"}),L=function(e,t,o){var n=e.map((function(e){return e.value}));return["auto"===t?Math.min.apply(Math,n):t,"auto"===o?Math.max.apply(Math,n):o]},M=l((function(e){var t,o=e.date,n=e.cellSize,r=e.yearIndex,i=e.yearSpacing,a=e.monthSpacing,d=e.daySpacing,l=e.direction,s=e.originX,c=e.originY,h=new Date(o.getFullYear(),o.getMonth()+1,0),m=u.timeWeek.count(u.timeYear(o),o),g=u.timeWeek.count(u.timeYear(h),h),f=o.getDay(),v=h.getDay(),y=s,p=c,x=r*(7*(n+d)+i),b=o.getMonth()*a;"horizontal"===l?(p+=x,y+=b):(p+=b,y+=x);var S={x:y,y:p,width:0,height:0};return"horizontal"===l?(t=["M"+(y+(m+1)*(n+d))+","+(p+f*(n+d)),"H"+(y+m*(n+d))+"V"+(p+7*(n+d)),"H"+(y+g*(n+d))+"V"+(p+(v+1)*(n+d)),"H"+(y+(g+1)*(n+d))+"V"+p,"H"+(y+(m+1)*(n+d))+"Z"].join(""),S.x=y+m*(n+d),S.width=y+(g+1)*(n+d)-S.x,S.height=7*(n+d)):(t=["M"+(y+f*(n+d))+","+(p+(m+1)*(n+d)),"H"+y+"V"+(p+(g+1)*(n+d)),"H"+(y+(v+1)*(n+d))+"V"+(p+g*(n+d)),"H"+(y+7*(n+d))+"V"+(p+m*(n+d)),"H"+(y+f*(n+d))+"Z"].join(""),S.y=p+m*(n+d),S.width=7*(n+d),S.height=p+(g+1)*(n+d)-S.y),{path:t,bbox:S}}),(function(e){var t=e.date,o=e.cellSize,n=e.yearIndex,r=e.yearSpacing,i=e.monthSpacing,a=e.daySpacing,d=e.direction,l=e.originX,s=e.originY;return t.toString()+"."+o+"."+n+"."+r+"."+i+"."+a+"."+d+"."+l+"."+s})),j=i.timeFormat("%Y-%m-%d"),D=function(t){var o,n=t.width,r=t.height,i=t.from,a=t.to,l=t.direction,c=t.yearSpacing,h=t.monthSpacing,g=t.daySpacing,f=t.align,v=d(i)?i:new Date(i),y=d(a)?a:new Date(a),p=s(v.getFullYear(),y.getFullYear()+1),x=Math.max.apply(Math,p.map((function(e){return u.timeWeeks(new Date(e,0,1),new Date(e+1,0,1)).length})))+1,b=function(e){var t,o,n=e.width,r=e.height,i=e.direction,a=e.yearRange,d=e.yearSpacing,l=e.monthSpacing,s=e.daySpacing,u=e.maxWeeks;return"horizontal"===i?(t=(n-12*l-s*u)/u,o=(r-(a.length-1)*d-a.length*(8*s))/(7*a.length)):(t=(n-(a.length-1)*d-a.length*(8*s))/(7*a.length),o=(r-12*l-s*u)/u),Math.min(t,o)}({width:n,height:r,direction:l,yearRange:p,yearSpacing:c,monthSpacing:h,daySpacing:g,maxWeeks:x}),S=b*x+g*x+12*h,W=7*(b+g)*p.length+c*(p.length-1),w="horizontal"===l?S:W,k="horizontal"===l?W:S,C=e.alignBox({x:0,y:0,width:w,height:k},{x:0,y:0,width:n,height:r},f),L=C[0],D=C[1];o="horizontal"===l?function(e,t,o,n){return function(r,i,a,d){return{x:r+u.timeWeek.count(u.timeYear(a),a)*(e+n)+n/2+a.getMonth()*o,y:i+a.getDay()*(e+n)+n/2+d*(t+7*(e+n))}}}(b,c,h,g):function(e,t,o,n){return function(r,i,a,d){var l=u.timeWeek.count(u.timeYear(a),a);return{x:r+a.getDay()*(e+n)+n/2+d*(t+7*(e+n)),y:i+l*(e+n)+n/2+a.getMonth()*o}}}(b,c,h,g);var O=[],V=[],z=[];return p.forEach((function(e,t){var n=new Date(e,0,1),r=new Date(e+1,0,1);z=z.concat(u.timeDays(n,r).map((function(e){return m({date:e,day:j(e),size:b},o(L,D,e,t))})));var i=u.timeMonths(n,r).map((function(e){return m({date:e,year:e.getFullYear(),month:e.getMonth()},M({originX:L,originY:D,date:e,direction:l,yearIndex:t,yearSpacing:c,monthSpacing:h,daySpacing:g,cellSize:b}))}));V=V.concat(i),O.push({year:e,bbox:{x:i[0].bbox.x,y:i[0].bbox.y,width:i[11].bbox.x-i[0].bbox.x+i[11].bbox.width,height:i[11].bbox.y-i[0].bbox.y+i[11].bbox.height}})})),{years:O,months:V,days:z,cellSize:b,calendarWidth:w,calendarHeight:k,originX:L,originY:D}},O=function(e){var t=e.days,o=e.data,n=e.colorScale,r=e.emptyColor;return t.map((function(e){var t=o.find((function(t){return t.day===e.day}));return m({},e,t?{color:n(t.value),data:t,value:t.value}:{color:r})}))},V=function(e){var t=e.years,o=e.direction,n=e.position,r=e.offset;return t.map((function(e){var t=0,i=0,a=0;return"horizontal"===o&&"before"===n?(t=e.bbox.x-r,i=e.bbox.y+e.bbox.height/2,a=-90):"horizontal"===o&&"after"===n?(t=e.bbox.x+e.bbox.width+r,i=e.bbox.y+e.bbox.height/2,a=-90):"vertical"===o&&"before"===n?(t=e.bbox.x+e.bbox.width/2,i=e.bbox.y-r):(t=e.bbox.x+e.bbox.width/2,i=e.bbox.y+e.bbox.height+r),m({},e,{x:t,y:i,rotation:a})}))},z=function(e){var t=e.months,o=e.direction,n=e.position,r=e.offset;return t.map((function(e){var t=0,i=0,a=0;return"horizontal"===o&&"before"===n?(t=e.bbox.x+e.bbox.width/2,i=e.bbox.y-r):"horizontal"===o&&"after"===n?(t=e.bbox.x+e.bbox.width/2,i=e.bbox.y+e.bbox.height+r):"vertical"===o&&"before"===n?(t=e.bbox.x-r,i=e.bbox.y+e.bbox.height/2,a=-90):(t=e.bbox.x+e.bbox.width+r,i=e.bbox.y+e.bbox.height/2,a=-90),m({},e,{x:t,y:i,rotation:a})}))},I=function(e){var t=e.width,n=e.height,r=e.from,i=e.to,a=e.direction,d=e.yearSpacing,l=e.monthSpacing,s=e.daySpacing,u=e.align;return o.useMemo((function(){return D({width:t,height:n,from:r,to:i,direction:a,yearSpacing:d,monthSpacing:l,daySpacing:s,align:u})}),[t,n,r,i,a,d,l,s,u])},F=function(e){var t=e.data,n=e.minValue,r=e.maxValue,i=e.colors,d=e.colorScale;return o.useMemo((function(){if(d)return d;var e=L(t,n,r);return a.scaleQuantize().domain(e).range(i)}),[t,n,r,i,d])},P=function(e){var t=e.years,n=e.direction,r=e.yearLegendPosition,i=e.yearLegendOffset;return o.useMemo((function(){return V({years:t,direction:n,position:r,offset:i})}),[t,n,r,i])},E=function(e){var t=e.months,n=e.direction,r=e.monthLegendPosition,i=e.monthLegendOffset;return o.useMemo((function(){return z({months:t,direction:n,position:r,offset:i})}),[t,n,r,i])},R=function(e){var t=e.days,n=e.data,r=e.colorScale,i=e.emptyColor;return o.useMemo((function(){return O({days:t,data:n,colorScale:r,emptyColor:i})}),[t,n,r,i])},T=["months","years"],B=["isInteractive","renderWrapper","theme"],H=function(o){var r=o.margin,i=o.width,a=o.height,d=o.align,l=void 0===d?w.align:d,s=o.colors,u=void 0===s?w.colors:s,c=o.colorScale,h=o.data,f=o.direction,b=void 0===f?w.direction:f,S=o.emptyColor,W=void 0===S?w.emptyColor:S,k=o.from,C=o.to,L=o.minValue,M=void 0===L?w.minValue:L,j=o.maxValue,D=void 0===j?w.maxValue:j,O=o.valueFormat,V=o.legendFormat,z=o.yearLegend,B=void 0===z?w.yearLegend:z,H=o.yearLegendOffset,Y=void 0===H?w.yearLegendOffset:H,q=o.yearLegendPosition,A=void 0===q?w.yearLegendPosition:q,X=o.yearSpacing,N=void 0===X?w.yearSpacing:X,Z=o.monthBorderColor,_=void 0===Z?w.monthBorderColor:Z,K=o.monthBorderWidth,Q=void 0===K?w.monthBorderWidth:K,G=o.monthLegend,J=void 0===G?w.monthLegend:G,U=o.monthLegendOffset,$=void 0===U?w.monthLegendOffset:U,ee=o.monthLegendPosition,te=void 0===ee?w.monthLegendPosition:ee,oe=o.monthSpacing,ne=void 0===oe?w.monthSpacing:oe,re=o.dayBorderColor,ie=void 0===re?w.dayBorderColor:re,ae=o.dayBorderWidth,de=void 0===ae?w.dayBorderWidth:ae,le=o.daySpacing,se=void 0===le?w.daySpacing:le,ue=o.isInteractive,ce=void 0===ue?w.isInteractive:ue,he=o.tooltip,me=void 0===he?w.tooltip:he,ge=o.onClick,fe=o.onMouseEnter,ve=o.onMouseLeave,ye=o.onMouseMove,pe=o.legends,xe=void 0===pe?w.legends:pe,be=o.role,Se=void 0===be?w.role:be,We=e.useTheme(),we=e.useDimensions(i,a,r),ke=we.margin,Ce=we.innerWidth,Le=we.innerHeight,Me=we.outerWidth,je=we.outerHeight,De=I({width:Ce,height:Le,from:k,to:C,direction:b,yearSpacing:N,monthSpacing:ne,daySpacing:se,align:l}),Oe=De.months,Ve=De.years,ze=g(De,T),Ie=F({data:h,minValue:M,maxValue:D,colors:u,colorScale:c}),Fe=E({months:Oe,direction:b,monthLegendPosition:te,monthLegendOffset:$}),Pe=P({years:Ve,direction:b,yearLegendPosition:A,yearLegendOffset:Y}),Ee=R({days:ze.days,data:h,colorScale:Ie,emptyColor:W}),Re=e.useValueFormatter(V),Te=e.useValueFormatter(O);return n.jsxs(e.SvgWrapper,{width:Me,height:je,margin:ke,role:Se,children:[Ee.map((function(e){return n.jsx(x,{data:e,x:e.x,y:e.y,size:e.size,color:e.color,borderWidth:de,borderColor:ie,onMouseEnter:fe,onMouseLeave:ve,onMouseMove:ye,isInteractive:ce,tooltip:me,onClick:ge,formatValue:Te},e.date.toString())})),Oe.map((function(e){return n.jsx(y,{path:e.path,borderWidth:Q,borderColor:_},e.date.toString())})),n.jsx(p,{months:Fe,legend:J,theme:We}),n.jsx(v,{years:Pe,legend:B,theme:We}),xe.map((function(e,o){var r=Ie.ticks(e.itemCount).map((function(e){return{id:e,label:Re(e),color:Ie(e)}}));return n.jsx(t.BoxLegendSvg,m({},e,{containerWidth:i,containerHeight:a,data:r}),o)}))]})},Y=function(t){var o=t.isInteractive,r=void 0===o?w.isInteractive:o,i=t.renderWrapper,a=t.theme,d=g(t,B);return n.jsx(e.Container,{isInteractive:r,renderWrapper:i,theme:a,children:n.jsx(H,m({isInteractive:r},d))})},q=i.timeFormat("%Y-%m-%d"),A=function(e){var t,o,n=e.direction,r=e.daySpacing,i=e.offset,a=e.square,d=e.totalDays,l=e.width,s=e.height;"horizontal"===n?(l-=i,t=7,o=Math.ceil(d/7)):(s-=i,o=7,t=Math.ceil(d/7));var u=(s-r*(t+1))/t,c=(l-r*(o+1))/o,h=Math.min(u,c);return{columns:o,rows:t,cellHeight:a?h:u,cellWidth:a?h:c}},X=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function N(e){return X.findIndex((function(t){return t.toLowerCase()===e}))}var Z=function(e,t){var o=e.getDay()-N(t);return[0,1,2,3,4,5,6].slice(o)[0]};function _(e){var t=e.startDate,o=e.date,n=e.direction,r=e.firstWeekday,i=function(e){return[u.timeSunday,u.timeMonday,u.timeTuesday,u.timeWednesday,u.timeThursday,u.timeFriday,u.timeSaturday][N(e)]}(r),a=i.count(t,o),d=o.getMonth(),l=o.getFullYear(),s=0,c=0;return"horizontal"===n?(s=a,c=Z(o,r)):(s=Z(o,r),c=a),{currentColumn:s,year:l,currentRow:c,firstWeek:a,month:d,date:o}}var K=function(e){var t=e.direction,o=e.colorScale,n=e.emptyColor,r=e.from,i=e.to,a=e.data,l=e.cellWidth,s=e.cellHeight,c=e.daySpacing,h=e.offset,g=e.firstWeekday,f=c,v=c;"horizontal"===t?f+=h:v+=h;var y=r||a[0].date,p=i||a[a.length-1].date,x=d(y)?y:new Date(y),b=d(p)?p:new Date(p);return u.timeDays(x,b).map((function(e){return{date:e,day:q(e)}})).map((function(e){var r=a.find((function(t){return t.day===e.day})),i=_({startDate:x,date:e.date,direction:t,firstWeekday:g}),d=i.currentColumn,u=i.currentRow,h=i.firstWeek,y=i.year,p=i.month,b=i.date,S={x:f+c*d+l*d,y:v+c*u+s*u};return r?m({},r,{coordinates:S,firstWeek:h,month:p,year:y,date:b,color:o(r.value),width:l,height:s}):m({},e,{coordinates:S,firstWeek:h,month:p,year:y,date:b,color:n,width:l,height:s})}))},Q=function(e){var t=e.cellHeight,o=e.cellWidth,n=e.direction,r=e.daySpacing,i=e.ticks,a=void 0===i?[1,3,5]:i,d=e.firstWeekday,l=e.arrayOfWeekdays,s=void 0===l?function(e,t){if(!e.length||!t)return e;for(var o=0;o<t;o++){var n=e.shift();e.push(n)}return e}(X,N(d)):l,u=o+r,c=t+r;return a.map((function(e){return{value:s[e],rotation:"horizontal"===n?0:-90,y:"horizontal"===n?c*(e+1)-c/3:0,x:"horizontal"===n?0:u*(e+1)-u/3}}))},G=function(e){var t=e.direction,o=e.daySpacing,n=e.days,r=e.cellHeight,i=e.cellWidth;return n.reduce((function(e,n){if(e.weeks.length===n.firstWeek||!e.weeks.length&&1===n.firstWeek){e.weeks.push(n);var a=n.year+"-"+n.month;if(Object.keys(e.months).includes(a))"horizontal"===t?e.months[a].bbox.width=(n.firstWeek-e.months[a].firstWeek)*(i+o):e.months[a].bbox.height=(n.firstWeek-e.months[a].firstWeek)*(r+o);else{var d={x:0,y:0,width:0,height:0};"horizontal"===t?(d.x=n.coordinates.x-o,d.height=r+o,d.width=i+2*o):(d.y=n.coordinates.y-o,d.height=r+2*o,d.width=i+2*o),e.months[a]={date:n.date,bbox:d,firstWeek:n.firstWeek,month:0,year:0}}}return e}),{months:{},weeks:[]})},J=function(e){var t,o,n=e.from,r=e.to,i=e.data;return t=n?d(n)?n:new Date(n):i[0].date,o=n&&r?d(r)?r:new Date(r):i[i.length-1].date,t.getDay()+u.timeDay.count(t,o)},U=o.memo((function(e){var t=e.data,i=e.x,a=e.ry,d=void 0===a?5:a,l=e.rx,s=void 0===l?5:l,u=e.y,c=e.width,h=e.height,g=e.color,f=e.borderWidth,v=e.borderColor,y=e.isInteractive,p=e.tooltip,x=e.onMouseEnter,b=e.onMouseMove,S=e.onMouseLeave,W=e.onClick,w=e.formatValue,k=r.useTooltip(),C=k.showTooltipFromEvent,L=k.hideTooltip,M=o.useCallback((function(e){if("value"in t){var n=m({},t,{value:w(t.value)});C(o.createElement(p,m({},n)),e),null==x||x(t,e)}}),[C,p,t,x,w]),j=o.useCallback((function(e){if("value"in t){var n=m({},t,{value:w(t.value)});C(o.createElement(p,m({},n)),e),null==b||b(t,e)}}),[C,p,t,b,w]),D=o.useCallback((function(e){"value"in t&&(L(),null==S||S(t,e))}),[L,t,S]),O=o.useCallback((function(e){return null==W?void 0:W(t,e)}),[t,W]);return n.jsx("rect",{x:i,y:u,rx:s,ry:d,width:c,height:h,style:{fill:g,strokeWidth:f,stroke:v},onMouseEnter:y?M:void 0,onMouseMove:y?j:void 0,onMouseLeave:y?D:void 0,onClick:y?O:void 0})})),$=["isInteractive","renderWrapper","theme"],ee=function(r){var i=r.margin,a=r.width,d=r.height,l=r.square,s=void 0===l?C.square:l,u=r.colors,c=void 0===u?C.colors:u,h=r.colorScale,g=r.emptyColor,f=void 0===g?C.emptyColor:g,v=r.from,y=r.to,x=r.data,b=r.direction,S=void 0===b?C.direction:b,W=r.minValue,w=void 0===W?C.minValue:W,k=r.maxValue,L=void 0===k?C.maxValue:k,M=r.valueFormat,j=r.legendFormat,D=r.monthLegend,O=void 0===D?C.monthLegend:D,V=r.monthLegendOffset,z=void 0===V?C.monthLegendOffset:V,I=r.monthLegendPosition,P=void 0===I?C.monthLegendPosition:I,R=r.weekdayLegendOffset,T=void 0===R?C.weekdayLegendOffset:R,B=r.weekdayTicks,H=r.dayBorderColor,Y=void 0===H?C.dayBorderColor:H,q=r.dayBorderWidth,X=void 0===q?C.dayBorderWidth:q,N=r.daySpacing,Z=void 0===N?C.daySpacing:N,_=r.dayRadius,$=void 0===_?C.dayRadius:_,ee=r.isInteractive,te=void 0===ee?C.isInteractive:ee,oe=r.tooltip,ne=void 0===oe?C.tooltip:oe,re=r.onClick,ie=r.onMouseEnter,ae=r.onMouseLeave,de=r.onMouseMove,le=r.legends,se=void 0===le?C.legends:le,ue=r.role,ce=void 0===ue?C.role:ue,he=r.firstWeekday,me=void 0===he?C.firstWeekday:he,ge=e.useDimensions(a,d,i),fe=ge.margin,ve=ge.innerWidth,ye=ge.innerHeight,pe=ge.outerWidth,xe=ge.outerHeight,be=o.useMemo((function(){return x.map((function(e){return m({},e,{date:new Date(e.day+"T00:00:00")})})).sort((function(e,t){return e.day.localeCompare(t.day)}))}),[x]),Se=e.useTheme(),We=F({data:be,minValue:w,maxValue:L,colors:c,colorScale:h}),we=J({from:v,to:y,data:be}),ke=A({square:s,offset:T,totalDays:we,width:ve,height:ye,daySpacing:Z,direction:S}),Ce=ke.cellHeight,Le=ke.cellWidth,Me=K({offset:T,colorScale:We,emptyColor:f,cellHeight:Ce,cellWidth:Le,from:v,to:y,data:be,direction:S,daySpacing:Z,firstWeekday:me}),je=Object.values(G({daySpacing:Z,direction:S,cellHeight:Ce,cellWidth:Le,days:Me}).months),De=Q({direction:S,cellHeight:Ce,cellWidth:Le,daySpacing:Z,ticks:B,firstWeekday:me}),Oe=E({months:je,direction:S,monthLegendPosition:P,monthLegendOffset:z}),Ve=e.useValueFormatter(M),ze=e.useValueFormatter(j);return n.jsxs(e.SvgWrapper,{width:pe,height:xe,margin:fe,role:ce,children:[De.map((function(e){return n.jsx("text",{transform:"translate("+e.x+","+e.y+") rotate("+e.rotation+")",textAnchor:"left",style:Se.labels.text,children:e.value},e.value)})),Me.map((function(e){return n.jsx(U,{data:e,x:e.coordinates.x,rx:$,y:e.coordinates.y,ry:$,width:Le,height:Ce,color:e.color,borderWidth:X,borderColor:Y,onMouseEnter:ie,onMouseLeave:ae,onMouseMove:de,isInteractive:te,tooltip:ne,onClick:re,formatValue:Ve},e.date.toString())})),n.jsx(p,{months:Oe,legend:O,theme:Se}),se.map((function(e,o){var r=We.ticks(e.itemCount).map((function(e){return{id:e,label:ze(e),color:We(e)}}));return n.jsx(t.BoxLegendSvg,m({},e,{containerWidth:a,containerHeight:d,data:r}),o)}))]})},te=function(t){var o=t.isInteractive,r=void 0===o?C.isInteractive:o,i=t.renderWrapper,a=t.theme,d=g(t,$);return n.jsx(e.Container,{isInteractive:r,renderWrapper:i,theme:a,children:n.jsx(ee,m({isInteractive:r},d))})},oe=["months","years"],ne=["isInteractive","renderWrapper","theme"],re=function(t,o,n,r,i,a){var d=e.getRelativeCursor(o,t),l=d[0],s=d[1];return n.find((function(t){return"value"in t&&e.isCursorInRect(t.x+a.left-i/2,t.y+a.top-i/2,r+i,r+i,l,s)}))},ie=o.memo((function(i){var a=i.margin,d=i.width,l=i.height,s=i.pixelRatio,u=void 0===s?k.pixelRatio:s,c=i.align,f=void 0===c?k.align:c,v=i.colors,y=void 0===v?k.colors:v,p=i.colorScale,x=i.data,b=i.direction,S=void 0===b?k.direction:b,W=i.emptyColor,w=void 0===W?k.emptyColor:W,C=i.from,L=i.to,M=i.minValue,j=void 0===M?k.minValue:M,D=i.maxValue,O=void 0===D?k.maxValue:D,V=i.valueFormat,z=i.legendFormat,T=i.yearLegend,B=void 0===T?k.yearLegend:T,H=i.yearLegendOffset,Y=void 0===H?k.yearLegendOffset:H,q=i.yearLegendPosition,A=void 0===q?k.yearLegendPosition:q,X=i.yearSpacing,N=void 0===X?k.yearSpacing:X,Z=i.monthLegend,_=void 0===Z?k.monthLegend:Z,K=i.monthLegendOffset,Q=void 0===K?k.monthLegendOffset:K,G=i.monthLegendPosition,J=void 0===G?k.monthLegendPosition:G,U=i.monthSpacing,$=void 0===U?k.monthSpacing:U,ee=i.dayBorderColor,te=void 0===ee?k.dayBorderColor:ee,ne=i.dayBorderWidth,ie=void 0===ne?k.dayBorderWidth:ne,ae=i.daySpacing,de=void 0===ae?k.daySpacing:ae,le=i.isInteractive,se=void 0===le?k.isInteractive:le,ue=i.tooltip,ce=void 0===ue?k.tooltip:ue,he=i.onClick,me=i.onMouseEnter,ge=i.onMouseLeave,fe=i.onMouseMove,ve=i.legends,ye=void 0===ve?k.legends:ve,pe=o.useRef(null),xe=e.useDimensions(d,l,a),be=xe.innerWidth,Se=xe.innerHeight,We=xe.outerWidth,we=xe.outerHeight,ke=xe.margin,Ce=I({width:be,height:Se,from:C,to:L,direction:S,yearSpacing:N,monthSpacing:$,daySpacing:de,align:f}),Le=Ce.months,Me=Ce.years,je=g(Ce,oe),De=F({data:x,minValue:j,maxValue:O,colors:y,colorScale:p}),Oe=E({months:Le,direction:S,monthLegendPosition:J,monthLegendOffset:Q}),Ve=P({years:Me,direction:S,yearLegendPosition:A,yearLegendOffset:Y}),ze=R({days:je.days,data:x,colorScale:De,emptyColor:w}),Ie=o.useState(null),Fe=Ie[0],Pe=Ie[1],Ee=e.useTheme(),Re=e.useValueFormatter(V),Te=e.useValueFormatter(z),Be=r.useTooltip(),He=Be.showTooltipFromEvent,Ye=Be.hideTooltip;o.useEffect((function(){var o;if(pe.current){pe.current.width=We*u,pe.current.height=we*u;var n=pe.current.getContext("2d");n&&(n.scale(u,u),n.fillStyle=Ee.background,n.fillRect(0,0,We,we),n.translate(ke.left,ke.top),ze.forEach((function(e){n.fillStyle=e.color,ie>0&&(n.strokeStyle=te,n.lineWidth=ie),n.beginPath(),n.rect(e.x,e.y,e.size,e.size),n.fill(),ie>0&&n.stroke()})),n.textAlign="center",n.textBaseline="middle",n.fillStyle=null!=(o=Ee.labels.text.fill)?o:"",n.font=Ee.labels.text.fontSize+"px "+Ee.labels.text.fontFamily,Oe.forEach((function(t){n.save(),n.translate(t.x,t.y),n.rotate(e.degreesToRadians(t.rotation)),n.fillText(String(_(t.year,t.month,t.date)),0,0),n.restore()})),Ve.forEach((function(t){n.save(),n.translate(t.x,t.y),n.rotate(e.degreesToRadians(t.rotation)),n.fillText(String(B(t.year)),0,0),n.restore()})),ye.forEach((function(e){var o=De.ticks(e.itemCount).map((function(e){return{id:e,label:Te(e),color:De(e)}}));t.renderLegendToCanvas(n,m({},e,{data:o,containerWidth:be,containerHeight:Se,theme:Ee}))})))}}),[pe,Se,be,We,we,u,ke,ze,te,ie,p,B,Ve,_,Oe,ye,Ee,Te,De]);var qe=o.useCallback((function(e){if(pe.current){var t=re(e,pe.current,ze,ze[0].size,ie,ke);if(t){if(Pe(t),!("value"in t))return;var o=m({},t,{value:Re(t.value),data:m({},t.data)});He(h.createElement(ce,m({},o)),e),!Fe&&(null==me||me(t,e)),null==fe||fe(t,e),Fe&&(null==ge||ge(t,e))}else Ye(),t&&(null==ge||ge(t,e))}}),[pe,Fe,ke,ze,Pe,Re,ie,He,Ye,me,fe,ge,ce]),Ae=o.useCallback((function(){Pe(null),Ye()}),[Pe,Ye]),Xe=o.useCallback((function(e){if(he&&pe.current){var t=re(e,pe.current,ze,ze[0].size,de,ke);t&&he(t,e)}}),[pe,de,ke,ze,he]);return n.jsx("canvas",{ref:pe,width:We*u,height:we*u,style:{width:We,height:we},onMouseEnter:se?qe:void 0,onMouseMove:se?qe:void 0,onMouseLeave:se?Ae:void 0,onClick:se?Xe:void 0})})),ae=function(t){var o=t.isInteractive,r=void 0===o?k.isInteractive:o,i=t.renderWrapper,a=t.theme,d=g(t,ne);return n.jsx(e.Container,{isInteractive:r,renderWrapper:i,theme:a,children:n.jsx(ie,m({isInteractive:r},d))})};exports.ARRAY_OF_WEEKDAYS=X,exports.Calendar=Y,exports.CalendarCanvas=ae,exports.ResponsiveCalendar=function(t){return n.jsx(e.ResponsiveWrapper,{children:function(e){var o=e.width,r=e.height;return n.jsx(Y,m({width:o,height:r},t))}})},exports.ResponsiveCalendarCanvas=function(t){return n.jsx(e.ResponsiveWrapper,{children:function(e){var o=e.width,r=e.height;return n.jsx(ae,m({width:o,height:r},t))}})},exports.ResponsiveTimeRange=function(t){return n.jsx(e.ResponsiveWrapper,{children:function(e){var o=e.width,r=e.height;return n.jsx(te,m({width:o,height:r},t))}})},exports.TimeRange=te,exports.bindDaysData=O,exports.calendarCanvasDefaultProps=k,exports.calendarDefaultProps=w,exports.computeCellPositions=K,exports.computeCellSize=A,exports.computeDomain=L,exports.computeLayout=D,exports.computeMonthLegendPositions=z,exports.computeMonthLegends=G,exports.computeTotalDays=J,exports.computeWeekdays=Q,exports.computeYearLegendPositions=V,exports.getDayIndex=Z,exports.getFirstWeekdayIndex=N,exports.timeRangeDefaultProps=C,exports.useCalendarLayout=I,exports.useColorScale=F,exports.useDays=R,exports.useMonthLegends=E,exports.useYearLegends=P;
//# sourceMappingURL=nivo-calendar.cjs.js.map
