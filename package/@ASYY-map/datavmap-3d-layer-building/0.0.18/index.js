// env=undefined => env=publish 
Cube("datav:/com/datavmap-3d-layer-building/0.0.18/buildingLayer.js",["datav:/npm/eventemitter3/2.0.3","datav:/npm/safely-merge/1.0.1","datav:/npm/chroma-js/1.3.4"],function(a,b,c){function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"===typeof b||"function"===typeof b)?b:a}function f(a,b){if("function"!==typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var g=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),h=c("datav:/npm/eventemitter3/2.0.3"),i=c("datav:/npm/safely-merge/1.0.1"),j=c("datav:/npm/chroma-js/1.3.4");return a.exports=function(a){var b=a.datavgl,c=b.THREE,k=a.glLayer||a,l=b.DataVModelTools.extrude2buffer,m=a.worldsize,n={buildingsOpacity:0.8,buildingsBlending:"NormalBlending",buildingColor:"#fff",buildingvis:!0,buildingsScaleZ:1};return function(a){function b(a){d(this,b);var c=e(this,(b.__proto__||Object.getPrototypeOf(b)).call(this));return a=i(n,a),c.options=i(c.options,a),c.init(),c}return f(b,a),g(b,[{key:"init",value:function(){this.data=[],this.geojson={type:"FeatureCollection",features:[]},this.initMaterial(),this.scale=j.scale([this.options.buildingColor.minColor,this.options.buildingColor.maxColor]).domain([0,0]),this.setData(this.data)}},{key:"initMaterial",value:function(){this.material=new c.MeshStandardMaterial({shading:c.FlatShading,side:c.DoubleSide,metalness:this.options.buildingsMetalness,roughness:this.options.buildingsRoughness,transparent:!0,opacity:this.options.buildingsOpacity,blending:c[this.options.buildingsBlending],vertexColors:c.VertexColors}),this.material.needsUpdate=!0}},{key:"addBuilding",value:function(a){var b=this.geometry=new c.BufferGeometry;b.setIndex(new c.BufferAttribute(new Uint32Array(a.indices_array),1)),b.addAttribute("position",new c.BufferAttribute(new Float32Array(a.positions),3)),b.addAttribute("color",new c.BufferAttribute(new Float32Array(4*(a.positions.length/3)),4)),b.needsOffset=!0,b.selfOffset=a.offset||[0,0],b.computeBoundingSphere(),b.computeVertexNormals(),b.normalizeNormals(),b.computeBoundingBox(),this.buildings=new c.Mesh(this.geometry,this.material),this.buildings.frustumCulled=!1,this.buildingsIndex=a.key_index,this.buildings.visible=this.options.buildingvis,this.buildings.position.setZ(this.options.buildingsPositionZ),this.buildings.scale.setZ(this.options.buildingsScaleZ),k.offsetNode.add(this.buildings),k.emit("init-offset")}},{key:"setBuilding",value:function(a){if(a&&"FeatureCollection"===a.type){this.disposeGeometry(),k.offsetNode.remove(this.buildings);this.genGeojson(a);this.addBuilding(l(this.geojson,{worldsize:m,offset:!1,getKey:function(a,b){return a.properties.id||b},getTop:function(a){return a.properties.height||a.properties.floor||0}}))}else a&&a.positions&&(this.disposeGeometry(),k.offsetNode.remove(this.buildings),this.addBuilding(a));this.updateBuildingColor()}},{key:"genGeojson",value:function(a){var b=this;this.geojson=a,this.data.length&&a.features.forEach(function(a){b.data.forEach(function(b){a.properties.id==b.id&&(a.properties=Object.assign(a.properties,b))})});var c=this.data;return this.minValue=Math.min.apply([],c.map(function(a){return+a.value})),this.maxValue=Math.max.apply([],c.map(function(a){return+a.value})),isFinite(this.minValue)&&isFinite(this.maxValue)||(this.minValue=0,this.maxValue=0),this.scale=j.scale([this.options.buildingColor.minColor,this.options.buildingColor.maxColor]).domain([this.minValue,this.maxValue]),a}},{key:"setData",value:function(a){this.data=a||[],this.setBuilding(this.geojson),this.updateBuildingColor()}},{key:"updateBuildingColor",value:function(){var a=this;this.setAllBuildingsColor(),this.data.forEach(function(b){void 0!=b.value&&a.changeBuildingColorById(b.id,j(a.scale(b.value)).gl())}),this.geometry.attributes.color.needsUpdate=!0}},{key:"changeBuildingColorById",value:function(a,b){var c=this.buildingsIndex;if(c[a])for(var d=c[a],e=d[0],f=d[1],g=e;g<f;g++)this.geometry.attributes.color.setXYZW(g,b[0],b[1],b[2],void 0==b[3]?1:b[3])}},{key:"setAllBuildingsColor",value:function(){for(var a=j(this.options.buildingColor.defaultColor).gl(),b=this.geometry.attributes.color.array,c=b.length/4-1;0<=c;c--)this.geometry.attributes.color.setXYZW(c,a[0],a[1],a[2],void 0==a[3]?1:a[3])}},{key:"disposeGeometry",value:function(){this.geometry&&this.geometry.dispose()}},{key:"updateOptions",value:function(a){this.options=i(this.options,a),this.scale=j.scale([this.options.buildingColor.minColor,this.options.buildingColor.maxColor]).domain([this.minValue,this.maxValue]),this.material.blending=c[this.options.buildingsBlending],this.material.opacity=this.options.buildingsOpacity,this.material.metalness=this.options.buildingsMetalness,this.material.roughness=this.options.buildingsRoughness,this.buildings.visible=this.options.buildingvis,this.updateBuildingColor(),this.buildings.scale.setZ(this.options.buildingsScaleZ),this.buildings.position.setZ(this.options.buildingsPositionZ),this.material.needsUpdate=!0}},{key:"show",value:function(){this.options.buildingvis=!0,this.buildings&&(this.buildings.visible=!0)}},{key:"hide",value:function(){this.options.buildingvis=!1,this.buildings&&(this.buildings.visible=!1)}},{key:"remove",value:function(){k.offsetNode.remove(this.buildings),this.geometry.dispose(),this.material.dispose(),this.buildings=null}}]),b}(h)},a.exports});;
Cube("datav:/com/datavmap-3d-layer-building/0.0.18",["datav:/npm/eventemitter3/2.0.3","datav:/npm/safely-merge/1.0.1"],function(a,b,c){function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"===typeof b||"function"===typeof b)?b:a}function f(a,b){if("function"!==typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var g=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),h=c("datav:/npm/eventemitter3/2.0.3"),i=c("datav:/npm/safely-merge/1.0.1"),j=c("datav:/com/datavmap-3d-layer-building/0.0.18/buildingLayer.js"),k={},l=function(a){function b(a,c){d(this,b);var f=e(this,(b.__proto__||Object.getPrototypeOf(b)).call(this));return f.container="string"===typeof a?document.querySelector(a):a,f.apis=c.apis,f.map=null,f._data=null,f.config=c,f}return f(b,a),g(b,[{key:"initLayer",value:function(){var a=this.getOptions(),b=j(this.map);this.layer=new b(a),this.updateBuilding(this.building),this.updateData(this.data)}},{key:"init",value:function(){var a=this;this.resetID&&clearTimeout(this.resetID),this.resetID=setTimeout(function(){a.map.glLayer.loaded?(a.resetID&&clearTimeout(a.resetID),a.initLayer()):a.init()},100)}},{key:"addTo",value:function(a){var b=this;this.map=a,this.init(),this.endID=setTimeout(function(){b.resetID&&clearTimeout(b.resetID)},300000)}},{key:"getOptions",value:function(){return this.config=i(k,this.config),this.config}},{key:"show",value:function(){this.config.buildingvis=!0,this.layer&&this.layer.show&&this.layer.show()}},{key:"hide",value:function(){this.config.buildingvis=!1,this.layer&&this.layer.hide&&this.layer.hide()}},{key:"remove",value:function(){this.endID&&clearTimeout(this.endID),this.resetID&&clearTimeout(this.resetID),this.layer&&this.layer.remove&&this.layer.remove(),this.layer=null,this._data=null,this.data=null,this.building=null}},{key:"updateBuilding",value:function(a){this.building=a,this.layer&&this.layer.setBuilding(a)}},{key:"updateData",value:function(a){this.data=a,this.layer&&this.layer.setData(a)}},{key:"updateOptions",value:function(a){this.config=i(this.config,a),a=this.getOptions(),this.layer&&this.layer.updateOptions(a)}}]),b}(h);return a.exports=l,a.exports});