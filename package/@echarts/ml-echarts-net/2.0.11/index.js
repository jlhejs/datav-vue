// env=undefined => env=publish 
Cube("datav:/com/@echarts/ml-echarts-net/2.0.11",["datav:/com/maliang-echarts-utils/0.0.18","datav:/npm/bcore/0.0.18/event","datav:/npm/jquery/2.1.4","datav:/npm/lodash/4.6.1","datav:/npm/echarts/3.5.4"],function(a,b,c){var d=c("datav:/npm/bcore/0.0.18/event"),e=c("datav:/npm/jquery/2.1.4"),f=c("datav:/npm/lodash/4.6.1"),g=c("datav:/npm/echarts/3.5.4"),h=c("datav:/com/maliang-echarts-utils/0.0.18");return a.exports=d.extend(function(a,b){this.config={series:{type:"graph",layout:"force",animationDurationUpdate:0,animationEasingUpdate:"quinticInOut",legendHoverLink:!0,tooltip:{trigger:"item"},edgeSymbol:["circle","arrow"],initLayout:"circular",symbolSize:function(a){return a||0===a||(a=10),a}}},this.container=e(a),this.apis=b.apis,this._data=null,this.chart=null,this.init(b)},{init:function(a){var b=this;a=this.mergeConfig(a),this.chart=g.init(this.container[0]);var c=h.config2echartsOptions(a);c.legend.data=f.map(c._series,"name"),c.series[0].categories=c._series;var d=function(a){return a.data[c.series[0].edgeLabel.content.value]?c.series[0].edgeLabel.content.prefix+a.data[c.series[0].edgeLabel.content.value]+c.series[0].edgeLabel.content.suffix:""};c.series[0].edgeLabel.normal.formatter=d,c.series[0].edgeLabel.emphasis.formatter=d,c.color=f.map(c._series,"color"),c.series[0].edgeSymbol=c.series[0].lineStyle.isEdgeSymbol?["circle","arrow"]:[],this.chart.setOption(c),this.updateStyle(),this.chart.off(),this.chart.on("click",function(a){var c=f.merge(a.data,{type:a.data.name?"nodes":"links"});b.emit("click",c)}),this.chart.on("legendselectchanged",function(a){var c=[];c=f.filter(f.keys(a.selected),function(b){return a.selected[b]}),b.emit("legend-select-changed",{selected:c,name:a.name})})},showTip:function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};a=f.merge(a,{type:"showTip"}),this.chart.dispatchAction(a)},hideTip:function(){this.chart.dispatchAction({type:"hideTip"})},legendAction:function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},b=a.type,c=void 0===b?"legendToggleSelect":b,d=a.name;c&&-1!==["legendSelect","legendUnSelect","legendToggleSelect"].indexOf(c)&&this.chart.dispatchAction({type:c,name:d})},render:function(a){a=this.data(a);var b=this.config;this.chart.setOption(h.config2echartsOptions(h.data2echartsGraph(a,b))),this.updateStyle()},resize:function(a,b){this.chart.resize({width:a,height:b})},data:function(a){return a&&(this._data=a),this._data},mergeConfig:function(a){return a?(this.config=f.defaultsDeep(a||{},this.config),this.config.tooltip.showContent=this.config.tooltip.show,this.config):this.config},updateStyle:function(){this.config},updateOptions:function(a){var b=h.config2echartsOptions(a);b.legend.data=f.map(b._series,"name"),b.series[0].categories=b._series;var c=function(a){return a.data[b.series[0].edgeLabel.content.value]?b.series[0].edgeLabel.content.prefix+a.data[b.series[0].edgeLabel.content.value]+b.series[0].edgeLabel.content.suffix:""};b.series[0].edgeLabel.normal.formatter=c,b.series[0].edgeLabel.emphasis.formatter=c,b.color=f.map(b._series,"color"),b.series[0].edgeSymbol=b.series[0].lineStyle.isEdgeSymbol?["circle","arrow"]:[],this.chart.setOption(h.config2echartsOptions(b))},clear:function(){this.chart&&this.chart.clear&&this.chart.clear()},destroy:function(){this.chart&&this.chart.dispose&&this.chart.dispose()}}),a.exports});