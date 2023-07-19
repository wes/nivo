"use strict";var e=require("react"),n=require("@nivo/core"),o=require("@react-spring/web"),i=require("react/jsx-runtime"),t=require("@nivo/tooltip"),r=require("d3-force"),d=require("@nivo/colors"),a=require("@nivo/annotations");function s(){return s=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e},s.apply(this,arguments)}function c(e,n){if(null==e)return{};var o,i,t={},r=Object.keys(e);for(i=0;i<r.length;i++)o=r[i],n.indexOf(o)>=0||(t[o]=e[o]);return t}var l=e.memo((function(e){var n=e.node,t=e.animated,r=e.onClick,d=e.onMouseEnter,a=e.onMouseMove,s=e.onMouseLeave;return i.jsx(o.animated.circle,{"data-testid":"node."+n.id,transform:o.to([t.x,t.y,t.scale],(function(e,n,o){return"translate("+e+","+n+") scale("+o+")"})),r:o.to([t.size],(function(e){return e/2})),fill:t.color,strokeWidth:t.borderWidth,stroke:t.borderColor,opacity:t.opacity,onClick:r?function(e){return r(n,e)}:void 0,onMouseEnter:d?function(e){return d(n,e)}:void 0,onMouseMove:a?function(e){return a(n,e)}:void 0,onMouseLeave:s?function(e){return s(n,e)}:void 0})})),u=e.memo((function(e){var n=e.link,t=e.animated,r=e.blendMode;return i.jsx(o.animated.line,{"data-testid":"link."+n.id,stroke:t.color,style:{mixBlendMode:r},strokeWidth:n.thickness,strokeLinecap:"round",opacity:t.opacity,x1:t.x1,y1:t.y1,x2:t.x2,y2:t.y2})})),v={layers:["links","nodes","annotations"],linkDistance:30,centeringStrength:1,repulsivity:10,distanceMin:1,distanceMax:1/0,iterations:120,nodeSize:12,activeNodeSize:18,inactiveNodeSize:8,nodeColor:"#000000",nodeBorderWidth:0,nodeBorderColor:{from:"color"},linkThickness:1,linkColor:{from:"source.color"},isInteractive:!0,defaultActiveNodeIds:[],nodeTooltip:function(e){var n=e.node;return i.jsx(t.BasicTooltip,{id:n.id,enableChip:!0,color:n.color})},annotations:[],animate:!0,motionConfig:"gentle",role:"img"},f=s({},v,{nodeComponent:l,linkComponent:u,linkBlendMode:"normal"}),h=s({},v,{renderNode:function(e,n){e.fillStyle=n.color,e.beginPath(),e.arc(n.x,n.y,n.size/2,0,2*Math.PI),e.fill(),n.borderWidth>0&&(e.strokeStyle=n.borderColor,e.lineWidth=n.borderWidth,e.stroke())},renderLink:function(e,n){e.strokeStyle=n.color,e.lineWidth=n.thickness,e.beginPath(),e.moveTo(n.source.x,n.source.y),e.lineTo(n.target.x,n.target.y),e.stroke()},pixelRatio:"undefined"!=typeof window&&window.devicePixelRatio||1}),k=["index"],p=function(n){return e.useMemo((function(){return"function"==typeof n?n:function(){return n}}),[n])},m=function(o){var i=o.center,t=o.nodes,a=o.links,l=o.linkDistance,u=void 0===l?v.linkDistance:l,f=o.centeringStrength,h=void 0===f?v.centeringStrength:f,m=o.repulsivity,g=void 0===m?v.repulsivity:m,C=o.distanceMin,x=void 0===C?v.distanceMin:C,y=o.distanceMax,M=void 0===y?v.distanceMax:y,b=o.iterations,S=void 0===b?v.iterations:b,N=o.nodeSize,z=void 0===N?v.nodeSize:N,I=o.activeNodeSize,W=void 0===I?v.activeNodeSize:I,T=o.inactiveNodeSize,B=void 0===T?v.inactiveNodeSize:T,j=o.nodeColor,w=void 0===j?v.nodeColor:j,A=o.nodeBorderWidth,D=void 0===A?v.nodeBorderWidth:A,E=o.nodeBorderColor,L=void 0===E?v.nodeBorderColor:E,R=o.linkThickness,P=void 0===R?v.linkThickness:R,q=o.linkColor,F=void 0===q?v.linkColor:q,O=o.isInteractive,H=void 0===O?v.isInteractive:O,G=o.defaultActiveNodeIds,J=void 0===G?v.defaultActiveNodeIds:G,K=e.useState(null),Q=K[0],U=K[1],V=e.useState(null),X=V[0],Y=V[1],Z=function(n){var o=n.linkDistance,i=n.centeringStrength,t=n.repulsivity,d=n.distanceMin,a=n.distanceMax,s=n.center,c=p(o),l=s[0],u=s[1];return e.useMemo((function(){return{link:r.forceLink().distance((function(e){return c(e.data)})).strength(i),charge:r.forceManyBody().strength(-t).distanceMin(d).distanceMax(a),center:r.forceCenter(l,u)}}),[c,i,t,d,a,l,u])}({linkDistance:u,centeringStrength:h,repulsivity:g,distanceMin:x,distanceMax:M,center:i});e.useEffect((function(){var e=t.map((function(e){return{id:e.id,data:s({},e),index:0,x:0,y:0,vx:0,vy:0}})),n=a.map((function(n){return{data:s({},n),index:0,source:e.find((function(e){return e.id===n.source})),target:e.find((function(e){return e.id===n.target}))}})),o=r.forceSimulation(e).force("link",Z.link.links(n)).force("charge",Z.charge).force("center",Z.center).stop();return o.tick(S),U(e),Y(n),function(){o.stop()}}),[t,a,Z,S,U,Y]);var $=e.useState(J),_=$[0],ee=$[1],ne=function(o){var i=o.size,t=o.activeSize,r=o.inactiveSize,a=o.color,c=o.borderWidth,l=o.borderColor,u=o.isInteractive,v=o.activeNodeIds,f=n.useTheme(),h=p(i),k=p(a),m=p(c),g=d.useInheritedColor(l,f),C=e.useCallback((function(e){var n=k(e.data);return{size:h(e.data),color:n,borderWidth:m(e.data),borderColor:g(s({},e,{color:n}))}}),[h,k,m,g]),x=p(t),y=e.useCallback((function(e){var n=k(e.data);return{size:x(e.data),color:n,borderWidth:m(e.data),borderColor:g(s({},e,{color:n}))}}),[x,k,m,g]),M=p(r),b=e.useCallback((function(e){var n=k(e.data);return{size:M(e.data),color:n,borderWidth:m(e.data),borderColor:g(s({},e,{color:n}))}}),[M,k,m,g]);return e.useCallback((function(e){return u&&0!==v.length?v.includes(e.id)?y(e):b(e):C(e)}),[C,y,b,u,v])}({size:z,activeSize:W,inactiveSize:B,color:w,borderWidth:D,borderColor:L,isInteractive:H,activeNodeIds:_}),oe=e.useMemo((function(){return null===Q?null:Q.map((function(e){return s({},e,ne(e))}))}),[Q,ne]),ie=n.useTheme(),te=p(P),re=d.useInheritedColor(F,ie),de=e.useMemo((function(){return null===X||null===oe?null:X.map((function(e){var n=e.index,o=c(e,k),i={id:o.source.id+"."+o.target.id,data:o.data,index:n,source:oe.find((function(e){return e.id===o.source.id})),target:oe.find((function(e){return e.id===o.target.id}))};return s({},i,{thickness:te(i),color:re(i)})}))}),[X,oe,te,re]);return{nodes:oe,links:de,activeNodeIds:_,setActiveNodeIds:ee}},g=function(e){return{x:e.x,y:e.y}},C=function(e){return{size:e.size,width:e.size,height:e.size}},x=function(e,n){return a.useAnnotations({data:e,annotations:n,getPosition:g,getDimensions:C})},y=function(t){var r=t.links,d=t.linkComponent,a=t.blendMode,s=n.useMotionConfig(),c=s.animate,l=s.config,u=e.useMemo((function(){return[function(e){return{x1:e.source.x,y1:e.source.y,x2:e.source.x,y2:e.source.y,color:e.color,opacity:0}},function(e){return{x1:e.source.x,y1:e.source.y,x2:e.target.x,y2:e.target.y,color:e.color,opacity:1}}]}),[]),v=u[0],f=u[1],h=o.useTransition(r,{keys:function(e){return e.id},initial:f,from:v,enter:f,update:f,expires:!0,config:l,immediate:!c});return i.jsx(i.Fragment,{children:h((function(n,o){return e.createElement(d,{key:o.id,link:o,animated:n,blendMode:a})}))})},M=function(r){var d=r.nodes,a=r.nodeComponent,s=r.onMouseEnter,c=r.onMouseMove,l=r.onMouseLeave,u=r.onClick,v=r.tooltip,f=r.setActiveNodeIds,h=r.isInteractive,k=n.useMotionConfig(),p=k.animate,m=k.config,g=e.useMemo((function(){return[function(e){return{x:e.x,y:e.y,size:e.size,color:e.color,borderWidth:e.borderWidth,borderColor:e.borderColor,scale:0,opacity:0}},function(e){return{x:e.x,y:e.y,size:e.size,color:e.color,borderWidth:e.borderWidth,borderColor:e.borderColor,scale:1,opacity:1}},function(e){return{x:e.x,y:e.y,size:e.size,color:e.color,borderWidth:e.borderWidth,borderColor:e.borderColor,scale:0,opacity:0}}]}),[]),C=g[0],x=g[1],y=g[2],M=o.useTransition(d,{keys:function(e){return e.id},initial:x,from:C,enter:x,update:x,leave:y,config:m,immediate:!p}),b=t.useTooltip(),S=b.showTooltipFromEvent,N=b.hideTooltip,z=e.useCallback((function(n,o){S(e.createElement(v,{node:n}),o),f([n.id]),null==s||s(n,o)}),[S,v,f,s]),I=e.useCallback((function(n,o){S(e.createElement(v,{node:n}),o),null==c||c(n,o)}),[S,v,c]),W=e.useCallback((function(e,n){N(),f([]),null==l||l(e,n)}),[N,f,l]);return i.jsx(i.Fragment,{children:M((function(n,o){return e.createElement(a,{key:o.id,node:o,animated:n,onMouseEnter:h?z:void 0,onMouseMove:h?I:void 0,onMouseLeave:h?W:void 0,onClick:h?u:void 0})}))})},b=function(e){var n=e.nodes,o=e.annotations,t=x(n,o);return i.jsx(i.Fragment,{children:t.map((function(e,n){return i.jsx(a.Annotation,s({},e),n)}))})},S=["isInteractive","animate","motionConfig","theme","renderWrapper"],N=function(o){var t=o.width,r=o.height,d=o.margin,a=o.data,s=a.nodes,c=a.links,l=o.linkDistance,u=void 0===l?f.linkDistance:l,v=o.centeringStrength,h=void 0===v?f.centeringStrength:v,k=o.repulsivity,p=void 0===k?f.repulsivity:k,g=o.distanceMin,C=void 0===g?f.distanceMin:g,x=o.distanceMax,S=void 0===x?f.distanceMax:x,N=o.iterations,z=void 0===N?f.iterations:N,I=o.layers,W=void 0===I?f.layers:I,T=o.nodeComponent,B=void 0===T?f.nodeComponent:T,j=o.nodeSize,w=void 0===j?f.nodeSize:j,A=o.activeNodeSize,D=void 0===A?f.activeNodeSize:A,E=o.inactiveNodeSize,L=void 0===E?f.inactiveNodeSize:E,R=o.nodeColor,P=void 0===R?f.nodeColor:R,q=o.nodeBorderWidth,F=void 0===q?f.nodeBorderWidth:q,O=o.nodeBorderColor,H=void 0===O?f.nodeBorderColor:O,G=o.linkComponent,J=void 0===G?f.linkComponent:G,K=o.linkThickness,Q=void 0===K?f.linkThickness:K,U=o.linkColor,V=void 0===U?f.linkColor:U,X=o.linkBlendMode,Y=void 0===X?f.linkBlendMode:X,Z=o.annotations,$=void 0===Z?f.annotations:Z,_=o.isInteractive,ee=void 0===_?f.isInteractive:_,ne=o.defaultActiveNodeIds,oe=void 0===ne?f.defaultActiveNodeIds:ne,ie=o.nodeTooltip,te=void 0===ie?f.nodeTooltip:ie,re=o.onMouseEnter,de=o.onMouseMove,ae=o.onMouseLeave,se=o.onClick,ce=o.role,le=void 0===ce?f.role:ce,ue=o.ariaLabel,ve=o.ariaLabelledBy,fe=o.ariaDescribedBy,he=n.useDimensions(t,r,d),ke=he.margin,pe=he.innerWidth,me=he.innerHeight,ge=he.outerWidth,Ce=he.outerHeight,xe=m({center:[pe/2,me/2],nodes:s,links:c,linkDistance:u,centeringStrength:h,repulsivity:p,distanceMin:C,distanceMax:S,iterations:z,nodeSize:w,activeNodeSize:D,inactiveNodeSize:L,nodeColor:P,nodeBorderWidth:F,nodeBorderColor:H,linkThickness:Q,linkColor:V,isInteractive:ee,defaultActiveNodeIds:oe}),ye=xe.nodes,Me=xe.links,be=xe.activeNodeIds,Se=xe.setActiveNodeIds,Ne={links:null,nodes:null,annotations:null};W.includes("links")&&null!==Me&&(Ne.links=i.jsx(y,{links:Me,linkComponent:J,blendMode:Y},"links")),W.includes("nodes")&&null!==ye&&(Ne.nodes=i.jsx(M,{nodes:ye,nodeComponent:B,onMouseEnter:re,onMouseMove:de,onMouseLeave:ae,onClick:se,tooltip:te,setActiveNodeIds:Se,isInteractive:ee},"nodes")),W.includes("annotations")&&null!==ye&&(Ne.annotations=i.jsx(b,{nodes:ye,annotations:$},"annotations"));var ze=e.useMemo((function(){return{nodes:ye||[],links:Me||[],activeNodeIds:be,setActiveNodeIds:Se}}),[ye,Me,be,Se]);return i.jsx(n.SvgWrapper,{width:ge,height:Ce,margin:ke,role:le,ariaLabel:ue,ariaLabelledBy:ve,ariaDescribedBy:fe,children:W.map((function(n,o){var t;return"function"==typeof n?i.jsx(e.Fragment,{children:e.createElement(n,ze)},o):null!=(t=null==Ne?void 0:Ne[n])?t:null}))})},z=function(e){var o=e.isInteractive,t=void 0===o?f.isInteractive:o,r=e.animate,d=void 0===r?f.animate:r,a=e.motionConfig,l=void 0===a?f.motionConfig:a,u=e.theme,v=e.renderWrapper,h=c(e,S);return i.jsx(n.Container,{animate:d,isInteractive:t,motionConfig:l,renderWrapper:v,theme:u,children:i.jsx(N,s({isInteractive:t},h))})},I=["theme","isInteractive","animate","motionConfig","renderWrapper"],W=function(o){var r=o.width,d=o.height,s=o.margin,c=o.pixelRatio,l=void 0===c?h.pixelRatio:c,u=o.data,v=u.nodes,f=u.links,k=o.linkDistance,p=void 0===k?h.linkDistance:k,g=o.centeringStrength,C=void 0===g?h.centeringStrength:g,y=o.repulsivity,M=void 0===y?h.repulsivity:y,b=o.distanceMin,S=void 0===b?h.distanceMin:b,N=o.distanceMax,z=void 0===N?h.distanceMax:N,I=o.iterations,W=void 0===I?h.iterations:I,T=o.layers,B=void 0===T?h.layers:T,j=o.renderNode,w=void 0===j?h.renderNode:j,A=o.nodeSize,D=void 0===A?h.nodeSize:A,E=o.activeNodeSize,L=void 0===E?h.activeNodeSize:E,R=o.inactiveNodeSize,P=void 0===R?h.inactiveNodeSize:R,q=o.nodeColor,F=void 0===q?h.nodeColor:q,O=o.nodeBorderWidth,H=void 0===O?h.nodeBorderWidth:O,G=o.nodeBorderColor,J=void 0===G?h.nodeBorderColor:G,K=o.renderLink,Q=void 0===K?h.renderLink:K,U=o.linkThickness,V=void 0===U?h.linkThickness:U,X=o.linkColor,Y=void 0===X?h.linkColor:X,Z=o.annotations,$=void 0===Z?h.annotations:Z,_=o.isInteractive,ee=void 0===_?h.isInteractive:_,ne=o.defaultActiveNodeIds,oe=void 0===ne?h.defaultActiveNodeIds:ne,ie=o.nodeTooltip,te=void 0===ie?h.nodeTooltip:ie,re=o.onClick,de=o.canvasRef,ae=e.useRef(null),se=n.useDimensions(r,d,s),ce=se.margin,le=se.innerWidth,ue=se.innerHeight,ve=se.outerWidth,fe=se.outerHeight,he=m({center:[le/2,ue/2],nodes:v,links:f,linkDistance:p,centeringStrength:C,repulsivity:M,distanceMin:S,distanceMax:z,iterations:W,nodeSize:D,activeNodeSize:L,inactiveNodeSize:P,nodeColor:F,nodeBorderWidth:H,nodeBorderColor:J,linkThickness:V,linkColor:Y,isInteractive:ee,defaultActiveNodeIds:oe}),ke=he.nodes,pe=he.links,me=he.activeNodeIds,ge=he.setActiveNodeIds,Ce=x(ke,$),xe=a.useComputedAnnotations({annotations:Ce}),ye=e.useMemo((function(){return{nodes:ke||[],links:pe||[],activeNodeIds:me,setActiveNodeIds:ge}}),[ke,pe,me,ge]),Me=n.useTheme();e.useEffect((function(){if(null!==ae.current){ae.current.width=ve*l,ae.current.height=fe*l;var e=ae.current.getContext("2d");e.scale(l,l),e.fillStyle=Me.background,e.fillRect(0,0,ve,fe),e.translate(ce.left,ce.top),B.forEach((function(n){"links"===n&&null!==pe?pe.forEach((function(n){return Q(e,n)})):"nodes"===n&&null!==ke?ke.forEach((function(n){return w(e,n)})):"annotations"===n?a.renderAnnotationsToCanvas(e,{annotations:xe,theme:Me}):"function"==typeof n&&null!==ke&&null!==pe&&n(e,ye)}))}}),[ae,ve,fe,ce.left,ce.top,l,B,Me,ke,pe,w,Q,xe,ye]);var be=e.useCallback((function(e){if(ae.current&&null!==ke){var o=n.getRelativeCursor(ae.current,e),i=o[0],t=o[1];return ke.find((function(e){return n.getDistance(e.x,e.y,i-ce.left,t-ce.top)<=e.size/2}))}}),[ae,ce,ke]),Se=t.useTooltip(),Ne=Se.showTooltipFromEvent,ze=Se.hideTooltip,Ie=e.useCallback((function(n){var o=be(n);o?(Ne(e.createElement(te,{node:o}),n),ge([o.id])):(ze(),ge([]))}),[be,Ne,te,ze,ge]),We=e.useCallback((function(){ze(),ge([])}),[ze,ge]),Te=e.useCallback((function(e){if(re){var n=be(e);n&&re(n,e)}}),[be,re]);return i.jsx("canvas",{ref:function(e){ae.current=e,de&&"current"in de&&(de.current=e)},width:ve*l,height:fe*l,style:{width:ve,height:fe,cursor:ee?"auto":"normal"},onClick:ee?Te:void 0,onMouseEnter:ee?Ie:void 0,onMouseLeave:ee?We:void 0,onMouseMove:ee?Ie:void 0})},T=e.forwardRef((function(e,o){var t=e.theme,r=e.isInteractive,d=void 0===r?h.isInteractive:r,a=e.animate,l=void 0===a?h.animate:a,u=e.motionConfig,v=void 0===u?h.motionConfig:u,f=e.renderWrapper,k=c(e,I);return i.jsx(n.Container,{isInteractive:d,animate:l,motionConfig:v,theme:t,renderWrapper:f,children:i.jsx(W,s({isInteractive:d},k,{canvasRef:o}))})})),B=e.forwardRef((function(e,o){return i.jsx(n.ResponsiveWrapper,{children:function(n){var t=n.width,r=n.height;return i.jsx(T,s({width:t,height:r},e,{ref:o}))}})}));exports.Network=z,exports.NetworkCanvas=T,exports.ResponsiveNetwork=function(e){return i.jsx(n.ResponsiveWrapper,{children:function(n){var o=n.width,t=n.height;return i.jsx(z,s({width:o,height:t},e))}})},exports.ResponsiveNetworkCanvas=B,exports.canvasDefaultProps=h,exports.commonDefaultProps=v,exports.svgDefaultProps=f,exports.useNetwork=m,exports.useNodeAnnotations=x;
//# sourceMappingURL=nivo-network.cjs.js.map
