// env=undefined => env=publish 
Cube("datav:/com/ml-bar-percent/5.3.3/customRuleStyle",["datav:/npm/lodash/4.17.11/set","datav:/npm/lodash/4.17.11/get","datav:/npm/alibabacloud-datav-tool-gui-utils/1.0.0"],function(t,e,o,r,l,n){function a(e,t){var o,r=Object.keys(e);return Object.getOwnPropertySymbols&&(o=Object.getOwnPropertySymbols(e),t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)),r}function g(r){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach(function(t){var e,o;e=r,o=l[t=t],t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach(function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(l,t))})}return r}var v=o("datav:/npm/lodash/4.17.11/set"),h=o("datav:/npm/lodash/4.17.11/get"),y=o("datav:/com/ml-bar-percent/5.3.3/utils").transformGradientColor,o=o("datav:/npm/alibabacloud-datav-tool-gui-utils/1.0.0"),m=o.scale,O=o.validateCustomStyle,w="colorField",j=["fill"];return t.exports=function(){var r,t,l,n,a,i,c,s,u,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},o=e.props,d=e.guiConfig,e=e.data,d=(void 0===d?{}:d).options,p=d.chart,f=p.fill,p=p.pattern,b=d.condition.customStyle,d=d.legend.isShow;b=(o={props:void 0===o?{}:o,customStyle:b,fill:f,data:e,show:d,pattern:p}).props,r=o.customStyle,f=o.fill,e=o.data,o.show,o=o.pattern,v(b,"seriesField",w),t=h(m,"color.g2plot")({config:f,data:e,field:w}),v(b,"color",t),v(b,"columnStyle",function(){var e={fill:t(arguments.length<=0?void 0:arguments[0])};return O({config:r,data:arguments.length<=0?void 0:arguments[0],ruleKey:"rules"}).forEach(function(o){var t=j.reduce(function(t,e){return o[e]&&o[e].show&&(t[e]=o[e]&&o[e].value),g(g({},t),y(t.fill))},{});Object.assign(e,t)}),e}),l=o.show,n=o.type,a=o.patternFill,i=o.lineFill,c=o.patternStroke,s=o.dotCfg,u=o.lineCfg,l&&v(b,"pattern",function(t,e){var o={backgroundColor:e},e=(O({config:r,data:t,ruleKey:"rules"}).forEach(function(t){t=t.fill;o=t.show?{backgroundColor:y(t.value).fill}:o}),l?"line"===n?u:s:"");return{type:n,cfg:g(g({},o),{},{fill:a.fill,fillOpacity:1,strokeOpacity:1,stroke:"line"===n?i.stroke:c.show?c.stroke:"rgba(255,255,255,0)",lineWidth:"line"===n?i.lineWidth:c.show?c.lineWidth:0},e)}})},t.exports});;
Cube("datav:/com/ml-bar-percent/5.3.3/utils",["datav:/npm/lodash/4.17.11/toNumber","datav:/npm/lodash/4.17.11/forEach","datav:/npm/lodash/4.17.11/isNumber","datav:/npm/lodash/4.17.11/map","datav:/npm/lodash/4.17.11/get","datav:/npm/lodash/4.17.11/set","datav:/npm/lodash/4.17.11/trim","datav:/npm/lodash/4.17.11/isUndefined","datav:/npm/lodash/4.17.11/isNull","datav:/npm/lodash/4.17.11/min","datav:/npm/lodash/4.17.11/max","datav:/npm/lodash/4.17.11/isNaN","datav:/npm/lodash/4.17.11/sumBy","datav:/npm/lodash/4.17.11/each","datav:/npm/moment/2.27.0","datav:/npm/d3-format/3.1.0"],function(t,a,n,e,o,i){function r(a,t){var n,e=Object.keys(a);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(a),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})),e.push.apply(e,n)),e}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach(function(t){var a,n;a=e,n=o[t=t],t in a?Object.defineProperty(a,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[t]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function L(t){var a=t.x,n=t.y,e=t.r,t=t.type,o=e/2*Math.sqrt(3),i=e*Math.sin(1/3*Math.PI);return{line:[["M",a-3*e,n],["L",a+3*e,n]],lineEllipsis:[["M",a-3*e,n],["L",a-2*e,n],["M",a-e,n],["L",a,n],["M",a+e,n],["L",a+2*e,n],["M",a+3*e,n],["L",a+4*e,n]],smooth:[["M",a-e,n],["A",e/2,e/2,0,1,1,a,n],["A",e/2,e/2,0,1,0,a+e,n]],smoothEllipsis:[["M",150,100],["C",150,72.4,72.4,50,100,50]],step:[["M",a-e-1,n-2.5],["L",a,n-2.5],["L",a,n+2.5],["L",a+e+1,n+2.5]],stepEllipsis:[["M",a-e-1,n-2.5],["L",a-e+3,n-2.5],["M",a-e/2+2,n-2.5],["L",a,n-2.5],["L",a,n+2.5],["L",a+4,n+2.5],["M",a+e/2+3,n+2.5],["L",a+e+1,n+2.5]],circle:[["M",a,n+e],["A",e,e,0,0,0,a+e,n],["M",a,n+e],["A",e,e,0,1,1,a+e,n]],circleLine:[["M",a-3*e,n],["L",a-e,n],["M",a+e,n],["L",a+3*e,n],["M",a,n+e],["A",e,e,0,0,0,a+e,n],["M",a,n+e],["A",e,e,0,1,1,a+e,n]],circleEllipsis:[["M",a-3*e,n],["L",a-2*e,n],["M",a-e-e/2,n],["L",a-e-2,n],["M",a+e+2,n],["L",a+e+e/2,n],["M",a+3*e,n],["L",a+2*e,n],["M",a,n+e],["A",e,e,0,0,0,a+e,n],["M",a,n+e],["A",e,e,0,1,1,a+e,n]],square:[["M",a-e,n-e],["L",a+e,n-e],["L",a+e,n+e],["L",a-e,n+e],["Z"]],squareLine:[["M",a-3*e,n],["L",a-e,n],["M",a+e,n],["L",a+3*e,n],["M",a-e,n-e],["L",a+e,n-e],["L",a+e,n+e],["L",a-e,n+e],["Z"]],squareEllipsis:[["M",a-3*e,n],["L",a-2*e,n],["M",a-e-e/2,n],["L",a-e-2,n],["M",a+e+2,n],["L",a+e+e/2,n],["M",a+3*e,n],["L",a+2*e,n],["M",a-e,n-e],["L",a+e,n-e],["L",a+e,n+e],["L",a-e,n+e],["Z"]],hexagon:[["M",a,n-e-2],["L",a+o+1,n-e/2-1],["L",a+o+1,n+e/2+1],["L",a,n+e+1+1],["L",a-o-1,n+e/2+1],["L",a-o-1,n-e/2-1],["Z"]],hexagonLine:[["M",a-3*e,n],["L",a-e-(e<=3?1:0),n],["M",a+e+(e<=3?1:0),n],["L",a+3*e,n],["M",a,n-e-2],["L",a+o+1,n-e/2-1],["L",a+o+1,n+e/2+1],["L",a,n+e+1+1],["L",a-o-1,n+e/2+1],["L",a-o-1,n-e/2-1],["Z"]],hexagonEllipsis:[["M",a-3*e,n],["L",a-2*e,n],["M",a-e-e/2,n],["L",a-e-1,n],["M",a+e+1,n],["L",a+e+e/2,n],["M",a+3*e,n],["L",a+2*e,n],["M",a,n-e-2],["L",a+o+1,n-e/2-1],["L",a+o+1,n+e/2+1],["L",a,n+e+1+1],["L",a-o-1,n+e/2+1],["L",a-o-1,n-e/2-1],["Z"]],diamond:[["M",a-e-2,n],["L",a,n-e-2],["L",a+e+2,n],["L",a,n+e+2],["Z"]],diamondLine:[["M",a-3*e,n],["L",a-e-1,n],["M",a+e+1,n],["L",a+3*e,n],["M",a-e-2,n],["L",a,n-e-2],["L",a+e+2,n],["L",a,n+e+2],["Z"]],diamondEllipsis:[["M",a-3*e,n],["L",a-2*e,n],["M",a-e-e/2,n],["L",a-e-2,n],["M",a+e+2,n],["L",a+e+e/2,n],["M",a+3*e,n],["L",a+2*e,n],["M",a-e-2,n],["L",a,n-e-2],["L",a+e+2,n],["L",a,n+e+2],["Z"]],triangle:[["M",a-e,n+i],["L",a,n-i],["L",a+e,n+i],["z"]],triangleLine:[["M",a-3*e,n],["L",a-e+e/2,n],["M",a+e-e/2,n],["L",a+3*e,n],["M",a-e,n+i],["L",a,n-i],["L",a+e,n+i],["z"]],triangleEllipsis:[["M",a-3*e,n],["L",a-2*e,n],["M",a-e-e/2,n],["L",a-e/2,n],["M",a+e/2,n],["L",a+e+e/2,n],["M",a+3*e,n],["L",a+2*e,n],["M",a-e,n+i],["L",a,n-i],["L",a+e,n+i],["z"]],"triangle-down":[["M",a-e,n-i],["L",a+e,n-i],["L",a,n+i],["Z"]],triangleDownLine:[["M",a-3*e,n],["L",a-e+e/2,n],["M",a+e-e/2,n],["L",a+3*e,n],["M",a-e,n-i],["L",a+e,n-i],["L",a,n+i],["Z"]],triangleDownEllipsis:[["M",a-3*e,n],["L",a-2*e,n],["M",a-e-e/2,n],["L",a-e/2,n],["M",a+e/2,n],["L",a+e+e/2,n],["M",a+3*e,n],["L",a+2*e,n],["M",a-e,n-i],["L",a+e,n-i],["L",a,n+i],["Z"]],bowtie:[["M",a-e,n-i],["L",a+e,n+i],["L",a+e,n-i],["L",a-e,n+i],["Z"]],bowtieLine:[["M",a-3*e,n],["L",a-e,n],["M",a+e,n],["L",a+3*e,n],["M",a-e,n-i],["L",a+e,n+i],["L",a+e,n-i],["L",a-e,n+i],["Z"]],bowtieEllipsis:[["M",a-3*e,n],["L",a-2*e,n],["M",a-e-e/2,n],["L",a-e-2,n],["M",a+e+2,n],["L",a+e+e/2,n],["M",a+3*e,n],["L",a+2*e,n],["M",a-e,n-i],["L",a+e,n+i],["L",a+e,n-i],["L",a-e,n+i],["Z"]]}[t]}var d=n("datav:/npm/lodash/4.17.11/toNumber"),m=n("datav:/npm/lodash/4.17.11/forEach"),p=n("datav:/npm/lodash/4.17.11/isNumber"),c=n("datav:/npm/lodash/4.17.11/map"),u=n("datav:/npm/lodash/4.17.11/get"),M=n("datav:/npm/lodash/4.17.11/set"),f=n("datav:/npm/lodash/4.17.11/trim"),h=n("datav:/npm/lodash/4.17.11/isUndefined"),v=n("datav:/npm/lodash/4.17.11/isNull"),y=n("datav:/npm/lodash/4.17.11/min"),x=n("datav:/npm/lodash/4.17.11/max"),b=n("datav:/npm/lodash/4.17.11/isNaN"),g=n("datav:/npm/lodash/4.17.11/sumBy"),O=n("datav:/npm/lodash/4.17.11/each"),w="linear",Z=n("datav:/npm/moment/2.27.0"),E=n("datav:/npm/d3-format/3.1.0").format;return t.exports={transLineDash:function(t){var a=t.lineStyle,n=t.dashedLength,e=t.dashedSpace,o=t.dottedLength,t=t.dottedSpace,i=[];return"solid"===a?i=[1,0]:"dashed"===a?i=[n,e]:"dotted"===a&&(i=[o,t]),i},transNumberFormatterTooltip:function(t){var a=t.v,n=t.type,e=t.format,o=t.prefix,t=t.suffix;return n===w&&"null"!==e?o+E(e)(a)+t:n===w&&"null"===e?o+d(a)+t:"timeCat"===n&&"null"!==e?o+Z(a).format(e)+t:o+a+t},transformGradientColor:function(t){var a,n,e;return"object"===s(t)?(n=t.type,a=t.value,"flat"===n?{fill:a}:(a=(n=t.value).angle,n=n.stops,e="",c(n,function(t){var a=t.offset,t=t.color;e+="".concat(a/100,":").concat(t," ")}),{fill:"l(".concat(a,") ").concat(f(e))})):{fill:t}},maximumCal:function(t,a,n,e){var o=[],a=(c(a,function(t){o.push(t[e])}),"min"===t.min?y(o):d(t.min)),t="max"===t.max?x(o):d(t.max);return{min:"linear"===n?a:void 0,max:"linear"===n?t:void 0}},handleTimeCatNull:function(t){var a=u(t,"options.axis.xaxis.type"),a=("null"===u(t,"options.axis.xaxis.label.timeFormat")&&"timeCat"===a&&M(t,"options.axis.xaxis.type","cat"),u(t,"options.axis.yaxis.type"));"null"===u(t,"options.axis.yaxis.label.timeFormat")&&"timeCat"===a&&M(t,"options.axis.yaxis.type","cat")},pathDFn:function(){var t=L(arguments.length<=0?void 0:arguments[0]),a="";return m(t,function(t){m(t,function(t){p(t)?a+=t+",":a+=t}),a+=" "}),a},locationInfo:function(t){var t=t.chart.getController("axis").getComponents(),a=t[0].component.getLayoutBBox(),n=a.height,a=a.width,t=t[2].component.getLayoutBBox();return{x:n,y:t.width,maxWidth:a,maxHeight:t.height}},handleRate:function(t){var a,n=[],e=t.reduce(function(t,a){return t[a.x]=t[a.x]||[],t[a.x].push(a),t},{});for(a in e)!function(t){var t=e[t],a=g(t,function(t){return t.y});O(t,function(t){n.push(l(l({},t),{},{rate:d((t.y/a).toFixed(2))}))})}(a);return n},transformSVGGradientColor:function(t){var a="",t=u(t,"fixed.value"),n=t.angle,t=t.stops,e="grad"+ +new Date,a="<defs><linearGradient id='".concat(e,"' gradientTransform='rotate(").concat(n,")'>");return c(t,function(t){a+='<stop offset="'.concat(t.offset,'" stop-color="').concat(t.color,'"/>')}),{gradientHtml:a+="</linearGradient></defs>",id:e}},isValid:function(t){return!h(t)&&!v(t)&&!b(t)}},t.exports});;
Cube("datav:/com/ml-bar-percent/5.3.3/transform",["datav:/npm/lodash/4.17.11/isUndefined","datav:/npm/lodash/4.17.11/floor","datav:/npm/lodash/4.17.11/get","datav:/npm/lodash/4.17.11/minBy","datav:/npm/lodash/4.17.11/ceil","datav:/npm/lodash/4.17.11/maxBy","datav:/npm/lodash/4.17.11/map","datav:/npm/lodash/4.17.11/slice","datav:/npm/lodash/4.17.11/toNumber"],function(t,e,i,l,o,n){function a(e,t){var i,l=Object.keys(e);return Object.getOwnPropertySymbols&&(i=Object.getOwnPropertySymbols(e),t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),l.push.apply(l,i)),l}function Vt(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach(function(t){qt(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}function qt(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var Kt=i("datav:/npm/lodash/4.17.11/isUndefined"),Jt=i("datav:/npm/lodash/4.17.11/floor"),Qt=i("datav:/npm/lodash/4.17.11/get"),Zt=i("datav:/npm/lodash/4.17.11/minBy"),$t=i("datav:/npm/lodash/4.17.11/ceil"),_t=i("datav:/npm/lodash/4.17.11/maxBy"),te=i("datav:/npm/lodash/4.17.11/map"),ee=i("datav:/npm/lodash/4.17.11/slice"),ie=i("datav:/npm/lodash/4.17.11/toNumber"),le=i("datav:/com/ml-bar-percent/5.3.3/customRuleStyle"),i=i("datav:/com/ml-bar-percent/5.3.3/utils"),oe=i.transLineDash,ne=i.transNumberFormatterTooltip,ae=i.transformGradientColor,re=i.maximumCal,se=i.pathDFn,de=i.transformSVGGradientColor,ce=i.isValid;return t.exports={transOptionKey:function(Y,t,e,i,l){var t=t.options,o=t.chart,n=o.margin,H=o.customBarWidth,a=o.customBarWidthSet,T=o.connectedArea,d=o.fill,o=o.label,r=o.show,s=o.position,A=o.textStyle,c=o.offset,N=o.labelContent,X=o.describe,o=o.stroke,h=t.legend,E=h.isShow,f=h.layout,p=h.textStyle,G=h.spaceToChart,R=G.spaceChartX,G=G.spaceChartY,m=h.cateLegend,U=m.marker,y=m.markerSpace,V=m.maxItemWidth,m=m.flip,q=m.show,g=m.textStyle,K=m.pageMarker,J=m.flipColor,Q=m.inactiveFill,m=m.flipTextColor,h=h.continuousLegend,u=h.handler,x=h.track,h=h.label,b=t.axis,S=b.xaxis,Z=S.isShow,$=S.extent,v=S.type,w=S.label,_=w.show,tt=w.timeFormat,et=w.valueFormat,W=w.display,it=W.tickCount,lt=W.rotate,ot=W.offset,nt=W.prefix,at=W.suffix,W=W.alignment,rt=w.textStyle,w=w.slider,k=S.title,st=S.axisLine,dt=S.tickLine,S=S.grid,b=b.yaxis,ct=b.isShow,C=(b.extent,b.type,b.label),ht=C.show,ft=C.valueFormat,z=(C.timeFormat,C.display),pt=z.tickCount,mt=z.rotate,yt=z.offset,gt=z.prefix,ut=z.suffix,z=z.alignment,xt=C.textStyle,C=C.slider,F=b.title,bt=b.axisLine,St=b.tickLine,b=b.grid,O=t.animation,vt=O.isShow,wt=O.animationEasing,O=O.duration,t=t.tooltip,L=t.tooltipSet,Wt=L.show,kt=L.position,P=L.titleTextStyle,j=L.contentTextStyle,Ct=L.trigger,zt=L.titleSpace,Ft=L.contentSpace,D=L.axisPointer,Ot=D.show,D=D.line,L=L.bgBox,Lt=L.padding,Pt=L.backgroundColor,L=L.border,B=t.active,jt=B.show,Dt=B.fillSet,Bt=Dt.show,Dt=Dt.fill,Mt=B.line,M=B.trigger,B=B.selectType,t=t.interaction,It=t.show,Yt=t.type,Ht=t.defaultExtent,Tt=t.sliderStyle,At=t.textStyle,I=t.handlerStyle,Nt=t.categorySize,t=t.scrollStyle,Xt=E&&d.mapping,Et=n.show?{padding:[n.top,n.right,n.bottom,n.left]}:{padding:"auto"},Gt=null,Gt=Kt(a)?{minColumnWidth:H,maxColumnWidth:H}:a.show?{minColumnWidth:a.width,maxColumnWidth:a.width}:null,H=r?{label:{position:s,offsetX:c.offsetX,offsetY:c.offsetY,style:Vt(Vt({fill:A.color},A),{},{stroke:o.strokeColor,lineWidth:o.lineWidth}),formatter:function(t){t=Qt(t,N);if(ce(t))return"y"===N?ne({v:t,type:"linear",format:ft,prefix:X.prefix,suffix:X.suffix}):X.prefix+t+X.suffix},animate:vt&&{appear:{animation:"scale-in-x"===wt||"scale-in-y"===wt?"zoom-in":wt,duration:O},update:{duration:O}}}}:{label:!1},a=null,r=i.width,s=null,c=i.height,A=(n.show?("left-top"===f||"right-top"===f?(a=0,s=-n.top):"left"===f||"right"===f?s=a=0:"left-bottom"===f||"right-bottom"===f?(a=0,s=n.top):"top-left"!==f&&"bottom-left"!==f||(a=n.left,s=0),r-=n.left,c-=n.top):Kt(l)||("top-left"!==f&&"bottom-left"!==f||(a=l.y,r=l.maxWidth),"left-bottom"!==f&&"right-bottom"!==f||(s=l.x,c=l.maxHeight-10),"left-bottom"!==f&&"left-top"!==f&&"left"!==f&&"right-bottom"!==f&&"right-top"!==f&&"right"!==f||(a=8,r=null)),V.show?{maxItemWidth:V.width}:{maxItemWidth:null}),o=y.openselfSpacing?{itemSpacing:y.itemSpacing}:null,i=y.openselfSpacing?{itemMarginBottom:y.itemMarginBottom}:null,n=Xt?{legend:Vt(Vt(Vt({},o),i),{},{position:f,flipPage:q,offsetX:a+R,offsetY:-s+G,maxWidth:r,maxHeight:c,pageNavigator:{marker:{style:{size:K.pageSize,fill:K.flipColor||J,inactiveFill:K.inactiveFill||Q}},text:{style:{fontSize:g.fontSize,fill:g.color||m,fontWeight:g.fontWeight,fontFamily:g.fontFamily}}},itemHeight:16,radio:{style:{fill:"rgba(0,0,0,0)",stroke:p.color}},marker:{style:{r:U.size},spacing:Kt(y.openselfSpacing)||y.openselfSpacing?y.spacing:4,symbol:U.shape},itemName:{style:{fill:p.color,fontFamily:p.fontFamily,fontSize:p.fontSize,fontWeight:p.fontWeight,border:0}},handler:{size:u.size,style:{fill:u.fill}},min:"auto"===u.min?Jt(Qt(Zt(e,"colorField"),"colorField"),2):parseInt(u.min),max:"auto"===u.max?$t(Qt(_t(e,"colorField"),"colorField"),2):parseInt(u.max),rail:{type:x.type,size:x.height,defaultLength:x.width,style:{fill:x.railColor}},label:{align:h.alignHorizon,spacing:h.spacing,style:{fill:p.color,fontFamily:p.fontFamily,fontSize:p.fontSize,fontWeight:p.fontWeight,border:0}},slidable:!0},A)}:{legend:!1},l=Ot?{showCrosshairs:!0,crosshairs:{type:"xy",line:{style:{lineDash:oe(D),lineWidth:D.lineWidth,stroke:D.lineColor}}}}:{showCrosshairs:!1},V=Qt(d,"scale.type"),Rt=se({x:9,y:9,r:5,type:E&&"ordinal"===V?U.shape:"square"}),Xt=Wt?{tooltip:Vt(Vt({showTitle:!0,showMarkers:!1,customContent:function(t,r){var s="",e=Qt(r,["0","data","x"],"标题");return te(r,function(t,e){var i=t.value,l=t.color,t=t.data,o=Ft,e=(e===r.length-1&&(o=0),""),n=Qt(d,"fixed").type,n=(Qt(d,"mapping")||"linearGradient"!==n||(a=(n=de(d)).gradientHtml,n=n.id,l="url(#".concat(n,")"),e=a),i.split("")),a=ie(ee(n,0,n.length-1).join(""))/100,i=ne({v:a,type:"linear",format:ft,prefix:gt,suffix:ut});s+='\n                <div\n                  style="\n                    display: flex;\n                    justify-content: left;\n                    align-items: center;\n                    margin-bottom: '.concat(o,"px;\n                    font-size: ").concat(j.fontSize,"px;\n                    line-height: ").concat(j.fontSize,"px;\n                    color: ").concat(j.color,";\n                    font-weight: ").concat(j.fontWeight,";\n                    font-family: ").concat(j.fontFamily,';\n                  "\n                  >\n                  <div style="width: 18px;height: 18px; margin-right: 6px; overflow: hidden;">\n                    <svg>\n                      ').concat(e,'\n                      <path\n                        d="').concat(Rt,'"\n                        stroke="').concat(l,'"\n                        stroke-opacity="1"\n                        opacity="1"\n                        fill="').concat(l,'"\n                      ></path>\n                    </svg>\n                  </div>\n                  <span style="\n                    display: inline-block;\n                    vertical-align: middle;\n                  ">').concat(t.colorField,"： ").concat(i,"</span>\n                </div>\n              ")}),'\n                <div\n                  style="\n                    font-size: '.concat(P.fontSize,"px;\n                    line-height: ").concat(P.fontSize,"px;\n                    color: ").concat(P.color,";\n                    font-weight: ").concat(P.fontWeight,";\n                    font-family: ").concat(P.fontFamily,";\n                    margin-bottom: ").concat(zt,'px;\n                  "\n                >').concat(e,"</div>\n                ").concat(s,"\n            ")},position:kt},l),{},{domStyles:{"g2-tooltip":{backgroundColor:Pt,border:"".concat(L.borderWidth,"px ").concat(L.borderStyle," ").concat(L.borderColor),padding:"".concat(Lt.paddingY,"px ").concat(Lt.paddingX,"px"),borderRadius:"".concat(L.borderRadius,"px"),boxShadow:"none"}}})}:{tooltip:!1},Ut="linear"===v?et:tt,o=_?{label:{rotate:Math.PI*lt/180,offset:ot,maxLength:10,style:Vt({textAlign:W,fill:rt.color},rt),formatter:function(t){return ne({v:t,type:v,format:Ut,prefix:nt,suffix:at})}}}:{label:{style:{fontSize:0}}},i=k.show?{title:{rotate:Math.PI*k.display.rotate/180,offset:k.display.offset,text:k.text,style:Vt({fill:k.textStyle.color},k.textStyle)}}:{},f=st.show?{line:{style:{stroke:st.line.lineColor,lineWidth:st.line.lineWidth,lineDash:oe(st.line)}}}:{line:{style:{lineWidth:0}}},q=dt.show?{tickLine:{length:dt.line.length,style:qt({stroke:dt.line.lineColor,lineWidth:2},"lineWidth",dt.line.lineWidth)}}:{tickLine:{length:0,style:{lineWidth:0}}},a=S.show?{grid:{line:{style:{stroke:S.line.lineColor,lineWidth:S.line.lineWidth,lineDash:oe(S.line)}}}}:{grid:{line:{style:{lineWidth:0}}}},R=Z?Vt(Vt(Vt(Vt(Vt(Vt({type:v,mask:"timeCat"===v?"YYYY/MM/DD HH:mm:ss":"",tickCount:it},re($,e,v,"x")),o),i),f),q),a):{label:!1,tickLine:{style:{lineWidth:0}},line:{style:{lineWidth:0}},grid:{line:{style:{lineWidth:0}}},title:{style:{fontSize:0}}},s=ht?{label:{rotate:Math.PI*mt/180,offset:yt,style:Vt({textAlign:z,fill:xt.color},xt),formatter:function(t){return ne({v:t,type:"linear",format:ft,prefix:gt,suffix:ut})}}}:{label:!1},G=F.show?{title:{rotate:Math.PI*F.display.rotate/180,offset:F.display.offset,text:F.text,style:Vt({fill:F.textStyle.color},F.textStyle)}}:{},r=bt.show?{line:{style:{stroke:bt.line.lineColor,lineWidth:bt.line.lineWidth,lineDash:oe(bt.line)}}}:{line:{style:{lineWidth:0}}},c=St.show?{tickLine:{length:St.line.length,style:{stroke:St.line.lineColor,lineWidth:St.line.lineWidth}}}:{tickLine:{length:0,style:{lineWidth:0}}},J=b.show?{grid:{line:{style:{stroke:b.line.lineColor,lineWidth:b.line.lineWidth,lineDash:oe(b.line)}}}}:{grid:{line:{style:{lineWidth:0}}}},K=ct?Vt(Vt(Vt(Vt(Vt({type:"linear",tickCount:pt},s),G),r),c),J):{label:!1,tickLine:{style:{lineWidth:0}},line:{style:{lineWidth:0}},grid:{line:{style:{lineWidth:0}}},title:{style:{fontSize:0}}},Q=vt?{animation:{appear:{animation:wt,duration:O},update:{duration:O}}}:{animation:!1},m=It?"slider"===Yt?{slider:{padding:[0,20,0,0],start:Ht[0],end:Ht[1],height:Tt.height,backgroundStyle:Vt(Vt({},ae(Tt.backgroundColor)),{},{opacity:1}),foregroundStyle:Vt(Vt({},ae(Tt.foregroundColor)),{},{opacity:1}),textStyle:Vt(Vt({},At),{},{fill:At.color}),handlerStyle:{width:I.size.width,height:I.size.height,fill:I.style.defaultBgColor,highLightFill:I.style.hoverBgColor,opacity:1,radius:I.lineStyle.borderRadius,stroke:I.lineStyle.color,cursor:"pointer"}},scrollbar:!1}:{scrollbar:{type:"horizontal",width:Nt,height:Nt,style:{trackColor:t.trackColor,thumbColor:t.thumbColor,thumbHighlightColor:t.thumbColor}},slider:!1}:{scrollbar:!1,slider:!1},g=Bt?ae(Dt):null,y=qt({},"click"===M?"selected":"active",!!jt&&{style:Vt({lineWidth:Mt.lineWidth,lineDash:oe(Mt),stroke:Mt.lineColor},g)}),u=T.show?{connectedArea:{trigger:T.type}}:{connectedArea:null},x="multi"===B,p=Vt(Vt(Vt(Vt(Vt(Vt(Vt(Vt({data:e,xField:"x",yField:"y",autoFit:!0},Et),{},{isPercent:!0,isStack:!0},Gt),u),{},{supportCSSTransform:!0,meta:(qt(h={},"x",{range:[w/100,1-w/100]}),qt(h,"y",{range:[C/100,1-C/100]}),h)},H),n),{},{xAxis:Vt({},R),yAxis:Vt({},K)},m),Xt),{},{state:Vt({default:{style:{lineWidth:2,fillOpacity:1,stroke:"yellow",fill:"green"}}},y),interactions:[{type:"element-selected",enable:"click"===M&&x},{type:"element-single-selected",enable:"click"===M&&!x},{type:"element-active",enable:"hover"===M&&x},{type:"element-single-active",enable:"hover"===M&&!x},{type:"tooltip",cfg:{start:[{trigger:"element:".concat(Ct),action:"tooltip:show"}]}},{type:"active-region"}]},Q);return le({props:p,guiConfig:Y,data:e}),p}},t.exports});;
Cube("datav:/com/ml-bar-percent/5.3.3",["datav:/npm/bcore/0.0.22/event","datav:/npm/lodash/4.17.11/isUndefined","datav:/npm/lodash/4.17.11/floor","datav:/npm/lodash/4.17.11/get","datav:/npm/lodash/4.17.11/map","datav:/npm/lodash/4.17.11/includes","datav:/npm/lodash/4.17.11/toNumber","datav:/npm/lodash/4.17.11/set","datav:/npm/lodash/4.17.11/cloneDeep","datav:/npm/lodash/4.17.11/filter","datav:/npm/lodash/4.17.11/every","datav:/npm/lodash/4.17.11/some","datav:/npm/lodash/4.17.11/isArray","datav:/npm/lodash/4.17.11/defaultsDeep","datav:/npm/lodash/4.17.11/isEmpty","datav:/npm/lodash/4.17.11/isEqual","datav:/npm/lodash/4.17.11/omit","datav:/npm/lodash/4.17.11/each","datav:/npm/@antv/g2plot/2.4.23/dist/g2plot.min.js"],function(t,e,i,o,a,n){function l(e,t){var i,o=Object.keys(e);return Object.getOwnPropertySymbols&&(i=Object.getOwnPropertySymbols(e),t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,i)),o}function w(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach(function(t){b(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}function b(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var s=i("datav:/npm/bcore/0.0.22/event"),u=i("datav:/npm/lodash/4.17.11/isUndefined"),r=i("datav:/npm/lodash/4.17.11/floor"),C=i("datav:/npm/lodash/4.17.11/get"),h=i("datav:/npm/lodash/4.17.11/map"),c=i("datav:/npm/lodash/4.17.11/includes"),m=i("datav:/npm/lodash/4.17.11/toNumber"),d=i("datav:/npm/lodash/4.17.11/set"),f=i("datav:/npm/lodash/4.17.11/cloneDeep"),v=i("datav:/npm/lodash/4.17.11/filter"),p=i("datav:/npm/lodash/4.17.11/every"),g=i("datav:/npm/lodash/4.17.11/some"),y=i("datav:/npm/lodash/4.17.11/isArray"),z=i("datav:/npm/lodash/4.17.11/defaultsDeep"),x=i("datav:/npm/lodash/4.17.11/isEmpty"),S=i("datav:/npm/lodash/4.17.11/isEqual"),O=i("datav:/npm/lodash/4.17.11/omit"),k=i("datav:/npm/lodash/4.17.11/each"),D=i("datav:/npm/@antv/g2plot/2.4.23/dist/g2plot.min.js"),L=D.Column,D=D.G2,j=i("datav:/com/ml-bar-percent/5.3.3/transform").transOptionKey,i=i("datav:/com/ml-bar-percent/5.3.3/utils"),F=i.handleTimeCatNull,P=i.locationInfo,T=i.handleRate,_=i.transformGradientColor,A=i.isValid;return D.registerInteraction("element-single-active",{start:[{trigger:"element:mouseenter",action:"element-active:active"}],end:[{trigger:"element:mouseleave",action:"element-active:reset"}]}),D.registerInteraction("element-active",{start:[{trigger:"element:mouseenter",action:"element-active:toggle"}]}),t.exports=s.extend(function(t,e){this.config={options:{chart:{fill:{mapping:!0,fixed:{type:"flat",value:"#2483ff"},scale:{type:"threshold",scheme:"seq-2",custom:!1,range:["#34fff5","#31e0f2","#2dc0ee","#2aa1eb","#2782e7","#2362e4"],domain:[],excepted:"yellow",abnormal:"transparent",pin:[!1,!1,!1,!1,!1,!1]}},connectedArea:{show:!1,type:"hover"},label:{describe:{prefix:"",suffix:""}},pattern:{show:!1}},tooltip:{active:{fill:{default:{type:"linearGradient",value:{angle:90,stops:[{offset:0,color:"#00ff95"},{offset:100,color:"rgba(88, 142, 233, 0.5)"}]}}},fillSet:{show:!1,fill:{default:{type:"linearGradient",value:{angle:90,stops:[{offset:0,color:"#00ff95"},{offset:100,color:"rgba(88, 142, 233, 0.5)"}]}}}}}},legend:{spaceToChart:{spaceChartX:0,spaceChartY:0},cateLegend:{markerSpace:{itemSpacing:null,itemMarginBottom:null},flip:{flipColor:"#000",inactiveFill:"#000",flipTextColor:"rgb(144, 160, 174)",textStyle:{fontFamily:"Arial",fontWeight:"normal",fontSize:12},pageMarker:{pageSize:12}},maxItemWidth:{show:!1,width:100}}},condition:{customStyle:[{rules:{operator:"AND",enabled:!1,expressions:[{operator:"AND",expressions:[["colorField","eq","差"]]}]},fill:{show:!0,value:"#f00",type:"flat"}}]}}},this.container=t,this.apis=e.apis,this._data=null,this.chart=null,this.guiConfig=null,this.newData=[],this.containerSize=null,this.init(e)},{init:function(t){this.mergeConfig(t);t=window.getComputedStyle(this.container,null);this.containerSize={width:m((this.container.style.width||t.getPropertyValue("width")).slice(0,-2)),height:m((this.container.style.height||t.getPropertyValue("height")).slice(0,-2))}},initChart:function(t){this.chart=new L(this.container,t),this.chart.render()},handleNonstandardData:function(t){var i=["x","y","colorField"],t=f(t);return v(t,function(t){return p(t,function(t,e){return c(i,e)})})},isHighlight:function(t){var e=t.item,t=t.data;return g(t,function(t){return g([e],t)})},render:function(t,e){var i=this,o=this.mergeConfig(e);(t=this.data(t,o))&&(F(o),this.guiConfig=j(this.config,o,f(t),this.containerSize),this.chart&&this.chart.destroy(),this.initChart(this.guiConfig),this.newData=T(this._data),e=P(this.chart),this.guiConfig=j(this.config,o,f(t),this.containerSize,e),this.chart.update(this.guiConfig),this.chart.off(),o.options.tooltip&&o.options.tooltip.active&&o.options.tooltip.active.trigger&&o.options.tooltip.active.show&&(t=o.options.tooltip.active.trigger,this.chart.on("element:".concat("click"===t?t:"mouseenter"),function(){var t=v(h(i.chart.getStates(),function(t){return("selected"===t.state||"active"===t.state)&&t.data}),Boolean);i.emit("itemSelect","multi"===o.options.tooltip.active.selectType?t:t&&t[0])})),this.chart.on("contextmenu",function(t){var e=C(t,"data.data");i.emit("onContextMenu",e,t)}),this.chart.on("legend-item:click",function(t){var t=C(t,"target.cfg.delegateObject.item"),e=t.value,t=t.unchecked;i.emit("legendSelect",{value:e,checked:!t}),i.emit("legendClick",{value:e,checked:!t})}))},resize:function(t,e){this.render(this._data,this.config)},setColors:function(){},data:function(t,e){return t&&(this.__data=t),this._data=f(this.__data),y(this._data)&&this._data.filter(function(t){return A(t.x)&&A(t.y)}).map(function(t){return A(t.colorField)&&(t.colorField="ordinal"===e.options.chart.fill.scale.type?""+t.colorField:m(t.colorField)),isNaN(m(t.y))||(t.y=m(t.y)),t})},mergeConfig:function(t){return t&&(0===Object.keys(this.config).length?this.config=t:(this.config.theme=z(t.theme||{},this.config.theme),this.setColors(),C(t,"options.chart.fill.scale.range")&&d(this.config,"options.chart.fill.scale.range",C(t,"options.chart.fill.scale.range")),C(t,"options.condition")&&d(this.config,"options.condition",C(t,"options.condition")),this.config=z(t||{},this.config))),this.config},getColorableConfig:function(t){var e,i,o,a,n;return!t||x(t)?{}:(e=t.textColor,i=t.axisColor,o=t.palette,t=t.bgColor,a="",n=function(){return{label:{textStyle:{color:i}},title:{textStyle:{color:i}},axisLine:{line:{lineColor:i}},tickLine:{line:{lineColor:i}}}},{options:{chart:{fill:{fixed:{type:"flat",value:a=o&&0<o.length?o[r(o.length/2)]:a},scale:{range:h(C(this.config,"options.chart.fill.scale.range"),function(t,e){return o[e]||o[e%o.length]})}},label:{textStyle:{color:e}}},axis:{xaxis:n(),yaxis:n()},legend:{textStyle:{color:i},continuousLegend:{handler:{fill:i},track:{railColor:t}}}}})},getThemableConfig:function(t,e){var i,o,a,n,l,s,r,h,c,d,f=this.config.options,p=f.chart.label.textStyle,g=f.axis,u=g.xaxis,m=u.label,u=u.title,g=g.yaxis,v=g.label,g=g.title,y=f.tooltip,f=f.legend,e=e||{},x=e.color,S=e.font,e=e.complexity,x=this.getColorableConfig(x||t),t={},p=(S&&(i=function(t,e){return void 0===C(S,t)?{}:b({},e,C(S,t))},a="family",n="fontFamily",l="weight",s="fontWeight",r="color.primary",h="color.secondary",c="color",d="lineColor",t={options:{chart:{label:{textStyle:w(w(w({fontSize:C(S,o="size",0)+p.fontSize},i(a,n)),i(l,s)),i(r,c))}},axis:{xaxis:{title:{textStyle:w(w(w({fontSize:C(S,o,0)+u.textStyle.fontSize},i(a,n)),i(l,s)),i(h,c))},label:{textStyle:w(w(w({fontSize:C(S,o,0)+m.textStyle.fontSize},i(a,n)),i(l,s)),i(h,c))},axisLine:{line:w({},i(h,d))},tickLine:{line:w({},i(h,d))}},yaxis:{title:{textStyle:w(w(w({fontSize:C(S,o,0)+g.textStyle.fontSize},i(a,n)),i(l,s)),i(h,c))},label:{textStyle:w(w(w({fontSize:C(S,o,0)+v.textStyle.fontSize},i(a,n)),i(l,s)),i(h,c))},axisLine:{line:w({},i(h,d))},tickLine:{line:w({},i(h,d))}}},tooltip:{tooltipSet:{titleTextStyle:w(w(w({fontSize:C(S,o,0)+y.tooltipSet.titleTextStyle.fontSize},i(a,n)),i(l,s)),i(r,c)),contentTextStyle:w(w(w({fontSize:C(S,o,0)+y.tooltipSet.contentTextStyle.fontSize},i(a,n)),i(l,s)),i(r,c))}},legend:{textStyle:w(w(w({fontSize:C(S,o,0)+f.textStyle.fontSize},i(a,n)),i(l,s)),i(h,c))}}}),{});return"L0"===e?p={options:{chart:{connectedArea:{show:!1},label:{show:!1}},axis:{xaxis:{isShow:!1},yaxis:{isShow:!1}},tooltip:{tooltipSet:{show:!0},active:{show:!0},interaction:{show:!1}},legend:{isShow:!1}}}:"L1"===e?p={options:{chart:{connectedArea:{show:!1},label:{show:!1}},axis:{xaxis:{isShow:!0,axisLine:{show:!0},label:{show:!0},grid:{show:!0},title:{show:!1},tickLine:{show:!1}},yaxis:{isShow:!0,axisLine:{show:!0},label:{show:!0},grid:{show:!0},title:{show:!1},tickLine:{show:!1}}},tooltip:{tooltipSet:{show:!0},active:{show:!0},interaction:{show:!1}},legend:{isShow:!0}}}:"L2"===e&&(p={options:{chart:{connectedArea:{show:!1},label:{show:!0}},axis:{xaxis:{isShow:!0,axisLine:{show:!0},label:{show:!0},grid:{show:!0},title:{show:!0},tickLine:{show:!0}},yaxis:{isShow:!0,axisLine:{show:!0},label:{show:!0},grid:{show:!0},title:{show:!0},tickLine:{show:!0}}},tooltip:{tooltipSet:{show:!0},active:{show:!0},interaction:{show:!0}},legend:{isShow:!0}}}),z({},p,t,x)},highlight:function(t){var o=this,a=t.data,t=t.style;if(Object.keys(a).length<=0)return!1;var e=this,i=C(this.config,"options.tooltip.active"),n=i.show,l=i.selectType,s=i.fillSet,r=s.fillShow,s=s.fill,h=i.line,i="click"===i.trigger?"selected":"active",r=u(t)||x(t)?{fillStyle:r?_(s).fill:"",stroke:h.lineColor}:w({},t),s=b({},i,!!n&&{style:w({},r)}),c=[];if(y(a))for(var d=0;d<a.length;d++)!function(t){var t=a[t],e=t.x,i=t.y;k(o.newData,function(t){t.x===e&&t.y===i&&c.push(O(w(w({},t),{},{y:t.rate}),"rate"))})}(d);else{var f=a.x,p=a.y,c=v(this.newData,function(t){return t.x===f&&t.y===p})[0];c=O(w(w({},c),{},{y:c.rate}),"rate")}this.chart.update(w(w({},this.guiConfig),{},{state:w(w({},this.guiConfig.state),s)}));var g=y(c)?c:[c],g=S(this.prevOriginData,c)?this.prevFilterData:this.handleNonstandardData(g);g="single"===l?[g[0]]:g,this.chart.setState(i,function(t){return t=w(w({},t),{},{y:m(t.y.toFixed(2))}),e.isHighlight({item:t,data:g})}),this.prevOriginData=c,this.prevFilterData=g},reset:function(){var t="click"===C(this.config,"options.tooltip.active").trigger?"selected":"active";this.chart.update(this.guiConfig),this.chart.setState(t,function(){})},destroy:function(){this.chart&&this.chart.destroy(),this.chart=null,this._data=null,this.container&&(this.container.innerHTML="")}}),t.exports});