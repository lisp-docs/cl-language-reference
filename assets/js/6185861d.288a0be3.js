"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[492],{7475:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>m,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>h,toc:()=>j});var t=s(5893),c=s(1151);function r(e){const n={em:"em",p:"p",strong:"strong",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"7.4 Meta-Objects"})}),"\n",(0,t.jsxs)(n.p,{children:["The implementation of the object system manipulates ",(0,t.jsx)(n.em,{children:"classes"}),", ",(0,t.jsx)(n.em,{children:"methods"}),", and ",(0,t.jsx)(n.em,{children:"generic functions"}),". The object system contains a set of ",(0,t.jsx)(n.em,{children:"generic functions"})," defined by ",(0,t.jsx)(n.em,{children:"methods"})," on ",(0,t.jsx)(n.em,{children:"classes"}),"; the behavior of those ",(0,t.jsx)(n.em,{children:"generic functions"})," defines the behavior of the object system. The ",(0,t.jsx)(n.em,{children:"instances"})," of the ",(0,t.jsx)(n.em,{children:"classes"})," on which those ",(0,t.jsx)(n.em,{children:"methods"})," are defined are called meta-objects."]})]})}function a(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}function i(e){const n={em:"em",p:"p",strong:"strong",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"7.4.1 Standard Meta-objects"})}),"\n",(0,t.jsxs)(n.p,{children:["The object system supplies a set of meta-objects, called standard meta-objects. These include the ",(0,t.jsx)(n.em,{children:"class"})," ",(0,t.jsx)(n.strong,{children:"standard-object"})," and ",(0,t.jsx)(n.em,{children:"instances"})," of the classes ",(0,t.jsx)(n.strong,{children:"standard-method"}),", ",(0,t.jsx)(n.strong,{children:"standard-generic-function"}),", and ",(0,t.jsx)(n.strong,{children:"method-combination"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"\u2022"})," The ",(0,t.jsx)(n.em,{children:"class"})," ",(0,t.jsx)(n.strong,{children:"standard-method"})," is the default ",(0,t.jsx)(n.em,{children:"class"})," of ",(0,t.jsx)(n.em,{children:"methods"})," defined by the ",(0,t.jsx)(n.strong,{children:"defmethod"})," and ",(0,t.jsx)(n.strong,{children:"defgeneric"})," ",(0,t.jsx)(n.em,{children:"forms"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"\u2022"})," The ",(0,t.jsx)(n.em,{children:"class"})," ",(0,t.jsx)(n.strong,{children:"standard-generic-function"})," is the default ",(0,t.jsx)(n.em,{children:"class"})," of ",(0,t.jsx)(n.em,{children:"generic functions"})," defined by the forms ",(0,t.jsx)(n.strong,{children:"defmethod"}),", ",(0,t.jsx)(n.strong,{children:"defgeneric"}),", and ",(0,t.jsx)(n.strong,{children:"defclass"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"\u2022"})," The ",(0,t.jsx)(n.em,{children:"class"})," named ",(0,t.jsx)(n.strong,{children:"standard-object"})," is an ",(0,t.jsx)(n.em,{children:"instance"})," of the ",(0,t.jsx)(n.em,{children:"class"})," ",(0,t.jsx)(n.strong,{children:"standard-class"})," and is a ",(0,t.jsx)(n.em,{children:"superclass"})," of every ",(0,t.jsx)(n.em,{children:"class"})," that is an ",(0,t.jsx)(n.em,{children:"instance"})," of ",(0,t.jsx)(n.strong,{children:"standard-class"})," except itself and ",(0,t.jsx)(n.strong,{children:"structure-class"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"\u2022"})," Every ",(0,t.jsx)(n.em,{children:"method"})," combination object is an ",(0,t.jsx)(n.em,{children:"instance"})," of a ",(0,t.jsx)(n.em,{children:"subclass"})," of ",(0,t.jsx)(n.em,{children:"class"})," ",(0,t.jsx)(n.strong,{children:"method-combination"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}const o={title:"7.4 Meta"},l="7.4 Meta",h={id:"chap-7/h-e-metaobjects",title:"7.4 Meta",description:"7.4.1 Standard Meta",source:"@site/docs/chap-7/h-e-metaobjects.md",sourceDirName:"chap-7",slug:"/chap-7/h-e-metaobjects",permalink:"/cl-language-reference/docs/chap-7/h-e-metaobjects",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/chap-7/h-e-metaobjects.md",tags:[],version:"current",frontMatter:{title:"7.4 Meta"},sidebar:"tutorialSidebar",previous:{title:"7.3 Reinitializing an Instance",permalink:"/cl-language-reference/docs/chap-7/h-d-reinitializing-an-instance"},next:{title:"7.5 Slots",permalink:"/cl-language-reference/docs/chap-7/h-f-slots"}},m={},j=[{value:"7.4.1 Standard Meta",id:"741-standard-meta",level:2}];function x(e){const n={h1:"h1",h2:"h2",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"74-meta",children:"7.4 Meta"}),"\n","\n",(0,t.jsx)(a,{}),"\n",(0,t.jsx)(n.h2,{id:"741-standard-meta",children:"7.4.1 Standard Meta"}),"\n","\n","\n",(0,t.jsx)(d,{})]})}function u(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>a});var t=s(7294);const c={},r=t.createContext(c);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);