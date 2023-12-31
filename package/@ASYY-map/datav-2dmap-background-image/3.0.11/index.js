// env=undefined => env=publish 
Cube("datav:/com/datav-2dmap-background-image/3.0.11/src/image",[],function(e,t,i,o,a,n){var r=function(e,t,i){return t&&s(e.prototype,t),i&&s(e,i),e};function s(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return e.exports=function(e){var b=e.map,e=e.Utils,k=e.geojsonBBox,i=e.mergeOptions,e=b.options,U=e.offset,c=e.padding;return r(t,[{key:"setImage",value:function(e,t){var i,o;e[t]||(i=this,(o=new Image).src=t,o.onload=function(){e[t]=o,i.layer&&i.layer.onRender(!0)})}},{key:"setData",value:function(e){this.clipGeojson=e}},{key:"setOptions",value:function(e){this.options=i(this.options,e),this.options.general.minZoom=e.general.zoomRange[0],this.options.general.maxZoom=e.general.zoomRange[1];var t=this.options.graph;switch(t.fillType){case"image":this.setImage(this.imageUrls,t.imageUrl);break;case"texture":this.setImage(this.imageUrls,t.textureUrl)}}},{key:"onRender",value:function(e,t){var i,o,a,n,r,s,l,h,g;this.clipGeojson&&(this.dataProcess(),(l=this.options.graph).iconUrl&&(g=l.bounds,i=(h=b.getBounds().pad(c)).getWest(),o=h.getSouth(),a=h.getEast(),n=h.getNorth(),r=!0,s=Math.min(g.minX,g.maxX),l=Math.min(g.minY,g.maxY),h=Math.max(g.minX,g.maxX),g=Math.max(g.minY,g.maxY),(h<i||a<s||g<o||n<l)&&(r=!1),e&&r&&(this.draw(e),this.isStateChange=!0)))}},{key:"draw",value:function(e){var t=this.options.graph;if(this.clipGeojson&&t.iconUrl){var i=k(this.clipGeojson),o=b.latLngToContainerPoint([i[1],i[0]]),a=b.latLngToContainerPoint([i[3],i[2]]),n={x:Math.min(o.x,a.x),y:Math.min(o.y,a.y)},r=Math.max(o.x,a.x),s=Math.max(o.y,a.y),l=Math.abs(r-n.x),h=Math.abs(s-n.y),g=void 0,c=void 0,f=void 0,u=void 0,m=void 0;if("texture"==t.fillType){i=t.textureSize;if(f=this.imageUrls[t.textureUrl]){o=document.createElement("canvas"),a=o.getContext("2d");o.width=i.width,o.height=i.height,a.imageSmoothingQuality="high",a.drawImage(f,0,0,i.width,i.height),e.fillStyle=e.createPattern(o,"repeat"),e.beginPath();for(var d,p=void 0,p=0;p<this.clipGeojson.features.length;p++)d=this.clipGeojson.features[p],this.drawPolygon(e,d.geometry._coordinates);e.fill()}else this.setImage(this.imageUrls,t.textureUrl)}else if(f=this.imageUrls[t.imageUrl]){var y=f.width/f.height,v=l/h;switch(t.fillStyle){case"充满":m=v<y?(u=f.width/f.height*h,h):f.height/f.width*(u=l),g=(r+n.x)/2-u/2,c=(s+n.y)/2-m/2,g-=U.x,c-=U.y,e.drawImage(f,g,c,u,m);break;case"适合":m=v<y?f.height/f.width*(u=l):(u=f.width/f.height*h,h),g=(r+n.x)/2-u/2,c=(s+n.y)/2-m/2,g-=U.x,c-=U.y,e.drawImage(f,g,c,u,m);break;case"拉伸":g=n.x,c=n.y,g-=U.x,c-=U.y,e.drawImage(f,g,c,u=l,m=h);break;default:return}e.globalCompositeOperation="destination-in",e.fillStyle="rgba(0,0,0,1)",e.beginPath();for(var x,w=void 0,w=0;w<this.clipGeojson.features.length;w++)x=this.clipGeojson.features[w],this.drawPolygon(e,x.geometry._coordinates);e.fill(),e.globalCompositeOperation="source-over"}else this.setImage(this.imageUrls,t.imageUrl)}}},{key:"dataProcess",value:function(){for(var e=void 0,t=void 0,i=void 0,o=void 0,a=void 0,e=0;e<this.clipGeojson.features.length;e++){var a=[],n=this.clipGeojson.features[e].geometry,r=n.type,s=n.coordinates;switch(r){case"Polygon":for(t=0;t<s.length;t++)3<=(o=this.project(s[t])).length&&a.push(o);break;case"MultiPolygon":for(t=0;t<s.length;t++)for(i=0;i<s[t].length;i++)3<=(o=this.project(s[t][i])).length&&a.push(o)}this.clipGeojson.features[e].geometry._coordinates=a}}},{key:"project",value:function(e){for(var t,i,o=this.options.smoothFactor,a=void 0,n=[],r=void 0,s=[],a=0;a<e.length;a++)!(t=e[a])[0]&&0!=t[0]||!t[1]&&0!=t[1]||(i=b.latLngToContainerPoint([t[1],t[0]]),n.push({x:i.x-U.x,y:i.y-U.y}));for(n.length&&(r=L.LineUtil.simplify(n,o)),a=0;a<r.length;a++)s.push([r[a].x,r[a].y]);return s}},{key:"drawPolygon",value:function(e,t,i){if(t&&0!==t.length){e.beginPath();for(var o,a=void 0,n=void 0,a=0;a<t.length;a++){for(n=0;n<t[a].length;n++)o=t[a][n],e[n?"lineTo":"moveTo"](o[0],o[1]);e.closePath()}i&&this.fillStroke(e,i)}}},{key:"fillStroke",value:function(e,t){var i;t.fill&&(e.globalAlpha=t.fillOpacity,e.fillStyle=t.fillColor||t.color,e.fill(t.fillRule||"evenodd")),t.stroke&&0!==t.weight&&(e.setLineDash&&(i=this.getDashArray(t)||[],e.setLineDash(i)),e.globalAlpha=t.opacity,e.lineWidth=t.weight,e.strokeStyle=t.strokeColor,e.lineCap=t.lineCap,e.lineJoin=t.lineJoin,e.stroke())}},{key:"getDashArray",value:function(e){if(""===e.dashArray)o=[];else if("string"==typeof e.dashArray)for(var t,i=e.dashArray.split(/[, ]+/),o=[],a=0;a<i.length;a++){if(t=Number(i[a]),isNaN(t))return;o.push(t)}else o=e.dashArray||[];return o}}]),t;function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.options=i({zIndex:0,tolerance:3,smoothFactor:1},e),this.imageUrls={},this.setImage=this.setImage.bind(this)}},e.exports});;
Cube("datav:/com/datav-2dmap-background-image/3.0.11/config",[],function(a,X,m,n,o,e){return a.exports={DEFAULT_OPTIONS:{renderer:"canvas",visibility:!0,general:{zoomRange:[0,18],minZoom:0,maxZoom:22,opacity:1},graph:{iconUrl:{type:"image",name:"图片路径",default:"https://img.alicdn.com/tps/TB1guWTPVXXXXXCaXXXXXXXXXXX-3840-2160.jpg"},bounds:{minX:85,minY:10,maxX:140,maxY:45}}}},a.exports});;
Cube("datav:/com/datav-2dmap-background-image/3.0.11/src/imageLayer",[],function(e,t,a,o,n,i){var s=function(e,t,o){return t&&r(e.prototype,t),o&&r(e,o),e};function r(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t,o){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,t);if(void 0!==n){if("value"in n)return n.value;n=n.get;return void 0!==n?n.call(o):void 0}if(null!==(e=Object.getPrototypeOf(e)))return p(e,t,o)}return e.exports=function(e){var o=e.map,t=e.Layer,n=e.Utils.mergeOptions,i=a("datav:/com/datav-2dmap-background-image/3.0.11/src/image")(e);return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,t),s(r,[{key:"init",value:function(){var e=n({zIndex:0},this.options);this.image=new i(e),(this.image.layer=this).addLayer(this.image)}},{key:"render",value:function(e){e={type:"FeatureCollection",features:[{type:"Feature",properties:{},geometry:e[0].geometry}]};this.image.setData(e),this.onRender(!0)}},{key:"updateOptions",value:function(e){this.options=n(this.options,e),this.options.general.minZoom=e.general.zoomRange[0],this.options.general.maxZoom=e.general.zoomRange[1],this.image.setOptions(this.options),this.onRender()}},{key:"draw",value:function(e){var t=this.options.general;e.globalAlpha=.01*t.opacity,this.container&&e.drawImage(this.container,0,0,this.container.width,this.container.height)}},{key:"show",value:function(){this.onRender(!0),this.options.visibility=!0}},{key:"hide",value:function(){p(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"hide",this).call(this),this.options.visibility=!1}},{key:"destroy",value:function(){this.options=null,delete this.options}}]),r;function r(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));return t.addTo(o),t.options=n({},e),t.options.general.minZoom=e.general.zoomRange[0],t.options.general.maxZoom=e.general.zoomRange[1],t.options.visibility=!0,t.init(),t}},e.exports});;
Cube("datav:/com/datav-2dmap-background-image/3.0.11",["datav:/npm/eventemitter3/3.0.0","datav:/npm/safely-merge/1.0.1"],function(e,t,n,o,i,a){var r=function(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e};function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var l=n("datav:/npm/eventemitter3/3.0.0"),y=n("datav:/npm/safely-merge/1.0.1"),u=n("datav:/com/datav-2dmap-background-image/3.0.11/src/imageLayer"),h=n("datav:/com/datav-2dmap-background-image/3.0.11/config").DEFAULT_OPTIONS,r=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(p,l),r(p,[{key:"addTo",value:function(e,t){this.options.id=t;e=u(e);this.layer=new e(this.options)}},{key:"render",value:function(e){var t=this;e&&e.type&&e.api?fetch(e.api).then(function(e){return e.json()}).then(function(e){t.layer&&t.layer.render(e)}):this.layer&&this.layer.render(e)}},{key:"onRender",value:function(){this.layer&&this.layer.onRender&&this.layer.onRender()}},{key:"resize",value:function(e,t){this.layer&&this.layer.resize&&this.layer.resize(e,t)}},{key:"updateOptions",value:function(e){e=e.options;this.options=y(h,e),this.options.general.minZoom=e.general.zoomRange[0],this.options.general.maxZoom=e.general.zoomRange[1],this.layer&&this.layer.updateOptions&&this.layer.updateOptions(this.options)}},{key:"draw",value:function(e){this.layer&&this.layer.draw&&this.layer.draw(e)}},{key:"show",value:function(){this.options.visibility=!0,this.layer&&this.layer.show&&this.layer.show()}},{key:"hide",value:function(){this.options.visibility=!1,this.layer&&this.layer.hide&&this.layer.hide()}},{key:"destroy",value:function(){this.layer&&this.layer.destroy&&this.layer.destroy(),this.layer=null,this.options=null,delete this.layer,this.options}}]),p);function p(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(p.__proto__||Object.getPrototypeOf(p)).call(this)),t=t.options;return n.options=y(h,t),n.options.general.minZoom=t.general.zoomRange[0],n.options.general.maxZoom=t.general.zoomRange[1],n.options.visibility=!0,n}return e.exports=r,e.exports});