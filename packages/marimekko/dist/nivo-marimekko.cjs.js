"use strict";var e=require("react"),i=require("@nivo/core"),n=require("@nivo/axes"),o=require("@nivo/legends"),t=require("lodash/get"),r=require("d3-shape"),a=require("@nivo/colors"),u=require("@nivo/scales"),d=require("@react-spring/web"),s=require("@nivo/tooltip"),l=require("react/jsx-runtime");function c(){return c=Object.assign?Object.assign.bind():function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c.apply(this,arguments)}var h={layout:"vertical",offset:"none",outerPadding:0,innerPadding:3,layers:["grid","axes","bars","legends"],enableGridX:!1,enableGridY:!0,colors:{scheme:"nivo"},borderWidth:0,borderColor:{from:"color",modifiers:[["darker",1]]},isInteractive:!0,animate:!0,motionConfig:"gentle"},f={expand:r.stackOffsetExpand,diverging:r.stackOffsetDiverging,none:r.stackOffsetNone,silouhette:r.stackOffsetSilhouette,wiggle:r.stackOffsetWiggle},v=function(n){var o=n.data,t=n.stacked,r=n.dimensionIds,u=n.valueFormat,d=n.thicknessScale,s=n.dimensionsScale,l=n.colors,h=n.layout,f=n.outerPadding,v=n.innerPadding,m=a.useOrdinalColorScale(l,"id"),g=i.useValueFormatter(u);return e.useMemo((function(){var e=[],i=f;return o.forEach((function(n){var o=d(n.value),a=c({},n,{x:"vertical"===h?i:0,y:"vertical"===h?0:i,width:"vertical"===h?o:0,height:"vertical"===h?0:o,dimensions:[]}),u=[],l=0;i+=o+v,r.forEach((function(e){var i=t.find((function(i){return i.key===e}));if(i){var o=i[n.index],r={id:e,datum:a,value:o[1]-o[0],formattedValue:g(o[1]-o[0]),color:"rgba(0, 0, 0, 0)",x:0,y:0,width:0,height:0},d=s(o[0]),c=s(o[1]);"vertical"===h?(r.x=a.x,r.y=Math.min(d,c),r.width=a.width,r.height=Math.max(d,c)-r.y,u.push(r.y),l+=r.height):(r.x=Math.min(d,c),r.y=a.y,r.width=Math.max(d,c)-r.x,r.height=a.height,u.push(r.x),l+=r.width),r.color=m(r),a.dimensions.push(r)}"vertical"===h?(a.y=Math.min.apply(Math,u),a.height=l):(a.x=Math.min.apply(Math,u),a.width=l)})),e.push(a)})),e}),[o,t,r,d,s,h,f,v,m,g])},m=function(n,o,t){var r=i.useTheme(),u=a.useInheritedColor(o,r);return e.useMemo((function(){var e=[];return n.forEach((function(i){i.dimensions.forEach((function(n){e.push(c({key:i.id+"-"+n.id},n,{borderColor:u(n),borderWidth:t}))}))})),e}),[n,t,u])},g=function(i){var n=i.data,o=i.id,a=i.value,d=i.valueFormat,s=i.dimensions,l=i.layout,c=i.offset,h=i.outerPadding,g=i.innerPadding,x=i.colors,p=i.borderColor,y=i.borderWidth,b=i.width,M=i.height,k=function(i){return e.useMemo((function(){var e={},n=[];return i.forEach((function(i){n.push(i.id),e[i.id]="function"==typeof i.value?i.value:function(e){return t(e,i.value,0)}})),{dimensionIds:n,dimensions:e}}),[i])}(s),C=k.dimensionIds,w=function(i,n,o){return e.useMemo((function(){var e=f[o];return r.stack().keys(i).value((function(e,i){return n[i](e)})).offset(e)}),[i,n,o])}(C,k.dimensions,c),S=function(i,n){return e.useMemo((function(){var e=i(n),o=[];return e.forEach((function(e){e.forEach((function(e){o.push(e[0]),o.push(e[1])}))})),{stacked:e,min:Math.min.apply(Math,o),max:Math.max.apply(Math,o)}}),[i,n])}(w,n),P=S.stacked,j=S.min,I=S.max,E=function(i,n,o){var r="function"==typeof n?n:function(e){return t(e,n)},a="function"==typeof o?o:function(e){return t(e,o,0)};return e.useMemo((function(){var e=[];return i.forEach((function(i,n){var o=r(i),t=a(i);e.push({index:n,id:o,value:t,data:i})})),e}),[i,r,a])}(n,o,a),W=function(i){var n=i.data,o=i.width,t=i.height,r=i.layout,a=i.outerPadding,d=i.innerPadding;return e.useMemo((function(){var e=n.reduce((function(e,i){return e+i.value}),0),i={all:[0,e],min:0,max:e},s=2*a+(n.length-1)*d,l="vertical"===r?o-s:t-s;return u.createLinearScale({type:"linear"},i,l,"x")}),[n,o,t,r])}({data:E,width:b,height:M,layout:l,outerPadding:h,innerPadding:g}),O=function(i,n,o,t,r){return e.useMemo((function(){var e={all:[i,n],min:i,max:n},a="vertical"===r?t:o,d="vertical"===r?"y":"x";return u.createLinearScale({type:"linear",min:i,max:n},e,a,d)}),[i,n,o,t,r])}(j,I,b,M,l),q=v({data:E,stacked:P,dimensionIds:C,valueFormat:d,thicknessScale:W,dimensionsScale:O,colors:x,layout:l,outerPadding:h,innerPadding:g});return{computedData:q,bars:m(q,p,y),thicknessScale:W,dimensionsScale:O,dimensionIds:C}},x=function(i){var n,o=i.bar,t=i.animatedProps,r=i.isInteractive,a=i.tooltip,u=i.onClick,c=i.onMouseEnter,h=i.onMouseMove,f=i.onMouseLeave,v=s.useTooltip(),m=v.showTooltipFromEvent,g=v.hideTooltip,x=e.useCallback((function(i){return m(e.createElement(a,{bar:o}),i)}),[m,a,o]),p=e.useCallback((function(e){null==u||u(o,e)}),[u,o]),y=e.useCallback((function(e){null==c||c(o,e),x(e)}),[x,o]),b=e.useCallback((function(e){null==h||h(o,e),x(e)}),[x,o]),M=e.useCallback((function(e){null==f||f(o,e),g()}),[f,o,g]);return l.jsx(d.animated.rect,{x:t.x,y:t.y,width:d.to(t.width,(function(e){return Math.max(e,0)})),height:d.to(t.height,(function(e){return Math.max(e,0)})),fill:null!=(n=o.fill)?n:t.color,stroke:t.borderColor,strokeWidth:o.borderWidth,onClick:r?p:void 0,onMouseEnter:r?y:void 0,onMouseMove:r?b:void 0,onMouseLeave:r?M:void 0})},p=function(e){var n=e.bars,o=e.isInteractive,t=e.tooltip,r=e.onClick,a=e.onMouseEnter,u=e.onMouseMove,s=e.onMouseLeave,c=i.useMotionConfig(),h=c.animate,f=c.config,v=d.useTransition(n,{keys:function(e){return e.key},initial:function(e){return{x:e.x,y:e.y,width:e.width,height:e.height,color:e.color,opacity:1,borderColor:e.borderColor}},from:function(e){return{x:e.x,y:e.y,width:e.width,height:e.height,color:e.color,opacity:0,borderColor:e.borderColor}},enter:function(e){return{x:e.x,y:e.y,width:e.width,height:e.height,color:e.color,opacity:1,borderColor:e.borderColor}},update:function(e){return{x:e.x,y:e.y,width:e.width,height:e.height,color:e.color,opacity:1,borderColor:e.borderColor}},leave:function(e){return{opacity:0,x:e.x,y:e.y,width:e.width,height:e.height,color:e.color}},config:f,immediate:!h});return l.jsx(l.Fragment,{children:v((function(e,i){return l.jsx(x,{bar:i,animatedProps:e,isInteractive:o,tooltip:t,onClick:r,onMouseEnter:a,onMouseMove:u,onMouseLeave:s},i.key)}))})},y=function(e){var i=e.bar;return l.jsx(s.BasicTooltip,{id:i.datum.id+" - "+i.id,value:i.formattedValue,enableChip:!0,color:i.color})},b=["isInteractive","animate","motionConfig"],M=function(t){var r=t.data,a=t.id,u=t.value,d=t.valueFormat,s=t.dimensions,f=t.width,v=t.height,m=t.margin,x=t.layout,b=void 0===x?h.layout:x,M=t.offset,k=void 0===M?h.offset:M,C=t.outerPadding,w=void 0===C?h.outerPadding:C,S=t.innerPadding,P=void 0===S?h.innerPadding:S,j=t.layers,I=void 0===j?h.layers:j,E=t.axisTop,W=t.axisRight,O=t.axisBottom,q=t.axisLeft,L=t.enableGridX,F=void 0===L?h.enableGridX:L,G=t.gridXValues,T=t.enableGridY,V=void 0===T?h.enableGridY:T,D=t.gridYValues,B=t.colors,X=void 0===B?h.colors:B,Y=t.defs,H=void 0===Y?[]:Y,R=t.fill,A=void 0===R?[]:R,N=t.borderWidth,z=void 0===N?h.borderWidth:N,J=t.borderColor,K=void 0===J?h.borderColor:J,Q=t.isInteractive,U=void 0===Q?h.isInteractive:Q,Z=t.tooltip,$=void 0===Z?y:Z,_=t.onClick,ee=t.onMouseEnter,ie=t.onMouseMove,ne=t.onMouseLeave,oe=t.legends,te=void 0===oe?[]:oe,re=t.role,ae=i.useDimensions(f,v,m),ue=ae.outerWidth,de=ae.outerHeight,se=ae.margin,le=ae.innerWidth,ce=ae.innerHeight,he=g({data:r,id:a,value:u,dimensions:s,valueFormat:d,layout:b,offset:k,outerPadding:w,innerPadding:P,colors:X,borderColor:K,borderWidth:z,width:le,height:ce}),fe=he.computedData,ve=he.bars,me=he.thicknessScale,ge=he.dimensionsScale,xe=he.dimensionIds,pe={grid:null,axes:null,bars:null,legends:null},ye=i.bindDefs(H,ve,A);I.includes("bars")&&(pe.bars=l.jsx(p,{bars:ve,isInteractive:U,tooltip:$,onClick:_,onMouseEnter:ee,onMouseMove:ie,onMouseLeave:ne},"bars"));var be="vertical"===b?me:ge,Me="vertical"===b?ge:me;I.includes("grid")&&(pe.grid=l.jsx(n.Grid,{xScale:F?be:void 0,yScale:V?Me:void 0,width:le,height:ce,xValues:G,yValues:D},"grid")),I.includes("axes")&&(pe.axes=l.jsx(n.Axes,{xScale:be,yScale:Me,width:le,height:ce,top:E,right:W,bottom:O,left:q},"axes"));var ke=function(e,i){var n=[];return e.forEach((function(e){var o=i.find((function(i){return i.id===e}));o&&n.push({id:e,label:e,color:o.color,fill:o.fill})})),n}(xe,ve);I.includes("legends")&&(pe.legends=l.jsx("g",{children:te.map((function(e,i){return l.jsx(o.BoxLegendSvg,c({},e,{containerWidth:le,containerHeight:ce,data:ke}),i)}))},"legends"));var Ce=function(i){var n=i.data,o=i.bars,t=i.thicknessScale,r=i.dimensionsScale;return e.useMemo((function(){return{data:n,bars:o,thicknessScale:t,dimensionsScale:r}}),[n,o,t,r])}({data:fe,bars:ve,thicknessScale:me,dimensionsScale:ge});return l.jsx(i.SvgWrapper,{width:ue,height:de,margin:se,defs:ye,role:re,children:I.map((function(i,n){return void 0!==pe[i]?pe[i]:"function"==typeof i?l.jsx(e.Fragment,{children:e.createElement(i,Ce)},n):null}))})},k=function(e){var n=e.isInteractive,o=void 0===n?h.isInteractive:n,t=e.animate,r=void 0===t?h.animate:t,a=e.motionConfig,u=void 0===a?h.motionConfig:a,d=function(e,i){if(null==e)return{};var n,o,t={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],i.indexOf(n)>=0||(t[n]=e[n]);return t}(e,b);return l.jsx(i.Container,{theme:d.theme,isInteractive:o,animate:r,motionConfig:u,children:l.jsx(M,c({isInteractive:o,animate:r,motionConfig:u},d))})};exports.Marimekko=k,exports.ResponsiveMarimekko=function(e){return l.jsx(i.ResponsiveWrapper,{children:function(i){var n=i.width,o=i.height;return l.jsx(k,c({width:n,height:o},e))}})},exports.defaultProps=h,exports.offsetById=f;
//# sourceMappingURL=nivo-marimekko.cjs.js.map
