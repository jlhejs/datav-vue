// env=undefined => env=publish 
Cube("datav:/com/datavmap-canvas2d-scatter-vector/2.0.49/src/polygon.js",[],function(a){var b=function(a,b){this.x=a,this.y=b},c=function(a,c,d,e){this.x=a,this.y=c,this.radius=d,this.sides=e,this.vertices=function(a,c,d,e){for(var f=[],g=0,h=2*Math.PI/e,j=0;j<e;j++)f.push(new b(a+d*Math.sin(g),c-d*Math.cos(g))),g+=h;return f}(a,c,d,e),this.strokeStyle="black",this.fillStyle="rgba(200, 200, 200, 1)"};return c.prototype={createPath:function(a){a.beginPath(),a.moveTo(this.vertices[0].x,this.vertices[0].y);for(var b=1;b<this.sides;b++)a.lineTo(this.vertices[b].x,this.vertices[b].y);a.closePath()},stroke:function(a){a.save(),this.createPath(a),a.strokeStyle=this.strokeStyle,a.stroke(),a.restore()},fill:function(a){a.save(),this.createPath(a),a.fillStyle=this.fillStyle,a.fill(),a.restore()}},a.exports=c,a.exports});;
Cube("datav:/com/datavmap-canvas2d-scatter-vector/2.0.49/src/libs/geojson-bbox",[],function(a){function b(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)}function c(a){var d;return"Point"==a.type?d=[a.coordinates]:"LineString"==a.type||"MultiPoint"==a.type?d=a.coordinates:"Polygon"==a.type||"MultiLineString"==a.type?d=a.coordinates.reduce(function(a,c){return a.push.apply(a,b(c)),a},[]):"MultiPolygon"==a.type?d=a.coordinates.reduce(function(a,c){return a.push.apply(a,b(c.reduce(function(a,c){return a.push.apply(a,b(c)),a},[]))),a},[]):"Feature"==a.type?d=c(a.geometry):"GeometryCollection"==a.type?d=a.geometries.reduce(function(a,d){return a.push.apply(a,b(c(d))),a},[]):"FeatureCollection"==a.type&&(d=a.features.reduce(function(a,d){return a.push.apply(a,b(c(d))),a},[])),d}return a.exports=function(a){var b;if(a.hasOwnProperty("type"))return b=c(a),b.reduce(function(a,b){return[Math.min(b[0],a[0]),Math.min(b[1],a[1]),Math.max(b[0],a[2]),Math.max(b[1],a[3])]},[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY])},a.exports});;
Cube("datav:/com/datavmap-canvas2d-scatter-vector/2.0.49/src/scatterVertorLayer",["datav:/npm/eventemitter3/3.0.0","datav:/npm/safely-merge/1.0.1","datav:/npm/lodash/4.6.1","datav:/npm/rbush/3.0.0","datav:/npm/chroma-js/1.3.3"],function(a,b,c){function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"===typeof b||"function"===typeof b)?b:a}function f(a,b){if("function"!==typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var g=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),h=c("datav:/npm/eventemitter3/3.0.0"),i=c("datav:/npm/safely-merge/1.0.1"),j=c("datav:/npm/lodash/4.6.1"),k=c("datav:/npm/rbush/3.0.0"),l=c("datav:/com/datavmap-canvas2d-scatter-vector/2.0.49/src/libs/geojson-bbox"),m=c("datav:/npm/chroma-js/1.3.3"),n=c("datav:/com/datavmap-canvas2d-scatter-vector/2.0.49/src/polygon.js"),o=function(a){function b(a,c){d(this,b);var f=e(this,(b.__proto__||Object.getPrototypeOf(b)).call(this));return f.options=i({zoomRange:[0,18],minZoom:0,maxZoom:22,scatterStyle:{vectorType:"Circle",scatterType:"default",radius:5,radius2:{radiusRange:[5,10],defaultValue:5},fillColor:"rgba(212,20,159,0.8)",fill:{minFillColor:"RGBA(197, 214, 126, 1.00)",maxFillColor:"RGBA(71, 107, 38, 1.00)",fillColor:"rgba(212,20,159,0.8)"},lineStyle:{strokeColor:"#fff",weight:1}},series:[],labelStyle:{show:!1,fieldName:"name",textStyle:{fontFamily:"Microsoft Yahei",fontSize:12,color:"#FFFFFF",fontWeight:"normal",shadowColor:"rgba(0, 0, 0, 0.85)",shadowBlur:5},position:"top",offset:{x:0,y:0}},popupStyle:{isBorderShadow:!0,show:!0,infoField:!1,eventType:"click",styleType:"parent",textStyle:{fontFamily:"Microsoft Yahei",fontSize:12,color:"#FFFFFF",fontWeight:"normal"},lineHeight:1.4,borderRadius:5,margin:{top:10,bottom:10,left:10,right:10},backgroundColor:"rgba(22,138,214,0.73)",closeBtn:{color:"#fff",size:16,top:0,right:0}},interactive:{isHover:{hoverScale:1.5},usePopupStyle:!1,isOpenPopup:!0}},c),f.options.minZoom=c.zoomRange[0],f.options.maxZoom=c.zoomRange[1],f.options.visibility=!0,f.map=a,f.init(),f}return f(b,a),g(b,[{key:"init",value:function(){this.container=document.createElement("canvas");var a=this.padding=this.map.canvasLayer&&this.map.canvasLayer.options&&this.map.canvasLayer.options.padding?this.map.canvasLayer.options.padding:0.1,b=this.map.getSize();this.offset=b.multiplyBy(-a).round();var c=b.x-2*this.offset.x,d=b.y-2*this.offset.y,e=this.map.devicePixelRatio||1;this.container.width=c*e,this.container.height=d*e,this.container.style.width=c+"px",this.container.style.height=d+"px",this.ctx=this.container.getContext("2d"),this.ctx.scale(e,e),this.data=null,this.dataRanges={},this.geojson=null,this.mappingData=null,this.rbush=new k,this.rbush.dirty=0,this.rbush.total=0,this.rbushInBounds=new k,this.featuresInBounds=[],this.popups={}}},{key:"onRender",value:function(a){a&&"needUpdata"===a&&this.getFeaturesInBounds(),this.ctx.clearRect(0,0,this.container.width,this.container.height),this.draw()}},{key:"render",value:function(a){var b=this;this.data=[],a&&0<a.length&&(this.data=a),this.group={},this.data.forEach(function(a){b.group[a.type]||(b.group[a.type]=[]),b.group[a.type].push(a)}),Object.keys(this).forEach(function(a){-1!==a.indexOf("-range")&&(b[a]=null)}),Object.keys(this.group).forEach(function(a){b.dataRanges[a+"-range"]=b.getRange(b.group[a])}),this.dataRanges["all-range"]=this.getRange(this.data);var c=this.map.L.datavUtils.arr2geojson(this.data);this.geojson=JSON.parse(JSON.stringify(c)),this.genGeojson()}},{key:"setMappingData",value:function(a){this.mappingData=a,this.genGeojson()}},{key:"onResize",value:function(a,b){var c=this.map.devicePixelRatio||1;this.container.width=a*c,this.container.height=b*c,this.container.style.width=a+"px",this.container.style.height=b+"px",this.ctx.scale(c,c)}},{key:"updateOptions",value:function(a){this.options=i(this.options,a),this.options.minZoom=a.zoomRange[0],this.options.maxZoom=a.zoomRange[1],this.genGeojson()}},{key:"onClick",value:function(a){this.options.popupStyle.show&&"click"===this.options.popupStyle.eventType&&this.openPopup(a)}},{key:"onMouseOver",value:function(a){this.options.popupStyle.show&&"mouseover"===this.options.popupStyle.eventType&&this.openPopup(a)}},{key:"openPopup",value:function(a){var b=a.feature,c=b.properties,d=b.geometry.coordinates,e={lat:d[1],lng:d[0]},f=void 0,g=void 0,h=void 0;"custom"===this.options.popupStyle.styleType?(g=this.options.popupStyle,c.type&&this.popups[c.type]&&(g=i(g,this.popups[c.type].popupStyle))):g=this.map.popupStyle;var j=g.margin,k=j.top+"px "+j.right+"px "+j.bottom+"px "+j.left+"px";if(c.type&&this.popups[c.type]){var l=this.popups[c.type].clientWidth,m=this.popups[c.type].clientHeight;f=this.popups[c.type].popup,h=this.popups[c.type].container,h.style.display="block",h.style.width=l+"px",h.style.height=m+"px",h.style.margin=k}else{if(g.infoField&&void 0===c.info)return;var n="";if(void 0!=c.info)n=""+c.info;else if(void 0!=c.name&&void 0!=c.value)n="\u540D\u79F0\uFF1A"+c.name+"<br/>\u6570\u503C\uFF1A"+c.value;else if(void 0!=c.name)n="\u540D\u79F0\uFF1A"+c.name;else if(void 0!=c.value)n="\u6570\u503C\uFF1A"+c.value;else return;var o=g.textStyle,p=g.lineHeight;h="<div style=\"\n        margin: "+k+";\n        padding: 0px;\n        font-family: "+o.fontFamily+";\n        font-size: "+o.fontSize+"px;\n        color: "+o.color+"; \n        font-weight: "+o.fontWeight+"; \n        line-height: "+p+";\n        white-space: nowrap;\n        display: inline-table;\n        text-align: left;\n      \"> "+n+"</div>",f=this.map.L.popup({maxWidth:1200,maxHeight:1200,isCustomPopup:!0})}f.setLatLng(e),f.setContent(h),f.openOn(this.map),this.map.L.customPopup.updatePopupStyle(f,g),this.map._popup.minZoom=this.options.minZoom,this.map._popup.maxZoom=this.options.maxZoom}},{key:"onDblClick",value:function(){}},{key:"bindGroup",value:function(a,b,c){var d=+b.clientWidth,e=+b.clientHeight;b.style.transform="",b.style.position="",b.style.display="none";var f=this.map.L.popup({maxWidth:1200,maxHeight:1200,isCustomPopup:!0});this.popups[a]={popup:f,container:b,clientWidth:d,clientHeight:e,popupStyle:c}}},{key:"show",value:function(){this.options.visibility=!0,this.data&&this.data.length&&this.onRender("needUpdata")}},{key:"hide",value:function(){this.options.visibility=!1,this.ctx.clearRect(0,0,this.container.width,this.container.height)}},{key:"genGeojson",value:function(){var a=this;if(this.geojson&&this.geojson.features&&this.geojson.features.length&&this.mappingData){var b={},c=this.options,d=c.series,e=void 0,f=void 0;if(d&&d.length)for(e=0;e<d.length;e++)f=d[e].type,f&&(b[f]=d[e]);var g={};if(this.mappingData.length)for(e=0;e<this.mappingData.length;e++)f=this.mappingData[e].type,f&&(g[f]=this.mappingData[e]);var h=null,i=void 0,j=this.geojson.features.map(function(d){h=h||d.properties.id&&"id",h=h||d.properties.name&&"name",h=h||d.properties.name&&"type";var e=a.mappingData.find(function(a){return a.id==d.properties[h]});return Object.assign(d.properties,e),i=a.getFeatureStyle(d,g,b,c),d.properties.drawStyle=Object.assign({},i),d.properties.radius=i.radius,d});this.geojson={type:"FeatureCollection",features:j},this.initRBush(),this.getFeaturesInBounds(),this.onRender()}else this.ctx.clearRect(0,0,this.container.width,this.container.height),this.rbush.dirty=0,this.rbush.total=0,this.rbush.clear()}},{key:"getFeatureStyle",value:function(a,b,c,d){var e=a.properties.type,f=+a.properties.value,g=void 0,h=void 0;return e?b[e]?("dataBind"===b[e].scatterType?(g=b[e],h=this.calculateStyle(e,f,g)):h=b[e],h.vectorType=b[e].vectorType):c[e]?("dataBind"===c[e].scatterType?(g=c[e],h=this.calculateStyle(e,f,g)):h=c[e],h.vectorType=c[e].vectorType):("dataBind"===d.scatterStyle.scatterType?(g=d.scatterStyle,h=this.calculateStyle(e,f,g)):h=d.scatterStyle,h.vectorType=d.scatterStyle.vectorType):("dataBind"===d.scatterStyle.scatterType?(g=d.scatterStyle,e="all",h=this.calculateStyle(e,f,g)):h=d.scatterStyle,h.vectorType=d.scatterStyle.vectorType),h}},{key:"calculateStyle",value:function(a,b,c){var d=this.dataRanges[a+"-range"];return{radius:void 0!=b&&d?this.map.L.datavUtils.linearScale(d,[c.radius2.radiusRange[0],c.radius2.radiusRange[1]])(b):c.radius2.defaultValue,fillColor:void 0!=b&&d?m.scale([c.fill.minFillColor,c.fill.maxFillColor]).domain(d)(b).css():c.fill.fillColor,lineStyle:c.lineStyle}}},{key:"getRange",value:function(a){if(!a.length)return null;var b=a.filter(function(a){return void 0!=a.value&&!isNaN(+a.value)&&""!==a.value});if(2>b.length)return null;var c=b.reduce(function(c,a){return+c.value<=+a.value?c:a},{}),d=b.reduce(function(c,a){return+c.value>=+a.value?c:a},{});return[+c.value,+d.value]}},{key:"initRBush",value:function(){var a=this.geojson,b=[],c=void 0,d=void 0;for(c=0,d=a.features.length;c<d;c++){var e=a.features[c],f=l(e);b.push({minX:f[0],minY:f[1],maxX:f[2],maxY:f[3],feature:e})}this.rbush.dirty=b.length,this.rbush.total=b.length,this.rbush.clear(),this.rbush.load(b)}},{key:"getFeaturesInBounds",value:function(){var a=this.map.getBounds(),b=a.pad(this.padding),c={minX:b.getWest(),minY:b.getSouth(),maxX:b.getEast(),maxY:b.getNorth()},d=this.queryFeaturesInBounds(this.rbush,c);this.rbushInBounds.clear(),this.rbushInBounds.load(d),this.featuresInBounds=d}},{key:"draw",value:function(){this.options.visibility&&this.geojson&&this.rbush&&this.rbush.total&&this.mappingData&&(this.drawMarkers(this.featuresInBounds),this.options.labelStyle.show&&this.drawLables(this.featuresInBounds))}},{key:"drawMarkers",value:function(a){var b,c;for(b=0;c=a.length,b<c;b++){var d=a[b].feature,e=1;this.options.interactive.isHover.show&&this.map.featureSelect&&this.map.featureSelect.geometry.coordinates==d.geometry.coordinates&&(e=this.options.interactive.isHover.hoverScale),d.properties.drawStyle.radius=d.properties.radius*e,this.drawMarker(this.ctx,d)}}},{key:"drawMarker",value:function(a,b){var c=b.geometry._coordinates,d=b.properties.drawStyle,e=d.radius,f=void 0,g=c[0],h=c[1];if(a.fillStyle=d.fillColor,a.beginPath(),"circle"===d.vectorType||"Circle"===d.vectorType||"\u5706"===d.vectorType)this.drawCircle(a,g,h,e);else if("rectangle"===d.vectorType||"Rectangle"===d.vectorType||"\u77E9\u5F62"===d.vectorType)a.rect(g-e,h-e,2*e,2*e);else if("pentacle"===d.vectorType||"Pentacle"===d.vectorType||"\u4E94\u89D2\u5F62"===d.vectorType){this.drawStar(a,0.5*e,e,g,h,0)}else{var i=3;switch(d.vectorType){case"\u4E09\u89D2\u5F62":case"triangle":case"Triangle":i=3;break;case"\u4E94\u8FB9\u5F62":case"pentagon":case"Pentagon":i=5;break;case"\u516D\u8FB9\u5F62":case"hexagon":case"Hexagon":i=6;}f=new n(g,h,e,i),a.save(),f.createPath(a)}a.fill(),a.restore();var j=d.lineStyle.weight;0<j&&(a.lineWidth=j,a.strokeStyle=d.lineStyle.strokeColor,a.stroke())}},{key:"drawCircle",value:function(a,b,c,d){a.arc(b,c,d,0,2*Math.PI)}},{key:"drawStar",value:function(a,b,c,d,e,f){for(var g=0;5>g;g++)a.lineTo(Math.cos((18+72*g-f)/180*Math.PI)*c+d,-Math.sin((18+72*g-f)/180*Math.PI)*c+e),a.lineTo(Math.cos((54+72*g-f)/180*Math.PI)*b+d,-Math.sin((54+72*g-f)/180*Math.PI)*b+e);a.closePath()}},{key:"drawLables",value:function(a){var b=this.ctx,c=void 0,d=void 0,e=this.options.labelStyle.textStyle,f=this.options.labelStyle.position;switch(f){case"top":b.textAlign="center",b.textBaseline="bottom";break;case"bottom":b.textAlign="center",b.textBaseline="top";break;case"left":b.textAlign="right",b.textBaseline="middle";break;case"right":b.textAlign="left",b.textBaseline="middle";break;case"center":default:b.textAlign="center",b.textBaseline="middle";}b.font=""+e.fontWeight+" "+e.fontSize+"px "+e.fontFamily,b.fillStyle=e.color,b.shadowColor=e.shadowColor,b.shadowBlur=e.shadowBlur;var g=void 0,h=void 0,i=void 0,j=void 0,k=this.options.labelStyle,l=k.offset,m=k.fieldName;for(c=0;d=a.length,c<d;c++)if(g=a[c].feature,h=g.geometry._coordinates,i=g.properties,j=i[m],j){var n=h[0],o=h[1];switch(f){case"top":o-=i.radius+e.fontSize/2;break;case"bottom":o+=i.radius+e.fontSize/2;break;case"left":n-=i.radius+e.fontSize/2;break;case"right":n+=i.radius+e.fontSize/2;break;case"center":default:}var p=1;this.options.interactive.isHover.show&&this.map.featureSelect&&this.map.featureSelect.geometry.coordinates==g.geometry.coordinates?(p=this.options.interactive.isHover.hoverScale,b.font=""+e.fontWeight+" "+e.fontSize*p+"px "+e.fontFamily,b.fillText(j,n+l.x,o-l.y),b.font=""+e.fontWeight+" "+e.fontSize+"px "+e.fontFamily):b.fillText(j,n+l.x,o-l.y)}b.shadowColor=null,b.shadowBlur=0}},{key:"queryFeaturesInBounds",value:function(a,b){var c=a.search(b),d=void 0,e=void 0,f=void 0,g=void 0,h=void 0,i=void 0,j=void 0;for(d=0;e=c.length,d<e;d++){switch(f=c[d].feature,h=f.geometry.coordinates,j=[],f.geometry.type){case"Point":i=this.map.latLngToContainerPoint([h[1],h[0]]),i&&(j=[i.x-this.offset.x,i.y-this.offset.y]);break;default:}c[d].feature.geometry._coordinates=j,g=f.properties;var k=g.radius||5,l=this.map.L.point(i.x-k,i.y+k),m=this.map.L.point(i.x+k,i.y-k),n=this.map.containerPointToLatLng(l),o=this.map.containerPointToLatLng(m);c[d].minX=n.lng,c[d].minY=n.lat,c[d].maxX=o.lng,c[d].maxY=o.lat}return c}},{key:"pointsProject",value:function(a){var b=[],c=void 0,e=void 0;for(c=0;e=a.length,c<e;c++){var f=a[c];if((f[0]||0==f[0])&&(f[1]||0==f[1])){var d=this.map.latLngToContainerPoint([f[1],f[0]]);b.push({x:d.x,y:d.y})}}var g=this.options.smoothFactor,h=b;return b.length&&(h=this.map.L.LineUtil.simplify(b,g)),h}},{key:"containsLatLng",value:function(a){var b=void 0,c={minX:a.lng,minY:a.lat,maxX:a.lng,maxY:a.lat},d=this.rbushInBounds.search(c);if(0===d.length)return{flag:!1,feature:null};var e=[];return b=d[d.length-1].feature,e=[[d[d.length-1].minY,d[d.length-1].minX],[d[d.length-1].maxY,d[d.length-1].maxX]],{flag:!0,feature:b,featureBounds:e}}},{key:"isPolylineContainsPoint",value:function(a,b,c){var d,e,f,g=a.geometry._coordinates,h=a.properties.drawStyle.weight,i=h/2+this.options.tolerance;for(d=0,f=g.length,e=f-1;d<f;e=d++)if((c||0!==d)&&this.map.L.LineUtil.pointToSegmentDistance(b,g[e],g[d])<=i)return!0;return!1}},{key:"getDashArray",value:function(a){if("string"===typeof a.dashArray){var b,c,d=a.dashArray.split(/[, ]+/),e=[];for(c=0;c<d.length;c++){if(b=+d[c],isNaN(b))return;e.push(b)}}else e=a.dashArray;return e}},{key:"destroy",value:function(){this.rbush.clear(),this.rbushInBounds.clear(),this.rbush=null,this.rbushInBounds=null,this.featuresInBounds=null,this.options=null,this.geojson=null,this.data=null,this.dataRanges=null,this.mappingData=null,this.group=null,this.ctx=null,this.container=null,delete this.rbush,delete this.rbushInBounds,delete this.featuresInBounds,delete this.options,delete this.geojson,delete this.data,delete this.dataRanges,delete this.mappingData,delete this.group,delete this.ctx,delete this.container,delete this.id}}]),b}(h);return a.exports=o,a.exports});;
Cube("datav:/com/datavmap-canvas2d-scatter-vector/2.0.49",["datav:/npm/eventemitter3/3.0.0","datav:/npm/safely-merge/1.0.1"],function(a,b,c){function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"===typeof b||"function"===typeof b)?b:a}function f(a,b){if("function"!==typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var g=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),h=c("datav:/npm/eventemitter3/3.0.0"),i=c("datav:/npm/safely-merge/1.0.1"),j=c("datav:/com/datavmap-canvas2d-scatter-vector/2.0.49/src/scatterVertorLayer"),k=function(a){function b(a,c){d(this,b);var f=e(this,(b.__proto__||Object.getPrototypeOf(b)).call(this));return f.options=i({renderer:"canvas"},c),f.options.minZoom=c.zoomRange[0],f.options.maxZoom=c.zoomRange[1],f.options.visibility=!0,f}return f(b,a),g(b,[{key:"addTo",value:function(a,b){return this.options.id=b,this.layer=new j(a,this.options),this}},{key:"render",value:function(a){this.layer&&this.layer.render&&this.layer.render(a)}},{key:"setMappingData",value:function(a){this.layer&&this.layer.setMappingData&&this.layer.setMappingData(a)}},{key:"onResize",value:function(a,b){this.layer&&this.layer.onResize&&this.layer.onResize(a,b)}},{key:"updateOptions",value:function(a){this.options=i(this.options,a),this.options.minZoom=a.zoomRange[0],this.options.maxZoom=a.zoomRange[1],this.layer&&this.layer.updateOptions&&this.layer.updateOptions(a)}},{key:"onClick",value:function(a){var b=a.feature;b&&b.properties&&this.emit("click",b.properties),this.layer&&this.layer.onClick&&this.layer.onClick(a)}},{key:"onMouseOver",value:function(a){var b=a.feature;b&&b.properties&&this.emit("mouseover",b.properties),this.layer&&this.layer.onMouseOver&&this.layer.onMouseOver(a)}},{key:"onDblClick",value:function(a){this.layer&&this.layer.onDblClick&&this.layer.onDblClick(a)}},{key:"bindGroup",value:function(a){var b=a.type||"",c=a.container||"<div></div>",d=a.popupStyle||{};this.layer&&this.layer.bindGroup&&this.layer.bindGroup(b,c,d)}},{key:"show",value:function(){this.options.visibility=!0,this.layer&&this.layer.show&&this.layer.show()}},{key:"hide",value:function(){this.options.visibility=!1,this.layer&&this.layer.hide&&this.layer.hide()}},{key:"containsLatLng",value:function(a){var b=this.options,c=b.interactive,d=b.popupStyle;return(c.isHover.show||d.show)&&this.layer.containsLatLng(a)}},{key:"onRender",value:function(){this.layer&&this.layer.onRender&&this.layer.onRender()}},{key:"destroy",value:function(){this.layer&&this.layer.destroy&&this.layer.destroy(),this.layer=null,delete this.layer}}]),b}(h);return a.exports=k,a.exports});