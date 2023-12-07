"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[94908],{65221:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>p});var l=n(85893),r=n(11151);function t(e){const s={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:"symbol-plist"})," ",(0,l.jsx)(s.em,{children:"Accessor"})]}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"Syntax:"})}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:"symbol-plist"})," ",(0,l.jsx)(s.em,{children:"symbol \u2192 plist"})]}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:"(setf (symbol-plist"})," ",(0,l.jsx)(s.em,{children:"symbol"}),"**)** ",(0,l.jsx)(s.em,{children:"new-plist"}),"**)**"]}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"Arguments and Values:"})}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.em,{children:"symbol"}),"\u2014a ",(0,l.jsx)(s.em,{children:"symbol"}),"."]}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.em,{children:"plist"}),", ",(0,l.jsx)(s.em,{children:"new-plist"}),"\u2014a ",(0,l.jsx)(s.em,{children:"property list"}),"."]}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"Description:"})}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.em,{children:"Accesses"})," the ",(0,l.jsx)(s.em,{children:"property list"})," of ",(0,l.jsx)(s.em,{children:"symbol"}),"."]}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"Examples:"})}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-lisp",children:"\n(setq sym (gensym)) \u2192 #:G9723 \n(symbol-plist sym) \u2192 () \n(setf (get sym \u2019prop1) \u2019val1) \u2192 VAL1 \n(symbol-plist sym) \u2192 (PROP1 VAL1) \n(setf (get sym \u2019prop2) \u2019val2) \u2192 VAL2 \n(symbol-plist sym) \u2192 (PROP2 VAL2 PROP1 VAL1) \n(setf (symbol-plist sym) (list \u2019prop3 \u2019val3)) \u2192 (PROP3 VAL3) \n(symbol-plist sym) \u2192 (PROP3 VAL3) \n\n"})}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"Exceptional Situations:"})}),"\n",(0,l.jsxs)(s.p,{children:["Should signal an error of ",(0,l.jsx)(s.em,{children:"type"})," ",(0,l.jsx)(s.strong,{children:"type-error"})," if ",(0,l.jsx)(s.em,{children:"symbol"})," is not a ",(0,l.jsx)(s.em,{children:"symbol"}),"."]}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"See Also:"})}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:"get"}),", ",(0,l.jsx)(s.strong,{children:"remprop"})]}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"Notes:"})}),"\n",(0,l.jsxs)(s.p,{children:["The use of ",(0,l.jsx)(s.strong,{children:"setf"})," should be avoided, since a ",(0,l.jsx)(s.em,{children:"symbol"}),"\u2019s ",(0,l.jsx)(s.em,{children:"property list"})," is a global resource that can contain information established and depended upon by unrelated programs in the same ",(0,l.jsx)(s.em,{children:"Lisp image"}),"."]}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"symbol-value"})})]})}function i(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(t,{...e})}):t(e)}const c={},o="symbol-plist",a={id:"chap-10/ba-c-dictionary/symbolplist",title:"symbol-plist",description:"Expanded Reference: symbol-plist",source:"@site/docs/chap-10/ba-c-dictionary/symbolplist.md",sourceDirName:"chap-10/ba-c-dictionary",slug:"/chap-10/ba-c-dictionary/symbolplist",permalink:"/cl-language-reference/docs/chap-10/ba-c-dictionary/symbolplist",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-10/ba-c-dictionary/symbolplist.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"symbol-package",permalink:"/cl-language-reference/docs/chap-10/ba-c-dictionary/symbolpackage"},next:{title:"symbol-value",permalink:"/cl-language-reference/docs/chap-10/ba-c-dictionary/symbolvalue"}},d={},p=[{value:"Expanded Reference: symbol-plist",id:"expanded-reference-symbol-plist",level:2}];function m(e){const s={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.h1,{id:"symbol-plist",children:"symbol-plist"}),"\n","\n","\n",(0,l.jsx)(i,{}),"\n",(0,l.jsx)(s.h2,{id:"expanded-reference-symbol-plist",children:"Expanded Reference: symbol-plist"}),"\n",(0,l.jsx)(s.admonition,{type:"tip",children:(0,l.jsx)(s.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-lisp",children:"(symbol-plist )\n"})})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(m,{...e})}):m(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>c,a:()=>i});var l=n(67294);const r={},t=l.createContext(r);function i(e){const s=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),l.createElement(t.Provider,{value:s},e.children)}}}]);