Cube("datav:/com/@datav-form/input/0.0.16/template.html",[],function(t,n,i,e,a,d){return t.exports=function(){return'<div class="input">\n  <div class="tip"></div>\n  <input type="text">\n  <div class="confirm"></div>\n</div>'},t.exports});;
Cube("datav:/com/@datav-form/input/0.0.16",["datav:/npm/bcore/0.0.18/event","datav:/npm/jquery/2.1.4","datav:/npm/lodash/4.6.1"],function(t,o,n,e,i,r){function u(t,o,n){return o in t?Object.defineProperty(t,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[o]=n,t}var l=n("datav:/npm/bcore/0.0.18/event"),a=n("datav:/npm/jquery/2.1.4"),d=n("datav:/npm/lodash/4.6.1"),b=n("datav:/com/@datav-form/input/0.0.16/template.html")();return t.exports=l.extend(function(t,o){this.config={},this.container=a(t),this.apis=o.apis,this._data=null,this.value=null,this.init(o)},{init:function(t){var o=this;this.mergeConfig(t),this.container.append(d.template(b)),this.inputBox=this.container.find(".input"),this.input=this.inputBox.find("input"),this.tip=this.inputBox.find(".tip"),this.clean=this.inputBox.find(".clean"),this.button=this.inputBox.find(".confirm"),this.input.on("change",function(){o.value=o.input.val(),o.eventEmit(o.value)}),this.input.on("input",function(){""!==o.input.val()&&null!==o.input.val()?o.tip.hide():o.tip.show(),o.eventEmit(o.input.val())}),this.button.off("hover mousedown mouseup").mouseenter(function(){o.button.css({"font-size":o.config.button.hover.textStyle.fontSize+"px","font-weight":o.config.button.hover.textStyle.fontWeight,"font-family":o.config.button.hover.textStyle.fontFamily,"font-style":o.config.button.hover.textStyle.fontStyle,color:o.config.button.hover.textStyle.color,background:o.config.button.hover.background,border:o.config.button.hover.border.borderWidth+"px "+o.config.button.hover.border.borderStyle+" "+o.config.button.hover.border.borderColor,"border-left":"none","border-radius":"0 "+o.config.button.hover.border.borderRadius+"px "+o.config.button.hover.border.borderRadius+"px 0"})}).mouseleave(function(){o.button.css({"font-size":o.config.button.normal.textStyle.fontSize+"px","font-weight":o.config.button.normal.textStyle.fontWeight,"font-family":o.config.button.normal.textStyle.fontFamily,"font-style":o.config.button.normal.textStyle.fontStyle,color:o.config.button.normal.textStyle.color,background:o.config.button.normal.background,border:o.config.button.normal.border.borderWidth+"px "+o.config.button.normal.border.borderStyle+" "+o.config.button.normal.border.borderColor,"border-left":"none","border-radius":"0 "+o.config.button.normal.border.borderRadius+"px "+o.config.button.normal.border.borderRadius+"px 0"})}).mousedown(function(){o.button.css({"font-size":o.config.button.emphasis.textStyle.fontSize+"px","font-weight":o.config.button.emphasis.textStyle.fontWeight,"font-family":o.config.button.emphasis.textStyle.fontFamily,"font-style":o.config.button.emphasis.textStyle.fontStyle,color:o.config.button.emphasis.textStyle.color,background:o.config.button.emphasis.background,border:o.config.button.emphasis.border.borderWidth+"px "+o.config.button.emphasis.border.borderStyle+" "+o.config.button.emphasis.border.borderColor,"border-left":"none","border-radius":"0 "+o.config.button.emphasis.border.borderRadius+"px "+o.config.button.emphasis.border.borderRadius+"px 0"})}).mouseup(function(){o.button.css({"font-size":o.config.button.normal.textStyle.fontSize+"px","font-weight":o.config.button.normal.textStyle.fontWeight,"font-family":o.config.button.normal.textStyle.fontFamily,"font-style":o.config.button.normal.textStyle.fontStyle,color:o.config.button.normal.textStyle.color,background:o.config.button.normal.background,border:o.config.button.normal.border.borderWidth+"px "+o.config.button.normal.border.borderStyle+" "+o.config.button.normal.border.borderColor,"border-left":"none","border-radius":"0 "+o.config.button.normal.border.borderRadius+"px "+o.config.button.normal.border.borderRadius+"px 0"}),o.eventEmit(o.value,!0)}),this.updateStyle()},render:function(t,o){t=this.data(t),this.mergeConfig(o),this.updateStyle(),t.length&&""!==t[0].value?(this.value=t[0].value,this.input.val(this.value).show(),this.tip.hide()):(this.value="",this.tip.show(),this.input.val("")),this.eventEmit(this.value)},updateStyle:function(){var t,o=this.config;this.inputBox.css({width:this.container.width()-o.button.width+"px",height:this.container.height(),border:o.input.border.borderWidth+"px "+o.input.border.borderStyle+" "+o.input.border.borderColor,"border-right":"none","border-radius":o.input.border.borderRadius+"px 0 0 "+o.input.border.borderRadius+"px",cursor:"pointer",background:o.input.background}),this.tip.html(o.input.placeholder),this.tip.css({width:this.container.width()-o.button.width+"px","text-align":"left",outline:0,height:"100%","background-color":"transparent",border:0,"padding-left":o.input.indent+"px","line-height":this.container.height()+"px","font-size":o.input.textStyle.fontSize+"px","font-weight":o.input.textStyle.fontWeight,"font-family":o.input.textStyle.fontFamily,"font-style":o.input.textStyle.fontStyle,color:o.input.textStyle.color,position:"absolute",top:0,left:0,overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap","box-sizing":"border-box"}),this.input.css({width:this.container.width()-o.button.width+"px","text-align":"left",outline:0,height:"100%","background-color":"transparent",border:0,"padding-left":o.input.indent+"px","line-height":this.container.height()+"px","font-size":o.input.textStyle.fontSize+"px","font-weight":o.input.textStyle.fontWeight,"font-family":o.input.textStyle.fontFamily,"font-style":o.input.textStyle.fontStyle,color:o.input.textStyle.color,position:"absolute",top:0,left:0,"box-sizing":"border-box"}),this.button.html(o.button.text),this.button.css((u(t={width:o.button.width+"px",height:this.container.height(),position:"absolute",left:this.container.width(),top:0},"left",this.container.width()-o.button.width+"px"),u(t,"line-height",this.container.height()+"px"),u(t,"text-align","center"),u(t,"user-select","none"),u(t,"font-size",o.button.normal.textStyle.fontSize+"px"),u(t,"font-weight",o.button.normal.textStyle.fontWeight),u(t,"font-family",o.button.normal.textStyle.fontFamily),u(t,"font-style",o.button.normal.textStyle.fontStyle),u(t,"color",o.button.normal.textStyle.color),u(t,"background",o.button.normal.background),u(t,"border",o.button.normal.border.borderWidth+"px "+o.button.normal.border.borderStyle+" "+o.button.normal.border.borderColor),u(t,"border-left","none"),u(t,"border-radius","0 "+o.button.normal.border.borderRadius+"px "+o.button.normal.border.borderRadius+"px 0"),t))},resize:function(t,o){this.render(null,{width:t,height:o})},mergeConfig:function(t){return t&&(this.config=d.defaultsDeep(t||{},this.config)),this.config},destroy:function(){clearTimeout(this.timer),this.timer=null,this.button&&this.button.off(),this.input&&this.input.off(),this.container.empty()},eventEmit:function(t,o){var n=this,e=o?"button-clicked":"input-changed";clearTimeout(this.timer),this.timer=setTimeout(function(){n.emit(e,{value:t})},300)},data:function(t){return t&&(this._data=t),this._data},getFieldValue:function(){return{value:this.value}},resetField:function(){this.render([{value:""}])}}),t.exports});