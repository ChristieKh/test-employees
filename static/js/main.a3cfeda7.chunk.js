(this.webpackJsonpuntitled1=this.webpackJsonpuntitled1||[]).push([[0],{10:function(e,a,t){e.exports={"Cards-employees__card":"cards-employees_Cards-employees__card__3wyoO","Cards-employees__card-active":"cards-employees_Cards-employees__card-active__1KvCL"}},13:function(e,a,t){e.exports={Page:"page_Page__3vgy7",Page__wrapper:"page_Page__wrapper__3iyKX",Page__content:"page_Page__content__3YKYd","Page__cards-box":"page_Page__cards-box__1-1mZ","Page__form-box":"page_Page__form-box__1-y-I",Text:"page_Text__1twXA"}},17:function(e,a,t){e.exports=t(23)},22:function(e,a,t){},23:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(7),r=t.n(l),o=(t(22),t(8)),m=t(15),s=t(5),d=t(1),i=t.n(d),p=t(3),u=t(9),_=t.n(u),b=i.a.bind(_.a),h=Object(n.memo)((function(e){var a=e.employer,t=a.person,n=a.work,l=a.birthday,r=e.gender,o=e.employ;return c.a.createElement("div",{className:b("Item-card")},c.a.createElement("div",{className:b("".concat("Item-card","__block"),"".concat("Item-card","__person"))},c.a.createElement("p",{className:b("".concat("Item-card","__label"),"".concat("Item-card","__person-label"))},"\u0424\u0418\u041e \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430:"),c.a.createElement("p",{className:b("".concat("Item-card","__person-text"))},t)),c.a.createElement("div",{className:b("".concat("Item-card","__block"),"".concat("Item-card","__work"))},c.a.createElement("p",{className:b("".concat("Item-card","__label"),"".concat("Item-card","__work-label"))},"\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c:"),c.a.createElement("p",{className:b("".concat("Item-card","__work-text"))},n)),c.a.createElement("div",{className:b("".concat("Item-card","__block"),"".concat("Item-card","__birthday"))},c.a.createElement("p",{className:b("".concat("Item-card","__label"),"".concat("Item-card","__birthday-label"))},"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f:"),c.a.createElement("p",{className:b("".concat("Item-card","__birthday-text"))},l)),c.a.createElement("div",{className:b("".concat("Item-card","__block"),"".concat("Item-card","__gender"))},c.a.createElement("p",{className:b("".concat("Item-card","__label"),"".concat("Item-card","__gender-label"))},"\u041f\u043e\u043b:"),c.a.createElement("p",{className:b("".concat("Item-card","__gender-text"))},r)),c.a.createElement("div",{className:b("".concat("Item-card","__block"),"".concat("Item-card","__employ"))},c.a.createElement("p",{className:b("".concat("Item-card","__label"),"".concat("Item-card","__employ-label"))},"\u0423\u0432\u043e\u043b\u0435\u043d:"),c.a.createElement("p",{className:b("".concat("Item-card","__employ-text"))},o)))})),f=t(10),E=t.n(f),g=i.a.bind(E.a),y=Object(n.memo)((function(e){var a=e.employeesData,t=e.selectItem,l=e.activeItem;return c.a.createElement("div",{className:g("Cards-employees")},a.map((function(e){var a=Object(n.useMemo)((function(){return l===e.id}),[l,e]),r=Object(n.useMemo)((function(){return"m"===e.gender?"\u043c\u0443\u0436\u0441\u043a\u043e\u0439":"\u0436\u0435\u043d\u0441\u043a\u0438\u0439"}),[e]),o=Object(n.useMemo)((function(){return Boolean(e.employ)?"\u0434\u0430":"\u043d\u0435\u0442"}),[e]),m=Object(n.useCallback)((function(){return t(e.id)}),[e]);return c.a.createElement("div",{className:g("".concat("Cards-employees","__card"),Object(p.a)({},"".concat("Cards-employees","__card-active"),a)),key:e.id,role:"button",tabIndex:0,onClick:m},c.a.createElement(h,{employer:e,gender:r,employ:o}))})))})),I=t(11),v=t(12),k=t(16),C=t(14),N=Object(n.memo)((function(e){var a=e.addItem,t=e.deleteItem;return c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{className:"btn btn-add blue",onClick:a},c.a.createElement("span",null,c.a.createElement("i",{className:"fa fa-plus"}),"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430")),c.a.createElement("button",{className:"btn btn-del blue",onClick:t},c.a.createElement("span",null,c.a.createElement("i",{className:"fa fa-remove"}),"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430")))})),w=function(e){Object(k.a)(t,e);var a=Object(C.a)(t);function t(){var e;Object(I.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={person:null,work:null,birthday:null,gender:null,employ:null,validationError:!1},e.personRef=c.a.createRef(),e.workRef=c.a.createRef(),e.birthdayRef=c.a.createRef(),e.genderRef=c.a.createRef(),e.employRef=c.a.createRef(),e.onBtnClickAddHandler=function(a){var t=e.state,n=t.person,c=t.work,l=t.birthday,r=t.gender,o=t.employ;null===n||null===c||null===l||null===r||null===o?e.setState({validationError:!0}):(e.props.onAddItem({person:n,work:c,birthday:l,gender:r,employ:o}),e.setState({validationError:!1})),a.preventDefault()},e.onChangeItem=function(a){a.preventDefault();var t=e.state,n=t.person,c=t.work,l=t.birthday,r=t.gender,o=t.employ;e.props.onChangeItem({person:n,work:c,birthday:l,gender:r,employ:o})},e.handleInputValueChange=function(){e.setState({person:e.personRef.current.value,work:e.workRef.current.value,birthday:e.birthdayRef.current.value})},e.handleInputCheckChange=function(){e.setState({gender:e.genderRef.current.checked,employ:e.employRef.current.checked})},e.handleDeleteItem=function(e){e.preventDefault()},e}return Object(v.a)(t,[{key:"render",value:function(){var e=this.props,a=e.data,t=e.onDeleteItem;return c.a.createElement("div",{className:"form__box"},c.a.createElement("form",{className:"form card-content"},this.state.validationError&&c.a.createElement("div",{className:"card-panel red darken-1 center"},"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0432\u0441\u0435 \u043f\u043e\u043b\u044f!"),c.a.createElement(N,{addItem:this.onBtnClickAddHandler,deleteItem:t}),c.a.createElement("label",null,"\u0424\u0418\u041e"),c.a.createElement("input",{ref:this.personRef,type:"text",defaultValue:a?a.person:this.state.person,onChange:this.handleInputValueChange}),c.a.createElement("label",null,"\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c"),c.a.createElement("select",{className:"browser-default",onChange:this.handleInputValueChange,name:"option",ref:this.workRef},c.a.createElement("option",{selected:!0,disabled:!0,hidden:!0},a&&a.work),c.a.createElement("option",{value:"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a"},"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a"),c.a.createElement("option",{value:"\u0414\u0438\u0437\u0430\u0439\u043d\u0435\u0440"},"\u0414\u0438\u0437\u0430\u0439\u043d\u0435\u0440"),c.a.createElement("option",{value:"\u0410\u043d\u0430\u043b\u0438\u0442\u0438\u043a"},"\u0410\u043d\u0430\u043b\u0438\u0442\u0438\u043a"),c.a.createElement("option",{value:"\u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0449\u0438\u043a"},"\u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0449\u0438\u043a")),c.a.createElement("label",null,"\u0414\u0435\u043d\u044c \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f"),c.a.createElement("input",{type:"date",ref:this.birthdayRef,onChange:this.handleInputValueChange,defaultValue:a&&a.birthday}),c.a.createElement("label",{className:"gender"},"\u041f\u043e\u043b",c.a.createElement("p",null,c.a.createElement("label",null,c.a.createElement("input",{type:"radio",ref:this.genderRef,className:"with-gap",name:"gender",value:"m",defaultChecked:a&&"m"===a.gender,onChange:this.handleInputCheckChange}),c.a.createElement("span",null,"\u043c"))),c.a.createElement("p",null,c.a.createElement("label",null,c.a.createElement("input",{type:"radio",ref:this.genderRef,className:"with-gap",name:"gender",value:"w",defaultChecked:a&&"w"===a.gender,onChange:this.handleInputCheckChange}),c.a.createElement("span",null,"\u0436")))),c.a.createElement("p",{className:"employ"},c.a.createElement("label",null,c.a.createElement("input",{type:"checkbox",ref:this.employRef,defaultChecked:a?a.employ:this.state.employ,onChange:this.handleInputCheckChange}),c.a.createElement("span",null,"\u0421\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a \u0443\u0432\u043e\u043b\u0435\u043d"))),c.a.createElement("button",{className:"btn blue btn-change",onClick:this.onChangeItem},c.a.createElement("span",null,c.a.createElement("i",{className:"fa fa-pencil-square-o"}),"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"))))}}]),t}(c.a.Component),x=[{id:1,person:"\u041f\u0435\u0447\u043e\u0440\u0438\u043d \u0420\u043e\u043c\u0430\u043d \u0414\u0435\u043d\u0438\u0441\u043e\u0432\u0438\u0447",work:"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a",birthday:"2014-02-01",gender:"m",employ:!0},{id:2,person:"\u0412\u0430\u0441\u0438\u043b\u044c\u0435\u0432\u0430 \u0418\u0440\u0438\u043d\u0430 \u041f\u0435\u0442\u0440\u043e\u0432\u043d\u0430",work:"\u0410\u043d\u0430\u043b\u0438\u0442\u0438\u043a",birthday:"1992-12-25",gender:"w",employ:!0},{id:3,person:"\u0414\u0430\u043d\u0438\u043b\u043e\u0432 \u041a\u0438\u0440\u0438\u043b\u043b \u0421\u0435\u0440\u0433\u0435\u0435\u0432\u0438\u0447",work:"\u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0449\u0438\u043a",birthday:"1994-01-01",gender:"m",employ:!1}],O=t(13),R=t.n(O),j=void 0,P=i.a.bind(R.a),D=Object(n.memo)((function(){var e=Object(n.useState)(x),a=Object(s.a)(e,2),t=a[0],l=(a[1],Object(n.useState)(null)),r=Object(s.a)(l,2),d=r[0],i=r[1],p=Object(n.useCallback)((function(e){return i(e!==d?e:null)}),[]);return c.a.createElement("div",{className:P("Page")},c.a.createElement("div",{className:P("".concat("Page","__wrapper"))},c.a.createElement("div",{className:P("".concat("Page","__title"))},c.a.createElement("h1",{className:P("Text")},"\u0421\u043f\u0438\u0441\u043e\u043a \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u043e\u0432")),c.a.createElement("div",{className:P("".concat("Page","__content"))},c.a.createElement("div",{className:P("".concat("Page","__cards-box"))},c.a.createElement(y,{employeesData:t,selectItem:p,activeItem:d})),c.a.createElement("div",{className:P("".concat("Page","__form-box"))},c.a.createElement(w,{data:t[d-1],onAddItem:function(e){var a=[].concat(Object(m.a)(j.state.data),[e]);j.setState({employeesData:a})},onDeleteItem:function(){console.info("employeesData",x,d)},onChangeItem:function(e){var a=j.state,t=a.employeesData;t[a.activeItem];j.setState(Object(o.a)({},j.state,{data:t}))}})))))})),S=function(){return c.a.createElement(D,null)};r.a.render(c.a.createElement(S,null),document.getElementById("root"))},9:function(e,a,t){e.exports={"Item-card__block":"item-card_Item-card__block__1o2oD","Item-card__label":"item-card_Item-card__label__2lSW3"}}},[[17,1,2]]]);
//# sourceMappingURL=main.a3cfeda7.chunk.js.map