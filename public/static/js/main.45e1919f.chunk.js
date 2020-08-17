(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{10:function(e,t,n){e.exports=n.p+"static/media/logo.855a8c98.svg"},12:function(e,t,n){e.exports=n(18)},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),c=n.n(o),i=(n(17),n(11)),s=n(1),l=n(10),u=n.n(l);var p=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("img",{className:"header__logo",src:u.a,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u041c\u0435\u0441\u0442\u043e"}))},m=n(2),d=n(3),h=n(5),_=n(4),f=r.a.createContext(),v=function(e){Object(h.a)(n,e);var t=Object(_.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleClick=function(){e.props.onCardClick(e.props)},e.handleLikeClick=function(){e.props.onCardLike(e.props.card)},e.handleDeleteClick=function(){e.props.onCardDelete(e.props.card)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.props.card,n=t.owner._id===this.context._id,a="elements__trash-button ".concat(n?"elements__trash-button_active":""),o=t.likes.some((function(t){return t._id===e.context._id})),c="elements__like-button ".concat(o?"elements__like-button_active":"");return r.a.createElement("div",{className:"elements__element"},r.a.createElement("img",{className:"elements__image",alt:t.name,src:t.link,onClick:this.handleClick}),r.a.createElement("button",{className:"".concat(a),onClick:this.handleDeleteClick}),r.a.createElement("div",{className:"elements__group"},r.a.createElement("p",{className:"elements__place"},t.name),r.a.createElement("div",{className:"elements__like-container"},r.a.createElement("button",{className:"".concat(c),onClick:this.handleLikeClick}),r.a.createElement("p",{className:"elements__like-count"},t.likes.length))))}}]),n}(r.a.Component);v.contextType=f;var b=v,E=function(e){Object(h.a)(n,e);var t=Object(_.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onCardClick=function(t){e.props.handleCardClick(t)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("main",{className:"content"},r.a.createElement("section",{className:"profile"},r.a.createElement("div",{className:"profile__avatar-container"},r.a.createElement("div",{className:"profile__overlay",onClick:this.props.onEditAvatar}),r.a.createElement("img",{className:"profile__avatar",src:this.context.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440"})),r.a.createElement("div",{className:"profile__info"},r.a.createElement("div",{className:"profile__heading-info"},r.a.createElement("p",{className:"profile__name"},this.context.name),r.a.createElement("button",{className:"profile__edit-button",onClick:this.props.onEditProfile})),r.a.createElement("p",{className:"profile__job"},this.context.about)),r.a.createElement("button",{className:"profile__add-button",onClick:this.props.onAddPlace})),r.a.createElement("section",{className:"elements"},this.props.cards.map((function(t){return r.a.createElement(b,{key:t._id,card:t,onCardClick:e.onCardClick,onCardLike:e.props.handleCardLike,onCardDelete:e.props.handleCardDelete})}))))}}]),n}(r.a.Component);E.contextType=f;var k=E;var C=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",{className:"footer__copyright"},"\xa9 2020 Mesto Russia"))};var g=function(e){var t=e.onSubmit,n=e.name,a=e.isOpen,o=e.onClose,c=e.title,i=e.children,s=e.submit,l=e.isLoading;return r.a.createElement("div",{className:"popup popup_type_".concat(n," ").concat(a&&"popup_opened")},r.a.createElement("div",{className:"popup__container popup__container_type_".concat(n)},r.a.createElement("button",{type:"button",className:"popup__close-button",onClick:o}),r.a.createElement("form",{className:"popup__forms popup__forms_".concat(n),onSubmit:t},r.a.createElement("h2",{className:"popup__heading"},c),i,r.a.createElement("div",{className:"popup__handlers"},r.a.createElement("button",{type:"submit",className:"popup__submit-button"},l?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":s)))))};var O=function(e){var t=e.isOpen,n=e.onClose,o=e.onUpdateUser,c=e.isLoading,i=r.a.useContext(f),l=Object(a.useState)(""),u=Object(s.a)(l,2),p=u[0],m=u[1],d=Object(a.useState)(""),h=Object(s.a)(d,2),_=h[0],v=h[1];return r.a.useEffect((function(){m(i.name),v(i.about)}),[i]),r.a.createElement(g,{name:"edit-profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",submit:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),o({name:p,about:_})},isLoading:c},r.a.createElement("input",{type:"text",className:"popup__input popup__input_name",id:"name-input",name:"name",defaultValue:p,placeholder:"\u0418\u043c\u044f",minLength:"2",maxLength:"40",pattern:"[A-Za-z\u0430-\u044f\u0451\u0410-\u042f\u0401 -]{1,}",required:!0,onChange:function(e){m(e.target.value)}}),r.a.createElement("span",{id:"name-input-error",className:"popup__input_name-error"}),r.a.createElement("input",{type:"text",className:"popup__input popup__input_job",id:"job-input",name:"job",defaultValue:_,placeholder:"\u041e \u0441\u0435\u0431\u0435",minLength:"2",maxLength:"200",required:!0,onChange:function(e){v(e.target.value)}}),r.a.createElement("span",{id:"job-input-error",className:"popup__input_name-error"}))};var N=function(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateAvatar,o=e.isLoading,c=r.a.useRef("");return r.a.useEffect((function(){c.current.value=""}),[t]),r.a.createElement(g,{name:"avatar-edit",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",submit:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({avatar:c.current.value})},isLoading:o},r.a.createElement("input",{type:"url",className:"popup__input popup__input_avatar-edit",id:"avatar-edit-input",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",required:!0,ref:c}),r.a.createElement("span",{id:"avatar-edit-input-error",className:"popup__input_name-error"}))};var y=function(e){var t=e.isOpen,n=e.onClose,a=e.onAddPlace,o=e.isLoading,c=r.a.useRef(""),i=r.a.useRef("");return r.a.useEffect((function(){c.current.value="",i.current.value=""}),[t]),r.a.createElement(g,{name:"new-card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",submit:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({name:c.current.value,link:i.current.value})},isLoading:o},r.a.createElement("input",{type:"text",className:"popup__input popup__input_card-name",id:"card-name-input",name:"name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"1",maxLength:"30",required:!0,ref:c}),r.a.createElement("span",{id:"card-name-input-error",className:"popup__input_name-error"}),r.a.createElement("input",{type:"url",className:"popup__input popup__input_card-link",id:"card-link-input",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,ref:i}),r.a.createElement("span",{id:"card-link-input-error",className:"popup__input_name-error"}))},j=function(e){Object(h.a)(n,e);var t=Object(_.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"popup popup_type_card-open ".concat(this.props.isOpen&&"popup_opened")},r.a.createElement("div",{className:"popup__container popup__container_card-open"},r.a.createElement("button",{className:"popup__close-button",type:"button",onClick:this.props.onClose}),r.a.createElement("img",{className:"popup__photo",alt:this.props.name,src:this.props.link}),r.a.createElement("p",{className:"popup__description"},this.props.name)))}}]),n}(r.a.Component),L=new(function(){function e(t){Object(m.a)(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}return Object(d.a)(e,[{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._returnErrorResponse)}},{key:"_returnErrorResponse",value:function(e){if(e.ok)return e.json();Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._returnErrorResponse)}},{key:"setUserInfo",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._returnErrorResponse)}},{key:"setAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._returnErrorResponse)}},{key:"addCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._returnErrorResponse)}},{key:"removeCard",value:function(e,t){if(!t)return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._returnErrorResponse)}},{key:"changeLikeCardStatus",value:function(e,t){return t?fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._returnErrorResponse):fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._returnErrorResponse)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-12",headers:{authorization:"23e3d2ae-f405-4f8e-a432-7a3c52096726","Content-Type":"application/json"}});var U=function(){var e=Object(a.useState)({}),t=Object(s.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)([]),l=Object(s.a)(c,2),u=l[0],m=l[1];r.a.useEffect((function(){L.getUserInfo().then((function(e){o(e)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))}),[]),r.a.useEffect((function(){L.getInitialCards().then((function(e){m(e)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))}),[u]);var d=Object(a.useState)(!1),h=Object(s.a)(d,2),_=h[0],v=h[1],b=Object(a.useState)(!1),E=Object(s.a)(b,2),U=E[0],S=E[1],x=Object(a.useState)(!1),w=Object(s.a)(x,2),A=w[0],R=w[1],P=Object(a.useState)(),D=Object(s.a)(P,2),I=D[0],T=D[1],q=Object(a.useState)({isImageOpen:!1,link:"",name:""}),J=Object(s.a)(q,2),z=J[0],B=J[1];function H(){v(!1),R(!1),S(!1),B({isImageOpen:!1,link:"",name:""})}return r.a.createElement(f.Provider,{value:n},r.a.createElement("div",{className:"page"},r.a.createElement(p,null),r.a.createElement(k,{onEditProfile:function(){v(!0)},onAddPlace:function(){S(!0)},onEditAvatar:function(){R(!0)},handleCardClick:function(e){var t=e.card,n=t.link,a=t.name;B({isImageOpen:!0,link:n,name:a})},handleCardLike:function(e){var t=e.likes.some((function(e){return e._id===n._id}));L.changeLikeCardStatus(e._id,!t).then((function(t){var n=u.map((function(n){return n._id===e._id?t:n}));m(n)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))},handleCardDelete:function(e){var t=e.owner._id===n._id;L.removeCard(e._id,!t).then((function(t){var n=u.filter((function(n){return n._id===e._id?!t:n}));m(n)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))},cards:u}),r.a.createElement(C,null),r.a.createElement(O,{isOpen:_,onClose:H,onUpdateUser:function(e){T(!0),L.setUserInfo(e).then((function(e){o(e),H()})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))})).finally((function(){return T(!1)}))},isLoading:I}),r.a.createElement(y,{isOpen:U,onClose:H,onAddPlace:function(e){T(!0),L.addCard(e).then((function(e){m([].concat(Object(i.a)(u),[e])),H()})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))})).finally((function(){return T(!1)}))},isLoading:I}),r.a.createElement(N,{isOpen:A,onClose:H,onUpdateAvatar:function(e){T(!0),L.setAvatar(e).then((function(e){o(e),H()})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))})).finally((function(){return T(!1)}))},isLoading:I}),r.a.createElement(g,{name:"card-remove",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",submit:"\u0414\u0430",onClose:H}),r.a.createElement(j,{name:z.name,link:z.link,onClose:H,isOpen:z.isImageOpen})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.45e1919f.chunk.js.map