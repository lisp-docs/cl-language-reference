"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[90655],{29652:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=t(85893),i=t(11151);function s(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components},{ClLinks:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"interactive-stream-p"})," ",(0,r.jsx)(t,{styled:!0,term:"function",children:(0,r.jsx)("i",{children:"Function"})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(t,{styled:!0,term:"interactive-stream-p",children:(0,r.jsx)("b",{children:"interactive-stream-p"})})," ",(0,r.jsx)(n.em,{children:"stream \u2192 generalized-boolean"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(t,{styled:!0,term:"stream",children:(0,r.jsx)("i",{children:"stream"})}),"\u2014a ",(0,r.jsx)(t,{styled:!0,term:"stream",children:(0,r.jsx)("i",{children:"stream"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"generalized-boolean"}),"\u2014a ",(0,r.jsx)(n.em,{children:"generalized boolean"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(n.p,{children:["Returns ",(0,r.jsx)(t,{styled:!0,term:"true",children:(0,r.jsx)("i",{children:"true"})})," if ",(0,r.jsx)(t,{styled:!0,term:"stream",children:(0,r.jsx)("i",{children:"stream"})})," is an ",(0,r.jsx)(n.em,{children:"interactive stream"}),"; otherwise, returns ",(0,r.jsx)(t,{styled:!0,term:"false",children:(0,r.jsx)("i",{children:"false"})}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:'\n(when (> measured limit) \n  (let ((error (round (\\* (- measured limit) 100) \n\t\t      limit))) \n    (unless (if (interactive-stream-p \\*query-io\\*) \n\t\t(yes-or-no-p "The frammis is out of tolerance by ~D%.~@ \nIs it safe to proceed? " error) \n\t\t(< error 15)) ;15% is acceptable \n      (error "The frammis is out of tolerance by ~D%." error)))) \n\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,r.jsxs)(n.p,{children:["Should signal an error of ",(0,r.jsx)(t,{styled:!0,term:"type",children:(0,r.jsx)("i",{children:"type"})})," ",(0,r.jsx)(t,{styled:!0,term:"type-error",children:(0,r.jsx)("b",{children:"type-error"})})," if ",(0,r.jsx)(t,{styled:!0,term:"stream",children:(0,r.jsx)("i",{children:"stream"})})," is not a ",(0,r.jsx)(t,{styled:!0,term:"stream",children:(0,r.jsx)("i",{children:"stream"})}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,r.jsx)(n.p,{children:"Section 21.1 (Stream Concepts)"})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}const a={title:"interactive-stream-p"},o="interactive-stream-p",l={id:"chap-21/cb-c-dictionary/interactive-stream-p_function",title:"interactive-stream-p",description:"Expanded Reference: interactive-stream-p",source:"@site/docs/chap-21/cb-c-dictionary/interactive-stream-p_function.md",sourceDirName:"chap-21/cb-c-dictionary",slug:"/chap-21/cb-c-dictionary/interactive-stream-p_function",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/interactive-stream-p_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-21/cb-c-dictionary/interactive-stream-p_function.md",tags:[],version:"current",frontMatter:{title:"interactive-stream-p"},sidebar:"tutorialSidebar",previous:{title:"get-output-stream-string",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/get-output-stream-string_function"},next:{title:"listen",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/listen_function"}},d={},p=[{value:"Expanded Reference: interactive-stream-p",id:"expanded-reference-interactive-stream-p",level:2}];function m(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"interactive-stream-p",children:"interactive-stream-p"}),"\n","\n","\n",(0,r.jsx)(c,{}),"\n",(0,r.jsx)(n.h2,{id:"expanded-reference-interactive-stream-p",children:"Expanded Reference: interactive-stream-p"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(interactive-stream-p )\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>c});var r=t(67294);const i={},s=r.createContext(i);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);