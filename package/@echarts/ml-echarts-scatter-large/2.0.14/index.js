// env=undefined => env=publish 
Cube("datav:/com/@echarts/ml-echarts-scatter-large/2.0.14",["datav:/com/maliang-echarts-utils/0.0.18","datav:/npm/bcore/0.0.18/event","datav:/npm/jquery/2.1.4","datav:/npm/lodash/4.6.1","datav:/npm/echarts/3.5.4"],function(t,e,i,n,a,s){var c=i("datav:/npm/bcore/0.0.18/event"),h=i("datav:/npm/jquery/2.1.4"),o=i("datav:/npm/lodash/4.6.1"),r=i("datav:/npm/echarts/3.5.4"),d=i("datav:/com/maliang-echarts-utils/0.0.18");return t.exports=c.extend(function(t,e){this.config={series:[{type:"scatter"},{type:"scatter"}]},this.container=h(t),this.apis=e.apis,this._data=null,this.chart=null,this.init(e)},{init:function(t){var i=this;t=this.mergeConfig(t),this.chart=r.init(this.container[0]),t.legend.data=o.map(t.series,"name"),this.chart.setOption(d.config2echartsOptions(o.defaultsDeep(t,{yAxis:{data:[]},xAxis:{data:[]}}))),this.updateStyle(),this.chart.off(),this.chart.on("click",function(e){var t=i._data.filter(function(t){return t.y===e.data[1]&&t.x===e.data[0]&&t.s===e.seriesName});i.emit("click",t.length&&t[0])}),this.chart.on("legendselectchanged",function(e){var t=o.filter(o.keys(e.selected),function(t){return e.selected[t]});i.emit("legend-select-changed",{selected:t,name:e.name})})},highlight:function(t){t=o.merge(t||{},{type:"highlight"}),this.chart.dispatchAction(t)},downplay:function(t){t=o.merge(t||{},{type:"downplay"}),this.chart.dispatchAction(t)},showTip:function(){var t=o.merge(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},{type:"showTip"});this.chart.dispatchAction(t)},hideTip:function(){this.chart.dispatchAction({type:"hideTip"})},legendAction:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=t.type,e=void 0===e?"legendToggleSelect":e,t=t.name;e&&-1!==["legendSelect","legendUnSelect","legendToggleSelect"].indexOf(e)&&this.chart.dispatchAction({type:e,name:t})},render:function(t){t=this.data(t);t=this.mergeConfig(d.config2echartsOptions(d.data2echartsScatter(t,this.config)));this.chart.setOption(t),this.updateStyle()},resize:function(t,e){this.chart.resize({width:t,height:e})},data:function(t){return t&&(this._data=t),this._data},mergeConfig:function(t){return t&&(t.series&&(this.config.series=t.series),this.config=o.defaultsDeep(t||{},this.config),this.config.xAxis.name=this.config.xAxis._name,this.config.yAxis.name=this.config.yAxis._name,this.config.tooltip.showContent=this.config.tooltip.show),this.config},updateStyle:function(){this.config},updateOptions:function(t){t=this.mergeConfig(t);(t=d.config2echartsOptions(t)).legend.data=o.map(t.series,"name"),this.chart.setOption(t)},clear:function(){this.chart&&this.chart.clear&&this.chart.clear()},destroy:function(){this.chart&&this.chart.dispose&&this.chart.dispose()}}),t.exports});