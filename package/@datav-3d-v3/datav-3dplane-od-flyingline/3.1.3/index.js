// env=undefined => env=publish 
Cube("datav:/com/@datav-3d-v3/datav-3dplane-od-flyingline/3.1.3/src/shader/meshline_frag.glsl",[],function(n,e,a,l,t,o){return n.exports="#define GLSLIFY 1\n#include <common>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n#include <fog_pars_fragment>\n\nuniform vec3 color;\nuniform float opacity;\n\n#ifdef USE_MAP\n  uniform sampler2D map;\n  uniform sampler2D map1;\n#endif\n\n#ifdef USE_ALPHA_MAP\n  uniform sampler2D alphaMap;\n#endif\n\nuniform float visibility;\nuniform uint useDash;\nuniform float dashOffset0;\nuniform float dashOffset1;\n\nvarying float v_brightSegCount;\n\nuniform float alphaTest;\nuniform vec2 uvScale0;\n\nin vec2 vUv;\n\nflat in float lineAspect;\n// flat in float v_symbolCount;\n\nvarying vec2 v_normal;\nvarying vec4 v_lineColor;\nvarying float v_blurWidthRatio;\nvarying float v_lineType;\n\nvarying vec4 v_lineHeadColor;\nvarying float v_lineHeadSpaceRatio;\n\nvarying vec4 v_symbolColor;\nvarying vec3 v_symbolParams;\nvarying float v_outOfOrder;\n\nvoid main() {\n  #include <clipping_planes_fragment>\n  #include <logdepthbuf_fragment>\n    vec4 c = v_lineColor;\n\n    bool useMap = false;\n    float dash0 = dashOffset0 * v_outOfOrder;\n    float dash1 = dashOffset1 * v_outOfOrder;\n    // for line  \n    vec2 uv0 = vUv * uvScale0;\n    uv0.x *= v_brightSegCount;\n    uv0.x -= dash0;\n    uv0.y = (v_lineType - 1.0 + vUv.y) * 0.2;\n   \n    // antialiase\n    // reference from https://blog.mapbox.com/drawing-antialiased-lines-with-opengl-8766f34192dc\n    float blur = 1.0;\n    float featherLen = length(v_normal) - (1.0 - v_blurWidthRatio);\n    if (featherLen > 0.0) {\n      blur =  1.0 - featherLen / v_blurWidthRatio;\n    }\n    blur *= blur;\n\n    vec4 texture1 = vec4(0.0);\n\n    float symbolLen = 1.0;\n    \n    #ifdef USE_MAP\n      // 飞线头颜色处理\n      vec4 texture0 = texture2D(map, uv0); //线条纹理\n      texture0 *= blur; //仅对线条纹理做边缘模糊\n      texture0 = mix(vec4(.0), texture0, texture0.a);\n      c *= texture0;\n\n      //使得不同长度的飞线上符号运动速度一致\n      float segU = mod(uv0.x + dash0 - dash1, 1.0);\n\n      symbolLen = v_symbolParams.z * 100.0 / lineAspect * v_brightSegCount; //保持符号贴图的纵横比\n      if (segU < symbolLen) {\n        segU = segU / symbolLen;\n\n        // 对每个分段的首尾两端做模糊处理\n        float endBlurLen = 0.08; //首尾两端模糊长度\n        float endBlurFactor = 1.0;\n        if (segU < endBlurLen) {\n          endBlurFactor = pow((segU / endBlurLen), 3.0);\n        } else if (segU > 1.0 - endBlurLen) {\n          endBlurFactor = pow((1.0 - segU) / endBlurLen, 3.0);\n        }\n\n        vec2 uv1 = vec2( segU, vUv.y);\n        uv1.y = (v_symbolParams.x * 100.0 - 1.0 + vUv.y) / (v_symbolParams.y * 100.0);\n       \n        // // 对每个分段的首尾两端做模糊处理\n        // float endBlurLen = 0.08; //首尾两端模糊长度\n        // // float endBlurFactor = 1.0;\n        // if(segU < endBlurLen){\n        //   endBlurFactor = pow((segU / endBlurLen), 3.0);\n        // }else if(segU > 1.0 - endBlurLen){\n        //   endBlurFactor = pow((1.0 - segU) / endBlurLen, 3.0);\n        // }\n        // texture1 = v_symbolColor * texture2D(map1, uv1) * endBlurFactor;\n\n        // vec2 uv1 = vec2( segU, vUv.y);\n        // uv1.y = (v_symbolParams.x * 100.0 - 1.0 + vUv.y) / (v_symbolParams.y * 100.0);\n\n        texture1 = v_symbolColor * texture2D(map1, uv1) * endBlurFactor;\n\n        if (v_symbolColor.w > 0.0) {\n          c += texture1;\n        }\n      }\n    #endif\n\n    #ifdef USE_ALPHA_MAP\n      // c.a *= texture2D(alphaMap, vUv * repeat).a;\n      c.a *= texture2D(alphaMap, uv0).a;\n\n      texture1.a *= texture2D(alphaMap, uv0).a;\n    #endif\n\n    #include <alphatest_fragment>\n\n    if (c.a < alphaTest) discard;\n\n    // 高亮线处理\n    float dist = 1.0;\n    float blurRange = 0.1;\n\n    float _spaceRatio = v_lineHeadSpaceRatio + blurRange;\n    float localSegLen = mod(uv0.x + v_lineHeadSpaceRatio, 1.0);\n    float localSegRatio = localSegLen;\n\n    if (v_lineHeadSpaceRatio == 0.0) {\n      dist = 0.0;\n      gl_FragColor = c;\n    } else {\n      if (localSegRatio > _spaceRatio) {\n        dist = pow((localSegRatio - _spaceRatio) / (1.0 - _spaceRatio), 4.0 );\n      } else if (localSegRatio > v_lineHeadSpaceRatio) {\n        // 对高亮线段的头部做模糊处理\n        dist = pow((localSegRatio - v_lineHeadSpaceRatio) * blurRange, 4.0 );\n      }\n    }\n    dist = saturate(dist);\n    \n    if (v_lineHeadColor.w > 0.0) {\n      gl_FragColor = mix(c, v_lineHeadColor, dist);\n    } else {\n      gl_FragColor = c;\n    }\n\n    gl_FragColor.a *= blur;\n    \n    #include <tonemapping_fragment>\n    #include <encodings_fragment>\n    #include <fog_fragment>\n    #include <premultiplied_alpha_fragment>\n\n}",n.exports});;
Cube("datav:/com/@datav-3d-v3/datav-3dplane-od-flyingline/3.1.3/src/shader/meshline_vert.glsl",[],function(e,n,t,i,r,o){return e.exports="#define GLSLIFY 1\n#include <common>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n#include <fog_pars_vertex>\n\nattribute vec3 previous;\nattribute vec3 next;\nattribute float side;\nattribute float len;\nattribute float lineLength;\nattribute float lineWidth;\nattribute vec4 lineColor;\nattribute vec4 lineHeadColor;\nattribute vec4 symbolColor;\nattribute vec4 lineParams;\nattribute vec3 symbolParams;\nattribute float outOfOrder;\n\nuniform vec2 resolution;\nuniform float near;\nuniform float far;\nuniform uint sizeAttenuation;\nuniform float dashOffset0;\nuniform float drawScale;\n\nout vec2 vUv;\n\nvarying vec4 v_lineColor;\nvarying vec2 v_normal;\nvarying float v_lineType;\nflat out float lineAspect;\n// flat out float v_symbolCount;\nvarying float v_blurWidthRatio;\n\nvarying vec4 v_lineHeadColor;\nvarying float v_lineHeadSpaceRatio;\nvarying float v_brightSegCount;\n// varying float v_lineTextureNum;\n\nvarying vec4 v_symbolColor;\nvarying vec3 v_symbolParams;\nvarying float v_outOfOrder;\n\n// out float v_len;\n// out float v_pixelWidth;\n\nvec2 fix(vec4 i, float aspect) {\n  vec2 res = i.xy / i.w;\n  res.x *= aspect;\n  return res;\n}\n\nvoid main() {\n  v_lineColor = lineColor;\n  v_lineHeadColor = lineHeadColor;\n  v_symbolColor = symbolColor;\n\n  v_lineType = lineParams.x * 100.0;\n  v_blurWidthRatio = lineParams.y;\n  v_lineHeadSpaceRatio = lineParams.z;\n\n  // v_lineTextureNum = lineParams.w * 100.0;\n\n  v_symbolParams = symbolParams;\n\n  float len_step = (110.0 - lineLength) / 100.0 * 0.5;\n\n  v_brightSegCount = len * len_step / drawScale * 0.000001;\n\n  vUv = uv;\n  v_outOfOrder = outOfOrder;\n\n  // vPick = pick;\n  // vUnPick = pick;\n  float aspect = resolution.x / resolution.y;\n  float pixelWidthRatio = 1. / (resolution.x * projectionMatrix[0][0]);\n  vec2 aspectVec = vec2(aspect, 1.0);\n\n  lineAspect = len / lineWidth / aspect;\n\n  mat4 mvp = projectionMatrix * modelViewMatrix;\n  // into clip space\n  vec4 currentProjected = mvp * vec4(position, 1.);\n  vec4 previousProjected = mvp * vec4(previous, 1.);\n  vec4 nextProjected = mvp * vec4(next, 1.);\n\n  // into NDC space [-1,1] and correct for aspect ratio(screenWidth/screenHeight)\n  vec2 currentScreen = currentProjected.xy / currentProjected.w * aspectVec;\n  vec2 previousScreen = previousProjected.xy / previousProjected.w * aspectVec;\n  vec2 nextScreen = nextProjected.xy / nextProjected.w * aspectVec;\n   \n  float pixelWidth = sizeAttenuation == 1u ? 1.0 : currentProjected.w * pixelWidthRatio;\n\n  float width = lineWidth;\n\n  #ifdef USE_MAP\n\n  #else\n    float dist = 1.0;\n    float localSegLen = mod(uv.x - dashOffset0, 1.0 / v_brightSegCount);\n    float localSegRatio = localSegLen * v_brightSegCount;\n    \n    float blurRange = 0.1; \n    float spaceRatio = v_lineHeadSpaceRatio + blurRange;\n    if (localSegRatio > spaceRatio) {\n      dist = (localSegRatio - spaceRatio) / (1.0 - spaceRatio);\n    } else if (localSegRatio > spaceRatio - blurRange) {\n      //对高亮线段的头部做模糊处理\n      dist = pow((spaceRatio - localSegRatio) / blurRange, 3.0 );\n    }\n    width = mix(lineWidth, lineWidth, saturate(dist));\n  #endif\n\n  width *= 1.8 * pixelWidth;\n\n  // into NDC space [-1,1] and correct for aspect ratio(screenWidth/screenHeight)\n  // vec2 currentP = fix(currentProjected, aspect);\n  // vec2 prevP = fix(previousProjected, aspect);\n  // vec2 nextP = fix(nextProjected, aspect);\n\n  vec2 dir = vec2(0.0);\n  if (nextScreen == currentScreen) //next == position\n    dir = normalize(currentScreen - previousScreen);\n  else if (previousScreen == currentScreen) //previous == position\n    dir = normalize(nextScreen - currentScreen);\n  else {\n    vec2 dir1 = normalize(currentScreen - previousScreen);\n    vec2 dir2 = normalize(nextScreen - currentScreen);\n    dir = normalize(dir1 + dir2);\n\n    // vec2 perp = vec2(-dir1.y, dir1.x);\n    // vec2 miter = vec2(-dir.y, dir.x);\n    // width = clamp( width / dot( miter, perp ), width, 1.5 * width);\n  }\n\n  v_normal = normalize( vec2(-dir.y / aspect, dir.x) * side); //for antialiase line\n\n  vec4 normalVec4 = vec4( -dir.y, dir.x, 0., 1. );\n  normalVec4.xy *= .5 * width;\n  normalVec4 *= projectionMatrix;\n  vec2 normal = normalVec4.xy;\n\n  vec4 offset = vec4(normal * side, 0., 0.);\n\n  gl_Position = currentProjected + offset;\n\n  vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\n  // v_symbolCount = len;\n\n  #include <logdepthbuf_vertex>\n  #include <clipping_planes_vertex>\n  #include <fog_vertex>\n\n}\n",e.exports});;
Cube("datav:/com/@datav-3d-v3/datav-3dplane-od-flyingline/3.1.3/src/meshLine",[],function(t,e,r,i,s,n){function a(e,t){var r,i=Object.keys(e);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(e),t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,r)),i}function o(i){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?a(Object(s),!0).forEach(function(t){var e,r;e=i,r=s[t=t],t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach(function(t){Object.defineProperty(i,t,Object.getOwnPropertyDescriptor(s,t))})}return i}function y(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){var r;if(t)return"string"==typeof t?u(t,e):"Map"===(r="Object"===(r=Object.prototype.toString.call(t).slice(8,-1))&&t.constructor?t.constructor.name:r)||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(t,e):void 0}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,i=new Array(e);r<e;r++)i[r]=t[r];return i}function l(t,e,r){t*=6,e*=6;return r[t]===r[e]&&r[1+t]===r[1+e]&&r[2+t]===r[2+e]}function h(t,e){t*=6;return[e[t],e[1+t],e[2+t]]}return t.exports=function(S){function t(){this.positions=[],this.previous=[],this.next=[],this.side=[],this.width=[],this.indices=[],this.uvs=[],this.counters=[],this.lens=[],this.lineLengths=[],this.lineWidths=[],this.lineColor=[],this.lineHeadColor=[],this.symbolColor=[],this.lineParams=[],this.symbolParams=[],this.outOfOrder=[],this.geometry=new S.BufferGeometry,this.widthCallback=null,this.matrixWorld=new S.Matrix4}var M,C,W;function n(t,e,r,i,s){var n;if(t=t.subarray||t.slice?t:t.buffer,r=r.subarray||r.slice?r:r.buffer,t=e?t.subarray?t.subarray(e,s&&e+s):t.slice(e,s&&e+s):t,r.set)r.set(t,i);else for(n=0;n<t.length;n++)r[n+i]=t[n]}return((t.prototype=Object.create(S.Mesh.prototype)).constructor=t).prototype.setMatrixWorld=function(t){this.matrixWorld=t},t.prototype.setGeometry=function(t,e,r){this.widthCallback=r,this.process(t,e)},t.prototype.raycast=(M=new S.Matrix4,C=new S.Ray,W=new S.Sphere,function(t,e){var r=t.linePrecision,i=r*r,r=this.geometry;if(null===r.boundingSphere&&r.computeBoundingSphere(),W.copy(r.boundingSphere),W.applyMatrix4(this.matrixWorld),!1!==t.ray.intersectSphere(W)){M.getInverse(this.matrixWorld),C.copy(t.ray).applyMatrix4(M);var s=new S.Vector3,n=new S.Vector3,a=new S.Vector3,o=new S.Vector3,u=this instanceof S.LineSegments?2:1;if(r instanceof S.BufferGeometry){var l=r.index,h=r.attributes;if(null!==l)for(var p=l.array,f=h.position.array,c=0,m=p.length-1;c<m;c+=u){var y=p[c],d=p[c+1];s.fromArray(f,3*y),n.fromArray(f,3*d),i<C.distanceSqToSegment(s,n,o,a)||(o.applyMatrix4(this.matrixWorld),(y=t.ray.origin.distanceTo(o))<t.near||y>t.far||e.push({distance:y,point:a.clone().applyMatrix4(this.matrixWorld),index:c,face:null,faceIndex:null,object:this}))}else for(var v,b=h.position.array,g=0,w=b.length/3-1;g<w;g+=u)s.fromArray(b,3*g),n.fromArray(b,3*g+3),i<C.distanceSqToSegment(s,n,o,a)||(o.applyMatrix4(this.matrixWorld),(v=t.ray.origin.distanceTo(o))<t.near||v>t.far||e.push({distance:v,point:a.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this}))}else if(r instanceof S.Geometry)for(var A,x=r.vertices,O=x.length,P=0;P<O-1;P+=u)i<C.distanceSqToSegment(x[P],x[P+1],o,a)||(o.applyMatrix4(this.matrixWorld),(A=t.ray.origin.distanceTo(o))<t.near||A>t.far||e.push({distance:A,point:a.clone().applyMatrix4(this.matrixWorld),index:P,face:null,faceIndex:null,object:this}))}}),t.prototype.createGeometry=function(){var t=new S.BufferAttribute(new Float32Array(this.positions),3),e=new S.BufferAttribute(new Float32Array(this.previous),3),r=new S.BufferAttribute(new Float32Array(this.next),3),i=new S.BufferAttribute(new Float32Array(this.side),1),s=new S.BufferAttribute(new Float32Array(this.uvs),2),n=new S.BufferAttribute(new Uint32Array(this.indices),1),a=new S.BufferAttribute(new Float32Array(this.counters),1),o=new S.BufferAttribute(new Float32Array(this.lens),1),u=new S.BufferAttribute(new Float32Array(this.lineLengths),1),l=new S.BufferAttribute(new Float32Array(this.lineWidths),1),h=new S.BufferAttribute(new Float32Array(this.lineColor),4),p=new S.BufferAttribute(new Float32Array(this.lineHeadColor),4),f=new S.BufferAttribute(new Float32Array(this.symbolColor),4),c=new S.BufferAttribute(new Float32Array(this.lineParams),4),m=new S.BufferAttribute(new Float32Array(this.symbolParams),3),y=new S.BufferAttribute(new Float32Array(this.outOfOrder),1);this.geometry.setAttribute("position",t),this.geometry.setAttribute("previous",e),this.geometry.setAttribute("next",r),this.geometry.setAttribute("side",i),this.geometry.setAttribute("uv",s),this.geometry.setAttribute("counters",a),this.geometry.setAttribute("len",o),this.geometry.setAttribute("lineLength",u),this.geometry.setAttribute("lineWidth",l),this.geometry.setAttribute("lineColor",h),this.geometry.setAttribute("lineHeadColor",p),this.geometry.setAttribute("symbolColor",f),this.geometry.setAttribute("lineParams",c),this.geometry.setAttribute("symbolParams",m),this.geometry.setAttribute("outOfOrder",y),this.geometry.setIndex(n)},t.prototype.clear=function(){this.positions.length=0,this.previous.length=0,this.next.length=0,this.side.length=0,this.width.length=0,this.indices.length=0,this.uvs.length=0,this.counters.length=0,this.lens.length=0,this.lineLengths.length=0,this.lineWidths.length=0,this.lineColor.length=0,this.lineHeadColor.length=0,this.symbolColor.length=0,this.lineParams.length=0,this.symbolParams.length=0,this.outOfOrder.length=0},t.prototype._processPosition=function(t){for(var e,r,i=0,s=t.length/6;i<s;i++)this.counters.push(r=i/(s-1)),this.counters.push(r);(e=this.positions).push.apply(e,y(t));var n=t.length/6,a=l(0,n-1,t)?h(n-2,t):h(0,t);this.previous.push(a[0],a[1],a[2]),this.previous.push(a[0],a[1],a[2]);for(var o=0;o<n-1;o++)a=h(o,t),this.previous.push(a[0],a[1],a[2]),this.previous.push(a[0],a[1],a[2]);for(var u=1;u<n;u++)a=h(u,t),this.next.push(a[0],a[1],a[2]),this.next.push(a[0],a[1],a[2]);a=l(n-1,0,t)?h(1,t):h(n-1,t),this.next.push(a[0],a[1],a[2]),this.next.push(a[0],a[1],a[2])},t.prototype._processIndex=function(t){for(var e=this.positions.length/3,r=t.length/6,i=0;i<r-1;i++){var s=2*i+e;this.indices.push(s,1+s,2+s),this.indices.push(2+s,1+s,3+s)}},t.prototype._processUV=function(t,e){if(2<arguments.length&&void 0!==arguments[2]&&arguments[2]){this.uvs.push(0,0),this.uvs.push(0,1);for(var r,i,s=0,n=6,a=t.length;n<a;n+=6)r=[t[n-6],t[n-6+1],t[n-6+2]],i=[t[n],t[n+1],t[n+2]],s+=Math.sqrt(Math.pow(i[0]-r[0],2)+Math.pow(i[1]-r[1],2)+Math.pow(i[2]-r[2],2)),this.uvs.push(i=s/e,0),this.uvs.push(i,1)}else for(var o=t.length/6,u=0;u<o;u++)this.uvs.push(u/(o-1),0),this.uvs.push(u/(o-1),1)},t.prototype._processSide=function(t){for(var e=t.length/6,r=0;r<e;r++)this.side.push(1),this.side.push(-1)},t.prototype.process=function(t,e){for(var r,i=e.curveLen,s=e.isGeoUv,n=e.lineColor,a=e.lineHeadColor,o=e.symbolColor,u=e.lineLength,l=e.lineWidth,h=e.lineParams,p=e.symbolParams,e=e.isOutOfOrder,f=1,c=((void 0===e||e)&&(f=.7+.6*Math.random()),this._processIndex(t),this._processSide(t),this._processUV(t,i,s),this._processPosition(t),t.length/6),m=0;m<c;m++)this.lens.push(i),this.lens.push(i),this.lineLengths.push(u),this.lineLengths.push(u),this.lineWidths.push(l),this.lineWidths.push(l),(r=this.lineColor).push.apply(r,y(n)),(r=this.lineColor).push.apply(r,y(n)),(r=this.lineHeadColor).push.apply(r,y(a)),(r=this.lineHeadColor).push.apply(r,y(a)),(r=this.symbolColor).push.apply(r,y(o)),(r=this.symbolColor).push.apply(r,y(o)),this.lineParams.push(h.lineType),this.lineParams.push(h.blurWidthRatio),this.lineParams.push(h.lineHeadSpaceRatio),this.lineParams.push(h.lineTextureNum),this.lineParams.push(h.lineType),this.lineParams.push(h.blurWidthRatio),this.lineParams.push(h.lineHeadSpaceRatio),this.lineParams.push(h.lineTextureNum),this.symbolParams.push(p.symbolType),this.symbolParams.push(p.symbolNum),this.symbolParams.push(p.symbolAspect),this.symbolParams.push(p.symbolType),this.symbolParams.push(p.symbolNum),this.symbolParams.push(p.symbolAspect),this.outOfOrder.push(f),this.outOfOrder.push(f)},t.prototype.advance=function(t){var e=this.attributes.position.array,r=this.attributes.previous.array,i=this.attributes.next.array,s=e.length;n(e,0,r,0,s),n(e,6,e,0,s-6),e[s-6]=t.x,e[s-5]=t.y,e[s-4]=t.z,e[s-3]=t.x,e[s-2]=t.y,e[s-1]=t.z,n(e,6,i,0,s-6),i[s-6]=t.x,i[s-5]=t.y,i[s-4]=t.z,i[s-3]=t.x,i[s-2]=t.y,i[s-1]=t.z,this.attributes.position.needsUpdate=!0,this.attributes.previous.needsUpdate=!0,this.attributes.next.needsUpdate=!0},{MeshLine:t,MeshLineMaterial:function(t){var e=new S.ShaderMaterial({depthWrite:!0,depthTest:!0,transparent:!0});return e.type="MeshLineMaterial",e.uniforms=o({drawScale:{value:1},opacity:{value:1},map:{value:null},map1:{value:null},alphaMap:{value:null},resolution:{value:new S.Vector2(1,1)},sizeAttenuation:{value:1},near:{value:1},far:{value:1},visibility:{value:1},dashOffset0:{value:0},dashOffset1:{value:0},useDash:{value:0},alphaTest:{value:0},repeat:{value:new S.Vector2(1,1)},uvScale0:{value:new S.Vector2(1,1)}},S.UniformsLib.fog),e.vertexShader=r("datav:/com/@datav-3d-v3/datav-3dplane-od-flyingline/3.1.3/src/shader/meshline_vert.glsl"),e.fragmentShader=r("datav:/com/@datav-3d-v3/datav-3dplane-od-flyingline/3.1.3/src/shader/meshline_frag.glsl"),Object.defineProperties(e,{drawScale:{enumerable:!0,get:function(){return this.uniforms.drawScale.value},set:function(t){this.uniforms.drawScale.value=t}},map:{enumerable:!0,get:function(){return this.uniforms.map.value},set:function(t){this.uniforms.map.value=t}},map1:{enumerable:!0,get:function(){return this.uniforms.map1.value},set:function(t){this.uniforms.map1.value=t}},alphaMap:{enumerable:!0,get:function(){return this.uniforms.alphaMap.value},set:function(t){this.uniforms.alphaMap.value=t}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(t){this.uniforms.opacity.value=t}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(t){this.uniforms.resolution.value=t}},sizeAttenuation:{enumerable:!0,get:function(){return this.uniforms.sizeAttenuation.value},set:function(t){this.uniforms.sizeAttenuation.value=t}},near:{enumerable:!0,get:function(){return this.uniforms.near.value},set:function(t){this.uniforms.near.value=t}},far:{enumerable:!0,get:function(){return this.uniforms.far.value},set:function(t){this.uniforms.far.value=t}},visibility:{enumerable:!0,get:function(){return this.uniforms.visibility.value},set:function(t){this.uniforms.visibility.value=t}},dashOffset0:{enumerable:!0,get:function(){return this.uniforms.dashOffset0.value},set:function(t){this.uniforms.dashOffset0.value=t}},dashOffset1:{enumerable:!0,get:function(){return this.uniforms.dashOffset1.value},set:function(t){this.uniforms.dashOffset1.value=t}},useDash:{enumerable:!0,get:function(){return this.uniforms.useDash.value},set:function(t){this.uniforms.useDash.value=t}},alphaTest:{enumerable:!0,get:function(){return this.uniforms.alphaTest.value},set:function(t){this.uniforms.alphaTest.value=t}},repeat:{enumerable:!0,get:function(){return this.uniforms.repeat.value},set:function(t){this.uniforms.repeat.value=t}},uvScale0:{enumerable:!0,get:function(){return this.uniforms.uvScale0.value},set:function(t){this.uniforms.uvScale0.value=t}}}),e.setValues(t),e}}},t.exports});;
Cube("datav:/com/@datav-3d-v3/datav-3dplane-od-flyingline/3.1.3/config/lineStyle",[],function(e,t,c,p,n,a){return e.exports={"线型1":[{percent:0,opacity:1},{percent:1,opacity:1}],"线型2":[{percent:0,opacity:0},{percent:1,opacity:1}],"线型3":[{percent:0,opacity:.1},{percent:.25,opacity:1},{percent:.5,opacity:1},{percent:1,opacity:0}],"线型4":[{percent:0,opacity:.25},{percent:.1,opacity:1},{percent:.2,opacity:.25},{percent:.3,opacity:1},{percent:.4,opacity:.25},{percent:.5,opacity:1},{percent:.6,opacity:.25},{percent:.7,opacity:1},{percent:.8,opacity:.25},{percent:.9,opacity:1},{percent:1,opacity:.25}],"线型5":[{percent:0,opacity:1},{percent:.05,opacity:1},{percent:.05,opacity:0},{percent:.1,opacity:0},{percent:.1,opacity:1},{percent:.15,opacity:1},{percent:.15,opacity:0},{percent:.2,opacity:0},{percent:.2,opacity:1},{percent:.25,opacity:1},{percent:.25,opacity:0},{percent:.3,opacity:0},{percent:.3,opacity:1},{percent:.35,opacity:1},{percent:.35,opacity:0},{percent:.4,opacity:0},{percent:.4,opacity:1},{percent:.45,opacity:1},{percent:.45,opacity:0},{percent:.5,opacity:0},{percent:.5,opacity:1},{percent:.55,opacity:1},{percent:.55,opacity:0},{percent:.6,opacity:0},{percent:.6,opacity:1},{percent:.65,opacity:1},{percent:.65,opacity:0},{percent:.7,opacity:0},{percent:.7,opacity:1},{percent:.75,opacity:1},{percent:.75,opacity:0},{percent:.8,opacity:0},{percent:.8,opacity:1},{percent:.85,opacity:1},{percent:.85,opacity:0},{percent:.9,opacity:0},{percent:.9,opacity:1},{percent:.95,opacity:1},{percent:.95,opacity:0},{percent:1,opacity:0}]},e.exports});;
Cube("datav:/com/@datav-3d-v3/datav-3dplane-od-flyingline/3.1.3/src/odFlyinglineLayer",[],function(e,t,y,i,o,r){function f(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function m(){return(m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,i){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}(e,t);if(o)return(o=Object.getOwnPropertyDescriptor(o,t)).get?o.get.call(arguments.length<3?e:i):o.value}).apply(this,arguments)}function b(e,t){return(b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function g(i){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=w(i),t=(e=o?(e=w(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),this);if(e&&("object"===S(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return v(t)}}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}return e.exports=function(z){var V=z.THREE,e=z.Utils,o=z.GuiUtils,i=z.VOGO,c=e._,r=e.mergeOptions,t=e.FormatTransformer,n=e.BASE_HEIGHT_SCALE,G=e.Chroma,u=((new i.Coordinates).crs=i.EPSG3857,y("datav:/com/@datav-3d-v3/datav-3dplane-od-flyingline/3.1.3/config/lineStyle")),e=y("datav:/com/@datav-3d-v3/datav-3dplane-od-flyingline/3.1.3/src/meshLine")(V),a=e.MeshLine,p=e.MeshLineMaterial,l=new t;e=z.Layer,t=d;if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&b(t,e);var s,h=g(d);function d(e){var t;if(this instanceof d)return(t=h.call(this)).options=r(t.options,{visible:!0}),t.options=r(t.options,e||{}),t.classNameAlias="OdFlylineLayer",t.layerName=t.classNameAlias,t.renderQueue=i.Transparent,t.needsAutoUpdate=!0,t.symbolIndex=1,t.symbolImages={},t.setSymbolTexture=t.setSymbolTexture.bind(v(t)),t.process=t.process.bind(v(t)),t.getLineType=t.getLineType.bind(v(t)),t.meshLine=new a,t.material=null,t;throw new TypeError("Cannot call a class as a function")}return t=d,(e=[{key:"render",value:function(e){this.data=[],this.clear();var t=e;if(!t)return console.error("No data for OD flyline.");if(!Array.isArray(t)){if("FeatureCollection"!==t.type)return console.error("OD flyline: invalid data format. ",t);t=l.geojson2datav(t)}if(!t.length)return console.error("OD flyline: the length of data is 0.",t);this.data=[];for(var i=0;i<t.length;i++)t[i].data_index=i+1;t&&0<t.length&&(this.data=t),this.setMaterial()}},{key:"process",value:function(y){for(var f,m,b,g,v=this,w=(this.meshLine.clear(),this.options.graph),S=w.sizeAttenuation,e=w.lineStyle,O=e.lineShape,C=e.lineLength,R=e.lineWidth,k=e.arcRatio,T=e.blurWidthRatio,e=w.lineHeadStyle,x=e.lineHeadColor,L=e.lineHeadSpaceRatio,e=w.symbolStyle,P=e.symbolColor,H=e.symbolUrl,e=this.options.animation.outOfOrder,M=void 0!==e&&e,e=z.baseHeightScale,W=z.drawScale,U=z.bboxSize,j=(this.group.position.z=(e+.05)*W*n,o.validateCustomStyle),I=c.get(this.options,"condition.condition"),A="rules",E=c.get(o,"scale.color")({config:c.get(this.options,"graph.lineStyle.colorMapping"),data:y,field:"colorField"}),_=0;_<y.length;_++)!function(){m=y[_],g=j({config:I,data:m,ruleKey:A}),b=g&&g[0]?g[0]:null;var e={};for(f=g.length-1;0<=f&&(b=g[f]).graph.show;f--){var t=b.graph.lineStyle;if(t.show){e.lineType=v.getLineType(t.lineShape),e.arcRatio=t.arcRatio,e.lineColor=t.lineColor,e.lineLength=t.lineLength,e.lineWidth=S?2e4*t.lineWidth*W:t.lineWidth,e.blurWidthRatio=t.blurWidthRatio;break}break}for(f=g.length-1;0<=f&&(b=g[f]).graph.show;f--){var i=b.graph.lineHeadStyle;if(i.show){e.lineHeadColor=i.lineHeadColor,e.lineHeadSpaceRatio=.01*i.lineHeadSpaceRatio;break}}for(f=g.length-1;0<=f&&(b=g[f]).graph.show;f--){var o=b.graph.symbolStyle;if(o.show){e.symbolColor=o.symbolColor,e.symbolUrl=o.symbolUrl;break}}e.hasOwnProperty("lineType")||(e.lineType=v.getLineType(O)),e.hasOwnProperty("arcRatio")||(e.arcRatio=k),e.hasOwnProperty("lineColor")||(e.lineColor=E(m.colorField)),e.hasOwnProperty("lineLength")||(e.lineLength=C),e.hasOwnProperty("lineWidth")||(e.lineWidth=S?2e4*R*W:R),e.hasOwnProperty("blurWidthRatio")||(e.blurWidthRatio=T),e.hasOwnProperty("lineHeadSpaceRatio")||(e.lineHeadSpaceRatio=.01*L),e.hasOwnProperty("lineHeadColor")||(w.lineHeadStyle.show?e.lineHeadColor=x:e.lineHeadColor="rgba(255,0,0,0)"),e.hasOwnProperty("symbolUrl")||(e.symbolUrl=H),e.hasOwnProperty("symbolColor")||(w.symbolStyle.show?e.symbolColor=P:e.symbolColor="rgba(255,0,0,0)");var r,n=m.geometry.coordinates,a=[n[0][0],n[0][1],0],n=[n[1][0],n[1][1],0],a=z.proj.proj(a),n=z.proj.proj(n),l=Math.sqrt(Math.pow(a[0]-n[0],2)+Math.pow(a[1]-n[1],2)),s=(l*=e.arcRatio,new V.Vector3(a[0],a[1],a[2])),l=new V.Vector3((a[0]+n[0])/2,(a[1]+n[1])/2,Math.abs(l)),h=new V.Vector3(n[0],n[1],n[2]),s=new V.QuadraticBezierCurve3(s,l,h),c=[],l=Math.max(Math.abs(n[0]-a[0]),Math.abs(n[1]-a[1])),h=10,n=(U&&(h=Math.floor(l/U*150+10)),s.getPoints(h).forEach(function(e){c.push(e.x,e.y,e.z,e.x,e.y,e.z)}),s.getLength()),u=1,p=1;for(r in v.symbolImages){var d=v.symbolImages[r];if(e.symbolUrl==r){u=d.symbolType,p=d.symbolAspect;break}}v.meshLine.setGeometry(c,{curveLen:n,isGeoUv:!1,lineColor:G(e.lineColor).gl(),lineHeadColor:G(e.lineHeadColor).gl(),symbolColor:G(e.symbolColor).gl(),lineLength:Math.floor(e.lineLength),lineWidth:Math.floor(e.lineWidth),lineParams:{lineType:.01*e.lineType,blurWidthRatio:e.blurWidthRatio,lineHeadSpaceRatio:e.lineHeadSpaceRatio,lineTextureNum:.05},symbolParams:{symbolType:.01*u,symbolNum:.01*(v.symbolIndex-1),symbolAspect:.01*p},isOutOfOrder:M})}();this.meshLine.createGeometry();var t,i,e=this.meshLine.geometry;this.linksMesh?this.linksMesh.geometry=e:(t=z.engine.renderer,i=new V.Vector2,t.getDrawingBufferSize(i),this.material.uniforms.resolution.value=i,this.material.uniforms.near.value=0,this.material.uniforms.far.value=1e8,this.material.needsUpdate=!0,this.linksMesh=new V.Mesh(e,this.material),this.add(this.linksMesh),this.linksMesh.renderOrder=6)}},{key:"getLineType",value:function(e){var t=1;switch(e){case"线型1":t=1;break;case"线型2":t=2;break;case"线型3":t=3;break;case"线型4":t=4;break;case"线型5":t=5}return t}},{key:"setMaterial",value:function(){var e=this.options,t=e.general,e=e.graph,t=t.blending,i=e.sizeAttenuation,e=e.symbolStyle,o=this.getLineTexture(),r=(this.material?(this.material.uniforms.drawScale.value=z.drawScale,this.material.uniforms.sizeAttenuation.value=i?1:0,this.material.uniforms.map.value=o,this.material.uniforms.uvScale0.value=new V.Vector2(1,1),this.material.depthTest=!0,this.material.blending=V[t],this.material.needsUpdate=!0):this.material=p({resolution:new V.Vector2,sizeAttenuation:i?1:0,side:V.DoubleSide,blending:V[t],visibility:1,dashOffset0:0,dashOffset1:0,drawScale:z.drawScale,map:o,map1:null,uvScale0:new V.Vector2(1,1),transparent:!0,depthWrite:!1,depthTest:!0}),c.get(this.options,"condition.condition")),n=[];for(e.symbolUrl&&n.push(e.symbolUrl),h=r.length-1;0<=h;h--)if((a=r[h]).graph.show){var a=a.graph.symbolStyle;a.show&&a.symbolUrl&&n.push(a.symbolUrl);break}for(var l,n=function(e){for(var t,i,o={},r=[],n=e.length,a=0;a<n;a++)i=S(t=e[a]),o[t]?o[t].indexOf(i)<0&&(o[t].push(i),r.push(t)):(o[t]=[i],r.push(t));return r}(n),s=!1,h=0;h<n.length;h++)if(!this.symbolImages[n[h]]){s=!0;break}s?(l=this).setSymbolTexture(n).then(function(){l.process(l.data),l.emit("rendered")}):(this.process(this.data),this.emit("rendered"))}},{key:"autoUpdate",value:function(){var e,t;this.options&&this.material&&(e=(t=this.options.animation).dashSpeed0,t=t.dashSpeed1,this.material.uniforms.dashOffset0.value+=.001*e,e==t?this.material.uniforms.dashOffset1.value=this.material.uniforms.dashOffset0.value:this.material.uniforms.dashOffset1.value+=.001*t)}},{key:"checkVisible",value:function(){this.options.visible?this.show():this.hide()}},{key:"hide",value:function(){this.options.visible=!1,m(w(d.prototype),"hide",this).call(this)}},{key:"show",value:function(){this.options.visible=!0,m(w(d.prototype),"show",this).call(this)}},{key:"updateOptions",value:function(e){this.options=r(this.options,e||{}),this.setMaterial(),this.checkVisible()}},{key:"updateBaseHeight",value:function(){var e=z.baseHeightScale,t=z.drawScale;this.group.position.z=~~(t*e*n)}},{key:"clear",value:function(){m(w(d.prototype),"clear",this).call(this),this.meshLine&&this.meshLine.clear(),this.linksMesh=null}},{key:"destroy",value:function(){m(w(d.prototype),"clear",this).call(this),this.needsAutoUpdate=!1,this.data&&(this.data.length=0)}},{key:"getLineTexture",value:function(){var e,t,i=document.createElement("canvas"),o=(i.width=100,i.height=100,i.style.width="100px",i.style.height="100px",i.getContext("2d")),r=20;for(e in u){for(var n,a=u[e],l={r:255,g:255,b:255,a:1},s=o.createLinearGradient(0,0,100,0),h=0;h<a.length;h++)n=a[h],s.addColorStop(n.percent,(t=n.percent,n=n.opacity,"rgba("+~~((l.r-l.r)*t+l.r)+","+~~((l.g-l.g)*t+l.g)+","+~~((l.b-l.b)*t+l.b)+","+n*l.a+")"));o.fillStyle=s,o.fillRect(0,100-r,100,20),r+=20}i=new V.CanvasTexture(i);return i.wrapS=V.RepeatWrapping,i.wrapT=V.RepeatWrapping,i}},{key:"setSymbolTexture",value:function(t){for(var i,l=this,o=[],e=t.length,r=0;r<e;r++)!function(e){var r=t[e];i=new Promise(function(i,e){var o;l.symbolImages[r]?i(!0):((o=new Image).crossOrigin="anonymous",o.onload=function(){var e=document.createElement("canvas"),t=e.getContext("2d");e.width=o.width,e.height=o.height,t.imageSmoothingQuality="high",t.drawImage(o,0,0,o.width,o.height),l.symbolImages[r]={symbolType:l.symbolIndex,image:o,symbolAspect:o.width/o.height},l.symbolIndex++,i(!0)},o.onerror=function(){console.log("Could not load image at "+r),e(!1)},o.src=r)}),o.push(i)}(r);return Promise.all(o).then(function(e){if(l.material){var t,i=50*(l.symbolIndex-1),o=document.createElement("canvas"),r=(o.width=50,o.height=i,o.style.width="50px",o.style.height=i+"px",o.getContext("2d")),n=50;for(t in l.symbolImages){var a=l.symbolImages[t];r.drawImage(a.image,0,i-n,50,50),n+=50}o=new V.CanvasTexture(o);return o.wrapS=V.RepeatWrapping,o.wrapT=V.RepeatWrapping,l.material.map1=o,l.material.needsUpdate=!0}}).catch(function(e){return!1})}}])&&f(t.prototype,e),s&&f(t,s),Object.defineProperty(t,"prototype",{writable:!1}),d},e.exports});;
Cube("datav:/com/@datav-3d-v3/datav-3dplane-od-flyingline/3.1.3",["datav:/npm/eventemitter3/3.0.0","datav:/npm/safely-merge/1.0.1"],function(e,t,r,n,o,i){function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t){return(l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function u(r){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=y(r),t=(e=n?(e=y(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),this);if(e&&("object"===a(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var c=r("datav:/npm/eventemitter3/3.0.0"),f=r("datav:/npm/safely-merge/1.0.1"),p=r("datav:/com/@datav-3d-v3/datav-3dplane-od-flyingline/3.1.3/src/odFlyinglineLayer"),r=function(){var e=o,t=c;if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t);var r,n=u(o);function o(e,t){var r;if(this instanceof o)return(r=n.call(this)).options=f({},t.options||{}),r.layerId="",r.visible=!0,r;throw new TypeError("Cannot call a class as a function")}return e=o,(t=[{key:"addTo",value:function(e,t){this.viewer=e,this.layerId=t;t=p(e);this.layer=new t(this.options),e.addLayer(this.layerId+"_layer",this.layer),this.visible?this.layer.show():this.layer.hide()}},{key:"render",value:function(e){this.data=e,this.layer&&this.layer.render&&this.layer.render(e)}},{key:"updateArea",value:function(){this.render(this.data)}},{key:"updateOptions",value:function(e){this.options=f(this.options,e.options),this.layer&&this.layer.updateOptions&&this.layer.updateOptions(this.options)}},{key:"updateBaseHeight",value:function(){this.layer&&this.layer.updateBaseHeight&&this.layer.updateBaseHeight()}},{key:"show",value:function(){this.layer&&this.layer.show&&this.layer.show()}},{key:"hide",value:function(){this.layer&&this.layer.hide&&this.layer.hide()}},{key:"destroy",value:function(){this.layer&&this.layer.destroy&&this.layer.destroy()}}])&&s(e.prototype,t),r&&s(e,r),Object.defineProperty(e,"prototype",{writable:!1}),o}();return e.exports=r,e.exports});