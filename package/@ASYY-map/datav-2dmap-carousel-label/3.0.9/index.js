// env=undefined => env=publish 
Cube("datav:/com/datav-2dmap-carousel-label/3.0.9/config",[],function(o,t,e,a,i,r){return o.exports={DEFAULT_OPTIONS:{renderer:"toplayer",visibility:!0,general:{zoomRange:[0,18],minZoom:0,maxZoom:22},graph:{iconUrl:"https://datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/c865cb8f92f3c885350970f64c299a2e.png",iconSize:{width:20,height:20},offset:{x:0,y:0},circleStyle:{show:!0,fillColor:"rgba(50, 50, 250, 0)",strokeColor:"rgba(30, 180, 230, 1)",radius:3,weight:2}},label:{popupStyle:{textAlign:"left",lineHeight:1.4,margin:{top:10,right:20,bottom:10,left:20},textStyle:{fontFamily:"Microsoft Yahei",fontSize:12,color:"#FFFFFF",fontWeight:"normal"},contentStyle:{width:100,radius:5,background:"rgba(50, 50, 250, 0.6)"},shadow:{shadowColor:"rgba(100, 250, 100, 0.4)",shadowBlur:5,shadowOffsetX:5,shadowOffsetY:5}}},mappingSeries:{}}},o.exports});;
Cube("datav:/com/datav-2dmap-carousel-label/3.0.9/src/carouselLabelLayer",["datav:/npm/eventemitter3/3.0.0","datav:/npm/safely-merge/1.0.1","datav:/npm/lodash/4.6.1"],function(t,e,o,n,a,i){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(o){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e=p(o),e=(t=n?(t=p(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments),this);if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var h=o("datav:/npm/eventemitter3/3.0.0"),d=o("datav:/npm/safely-merge/1.0.1"),u=o("datav:/npm/lodash/4.6.1");return t.exports=function(t){var w=t.L,n=t.map,o=t.Utils.getRandomCode;function k(t,e){return t.offset-e.offset}var t=r,e=h;if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&s(t,e);var a,i=l(r);function r(t){var e;if(this instanceof r)return(e=i.call(this)).options=d({},t),e.options.general.minZoom=t.general.zoomRange[0],e.options.general.maxZoom=t.general.zoomRange[1],e.options.visibility=!0,e.init(),e;throw new TypeError("Cannot call a class as a function")}return t=r,(e=[{key:"init",value:function(){var t=this.randomKeyframesCode=o(10),t=(this.paneName="carouselLabel_".concat(t,"Pane"),this.pane=n.createPane(this.paneName),this.options.general),e=n.getZoom();e<t.minZoom||e>t.maxZoom?this.pane.style.display="none":(this.pane.style.opacity=.01*t.opacity,this.pane.style.display="block"),this.random=this.random.bind(this),this.update=this.update.bind(this),this.createMarkers=this.createMarkers.bind(this),this.randomIndex=1,this.carouselLabel1=[],this.carouselLabel2=[],this.layerGroup1=w.featureGroup(),this.layerGroup1.addTo(n),this.layerGroup2=w.featureGroup(),this.layerGroup2.addTo(n),this.setKeyframes()}},{key:"setKeyframes",value:function(){var t=document.getElementsByTagName("head")[0],e=document.createElement("style");e.innerHTML="\n        @keyframes show_".concat(this.randomKeyframesCode," {\n          0% {\n            clip: rect(0, 0, 999px, 0);\n            opacity: 0;\n          }\n          100% {\n            clip: rect(0, 600px, 999px, 0 );\n            opacity: 1;\n          }\n        }\n        @keyframes hide_").concat(this.randomKeyframesCode," {\n          0% {\n            opacity: 0.8;\n          }\n          100% {\n            opacity: 0;\n          }\n        }\n      "),t.appendChild(e)}},{key:"setZIndex",value:function(t){this.pane&&(this.pane.style.zIndex=600+t)}},{key:"render",value:function(t,e){var o=this.options,n=o.visibility,o=o.animation,o=(o.carouselOrder,o.carouselCount,o.carouselTime,o.carouselCache);this.carouselLabel1=[],this.carouselLabel2=[],this.layerGroup1&&this.layerGroup1.clearLayers(),this.layerGroup2&&this.layerGroup2.clearLayers(),this.timer&&clearTimeout(this.timer),t&&0!==t.length?((!e||"updateOptions"!==e)&&o.show?(this.data||(this.data=[]),[].push.apply(this.data,t),this.data=this.data.slice(0-o.cacheCount)):this.data=t,n&&(this.createMarkers(this.carouselLabel1,this.layerGroup1),this.createMarkers(this.carouselLabel2,this.layerGroup2),this.pane&&this.pane.querySelector("svg")&&(this.pane.querySelector("svg").style.zIndex=0),this.random())):this.data=[]}},{key:"createMarkers",value:function(t,e){var o=this.options,n=o.graph,a=o.animation,i=o.label,o=a.carouselCount,a=i.contentStyle,r=i.background,c=i.popupStyle,s=r.backgroundType,l=r.imageUrl,p=r.border,h=r.borderRadius,d=r.margin,u=r.shadow,y=+o,f=(this.data.length<y&&(y=this.data.length),"");if(r.show)if("image"===s)var m="url(background-color: hsl(0, 0%, 0%) ".concat(l,")"),o=u.show?"".concat(u.offsetX,"px ").concat(u.offsetY,"px ").concat(u.blur,"px ").concat(u.color):"",s="".concat(d.top,"px ").concat(d.right,"px ").concat(d.bottom,"px ").concat(d.left,"px"),f='<div style = "\n            position: relative;">\n              <img src = '.concat(l,' style = "\n                position: absolute;\n                width: 100%;\n                height: 100%;\n                opacity: ').concat(.01*r.opacity,";\n                box-shadow: ").concat(o,';\n                z-index: -1;\n              "/>\n              <div class="popupContent" style="\n                margin: ').concat(s,";\n                word-wrap: break-word;\n                display: inline-block;\n                text-align: ").concat(c.textAlign,";\n                text-overflow: ellipsis;\n                line-height: ").concat(a.lineHeight,';\n              "></div>\n            </div>');else{if("linearGradient"===r.background.type){var g,x,l=r.background.value,o=l.angle,b=l.stops.sort(k);for(m="background-image: linear-gradient(".concat(o,"deg"),g=0;g<b.length;g++)x=b[g],m+=",".concat(x.color," ").concat(x.offset,"%");m+=");"}else"flat"===r.background.type&&(m="background-color: ".concat(r.background.value,";"));s=u.show?"".concat(u.offsetX,"px ").concat(u.offsetY,"px ").concat(u.blur,"px ").concat(u.color):"",l="".concat(d.top,"px ").concat(d.right,"px ").concat(d.bottom,"px ").concat(d.left,"px");f='<div style = "\n            position: absolute;\n            '.concat(m,"\n            border-radius: ").concat(h.topLeft,"px ").concat(h.topRight,"px ").concat(h.bottomRight,"px ").concat(h.bottomLeft,"px;\n            border-width: ").concat(p.weight,"px;\n            border-color: ").concat(p.color,";\n            border-style: ").concat(p.borderStyle,";\n            box-shadow: ").concat(s,';">\n              <div class="popupContent" style="\n                margin: ').concat(l,";\n                word-wrap: break-word;\n                display: inline-block;\n                text-align: ").concat(c.textAlign,";\n                text-overflow: ellipsis;\n                line-height: ").concat(a.lineHeight,';">\n              </div></div>')}else f='<div style = "\n          position: absolute;">\n            <div class="popupContent" style="\n              margin: 0px 0px;\n              word-wrap: break-word;\n              display: inline-block;\n              text-align: '.concat(c.textAlign,";\n              text-overflow: ellipsis;\n              line-height: ").concat(a.lineHeight,';">\n            </div></div>');for(var v=0;v<y;v++)t[v]={},t[v].marker=w.marker([-90,-180],{icon:w.icon({iconUrl:n.iconUrl,iconSize:[n.iconSize.width,n.iconSize.height],iconAnchor:[-n.offset.x+n.iconSize.width/2,n.offset.y+n.iconSize.height]}),pane:this.paneName,opacity:0}).addTo(e),t[v].popup=w.marker([-90,-180],{icon:w.divIcon({className:"datav-carousel-label-item-wp",iconSize:null,iconAnchor:[-i.offset.x,i.offset.y],html:f}),pane:this.paneName,zIndexOffset:1e3,opacity:0}).addTo(e),t[v].popup._icon.style.border="0px solid #666"}},{key:"random",value:function(){var n=this,t=this.options.animation,e=t.carouselOrder,o=t.carouselCount,t=t.carouselTime,a=t.enterTime,i=t.stayTime,r=t.disappearTime,c=[],s=("order"===e?(c=this.data.splice(0,o),[].push.apply(this.data,c)):c=u.shuffle(this.data).slice(0-o),+o),l=[];this.data.length<s&&(s=this.data.length);for(var p=0;p<s;p++)l.push(c[p]);1===this.randomIndex?this.randomIndex=2:this.randomIndex=1,this.update(l),s>=this.data.length||(this.timer=setTimeout(function(){var t,e=1===n.randomIndex?n.layerGroup1:n.layerGroup2;for(t in e._layers){var o=e._layers[t];o&&((o=o._path||o._icon).style.animation="hide_".concat(n.randomKeyframesCode," ").concat(r,"s"),o.style.animationFillMode="forwards")}n.random()},1e3*(Math.max(a,r)+i)))}},{key:"update",value:function(t){for(var e=1===this.randomIndex?this.carouselLabel1:this.carouselLabel2,o=this.options,n=(o.graph,o.animation),o=o.label,a=n.carouselTime.enterTime,n=o.contentStyle,i=n.lineSeries,r=n.fieldWidth,c=n.textProcess,s=n.textBorder,l=n.textShadow,p=0;p<t.length;p++){var h=t[p],d=+h.lng,u=+h.lat;if(!e[p]||!e[p].marker)break;e[p].marker.setLatLng([u,d]),e[p].marker.setOpacity(1),e[p].marker._icon.style.animation="show_".concat(this.randomKeyframesCode," ").concat(a,"s"),h.iconUrl&&(e[p].marker._icon.src=h.iconUrl),e[p].popup.setLatLng([u,d]),e[p].popup.setOpacity(1);for(var y=void 0,f="",m=0;m<i.length;m++){var g,x,b,v,w=i[m];h.hasOwnProperty(w.fieldName)&&(g=w.content,x=w.prefix,b=w.suffix,f+='<div class="counter-container" style="display: flex; white-space: nowrap; align-items: baseline;',v="",s.show&&l.show?v="".concat(s.weight,"px 0 ").concat(s.weight,"px ").concat(s.color,",\n              -").concat(s.weight,"px 0 ").concat(s.weight,"px ").concat(s.color,",\n              0 ").concat(s.weight,"px ").concat(s.weight,"px ").concat(s.color,",\n              0 -").concat(s.weight,"px ").concat(s.weight,"px ").concat(s.color,",\n\n              ").concat(l.offsetX,"px ").concat(l.offsetY,"px ").concat(l.blur,"px ").concat(l.color,";"):s.show?v="".concat(s.weight,"px 0 ").concat(s.weight,"px ").concat(s.color,",\n              -").concat(s.weight,"px 0 ").concat(s.weight,"px ").concat(s.color,",\n              0 ").concat(s.weight,"px ").concat(s.weight,"px ").concat(s.color,",\n              0 -").concat(s.weight,"px ").concat(s.weight,"px ").concat(s.color,";"):l.show&&(v="".concat(l.offsetX,"px ").concat(l.offsetY,"px ").concat(l.blur,"px ").concat(l.color,";")),(s.show||l.show)&&(f+="text-shadow:".concat(v,"-webkit-text-shadow:").concat(v,"-moz-text-shadow:").concat(v)),f+='">',x.show&&(f+='<span style="margin-right: '.concat(x.padding,"px; font-family: ").concat(x.fontFamily,"; font-size: ").concat(x.fontSize,"px; color: ").concat(x.color,"; font-weight: ").concat(x.fontWeight,';">\n              ').concat(x.name,"\n            </span>")),v=h[w.fieldName],y='<div style="',"clip"===c?y+="white-space: nowrap; text-overflow: ellipsis; -o-text-overflow: ellipsis; overflow: hidden;":"lineFeed"===c&&(y+="white-space: normal; overflow-wrap: break-word; word-break: keep-all;"),"adapt"===r.widthAdapt?y+="max-width: ".concat(r.maxWidth,"px;\n              font-family: ").concat(g.fontFamily,";\n              font-size: ").concat(g.fontSize,"px;\n              color: ").concat(g.color,";\n              font-weight: ").concat(g.fontWeight,'; ">\n              ').concat(v,"\n            </div>"):"fixedWidth"===r.widthAdapt&&(y+="width: ".concat(r.fixedWidth,"px;\n              font-family: ").concat(g.fontFamily,";\n              font-size: ").concat(g.fontSize,"px;\n              color: ").concat(g.color,";\n              font-weight: ").concat(g.fontWeight,'; ">\n              ').concat(v,"\n            </div>")),f+=y,b.show&&(f+='<span style="margin-left: '.concat(b.padding,"px; font-family: ").concat(b.fontFamily,"; font-size: ").concat(b.fontSize,"px; color: ").concat(b.color,"; font-weight: ").concat(b.fontWeight,'; vertical-align: super; ">\n              ').concat(b.name,"\n            </span>")),f+="</div>")}e[p].popup._icon.querySelector(".popupContent").innerHTML=f,e[p].popup._icon.style.animation="show_".concat(this.randomKeyframesCode," ").concat(a,"s")}}},{key:"updateOptions",value:function(t){var e;this.options=d(this.options,t),this.options.general.minZoom=t.general.zoomRange[0],this.options.general.maxZoom=t.general.zoomRange[1],this.pane&&(t=this.options.general,(e=n.getZoom())<t.minZoom||e>t.maxZoom?this.pane.style.display="none":(this.pane.style.opacity=.01*t.opacity,this.pane.style.display="block"),this.render(this.data,"updateOptions"))}},{key:"onZoomEnd",value:function(t){var e=this.options,o=e.general;e.visibility&&t>=o.minZoom&&t<=o.maxZoom?(this.timer&&clearTimeout(this.timer),(e=n.getZoom())<o.minZoom||e>o.maxZoom?this.pane&&(this.pane.style.display="none"):(this.pane&&(this.pane.style.display="block"),this.data&&this.data.length&&this.render(this.data))):(this.pane&&(this.pane.style.display="none"),this.timer&&clearTimeout(this.timer),this.carouselLabel1=[],this.carouselLabel2=[],this.layerGroup1&&this.layerGroup1.clearLayers(),this.layerGroup2&&this.layerGroup2.clearLayers())}},{key:"show",value:function(){this.options.visibility=!0,this.timer&&clearTimeout(this.timer);var t=n.getZoom();t<this.options.general.minZoom||t>this.options.general.maxZoom?this.pane&&(this.pane.style.display="none"):(this.pane&&(this.pane.style.display="block"),this.data&&this.data.length&&this.render(this.data))}},{key:"hide",value:function(){this.options.visibility=!1,this.pane&&(this.pane.style.display="none"),this.timer&&clearTimeout(this.timer),this.carouselLabel1=[],this.carouselLabel2=[],this.layerGroup1&&this.layerGroup1.clearLayers(),this.layerGroup2&&this.layerGroup2.clearLayers()}},{key:"destroy",value:function(){this.timer&&clearTimeout(this.timer),this.carouselLabel1=[],this.carouselLabel2=[],this.layerGroup1&&this.layerGroup1.clearLayers(),this.layerGroup2&&this.layerGroup2.clearLayers(),n.removeLayer(this.layerGroup1),n.removeLayer(this.layerGroup2),this.pane=null,this.options=null,this.container=null,this.data=null,delete this.layerGroup1,this.layerGroup2,this.pane,this.options,this.data}}])&&c(t.prototype,e),a&&c(t,a),Object.defineProperty(t,"prototype",{writable:!1}),r},t.exports});;
Cube("datav:/com/datav-2dmap-carousel-label/3.0.9",["datav:/npm/eventemitter3/3.0.0","datav:/npm/safely-merge/1.0.1"],function(e,t,o,n,r,i){function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(o){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=c(o),t=(e=n?(e=c(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),this);if(e&&("object"===a(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y=o("datav:/npm/eventemitter3/3.0.0"),p=o("datav:/npm/safely-merge/1.0.1"),f=o("datav:/com/datav-2dmap-carousel-label/3.0.9/src/carouselLabelLayer"),h=o("datav:/com/datav-2dmap-carousel-label/3.0.9/config").DEFAULT_OPTIONS,o=function(){var e=r,t=y;if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t);var o,n=u(r);function r(e,t){if(!(this instanceof r))throw new TypeError("Cannot call a class as a function");var o=n.call(this),t=t.options;return o.options=p(h,t),o.options.general.minZoom=t.general.zoomRange[0],o.options.general.maxZoom=t.general.zoomRange[1],o.options.visibility=!0,o}return e=r,(t=[{key:"addTo",value:function(e){e=f(e);this.layer=new e(this.options)}},{key:"setZIndex",value:function(e){this.layer&&this.layer.setZIndex&&this.layer.setZIndex(e)}},{key:"render",value:function(e){var t=[],o=0;if(e&&e.length){for(var n,r=0;r<e.length;r++)n=e[r],Number.isFinite(parseFloat(n.lng))&&Number.isFinite(parseFloat(n.lat))?t.push(n):o++;0<o&&console.log("轮播标签层：有 ".concat(o," 条异常数据。"))}this.layer&&this.layer.render&&this.layer.render(t)}},{key:"updateOptions",value:function(e){e=e.options;this.options=p(this.options,e),this.options.general.minZoom=e.general.zoomRange[0],this.options.general.maxZoom=e.general.zoomRange[1],this.layer&&this.layer.updateOptions&&this.layer.updateOptions(this.options)}},{key:"onZoomEnd",value:function(e){this.layer&&this.layer.onZoomEnd&&this.layer.onZoomEnd(e)}},{key:"show",value:function(){this.options.visibility=!0,this.layer&&this.layer.show&&this.layer.show()}},{key:"hide",value:function(){this.options.visibility=!1,this.layer&&this.layer.hide&&this.layer.hide()}},{key:"destroy",value:function(){this.layer&&this.layer.destroy&&this.layer.destroy(),this.layer=null,this.options=null,delete this.options,this.layer}}])&&l(e.prototype,t),o&&l(e,o),Object.defineProperty(e,"prototype",{writable:!1}),r}();return e.exports=o,e.exports});