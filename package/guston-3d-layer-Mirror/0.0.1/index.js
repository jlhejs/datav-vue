// env=undefined => env=publish 
Cube("datav:/com/guston-3d-layer-Mirror/0.0.1/ReflectorFactory",[],function(a){return a.exports=function(a){a.Reflector=function(b,c){a.Mesh.call(this,b),this.type="Reflector";var d=this;c=c||{};var e=void 0===c.color?new a.Color(8355711):new a.Color(c.color),f=c.textureWidth||512,g=c.textureHeight||512,h=c.clipBias||0,i=c.shader||a.Reflector.ReflectorShader,j=void 0===c.recursion?0:c.recursion,k=new a.Plane,l=new a.Vector3,m=new a.Vector3,n=new a.Vector3,o=new a.Matrix4,p=new a.Vector3(0,0,-1),r=new a.Vector4,s=new a.Vector4,t=new a.Vector3,u=new a.Vector3,v=new a.Vector4,q=new a.Matrix4,w=new a.PerspectiveCamera,x={minFilter:a.LinearFilter,magFilter:a.LinearFilter,format:a.RGBFormat,stencilBuffer:!1},y=new a.WebGLRenderTarget(f,g,x);a.Math.isPowerOfTwo(f)&&a.Math.isPowerOfTwo(g)||(y.texture.generateMipmaps=!1);var z=new a.ShaderMaterial({uniforms:a.UniformsUtils.clone(i.uniforms),fragmentShader:i.fragmentShader,vertexShader:i.vertexShader});z.uniforms.tDiffuse.value=y.texture,z.uniforms.color.value=e,z.uniforms.textureMatrix.value=q,this.material=z,this.onBeforeRender=function(a,b,c){var e=Math.sign;if("recursion"in c.userData){if(c.userData.recursion===j)return;c.userData.recursion++}if(m.setFromMatrixPosition(d.matrixWorld),n.setFromMatrixPosition(c.matrixWorld),o.extractRotation(d.matrixWorld),l.set(0,0,1),l.applyMatrix4(o),t.subVectors(m,n),!(0<t.dot(l))){t.reflect(l).negate(),t.add(m),o.extractRotation(c.matrixWorld),p.set(0,0,-1),p.applyMatrix4(o),p.add(n),u.subVectors(m,p),u.reflect(l).negate(),u.add(m),w.position.copy(t),w.up.set(0,1,0),w.up.applyMatrix4(o),w.up.reflect(l),w.lookAt(u),w.far=c.far,w.updateMatrixWorld(),w.projectionMatrix.copy(c.projectionMatrix),w.userData.recursion=0,q.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1),q.multiply(w.projectionMatrix),q.multiply(w.matrixWorldInverse),q.multiply(d.matrixWorld),k.setFromNormalAndCoplanarPoint(l,m),k.applyMatrix4(w.matrixWorldInverse),r.set(k.normal.x,k.normal.y,k.normal.z,k.constant);var f=w.projectionMatrix;v.x=(e(r.x)+f.elements[8])/f.elements[0],v.y=(e(r.y)+f.elements[9])/f.elements[5],v.z=-1,v.w=(1+f.elements[10])/f.elements[14],r.multiplyScalar(2/r.dot(v)),f.elements[2]=r.x,f.elements[6]=r.y,f.elements[10]=r.z+1-h,f.elements[14]=r.w,d.visible=!1;var g=a.getRenderTarget(),i=a.vr.enabled,x=a.shadowMap.autoUpdate;a.vr.enabled=!1,a.shadowMap.autoUpdate=!1,a.render(b,w,y,!0),a.vr.enabled=i,a.shadowMap.autoUpdate=x,a.setRenderTarget(g);var z=c.bounds;if(void 0!==z){var A=a.getSize(),B=a.getPixelRatio();s.x=z.x*A.width*B,s.y=z.y*A.height*B,s.z=z.z*A.width*B,s.w=z.w*A.height*B,a.state.viewport(s)}d.visible=!0}},this.getRenderTarget=function(){return y}},a.Reflector.prototype=Object.create(a.Mesh.prototype),a.Reflector.prototype.constructor=a.Reflector,a.Reflector.ReflectorShader={uniforms:{color:{type:"c",value:null},tDiffuse:{type:"t",value:null},textureMatrix:{type:"m4",value:null}},vertexShader:"uniform mat4 textureMatrix;\nvarying vec4 vUv;\nvoid main() {\n\tvUv = textureMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",fragmentShader:"uniform vec3 color;\nuniform sampler2D tDiffuse;\nvarying vec4 vUv;\nfloat blendOverlay( float base, float blend ) {\n\treturn( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );\n}\nvec3 blendOverlay( vec3 base, vec3 blend ) {\n\treturn vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );\n}\nvoid main() {\n\tvec4 base = texture2DProj( tDiffuse, vUv );\n\tgl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );\n}"}},a.exports});;
Cube("datav:/com/guston-3d-layer-Mirror/0.0.1/MirrorLayer.js",["datav:/npm/bcore/0.0.21/event","datav:/npm/safely-merge/1.0.0","datav:/npm/chroma-js/1.3.4"],function(a,b,c){const d=c("datav:/npm/bcore/0.0.21/event"),e=c("datav:/npm/safely-merge/1.0.0"),f=c("datav:/npm/chroma-js/1.3.4"),g=c("datav:/com/guston-3d-layer-Mirror/0.0.1/ReflectorFactory"),h=Math.PI/180;return a.exports=function(a){const b={},c=a.THREE,f=g(c);return class extends d{constructor(c){super(),c=e(b,c),this.options=e(this.options,c),this.animate=this.animate.bind(this),this.init(a)}init(a){this.dgl=a,this.currentMaterial=this.options.material,this.isUsingFloatMaterial,this.movePathPercentCounter=0,this.dgl.event.on("runAnimation",this.animate)}setData(a){this._data=a,this.draw(a)}updateOptions(a){this.options=e(this.options,a),this.clearMesh(),this.draw(this._data)}remove(){this.clearMesh()}draw(a){let b=a[0];this.createMesh(b),this.addMeshToScene(),this.calculateMovePath()}initGeometry(a){this.geometry,"Plane"==this.options.geometry?this.geometry=this.createPlaneGeometry():"Box"==this.options.geometry?this.geometry=this.createBoxGeometry():"Sphere"==this.options.geometry?this.geometry=this.createSphereGeometry():"Cylinder"==this.options.geometry?this.geometry=this.createCylinderGeometry():"Torus"==this.options.geometry?this.geometry=this.createTorusGeometry():"Cone"==this.options.geometry?this.geometry=this.createConeGeometry():"TorusKnot"==this.options.geometry?this.geometry=this.createTorusKnotGeometry():"BufferGeometry"==this.options.geometry&&(this.geometry=this.createBufferGeometry(a))}createPlaneGeometry(){let a=new c.PlaneBufferGeometry(this.options.geometryPlane.width,this.options.geometryPlane.height,this.options.geometryPlane.widthSegment,this.options.geometryPlane.heightSegment);return a}createBoxGeometry(){let a=new c.CubeGeometry(this.options.geometryBox.width,this.options.geometryBox.height,this.options.geometryBox.depth,this.options.geometryBox.widthSegment,this.options.geometryBox.heightSegment,this.options.geometryBox.depthSegment);return a}createSphereGeometry(){let a=new c.SphereGeometry(this.options.geometrySphere.radius,this.options.geometrySphere.widthSegments,this.options.geometrySphere.heightSegments);return a}createCylinderGeometry(){let a=this.options.geometryCylinder.thetaStart*h,b=this.options.geometryCylinder.thetaLength*h,d=new c.CylinderGeometry(this.options.geometryCylinder.radiusTop,this.options.geometryCylinder.radiusBottom,this.options.geometryCylinder.height,this.options.geometryCylinder.radialSegments,this.options.geometryCylinder.heightSegments,this.options.geometryCylinder.openEnded,a,b);return d}createTorusGeometry(){let a=this.options.geometryTorus.arc*h,b=new c.TorusGeometry(this.options.geometryTorus.radius,this.options.geometryTorus.tube,this.options.geometryTorus.radialSegments,this.options.geometryTorus.tubularSegments,a);return b}createConeGeometry(){let a=this.options.geometryCone.thetaStart*h,b=this.options.geometryCone.thetaLength*h,d=new c.ConeGeometry(this.options.geometryCone.radius,this.options.geometryCone.height,this.options.geometryCone.radialSegments,this.options.geometryCone.heightSegments,this.options.geometryCone.openEnded,a,b);return d}createTorusKnotGeometry(){let a=new c.TorusKnotGeometry(this.options.geometryTorusKnot.radius,this.options.geometryTorusKnot.tube,this.options.geometryTorusKnot.tubularSegments,this.options.geometryTorusKnot.radialSegments,this.options.geometryTorusKnot.p,this.options.geometryTorusKnot.q);return a}createBufferGeometry(a){let b=new c.BufferGeometry,d=a.vertices,e=a.uvs,f=a.normals,g=a.indices;return b.setIndex(new c.BufferAttribute(new Uint32Array(g),1)),b.addAttribute("position",new c.BufferAttribute(new Float32Array(d),3)),b.addAttribute("uv",new c.BufferAttribute(new Float32Array(e),2)),b.addAttribute("normal",new c.BufferAttribute(new Float32Array(f),3)),b.computeBoundingSphere(),b.computeBoundingBox(),b}createMesh(a){this.initGeometry(a),this.mesh=new c.Reflector(this.geometry,{clipBias:this.options.reflectorConfig.clipBias,textureWidth:this.options.reflectorConfig.textureWidth,textureHeight:this.options.reflectorConfig.textureHeight,color:this.options.reflectorConfig.color,recursion:this.options.reflectorConfig.recursion}),console.log(this.mesh),this.mesh.position.set(this.options.transform.x,this.options.transform.y,this.options.transform.z),this.mesh.rotation.set(this.options.rotation.x*h,this.options.rotation.y*h,this.options.rotation.z*h),this.mesh.scale.set(this.options.scale.x,this.options.scale.y,this.options.scale.z),this.options.enableShadow&&(this.options.shadowConfig.castShadow&&(this.mesh.castShadow=!0),this.options.shadowConfig.receiveShadow&&(this.mesh.receiveShadow=!0)),this.mesh.visible=this.options.display}addMeshToScene(){this.dgl.scene.add(this.mesh)}animate(){this.options.enableRotationAnimation&&this.moveRotationPerFrame(),this.options.enableTranslateAnimation&&this.moveTranslatePerFrame()}moveRotationPerFrame(){this.mesh.rotation.x+=this.options.rotationAnimationConfig.x,this.mesh.rotation.y+=this.options.rotationAnimationConfig.y,this.mesh.rotation.z+=this.options.rotationAnimationConfig.z}moveTranslatePerFrame(){this.movePathPercentCounter+=1e-3;let a=this.movePath.getPointAt(this.movePathPercentCounter);this.mesh.position.x=a.x,this.mesh.position.y=a.y,1<this.movePathPercentCounter&&(this.movePathPercentCounter=0)}calculateMovePath(){this.movePath=this.calculateMoveCirclePath()}calculateMoveCirclePath(){let a=new c.EllipseCurve(this.options.translateAnimationCircle.xCenter,this.options.translateAnimationCircle.yCenter,this.options.translateAnimationCircle.xRadius,this.options.translateAnimationCircle.yRadius,this.options.translateAnimationCircle.startAngle*h,this.options.translateAnimationCircle.endAngle*h,this.options.translateAnimationCircle.clockwise,this.options.translateAnimationCircle.rotation*h);return a.getPoints(1e3),a}clearMesh(){this.dgl.disposeNode(this.mesh),this.dgl.scene.remove(this.mesh),this.mesh=null}}},a.exports});;
Cube("datav:/com/guston-3d-layer-Mirror/0.0.1",["datav:/npm/bcore/0.0.21/event","datav:/npm/safely-merge/1.0.0"],function(a,b,c){const d=c("datav:/npm/bcore/0.0.21/event"),e=c("datav:/npm/safely-merge/1.0.0"),f=c("datav:/com/guston-3d-layer-Mirror/0.0.1/MirrorLayer.js"),g={};return a.exports=class extends d{constructor(a,b){super(),this.apis=b.apis,this._data=null,this.config=b}init(a){let b=this.getOptions(),c=f(a);this.layer=new c(b)}addTo(a){this.init(a)}getOptions(){return this.config=e(g,this.config),this.config}data(a){return a&&(this._data=a),this._data}remove(){this.layer&&this.layer.remove&&this.layer.remove(),this.layer=null,this._data=null}render(a){this.layer.setData(a)}updateOptions(a){this.config=e(this.config,a),a=this.getOptions(),this.layer&&this.layer.updateOptions(a)}},a.exports});