// env=undefined => env=publish 
Cube("datav:/com/datav-box/1.3.11",["datav:/com/bg-box/1.5.0","datav:/npm/bcore/0.0.18/event","datav:/npm/lodash/4.6.1","datav:/npm/jquery/2.1.4"],function(a,b,c){var d=c("datav:/npm/bcore/0.0.18/event"),e=c("datav:/com/bg-box/1.5.0"),f=c("datav:/npm/lodash/4.6.1"),g=c("datav:/npm/jquery/2.1.4"),h={ifCustomBorder:!0,background:"rgba(0, 0, 0, 0.5)",borderRadius:{topLeft:0,bottomLeft:0,topRight:0,bottomRight:0},customBorderStyle:{borderImageSrc:"https://img.alicdn.com/tps/TB1zJdKMXXXXXcWXpXXXXXXXXXX-116-115.png",slice:!0,borderImageStyle:"14",borderStyle:"solid",borderWidth:"14px",innerBackground:"rgba(29,22,52,0.5)",background:"rgba(0,0,0,0)"},filter:{blur:"0px"},backdropFilter:{blur:"0px"}};return a.exports=d.extend(function(a,b){this.container=g(a),this.config={theme:{},"box-style":{style:"box1"}},this.boxs={box1:{borderImageSrc:"https://img.alicdn.com/tps/TB1DjqJMpXXXXclXXXXXXXXXXXX-126-154.png",borderImageStyle:"71 23",borderStyle:"solid",borderWidth:"71px 23px",innerBackground:"none",background:"none",slice:!0},box2:{borderImageSrc:"https://datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/a7c93134c5e1440c58b1a7a3b675009b.png",borderImageStyle:"32 37 fill",borderStyle:"solid",borderWidth:"32px 37px",innerBackground:"none",background:"none",slice:!0},box3:{borderImageSrc:"https://img.alicdn.com/tps/TB1zJdKMXXXXXcWXpXXXXXXXXXX-116-115.png",borderImageStyle:"14 fill",borderStyle:"solid",borderWidth:"14px",innerBackground:"none",background:"none",slice:!0},box4:{borderImageSrc:"https://datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/d92a1a8c99a933c0e9ca54865242fcc8.png",borderImageStyle:"14 100",borderStyle:"solid",borderWidth:"14px 100px",innerBackground:"none",background:"none",slice:!0},box5:{borderImageSrc:"https://img.alicdn.com/tfs/TB1SOJ.QXXXXXbgXXXXXXXXXXXX-689-232.png",borderImageStyle:"46 305 117 33 fill repeat",borderStyle:"solid",borderWidth:"46px 305px 117px 33px",innerBackground:"none",background:"none",slice:!0},box6:{borderImageSrc:"https://datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/3a5463c54764cada51394b4aa81a8c84.png",borderImageStyle:"45 103 51 29 fill repeat",borderStyle:"solid",borderWidth:"45px 103px 51px 29px",innerBackground:"none",background:"none",slice:!0},box7:{borderImageStyle:"29 107 109 16 fill repeat",borderStyle:"solid",borderWidth:"29px 107px 109px 16px",innerBackground:"none",background:"none",slice:!0},box8:{borderImageStyle:"15 11 16 8 fill repeat",borderStyle:"solid",borderWidth:"15px 11px 16px 8px",innerBackground:"none",background:"none",slice:!0},box9:{borderImageStyle:"152 27 127 354 fill repeat",borderStyle:"solid",borderWidth:"152px 27px 127px 354px",innerBackground:"none",background:"none",slice:!0},box10:{borderImageStyle:"56 4 76 393 fill repeat",borderStyle:"solid",borderWidth:"56px 4px 76px 393px",innerBackground:"none",background:"none",slice:!0},box11:{borderImageStyle:"17 24 18 19 fill repeat",borderStyle:"solid",borderWidth:"17px 24px 18px 19px",innerBackground:"none",background:"none",slice:!0},box12:{borderImageSrc:"https://img.alicdn.com/tfs/TB1EZQ8sAvoK1RjSZFDXXXY3pXa-580-742.png",borderImageStyle:"71 23 71 23 fill",borderWidth:"71px 23px 71px 23Px",borderStyle:"solid",innerBackground:"none",background:"none",slice:!0},box13:{borderImageSrc:"https://img.alicdn.com/tfs/TB1Ug0dsNYaK1RjSZFnXXa80pXa-1186-616.png",borderImageStyle:"288 500 272 680 fill repeat",borderStyle:"solid",borderWidth:"288px 500px 272px 680px",innerBackground:"none",background:"none",slice:!0},box14:{borderImageSrc:"https://img.alicdn.com/tfs/TB1Ls76swHqK1RjSZJnXXbNLpXa-1168-686.png",borderImageStyle:"220 664 460 500 fill repeat",borderStyle:"solid",borderWidth:"220px 664px 460px 500px",innerBackground:"none",background:"none",slice:!0},box15:{borderImageSrc:"https://img.alicdn.com/tfs/TB1rNH2tNjaK1RjSZKzXXXVwXXa-1270-840.png",borderImageStyle:"423 606 410 652 fill repeat",borderStyle:"solid",borderWidth:"423px 606px 410px 652px",innerBackground:"none",background:"none",slice:!0},box16:{borderImageSrc:"https://img.alicdn.com/tfs/TB13.FNsSzqK1RjSZFHXXb3CpXa-1390-146.png",borderImageStyle:"101 690 35 693 fill repeat",borderStyle:"solid",borderWidth:"101px 690px 35px 693px",innerBackground:"none",background:"none",slice:!0},box17:{borderImageSrc:"https://img.alicdn.com/tfs/TB1PUJMsMTqK1RjSZPhXXXfOFXa-1310-182.png",borderImageStyle:"65 740 88 561 fill repeat",borderStyle:"solid",borderWidth:"65px 740px 88px 560px",innerBackground:"none",background:"none",slice:!0},box18:{borderImageSrc:"https://img.alicdn.com/tfs/TB1UCBJsRLoK1RjSZFuXXXn0XXa-1540-292.png",borderImageStyle:"4 805 281 730 fill repeat",borderStyle:"solid",borderWidth:"4px 805px 281px 730px",innerBackground:"none",background:"none",slice:!0}},this.init(b)},{init:function(a){this.config=f.defaultsDeep(a||{},this.config);var b=this.config["box-style"].style,c=this.boxs[b];c.borderImageSrc=this.config["bg"+b],this.chart=new e(this.container[0],f.defaultsDeep({customBorderStyle:c},h))},render:function(a,b){var b=this.config=f.defaultsDeep(b||{},this.config),c=b["box-style"].style,d=this.boxs[c];d.borderImageSrc=b["bg"+c],this.chart.render(null,f.defaultsDeep({customBorderStyle:d},h))},destroy:function(){this.container.empty(),this._data=null}}),a.exports});