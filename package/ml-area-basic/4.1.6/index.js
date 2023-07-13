// env=undefined => env=publish 
Cube("datav:/com/ml-area-basic/4.1.6/transform",["datav:/npm/lodash/4.17.11","datav:/npm/datav-g2plot-util/0.2.4"],function(a,b,c){var d=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},e=c("datav:/npm/lodash/4.17.11"),f=c("datav:/npm/datav-g2plot-util/0.2.4"),g=f.transformGUI2Props,h=f.getMarginOptions,i=f.getLegendOptions,j=f.getNumericalLabelOptions,k=f.getXAxisOptions,l=f.getYAxisOptions,m=f.getTooltipOptions,n=f.getInteractionOptions,o=f.getAxisExtentOptions,p=f.getCustomS,q=f.setBasicSeriesColor,r=f.getGuideLine,s=f.hasS,t=f.getXAxisTypeOptions,u=d({},h(),i(),j(),n(),k(),l(),m(),function(){return{"options.chart.line.show":"line.visible","options.chart.line.lineWidth":"line.size","options.chart.area.smooth":"smooth","options.chart.area.fillOpacity":"areaStyle.fillOpacity","options.chart.point.shape":"point.shape","options.chart.point.size":"point.size","options.chart.point.show":"point.visible"}}(),o("yaxis","yAxis","y"),t(),function(){return{"options.axis.xaxis.ranges":"meta.x.range"}}()),v="rgba(0,0,0,0)",w=function(a){var b=a.dataSeries,c=a.series,d=a.propsConfig,f=e.uniq(b),g={},h=c.map(function(a){return e.get(a,"point.color")});f.forEach(function(a,b){var c=b<h.length?b:b%h.length;g[a]=h[c]}),d.point.style=function(a){return{stroke:g[a]||h[0]}}},x=function(a){var b=a.seriesConfig,c=a.propsConfig,d=a.dataSeries,f=a.data;if(b){var g=b.series,h=b.seriesMapping;if(h&&s(f)){var j={},k=[],i={};g.forEach(function(a){var b=a.mapping,c=b.fieldValue,d=b.serieName,f=e.get(a,"area.fill"),g=e.get(a,"point.color");e.isNull(c)||e.isUndefined(c)||""===c?k.push({area:f,stroke:g}):(j[d||c]={area:f,stroke:g},i[c]=d)});var l=g.map(function(a){return e.get(a,"mapping.fieldValue")});f=f.sort(function(c,a){var b=l.indexOf(c.s),d=l.indexOf(a.s);return(-1===b?Infinity:b)-(-1===d?Infinity:d)}),f.forEach(function(a){a.__s=i[a.s]||a.s});var m=p(f);m.forEach(function(a,b){if(!j[a])if(k.length)j[a]=k.shift();else{var c=g[b%g.length];j[a]={area:e.get(c,"area.fill"),stroke:e.get(c,"point.color")}}});var n=Object.values(j)[0];c.color=Object.keys(j).length?function(a){return(j[a]||n).area}:k,c.point.style=function(a){return{stroke:(j[a]||n).stroke}},c.stackField=c.colorField="__s"}else{var o=g.map(function(a){return e.get(a,"area.fill")});w({dataSeries:d,series:g,propsConfig:c}),q({dataSeries:d,allColors:o,propsConfig:c}),c.stackField=c.colorField="s"}c.data=f}};return a.exports={transOptionKey:function(a,b,c){var d=e.cloneDeep(b)||{},f=e.cloneDeep(u);"linear"===e.get(a,"options.axis.xaxis.type")&&delete f["options.axis.xaxis.label.timeFormat"],g({guiConfig:a,guiOptPropMap:f,res:d,data:c});var h=[].concat(c).filter(function(a){return a}).map(function(a){return a.s}),i=e.get(a,"options.series");x({seriesConfig:i,propsConfig:d,dataSeries:h,data:c}),e.get(a,"options.chart.line.customStroke")||delete d.line.color,d.xAxis.type="dateTime"===d.xAxis.type?"time":d.xAxis.type;var j=e.get(a,"options.others.guideLine"),k=r(j);if(d.guideLine=k&&j.show?[].concat(k):[],d.tooltip&&d.tooltip.domStyles&&(d.tooltip.domStyles["g2-tooltip"].boxShadow="none"),e.set(d,"xAxis.type","cat"),delete d.yAxis.max,"cat"===a.options.axis.xaxis.type){var l=e.get(d.meta,"x.range");e.set(d,"meta.x.range",[l,1-l])}return e.get(a,"options.axis.yaxis.extent.show")||(d=e.omit(d,["yAxis.min"])),d},defaultProps:{title:{visible:!1},description:{visible:!1},pixelRatio:3,xField:"x",yField:"y",colorField:"s",stackField:"s",padding:"auto",forceFit:!0,yAxis:{label:{formatter:function(a){return(""+a).replace(/\d{1,3}(?=(\d{3})+$)/g,function(a){return a+","})},style:{stroke:v}},grid:{style:{lineDash:[4,4]}},tickLine:{visible:!0},title:{visible:!1,text:"",style:{stroke:v}}},xAxis:{grid:{style:{lineDash:[4,4]}},tickLine:{visible:!0,style:{stroke:"red",length:20}},title:{visible:!1,text:"",style:{stroke:v}},label:{style:{stroke:v}}},legend:{position:"bottom-center"},label:{position:"middle",adjustColor:!1,adjustPosition:!0,autoScale:!0,style:{stroke:v}},line:{},areaStyle:{},point:{style:{}},guideLine:[],meta:{x:{range:0}}}},a.exports});;
Cube("datav:/com/ml-area-basic/4.1.6",["datav:/npm/lodash/4.17.11","datav:/npm/bcore/0.0.22/event","datav:/npm/datav-g2plot-adaptor/1.1.6/g2plot.js","datav:/npm/datav-g2plot-util/0.2.4"],function(a,b,c){var d=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},e=c("datav:/npm/lodash/4.17.11"),f=c("datav:/npm/bcore/0.0.22/event"),g=c("datav:/npm/datav-g2plot-adaptor/1.1.6/g2plot.js"),h=c("datav:/npm/datav-g2plot-util/0.2.4"),i=h.getTransform,j=h.datavColor2G2Color,k=h.convertData,l=c("datav:/com/ml-area-basic/4.1.6/transform"),m=l.transOptionKey,n=l.defaultProps;return a.exports=f.extend(function(a,b){this.container=a,this.chart=null,this.guiConfig={options:{chart:{legend:{marker:{shape:"hyphen",show:!1,size:4},textStyle:{color:"rgb(144, 160, 174)",fontFamily:"Microsoft Yahei",fontSize:12,fontWeight:"normal"}}},others:{tooltip:{textStyleList:{color:"#fff",fontFamily:"Microsoft Yahei",fontSize:14,fontWeight:"normal"},textStyleValue:{color:"#fff",fontFamily:"Microsoft Yahei",fontSize:14,fontWeight:"normal"}}}}},this.propsConfig=n,this.init(b)},{init:function(a){this.mergeConfig(a)},initChart:function(a){var b=a.chartConfig;this.chart=new g.StackedArea(this.container,b),this.chart.render();var c=i(this.container);Object.values(c).length&&this.chart&&this.chart.canvas&&(this.chart.canvas.set("containerTransform",c),this.chart.canvas.set("supportCSSTransform",!0))},render:function(a,b){var c=this;return this.guiConfig=this.mergeConfig(b),a=this.data(a),a&&e.isArray(a)&&a.length?void k(e.cloneDeep(a),this.guiConfig,!1,{x:"x",y:"y"}).then(function(a){c.propsConfig=m(c.guiConfig,c.propsConfig,e.cloneDeep(a)),c._bindEvent(c.propsConfig);var b=d({data:a},c.propsConfig);c.chart?e.get(b.yAxis,"min")?(c.chart.updateConfig(b),c.chart.render()):(c.chart.destroy(),c.initChart({chartConfig:b})):c.initChart({chartConfig:b})}):(console.warn("--------- \u540C\u5B66\u4F60\u597D, \u8BF7\u786E\u4FDD\"\u533A\u57DF\u56FE\"\u7EC4\u4EF6, \u6570\u636E\u7C7B\u578B\u4E3A\u6570\u7EC4 && \u6570\u636E\u5927\u4E8E\u7B49\u4E8E1\u6761 ---------"),void console.warn("--------- Hello classmates, please make sure that the \"area chart\" component, the data type is an array && data is greater than or equal to 1 ---------"))},updateStyle:function(){},setColors:function(){var a=this.guiConfig,b=e.get(a,"options.series.series");b&&[].concat(b).filter(function(a){return a}).forEach(function(a){var b=e.get(a,"area.fill");b&&e.set(a,"area.fill",j(b))})},data:function(a){return a&&(this._data=e.clone(a)),this._data},mergeConfig:function(a){if(!a)return this.guiConfig;var b=e.cloneDeep(e.get(a,"options.series.series"));return this.guiConfig=e.defaultsDeep(a||{},this.guiConfig),b&&e.set(this.guiConfig,"options.series.series",b),this.setColors(),this.guiConfig},getThemableConfig:function(a){if(!a)return{};var b=a.textColor,c=a.axisColor,f=a.palette,d=a.bgColor,g=(e.get(this.guiConfig,"options.series.series")||[]).map(function(a,b){var c=f[b]||f[b%f.length];return{area:{fill:{type:"flat",value:c}},point:{color:c}}}),h={label:{textarea:{color:b}},title:{textarea:{color:b}},axisLine:{color:c},tickLine:{stroke:c},grid:{color:c}};return{options:{chart:{numericalLabel:{textStyle:{color:b}}},axis:{xaxis:h,yaxis:h},series:{series:g},others:{tooltip:{textStyle:{color:b},bgBox:{backgroundColor:d}}}}}},resize:function(a,b){this.chart&&this.chart.updateConfig({width:a,height:b}),this.chart&&this.chart.render()},destroy:function(){this.chart&&this.chart.destroy(),this.chart=null,this._data=null},_bindEvent:function(a){var b=this;a.events={onPointClick:function(a){var c=e.get(a,"target.cfg.origin.data");c&&b.emit("click",c)},onLegendClick:function(a){var c=e.get(a,"target.cfg.delegateObject.item.value");c&&b.emit("onLegendClick",{value:c})}}},highlight:function(a){var b=a.data,c=a.style;if(this.chart&&b){var d=function(a){return Object.keys(b).every(function(c){return a[c]===b[c]})};this.chart.setActive(d,c)}},cancelHighlight:function(){this.chart&&this.chart.setActive({},{})}}),a.exports});