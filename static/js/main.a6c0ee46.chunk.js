(this["webpackJsonpmua-messenger-meme"]=this["webpackJsonpmua-messenger-meme"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var s,n=a(0),c=a.n(n),l=a(7),i=a.n(l),r=(a(13),a(5)),m=a(1),u=a(2),o=a(4),d=a(3);!function(e){e[e.Sent=0]="Sent",e[e.Received=1]="Received"}(s||(s={}));var g=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:this.props.messageType===s.Received?"messages messages--received":"messages messages--sent"},this.props.messages.map((function(e){return c.a.createElement("div",{className:"message"},e)})))}}]),a}(c.a.Component),p=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"screen"},c.a.createElement("div",{className:"text-bar"},c.a.createElement("form",{className:"text-bar__field"},c.a.createElement("div",{className:"header header-img"},c.a.createElement("img",{src:this.props.displayImage,alt:"DP"}),c.a.createElement("div",{className:"active"})),c.a.createElement("div",{className:"header-details"},c.a.createElement("div",null,this.props.displayName),c.a.createElement("div",null,"Active now")))),c.a.createElement("div",{className:"conversation"},this.props.messages.map((function(e){return c.a.createElement(g,{messages:e.messages,messageType:e.messageType,time:e.time,isRemoved:e.isRemoved})}))),c.a.createElement("div",{className:"text-bar"},c.a.createElement("form",{className:"text-bar__field"},c.a.createElement("input",{type:"text",placeholder:"Type a message"})),c.a.createElement("div",{className:"text-bar__thumb"},c.a.createElement("div",{className:"thumb"})))))}}]),a}(c.a.Component),h=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={temMessage:"",messages:[],temMessages:[],isBulk:!0,displayPicture:"https://avatars3.githubusercontent.com/u/29339330?s=460&u=adb4c9845d1c063c9d71843bc0d56cebf7f46e5b&v=4",displayName:"Name"},e.message=function(t){e.setState({messages:[].concat(Object(r.a)(e.state.messages),[{messages:e.state.isBulk?e.state.temMessages:""===e.state.temMessage?[]:[e.state.temMessage],messageType:t}])})},e.onDisplayPictureChange=function(t){""!==t.target.value?e.setState({displayPicture:t.target.value}):e.setState({displayPicture:"https://avatars3.githubusercontent.com/u/29339330?s=460&u=adb4c9845d1c063c9d71843bc0d56cebf7f46e5b&v=4"})},e.onMessageChange=function(t){e.setState({temMessage:t.target.value})},e.onDisplayNameChange=function(t){e.setState({displayName:t.target.value})},e.onBulkChange=function(t){e.setState({isBulk:t.target.checked})},e.bulkAdd=function(){e.state.isBulk&&e.state.temMessage&&e.setState({temMessages:[].concat(Object(r.a)(e.state.temMessages),[e.state.temMessage])})},e.clearBulk=function(){e.setState({temMessages:[]})},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"side"},c.a.createElement("div",{className:"side-left"},c.a.createElement("div",null,c.a.createElement("input",{placeholder:"Message",onChange:function(t){e.onMessageChange(t)}})),c.a.createElement("div",null,c.a.createElement("input",{placeholder:"Display Picture URL",onChange:function(t){e.onDisplayPictureChange(t)}})),c.a.createElement("div",null,c.a.createElement("input",{placeholder:"Display Name",onChange:function(t){e.onDisplayNameChange(t)}})),c.a.createElement("button",{onClick:function(){e.message(s.Sent)}},"Send"),c.a.createElement("button",{onClick:function(){e.message(s.Received)}},"Receive"),c.a.createElement("label",null,"Is Bulk"),c.a.createElement("input",{checked:this.state.isBulk,onChange:function(t){return e.onBulkChange(t)},type:"checkbox"}),this.state.isBulk&&c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){e.clearBulk()}},"Clear Bulk"),c.a.createElement("button",{onClick:function(){e.bulkAdd()}},"Bulk Add"),this.state.temMessages.map((function(e){return c.a.createElement("li",null,e)})))),c.a.createElement("div",{className:"side-right"},c.a.createElement(p,{displayName:this.state.displayName,displayImage:this.state.displayPicture,messages:this.state.messages})))}}]),a}(c.a.Component);i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null)),document.getElementById("root"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.a6c0ee46.chunk.js.map