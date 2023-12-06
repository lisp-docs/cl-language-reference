"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[63048],{8224:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>x,frontMatter:()=>l,metadata:()=>a,toc:()=>h});var c=s(85893),r=s(11151);function t(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"push"})," ",(0,c.jsx)(n.em,{children:"Macro"})]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"push"})," ",(0,c.jsx)(n.em,{children:"item place \u2192 new-place-value"})]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.em,{children:"item"}),"\u2014an ",(0,c.jsx)(n.em,{children:"object"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.em,{children:"place"}),"\u2014a ",(0,c.jsx)(n.em,{children:"place"}),", the ",(0,c.jsx)(n.em,{children:"value"})," of which may be any ",(0,c.jsx)(n.em,{children:"object"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.em,{children:"new-place-value"}),"\u2014a ",(0,c.jsx)(n.em,{children:"list"})," (the new ",(0,c.jsx)(n.em,{children:"value"})," of ",(0,c.jsx)(n.em,{children:"place"}),")."]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Description:"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"push"})," prepends ",(0,c.jsx)(n.em,{children:"item"})," to the ",(0,c.jsx)(n.em,{children:"list"})," that is stored in ",(0,c.jsx)(n.em,{children:"place"}),", stores the resulting ",(0,c.jsx)(n.em,{children:"list"})," in ",(0,c.jsx)(n.em,{children:"place"}),", and returns the ",(0,c.jsx)(n.em,{children:"list"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:["For information about the ",(0,c.jsx)(n.em,{children:"evaluation"})," of ",(0,c.jsx)(n.em,{children:"subforms"})," of ",(0,c.jsx)(n.em,{children:"place"}),", see Section 5.1.1.1 (Evaluation of Subforms to Places)."]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-lisp",children:" \n\n(setq llst \u2019(nil)) \u2192 (NIL) \n\n(push 1 (car llst)) \u2192 (1) \n\nllst \u2192 ((1)) \n\n(push 1 (car llst)) \u2192 (1 1) \n\nllst \u2192 ((1 1)) \n\n(setq x \u2019(a (b c) d)) \u2192 (A (B C) D) \n\n(push 5 (cadr x)) \u2192 (5 B C) \n\nx \u2192 (A (5 B C) D) \n\n\n"})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Side Effects:"})}),"\n",(0,c.jsxs)(n.p,{children:["The contents of ",(0,c.jsx)(n.em,{children:"place"})," are modified."]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"pop"}),", ",(0,c.jsx)(n.strong,{children:"pushnew"}),", Section 5.1 (Generalized Reference)"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,c.jsxs)(n.p,{children:["The effect of (push ",(0,c.jsx)(n.em,{children:"item place"}),") is equivalent to"]}),"\n",(0,c.jsxs)(n.p,{children:["(setf place (cons ",(0,c.jsx)(n.em,{children:"item place"}),"))"]}),"\n",(0,c.jsxs)(n.p,{children:["except that the ",(0,c.jsx)(n.em,{children:"subforms"})," of ",(0,c.jsx)(n.em,{children:"place"})," are evaluated only once, and ",(0,c.jsx)(n.em,{children:"item"})," is evaluated before ",(0,c.jsx)(n.em,{children:"place"}),"."]})]})}function i(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(t,{...e})}):t(e)}const l={},d="push",a={id:"chap-14/be-c-dictionary/push",title:"push",description:"Expanded Reference: push",source:"@site/docs/chap-14/be-c-dictionary/push.md",sourceDirName:"chap-14/be-c-dictionary",slug:"/chap-14/be-c-dictionary/push",permalink:"/cl-language-reference/docs/chap-14/be-c-dictionary/push",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-14/be-c-dictionary/push.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"pop",permalink:"/cl-language-reference/docs/chap-14/be-c-dictionary/pop"},next:{title:"pushnew",permalink:"/cl-language-reference/docs/chap-14/be-c-dictionary/pushnew"}},o={},h=[{value:"Expanded Reference: push",id:"expanded-reference-push",level:2}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"push",children:"push"}),"\n","\n","\n",(0,c.jsx)(i,{}),"\n",(0,c.jsx)(n.h2,{id:"expanded-reference-push",children:"Expanded Reference: push"}),"\n",(0,c.jsx)(n.admonition,{type:"tip",children:(0,c.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-lisp",children:"(push )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(p,{...e})}):p(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>i});var c=s(67294);const r={},t=c.createContext(r);function i(e){const n=c.useContext(t);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),c.createElement(t.Provider,{value:n},e.children)}}}]);