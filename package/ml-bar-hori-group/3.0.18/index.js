// env=undefined => env=publish 
Cube("datav:/com/ml-bar-hori-group/3.0.18/bar",["datav:/com/maliang-utils/0.0.21","datav:/npm/bcore/0.0.22/event","datav:/npm/dchart-bar-hori-with-cute-axis/0.2.22","datav:/npm/jquery/2.1.4","datav:/npm/d3/3.5.12","datav:/npm/lodash/4.17.11","datav:/npm/lodash/4.17.11/cloneDeep"],function(a,b,c){function d(a){return p.isNumber(a)&&!p.isNaN(a)&&p.isFinite(a)?a:null}function e(a){if(a&&a.others&&a.others.animation){var b=a.others.animation,c={},d=b.enter,e=b.update,f=b.setting;return Object.assign(c,k({},d)),Object.assign(c,k({},e)),Object.assign(c,k({},f)),c.animation=b.show,c}return{}}function f(a){if(!a)return{};var b=q(a),c=a.trigger,d=a.axisPointer,e=a.textStyle,f=a.bgBox;if(c&&c.action&&(b.triggerMethod=c.action),c&&c.type&&(b.trigger=c.type),a.beforeFormat&&(b.beforeFormat=a.beforeFormat),b.formatter="horiBarChart",void 0!==a.enterFocus&&(b.enterFocus=a.enterFocus),void 0!==a.hideDelay&&(b.hideDelay=a.hideDelay),d&&d._type&&(b.axisPointer=d._type),d&&d.lineStyle&&(b.lineStyle=d.lineStyle),e&&(b.color=e.color,b.fontSize=e.fontSize+"px",b.fontFamily=e.fontFamily,b.fontWeight=e.fontWeight),f){var g=f.offset,h=f.border,i=f.customSize;b.backgroundColor=f.backgroundColor,g&&void 0!==g.xOffset&&(b.xOffset=g.xOffset),g&&void 0!==g.yOffset&&(b.yOffset=g.yOffset),i&&(b.autoSize=!i.show,b.width=i.width,b.height=i.height),h&&(h.borderColor&&(b.borderColor=h.borderColor),void 0!==h.borderWidth&&(b.borderWidth=h.borderWidth))}return b}function g(a){var b=a.chart.numericalLabel,c=k({},b.textStyle,{emptyData:b.emptyData,pos:b.pos,show:b.show,dx:"right-outer"===b.pos?"0.15em":0});return c}function h(a,b,c){var d=p.clone(a),e={};e.show=d.isShow,e.padding=[d.interval,d.boundaryGap];var f=d.label.textarea;e.fontSize=f.fontSize||null,e.fontColor=f.color,e.fontStrokeWidth=f.fontStrokeWidth,e.fontWeight=f.fontWeight,e.textShow=d.label.show,e.assistLine=d.axisLine.show,e.assistLineColor=d.axisLine.color,e.net=d.grid.show,e.netColor=d.grid.color;var g=c.chart.bar.decorate;e.decorateLine=g.line.color,e.decorateShapeFill=g.shape.fill,e.decorateShapeStroke=g.shape.stroke;var h=d.label.display;return e.ticks=h.amount&&parseInt(h.amount)?parseInt(h.amount):b.length||null,e.rotate=p.toNumber(h.angle),e.label=e.textShow&&h.unit||null,e.dy=0===e.rotate?10:5,e}function i(a,b){var c=p.clone(a),e={};e.show=c.isShow;var f=c.extent;if(null===d(p.toNumber(f.max))?"dataMax"===f.max?(e.maxAmount="dataMax",e.maxNeedNice=!1):(e.max=null,e.maxAmount=null,e.maxNeedNice=!0):(e.maxAmount=f.max,e.max=f.max,e.maxNeedNice=!1),null===d(p.toNumber(f.min))?"dataMin"===f.min?(e.minAmount="dataMin",e.min="auto",e.minNeedNice=!1):(e.minAmount=null,e.min=null,e.minNeedNice=!0):(e.minAmount=f.min,e.min=f.min,e.minNeedNice=!1),c.label.format&&c.label.format.includes("%")){switch(c.label.format){case"%":e.tickFormat=".0f";break;case".1%":e.tickFormat=".2f";break;case".2%":default:e.tickFormat=".4f";}var g=o.format(c.label.format);e.format=c.label.format,b.label.format=function(a){return g(a.y&&a.y.value)}}else e.format=null,e.tickFormat=c.label.format||function(a){return a};var h=c.label.textarea;e.fontSize=h.fontSize||null,e.fontColor=h.color,e.fontStrokeWidth=h.fontStrokeWidth,e.fontWeight=h.fontWeight,e.fontFamily=h.fontFamily,e.textShow=c.label.show,e.assistLine=c.axisLine.show,e.assistLineColor=c.axisLine.color;var i=c.label.display;return e.ticks=i.amount||null,e.rotate=p.toNumber(i.angle),e.label=e.textShow&&i.unit||null,e.net=c.grid.show,e.netColor=c.grid.color,e}function j(a,b){var c=p.cloneDeep(a.chart);c.label=g(a);var d=a.axis.xaxis,j=a.axis.yaxis;c.yaxis=h(j,b,a),c.xaxis=i(d,c),c.series=p.clone(a.series.series),c.background={show:!0,color:a.chart.bar.bgColor};var k=a.chart.margin,l=k.right,m=k.top;switch(c.margin.top=m?m:c.yaxis&&c.yaxis.label&&""!==c.yaxis.label&&3*c.yaxis.fontSize||0,c.margin.right=l?l:c.xaxis&&c.xaxis.label&&""!==c.xaxis.label&&2*(c.xaxis.label.length*c.xaxis.fontSize)||0,c.label.pos){case"center":c.label.dx="0",c.label.dy=".4em";break;case"right":c.label.dx=".5em",c.label.dy="0.26em";break;case"left":c.label.dx="0.5em",c.label.dy="0.26em";break;default:}return Object.assign(c,e(a)),a.others.tooltip&&(c.tooltip=f(a.others.tooltip,b)),c}var k=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},l=c("datav:/npm/bcore/0.0.22/event"),m=c("datav:/npm/dchart-bar-hori-with-cute-axis/0.2.22"),n=c("datav:/npm/jquery/2.1.4"),o=c("datav:/npm/d3/3.5.12"),p=c("datav:/npm/lodash/4.17.11"),q=c("datav:/npm/lodash/4.17.11/cloneDeep"),r=c("datav:/com/maliang-utils/0.0.21"),s=Symbol();return a.exports=l.extend(function(a,b){this.config={theme:{},chart:{background:"transparent",margin:{top:6,bottom:10,left:70,right:70,containLabel:!0}},axis:{xaxis:{tickSize:2},yaxis:{tickSize:2}},legend:{},series:[{value:"1",color:"#2F8FBE"}],tooltip:{show:!0,trigger:"item",triggerMethod:"hover",beforeFormat:null,formatter:"xyAxisChart",enterFocus:!0,axisPointer:{show:!0,_type:"line",lineStyle:{color:"#f00",width:1,_type:"solid"}},hideDelay:300,textStyle:{color:"#fff",fontSize:14,fontFamily:"Microsoft Yahei",fontWeight:"normal"},bgBox:{color:"rgba(0, 0, 0, 0.65)",padding:10,xOffset:6,yOffset:10,customSize:{show:!1,width:300,height:150},borderColor:"#333",borderWidth:0}}},this.container=n(a),this.init(b)},{init:function(a){this.apis=a.apis;var b=this.mergeConfig(a);this.chart=new m(this.container[0],b.chart)},isSafeNumber:function(a){return p.isNumber(a)&&!p.isNaN(a)&&p.isFinite(a)?a:null},render:function(a,b){var c=this.mergeConfig(b);a=this.data(a,c),a&&a.length&&(a&&this.chart.render(a,j(c,a)),this.updateStyle())},updateStyle:function(){var a=this.chart.el;if(a){a.selectAll(".serie-bg").style("stroke","none"),a.select(".con-svg").style("background","transparent"),a.selectAll(".serie-single .serie").style("stroke","none"),a.selectAll(".serie rect").attr("order",function(){return o.select(this).attr("series-index")});var b=this.config;switch(b.chart.numericalLabel.pos){case"center":a.selectAll(".serie-label").style("text-anchor","middle");break;default:a.selectAll(".serie-label").style("text-anchor","start");}var c=p.get(this.config,"axis.xaxis.label.format");if(c&&c.includes("%")){var e=o.format(""+c);a.selectAll(".axis1 .tick text").text(function(a){return p.isFunction(e)&&e(a)||a})}}},setColors:function(){},hasS:function(a){var b=0;return p.map(a,function(a){void 0!==a.s&&b++}),b===a.length||0!==b&&!1},setOriginalData:function(a){this[s]=a},getOriginalData:function(){return this[s]},data:function(a,b){a&&this.setOriginalData(a),a||(a=this.getOriginalData());var c=b.chart.loadAmount||2e3;if(c&&(a=a.slice(0,c)),a&&(this.__data=p.clone(a)),!this.hasS(this.__data))this._data=p.cloneDeep(this.__data).map(function(a){return a.y={value:a.y,data:p.clone(a)},a});else{var d=p.get(b,"series.seriesMapping"),e=[],f=r.getSeriesValue(this.__data,"s");if(d){var g=p.get(b,"series.series").map(function(a){return""+a.fieldValue}),h=[];g.forEach(function(a,b){(""===a||-1===e.indexOf(""+a))&&e.push(""+a),""===a&&h.push(b)}),f.forEach(function(a){""!==a&&-1===e.indexOf(""+a)&&(h.length?(e[h[0]]=""+a,h.shift()):e.push(""+a))}),e.forEach(function(a,c){""===a&&(e.splice(c,1),b.series.series.splice(c,1))})}else e=f;this._data=r.threeD2Two(this.__data,"x","y","s",e)}return this._data},mergeConfig:function(a){return a?(this.config.theme=p.defaultsDeep(a.theme||{},this.config.theme),this.setColors(),a.series&&(this.config.series=a.series),this.config=p.defaultsDeep(a||{},this.config),this.config):this.config},resize:function(a,b){this.config.chart.width=a,this.config.chart.height=b,this.render()},clear:function(){this.chart&&this.chart.empty()},destroy:function(){this.chart&&this.chart.off(),this.chart&&this.chart.destroy(),this._data=this.__data=null}}),a.exports});;
Cube("datav:/com/ml-bar-hori-group/3.0.18/defaultConfig",[],function(a){return a.exports={chart:{margin:{top:0,bottom:0,left:20,right:20},loadAmount:2000,bar:{decorate:{line:{color:"rgba(255,255,255,0.5)"},shape:{fill:"#00baff",stroke:"#00baff"}}},numericalLabel:{show:!1,textStyle:{fontFamily:"Microsoft Yahei",fontWeight:"normal",fontSize:10,color:"#000"},pos:"center",emptyData:!1},legend:{show:!0,textarea:{fontFamily:"Microsoft Yahei",fontWeight:"normal",fontSize:10,color:"rgba(255,255,255,0.5)"},layout:{margin:{horiInterval:8,vertiInterval:0},loc:"top-right"}}},axis:{xaxis:{isShow:!0,extent:{min:"auto",max:"dataMax"},label:{show:!0,format:".0f",textarea:{fontFamily:"Microsoft Yahei",fontWeight:"normal",fontSize:10,color:"rgba(255,255,255,0.6)"},display:{amount:6,unit:"\u5355\u4F4D"}},axisLine:{show:!1,color:"rgba(255,255,255,0.5)"},grid:{show:!1,color:"#434343"}},yaxis:{isShow:!0,boundaryGap:0.6,interval:0.6,label:{show:!0,format:"%m\u6708",textarea:{fontFamily:"Microsoft Yahei",fontWeight:"normal",fontSize:10,color:"rgba(255,255,255,0.5)"},display:{angle:"0",amount:0,unit:""}},axisLine:{show:!1,color:"rgba(255,255,255,0.5)"},grid:{show:!1,color:"#fff"}}},series:{series:[{serieName:"\u7CFB\u52171",color:"#00baff"},{serieName:"\u7CFB\u52172",color:"#3de7c9"}]},others:{animation:{show:!0,setting:{animationEasing:"cubicInOut",animationAfterPreviousSeries:!1},enter:{animationDuration:1000},update:{animationDurationUpdate:300,animationUpdateFromPrevious:!0}},tooltip:{show:!0,hideDelay:100,trigger:{type:"item",action:"hover"},textStyle:{fontFamily:"Microsoft Yahei",fontWeight:"normal",fontSize:14,color:"#fff"},axisPointer:{show:!0,_type:"line",lineStyle:{width:1,_type:"solid",color:"#f00"}},bgBox:{backgroundColor:"rgba(0, 0, 0, 0.65)",customSize:{show:!1,width:150,height:50},padding:10,offset:{xOffset:6,yOffset:10},border:{borderWidth:0,borderColor:"#333"}}}}},a.exports});;
Cube("datav:/com/ml-bar-hori-group/3.0.18",["datav:/com/legend/0.1.3","datav:/com/maliang-utils/0.0.21","datav:/npm/bcore/0.0.22/event","datav:/npm/jquery/2.1.4","datav:/npm/lodash/4.17.11"],function(a,b,c){var d=c("datav:/npm/bcore/0.0.22/event"),e=c("datav:/npm/jquery/2.1.4"),f=c("datav:/npm/lodash/4.17.11"),g=c("datav:/com/ml-bar-hori-group/3.0.18/bar"),h=c("datav:/com/legend/0.1.3"),i=c("datav:/com/maliang-utils/0.0.21"),j=c("datav:/com/ml-bar-hori-group/3.0.18/defaultConfig");return a.exports=d.extend(function(a,b){this.config=f.cloneDeep(j)||{theme:{},chart:{background:"transparent",margin:{top:6,bottom:0,left:50,right:40}},axis:{xaxis:{tickSize:2},yaxis:{tickSize:2}},legend:{innerStyle:{"line-height":1.3}},series:[{value:"1",color:"#2F8FBE"}],animation:{show:!0,animationDuration:1e3,animationEasing:"cubicInOut",animationDurationUpdate:300,animationUpdateFromPrevious:!0,animationAfterPreviousSeries:!1}},this.container=e(a).css("padding","10px 0"),this.chart=null,this.legend=null,this.init(b)},{init:function(a){var b=a&&a.options||a;this.apis=b.apis;var c=this.mergeConfig(b),d=c.chart.legend,i=d.layout.loc.split("-")[0];this.chartDom=e("<div class=\"dchart-bar-basic\" style=\"width: 100%;\"></div>"),this.legendDom=e("<div class=\"dchart-legend\" style=\"left: 0;width: 100%;\"></div>"),"bottom"===i?(this.container.append(this.chartDom),this.container.append(this.legendDom)):(this.container.append(this.legendDom),this.container.append(this.chartDom)),this.legend=new h(this.legendDom[0],d),this.legend.render(c.series.series,d),this.chartDom.height(this.container.height()-(d.show&&this.legendDom.height()||0)),this.chart=new g(this.chartDom[0],f.cloneDeep(c)),this.legendDom.css("display",d.show&&"block"||"none"),this._bindEvent()},render:function(a,b){var c=b&&b.options||b,d=this.mergeConfig(c);if(a=this.data(a),a&&a.length){var e=i.conflictConfigWithData(d,a,[{configField:{type:"array",field:"serieName",parent:"series.series"},dataField:"s",priority:"config",newConfigField:"showName"}]);this.legend.render(e.series.series,e.chart.legend),this.config.chart.height=this.container.height()-(this.config.chart.legend.show&&this.legendDom.height()||0),this.chartDom.height(this.config.chart.height),a&&this.chart.render(a,e),this._cfg=e}},updateStyle:function(){},setColors:function(){},data:function(a){return a&&(this._data=f.clone(a),this._data.length&&this._data.forEach(function(a){a.y=f.toNumber(a.y)})),this._data},mergeConfig:function(a){return a?(this.config.theme=f.defaultsDeep(a.theme||{},this.config.theme),this.setColors(),a.series&&(this.config.series=a.series),this.config=f.defaultsDeep(a||{},this.config),this.config):this.config},resize:function(a,b){var c=b-(this.config.chart.legend.show&&this.legendDom.outerHeight()||0)-20;this.mergeConfig({chart:{width:a,height:c}}),this.chart.resize(a,c)},updateLegendLayout:function(a){var b=this.config.chart.legend;if(b.show!==a.show&&(this.legendDom.css("display",a.show&&"block"||"none"),this.config.chart.height=this.container.height()-(a.show&&this.legendDom.height()||0)),b.textarea.fontSize!==a.textarea.fontSize&&(this.legendDom.find(".legend-item").css("fontSize",a.textarea.fontSize),this.config.chart.height=this.container.height()-(a.show&&this.legendDom.height()||0)),JSON.stringify(b.layout.margin)!==JSON.stringify(a.layout.margin)){var c=a.layout.margin;this.legendDom.find(".legend-item").css("margin",c.vertiInterval+"px "+c.horiInterval+"px"),this.config.chart.height=this.container.height()-(a.show&&this.legendDom.height()||0)}var d=b.layout.loc.split("-")[0],e=a.layout.loc.split("-")[0];d!==e&&("top"===e?this.container[0].appendChild(this.chartDom[0]):"bottom"===e&&this.container[0].appendChild(this.legendDom[0])),this.render(null,{chart:{legend:a}})},clear:function(){this.chart&&this.chart.clear(),this.legend&&f.isFunction(this.legend.clear)&&this.legend.clear()},destroy:function(){this.chart&&this.chart.destroy(),this.chart=null,this.legend&&this.legend.destroy(),this.legend=null,this.chartDom=null,this.legendDom=null,this.container&&this.container.empty(),this._data=null},startAnimate:function(){if(!(this.chart&&this.chart.chart))return!1;if(this._cfg){this.chart.chart.clearAllAnimation();var a=this._cfg.others.animation,b=a.update,c=a.enter,d=b.animationUpdateFromPrevious;b.animationUpdateFromPrevious=!1;var e=b.animationDurationUpdate;b.animationDurationUpdate=c.animationDuration,this.chart.render(this._data,this._cfg),b.animationDurationUpdate=e,b.animationUpdateFromPrevious=d}},clearAnimate:function(){this.chart&&this.chart.chart&&this.chart.chart.resumeToAnimationEnd()},_bindEvent:function(){var a=this;if(this.chart&&this.chart.chart){var b=this.chart.chart;["click"].forEach(function(c){b.on(c,function(b){var d=b.data;return a.emit(c,d)})})}},highlight:function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},b=a.data,c=a.filter,d=a.options,e=void 0===d?{}:d;return this.chart?void(e.hasOwnProperty("selectMode")&&(e.mode=e.selectMode,delete e.selectMode),e.hasOwnProperty("cancelHighlightFirst")&&e.cancelHighlightFirst&&this.cancelHighlight(),this.chart.chart&&this.chart.chart.highlight({targetData:b,filter:c,options:e})):null},cancelHighlight:function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},b=a.data,c=a.filter,d=a.options,e=void 0===d?{}:d;return this.chart?void(e.hasOwnProperty("selectMode")&&(e.mode=e.selectMode,delete e.selectMode),this.chart&&this.chart.chart&&this.chart.chart.cancelHighlight({targetData:b,filter:c,options:e})):null}}),a.exports});