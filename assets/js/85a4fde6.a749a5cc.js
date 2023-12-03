"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[76493],{50159:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>a,default:()=>x,frontMatter:()=>d,metadata:()=>p,toc:()=>l});var i=t(85893),r=t(11151);function c(e){const n={em:"em",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"pprint-dispatch"})," ",(0,i.jsx)(n.em,{children:"Function"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"pprint-dispatch"})," ",(0,i.jsx)(n.em,{children:"object"})," &optional ",(0,i.jsx)(n.em,{children:"table \u2192 function, found-p"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"object"}),"\u2014an ",(0,i.jsx)(n.em,{children:"object"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"table"}),"\u2014a ",(0,i.jsx)(n.em,{children:"pprint dispatch table"}),", or ",(0,i.jsx)(n.strong,{children:"nil"}),". The default is the ",(0,i.jsx)(n.em,{children:"value"})," of ",(0,i.jsx)(n.strong,{children:"*print-pprint-dispatch*"}),". ",(0,i.jsx)(n.em,{children:"function"}),"\u2014a ",(0,i.jsx)(n.em,{children:"function designator"})," ."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"found-p"}),"\u2014a ",(0,i.jsx)(n.em,{children:"generalized boolean"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(n.p,{children:["Retrieves the highest priority function in ",(0,i.jsx)(n.em,{children:"table"})," that is associated with a ",(0,i.jsx)(n.em,{children:"type specifier"})," that matches ",(0,i.jsx)(n.em,{children:"object"}),". The function is chosen by finding all of the ",(0,i.jsx)(n.em,{children:"type specifiers"})," in ",(0,i.jsx)(n.em,{children:"table"})," that match the ",(0,i.jsx)(n.em,{children:"object"})," and selecting the highest priority function associated with any of these ",(0,i.jsx)(n.em,{children:"type specifiers"}),". If there is more than one highest priority function, an arbitrary choice is made. If no ",(0,i.jsx)(n.em,{children:"type specifiers"})," match the ",(0,i.jsx)(n.em,{children:"object"}),", a function is returned that prints ",(0,i.jsx)(n.em,{children:"object"})," using ",(0,i.jsx)(n.strong,{children:"print-object"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.em,{children:"secondary value"}),", ",(0,i.jsx)(n.em,{children:"found-p"}),", is ",(0,i.jsx)(n.em,{children:"true"})," if a matching ",(0,i.jsx)(n.em,{children:"type specifier"})," was found in ",(0,i.jsx)(n.em,{children:"table"}),", or ",(0,i.jsx)(n.em,{children:"false"})," otherwise."]}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.em,{children:"table"})," is ",(0,i.jsx)(n.strong,{children:"nil"}),", retrieval is done in the ",(0,i.jsx)(n.em,{children:"initial pprint dispatch table"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,i.jsxs)(n.p,{children:["The state of the ",(0,i.jsx)(n.em,{children:"table"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,i.jsxs)(n.p,{children:["Should signal an error of ",(0,i.jsx)(n.em,{children:"type"})," ",(0,i.jsx)(n.strong,{children:"type-error"})," if ",(0,i.jsx)(n.em,{children:"table"})," is neither a ",(0,i.jsx)(n.em,{children:"pprint-dispatch-table"})," nor ",(0,i.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,i.jsx)(n.p,{children:"(let ((*print-pretty* t))"}),"\n",(0,i.jsxs)(n.p,{children:["(write object ",":stream"," s))"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"\u2261"})," (funcall (pprint-dispatch object) s object)"]})]})}function s(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}const d={},a="pprint-dispatch",p={id:"chap-22/cc-f-dictionary/pprintdispatch",title:"pprint-dispatch",description:"Expanded Reference: pprint-dispatch",source:"@site/docs/chap-22/cc-f-dictionary/pprintdispatch.md",sourceDirName:"chap-22/cc-f-dictionary",slug:"/chap-22/cc-f-dictionary/pprintdispatch",permalink:"/cl-language-reference/docs/chap-22/cc-f-dictionary/pprintdispatch",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-22/cc-f-dictionary/pprintdispatch.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"formatter",permalink:"/cl-language-reference/docs/chap-22/cc-f-dictionary/formatter"},next:{title:"pprint-exit-if-list-exhausted",permalink:"/cl-language-reference/docs/chap-22/cc-f-dictionary/pprintexitiflistexhausted"}},h={},l=[{value:"Expanded Reference: pprint-dispatch",id:"expanded-reference-pprint-dispatch",level:2}];function o(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"pprint-dispatch",children:"pprint-dispatch"}),"\n","\n","\n",(0,i.jsx)(s,{}),"\n",(0,i.jsx)(n.h2,{id:"expanded-reference-pprint-dispatch",children:"Expanded Reference: pprint-dispatch"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:"(pprint-dispatch )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>s});var i=t(67294);const r={},c=i.createContext(r);function s(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);