Cube('datav:/com/pie-comparison-image/0.0.10',['datav:/npm/bcore/0.0.9/event','datav:/com/pie-multi-radius/1.1.3','datav:/npm/lodash/4.6.1','datav:/npm/jquery/2.1.4'],function(i,n,b,m,l,k){function j(a){return d[a]?d[a]:d[a]=c[a]()}var c={},d={};c['coms/pie-comparison-image/0.0.10/template.html']=c['coms/pie-comparison-image/0.0.10/template.html']=function(){return function(){return'<div class="sub-header">\n  <div class="sub-title"></div>\n</div>\n<div class="pie"></div>\n'}};var h=b('datav:/npm/bcore/0.0.9/event'),g=b('datav:/com/pie-multi-radius/1.1.3'),a=b('datav:/npm/lodash/4.6.1'),f=a.template(j('coms/pie-comparison-image/0.0.10/template.html')()),e=b('datav:/npm/jquery/2.1.4');return i.exports=h.extend(function a(c,b){this.config={theme:{bg:['#000','transparent'],font:['#eee','#252525'],colors:['#444547','#A0AAB3']},chart:{dx:20,radius:33,axis:{},background:'transparent',innerArr:[.7,.75,.55,.695,.535,.535,.7845,.593,.7347],outerArr:[1,.95,.99,.72,.79,.679,.81,.824,.7834],image:'http://datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/e44066b3c8d5f1c419a6baf756776d5b.png'},series:{serie1:{'serie-color':'#4DD3E2','label-font-size':16,'label-color':'#fff','value-font-size':32,'value-color':'#fff'},serie2:{'serie-color':'#fff','label-font-size':16,'label-color':'#fff','value-font-size':32,'value-color':'#fff'}}},this.container=e(c),this.apis=b.apis,this.container.append(f),this._data,this.init(b)},{setColors:function(a){return a},mergeConfig:function(b){return b?(this.config.theme=a.defaultsDeep(b.theme||{},this.config.theme),this.setColors(),this.config=a.defaultsDeep(b||{},this.config),this.config):this.config},init:function(c){var a=this.mergeConfig(c);this.chart=new g(this.container[0],a.chart||{});var b=function(){var b=this.options,c=this.svg.select('.img')[0][0]?this.svg.select('.img'):this.svg.append('image').attr({'class':'img'});c.attr({'xlink:href':function(b){return a.chart.image||''},x:function(a){return b.innerWidth/2-b.arc._radius*.5},y:function(a){return b.innerHeight/2-b.arc._radius*.5},width:b.arc._radius,height:b.arc._radius})};this.chart.chart.on('after.render',b),this.chart.chart.updateAfterRender=function(){this.afterRender(),b.call(this)}},data:function(b){return b?this._data=a.map(b,function(b){return b.y=a.toNumber(b.y),b}):b=this._data,this._data},render:function(c,g){if(c=a.cloneDeep(this.data(c)),!(c&&c.length)){this.chart.chart&&this.chart.chart.destroy();return}var b=this.mergeConfig(g);if(b.chart.axis.dx=b.chart.dx,b.chart.axis.dr=b.chart.radius-100/Math.min(this.container.width(),this.container.height())*Math.max(b.series.serie1['label-font-size'],b.series.serie1['value-font-size'],b.series.serie2['label-font-size'],b.series.serie2['value-font-size']),c){var e=a.sumBy(c,'y'),f=a.map(c,function(a){return a.y=(a.y/e*100).toFixed(2),a}),d=b.series;b.chart.paxis.nlabel=function(b,a){return'<tspan class="label-value" dy="-3" x="0" style="font-size: '+d['serie'+(a+1)]['value-font-size']+'px; fill: '+d['serie'+(a+1)]['value-color']+'">'+b.y+'%</tspan>'+'<tspan class="label-content" x="0" dy="'+d['serie'+(a+1)]['label-font-size']+'" style="font-size: '+d['serie'+(a+1)]['label-font-size']+'px; fill: '+d['serie'+(a+1)]['label-color']+'">'+b.x+'</tspan>'},b.chart.series=[b.series.serie1,b.series.serie2],this.chart.render(f,b.chart)}this.updateStyle()},updateStyle:function(){var a=this.chart.chart.svg,b=this.config;a.selectAll('.serie-cord').style('display','none'),a.selectAll('.background').style('display','none'),a.select('.series-group:first-child .serie').style('fill',b.series.serie1['serie-color']),a.select('.series-group:nth-child(2) .serie').style('fill',b.series.serie2['serie-color']),this.container.find('.con-svg').css('background','transparent'),this.container.css('background-color',b.chart.background)},resize:function(b,c){var a=this.config;a.chart.width=b,this.render()}}),i.exports})