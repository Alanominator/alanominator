"use strict";(self.webpackChunkalanominator=self.webpackChunkalanominator||[]).push([[303],{7322:function(e,r){r.Z={form_wrapper:"editingPages_form_wrapper__jUVi3",top_wrapper:"editingPages_top_wrapper__27tcK",btn:"editingPages_btn__hISJi",errorMessageWrapper:"editingPages_errorMessageWrapper__AamDs",errorMessage:"editingPages_errorMessage__s7QUV"}},2208:function(e,r,a){a.d(r,{U:function(){return o}});var n=a(5861),t=a(885),s=a(7757),i=a.n(s),c=a(390),o=function(e){var r=(0,c.useState)(!1),a=(0,t.Z)(r,2),s=a[0],o=a[1],u=(0,c.useState)(""),l=(0,t.Z)(u,2),p=l[0],d=l[1],_=function(){var r=(0,n.Z)(i().mark((function r(){var a=arguments;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,o(!0),r.next=4,e.apply(void 0,a);case 4:r.next=9;break;case 6:r.prev=6,r.t0=r.catch(0),d(r.t0.message);case 9:return r.prev=9,o(!1),r.finish(9);case 12:case"end":return r.stop()}}),r,null,[[0,6,9,12]])})));return function(){return r.apply(this,arguments)}}();return[_,s,p]}},8303:function(e,r,a){a.r(r),a.d(r,{default:function(){return S}});var n=a(5861),t=a(885),s=a(7757),i=a.n(s),c=a(390),o=a(3041),u=a(7322),l=a(5453),p=a(2163),d=a(2208),_=a(5133),h=a.n(_),f=a(2619),m=a(361),v=a(4837),x=a(5980),b=a(1750),g=a(847),j=a(4487),w=a(1413),Z=a(4925),k="FormTextarea_textarea__leRyX",N=a(2559),y=["label","name"];var M=function(e){var r=e.label,a=e.name,n=(0,Z.Z)(e,y);return(0,N.jsxs)("div",{children:[(0,N.jsx)("label",{htmlFor:a,children:r}),(0,N.jsx)(p.gN,(0,w.Z)({className:k,as:"textarea",id:a,name:a},n)),(0,N.jsx)(p.Bc,{name:a})]})};var S=function(){var e=(0,m.s0)(),r=(0,b.v9)((function(e){return e.auth.user.about})),a={bio:r},s=l.Ry().shape({bio:l.Z_().max(500)}),_=(0,c.useState)([]),w=(0,t.Z)(_,2),Z=w[0],k=w[1],y=(0,d.U)(function(){var a=(0,n.Z)(i().mark((function a(n){var t;return i().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!((t=n).bio===r)){a.next=5;break}return e(-1),a.abrupt("return");case 5:return a.next=7,h().post("".concat(f.rh,"/users/edit_bio/"),t,{headers:(0,f.wU)()}).then((function(r){k([]),v.h.dispatch({type:x.Pk,payload:r.data.user}),e(-1)})).catch((function(e){var r,a;switch(console.log(null===(r=e.response)||void 0===r?void 0:r.status),null===(a=e.response)||void 0===a?void 0:a.status){case 400:k(e.response.data.messages);break;case 401:k(["Unauthorized"]);break;case 500:k(["Internal Server Error"]);break;default:k(["Smth went wrong. Try again"])}}));case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()),S=(0,t.Z)(y,2),P=S[0],U=S[1];return(0,N.jsxs)(j.Z,{children:[U&&(0,N.jsx)("div",{className:"loader_wrapper",children:(0,N.jsx)(g.Z,{})}),(0,N.jsx)(p.J9,{initialValues:a,validationSchema:s,onSubmit:function(e){P(e)},children:function(e){e.errors,e.touched;return(0,N.jsxs)(p.l0,{className:u.Z.form_wrapper,children:[(0,N.jsxs)("div",{className:u.Z.top_wrapper,children:[(0,N.jsx)(o.Z,{}),(0,N.jsx)("span",{children:"Edit username"}),(0,N.jsx)("button",{className:u.Z.btn,type:"submit",children:"Hello"})]}),(0,N.jsx)(M,{name:"bio",label:"Bio",autoFocus:!0}),Z&&(0,N.jsx)("div",{className:u.Z.errorMessageWrapper,children:Z.map((function(e,r){return(0,N.jsx)("span",{className:u.Z.errorMessage,children:e},r)}))})]})}})]})}},3041:function(e,r,a){a.d(r,{Z:function(){return c}});a(390);var n="GoBack_wrapper__hQ1MT",t="GoBack_arrow_icon__n2l5R",s=a(361),i=a(2559);var c=function(){var e=(0,s.s0)();return(0,i.jsx)("span",{onClick:function(){e(-1)},className:n,children:(0,i.jsx)("span",{className:t,children:"<-"})})}},4487:function(e,r,a){a.d(r,{Z:function(){return i}});a(390);var n="MainLayout_main_wrapper__Y7jWB",t="MainLayout_main_content_wrapper__LrLzF",s=a(2559);var i=function(e){var r=e.children;return(0,s.jsx)("div",{className:n,children:(0,s.jsx)("div",{className:t,children:r})})}}}]);
//# sourceMappingURL=303.eb79eff5.chunk.js.map