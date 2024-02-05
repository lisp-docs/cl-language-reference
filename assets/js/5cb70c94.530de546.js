"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[590],{18781:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var n=t(85893),r=t(11151);const i={},c="defmethod expansion",a={id:"meta-object-protocol/dictionary/fig-defmethod-2",title:"defmethod expansion",description:"------------------------------------------------------------------------",source:"@site/docs/meta-object-protocol/dictionary/fig-defmethod-2.md",sourceDirName:"meta-object-protocol/dictionary",slug:"/meta-object-protocol/dictionary/fig-defmethod-2",permalink:"/cl-language-reference/meta-object-protocol/dictionary/fig-defmethod-2",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/main/docs/meta-object-protocol/dictionary/fig-defmethod-2.md",tags:[],version:"current",lastUpdatedBy:"Daniel Nussenbaum",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"defmethod expansion",permalink:"/cl-language-reference/meta-object-protocol/dictionary/fig-defmethod-1"},next:{title:"finalize-inheritance-forward-referenced-class",permalink:"/cl-language-reference/meta-object-protocol/dictionary/finalize-inheritance-forward-referenced-class"}},d={},s=[];function l(e){const o={a:"a",code:"code",em:"em",h1:"h1",hr:"hr",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"defmethod-expansion",children:"defmethod expansion"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-lisp",children:"    (let ((gf (ensure-generic-function 'move)))\n      (make-method-lambda\n        gf\n        (class-prototype (generic-function-method-class gf))\n        '(lambda (p l &optional (visiblyp t) &key color)\n           (set-to-origin p)\n           (when visiblyp (show-move p 0 color)))\n       environment))\n"})}),"\n",(0,n.jsx)(o.hr,{}),"\n",(0,n.jsxs)(o.p,{children:["During macro-expansion of the ",(0,n.jsx)(o.code,{children:"defmethod"})," macro shown in ",(0,n.jsx)(o.a,{href:"/meta-object-protocol/fig-defmethod-1",children:"this figure"}),", code similar to this would be run to produce the method lambda and additional initargs. In this example, ",(0,n.jsx)(o.em,{children:"environment"})," is the macroexpansion environment of the ",(0,n.jsx)(o.code,{children:"defmethod"})," macro form."]})]})}function m(e={}){const{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,o,t)=>{t.d(o,{Z:()=>a,a:()=>c});var n=t(67294);const r={},i=n.createContext(r);function c(e){const o=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(i.Provider,{value:o},e.children)}}}]);