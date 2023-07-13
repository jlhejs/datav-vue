// env=undefined => env=publish 
Cube("datav:/com/datav-2dmap-breathing-bubble/3.0.18/config",[],function(e,t,p,c,a,i){return e.exports={DEFAULT_OPTIONS:{renderer:"canvas",isAnimateLayer:!0,visibility:!0,general:{zoomRange:[0,18],minZoom:0,maxZoom:22},graph:{defaultStyle:{animationType:"breathe",offset:2.5,speed:.05,opacity:.85,sizeRange:[6,10]},typeSeries:[],typeSeriesOptions:{}},colorMap:{"样式一":[{percent:0,opacity:1},{percent:.25,opacity:1},{percent:.3,opacity:.25},{percent:1,opacity:.25}],"样式二":[{percent:0,opacity:0},{percent:.4,opacity:0},{percent:.45,opacity:.8},{percent:.5,opacity:.8},{percent:.55,opacity:0},{percent:.75,opacity:0},{percent:.8,opacity:1},{percent:.95,opacity:1},{percent:1,opacity:0}],"样式三":[{percent:0,opacity:1},{percent:.2,opacity:1},{percent:.25,opacity:.35},{percent:.85,opacity:.35},{percent:.95,opacity:1},{percent:1,opacity:.8}],"样式四":[{percent:0,opacity:1},{percent:.3,opacity:1},{percent:.35,opacity:0},{percent:.5,opacity:0},{percent:.525,opacity:1},{percent:.55,opacity:1},{percent:.575,opacity:0},{percent:.65,opacity:0},{percent:.675,opacity:.9},{percent:.7,opacity:.9},{percent:.725,opacity:0},{percent:.8,opacity:0},{percent:.825,opacity:.8},{percent:.85,opacity:.8},{percent:.875,opacity:0},{percent:.95,opacity:0},{percent:.975,opacity:.7},{percent:1,opacity:.7}],"样式五":[{percent:0,opacity:1},{percent:.15,opacity:1},{percent:.2,opacity:0},{percent:.95,opacity:1},{percent:1,opacity:.8}],"样式六":[{percent:0,opacity:0},{percent:.8,opacity:0},{percent:.9,opacity:1},{percent:.95,opacity:1},{percent:1,opacity:.5}],"样式七":[{percent:0,opacity:1},{percent:.1,opacity:1},{percent:.15,opacity:.7},{percent:.55,opacity:.7},{percent:.6,opacity:.35},{percent:1,opacity:.35}],"样式八":[{percent:0,opacity:1},{percent:1,opacity:1}],"样式九":[{percent:0,opacity:1},{percent:.3,opacity:1},{percent:.35,opacity:.5},{percent:.75,opacity:.5},{percent:.8,opacity:.25},{percent:1,opacity:.25}],"样式十":[{percent:0,opacity:1},{percent:.3,opacity:1},{percent:.35,opacity:0},{percent:.75,opacity:0},{percent:.8,opacity:1},{percent:1,opacity:1}]}}},e.exports});;
Cube("datav:/com/datav-2dmap-breathing-bubble/3.0.18/src/bubblesLayer",["datav:/npm/eventemitter3/3.0.0"],function(t,e,o,i,n,a){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(e,t){var o,i=Object.keys(e);return Object.getOwnPropertySymbols&&(o=Object.getOwnPropertySymbols(e),t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,o)),i}function u(i){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach(function(t){var e,o;e=i,o=n[t=t],t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach(function(t){Object.defineProperty(i,t,Object.getOwnPropertyDescriptor(n,t))})}return i}function c(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function m(o){var i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e=l(o),e=(t=i?(t=l(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments),this);if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return y(e)}}function y(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var b=o("datav:/npm/eventemitter3/3.0.0");return t.exports=function(t){for(var l=t.L,H=t.map,e=t.Utils,O=t.GuiUtils,T=e._,h=e.mergeOptions,o=e.RBush,I=e.Chroma,q=e.measureText,g=e.getDashArray,p=H.options.offset,R=[],i=0;i<360;i+=1){var n=+(.5*(1+Math.sin(i/180*Math.PI))).toFixed(6);R.push(n)}function d(t,e){return t.offset-e.offset}CanvasRenderingContext2D.prototype.roundRect=function(t,e,o,i,n){var a=n.border,r=n.borderRadius,n=n.background,r={topRight:r.topRight>o||r.topRight>i?Math.min(o,i):r.topRight,bottomRight:r.bottomRight>o||r.bottomRight>i?Math.min(o,i):r.bottomRight,bottomLeft:r.bottomLeft>o||r.bottomLeft>i?Math.min(o,i):r.bottomLeft,topLeft:r.topLeft>o||r.topLeft>i?Math.min(o,i):r.topLeft},s=r.topLeft,l=r.topRight,h=r.bottomLeft,r=r.bottomRight;if(t+=a.weight/2,e+=a.weight/2,this.beginPath(),this.moveTo(t+s,e),this.arcTo(t+o,e,t+o,e+i,l),this.arcTo(t+o,e+i,t,e+i,r),this.arcTo(t,e+i,t,e,h),this.arcTo(t,e,t+o,e,s),this.closePath(),"linearGradient"===n.type){for(var p,l=n.value,r=l.angle,u=l.stops.sort(d),h=[o/2+Math.cos((r+180)/180*Math.PI)*o/2,i/2+Math.sin((r+180)/180*Math.PI)*i/2],t=[o/2+Math.cos(r/180*Math.PI)*o/2,i/2+Math.sin(r/180*Math.PI)*i/2],c=this.createLinearGradient(h[0],h[1],t[0],t[1]),f=0;f<u.length;f++)p=u[f],c.addColorStop(p.offset/100,p.color);this.fillStyle=c}else"flat"==n.type&&(this.fillStyle=n.value||"rgba(255,255,0,0.1)");return this.fill(),0<a.weight&&(this.lineWidth=a.weight,this.strokeStyle=a.color,this.setLineDash&&(e=g(a.dashArray),this.setLineDash(e)),this.stroke()),this};t=s,e=b;if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&f(t,e);var a,r=m(s);function s(t){var e;if(this instanceof s)return(e=r.call(this)).options=h({},t),e.options.general.minZoom=t.general.zoomRange[0],e.options.general.maxZoom=t.general.zoomRange[1],e.options.visibility=!0,e.index=0,e.flag=!0,e.indexStep=0,e.data=[],e.popups={},e.rbush=new o,e.rbush.dirty=0,e.rbush.total=0,e.rbushInBounds=new o,e.featuresInBounds=[],e.featuresInBoundsByColor={},e.getGeojsonStyle=e.getGeojsonStyle.bind(y(e)),e.getMappingStyle=e.getMappingStyle.bind(y(e)),e.draw=e.draw.bind(y(e)),e.drawLables=e.drawLables.bind(y(e)),e.imageUrls={},e;throw new TypeError("Cannot call a class as a function")}return t=s,(e=[{key:"onRender",value:function(t){t&&this.getFeaturesInBounds(),this.data&&this.data.length}},{key:"render",value:function(t){if(this.data=[],t&&t.length)for(var e,o=0;o<t.length;o++)(e=t[o]).value?e.value=+e.value:e.value=0,this.data.push(e);this.geojsonStyle=this.getGeojsonStyle(),this.initRBush(),this.getFeaturesInBounds()}},{key:"initRBush",value:function(){for(var t,e,o,i,n=this.data,a=[],r=0;r<n.length;r++)(t=n[r]).hasOwnProperty("lng")&&t.hasOwnProperty("lat")&&(t.value=+t.value||0,e={type:"Feature",properties:t,geometry:{type:"Point",coordinates:[t.lng,t.lat]}},a.push({minX:+t.lng,minY:+t.lat,maxX:+t.lng,maxY:+t.lat,feature:e}),e=t.value,isNaN(e)||(e<(o=null==o?e:o)&&(o=e),(i=null==i?e:i)<e&&(i=e)));this.max=i,this.min=o,this.rbush.dirty=a.length,this.rbush.total=a.length,this.rbush.clear(),this.rbush.load(a)}},{key:"getFeaturesInBounds",value:function(){var t,e=H.options.padding,e=H.getBounds().pad(e),e={minX:e.getWest(),minY:e.getSouth(),maxX:e.getEast(),maxY:e.getNorth()},o=this.queryFeaturesInBounds(this.rbush,e);for(this.rbushInBounds.clear(),this.rbushInBounds.load(o),t=0;t<o.length;t++){var i=(n=o[t].feature).geometry,n=n.properties,i=i.coordinates,i=H.latLngToContainerPoint([i[1],i[0]]),a=[],r=Math.round(i.x-p.x),s=Math.round(i.y-p.y),s=(o[t].feature.geometry._coordinates=a=i?[r,s]:a,o[t].animationIndex=Math.floor(360*Math.random()),s=(r=this.geojsonStyle.mappingStyle[n.id]).radius,a=r.radius,n=l.point(i.x-s,i.y+a),r=l.point(i.x+s,i.y-a),H.containerPointToLatLng(n)),i=H.containerPointToLatLng(r);o[t].minX=s.lng,o[t].minY=s.lat,o[t].maxX=i.lng,o[t].maxY=i.lat}this.featuresInBounds=o}},{key:"queryFeaturesInBounds",value:function(t,e){for(var o,i,n=t.search(e),a=0;a<n.length;a++)o=n[a].feature,i=H.latLngToContainerPoint([+o.properties.lat,+o.properties.lng]),o.properties.x=i.x-p.x,o.properties.y=i.y-p.y;return n}},{key:"getGeojsonStyle",value:function(){var t=this.options,e=t.general,o=t.interaction;return{general:e,label:t.label,interaction:o,mappingStyle:this.getMappingStyle()}}},{key:"getMappingStyle",value:function(){for(var t,e,o=this.options,i=o.animation,n=o.colorMap,a=i.isAnimation.breathRange,r=this.data,s=O.validateCustomStyle,l=T.get(this.options,"condition.condition"),h=T.get(O,"scale.marker")({config:T.get(this.options,"graph.markerMapping"),data:r,field:"markerField"}),p=T.get(O,"scale.size")({config:T.get(this.options,"graph.sizeMapping"),data:r,field:"radiusField"}),u=T.get(O,"scale.color")({config:T.get(this.options,"graph.colorMapping"),data:r,field:"colorField"}),c={},f=0;f<r.length;f++){var g,d,m={};if((d=s({config:l,data:g=r[f],ruleKey:"rules"}))&&d.length){for(t=d.length-1;0<=t&&(e=d[t]).graph.show;t--)if(e.graph.marker.show){m.marker=e.graph.marker.value;break}for(t=d.length-1;0<=t&&(e=d[t]).graph.show;t--)if(e.graph.radius.show){m.radius=e.graph.radius.value;break}for(t=d.length-1;0<=t&&(e=d[t]).graph.show;t--)if(e.graph.fillColor.show){m.fillColor=e.graph.fillColor.value;break}}m.hasOwnProperty("marker")||(m.marker=h(g.markerField)),m.hasOwnProperty("radius")||(m.radius=p(g.radiusField)),m.hasOwnProperty("fillColor")||(m.fillColor=u(g.colorField));for(var y,b=m.radius+a,v=document.createElement("canvas"),w=v.getContext("2d"),S=(window.devicePixelRatio||1)/(w.webkitBackingStorePixelRatio||w.mozBackingStorePixelRatio||w.msBackingStorePixelRatio||w.oBackingStorePixelRatio||w.backingStorePixelRatio||1),x=(v.width=2.1*b*S,v.height=2.1*b*S,w.scale(S,S),w.createRadialGradient(b,b,0,b,b,b)),k=n[m.marker]||[],P=I(m.fillColor).rgba(),R=void 0,B=void 0,R=0;R<k.length;R++)(B=1<(B=(y=k[R]).percent)?1:B)<0&&(B=0),x.addColorStop(B,"rgba(".concat(P[0],",").concat(P[1],",").concat(P[2],",").concat(P[3]*y.opacity,")"));w.fillStyle=x,w.beginPath(),w.arc(b,b,b,0,2*Math.PI),w.fill(),m.canvas=v,c[g.id]=m}return c}},{key:"convertToRootPopupStyle",value:function(t){var e=t.domStyle,o=e.padding,i=e.border,n=e.boxShadow,a=e.backgroundColor,r=e.closeBtn,e=e.tipBtn,s=t.textStyle,t=t.offset;return{background:u({color:a},n),padding:o,border:i,closeBtn:r,tipBtn:e,textStyle:s,offset:t}}},{key:"updateOptions",value:function(t){this.options=h(this.options,t),this.options.general.minZoom=t.general.zoomRange[0],this.options.general.maxZoom=t.general.zoomRange[1],this.infoPopup&&(this.infoPopup&&!this.options.popupStyle.isShow&&this.infoPopup.remove(),l.customPopup.updatePopupStyle(this.infoPopup,this.convertToRootPopupStyle(this.options.popupStyle))),this.geojsonStyle=this.getGeojsonStyle()}},{key:"draw",value:function(t){if(this.data&&0!==this.data.length){var e,o,i,l,h,n=this.options,a=n.colorMap,r=n.general,s=n.animation,p=n.label,u=n.interaction,c=s.isAnimation;for((0==c.speed||"breathe"===c.animationType)&&(t.globalAlpha=.01*+r.opacity),this.indexStep+=c.speed,e=0;e<this.featuresInBounds.length;e++){var f,g=this.featuresInBounds[e].feature;if((f=this.geojsonStyle.mappingStyle[g.properties.id])&&f.canvas){if(0==c.speed)i=f.radius;else switch(this.featuresInBounds[e].animationIndex>=R.length-20?this.featuresInBounds[e].animationIndex=0:this.featuresInBounds[e].animationIndex+=10*c.speed,o=R[Math.floor(this.featuresInBounds[e].animationIndex)],c.animationType){case"fade":t.globalAlpha=.01*+r.opacity*o,i=f.radius;break;case"breathe":i=f.radius+c.breathRange*o}if(u.graph.show&&H.featureSelect&&H.featureSelect.geometry.coordinates==g.geometry.coordinates){i*=u.graph.sizeScale;for(var d,m=f.radius+c.breathRange,y=document.createElement("canvas"),b=y.getContext("2d"),v=(window.devicePixelRatio||1)/(b.webkitBackingStorePixelRatio||b.mozBackingStorePixelRatio||b.msBackingStorePixelRatio||b.oBackingStorePixelRatio||b.backingStorePixelRatio||1),w=(y.width=2.1*m*v,y.height=2.1*m*v,b.scale(v,v),b.createRadialGradient(m,m,0,m,m,m)),S=a[f.marker]||[],x=I(u.graph.fillColor||f.fillColor).rgba(),k=void 0,P=void 0,k=0;k<S.length;k++)(P=1<(P=(d=S[k]).percent)?1:P)<0&&(P=0),w.addColorStop(P,"rgba(".concat(x[0],",").concat(x[1],",").concat(x[2],",").concat(x[3]*d.opacity,")"));b.fillStyle=w,b.beginPath(),b.arc(m,m,m,0,2*Math.PI),b.fill(),t.drawImage(y,g.properties.x-i,g.properties.y-i,2*i,2*i)}else t.drawImage(f.canvas,g.properties.x-i,g.properties.y-i,2*i,2*i)}}p.isShow&&(l=this,"vector"===p.backgroundStyle.backgroundType||l.imageUrls[p.backgroundStyle.imageUrl]?l.drawLables(t):"image"!==p.backgroundStyle.backgroundType||l.imageUrls[p.backgroundStyle.imageUrl]||(h=[p.backgroundStyle.imageUrl],new Promise(function(e,o){for(var t,i=[],a=h.length,r=0,s=0;s<a;s++)!function(){var n=h[s];t=new Promise(function(o,t){var i=new Image;i.onload=function(){var t=document.createElement("canvas"),e=t.getContext("2d");t.width=i.width,t.height=i.height,e.drawImage(i,0,0,t.width,t.height),l.imageUrls[n]=t,o(!0)},i.onerror=function(){t(new Error("Could not load image at ".concat(n)))},i.src=n}),i.push(t),Promise.all(i).then(function(t){++r==a&&e(!0)}).catch(function(t){++r==a&&o(!1)})}()}).then(function(t){}).catch(function(t){})))}}},{key:"drawLables",value:function(t){var e=this.options,W=e.interaction,e=e.label,o=e.eventType,E=e.position,i=e.contentStyle,n=e.backgroundStyle,a=i.lineSeries,r=i.fieldWidth,_=i.lineHeight,s=i.textBorder;if(0!=a.length){a[0].content;for(var U=a[0].fieldName,G=(t.textAlign="left",t.textBaseline="middle",Object.assign({},e.offset)),l=0,h;l<this.featuresInBounds.length;l++){var p,u=(p=this.featuresInBounds[l].feature).geometry,c=p.properties;if(H.featureSelect&&H.featureSelect.geometry.coordinates==p.geometry.coordinates){if("click"==o&&"click"!=H.EventType||"mouseover"==o&&"mouseover"!=H.EventType)continue}else if("all"!=o)continue;var f=this.geojsonStyle.mappingStyle[c.id];if(c[U]){for(var g=2*+f.radius,d=2*+f.radius,f=u._coordinates,m=f[0]+G.x,y=f[1]-G.y,b=void 0,v=void 0,w=0,S=0,X=0,b=0;b<a.length;b++){var x=v=a[b],k=x.content,P=x.prefix,x=x.suffix,R=q(c[v.fieldName],k.fontFamily,k.fontWeight,k.fontSize).width;switch(r.widthAdapt){case"adapt":R=Math.min(R,r.maxWidth);break;case"fixedWidth":R=r.fixedWidth}S=R,P.show&&(S+=+P.padding+q(P.name,P.fontFamily,P.fontWeight,P.fontSize).width),x.show&&(S+=+x.padding+q(x.name,x.fontFamily,x.fontWeight,x.fontSize).width),w=Math.max(S,w),X+=Math.max(P.fontSize,k.fontSize,x.fontSize)}var B={left:0,right:0,top:0,bottom:0},O={width:w+(B=n.show?n.margin:B).left+B.right,height:X*_+B.top+B.bottom},u=n.border,f=document.createElement("canvas"),T=("vector"===n.backgroundType?(f.width=2*(O.width+u.weight),f.height=2*(O.height+u.weight),f.style.width="".concat(O.width+u.weight,"px"),f.style.height="".concat(O.height+u.weight,"px")):"image"==n.backgroundType&&(f.width=2*O.width,f.height=2*O.height,f.style.width="".concat(O.width,"px"),f.style.height="".concat(O.height,"px")),f.getContext("2d")),I=(T.scale(2,2),n.show&&("vector"===n.backgroundType?T.roundRect(0,0,O.width,O.height,n):"image"==n.backgroundType&&this.imageUrls[n.imageUrl]&&T.drawImage(this.imageUrls[n.imageUrl],0,0,O.width,O.height)),T.strokeStyle=s.color,T.lineWidth=s.weight,T.textBaseline="bottom",B.top);for(b=0;b<a.length;b++){var M=v=a[b],L=M.content,j=M.prefix,M=M.suffix,C=(I+=Math.max(j.fontSize,L.fontSize,M.fontSize)*_,j.show&&(T.font="".concat(j.fontWeight," ").concat(j.fontSize,"px ").concat(j.fontFamily),T.fillStyle=j.color,s.show&&T.strokeText(j.name,B.left,I),T.fillText(j.name,B.left,I)),T.font="".concat(L.fontWeight," ").concat(L.fontSize,"px ").concat(L.fontFamily),T.fillStyle=L.color,c[v.fieldName]),Y=q(C,L.fontFamily,L.fontWeight,L.fontSize).width,z=0;switch(r.widthAdapt){case"adapt":z=Math.min(Y,r.maxWidth);break;case"fixedWidth":z=r.fixedWidth}if(z<Y){for(var A=0,D=0,Z=T.measureText("...",L.fontFamily,L.fontWeight,L.fontSize).width,N=0;N<C.length;N++)(A+=T.measureText(C[N],L.fontFamily,L.fontWeight,L.fontSize).width)<z-Z&&D++;C="".concat(C.substring(0,D),"...")}var F=B.left;j.show&&(F+=j.padding+q(j.name,j.fontFamily,j.fontWeight,j.fontSize).width),s.show&&T.strokeText(C,F,I),T.fillText(C,F,I),M.show&&(T.font="".concat(M.fontWeight," ").concat(M.fontSize,"px ").concat(M.fontFamily),T.fillStyle=M.color,z=Math.min(z,Y),s.show&&T.strokeText(M.name,F+z+M.padding,I),T.fillText(M.name,F+z+M.padding,I))}if(W.graph.show&&H.featureSelect&&H.featureSelect.geometry.coordinates==p.geometry.coordinates){switch(h=W.graph.sizeScale,E){case"top":m-=O.width/2*h,y-=d/2+O.height*h+d*(h-1);break;case"bottom":m-=O.width/2*h,y+=O.height*(h-1);break;case"left":m-=g/2+O.width*h+g*(h-1),y-=O.height/2*h+d/2*(h-1);break;case"right":m+=g/2+g*(h-1),y-=O.height/2*h+d/2*(h-1);break;case"center":m-=O.width/2*h,y-=O.height/2*h+d/2*(h-1)}t.drawImage(f,m,y,(O.width+u.weight)*h,(O.height+u.weight)*h)}else{switch(E){case"top":m-=O.width/2,y-=d/2+O.height;break;case"bottom":m-=O.width/2,y+=d/2;break;case"left":m-=g/2+O.width,y-=O.height/2;break;case"right":m+=g/2,y-=O.height/2;break;case"center":m-=O.width/2,y-=O.height/2}t.drawImage(f,m,y,O.width+u.weight,O.height+u.weight)}}}}}},{key:"contains",value:function(t){var e,o,i=!1,n={minX:t.lng,minY:t.lat,maxX:t.lng,maxY:t.lat},a=this.rbushInBounds.search(n);if(0===a.length)return{flag:i,feature:null};for(var r=[],s=0;s<a.length;s++)if(e=a[s].feature,i=this.isFeatureContainsLatLng(e,t,H)){o=e,r=[[a[s].minY,a[s].minX],[a[s].maxY,a[s].maxX]];break}return{flag:i,feature:o,featureBounds:r}}},{key:"isFeatureContainsLatLng",value:function(t,e,o){var i=o.options.offset,n=(t.geometry.coordinates,!1);return"Point"===t.geometry.type&&((t=o.latLngToContainerPoint([e.lat,e.lng])).x-=i.x,t.y-=i.y,n=!0),n}},{key:"onClick",value:function(t){var e=this.options.popupStyle;e.isShow&&"click"===e.eventType&&this._openPopup(t)}},{key:"onMouseOver",value:function(t){var e=this.options.popupStyle;e.isShow&&"mouseover"===e.eventType&&this._openPopup(t)}},{key:"_openPopup",value:function(t){var e=t.feature,o=e.geometry,i=e.properties,n=i.popupType,a=this.options,r=a.general,a=a.popupStyle,s=this.popups[n],o=o.coordinates,t="click"===a.eventType?t.latlng:{lat:o[1],lng:o[0]};if(n&&s){o=a.offset,n=h({},o),a={L:l,map:H,latlng:t,feature:e,offset:n,bindPopup:s,minZoom:r.minZoom,maxZoom:r.maxZoom};l.customPopup.openPopup(a)}else{o=this.convertToRootPopupStyle(this.options.popupStyle);if(!T.isEmpty(i.info))return e=l.popup({}).setLatLng(t).setContent(i.info).openOn(H),this.infoPopup=e,void l.customPopup.updatePopupStyle(e,o);if(this.options.popupStyle.isEmptyShow)return n=l.popup({}).setLatLng(t).setContent("无数据").openOn(H),this.infoPopup=n,void l.customPopup.updatePopupStyle(n,o);this.infoPopup&&this.infoPopup.remove()}this.infoPopup=null}},{key:"bindGroup",value:function(t,e,o){var i=+e.clientWidth,n=+e.clientHeight,a=(e.style.transform="",e.style.position="",e.style.display="none",l.popup({maxWidth:1200,maxHeight:1200,isCustomPopup:!0}));this.popups[t]={popup:a,container:e,clientWidth:i,clientHeight:n,popupStyle:o}}},{key:"show",value:function(){this.onRender(!0),this.options.visibility=!0}},{key:"hide",value:function(){this.options.visibility=!1}},{key:"destroy",value:function(){this.data=null,this.index=null,this.flag=null,delete this.data,this.index,this.flag}}])&&c(t.prototype,e),a&&c(t,a),Object.defineProperty(t,"prototype",{writable:!1}),s},t.exports});;
Cube("datav:/com/datav-2dmap-breathing-bubble/3.0.18",["datav:/npm/eventemitter3/3.0.0","datav:/npm/safely-merge/1.0.1"],function(e,t,r,o,n,i){function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(r){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=y(r),t=(e=o?(e=y(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),this);if(e&&("object"===a(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var p=r("datav:/npm/eventemitter3/3.0.0"),c=r("datav:/npm/safely-merge/1.0.1"),h=r("datav:/com/datav-2dmap-breathing-bubble/3.0.18/src/bubblesLayer"),f=r("datav:/com/datav-2dmap-breathing-bubble/3.0.18/config").DEFAULT_OPTIONS,r=function(){var e=n,t=p;if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t);var r,o=u(n);function n(e,t){if(!(this instanceof n))throw new TypeError("Cannot call a class as a function");var r=o.call(this),t=t.options;return r.options=c(f,t),r.options.general.minZoom=t.general.zoomRange[0],r.options.general.maxZoom=t.general.zoomRange[1],r}return e=n,(t=[{key:"addTo",value:function(e){e=h(e);this.layer=new e(this.options)}},{key:"onRender",value:function(e){this.layer&&this.layer.onRender&&this.layer.onRender(e)}},{key:"resize",value:function(e,t){this.layer&&this.layer.resize&&this.layer.resize(e,t)}},{key:"render",value:function(e){var t=[];if(e&&e.length){for(var r,o=0,n=0;n<e.length;n++)void 0!==(r=e[n]).id&&null!==r.id||(e[n].id=n+1),Number.isFinite(parseFloat(r.lng))&&Number.isFinite(parseFloat(r.lat))?t.push(r):o++;0<o&&console.log("呼吸散点层：有 ".concat(o," 条异常数据。"))}this.layer&&this.layer.render&&this.layer.render(t)}},{key:"updateOptions",value:function(e){e=e.options;this.options=c(this.options,e),this.options.general.minZoom=e.general.zoomRange[0],this.options.general.maxZoom=e.general.zoomRange[1],this.layer&&this.layer.updateOptions&&this.layer.updateOptions(this.options)}},{key:"draw",value:function(e){this.layer&&this.layer.draw&&this.layer.draw(e)}},{key:"onClick",value:function(e){var t=e.feature;t&&t.properties&&this.emit("click",t.properties),this.layer&&this.layer.onClick&&this.layer.onClick(e)}},{key:"onMouseOver",value:function(e){var t=e.feature;t&&t.properties&&this.emit("mouseover",t.properties),this.layer&&this.layer.onMouseOver&&this.layer.onMouseOver(e)}},{key:"bindGroup",value:function(e){var t=e.popupType||"",r=e.container||"<div></div>",e=e.popupStyle||{};this.layer&&this.layer.bindGroup&&this.layer.bindGroup(t,r,e)}},{key:"contains",value:function(e){var t=this.options.interaction,r=t.graph,t=t.popup;return!(!r.show&&!t.show)&&this.layer.contains(e)}},{key:"show",value:function(){this.options.visibility=!0,this.layer&&this.layer.show&&this.layer.show()}},{key:"hide",value:function(){this.options.visibility=!1,this.layer&&this.layer.hide&&this.layer.hide()}},{key:"destroy",value:function(){this.layer&&this.layer.destroy&&this.layer.destroy(),this.options=null,this.layer=null,delete this.options,this.layer}}])&&s(e.prototype,t),r&&s(e,r),Object.defineProperty(e,"prototype",{writable:!1}),n}();return e.exports=r,e.exports});