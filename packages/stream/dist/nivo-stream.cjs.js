"use strict";var e=require("react"),o=require("@nivo/core"),r=require("@nivo/axes"),t=require("@nivo/legends"),i=require("@react-spring/web"),n=require("@nivo/tooltip"),l=require("react/jsx-runtime"),a=require("d3-shape"),d=require("@nivo/colors"),s=require("@nivo/scales");function c(){return c=Object.assign?Object.assign.bind():function(e){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},c.apply(this,arguments)}var u=function(r){var t=r.layer,a=r.fillOpacity,d=r.borderWidth,s=r.getBorderColor,c=r.isInteractive,u=r.tooltip,f=n.useTooltip(),p=f.showTooltipFromEvent,h=f.hideTooltip,v=e.useCallback((function(o){p(e.createElement(u,{layer:t}),o,"left")}),[p,t]),m=o.useMotionConfig(),g=m.animate,y=m.config,x=o.useAnimatedPath(t.path),b=i.useSpring({color:t.color,config:y,immediate:!g});return l.jsx(i.animated.path,{d:x,fill:t.fill?t.fill:b.color,fillOpacity:a,stroke:s(t),strokeWidth:d,onMouseMove:c?v:void 0,onMouseEnter:c?v:void 0,onMouseLeave:c?h:void 0})},f=function(e){var o=e.layers,r=e.fillOpacity,t=e.borderWidth,i=e.getBorderColor,n=e.isInteractive,a=e.tooltip;return l.jsx("g",{children:o.map((function(e,o){return l.jsx(u,{layer:e,getBorderColor:i,borderWidth:t,fillOpacity:r,isInteractive:n,tooltip:a},o)}))})},p=function(e,o){var r=e.y2;return"center"===o?r=e.y1+(e.y2-e.y1)/2:"start"===o&&(r=e.y1),r},h=function(o){var r=o.data,t=o.dotComponent,i=o.position,n=o.getSize,a=o.getColor,d=o.getBorderWidth,s=o.getBorderColor;return l.jsx(l.Fragment,{children:r.map((function(o,r){return e.createElement(t,{key:r,datum:o,x:o.x,y:p(o,i),size:n(o),color:a(o),borderWidth:d(o),borderColor:s(o)})}))})},v=function(o){var r=o.slice,t=o.height,i=o.tooltip,a=e.useState(!1),d=a[0],s=a[1],c=n.useTooltip(),u=c.showTooltipFromEvent,f=c.hideTooltip,p=e.useCallback((function(o){s(!0),u(e.createElement(i,{slice:r}),o,"left")}),[s,u,i,r]),h=e.useCallback((function(){s(!1),f()}),[s,f]);return l.jsxs("g",{transform:"translate("+r.x+", 0)",children:[d&&l.jsx("line",{x1:0,x2:0,y1:0,y2:t,stroke:"#000",strokeOpacity:.35,strokeWidth:1}),l.jsx("rect",{x:-20,width:40,height:t,fill:"#000",fillOpacity:0,onMouseEnter:p,onMouseMove:p,onMouseLeave:h})]})},m=function(e){var o=e.slices,r=e.height,t=e.tooltip;return l.jsx("g",{children:o.map((function(e){return l.jsx(v,{slice:e,height:r,tooltip:t},e.index)}))})},g={label:"id",order:"none",offsetType:"wiggle",curve:"catmullRom",axisBottom:{},axisLeft:{},enableGridX:!1,enableGridY:!0,colors:{scheme:"nivo"},fillOpacity:1,borderWidth:0,borderColor:{from:"color",modifiers:[["darker",1]]},enableDots:!1,dotPosition:"center",dotComponent:function(e){var r=e.x,t=e.y,n=e.size,a=e.color,d=e.borderWidth,s=e.borderColor,c=o.useMotionConfig(),u=c.animate,f=c.config,p=i.useSpring({x:r,y:t,radius:.5*n,color:a,config:f,immediate:!u});return l.jsx(i.animated.circle,{cx:p.x,cy:p.y,r:p.radius,fill:p.color,strokeWidth:d,stroke:s})},dotSize:6,dotColor:{from:"color"},dotBorderWidth:0,dotBorderColor:{from:"color"},isInteractive:!0,tooltip:function(e){var o=e.layer;return l.jsx(n.BasicTooltip,{id:o.label,enableChip:!0,color:o.color})},enableStackTooltip:!0,stackTooltip:function(o){var r=o.slice,t=e.useMemo((function(){return r.stack.map((function(e){return[l.jsx(n.Chip,{color:e.color},e.layerId),e.layerLabel,e.formattedValue]}))}),[r]);return l.jsx(n.TableTooltip,{rows:t})},legends:[],legendLabel:"id",role:"application"},y=c({},g,{layers:["grid","axes","layers","dots","slices","legends"],defs:[],fill:[],animate:!0,motionConfig:"default",role:"img",isFocusable:!1}),x=function(r){var t=r.width,i=r.height,n=r.data,l=r.keys,u=r.label,f=void 0===u?g.label:u,p=r.valueFormat,h=r.offsetType,v=void 0===h?g.offsetType:h,m=r.order,y=void 0===m?g.order:m,x=r.curve,b=void 0===x?g.curve:x,C=r.colors,B=void 0===C?g.colors:C,j=r.borderColor,S=void 0===j?g.borderColor:j,k=r.dotSize,W=void 0===k?g.dotSize:k,M=r.dotColor,T=void 0===M?g.dotColor:M,O=r.dotBorderWidth,I=void 0===O?g.dotBorderWidth:O,D=r.dotBorderColor,w=void 0===D?g.dotBorderColor:D,L=o.useCurveInterpolation(b),F=e.useMemo((function(){return a.area().x((function(e){return e.x})).y0((function(e){return e.y1})).y1((function(e){return e.y2})).curve(L)}),[L]),z=e.useMemo((function(){return a.stack().keys(l).offset(o.stackOffsetFromProp(v)).order(o.stackOrderFromProp(y))}),[l,v,y]),P=e.useMemo((function(){var e=[],o=[],r=z(n).map((function(r){return r.map((function(t){return e.push(t[0]),o.push(t[1]),c({},t,{value:t.data[r.key]})}))})),l=Math.min.apply(Math,e),a=Math.max.apply(Math,o);return[r,s.createPointScale({type:"point"},{all:Array.from({length:n.length},(function(e,o){return o})),min:0,max:n.length},t),s.createLinearScale({type:"linear"},{all:[l,a],min:l,max:a},i,"y")]}),[z,n,t,i]),q=P[0],E=P[1],G=P[2],A=o.useTheme(),R=d.useOrdinalColorScale(B,"id"),H=d.useInheritedColor(S,A),V=e.useMemo((function(){return"function"==typeof W?W:function(){return W}}),[W]),X=d.useInheritedColor(T,A),Y=e.useMemo((function(){return"function"==typeof I?I:function(){return I}}),[I]),J=d.useInheritedColor(w,A),K=o.usePropertyAccessor(f),N=o.useValueFormatter(p),Q=e.useMemo((function(){return q.map((function(e,o){var r=e.map((function(e,r){return{layerId:l[o],layerLabel:"",index:r,color:"",x:E(r),value:e.value,formattedValue:N(e.value),y1:G(e[0]),y2:G(e[1])}})),t={id:l[o],path:F(r)},i=c({},t,{label:K(t),color:R(t)});return c({},i,{data:r.map((function(e){return e.layerLabel=i.label,e.color=i.color,e}))})}))}),[q,l,K,F,R,E,G,N]),U=e.useMemo((function(){return Array.from({length:n.length},(function(e,o){var r=Q.map((function(e){return e.data[o]})).sort((function(e,o){return e.y2-o.y2}));return{index:o,x:Q[0].data[o].x,stack:r}}))}),[n.length,Q]),Z=e.useMemo((function(){return{xScale:E,yScale:G,layers:Q,slices:U}}),[E,G,Q,U]);return{xScale:E,yScale:G,layers:Q,slices:U,getBorderColor:H,getDotSize:V,getDotColor:X,getDotBorderWidth:Y,getDotBorderColor:J,layerContext:Z}},b=["isInteractive","animate","motionConfig","theme","renderWrapper"],C=function(i){var n=i.data,a=i.keys,d=i.label,s=i.valueFormat,u=i.offsetType,p=i.order,v=i.curve,g=i.layers,b=void 0===g?y.layers:g,C=i.width,B=i.height,j=i.margin,S=i.axisTop,k=i.axisRight,W=i.axisBottom,M=void 0===W?y.axisBottom:W,T=i.axisLeft,O=void 0===T?y.axisLeft:T,I=i.enableGridX,D=void 0===I?y.enableGridX:I,w=i.enableGridY,L=void 0===w?y.enableGridY:w,F=i.colors,z=i.fillOpacity,P=void 0===z?y.fillOpacity:z,q=i.borderWidth,E=void 0===q?y.borderWidth:q,G=i.borderColor,A=i.defs,R=void 0===A?y.defs:A,H=i.fill,V=void 0===H?y.fill:H,X=i.enableDots,Y=void 0===X?y.enableDots:X,J=i.dotPosition,K=void 0===J?y.dotPosition:J,N=i.dotComponent,Q=void 0===N?y.dotComponent:N,U=i.dotSize,Z=i.dotColor,$=i.dotBorderWidth,_=i.dotBorderColor,ee=i.isInteractive,oe=void 0===ee?y.isInteractive:ee,re=i.tooltip,te=void 0===re?y.tooltip:re,ie=i.enableStackTooltip,ne=void 0===ie?y.enableStackTooltip:ie,le=i.stackTooltip,ae=void 0===le?y.stackTooltip:le,de=i.legends,se=void 0===de?y.legends:de,ce=i.role,ue=i.ariaLabel,fe=i.ariaLabelledBy,pe=i.ariaDescribedBy,he=o.useDimensions(C,B,j),ve=he.margin,me=he.innerWidth,ge=he.innerHeight,ye=he.outerWidth,xe=he.outerHeight,be=x({width:me,height:ge,data:n,keys:a,label:d,valueFormat:s,offsetType:u,order:p,curve:v,colors:F,borderColor:G,dotSize:U,dotColor:Z,dotBorderWidth:$,dotBorderColor:_}),Ce=be.xScale,Be=be.yScale,je=be.layers,Se=be.slices,ke=be.getBorderColor,We=be.getDotSize,Me=be.getDotColor,Te=be.getDotBorderWidth,Oe=be.getDotBorderColor,Ie=be.layerContext,De=o.bindDefs(R,je,V),we={grid:null,axes:null,layers:null,dots:null,slices:null,legends:null};return b.includes("grid")&&(we.grid=l.jsx(r.Grid,{width:me,height:ge,xScale:D?Ce:null,yScale:L?Be:null},"grid")),b.includes("axes")&&(we.axes=l.jsx(r.Axes,{xScale:Ce,yScale:Be,width:me,height:ge,top:S,right:k,bottom:M,left:O},"axes")),b.includes("layers")&&(we.layers=l.jsx(f,{layers:je,fillOpacity:P,borderWidth:E,getBorderColor:ke,isInteractive:oe,tooltip:te},"layers")),b.includes("dots")&&Y&&(we.dots=l.jsx(e.Fragment,{children:je.map((function(e){return l.jsx(h,{id:e.id,color:e.color,data:e.data,dotComponent:Q,position:K,getSize:We,getColor:Me,getBorderWidth:Te,getBorderColor:Oe},e.id)}))},"dots")),b.includes("slices")&&oe&&ne&&(we.slices=l.jsx(m,{slices:Se,height:ge,tooltip:ae},"slices")),b.includes("legends")&&(we.legends=l.jsx(e.Fragment,{children:se.map((function(e,o){var r=je.map((function(e){return{id:e.id,label:e.label,color:e.color,fill:e.fill}})).reverse();return l.jsx(t.BoxLegendSvg,c({},e,{containerWidth:me,containerHeight:ge,data:r}),o)}))},"legends")),l.jsx(o.SvgWrapper,{width:ye,height:xe,margin:ve,defs:De,role:ce,ariaLabel:ue,ariaLabelledBy:fe,ariaDescribedBy:pe,children:b.map((function(o,r){var t;return"function"==typeof o?l.jsx(e.Fragment,{children:e.createElement(o,Ie)},r):null!=(t=null==we?void 0:we[o])?t:null}))})},B=function(e){var r=e.isInteractive,t=void 0===r?y.isInteractive:r,i=e.animate,n=void 0===i?y.animate:i,a=e.motionConfig,d=void 0===a?y.motionConfig:a,s=e.theme,u=e.renderWrapper,f=function(e,o){if(null==e)return{};var r,t,i={},n=Object.keys(e);for(t=0;t<n.length;t++)r=n[t],o.indexOf(r)>=0||(i[r]=e[r]);return i}(e,b);return l.jsx(o.Container,{animate:n,isInteractive:t,motionConfig:d,renderWrapper:u,theme:s,children:l.jsx(C,c({isInteractive:t},f))})};exports.ResponsiveStream=function(e){return l.jsx(o.ResponsiveWrapper,{children:function(o){var r=o.width,t=o.height;return l.jsx(B,c({width:r,height:t},e))}})},exports.Stream=B,exports.defaultProps=g,exports.svgDefaultProps=y;
//# sourceMappingURL=nivo-stream.cjs.js.map
