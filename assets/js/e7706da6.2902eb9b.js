"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[46314],{41276:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>d,default:()=>x,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var c=t(85893),s=t(11151);function r(n){const e={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.strong,{children:"constantly"})," ",(0,c.jsx)(e.em,{children:"Function"})]}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.strong,{children:"Syntax:"})}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.strong,{children:"constantly"})," ",(0,c.jsx)(e.em,{children:"value \u2192 function"})]}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.strong,{children:"Arguments and Values:"})}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.em,{children:"value"}),"\u2014an ",(0,c.jsx)(e.em,{children:"object"}),"."]}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.em,{children:"function"}),"\u2014a ",(0,c.jsx)(e.em,{children:"function"}),"."]}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.strong,{children:"Description:"})}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.strong,{children:"constantly"})," returns a ",(0,c.jsx)(e.em,{children:"function"})," that accepts any number of arguments, that has no side-effects, and that always returns ",(0,c.jsx)(e.em,{children:"value"}),"."]}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.strong,{children:"Examples:"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-lisp",children:" \n\n\n\n(mapcar (constantly 3) \u2019(a b c d)) *\u2192* (3 3 3 3) \n\n\n\n(defmacro with-vars (vars &body forms) \n\n\n\n\u2018((lambda ,vars ,@forms) ,@(mapcar (constantly nil) vars))) \n\n\n\n*\u2192* WITH-VARS \n\n\n\n(macroexpand \u2019(with-vars (a b) (setq a 3 b (\\* a a)) (list a b))) \n\n\n\n*\u2192* ((LAMBDA (A B) (SETQ A 3 B (\\* A A)) (LIST A B)) NIL NIL), *true* \n\n\n\n\n"})}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.strong,{children:"See Also:"})}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.strong,{children:"identity"})}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.strong,{children:"Notes:"})}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.strong,{children:"constantly"})," could be defined by:"]}),"\n",(0,c.jsx)(e.p,{children:"(defun constantly (object)"}),"\n",(0,c.jsx)(e.p,{children:"#\u2019(lambda (&rest arguments) object))"}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.strong,{children:"every, some, notevery, notany"})})]})}function a(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(r,{...n})}):r(n)}const o={},d="constantly",i={id:"chap-5/f-d-dictionary/constantly",title:"constantly",description:"Expanded Reference: constantly",source:"@site/docs/chap-5/f-d-dictionary/constantly.md",sourceDirName:"chap-5/f-d-dictionary",slug:"/chap-5/f-d-dictionary/constantly",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/constantly",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-5/f-d-dictionary/constantly.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"cond",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/cond"},next:{title:"defconstant",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/defconstant"}},l={},p=[{value:"Expanded Reference: constantly",id:"expanded-reference-constantly",level:2}];function h(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h1,{id:"constantly",children:"constantly"}),"\n","\n","\n",(0,c.jsx)(a,{}),"\n",(0,c.jsx)(e.h2,{id:"expanded-reference-constantly",children:"Expanded Reference: constantly"}),"\n",(0,c.jsx)(e.admonition,{type:"tip",children:(0,c.jsx)(e.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-lisp",children:"(constantly )\n"})})]})}function x(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(h,{...n})}):h(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>o,a:()=>a});var c=t(67294);const s={},r=c.createContext(s);function a(n){const e=c.useContext(r);return c.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:a(n.components),c.createElement(r.Provider,{value:e},n.children)}}}]);