Cube('datav:/com/map2d-layer-image/0.0.7',['datav:/npm/bcore/0.0.21/event','datav:/npm/bcore/0.0.21/utils','datav:/npm/ldmap/0.1.39','datav:/npm/ldmap/0.1.39/layer/image'],function(f,k,b,i,j,h){function a(){var b=arguments[arguments.length-1];this.options=c.deepMergeWithoutArray(a.options,b)}var g=b('datav:/npm/bcore/0.0.21/event'),c=b('datav:/npm/bcore/0.0.21/utils'),d=b('datav:/npm/ldmap/0.1.39'),e=b('datav:/npm/ldmap/0.1.39/layer/image');return a.options={},a=g.extend(a,{addTo:function(a){a._map&&(a=a._map),this._map=a,this._updateCRS(),this.initCom()},_updateCRS:function(){var c=this.options,e=c.CRSType,a=this._map,b;switch(e){case'EPSG3857':b='EPSG3857';break;case'Simple':b='Simple';break}a.options.crs=d.CRS[b],a.setView(a.getCenter(),a.getZoom())},_defaultCRS:function(){var a=this._map;a.options.crs=d.CRS.EPSG3857},getOptions:function(){var a=this.options,b=a.CRSType;this._updateCRS(),a.bbox||(a.bbox={});switch(b){case'EPSG3857':a.bbox=a.options3857;break;case'Simple':a.bbox=a.optionsSimple;break}return a},initCom:function(){var a=this.getOptions(this.options),b=this.layer=new e(a);b.addTo(this._map)},updateOptions:function(a){a=this.options=c.deepMergeWithoutArray(this.options,a),this.layer.updateOptions(this.getOptions())},remove:function(){this._defaultCRS(),this.layer.remove&&this.layer.remove()},render:function(a){a&&a[0]&&a[0].url&&(this.options.bgImageUrl=a[0].url),this.updateOptions()}}),f.exports=a,f.exports})