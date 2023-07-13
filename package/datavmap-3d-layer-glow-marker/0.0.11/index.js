// env=undefined => env=publish 
Cube("datav:/com/datavmap-3d-layer-glow-marker/0.0.11/frag.js",[],function(a){return a.exports="\n#ifdef GL_ES\n  precision highp float;\n#endif\n\nuniform float uTimeCounter;\nuniform vec3 uColor;\nvarying vec2 vUv;\n\nvoid main() {\n  // gl_FragColor = vec4( 1.0, 0.7, 0.2, 1.0 );\n\n  // vec3 color = vec3( 1.0, 0.3, 0.1);\n\n  vec2 uvCenter = vec2(0.5, 0.5);\n  float uvDist = distance(vUv, uvCenter);\n  \n  float uvOpacity = 1.0;\n  float lessOpacity = 0.95;\n\n  if (uvDist > uTimeCounter) {\n    uvOpacity = 0.0;\n  } else {\n    uvOpacity = 1.0 - (uvDist / (uTimeCounter + 0.5));\n  }\n\n  uvOpacity *= lessOpacity; //make it more transparent as will have front icon\n  \n  gl_FragColor = vec4(uColor, uvOpacity);\n}\n",a.exports});;
Cube("datav:/com/datavmap-3d-layer-glow-marker/0.0.11/vert.js",[],function(a){return a.exports="\nvarying vec2 vUv;\n\nvoid main() {\n  vUv  = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}\n",a.exports});;
Cube("datav:/com/datavmap-3d-layer-glow-marker/0.0.11/GlowMarkerLayer.js",["datav:/npm/eventemitter3/2.0.3","datav:/npm/safely-merge/1.0.1","datav:/npm/chroma-js/1.3.4"],function(a,b,c){function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"===typeof b||"function"===typeof b)?b:a}function f(a,b){if("function"!==typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var g=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),h=c("datav:/npm/eventemitter3/2.0.3"),i=c("datav:/npm/safely-merge/1.0.1"),j=c("datav:/npm/chroma-js/1.3.4"),k=c("datav:/com/datavmap-3d-layer-glow-marker/0.0.11/vert.js"),l=c("datav:/com/datavmap-3d-layer-glow-marker/0.0.11/frag.js");return a.exports=function(a){var b=a.datavgl,c=b.THREE,m=a.glLayer||a,n=b.DataVModelTools.point2buffer,o=a.worldsize,p={};return function(a){function b(a){d(this,b);var c=e(this,(b.__proto__||Object.getPrototypeOf(b)).call(this));return a=i(p,a),c.options=i(c.options,a),c.animate=c.animate.bind(c),c.init(),c}return f(b,a),g(b,[{key:"init",value:function(){this.configRtt(),this.renderRtt(),this.meshGroup=new c.Group,m.on("runAnimation",this.animate)}},{key:"configRtt",value:function(){this.cameraRTT=new c.OrthographicCamera(-512,512,512,-512,-1e4,1e4),this.cameraRTT.position.z=10,this.sceneRTT=new c.Scene,this.rtTexture=new c.WebGLRenderTarget(512,512,{format:c.RGBAFormat}),this.cameraRTT_2=new c.OrthographicCamera(-512,512,512,-512,-1e4,1e4),this.cameraRTT_2.position.z=10,this.sceneRTT_2=new c.Scene,this.rtTexture_2=new c.WebGLRenderTarget(512,512,{format:c.RGBAFormat}),this.cameraRTT_type_a=new c.OrthographicCamera(-512,512,512,-512,-1e4,1e4),this.cameraRTT_type_a.position.z=10,this.sceneRTT_type_a=new c.Scene,this.rtTexture_type_a=new c.WebGLRenderTarget(512,512,{format:c.RGBAFormat}),this.cameraRTT_type_b=new c.OrthographicCamera(-512,512,512,-512,-1e4,1e4),this.cameraRTT_type_b.position.z=10,this.sceneRTT_type_b=new c.Scene,this.rtTexture_type_b=new c.WebGLRenderTarget(512,512,{format:c.RGBAFormat}),this.cameraRTT_type_c=new c.OrthographicCamera(-512,512,512,-512,-1e4,1e4),this.cameraRTT_type_c.position.z=10,this.sceneRTT_type_c=new c.Scene,this.rtTexture_type_c=new c.WebGLRenderTarget(512,512,{format:c.RGBAFormat})}},{key:"renderRtt",value:function(){var a=j(this.options.markerSprite.spriteColorA).gl();this.materialRtt=new c.ShaderMaterial({uniforms:{uTimeCounter:{value:0.5},uColor:{value:new c.Vector3(a[0],a[1],a[2])}},vertexShader:k,fragmentShader:l,side:c.DoubleSide,blending:c.AdditiveBlending,depthTest:!0,depthWrite:!1,transparent:!0});var b=new c.CircleBufferGeometry(256,32),d=new c.Mesh(b,this.materialRtt);this.iconTextureLoader=new c.TextureLoader().setCrossOrigin("*"),this.materialIconRtt=new c.MeshBasicMaterial({map:this.iconTextureLoader.load(this.options.markerSprite.spriteTexture)}),this.materialIconRtt.needsUpdate=!0;var e=new c.CircleBufferGeometry(64,32);this.IconRtt=new c.Mesh(e,this.materialIconRtt),this.IconRtt_2=new c.Mesh(e,this.materialIconRtt),this.sceneRTT.add(d),this.sceneRTT.add(this.IconRtt),this.sceneRTT_2.add(this.IconRtt_2),this.IconRtt_a=new c.Mesh(e,this.materialIconRtt),this.IconRtt_b=new c.Mesh(e,this.materialIconRtt),this.IconRtt_c=new c.Mesh(e,this.materialIconRtt),this.materialRtt_a=this.createFlashingMaterial(this.options.markerSprite.spriteColorA);var f=new c.Mesh(b,this.materialRtt_a);this.sceneRTT_type_a.add(f),this.sceneRTT_type_a.add(this.IconRtt_a),this.materialRtt_b=this.createFlashingMaterial(this.options.markerSprite.spriteColorB);var g=new c.Mesh(b,this.materialRtt_b);this.sceneRTT_type_b.add(g),this.sceneRTT_type_b.add(this.IconRtt_b),this.materialRtt_c=this.createFlashingMaterial(this.options.markerSprite.spriteColorC);var h=new c.Mesh(b,this.materialRtt_c);this.sceneRTT_type_c.add(h),this.sceneRTT_type_c.add(this.IconRtt_c)}},{key:"createFlashingMaterial",value:function(a){var b=j(a).gl(),d=new c.ShaderMaterial({uniforms:{uTimeCounter:{value:0.5},uColor:{value:new c.Vector3(b[0],b[1],b[2])}},vertexShader:k,fragmentShader:l,side:c.DoubleSide,blending:c.AdditiveBlending,depthTest:!0,depthWrite:!1,transparent:!0});return d}},{key:"setData",value:function(a){if(a&&0==a.length&&this.meshGroup&&this.disposeMesh(),a&&a.length){this.disposeMesh(),this.meshGroup=new c.Group;var b=[],e=[];a.forEach(function(a){b.push(a.flashing),e.push(a.type)});var d=n(a,{worldsize:o,getKey:function(a,b){return b}}),f=d.positions;this.spriteMaterial=new c.SpriteMaterial({map:this.rtTexture.texture,transparent:!0,opacity:this.options.markerSprite.spriteOpacity}),this.sprite=new c.Sprite(this.spriteMaterial),this.sprite.scale.x=this.sprite.scale.y=this.options.markerSprite.spriteSizeScale/1e4,this.spriteMaterialNoGlow=new c.SpriteMaterial({map:this.rtTexture_2.texture,transparent:!0,opacity:this.options.markerSprite.spriteOpacity}),this.spriteNoGlow=new c.Sprite(this.spriteMaterialNoGlow),this.spriteNoGlow.scale.x=this.spriteNoGlow.scale.y=this.options.markerSprite.spriteSizeScale/1e4,this.spriteMaterial_a=new c.SpriteMaterial({map:this.rtTexture_type_a.texture,transparent:!0,opacity:this.options.markerSprite.spriteOpacity}),this.sprite_a=new c.Sprite(this.spriteMaterial_a),this.sprite_a.scale.x=this.sprite_a.scale.y=this.options.markerSprite.spriteSizeScale/1e4,this.spriteMaterial_b=new c.SpriteMaterial({map:this.rtTexture_type_b.texture,transparent:!0,opacity:this.options.markerSprite.spriteOpacity}),this.sprite_b=new c.Sprite(this.spriteMaterial_b),this.sprite_b.scale.x=this.sprite_b.scale.y=this.options.markerSprite.spriteSizeScale/1e4,this.spriteMaterial_c=new c.SpriteMaterial({map:this.rtTexture_type_c.texture,transparent:!0,opacity:this.options.markerSprite.spriteOpacity}),this.sprite_c=new c.Sprite(this.spriteMaterial_c),this.sprite_c.scale.x=this.sprite_c.scale.y=this.options.markerSprite.spriteSizeScale/1e4;for(var g=0;g<f.length;g+=3){var h=void 0,i=g/3,j=b[i],k=e[i];0==j?0===j&&(h=this.spriteNoGlow.clone()):"a"==k?h=this.sprite_a.clone():"b"==k?h=this.sprite_b.clone():"c"==k?h=this.sprite_c.clone():h=this.spriteNoGlow.clone(),h.position.x=d.positions[g+0],h.position.y=d.positions[g+1],h.position.z=this.options.heightPosition,this.meshGroup.add(h)}this.meshGroup.visible=this.options.visibility,m.rootNode.add(this.meshGroup)}}},{key:"animate",value:function(){this.meshGroup&&(-0.5<this.materialRtt.uniforms.uTimeCounter.value?this.materialRtt.uniforms.uTimeCounter.value-=0.04:this.materialRtt.uniforms.uTimeCounter.value=0.5,-0.5<this.materialRtt_a.uniforms.uTimeCounter.value?this.materialRtt_a.uniforms.uTimeCounter.value-=0.04:this.materialRtt_a.uniforms.uTimeCounter.value=0.5,-0.5<this.materialRtt_b.uniforms.uTimeCounter.value?this.materialRtt_b.uniforms.uTimeCounter.value-=0.04:this.materialRtt_b.uniforms.uTimeCounter.value=0.5,-0.5<this.materialRtt_c.uniforms.uTimeCounter.value?this.materialRtt_c.uniforms.uTimeCounter.value-=0.04:this.materialRtt_c.uniforms.uTimeCounter.value=0.5,m.renderer.clearTarget(this.rtTexture),m.renderer.render(this.sceneRTT,this.cameraRTT,this.rtTexture,!0),m.renderer.clearTarget(this.rtTexture_2),m.renderer.render(this.sceneRTT_2,this.cameraRTT_2,this.rtTexture_2,!0),m.renderer.clearTarget(this.rtTexture_type_a),m.renderer.render(this.sceneRTT_type_a,this.cameraRTT_type_a,this.rtTexture_type_a,!0),m.renderer.clearTarget(this.rtTexture_type_b),m.renderer.render(this.sceneRTT_type_b,this.cameraRTT_type_b,this.rtTexture_type_b,!0),m.renderer.clearTarget(this.rtTexture_type_c),m.renderer.render(this.sceneRTT_type_c,this.cameraRTT_type_c,this.rtTexture_type_c,!0))}},{key:"disposeMesh",value:function(){this.meshGroup&&m.disposeNode(this.meshGroup),this.meshGroup&&m.rootNode.remove(this.meshGroup),this.sprite&&this.disposeSprite(this.sprite),this.sprite=null,this.spriteNoGlow&&this.disposeSprite(this.spriteNoGlow),this.spriteNoGlow=null,this.sprite_a&&this.disposeSprite(this.sprite_a),this.sprite_a=null,this.sprite_b&&this.disposeSprite(this.sprite_b),this.sprite_b=null,this.sprite_c&&this.disposeSprite(this.sprite_c),this.sprite_c=null,this.meshGroup=null}},{key:"disposeSprite",value:function(a){a.material.map.dispose(),a.material.dispose(),a=null}},{key:"updateOptions",value:function(a){var b=this;this.options=i(this.options,a);var d=j(this.options.markerSprite.spriteColorA).gl();this.materialRtt.uniforms.uColor.value=new c.Vector3(d[0],d[1],d[2]),this.materialRtt.needsUpdate=!0,this.materialIconRtt.map=this.iconTextureLoader.load(this.options.markerSprite.spriteTexture),this.materialIconRtt.needsUpdate=!0,this.spriteMaterial.opacity=this.options.markerSprite.spriteOpacity,this.spriteMaterial.needsUpdate=!0,this.spriteMaterialNoGlow.opacity=this.options.markerSprite.spriteOpacity,this.spriteMaterialNoGlow.needsUpdate=!0;var e=j(this.options.markerSprite.spriteColorA).gl();this.materialRtt_a.uniforms.uColor.value=new c.Vector3(e[0],e[1],e[2]),this.materialRtt_a.needsUpdate=!0;var f=j(this.options.markerSprite.spriteColorB).gl();this.materialRtt_b.uniforms.uColor.value=new c.Vector3(f[0],f[1],f[2]),this.materialRtt_b.needsUpdate=!0;var g=j(this.options.markerSprite.spriteColorC).gl();this.materialRtt_c.uniforms.uColor.value=new c.Vector3(g[0],g[1],g[2]),this.materialRtt_c.needsUpdate=!0,this.spriteMaterial_a.opacity=this.options.markerSprite.spriteOpacity,this.spriteMaterial_a.needsUpdate=!0,this.spriteMaterial_b.opacity=this.options.markerSprite.spriteOpacity,this.spriteMaterial_b.needsUpdate=!0,this.spriteMaterial_c.opacity=this.options.markerSprite.spriteOpacity,this.spriteMaterial_c.needsUpdate=!0,this.meshGroup.children.forEach(function(a){a.scale.x=a.scale.y=b.options.markerSprite.spriteSizeScale/1e4,a.position.z=b.options.heightPosition}),this.meshGroup.visible=this.options.visibility}},{key:"show",value:function(){this.options.visibility=!0,this.meshGroup&&(this.meshGroup.visible=!0)}},{key:"hide",value:function(){this.options.visibility=!1,this.meshGroup&&(this.meshGroup.visible=!1)}},{key:"remove",value:function(){m.off("runAnimation",this.animate),this.disposeMesh(),m.disposeNode(this.sceneRTT),this.rtTexture.dispose(),this.sceneRTT=null,this.rtTexture=null,this.cameraRTT=null,m.disposeNode(this.sceneRTT_2),this.rtTexture_2.dispose(),this.sceneRTT_2=null,this.rtTexture_2=null,this.cameraRTT_2=null,m.disposeNode(this.sceneRTT_type_a),this.rtTexture_type_a.dispose(),this.sceneRTT_type_a=null,this.rtTexture_type_a=null,this.cameraRTT_type_a=null,m.disposeNode(this.sceneRTT_type_b),this.rtTexture_type_b.dispose(),this.sceneRTT_type_b=null,this.rtTexture_type_b=null,this.cameraRTT_type_b=null,m.disposeNode(this.sceneRTT_type_c),this.rtTexture_type_c.dispose(),this.sceneRTT_type_c=null,this.rtTexture_type_c=null,this.cameraRTT_type_c=null}}]),b}(h)},a.exports});;
Cube("datav:/com/datavmap-3d-layer-glow-marker/0.0.11",["datav:/npm/eventemitter3/2.0.3","datav:/npm/safely-merge/1.0.1"],function(a,b,c){function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"===typeof b||"function"===typeof b)?b:a}function f(a,b){if("function"!==typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var g=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),h=c("datav:/npm/eventemitter3/2.0.3"),i=c("datav:/npm/safely-merge/1.0.1"),j=c("datav:/com/datavmap-3d-layer-glow-marker/0.0.11/GlowMarkerLayer.js"),k={},l=function(a){function b(a,c){d(this,b);var f=e(this,(b.__proto__||Object.getPrototypeOf(b)).call(this));return f.container="string"===typeof a?document.querySelector(a):a,f.apis=c.apis,f.map=null,f._data=null,f.config=c,f}return f(b,a),g(b,[{key:"initLayer",value:function(){var a=this.getOptions(),b=j(this.map);this.layer=new b(a),this.render(this.data)}},{key:"init",value:function(){var a=this;this.resetID&&clearTimeout(this.resetID),this.resetID=setTimeout(function(){a.map.glLayer.loaded?(a.resetID&&clearTimeout(a.resetID),a.initLayer()):a.init()},100)}},{key:"addTo",value:function(a){var b=this;this.map=a,this.init(),this.endID=setTimeout(function(){b.resetID&&clearTimeout(b.resetID)},300000)}},{key:"getOptions",value:function(){return this.config=i(k,this.config),this.config}},{key:"show",value:function(){this.config.visibility=!0,this.layer&&this.layer.show&&this.layer.show()}},{key:"hide",value:function(){this.config.visibility=!1,this.layer&&this.layer.hide&&this.layer.hide()}},{key:"remove",value:function(){this.endID&&clearTimeout(this.endID),this.resetID&&clearTimeout(this.resetID),this.layer&&this.layer.remove&&this.layer.remove(),this.layer=null,this._data=null,this.data=null}},{key:"render",value:function(a){this.data=a,this.layer&&this.layer.setData(a)}},{key:"updateOptions",value:function(a){this.config=i(this.config,a),a=this.getOptions(),this.layer&&this.layer.updateOptions(a)}}]),b}(h);return a.exports=l,a.exports});